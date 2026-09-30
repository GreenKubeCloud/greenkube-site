import type { PageContent, PageId } from '../types';

export const pages: Record<PageId, PageContent> = {
  home: {
    id: 'home',
    title: 'Open-source Kubernetes visibility and optimization | GreenKube',
    description:
      'Explore open-source Kubernetes cost, energy and carbon visibility, evidence-backed recommendations and operator-reviewed GitOps workflows.',
    hero: {
      eyebrow: 'OPEN-SOURCE KUBERNETES OPTIMIZATION',
      title: 'Kubernetes optimization, from evidence to pull request.',
      summary:
        'GreenKube is an open-source, self-hosted project for understanding Kubernetes cost, energy and carbon, with recommendations and GitOps workflows that keep operators in control.',
      note: 'Review evidence, propose supported manifest changes, and compare expected impact with observed outcomes before deciding what to apply.',
      workflow: [
        {
          title: 'Telemetry',
          description:
            'Review Kubernetes cost, energy and carbon estimates through Prometheus and Grafana.',
        },
        {
          title: 'Recommendation and evidence',
          description:
            'Rank recommendations with supporting evidence and clear operational context.',
        },
        {
          title: 'Git diff and pull request',
          description:
            'Propose supported manifest changes as Git diffs and pull requests for operator review.',
        },
        {
          title: 'Apply and verify',
          description:
            'Verify applied changes against post-change signals and defined health checks.',
        },
        {
          title: 'Measured outcome',
          description:
            'Compare estimated impact with observed outcomes without treating estimates as guaranteed savings.',
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
        eyebrow: 'The platform',
        title: 'Visibility first; estimates with context.',
        introduction:
          'GreenKube helps teams inspect Kubernetes cost, energy and carbon estimates, review evidence-backed recommendations, and propose operator-reviewed changes.',
        paragraphs: [
          'GreenKube is Apache-2.0 licensed and designed to be self-hosted. Prometheus and Grafana bring cluster telemetry into dashboards, recommendations and reports; consult the documentation for setup and data requirements.',
          'A displayed estimate is not a direct measurement, a cloud invoice, or a promise of savings. The result depends on available telemetry, source coverage and configuration.',
        ],
        links: [
          {
            label: 'Read the documentation',
            href: 'https://docs.greenkube.cloud/',
          },
          {
            label: 'Review releases',
            href: 'https://github.com/GreenKubeCloud/GreenKube/releases',
          },
        ],
      },
      {
        id: 'workflow',
        presentation: 'steps',
        eyebrow: 'Operator-reviewed workflow',
        title: 'A path from observation to a reviewed change.',
        introduction:
          'GreenKube connects telemetry, evidence, proposed changes and post-change checks while leaving production decisions with the operator.',
        items: [
          {
            title: 'Observe',
            description:
              'Use Kubernetes telemetry and Prometheus/Grafana dashboards to review cost, energy and carbon estimates.',
          },
          {
            title: 'Prioritize with evidence',
            description:
              'Compare recommendations using their supporting evidence, confidence and operational context.',
          },
          {
            title: 'Propose a Git change',
            description:
              'Create pull requests for supported manifest changes and let the team review them through its normal process.',
          },
          {
            title: 'Check what happened',
            description:
              'Check applied changes and compare post-change signals with the original estimates and evidence.',
          },
        ],
      },
      {
        id: 'outcomes',
        presentation: 'table',
        eyebrow: 'Interpretation',
        title: 'Keep estimates separate from outcomes.',
        introduction:
          'Projected impact, observed changes and verified results are different kinds of information. Estimates and reports do not guarantee savings.',
        table: {
          caption: 'What the terms mean on this site',
          headers: ['Term', 'Meaning'],
          rows: [
            [
              'Projected',
              'Potential impact estimated before a change; it is a projection, not a guarantee.',
            ],
            [
              'Applied',
              'A change detected or recorded in the target environment.',
            ],
            [
              'Measured',
              'Post-change signals observed over time; they are not an invoice or a physical energy measurement.',
            ],
            [
              'Verified',
              'An outcome checked against defined evidence or health gates; verification does not guarantee savings.',
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
          'The platform’s views support investigation across these dimensions. They do not turn every opportunity into an automated action.',
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
              'Use resource context and ranked recommendations to inform operator decisions.',
          },
        ],
      },
      {
        id: 'data',
        presentation: 'data-flow',
        eyebrow: 'Integration boundary',
        title: 'Follow the data, not a headline number.',
        introduction:
          'GreenKube integrates with Kubernetes, Prometheus and Grafana. Check the documentation for provider availability and configuration details.',
        code: {
          filename: 'release-scope.txt',
          lines: [
            'Kubernetes + Prometheus',
            '          ↓',
            'GreenKube cost, energy and carbon estimates',
            '          ↓',
            'Dashboards and reports (Grafana integration)',
            '',
            'Evidence-backed recommendations and GitOps pull requests',
            '          ↓',
            'Operator review and post-change checks',
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
          'Teams that want human support can discuss a Kubernetes optimization assessment, implementation work or ongoing review. The scope should reflect the telemetry, product capabilities and change process actually available to the team.',
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
        'GreenKube provides Kubernetes energy and carbon visibility through estimates, dashboards and reporting. The operational energy model is CPU-based; its outputs are not direct hardware or pod-level physical measurements.',
      note: 'Estimates are modelled and allocated. Source availability, fallback behavior and exact defaults depend on configuration; use the documentation for implementation details.',
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
          'The methodology documentation names the sources below. Whether a provider API has usable data still depends on configuration, credentials and coverage. The availability column distinguishes built-in inputs from selectable or optional sources.',
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
              'Missing or unsupported context can limit attribution; consult the documentation for supported fields.',
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
              'Optional alternative grid-intensity provider documented for 52 European zones at 15-minute resolution.',
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
          'The operational model linearly interpolates between idle and maximum instance-profile power using CPU utilization. It does not use memory, network, disk or GPU metrics in the energy calculation; GPU workloads are not supported by that model.',
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
          'A missing source is not evidence of zero energy or zero emissions. Read the documentation to determine whether a configured fallback is used, an estimate is unavailable, or coverage is reduced.',
        ],
      },
      {
        id: 'fallbacks',
        presentation: 'steps',
        eyebrow: 'Missing data',
        title: 'Treat fallback behavior as part of the result.',
        introduction:
          'Fallbacks are not interchangeable defaults. The supported behavior depends on the source configuration.',
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
          'The result uses the global intensity fallback and the documented unknown-instance profile defaults. It is not a pod-specific physical measurement, does not include an embodied-impact component, and does not establish savings. Pod values are allocated from node energy by CPU usage share.',
        ],
      },
      {
        id: 'methodology',
        presentation: 'prose',
        eyebrow: 'Further reading',
        title: 'Use the methodology documentation for exact behavior.',
        introduction:
          'Model equations and fallback values on this page are transcribed from the published methodology documentation. Provider data, configuration and source coverage still vary by deployment.',
        paragraphs: [
          'For the implementation details that apply to a deployment, use the canonical documentation and verify its source list, configuration options, fallback rules and model boundaries against the deployed software.',
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
      'Explore operator workflows for Kubernetes cost visibility, energy and carbon estimates, evidence-backed recommendations and reviewable changes.',
    hero: {
      eyebrow: 'OPERATOR WORKFLOWS',
      title: 'Start with visibility. Keep action reviewable.',
      summary:
        'Use GreenKube to inspect Kubernetes cost, energy and carbon estimates through dashboards and reporting, and to review evidence-backed recommendations and proposed changes.',
      note: 'Recommendations and GitOps pull requests support operator review; estimates and outcomes depend on telemetry, source coverage and configuration.',
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
          'Use evidence-backed recommendations to investigate resource sizing while keeping changes reviewable by the team.',
        paragraphs: [
          'Use telemetry and dashboards to understand workload context. Review proposed request changes through your normal process and monitor their effect with the tools your team operates.',
          'The GitOps pull-request workflow proposes supported manifest changes for review; target support depends on the documented integration and configuration.',
        ],
        items: [
          {
            title: 'Available today',
            description:
              'Cost, energy and carbon visibility, estimates, dashboards and reporting with Prometheus/Grafana integration.',
          },
          {
            title: 'Recommendation evidence and ranking',
            description:
              'Rank recommendations using supporting evidence and operational context.',
          },
          {
            title: 'Proposed Git change and verification',
            description:
              'Propose supported manifest changes through GitOps pull requests and verify post-change signals.',
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
        title: 'Check integration support.',
        introduction:
          'GreenKube connects Kubernetes telemetry, cost allocation and carbon inputs to recommendations and operator-reviewed GitOps workflows.',
        table: {
          caption: 'Integrations and optimization workflows',
          headers: ['Integration or capability', 'Content status'],
          rows: [
            [
              'Kubernetes deployment and context',
              'Provides node and workload context for estimates, recommendations and allocation.',
            ],
            [
              'Prometheus and Grafana',
              'Provides telemetry, dashboards and reporting for cost, energy and carbon views.',
            ],
            [
              'Real VPA and Karpenter connectors',
              'Connect resource recommendations to supported VPA and Karpenter configurations.',
            ],
            [
              'GitOps PR bot and target manifests',
              'Proposes changes for supported manifest targets as pull requests for operator review.',
            ],
          ],
        },
        links: [
          {
            label: 'Check the integration guide',
            href: 'https://docs.greenkube.cloud/',
          },
        ],
      },
    ],
  },
  method: {
    id: 'method',
    title: 'GreenKube methodology and optimization workflows',
    description:
      'Understand GreenKube’s Kubernetes cost, energy and carbon methodology and how evidence-backed recommendations and GitOps workflows support operator decisions.',
    hero: {
      eyebrow: 'METHOD AND PRODUCT BOUNDARIES',
      title: 'Interpret the output before acting on it.',
      summary:
        'GreenKube brings cost, energy and carbon estimates into dashboards and reports, with evidence-backed recommendations and reviewable GitOps proposals.',
      note: 'Inputs, source coverage and allocation shape what estimates and post-change outcomes can say.',
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
        id: 'optimization-flow',
        presentation: 'data-flow',
        eyebrow: 'From telemetry to action',
        title: 'Telemetry becomes an estimate and a report.',
        introduction:
          'The workflow combines visibility and reporting with evidence-backed recommendations and GitOps proposals. Exact metric requirements, model details and configuration belong in the documentation.',
        code: {
          filename: 'optimization-flow.txt',
          lines: [
            'Kubernetes context + supported Prometheus telemetry',
            '                    ↓',
            '      Cost / energy / carbon estimates',
            '                    ↓',
            '            Dashboards and reports',
            '                    ↓',
            '     Evidence-backed recommendations',
            '                    ↓',
            '       GitOps pull request and review',
            '                    ↓',
            '        Post-change signal checks',
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
        id: 'optimization-loop',
        presentation: 'steps',
        eyebrow: 'Optimization workflow',
        title: 'From evidence to a reviewed change.',
        introduction:
          'GreenKube connects recommendation evidence, GitOps proposals and post-change checks while keeping production decisions with the operator.',
        items: [
          {
            title: 'Evidence and recommendation ranking',
            description:
              'Gather evidence, expose confidence or risk, and rank possible work for operator review.',
          },
          {
            title: 'GitOps pull-request bot',
            description:
              'Propose supported manifest changes as pull requests; target support depends on the configured integration.',
          },
          {
            title: 'Apply detection and verification',
            description:
              'Detect applied changes and check post-change signals against defined evidence or health gates.',
          },
          {
            title: 'Measured outcomes and savings',
            description:
              'Compare observed outcomes with estimates while treating attribution and savings as evidence-dependent.',
          },
          {
            title: 'VPA and Karpenter connectors',
            description:
              'Connect supported VPA and Karpenter configurations to resource recommendations.',
          },
        ],
      },
      {
        id: 'review',
        presentation: 'callout',
        eyebrow: 'Human control',
        title: 'Keep production changes under operator control.',
        paragraphs: [
          'GreenKube proposes changes through pull requests for supported targets; teams review and merge them through their existing controls. The software does not automatically merge changes, roll back deployments or guarantee a healthy outcome.',
          'A projected cost or carbon impact is not a measured result. A lower CPU request does not automatically reduce energy use or an invoice.',
        ],
      },
      {
        id: 'implementation-details',
        presentation: 'prose',
        title: 'Use the canonical documentation for implementation detail.',
        paragraphs: [
          'This marketing page avoids reproducing setup instructions, exact model defaults or configuration-dependent integration behavior. Check the documentation before configuring a source or interpreting a report.',
        ],
        links: [
          {
            label: 'Open GreenKube documentation',
            href: 'https://docs.greenkube.cloud/',
          },
          {
            label: 'View releases',
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
          'The platform combines cost, energy and carbon estimates with dashboards, reporting, evidence-backed recommendations, GitOps pull requests and post-change verification.',
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
            title: 'Try GreenKube',
            description:
              'Follow the documentation and report reproducible issues with the configuration you use.',
          },
          {
            title: 'Improve documentation',
            description:
              'Clarify installation, configuration, source coverage or methodology where the project guidance needs it.',
          },
          {
            title: 'Discuss integrations and recommendation sources',
            description:
              'Discuss integrations, recommendation sources and supported workflows with the community.',
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
        title: 'Follow the project’s changelog.',
        paragraphs: [
          'The changelog and release list track changes over time. Use the technical documentation for current setup and configuration details.',
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
      note: 'Engagement scope should be grounded in product capabilities, available data and your team’s change controls. No pricing or guaranteed savings are stated here.',
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
          'The GreenKube project is Apache-2.0 licensed and self-hostable. A services engagement is not required to access the software or its available functionality.',
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
        eyebrow: 'Product capabilities',
        title: 'Bring evidence and operator review to optimization work.',
        paragraphs: [
          'GreenKube provides cost, energy and carbon visibility, dashboards and reporting with estimates, alongside Prometheus/Grafana integration, evidence-backed recommendations, GitOps pull requests and post-change checks. Any support must account for source coverage, allocation limits and the team’s change controls.',
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
