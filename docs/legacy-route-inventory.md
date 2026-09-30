# Legacy documentation-route inventory

**Source:** the current Starlight sitemap at `https://www.greenkube.cloud/sitemap-0.xml`  
**Status:** prepared for operator review; no redirect has been deployed  
**Rule:** preserve the old documentation path on `docs.greenkube.cloud`; the former documentation homepage is replaced by the new English marketing homepage.

| Legacy URL (`www.greenkube.cloud`)     | Destination                                                        | Status |
| -------------------------------------- | ------------------------------------------------------------------ | -----: |
| `/`                                    | `https://greenkube.cloud/en/`                                      |    308 |
| `/architecture/data-pipeline/`         | `https://docs.greenkube.cloud/architecture/data-pipeline/`         |    301 |
| `/architecture/energy-estimation/`     | `https://docs.greenkube.cloud/architecture/energy-estimation/`     |    301 |
| `/architecture/overview/`              | `https://docs.greenkube.cloud/architecture/overview/`              |    301 |
| `/architecture/storage/`               | `https://docs.greenkube.cloud/architecture/storage/`               |    301 |
| `/contact/`                            | `https://docs.greenkube.cloud/contact/`                            |    301 |
| `/contributing/`                       | `https://docs.greenkube.cloud/contributing/`                       |    301 |
| `/features/carbon-tracking/`           | `https://docs.greenkube.cloud/features/carbon-tracking/`           |    301 |
| `/features/cost-optimization/`         | `https://docs.greenkube.cloud/features/cost-optimization/`         |    301 |
| `/features/easy-deployment/`           | `https://docs.greenkube.cloud/features/easy-deployment/`           |    301 |
| `/features/flexible-storage/`          | `https://docs.greenkube.cloud/features/flexible-storage/`          |    301 |
| `/features/historical-analysis/`       | `https://docs.greenkube.cloud/features/historical-analysis/`       |    301 |
| `/features/multi-cloud-support/`       | `https://docs.greenkube.cloud/features/multi-cloud-support/`       |    301 |
| `/features/multi-resource-monitoring/` | `https://docs.greenkube.cloud/features/multi-resource-monitoring/` |    301 |
| `/features/real-time-dashboard/`       | `https://docs.greenkube.cloud/features/real-time-dashboard/`       |    301 |
| `/features/rest-api/`                  | `https://docs.greenkube.cloud/features/rest-api/`                  |    301 |
| `/features/smart-recommendations/`     | `https://docs.greenkube.cloud/features/smart-recommendations/`     |    301 |
| `/getting-started/configuration/`      | `https://docs.greenkube.cloud/getting-started/configuration/`      |    301 |
| `/getting-started/installation/`       | `https://docs.greenkube.cloud/getting-started/installation/`       |    301 |
| `/getting-started/introduction/`       | `https://docs.greenkube.cloud/getting-started/introduction/`       |    301 |
| `/getting-started/quickstart/`         | `https://docs.greenkube.cloud/getting-started/quickstart/`         |    301 |
| `/guide/api/`                          | `https://docs.greenkube.cloud/guide/api/`                          |    301 |
| `/guide/cli/`                          | `https://docs.greenkube.cloud/guide/cli/`                          |    301 |
| `/guide/dashboard/`                    | `https://docs.greenkube.cloud/guide/dashboard/`                    |    301 |
| `/guide/grafana/`                      | `https://docs.greenkube.cloud/guide/grafana/`                      |    301 |
| `/guide/recommendations/`              | `https://docs.greenkube.cloud/guide/recommendations/`              |    301 |
| `/guide/reports/`                      | `https://docs.greenkube.cloud/guide/reports/`                      |    301 |
| `/guide/wattnet/`                      | `https://docs.greenkube.cloud/guide/wattnet/`                      |    301 |
| `/releases/`                           | `https://docs.greenkube.cloud/releases/`                           |    301 |

The public sitemap supplied 29 content routes: the root plus 28 documentation routes. Redirects for documentation paths must be exact path matches, preserve the query string, and be installed before cutover. The `www` host must continue to redirect permanently to the apex while preserving path and query. The docs repository and DNS remain operator-controlled.

Before cutover, the Starlight docs deployment must publish at `https://docs.greenkube.cloud/` and use that origin for canonical metadata and its sitemap. The existing docs repository and its user changes are intentionally not modified by this site project.
