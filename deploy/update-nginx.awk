{
  input_lines[NR] = $0
}

function has_server_name(block, expected, lines, count, i, line) {
  count = split(block, lines, "\n")
  for (i = 1; i <= count; i++) {
    line = lines[i]
    sub(/[[:space:]]*#.*/, "", line)
    if (line !~ /^[[:space:]]*server_name[[:space:]]+/) {
      continue
    }
    sub(/^[[:space:]]*server_name[[:space:]]+/, "", line)
    sub(/[[:space:]]*;.*/, "", line)
    gsub(/[[:space:]]+/, " ", line)
    sub(/^ /, "", line)
    sub(/ $/, "", line)
    if (line == expected) {
      return 1
    }
  }
  return 0
}

END {
  for (i = 1; i <= NR; i++) {
    line = input_lines[i]
    if (!in_server && line ~ /^[[:space:]]*server[[:space:]]*\{/) {
      in_server = 1
      depth = 0
      block = ""
    }

    if (in_server) {
      block = block line "\n"
      brace_line = line
      depth += gsub(/\{/, "", brace_line)
      brace_line = line
      depth -= gsub(/\}/, "", brace_line)

      if (depth == 0) {
        segment_count++
        segments[segment_count] = block
        if (has_server_name(block, "greenkube.cloud www.greenkube.cloud") || has_server_name(block, "www.greenkube.cloud greenkube.cloud")) {
          segment_kind[segment_count] = "legacy"
          legacy_count++
        } else if (has_server_name(block, "greenkube.cloud")) {
          segment_kind[segment_count] = "apex"
          apex_count++
        } else if (has_server_name(block, "www.greenkube.cloud")) {
          segment_kind[segment_count] = "www"
          www_count++
        } else if (has_server_name(block, "docs.greenkube.cloud")) {
          segment_kind[segment_count] = "docs"
          docs_count++
        }
        in_server = 0
        block = ""
      }
      continue
    }

    segment_count++
    segments[segment_count] = line "\n"
    blank_segment[segment_count] = line ~ /^[[:space:]]*$/
  }

  if (in_server) {
    print "Incomplete Nginx server block" > "/dev/stderr"
    exit 1
  }

  legacy_layout = legacy_count == 1 && apex_count == 0 && www_count == 0
  managed_layout = legacy_count == 0 && apex_count == 1 && www_count == 1
  if ((!legacy_layout && !managed_layout) || docs_count > 1) {
    print "Expected one legacy apex/www block or one split apex + www pair" > "/dev/stderr"
    exit 1
  }

  for (i = 1; i <= segment_count; i++) {
    if (segment_kind[i] != "") {
      if (!replacement_written) {
        while ((getline replacement_line < replacement) > 0) {
          print replacement_line
          replacement_line_count++
        }
        close(replacement)
        replacement_written = 1
      }
    } else if (blank_segment[i]) {
      previous = i - 1
      while (previous > 0 && blank_segment[previous]) {
        previous--
      }
      following = i + 1
      while (following <= segment_count && blank_segment[following]) {
        following++
      }
      if (segment_kind[previous] != "" && segment_kind[following] != "") {
        continue
      }
      printf "%s", segments[i]
    } else {
      printf "%s", segments[i]
    }
  }

  if (!replacement_written || replacement_line_count == 0) {
    print "Replacement Nginx configuration is empty or unavailable" > "/dev/stderr"
    exit 1
  }
}
