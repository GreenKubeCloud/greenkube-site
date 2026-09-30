# Site claim register

- **Status:** Owner-approved, version-agnostic content baseline
- **Reviewed:** 2026-09-30
- **Scope:** Marketing-site copy only; use the technical documentation for implementation details.

## Positioning

**Kubernetes optimization, from evidence to pull request.**

The site describes product capabilities in the present tense, as requested by the product owner. Version chronology belongs in the changelog and release list, not in general feature descriptions.

## Product capabilities

- GreenKube is open source under **Apache-2.0**, self-hosted and Kubernetes-oriented.
- Cost, energy and carbon visibility, dashboards and reporting are available as estimates.
- Prometheus and Grafana are supported integrations. OpenCost supplies cost-allocation input.
- The documented energy model uses CPU utilization with static Cloud Carbon Footprint instance profiles. Memory, network, disk and GPU are not included in the current energy calculation.
- Electricity Maps and Wattnet provide grid-intensity inputs. Wattnet coverage and resolution are configuration-dependent.
- Provider PUE profiles, documented fallbacks, Boavizta embodied-impact data and OpenCost allocation can inform estimates; describe their assumptions and data coverage.
- Evidence-backed recommendation ranking, GitOps pull requests for supported manifest changes, apply detection, post-change verification, outcome attribution, and VPA/Karpenter connectors may be described in the present tense. Do not imply universal manifest, Helm, Kustomize, workload or provider support.
- The released Helm chart is an installation path; link to the canonical installation guide rather than duplicating commands.

## Language and evidence

- Do not add product version numbers or branch-status labels to general site copy. Link to the changelog or release list for chronology.
- Present estimates and allocated values as estimates, not invoices, physical measurements, guaranteed savings or complete carbon accounting.
- Keep operator review and existing change controls explicit. Do not claim automatic merge, autonomous production changes, rollback or guaranteed health.
- Do not invent customer logos, outcomes, adoption statistics, benchmarks, testimonials, uncertainty percentages or live telemetry.
- Do not claim CSRD/ESRS compliance, certification or regulatory compliance.
- Do not present every recommendation as applicable to every workload or as eligible for a pull request.

## Carbon boundaries

- The operational-energy model is CPU-based; CPU is a proxy, not direct hardware power measurement.
- Workload-level CO₂e is an allocation estimate. Shared infrastructure and incomplete attribution affect allocation.
- Cost allocation and carbon attribution are distinct. A lower request does not by itself prove lower energy use or a lower invoice.
- Estimates depend on source quality, freshness, geographic and temporal coverage, configuration, model assumptions and allocation.
- Documented fallbacks include per-zone then global 500 gCO₂e/kWh grid intensity, the unknown-instance profile, and the Boavizta embodied-impact fallback. Explain when those assumptions are used.
- Do not publish provider-specific PUE values until the conflicting OVH values in the technical documentation are reconciled.

## Canonical links

- Project and source: <https://github.com/GreenKubeCloud/GreenKube>
- Releases: <https://github.com/GreenKubeCloud/GreenKube/releases>
- Changelog: <https://github.com/GreenKubeCloud/GreenKube/blob/main/CHANGELOG.md>
- License: <https://github.com/GreenKubeCloud/GreenKube/blob/main/LICENSE>
- Technical documentation and installation guide: <https://docs.greenkube.cloud/>
- Demo: <https://demo.greenkube.cloud/>
- Issues: <https://github.com/GreenKubeCloud/GreenKube/issues>
- Discussions: <https://github.com/GreenKubeCloud/GreenKube/discussions>
