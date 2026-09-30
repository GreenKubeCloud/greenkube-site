{
  if (!in_server && $0 ~ /^[[:space:]]*server[[:space:]]*\{/) {
    in_server = 1
    depth = 0
    block = ""
  }

  if (in_server) {
    block = block $0 "\n"
    line = $0
    depth += gsub(/\{/, "", line)
    line = $0
    depth -= gsub(/\}/, "", line)

    if (depth == 0) {
      if (block ~ /server_name[[:space:]]+greenkube\.cloud[[:space:]]+www\.greenkube\.cloud[[:space:]]*;/) {
        if (replaced) {
          print "More than one apex/www server block found" > "/dev/stderr"
          exit 1
        }
        while ((getline replacement_line < replacement) > 0) {
          print replacement_line
        }
        close(replacement)
        replaced = 1
      } else {
        printf "%s", block
      }
      in_server = 0
      block = ""
    }
    next
  }

  print
}

END {
  if (in_server || replaced != 1) {
    print "Expected exactly one apex/www server block" > "/dev/stderr"
    exit 1
  }
}
