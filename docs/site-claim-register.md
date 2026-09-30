# GreenKube site claim register

**Status:** Frozen content baseline  
**Review basis:** GreenKube 0.3.0 release artifacts (CHANGELOG, `pyproject.toml`, Helm chart) and the versioned [energy-estimation methodology](https://docs.greenkube.cloud/architecture/energy-estimation/), [carbon-tracking guide](https://docs.greenkube.cloud/features/carbon-tracking/) and [Wattnet guide](https://docs.greenkube.cloud/guide/wattnet/)  
**Reviewed:** 2026-09-30  
**Scope:** Main-site copy only; technical details remain canonical in the versioned documentation.

## Tagline

**Kubernetes optimization, from evidence to pull request.**

Treat this as product direction, not a statement that the complete workflow ships in 0.3.0. The page must state the released boundary beside this message.

## Released claims

Approved for 0.3.0:

- GreenKube is open source under **Apache-2.0**, self-hosted and Kubernetes-oriented.
- Cost, energy and carbon visibility, dashboards and reporting are available as **estimates**.
- Prometheus and Grafana are supported integrations. OpenCost supplies cost-allocation input; missing OpenCost data can be represented as zero cost and must not be described as verified zero spend.
- The documented energy model uses CPU utilization with static Cloud Carbon Footprint instance profiles. Memory, network, disk and GPU are not included in the current energy calculation; GPU workloads are not supported by that model.
- Electricity Maps is the default grid-intensity provider. Wattnet is a selectable alternative in 0.3.0, documented for 52 European zones at 15-minute resolution.
- Provider PUE profiles and a documented fallback profile are used where configured. Unknown-instance defaults include PUE 1.3, one vCore, 1 W/vCore minimum and 10 W/vCore maximum; such output is flagged `is_estimated` with `estimation_reasons`. Two methodology sections currently disagree on the OVH PUE value, so marketing copy must not publish provider-specific PUE numbers until the docs are reconciled.
- Boavizta provides optional embodied-impact data. The documented fallback is 100 kg instance impact and a four-year hardware-lifespan assumption.
- The released Helm chart is an installation path; use the canonical installation guide rather than duplicating version-sensitive commands.

Cost figures are estimates or allocations, not invoices or billing guarantees. Carbon and energy figures are estimates, not physical measurements, guaranteed savings or complete accounting.

## Preview claims — always label “Preview on dev”

The following are **Unreleased** and must never be described as 0.3.0 capabilities:

- Recommendation evidence and ranking engine.
- Apply detection and post-change verification.
- GitOps pull-request bot.
- Measured savings or measured-outcome attribution.
- Real VPA and Karpenter connectors.

No capability listed above is generally available. No released PR target is approved by this register. If a development-preview PR flow is mentioned, say that its target scope is limited to supported manifest changes and do not imply support for every recommendation, workload, Helm chart or Kustomize overlay.

## Integrations and supported PR scope

- Released integration claims: Kubernetes, Prometheus and Grafana, subject to versioned documentation and configuration.
- Released packaging: Helm chart, with installation details in the docs.
- Do not claim Kepler, VPA or Karpenter as released connectors. The versioned methodology documents Electricity Maps, Wattnet, OpenCost, CCF profiles and Boavizta inputs as described above; keep their availability, configuration and fallback boundaries explicit.
- **Pull requests:** no generally available PR bot or supported PR target in 0.3.0. PR automation is Preview on dev; the precise supported target scope is not established here.

## Carbon boundaries and uncertainty

- The current operational-energy model is CPU-based; CPU is a proxy, not direct hardware power measurement.
- Workload-level CO₂e is an allocation estimate, not exact physical emissions for an individual pod. Shared infrastructure and incomplete attribution affect allocation.
- Cost allocation and carbon attribution are distinct. A lower request does not by itself prove lower energy use or a lower invoice.
- Carbon estimates depend on source quality, freshness, geographic and temporal coverage, configuration, model assumptions and allocation.
- The operational estimate is based on a CPU-derived power model and can be allocated to workloads by CPU share; it is not direct pod-level physical energy.
- Documented fallbacks include per-zone then global 500 gCO₂e/kWh grid intensity, the unknown-instance profile above, and the Boavizta embodied-impact fallback above. Explain when these documented assumptions are used.
- Other missing data is not zero. Do not invent uncertainty percentages, benchmarks or unsupported fallback behavior; link to the canonical methodology.

## Known limitations and prohibited claims

- No exact per-pod physical emissions, complete resource-level physical energy accounting or complete corporate carbon accounting.
- No guaranteed savings, invoice guarantee, autonomous production change, automatic merge or rollback.
- No CSRD/ESRS compliance, certification or regulatory-compliance claim.
- No claim that every recommendation can create a PR.
- Do not imply all waste categories are detected or automatically remediated.
- Do not present evidence/ranking, apply verification, the PR bot, measured savings or real VPA/Karpenter connectors as stable 0.3.0 functionality.

## Approved assets and data

- No customer logos, customer data, anonymized outcome dataset, benchmark, live counter or numerical savings figure is approved by this register.
- Use genuine product captures only when their version and data provenance are known. Clearly label demo/example data; never present it as production telemetry.
- Avoid fabricated dashboard values, adoption statistics, testimonials and performance claims. No stock data-center image or generic green illustration may stand in for the product.

## Canonical links

- Project and source: <https://github.com/GreenKubeCloud/GreenKube>
- Releases: <https://github.com/GreenKubeCloud/GreenKube/releases>
- Changelog: <https://github.com/GreenKubeCloud/GreenKube/blob/main/CHANGELOG.md>
- License: <https://github.com/GreenKubeCloud/GreenKube/blob/main/LICENSE>
- Technical documentation and installation guide: <https://docs.greenkube.cloud/>
- Demo: <https://demo.greenkube.cloud/>
- Issues: <https://github.com/GreenKubeCloud/GreenKube/issues>
- Discussions: <https://github.com/GreenKubeCloud/GreenKube/discussions>

Use the technical documentation for exact installation, supported inputs, model configuration, fallback behavior and release-specific details. Main-site content must not duplicate those instructions.
