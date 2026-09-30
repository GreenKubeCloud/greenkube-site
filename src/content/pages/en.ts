import type { PageContent, PageId } from '../types';

export const pages: Record<PageId, PageContent> = {
  home: {
    id: 'home',
    title: 'Open-source Kubernetes visibility and optimization | GreenKube',
    description:
      'Explore GreenKube 0.3.0: self-hosted Kubernetes cost, energy and carbon visibility, dashboards and reporting, with estimates and their limits made clear.',
    hero: {
      eyebrow: 'OPEN-SOURCE KUBERNETES OPTIMIZATION',
      title: 'Kubernetes optimization, from evidence to pull request.',
      summary:
        'GreenKube is an open-source, self-hosted project for understanding Kubernetes cost, energy and carbon. Release 0.3.0 provides estimates, dashboards and reporting with Prometheus and Grafana integration.',
      note: 'Evidence ranking, GitOps pull-request automation, apply verification and measured-outcome features are Preview on dev, not capabilities of release 0.3.0.',
      workflow: [
        {
          title: 'Telemetry',
          description:
            'Review Kubernetes cost, energy and carbon estimates through the released Prometheus and Grafana integration.',
          status: 'Available in 0.3.0',
        },
        {
          title: 'Recommendation and evidence',
          description:
            'Evidence gathering and recommendation ranking are not part of the 0.3.0 release.',
          status: 'Preview on dev',
        },
        {
          title: 'Git diff and pull request',
          description:
            'The GitOps bot is a development preview for supported manifest changes; no generally available PR scope is claimed.',
          status: 'Preview on dev',
        },
        {
          title: 'Apply and verify',
          description:
            'Apply detection and post-change verification are not released capabilities.',
          status: 'Preview on dev',
        },
        {
          title: 'Measured outcome',
          description:
            'Measured-outcome attribution is in development and is not a 0.3.0 savings claim.',
          status: 'Preview on dev',
        },
      ],
      actions: [
        { label: 'Try the demo', href: 'https://demo.greenkube.cloud/' },
        {
          label: 'View the project on GitHub',
          href: 'https://github.com/GreenKubeCloud/GreenKube',
        },
        { label: 'Install with Helm', href: 'https://docs.greenkube.cloud/' },
      ],
    },
    sections: [
      {
        id: 'release',
        presentation: 'prose',
        eyebrow: 'Release 0.3.0',
        title: 'Visibility first; estimates with context.',
        introduction:
          'The released product helps teams inspect cost, energy and carbon estimates for Kubernetes and review them through dashboards and reports.',
        paragraphs: [
          'GreenKube is Apache-2.0 licensed and designed to be self-hosted. Prometheus and Grafana are supported parts of the released integration story; consult the versioned documentation for setup and data requirements.',
          'A displayed estimate is not a direct measurement, a cloud invoice, or a promise of savings. The result depends on available telemetry, source coverage and configuration.',
        ],
        links: [
          {
            label: 'Read the documentation',
            href: 'https://docs.greenkube.cloud/',
          },
          {
            label: 'Review the 0.3.0 release',
            href: 'https://github.com/GreenKubeCloud/GreenKube/releases',
          },
        ],
      },
      {
        id: 'workflow',
        presentation: 'steps',
        eyebrow: 'Product direction',
        title: 'A path from observation to a reviewed change.',
        introduction:
          'The longer-term workflow is designed around operator review. The stages below do not all ship in 0.3.0.',
        items: [
          {
            title: 'Observe',
            description:
              'Use Kubernetes telemetry and supported Prometheus/Grafana integration to inspect available cost, energy and carbon views.',
            status: 'Available in 0.3.0',
          },
          {
            title: 'Prioritize with evidence',
            description:
              'A recommendation evidence and ranking engine is under development; it is not a released 0.3.0 capability.',
            status: 'Preview on dev',
          },
          {
            title: 'Propose a Git change',
            description:
              'The GitOps pull-request bot is a development preview. It is not a generally available way to change a cluster.',
            status: 'Preview on dev',
          },
          {
            title: 'Check what happened',
            description:
              'Apply detection, verification and measured-outcome attribution remain development-preview work, not 0.3.0 savings reporting.',
            status: 'Preview on dev',
          },
        ],
      },
      {
        id: 'outcomes',
        presentation: 'table',
        eyebrow: 'Interpretation',
        title: 'Keep estimates separate from outcomes.',
        introduction:
          'A view of projected impact and a verified result are different kinds of information. GreenKube 0.3.0 provides estimates and reports; it does not guarantee or claim measured savings.',
        table: {
          caption: 'What the terms mean on this site',
          headers: ['Term', 'Meaning'],
          rows: [
            [
              'Projected',
              'Potential impact estimated before a change. A recommendation-linked projection is Preview on dev, not a generally released 0.3.0 outcome.',
            ],
            [
              'Applied',
              'A change observed in an environment; automated apply detection is Preview on dev.',
            ],
            [
              'Measured',
              'Post-change signals observed over time. Outcome attribution is Preview on dev and is not an invoice or physical energy measurement.',
            ],
            [
              'Verified',
              'An outcome checked against defined evidence or health gates. The verification workflow is Preview on dev and does not guarantee savings.',
            ],
            [
              'Estimate',
              'A modelled or allocated value based on available telemetry and configured inputs; it is not a direct physical measurement.',
            ],
            [
              'Savings',
              'Not guaranteed. A lower request or estimate does not by itself prove a lower bill or lower energy use.',
            ],
          ],
        },
      },
      {
        id: 'dimensions',
        presentation: 'cards',
        title: 'Three connected operator concerns.',
        introduction:
          'The released views support investigation across these dimensions. They do not turn every opportunity into an automated action.',
        items: [
          {
            title: 'Cost',
            description:
              'Review cost visibility and reported estimates. Treat allocation as an analytical view, not an invoice or billing guarantee.',
          },
          {
            title: 'Energy and carbon',
            description:
              'Inspect energy and carbon estimates with their input coverage, source assumptions and uncertainty in mind.',
          },
          {
            title: 'Capacity',
            description:
              'Use resource context to inform operator investigation. Automated capacity recommendations and ranking are Preview on dev.',
            status: 'Recommendations: Preview on dev',
          },
        ],
      },
      {
        id: 'data',
        presentation: 'data-flow',
        eyebrow: 'Integration boundary',
        title: 'Follow the data, not a headline number.',
        introduction:
          'The released integration story includes Kubernetes, Prometheus and Grafana. Other providers and model inputs must be checked against the documentation for the exact version and configuration.',
        code: {
          filename: 'release-scope.txt',
          lines: [
            'Kubernetes + Prometheus',
            '          ↓',
            'GreenKube cost, energy and carbon estimates',
            '          ↓',
            'Dashboards and reports (Grafana integration)',
            '',
            'Recommendation ranking, GitOps PRs and verification',
            '          └── Preview on dev',
          ],
        },
        links: [{ label: 'Explore carbon inputs and limits', page: 'carbon' }],
      },
      {
        id: 'open-source',
        presentation: 'callout',
        eyebrow: 'Open source by default',
        title: 'Self-host the project; inspect the source.',
        introduction:
          'GreenKube is open source under Apache-2.0 and is designed for self-hosting in Kubernetes. The core project is not gated behind a commercial contract.',
        links: [
          {
            label: 'View the source',
            href: 'https://github.com/GreenKubeCloud/GreenKube',
          },
          {
            label: 'Read the license',
            href: 'https://github.com/GreenKubeCloud/GreenKube/blob/main/LICENSE',
          },
          {
            label: 'Read the documentation',
            href: 'https://docs.greenkube.cloud/',
          },
        ],
      },
      {
        id: 'services',
        presentation: 'prose',
        title: 'Optional help, separate from the project.',
        paragraphs: [
          'Teams that want human support can discuss a Kubernetes optimization assessment, implementation work or ongoing review. The scope should reflect the telemetry, release capabilities and change process actually available to the team.',
          'Services are optional. They do not unlock core software features, and the open-source project remains available without a services engagement.',
        ],
        links: [
          {
            label: 'Discuss a question with the community',
            href: 'https://github.com/GreenKubeCloud/GreenKube/discussions',
          },
          { label: 'Explore optional support', page: 'services' },
        ],
      },
    ],
  },
  carbon: {
    id: 'carbon',
    title: 'Kubernetes carbon and energy estimates | GreenKube',
    description:
      'Understand how GreenKube presents Kubernetes energy and carbon estimates, including CPU-proxy limits, source coverage, fallbacks, uncertainty and allocation.',
    hero: {
      eyebrow: 'CARBON METHODOLOGY',
      title: 'Carbon estimates, with their limits in view.',
      summary:
        'GreenKube 0.3.0 provides Kubernetes energy and carbon visibility through estimates, dashboards and reporting. The operational energy model is CPU-based; its outputs are not direct hardware or pod-level physical measurements.',
      note: 'Estimates are modelled and allocated. Source availability, fallback behavior and exact defaults are version- and configuration-specific; use the canonical documentation for implementation details.',
      actions: [
        {
          label: 'Read the carbon documentation',
          href: 'https://docs.greenkube.cloud/',
        },
        { label: 'See the method overview', page: 'method' },
      ],
    },
    sections: [
      {
        id: 'what-is-estimated',
        presentation: 'prose',
        eyebrow: 'Boundary',
        title: 'An estimate is not a physical measurement.',
        introduction:
          'Separate operational energy estimation, carbon-intensity attribution, workload allocation, cost allocation and any lifecycle impact represented by supported inputs.',
        paragraphs: [
          'The current operational model is CPU-based. CPU telemetry is a proxy used by a model; it is not equivalent to reading power at the server, node, container or pod. GreenKube does not claim complete physical energy accounting for every resource class.',
          'Workload-level CO₂e is an allocation estimate, not a direct measurement of electricity consumed by an individual pod. Shared infrastructure and incomplete attribution can affect how a total is distributed.',
          'Cost estimates are a separate allocation view. Neither an allocated cost nor a carbon estimate is an invoice, an assurance statement or proof that a proposed change reduced consumption.',
        ],
      },
      {
        id: 'inputs',
        presentation: 'table',
        eyebrow: 'Sources and inputs',
        title: 'What an input can—and cannot—tell you.',
        introduction:
          'The released methodology documentation names the sources below. Whether a provider API has usable data still depends on configuration, credentials and coverage. The availability column distinguishes built-in inputs from selectable or optional sources.',
        table: {
          caption: 'Documented sources, roles, fallbacks and uncertainty',
          headers: [
            'Source',
            'Role and availability',
            'Fallback or missing-data behavior',
            'Uncertainty to consider',
          ],
          rows: [
            [
              'Prometheus',
              'Released CPU telemetry input to the operational-energy model; other metrics may be collected but are not factored into that model.',
              'Coverage depends on the configured scrape data and selected time window. Defaults used by the model are marked estimated with reasons.',
              'Sampling gaps and the CPU-to-power proxy. Memory, network, disk and GPU are not included in the energy model.',
            ],
            [
              'Kubernetes API',
              'Node metadata and pod specifications provide workload and instance context for estimates and allocation.',
              'Missing or unsupported context can limit attribution; consult the release documentation for supported fields.',
              'Shared nodes, incomplete ownership and mismatch between workload context and physical infrastructure.',
            ],
            [
              'Electricity Maps',
              'Default grid-intensity provider for location- and time-dependent carbon factors.',
              'If provider data is unavailable, documented per-zone defaults are used; the global fallback is 500 gCO₂e/kWh when no zone default exists.',
              'Zone mapping, API availability, source freshness and the difference between a regional average and actual electricity supply.',
            ],
            [
              'Wattnet',
              'Optional alternative grid-intensity provider selectable in release 0.3.0; documented for 52 European zones at 15-minute resolution.',
              'Provider selection and credentials are configuration-dependent; use the documented fallback behavior if data is unavailable.',
              'Geographic coverage is limited, and temporal resolution and source methodology differ from other providers.',
            ],
            [
              'Built-in CCF profiles and PUE',
              'Static instance power profiles inform the CPU model; provider PUE profiles represent facility overhead.',
              'For an unknown instance, documented fallback values are PUE 1.3, 1 vCore, 1 W/vCore minimum and 10 W/vCore maximum. The result is marked estimated.',
              'Profiles are approximations, PUE is provider-specific, and a fallback profile may not match the hardware or facility.',
            ],
            [
              'Boavizta API',
              'Optional instance lifecycle/embodied-impact input; results are cached and kept separate from operational energy.',
              'When instance data is unavailable, the documented fallback is 100 kg embodied impact with a 4-year hardware lifespan assumption.',
              'Source coverage and the lifespan/allocation assumptions; this is not a complete lifecycle inventory.',
            ],
            [
              'OpenCost',
              'Cost-allocation input for cost visibility, separate from the energy and carbon equations.',
              'The documentation says unavailable OpenCost data can result in a cost value of zero; treat that as missing coverage, not verified zero cost.',
              'Shared costs, allocation rules and differences from provider billing.',
            ],
          ],
        },
        links: [
          {
            label: 'Read the energy-estimation methodology',
            href: 'https://docs.greenkube.cloud/architecture/energy-estimation/',
          },
          {
            label: 'Read the Wattnet provider guide',
            href: 'https://docs.greenkube.cloud/guide/wattnet/',
          },
          {
            label: 'Open the Boavizta API reference',
            href: 'https://doc.api.boavizta.org/',
          },
          {
            label: 'Read Electricity Maps API documentation',
            href: 'https://docs.electricitymaps.com/',
          },
          {
            label: 'Read the Cloud Carbon Footprint methodology',
            href: 'https://www.cloudcarbonfootprint.org/docs/methodology',
          },
          {
            label: 'Read OpenCost documentation',
            href: 'https://www.opencost.io/',
          },
        ],
      },
      {
        id: 'energy-model',
        presentation: 'table',
        eyebrow: 'Energy model',
        title: 'CPU is a proxy for node power—not a pod meter.',
        introduction:
          'The released model linearly interpolates between idle and maximum instance-profile power using CPU utilization. It does not use memory, network, disk or GPU metrics in the energy calculation; GPU workloads are not supported by that model.',
        table: {
          caption: 'Documented operational-energy model',
          headers: ['Step', 'Calculation', 'Interpretation'],
          rows: [
            [
              'Idle and maximum power',
              'P_idle = min_watts × vCPUs; P_max = max_watts × vCPUs',
              'The profile values are per-vCPU estimates for the instance type or configured fallback.',
            ],
            [
              'Node power',
              'P_node = P_idle + (P_max − P_idle) × U',
              'U is the CPU utilization ratio from 0 to 1; linear interpolation is an approximation.',
            ],
            [
              'Node energy over time',
              'E_node = P_node × duration_seconds',
              'The result is energy in joules for the selected observation window.',
            ],
            [
              'Pod allocation',
              'E_pod = (cpu_pod / cpu_total_node) × E_node',
              'Node energy is allocated by CPU usage share; this does not measure a pod’s physical electricity use.',
            ],
          ],
        },
        paragraphs: [
          'CPU utilization, profile quality, observation windows and pod-to-node allocation all introduce uncertainty. Treat the output as a modelled estimate, not a direct hardware reading.',
        ],
      },
      {
        id: 'carbon-model',
        presentation: 'table',
        eyebrow: 'Carbon and lifecycle inputs',
        title: 'Keep operational and embodied estimates distinct.',
        introduction:
          'The documented equations show how the implementation combines energy with carbon intensity and PUE, and how optional embodied-impact data is allocated. They do not turn a workload estimate into a physical measurement or complete carbon inventory.',
        table: {
          caption: 'Documented carbon-estimation equations',
          headers: ['Component', 'Documented calculation', 'Boundary'],
          rows: [
            [
              'Operational CO₂e',
              'CO₂e_g = E_joules / 3,600,000 × intensity_gCO₂e_per_kWh × PUE',
              'Uses modelled energy and a configured or fallback grid-intensity factor; PUE accounts for facility overhead.',
            ],
            [
              'Embodied impact',
              '(GWP_kg × 1,000 / lifespan_hours) × (pod_duration_seconds / 3,600) × (pod_CPU_cores / node_CPU_cores)',
              'Uses Boavizta instance data where available; documented fallback is 100 kg GWP and a 4-year lifespan.',
            ],
            [
              'Combined total',
              'Operational estimate plus embodied estimate where the latter is available',
              'Not a complete inventory of every cloud service, lifecycle stage or organizational emission.',
            ],
          ],
        },
        paragraphs: [
          'Provider PUE profiles are configuration inputs, not measurements of every facility. The canonical documentation currently lists different OVH values in separate methodology sections, so this page avoids publishing provider-specific numbers until those references are reconciled.',
        ],
      },
      {
        id: 'pipeline',
        presentation: 'data-flow',
        eyebrow: 'Aggregation',
        title: 'From telemetry to an allocated estimate.',
        introduction:
          'This is a conceptual view of data dependencies, not a precision instrument or a complete physical inventory. The presence of an input depends on documented support and configuration.',
        code: {
          filename: 'estimate-flow.txt',
          lines: [
            'Prometheus telemetry + Kubernetes context',
            'CCF instance profile + provider PUE',
            'Electricity Maps / Wattnet grid intensity',
            'Boavizta embodied data where available',
            'OpenCost allocation (separate cost view)',
            '                 ↓',
            '       Normalize available inputs',
            '                 ↓',
            '       Allocate to workloads',
            '                 ↓',
            '       Energy / CO₂e estimates',
          ],
        },
        paragraphs: [
          'The CPU-based operational model is a proxy. Carbon intensity and any supported infrastructure or lifecycle inputs contribute assumptions; workload allocation distributes model outputs rather than measuring each workload directly.',
          'A missing source is not evidence of zero energy or zero emissions. Read the release documentation to determine whether a configured fallback is used, an estimate is unavailable, or coverage is reduced.',
        ],
      },
      {
        id: 'fallbacks',
        presentation: 'steps',
        eyebrow: 'Missing data',
        title: 'Treat fallback behavior as part of the result.',
        introduction:
          'Fallbacks are not interchangeable defaults. The supported behavior must be checked for the exact release and source configuration.',
        items: [
          {
            title: 'Grid-intensity fallback',
            description:
              'If the grid-intensity API is unavailable, GreenKube uses a built-in per-zone default; if no zone value exists, the documented global fallback is 500 gCO₂e/kWh.',
          },
          {
            title: 'Unknown instance profile',
            description:
              'The documented defaults are PUE 1.3, 1 vCore, 1 W/vCore minimum and 10 W/vCore maximum. Metrics are flagged is_estimated with estimation_reasons.',
          },
          {
            title: 'Missing embodied-impact data',
            description:
              'The documented Boavizta fallback is 100 kg embodied impact per instance with a 4-year hardware lifespan assumption; the result remains modelled.',
          },
          {
            title: 'Missing cost allocation',
            description:
              'The technical documentation notes that unavailable OpenCost data can appear as cost zero. That is not proof that a workload has no cost.',
          },
        ],
      },
      {
        id: 'uncertainty',
        presentation: 'callout',
        eyebrow: 'Limitations',
        title: 'Read the model, not just the output.',
        paragraphs: [
          'A lower CPU request does not automatically mean lower electricity consumption. A lower request may improve capacity efficiency without immediately reducing the cloud invoice.',
          'Workload-level CO₂e is an allocation estimate, not a direct measurement of electricity consumed by an individual pod. Results depend on source quality, freshness, geographic scope, model assumptions and allocation.',
          'Memory, network, disk and GPU metrics are not included in the current energy model; GPU workloads are not supported by it. Some resource classes and orphaned-resource opportunities are cost-focused rather than full energy measurements. Do not infer a Kepler or other direct energy-telemetry integration.',
        ],
      },
      {
        id: 'example-calculation',
        presentation: 'table',
        eyebrow: 'Illustrative arithmetic',
        title: 'A worked example using documented fallback values.',
        introduction:
          'This is an illustrative calculation, not a benchmark or measured workload. The fallback profile, PUE and global intensity are documented defaults; 50% CPU utilization held for one hour is an example input, not a GreenKube default.',
        table: {
          caption: 'One-node operational estimate for the example window',
          headers: ['Step', 'Inputs', 'Result'],
          rows: [
            ['Estimated node power', '1 W + (10 W − 1 W) × 0.5', '5.5 W'],
            [
              'Energy for one hour',
              '5.5 W × 3,600 seconds',
              '19,800 J = 0.0055 kWh',
            ],
            [
              'Operational CO₂e estimate',
              '0.0055 kWh × 500 gCO₂e/kWh × 1.3 PUE',
              '3.575 gCO₂e for the modelled node window',
            ],
          ],
        },
        paragraphs: [
          'The result uses the global intensity fallback and the unknown-instance profile defaults documented for the release. It is not a pod-specific physical measurement, does not include an embodied-impact component, and does not establish savings. Pod values are allocated from node energy by CPU usage share.',
        ],
      },
      {
        id: 'methodology',
        presentation: 'prose',
        eyebrow: 'Further reading',
        title: 'Use the versioned methodology for exact behavior.',
        introduction:
          'Model equations and fallback values on this page are transcribed from the published methodology documentation. Provider data, configuration and source coverage still vary by deployment.',
        paragraphs: [
          'For the implementation details that apply to a deployment, use the canonical documentation and verify its source list, configuration options, fallback rules and model boundaries against the released version.',
        ],
        links: [
          {
            label: 'Read the technical energy-estimation methodology',
            href: 'https://docs.greenkube.cloud/architecture/energy-estimation/',
          },
          {
            label: 'Read the carbon-tracking guide',
            href: 'https://docs.greenkube.cloud/features/carbon-tracking/',
          },
          {
            label: 'Read the Wattnet provider guide',
            href: 'https://docs.greenkube.cloud/guide/wattnet/',
          },
          { label: 'Explore the general method', page: 'method' },
        ],
      },
    ],
  },
  'use-cases': {
    id: 'use-cases',
    title: 'Kubernetes cost, energy and carbon use cases | GreenKube',
    description:
      'Explore operator workflows for Kubernetes cost visibility and energy and carbon estimates, with clear release boundaries and development previews.',
    hero: {
      eyebrow: 'OPERATOR WORKFLOWS',
      title: 'Start with visibility. Keep action reviewable.',
      summary:
        'Use GreenKube 0.3.0 to inspect Kubernetes cost, energy and carbon estimates through dashboards and reporting. Use the documented Prometheus and Grafana integration, and treat estimates as estimates.',
      note: 'Recommendation ranking, the GitOps PR bot, apply verification, measured outcomes and real VPA/Karpenter connectors are Preview on dev—not released 0.3.0 capabilities.',
      actions: [
        { label: 'Try the demo', href: 'https://demo.greenkube.cloud/' },
        {
          label: 'Read the documentation',
          href: 'https://docs.greenkube.cloud/',
        },
      ],
    },
    sections: [
      {
        id: 'rightsizing',
        presentation: 'outcomes',
        eyebrow: 'Resource requests',
        title: 'Investigate rightsizing with context.',
        introduction:
          'Resource sizing is a useful operator question, but the released site must not imply that GreenKube 0.3.0 automatically recommends or applies a change.',
        paragraphs: [
          'Use documented telemetry and dashboards to understand the available workload context. Validate any proposed request change independently, review it through your normal process, and monitor its effect with the tools your team operates.',
          'The development-preview pull-request workflow does not establish generally available support for multi-container workloads, Helm charts or Kustomize overlays. Those targets are not released 0.3.0 capabilities.',
        ],
        items: [
          {
            title: 'Available today',
            description:
              'Cost, energy and carbon visibility, estimates, dashboards and reporting in the released product, with Prometheus/Grafana integration.',
            status: '0.3.0',
          },
          {
            title: 'Recommendation evidence and ranking',
            description:
              'An evidence and ranking engine is not included in 0.3.0.',
            status: 'Preview on dev',
          },
          {
            title: 'Proposed Git change and verification',
            description:
              'GitOps pull-request automation and apply verification are not released capabilities.',
            status: 'Preview on dev',
          },
        ],
      },
      {
        id: 'waste-audit',
        presentation: 'cards',
        eyebrow: 'Cluster review',
        title: 'Use reports to guide an operator-led audit.',
        introduction:
          'A dashboard can help frame questions about resource use and cost. It does not mean every category is detected, attributable or automatically remediated.',
        items: [
          {
            title: 'Review reported cost',
            description:
              'Use cost visibility and estimates as an allocation aid. Reconcile the interpretation with your provider billing and the inputs documented for your deployment.',
          },
          {
            title: 'Check energy and carbon coverage',
            description:
              'Review which workloads and sources are represented before treating a report as a cluster-wide baseline.',
          },
          {
            title: 'Keep remediation separate',
            description:
              'Idle-resource detection, orphan cleanup and automated remediation are not implied by visibility. Validate each action through your existing controls.',
          },
        ],
      },
      {
        id: 'finops',
        presentation: 'prose',
        eyebrow: 'FinOps',
        title: 'Add a Kubernetes view to cost conversations.',
        paragraphs: [
          'GreenKube offers cost visibility and estimates for Kubernetes, with dashboards and reporting. Attribution depends on input coverage and allocation; it should complement, not replace, provider invoices and any cost platform already in use.',
          'Compare cost with capacity and carbon context without assuming that the lowest estimated cost is always the best operational choice. An estimated opportunity is not a realized saving.',
        ],
      },
      {
        id: 'greenops',
        presentation: 'prose',
        eyebrow: 'GreenOps',
        title: 'Make the assumptions part of the baseline.',
        paragraphs: [
          'Carbon and energy views are modelled estimates. Record the inputs, source coverage, time period and allocation boundaries used for an interpretation; the Carbon page explains why CPU proxy, infrastructure assumptions and data quality matter.',
          'GreenKube is not a complete corporate carbon accounting system, a direct per-pod meter or a regulatory-compliance product.',
        ],
        links: [
          { label: 'Read about carbon estimates and limits', page: 'carbon' },
        ],
      },
      {
        id: 'integrations',
        presentation: 'table',
        eyebrow: 'Integration scope',
        title: 'Check support against the release.',
        introduction:
          'The 0.3.0 product-truth baseline for this site is intentionally narrow. An integration named in an idea, roadmap or development branch is not a released connector.',
        table: {
          caption: 'Integration claims approved for this content',
          headers: ['Integration or capability', 'Content status'],
          rows: [
            [
              'Kubernetes deployment and context',
              'Released project; follow the documentation for supported versions and configuration.',
            ],
            [
              'Prometheus and Grafana',
              'Released integration story for visibility, dashboards and reporting.',
            ],
            [
              'Real VPA and Karpenter connectors',
              'Preview on dev; not a 0.3.0 integration claim.',
            ],
            [
              'GitOps PR bot and target manifests',
              'Preview on dev; no generally available PR target is claimed for 0.3.0.',
            ],
          ],
        },
        links: [
          {
            label: 'Check the versioned integration guide',
            href: 'https://docs.greenkube.cloud/',
          },
        ],
      },
    ],
  },
  method: {
    id: 'method',
    title: 'GreenKube methodology and release boundaries',
    description:
      'Understand how GreenKube 0.3.0 presents Kubernetes estimates and which evidence, ranking, GitOps and verification functions remain Preview on dev.',
    hero: {
      eyebrow: 'METHOD AND PRODUCT BOUNDARIES',
      title: 'Interpret the output before acting on it.',
      summary:
        'GreenKube 0.3.0 brings cost, energy and carbon estimates into dashboards and reports through its supported integrations. Inputs and allocation shape what those estimates can say.',
      note: 'Evidence collection for recommendations, ranking, apply verification, GitOps PR automation, measured outcomes and real VPA/Karpenter connectors are Preview on dev.',
      actions: [
        {
          label: 'Read the technical documentation',
          href: 'https://docs.greenkube.cloud/',
        },
        { label: 'Explore carbon methodology', page: 'carbon' },
      ],
    },
    sections: [
      {
        id: 'released-flow',
        presentation: 'data-flow',
        eyebrow: 'Released in 0.3.0',
        title: 'Telemetry becomes an estimate and a report.',
        introduction:
          'The released baseline is visibility and reporting, not an automated change loop. Exact metric requirements, model details and configuration belong in the versioned documentation.',
        code: {
          filename: 'released-flow.txt',
          lines: [
            'Kubernetes context + supported Prometheus telemetry',
            '                    ↓',
            '      Cost / energy / carbon estimates',
            '                    ↓',
            '            Dashboards and reports',
            '                    ↓',
            '         Grafana integration',
          ],
        },
      },
      {
        id: 'estimate',
        presentation: 'prose',
        eyebrow: 'Estimation',
        title: 'Inputs, allocation and uncertainty travel together.',
        paragraphs: [
          'Cost values are estimates or allocations, not billing guarantees. Energy and carbon values are model outputs; the operational energy model is CPU-based and is not a direct hardware power measurement.',
          'Workload allocation can distribute shared values, but it does not establish exact physical consumption by a pod. Missing metrics, contextual gaps, source freshness and geographic coverage can change what a report represents.',
          'Use the Carbon page for the source families, proxy limits, fallback questions and allocation boundaries that should accompany an interpretation.',
        ],
        links: [
          { label: 'Read the carbon methodology overview', page: 'carbon' },
        ],
      },
      {
        id: 'preview-loop',
        presentation: 'steps',
        eyebrow: 'Development preview',
        title: 'A broader optimization loop is being explored.',
        introduction:
          'The capabilities below are marked Preview on dev because they are unreleased. They must not be represented as features of 0.3.0.',
        items: [
          {
            title: 'Evidence and recommendation ranking',
            description:
              'A recommendation engine that gathers evidence, exposes confidence or risk, and ranks possible work is not released.',
            status: 'Preview on dev',
          },
          {
            title: 'GitOps pull-request bot',
            description:
              'A bot that proposes supported manifest changes is in development preview. No universal manifest, Helm or Kustomize support is claimed.',
            status: 'Preview on dev',
          },
          {
            title: 'Apply detection and verification',
            description:
              'Detecting an applied change and checking post-change signals is not a 0.3.0 capability.',
            status: 'Preview on dev',
          },
          {
            title: 'Measured outcomes and savings',
            description:
              'Outcome attribution and measured-savings reporting remain preview work. No saving is guaranteed.',
            status: 'Preview on dev',
          },
          {
            title: 'VPA and Karpenter connectors',
            description:
              'Real connectors are unreleased. Do not infer production support from a development branch or a recommendation source concept.',
            status: 'Preview on dev',
          },
        ],
      },
      {
        id: 'review',
        presentation: 'callout',
        eyebrow: 'Human control',
        title: 'A preview is not autonomous production change.',
        paragraphs: [
          'No copy on this site should imply that GreenKube 0.3.0 changes production, merges a pull request, rolls back a deployment or guarantees a healthy outcome. Development previews do not remove the need for operator review and the team’s existing change controls.',
          'A projected cost or carbon impact is not a measured result. A lower CPU request does not automatically reduce energy use or an invoice.',
        ],
      },
      {
        id: 'versioned-details',
        presentation: 'prose',
        title: 'Use the canonical documentation for implementation detail.',
        paragraphs: [
          'This marketing page avoids reproducing setup instructions, exact model defaults or unverified integration behavior. Check the documentation for the installed release before configuring a source or interpreting a report.',
        ],
        links: [
          {
            label: 'Open GreenKube documentation',
            href: 'https://docs.greenkube.cloud/',
          },
          {
            label: 'View the release source',
            href: 'https://github.com/GreenKubeCloud/GreenKube/releases',
          },
        ],
      },
    ],
  },
  community: {
    id: 'community',
    title: 'GreenKube open-source community',
    description:
      'Explore the GreenKube Apache-2.0 project, source code, discussions, issues and ways to contribute—without invented community metrics.',
    hero: {
      eyebrow: 'OPEN SOURCE',
      title: 'Built in the open.',
      summary:
        'GreenKube is an Apache-2.0 licensed, self-hosted Kubernetes project. Start with the source, read the documentation and take part in public project discussions.',
      note: 'Community size, adoption and activity are not represented with unverified counters or customer claims.',
      actions: [
        {
          label: 'View GreenKube on GitHub',
          href: 'https://github.com/GreenKubeCloud/GreenKube',
        },
        {
          label: 'Join a discussion',
          href: 'https://github.com/GreenKubeCloud/GreenKube/discussions',
        },
      ],
    },
    sections: [
      {
        id: 'project',
        presentation: 'prose',
        eyebrow: 'Project principles',
        title: 'Open source, self-hosted and inspectable.',
        paragraphs: [
          'The GreenKube project is distributed under Apache-2.0 and designed to run in a Kubernetes environment you operate. The core project does not require a commercial contract.',
          'The released 0.3.0 baseline is cost, energy and carbon visibility with estimates, dashboards and reporting, including Prometheus/Grafana integration. Evidence ranking, PR automation, apply verification, measured outcomes and real VPA/Karpenter connectors are Preview on dev.',
        ],
        links: [
          {
            label: 'Read the Apache-2.0 license',
            href: 'https://github.com/GreenKubeCloud/GreenKube/blob/main/LICENSE',
          },
          {
            label: 'Browse the source repository',
            href: 'https://github.com/GreenKubeCloud/GreenKube',
          },
          {
            label: 'Read the technical documentation',
            href: 'https://docs.greenkube.cloud/',
          },
        ],
      },
      {
        id: 'contribute',
        presentation: 'steps',
        eyebrow: 'Ways to participate',
        title: 'Choose a contribution that fits your experience.',
        introduction:
          'Use public project channels to discuss changes and check current contribution guidance before starting work.',
        items: [
          {
            title: 'Try the released project',
            description:
              'Follow the versioned documentation and report reproducible issues against the release you use.',
          },
          {
            title: 'Improve documentation',
            description:
              'Clarify installation, configuration, source coverage or methodology where the project guidance needs it.',
          },
          {
            title: 'Discuss integrations and recommendation sources',
            description:
              'Propose an idea publicly. A discussion or development branch does not mean an integration is released.',
          },
          {
            title: 'Contribute code',
            description:
              'Review repository guidance and open a change for maintainers to assess.',
          },
        ],
        links: [
          {
            label: 'Open a GitHub issue',
            href: 'https://github.com/GreenKubeCloud/GreenKube/issues',
          },
          {
            label: 'Join GitHub Discussions',
            href: 'https://github.com/GreenKubeCloud/GreenKube/discussions',
          },
        ],
      },
      {
        id: 'release-transparency',
        presentation: 'callout',
        title: 'Check the release before relying on a capability.',
        paragraphs: [
          'Unreleased work is labelled Preview on dev. Check the changelog, tagged releases and versioned docs instead of treating roadmap items, preview connectors or draft automation as stable product behavior.',
        ],
        links: [
          {
            label: 'Review releases',
            href: 'https://github.com/GreenKubeCloud/GreenKube/releases',
          },
          {
            label: 'Review the changelog',
            href: 'https://github.com/GreenKubeCloud/GreenKube/blob/main/CHANGELOG.md',
          },
        ],
      },
    ],
  },
  services: {
    id: 'services',
    title: 'Optional Kubernetes optimization support | GreenKube',
    description:
      'Learn about optional human support for teams assessing or implementing Kubernetes optimization. GreenKube remains open source and self-hostable.',
    hero: {
      eyebrow: 'OPTIONAL PROFESSIONAL HELP',
      title: 'Need help applying Kubernetes optimization?',
      summary:
        'GreenKube is free and open source. Teams can discuss optional support for assessment, implementation or continuous review without making services a condition of using the project.',
      note: 'Engagement scope should be grounded in released capabilities, available data and your team’s change controls. No pricing or guaranteed savings are stated here.',
      actions: [
        {
          label: 'Discuss an engagement',
          href: 'https://github.com/GreenKubeCloud/GreenKube/discussions',
        },
        {
          label: 'Read the documentation',
          href: 'https://docs.greenkube.cloud/',
        },
      ],
    },
    sections: [
      {
        id: 'independent',
        presentation: 'callout',
        eyebrow: 'Open source first',
        title: 'Services are optional; the core project stays open.',
        paragraphs: [
          'The GreenKube project is Apache-2.0 licensed and self-hostable. A services engagement is not required to access the software or its released functionality.',
        ],
        links: [
          {
            label: 'View the project license',
            href: 'https://github.com/GreenKubeCloud/GreenKube/blob/main/LICENSE',
          },
        ],
      },
      {
        id: 'assessment',
        presentation: 'cards',
        eyebrow: 'Possible engagement scopes',
        title: 'Start with the question your team needs to answer.',
        introduction:
          'These are optional human-support areas, not automated product promises. Scope, evidence and outputs are agreed with the team before work begins.',
        items: [
          {
            title: 'Optimization assessment',
            description:
              'Review an available Kubernetes baseline, discuss cost and energy/carbon estimates, and identify questions for operator validation.',
          },
          {
            title: 'Implementation support',
            description:
              'Help teams interpret evidence, plan changes and work through their existing review and deployment process.',
          },
          {
            title: 'Ongoing review',
            description:
              'Support periodic interpretation of reports and refinement of an operator-owned improvement backlog.',
          },
        ],
      },
      {
        id: 'release-boundary',
        presentation: 'prose',
        eyebrow: 'Release boundary',
        title: 'Support does not change what the software ships.',
        paragraphs: [
          'GreenKube 0.3.0 provides cost, energy and carbon visibility, dashboards and reporting with estimates, alongside Prometheus/Grafana integration. Any support must describe those outputs as estimates and account for their source coverage and allocation limits.',
          'Evidence ranking, the GitOps PR bot, apply verification, measured outcomes and real VPA/Karpenter connectors remain Preview on dev. They are not included as stable service deliverables or 0.3.0 capabilities.',
        ],
        links: [{ label: 'Read about methodology and limits', page: 'method' }],
      },
      {
        id: 'start-conversation',
        presentation: 'prose',
        title: 'Discuss a scope in the open.',
        paragraphs: [
          'Use the project discussion channel to start a conversation. Avoid posting credentials, private cluster data or sensitive operational information in a public forum.',
        ],
        links: [
          {
            label: 'Open GitHub Discussions',
            href: 'https://github.com/GreenKubeCloud/GreenKube/discussions',
          },
          {
            label: 'Explore the project',
            href: 'https://github.com/GreenKubeCloud/GreenKube',
          },
        ],
      },
    ],
  },
};

export const englishPages = pages;
