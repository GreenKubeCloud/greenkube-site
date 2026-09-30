import { pages as englishPages } from './en';

export const pages = {
  home: {
    id: 'home',
    title: 'Visibilité et optimisation Kubernetes open source | GreenKube',
    description:
      'Découvrez GreenKube 0.3.0 : visibilité sur les coûts, l’énergie et le carbone de Kubernetes, tableaux de bord et rapports, avec des estimations et leurs limites.',
    hero: {
      eyebrow: 'OPTIMISATION KUBERNETES OPEN SOURCE',
      title: 'Optimisez Kubernetes, du diagnostic à la pull request.',
      summary:
        'GreenKube est un projet open source et auto-hébergeable pour comprendre les coûts, l’énergie et le carbone de Kubernetes. La version 0.3.0 fournit des estimations, des tableaux de bord et des rapports, avec une intégration Prometheus et Grafana.',
      note: 'Le classement fondé sur des preuves, la création de pull requests GitOps, la vérification après application et le suivi des résultats sont en aperçu sur dev, et ne font pas partie de la version 0.3.0.',
      workflow: [
        {
          title: 'Télémétrie',
          description:
            'Examinez les estimations Kubernetes de coûts, d’énergie et de carbone via l’intégration Prometheus et Grafana publiée.',
          status: 'Disponible en 0.3.0',
        },
        {
          title: 'Recommandation et preuves',
          description:
            'La collecte de preuves et le classement des recommandations ne font pas partie de la version 0.3.0.',
          status: 'Aperçu sur dev',
        },
        {
          title: 'Diff Git et pull request',
          description:
            'Le bot GitOps est un aperçu de développement pour les changements de manifestes pris en charge ; aucun périmètre de PR généralement disponible n’est revendiqué.',
          status: 'Aperçu sur dev',
        },
        {
          title: 'Application et vérification',
          description:
            'La détection de l’application et la vérification après changement ne sont pas des fonctionnalités publiées.',
          status: 'Aperçu sur dev',
        },
        {
          title: 'Résultat mesuré',
          description:
            'L’attribution des résultats mesurés est en développement et ne constitue pas une revendication d’économies pour la version 0.3.0.',
          status: 'Aperçu sur dev',
        },
      ],
      actions: [
        { label: 'Essayer la démo', href: 'https://demo.greenkube.cloud/' },
        {
          label: 'Voir le projet sur GitHub',
          href: 'https://github.com/GreenKubeCloud/GreenKube',
        },
        { label: 'Installer avec Helm', href: 'https://docs.greenkube.cloud/' },
      ],
    },
    sections: [
      {
        id: 'release',
        presentation: 'prose',
        eyebrow: 'Version 0.3.0',
        title: 'D’abord la visibilité, avec des estimations contextualisées.',
        introduction:
          'La version publiée aide les équipes à examiner des estimations de coûts, d’énergie et de carbone pour Kubernetes au moyen de tableaux de bord et de rapports.',
        paragraphs: [
          'GreenKube est sous licence Apache-2.0 et conçu pour être auto-hébergé. Prometheus et Grafana font partie des intégrations publiées ; consultez la documentation de la version concernée pour connaître la configuration et les données nécessaires.',
          'Une estimation affichée n’est ni une mesure directe, ni une facture cloud, ni une promesse d’économies. Le résultat dépend de la télémétrie disponible, de la couverture des sources et de la configuration.',
        ],
        links: [
          {
            label: 'Lire la documentation',
            href: 'https://docs.greenkube.cloud/',
          },
          {
            label: 'Consulter les versions publiées',
            href: 'https://github.com/GreenKubeCloud/GreenKube/releases',
          },
        ],
      },
      {
        id: 'workflow',
        presentation: 'steps',
        eyebrow: 'Évolution du produit',
        title: 'De l’observation à un changement relu.',
        introduction:
          'La cible du produit s’organise autour de la revue par les opérateurs. Toutes les étapes ci-dessous ne sont pas livrées dans la version 0.3.0.',
        items: [
          {
            title: 'Observer',
            description:
              'Utilisez le contexte Kubernetes et l’intégration Prometheus/Grafana publiée pour examiner les vues disponibles sur les coûts, l’énergie et le carbone.',
            status: 'Disponible en 0.3.0',
          },
          {
            title: 'Prioriser avec des preuves',
            description:
              'Le moteur de preuves et de classement des recommandations est en développement ; il ne fait pas partie de la version publiée 0.3.0.',
            status: 'Aperçu sur dev',
          },
          {
            title: 'Proposer un changement Git',
            description:
              'Le bot de pull requests GitOps est un aperçu de développement, pas un moyen généralement disponible de modifier un cluster.',
            status: 'Aperçu sur dev',
          },
          {
            title: 'Vérifier le résultat',
            description:
              'La détection de l’application, la vérification et l’attribution de résultats mesurés sont encore en aperçu, pas des rapports d’économies de la version 0.3.0.',
            status: 'Aperçu sur dev',
          },
        ],
      },
      {
        id: 'outcomes',
        presentation: 'table',
        eyebrow: 'Interprétation',
        title: 'Distinguez les estimations des résultats.',
        introduction:
          'Un impact projeté et un résultat vérifié sont deux informations différentes. GreenKube 0.3.0 fournit des estimations et des rapports ; il ne garantit ni ne revendique des économies mesurées.',
        table: {
          caption: 'Sens des termes employés sur ce site',
          headers: ['Terme', 'Sens'],
          rows: [
            [
              'Projeté',
              'Impact potentiel estimé avant un changement. Une projection liée aux recommandations est en aperçu sur dev, pas un résultat généralement publié en 0.3.0.',
            ],
            [
              'Appliqué',
              'Changement observé dans un environnement ; la détection automatisée de l’application est en aperçu sur dev.',
            ],
            [
              'Mesuré',
              'Signaux observés dans le temps après un changement. L’attribution des résultats est en aperçu sur dev ; ce n’est ni une facture ni une mesure physique de l’énergie.',
            ],
            [
              'Vérifié',
              'Résultat contrôlé au regard de preuves ou de seuils de santé définis. Le processus de vérification est en aperçu sur dev et ne garantit pas d’économies.',
            ],
            [
              'Estimation',
              'Valeur modélisée ou répartie à partir de la télémétrie et des paramètres disponibles ; ce n’est pas une mesure physique directe.',
            ],
            [
              'Économies',
              'Non garanties. Une demande de ressources ou une estimation plus basse ne prouve pas une baisse de facture ou d’énergie.',
            ],
          ],
        },
      },
      {
        id: 'dimensions',
        presentation: 'cards',
        title: 'Trois préoccupations liées pour les équipes opérationnelles.',
        introduction:
          'Les vues publiées aident à étudier ces dimensions. Elles ne transforment pas chaque possibilité en action automatisée.',
        items: [
          {
            title: 'Coûts',
            description:
              'Examinez la visibilité des coûts et les estimations rapportées. Une répartition analytique n’est ni une facture ni une garantie de facturation.',
          },
          {
            title: 'Énergie et carbone',
            description:
              'Interprétez les estimations d’énergie et de carbone en tenant compte de la couverture, des hypothèses de source et de l’incertitude.',
          },
          {
            title: 'Capacité',
            description:
              'Servez-vous du contexte des ressources pour orienter l’analyse des opérateurs. Les recommandations et leur classement sont en aperçu sur dev.',
            status: 'Recommandations : aperçu sur dev',
          },
        ],
      },
      {
        id: 'data',
        presentation: 'data-flow',
        eyebrow: 'Périmètre des intégrations',
        title: 'Suivez les données, pas un chiffre accrocheur.',
        introduction:
          'Les intégrations publiées couvrent Kubernetes, Prometheus et Grafana. Les autres fournisseurs et données du modèle doivent être vérifiés dans la documentation de la version et de la configuration exactes.',
        code: {
          filename: 'perimetre-version.txt',
          lines: [
            'Kubernetes + Prometheus',
            '          ↓',
            'Estimations GreenKube : coûts, énergie et carbone',
            '          ↓',
            'Tableaux de bord et rapports (intégration Grafana)',
            '',
            'Classement, PR GitOps et vérification',
            '          └── Aperçu sur dev',
          ],
        },
        links: [
          {
            label: 'Voir les données carbone et leurs limites',
            page: 'carbon',
          },
        ],
      },
      {
        id: 'open-source',
        presentation: 'callout',
        eyebrow: 'Open source par défaut',
        title: 'Auto-hébergez le projet et consultez son code.',
        introduction:
          'GreenKube est un logiciel open source sous licence Apache-2.0, conçu pour être auto-hébergé dans Kubernetes. Le projet de base n’est pas conditionné par un contrat commercial.',
        links: [
          {
            label: 'Voir le code source',
            href: 'https://github.com/GreenKubeCloud/GreenKube',
          },
          {
            label: 'Lire la licence',
            href: 'https://github.com/GreenKubeCloud/GreenKube/blob/main/LICENSE',
          },
          {
            label: 'Lire la documentation',
            href: 'https://docs.greenkube.cloud/',
          },
        ],
      },
      {
        id: 'services',
        presentation: 'prose',
        title: 'Une aide facultative, distincte du projet.',
        paragraphs: [
          'Les équipes qui souhaitent un accompagnement humain peuvent discuter d’une évaluation de l’optimisation Kubernetes, de travaux de mise en œuvre ou d’un suivi continu. Le périmètre doit correspondre à la télémétrie, aux capacités publiées et au processus de changement réellement disponibles.',
          'Les services sont facultatifs. Ils ne débloquent pas de fonctionnalités du logiciel ; le projet open source reste disponible sans prestation.',
        ],
        links: [
          {
            label: 'Poser une question à la communauté',
            href: 'https://github.com/GreenKubeCloud/GreenKube/discussions',
          },
          { label: 'Découvrir les services facultatifs', page: 'services' },
        ],
      },
    ],
  },
  carbon: {
    id: 'carbon',
    title: 'Estimations carbone et énergie pour Kubernetes | GreenKube',
    description:
      'Comprenez les estimations d’énergie et de carbone de GreenKube pour Kubernetes : limites du proxy CPU, couverture des sources, replis, incertitude et allocation.',
    hero: {
      eyebrow: 'MÉTHODOLOGIE CARBONE',
      title: 'Des estimations carbone dont les limites sont visibles.',
      summary:
        'GreenKube 0.3.0 fournit une visibilité sur l’énergie et le carbone de Kubernetes au moyen d’estimations, de tableaux de bord et de rapports. Le modèle opérationnel repose sur le CPU ; ses résultats ne sont pas des mesures physiques directes au niveau du matériel ou du pod.',
      note: 'Les valeurs sont modélisées et réparties. Les sources disponibles, les replis et les valeurs par défaut dépendent de la version et de la configuration ; consultez la documentation de référence pour les détails d’implémentation.',
      actions: [
        {
          label: 'Lire la documentation carbone',
          href: 'https://docs.greenkube.cloud/',
        },
        { label: 'Voir la méthode générale', page: 'method' },
      ],
    },
    sections: [
      {
        id: 'what-is-estimated',
        presentation: 'prose',
        eyebrow: 'Périmètre',
        title: 'Une estimation n’est pas une mesure physique.',
        introduction:
          'Distinguez l’estimation de l’énergie opérationnelle, l’attribution de l’intensité carbone, l’allocation aux workloads, l’allocation des coûts et les éventuels impacts de cycle de vie représentés par les données prises en charge.',
        paragraphs: [
          'Le modèle opérationnel actuel repose sur le CPU. La télémétrie CPU est un proxy utilisé par un modèle ; elle n’équivaut pas à une lecture électrique du serveur, du nœud, du conteneur ou du pod. GreenKube ne revendique pas une comptabilité physique complète de l’énergie pour chaque classe de ressources.',
          'Le CO₂e attribué à un workload est une estimation répartie, et non une mesure directe de l’électricité consommée par un pod donné. L’infrastructure partagée et une attribution incomplète peuvent influer sur la répartition d’un total.',
          'Les estimations de coûts forment une vue d’allocation distincte. Ni un coût réparti ni une estimation carbone ne constitue une facture, une attestation ou la preuve qu’un changement proposé a réduit la consommation.',
        ],
      },
      {
        id: 'inputs',
        presentation: 'table',
        eyebrow: 'Sources et données',
        title: 'Ce qu’une donnée peut—et ne peut pas—indiquer.',
        introduction:
          'La documentation méthodologique publiée nomme les sources ci-dessous. La disponibilité effective d’une API dépend encore de sa configuration, de ses identifiants et de sa couverture. La colonne de disponibilité distingue les entrées intégrées des sources sélectionnables ou facultatives.',
        table: {
          caption: 'Sources documentées, rôles, replis et incertitudes',
          headers: [
            'Source',
            'Rôle et disponibilité',
            'Repli ou comportement si les données manquent',
            'Incertitude à prendre en compte',
          ],
          rows: [
            [
              'Prometheus',
              'Entrée publiée de télémétrie CPU pour le modèle d’énergie opérationnelle ; d’autres métriques peuvent être collectées sans entrer dans ce modèle.',
              'La couverture dépend des données collectées et de la période choisie. Les valeurs par défaut du modèle sont signalées comme estimées avec leurs motifs.',
              'Lacunes d’échantillonnage et approximation CPU-vers-puissance. La mémoire, le réseau, le disque et le GPU ne sont pas inclus dans ce modèle.',
            ],
            [
              'API Kubernetes',
              'Les métadonnées des nœuds et les spécifications des pods apportent le contexte des workloads et des instances pour les estimations et leur allocation.',
              'Un contexte manquant ou non pris en charge peut limiter l’attribution ; consultez la documentation de la version pour connaître les champs pris en charge.',
              'Nœuds partagés, propriété incomplète et différence entre le contexte du workload et l’infrastructure physique.',
            ],
            [
              'Electricity Maps',
              'Fournisseur par défaut de l’intensité carbone, avec des facteurs dépendant du lieu et du temps.',
              'Si les données du fournisseur sont indisponibles, GreenKube utilise les valeurs intégrées par zone ; en l’absence de valeur de zone, le repli global documenté est de 500 gCO₂e/kWh.',
              'Correspondance de zone, disponibilité de l’API, fraîcheur des données et écart entre une moyenne régionale et l’électricité réellement consommée.',
            ],
            [
              'Wattnet',
              'Fournisseur alternatif facultatif d’intensité carbone, sélectionnable depuis la version 0.3.0 ; la documentation indique 52 zones européennes à une résolution de 15 minutes.',
              'Le choix du fournisseur et les identifiants dépendent de la configuration ; si les données manquent, suivez le comportement de repli documenté.',
              'La couverture géographique est limitée ; la résolution temporelle et la méthode diffèrent selon le fournisseur.',
            ],
            [
              'Profils CCF intégrés et PUE',
              'Les profils de puissance statiques des instances alimentent le modèle CPU ; les profils PUE par fournisseur représentent les frais généraux du site.',
              'Pour une instance inconnue, les replis documentés sont un PUE de 1,3, 1 vCore, un minimum de 1 W/vCore et un maximum de 10 W/vCore. Le résultat est marqué comme estimé.',
              'Les profils sont des approximations ; le PUE dépend du fournisseur et le profil de repli peut ne pas correspondre au matériel ou au centre de données.',
            ],
            [
              'API Boavizta',
              'Entrée facultative d’impact incorporé sur le cycle de vie par type d’instance ; les résultats sont mis en cache et restent distincts de l’énergie opérationnelle.',
              'En l’absence de données d’instance, le repli documenté est un impact incorporé de 100 kg et une durée de vie matérielle supposée de 4 ans.',
              'Couverture de la source et hypothèses de durée de vie/allocation ; il ne s’agit pas d’un inventaire complet du cycle de vie.',
            ],
            [
              'OpenCost',
              'Entrée d’allocation des coûts pour leur visibilité, séparée des équations d’énergie et de carbone.',
              'La documentation indique que l’absence de données OpenCost peut produire une valeur de coût égale à zéro ; traitez-la comme une couverture manquante, pas comme une absence de coût vérifiée.',
              'Coûts partagés, règles d’allocation et écarts avec la facturation du fournisseur.',
            ],
          ],
        },
        links: [
          {
            label: 'Lire la méthodologie d’estimation énergétique',
            href: 'https://docs.greenkube.cloud/architecture/energy-estimation/',
          },
          {
            label: 'Lire le guide du fournisseur Wattnet',
            href: 'https://docs.greenkube.cloud/guide/wattnet/',
          },
          {
            label: 'Consulter la référence de l’API Boavizta',
            href: 'https://doc.api.boavizta.org/',
          },
          {
            label: 'Lire la documentation de l’API Electricity Maps',
            href: 'https://docs.electricitymaps.com/',
          },
          {
            label: 'Lire la méthodologie Cloud Carbon Footprint',
            href: 'https://www.cloudcarbonfootprint.org/docs/methodology',
          },
          {
            label: 'Lire la documentation OpenCost',
            href: 'https://www.opencost.io/',
          },
        ],
      },
      {
        id: 'energy-model',
        presentation: 'table',
        eyebrow: 'Modèle énergétique',
        title:
          'Le CPU sert de proxy à la puissance du nœud, pas de compteur du pod.',
        introduction:
          'Le modèle publié interpole linéairement entre la puissance minimale et maximale du profil d’instance à partir de l’utilisation CPU. Il n’intègre pas la mémoire, le réseau, le disque ou le GPU dans le calcul énergétique ; les workloads GPU ne sont pas pris en charge par ce modèle.',
        table: {
          caption: 'Modèle documenté d’énergie opérationnelle',
          headers: ['Étape', 'Calcul', 'Interprétation'],
          rows: [
            [
              'Puissance minimale et maximale',
              'P_idle = min_watts × vCPUs ; P_max = max_watts × vCPUs',
              'Les valeurs du profil sont des estimations par vCPU pour le type d’instance ou le profil de repli configuré.',
            ],
            [
              'Puissance du nœud',
              'P_node = P_idle + (P_max − P_idle) × U',
              'U est le ratio d’utilisation CPU entre 0 et 1 ; l’interpolation linéaire reste une approximation.',
            ],
            [
              'Énergie du nœud sur la période',
              'E_node = P_node × durée_en_secondes',
              'Le résultat est une énergie en joules pour la fenêtre d’observation choisie.',
            ],
            [
              'Allocation au pod',
              'E_pod = (cpu_pod / cpu_total_node) × E_node',
              'L’énergie du nœud est répartie selon la part d’utilisation CPU ; cela ne mesure pas la consommation physique d’un pod.',
            ],
          ],
        },
        paragraphs: [
          'L’utilisation CPU, la qualité du profil, la période d’observation et l’allocation entre pods et nœuds introduisent tous de l’incertitude. Le résultat est une estimation modélisée, pas une lecture matérielle directe.',
        ],
      },
      {
        id: 'carbon-model',
        presentation: 'table',
        eyebrow: 'Carbone opérationnel et cycle de vie',
        title: 'Distinguez les estimations opérationnelles et incorporées.',
        introduction:
          'Les équations documentées montrent comment l’implémentation combine l’énergie, l’intensité carbone et le PUE, ainsi que la répartition des données facultatives d’impact incorporé. Elles ne transforment pas une estimation de workload en mesure physique ou en inventaire carbone complet.',
        table: {
          caption: 'Équations documentées d’estimation carbone',
          headers: ['Composante', 'Calcul documenté', 'Limite'],
          rows: [
            [
              'CO₂e opérationnel',
              'CO₂e_g = E_joules / 3 600 000 × intensité_gCO₂e_par_kWh × PUE',
              'Utilise une énergie modélisée et un facteur d’intensité configuré ou de repli ; le PUE représente les frais généraux du site.',
            ],
            [
              'Impact incorporé',
              '(GWP_kg × 1 000 / durée_de_vie_heures) × (durée_pod_secondes / 3 600) × (CPU_pod / CPU_nœud)',
              'Utilise les données d’instance Boavizta lorsqu’elles existent ; le repli documenté est un GWP de 100 kg et une durée de vie de 4 ans.',
            ],
            [
              'Total combiné',
              'Estimation opérationnelle plus estimation incorporée lorsque cette dernière est disponible',
              'Ne constitue pas un inventaire complet de tous les services cloud, de toutes les étapes du cycle de vie ou des émissions de l’organisation.',
            ],
          ],
        },
        paragraphs: [
          'Les profils PUE sont des paramètres de configuration, pas des mesures de chaque centre de données. La documentation de référence présente actuellement des valeurs différentes pour OVH dans deux sections méthodologiques ; cette page évite donc de publier des valeurs par fournisseur avant la réconciliation de ces références.',
        ],
      },
      {
        id: 'pipeline',
        presentation: 'data-flow',
        eyebrow: 'Agrégation',
        title: 'De la télémétrie à une estimation répartie.',
        introduction:
          'Cette vue décrit des dépendances de données ; elle ne représente ni un instrument de précision ni un inventaire physique complet. La disponibilité de chaque entrée dépend du support documenté et de la configuration.',
        code: {
          filename: 'flux-estimation.txt',
          lines: [
            'Télémétrie Prometheus + contexte Kubernetes',
            'Profil d’instance CCF + PUE fournisseur',
            'Intensité réseau Electricity Maps / Wattnet',
            'Données incorporées Boavizta si disponibles',
            'Allocation OpenCost (vue des coûts distincte)',
            '                 ↓',
            '      Normalisation des données disponibles',
            '                 ↓',
            '      Allocation aux workloads',
            '                 ↓',
            '      Estimations d’énergie / CO₂e',
          ],
        },
        paragraphs: [
          'Le modèle opérationnel fondé sur le CPU est un proxy. L’intensité carbone et les éventuelles données d’infrastructure ou de cycle de vie prises en charge ajoutent des hypothèses ; l’allocation aux workloads répartit des sorties de modèle au lieu de mesurer directement chaque workload.',
          'L’absence d’une source ne signifie pas une énergie ou des émissions nulles. Consultez la documentation de la version pour savoir si un repli configuré est utilisé, si l’estimation est indisponible ou si la couverture est réduite.',
        ],
      },
      {
        id: 'fallbacks',
        presentation: 'steps',
        eyebrow: 'Données manquantes',
        title: 'Le comportement de repli fait partie du résultat.',
        introduction:
          'Les replis ne sont pas des valeurs par défaut interchangeables. Vérifiez le comportement pris en charge pour la version et la configuration de source exactes.',
        items: [
          {
            title: 'Repli d’intensité carbone',
            description:
              'Si l’API d’intensité carbone est indisponible, GreenKube utilise une valeur intégrée par zone ; sans valeur de zone, le repli global documenté est de 500 gCO₂e/kWh.',
          },
          {
            title: 'Profil d’instance inconnu',
            description:
              'Les replis documentés sont un PUE de 1,3, 1 vCore, un minimum de 1 W/vCore et un maximum de 10 W/vCore. Les métriques portent is_estimated et estimation_reasons.',
          },
          {
            title: 'Données d’impact incorporé manquantes',
            description:
              'Le repli Boavizta documenté est de 100 kg d’impact incorporé par instance avec une hypothèse de durée de vie matérielle de 4 ans ; le résultat reste modélisé.',
          },
          {
            title: 'Données d’allocation des coûts manquantes',
            description:
              'La documentation technique indique que l’absence de données OpenCost peut apparaître comme un coût nul. Cela ne prouve pas qu’un workload n’a aucun coût.',
          },
        ],
      },
      {
        id: 'uncertainty',
        presentation: 'callout',
        eyebrow: 'Limites',
        title: 'Lisez le modèle, pas seulement le résultat.',
        paragraphs: [
          'Une demande CPU plus basse ne signifie pas automatiquement une consommation électrique moindre. Elle peut améliorer l’efficacité de capacité sans réduire immédiatement la facture cloud.',
          'Le CO₂e au niveau d’un workload est une estimation répartie, pas une mesure directe de l’électricité consommée par un pod individuel. Les résultats dépendent de la qualité et de la fraîcheur des sources, de leur périmètre géographique, des hypothèses du modèle et de l’allocation.',
          'La mémoire, le réseau, le disque et le GPU ne sont pas inclus dans le modèle énergétique actuel ; les workloads GPU ne sont pas pris en charge par celui-ci. Certaines classes de ressources et possibilités liées aux ressources orphelines restent centrées sur les coûts plutôt que sur une mesure complète de l’énergie. N’inférez pas une intégration Kepler ou autre télémétrie énergétique directe.',
        ],
      },
      {
        id: 'example-calculation',
        presentation: 'table',
        eyebrow: 'Calcul illustratif',
        title: 'Un exemple chiffré avec les valeurs de repli documentées.',
        introduction:
          'Ce calcul illustre une opération arithmétique ; ce n’est ni un benchmark ni un workload mesuré. Le profil de repli, le PUE et l’intensité globale sont des valeurs par défaut documentées ; une utilisation CPU de 50 % pendant une heure est une donnée d’exemple, pas une valeur par défaut de GreenKube.',
        table: {
          caption:
            'Estimation opérationnelle d’un nœud sur la période illustrée',
          headers: ['Étape', 'Entrées', 'Résultat'],
          rows: [
            ['Puissance estimée du nœud', '1 W + (10 W − 1 W) × 0,5', '5,5 W'],
            [
              'Énergie sur une heure',
              '5,5 W × 3 600 secondes',
              '19 800 J = 0,0055 kWh',
            ],
            [
              'Estimation du CO₂e opérationnel',
              '0,0055 kWh × 500 gCO₂e/kWh × 1,3 PUE',
              '3,575 gCO₂e pour la période modélisée du nœud',
            ],
          ],
        },
        paragraphs: [
          'Le résultat utilise le repli global d’intensité et le profil d’instance inconnue documentés pour cette version. Ce n’est pas une mesure physique propre à un pod ; l’impact incorporé n’est pas inclus et aucune économie n’est démontrée. Les valeurs des pods sont réparties depuis l’énergie du nœud selon leur part d’utilisation CPU.',
        ],
      },
      {
        id: 'methodology',
        presentation: 'prose',
        eyebrow: 'Pour aller plus loin',
        title: 'La documentation de la version précise le comportement.',
        introduction:
          'Les équations et valeurs de repli de cette page sont reprises de la documentation méthodologique publiée. Les fournisseurs, la configuration et la couverture des sources varient encore selon les déploiements.',
        paragraphs: [
          'Pour connaître le comportement applicable à un déploiement, consultez la documentation de référence et vérifiez la liste des sources, les options de configuration, les replis et les limites du modèle de la version publiée.',
        ],
        links: [
          {
            label: 'Lire la méthodologie d’estimation énergétique',
            href: 'https://docs.greenkube.cloud/architecture/energy-estimation/',
          },
          {
            label: 'Lire le guide de suivi carbone',
            href: 'https://docs.greenkube.cloud/features/carbon-tracking/',
          },
          {
            label: 'Lire le guide du fournisseur Wattnet',
            href: 'https://docs.greenkube.cloud/guide/wattnet/',
          },
          { label: 'Découvrir la méthode générale', page: 'method' },
        ],
      },
    ],
  },
  'use-cases': {
    id: 'use-cases',
    title:
      'Cas d’usage des coûts, de l’énergie et du carbone Kubernetes | GreenKube',
    description:
      'Découvrez des usages opérationnels de la visibilité des coûts Kubernetes et des estimations d’énergie et de carbone, avec des limites de version explicites.',
    hero: {
      eyebrow: 'USAGES OPÉRATIONNELS',
      title: 'Commencez par la visibilité. Gardez les actions relisibles.',
      summary:
        'Avec GreenKube 0.3.0, examinez des estimations de coûts, d’énergie et de carbone pour Kubernetes dans des tableaux de bord et des rapports. Utilisez les intégrations Prometheus et Grafana documentées et considérez les estimations comme telles.',
      note: 'Le classement des recommandations, le bot de PR GitOps, la vérification après application, les résultats mesurés et les véritables connecteurs VPA/Karpenter sont en aperçu sur dev, pas dans la version 0.3.0.',
      actions: [
        { label: 'Essayer la démo', href: 'https://demo.greenkube.cloud/' },
        {
          label: 'Lire la documentation',
          href: 'https://docs.greenkube.cloud/',
        },
      ],
    },
    sections: [
      {
        id: 'rightsizing',
        presentation: 'outcomes',
        eyebrow: 'Demandes de ressources',
        title: 'Étudiez le dimensionnement avec son contexte.',
        introduction:
          'Le dimensionnement des ressources est une question utile pour les opérateurs ; le site ne doit pas laisser entendre que GreenKube 0.3.0 recommande ou applique automatiquement un changement.',
        paragraphs: [
          'Utilisez la télémétrie et les tableaux de bord documentés pour comprendre le contexte des workloads disponible. Validez indépendamment toute modification de demande de ressources, relisez-la selon votre processus habituel et surveillez son effet avec les outils de votre équipe.',
          'Le processus de pull request en aperçu de développement ne définit pas de prise en charge généralement disponible des workloads multi-conteneurs, des charts Helm ou des overlays Kustomize. Ces cibles ne sont pas des fonctionnalités publiées en 0.3.0.',
        ],
        items: [
          {
            title: 'Disponible aujourd’hui',
            description:
              'Visibilité, estimations, tableaux de bord et rapports sur les coûts, l’énergie et le carbone dans le produit publié, avec l’intégration Prometheus/Grafana.',
            status: '0.3.0',
          },
          {
            title: 'Preuves et classement des recommandations',
            description:
              'Le moteur de preuves et de classement des recommandations ne fait pas partie de la version 0.3.0.',
            status: 'Aperçu sur dev',
          },
          {
            title: 'Changement Git proposé et vérification',
            description:
              'L’automatisation des pull requests GitOps et la vérification de leur application ne sont pas des fonctionnalités publiées.',
            status: 'Aperçu sur dev',
          },
        ],
      },
      {
        id: 'waste-audit',
        presentation: 'cards',
        eyebrow: 'Revue du cluster',
        title: 'Appuyez-vous sur les rapports pour guider un audit humain.',
        introduction:
          'Un tableau de bord peut aider à poser des questions sur l’utilisation des ressources et les coûts. Cela ne signifie pas que chaque catégorie est détectée, attribuable ou corrigée automatiquement.',
        items: [
          {
            title: 'Examiner les coûts rapportés',
            description:
              'Utilisez la visibilité et les estimations de coûts comme aide à l’allocation. Confrontez leur interprétation à la facturation du fournisseur et aux données documentées de votre déploiement.',
          },
          {
            title: 'Vérifier la couverture énergie et carbone',
            description:
              'Vérifiez les workloads et les sources représentés avant de considérer un rapport comme un état des lieux complet du cluster.',
          },
          {
            title: 'Distinguer l’analyse de la remédiation',
            description:
              'La visibilité ne signifie pas que les ressources inactives sont détectées, les ressources orphelines nettoyées ou chaque action automatisée. Validez chaque action avec vos contrôles existants.',
          },
        ],
      },
      {
        id: 'finops',
        presentation: 'prose',
        eyebrow: 'FinOps',
        title: 'Ajoutez une vue Kubernetes aux discussions sur les coûts.',
        paragraphs: [
          'GreenKube fournit une visibilité et des estimations de coûts pour Kubernetes, avec des tableaux de bord et des rapports. L’attribution dépend des entrées disponibles et de leur allocation ; elle complète, sans les remplacer, les factures du fournisseur et les outils de coûts déjà utilisés.',
          'Comparez les coûts au contexte de capacité et de carbone sans supposer que le coût estimé le plus bas constitue toujours le meilleur choix opérationnel. Une possibilité estimée n’est pas une économie réalisée.',
        ],
      },
      {
        id: 'greenops',
        presentation: 'prose',
        eyebrow: 'GreenOps',
        title: 'Intégrez les hypothèses à votre état des lieux.',
        paragraphs: [
          'Les vues carbone et énergie sont des estimations modélisées. Notez les entrées, la couverture des sources, la période et les limites d’allocation utilisées ; la page Carbone explique le rôle du proxy CPU, des hypothèses d’infrastructure et de la qualité des données.',
          'GreenKube n’est ni un système complet de comptabilité carbone d’entreprise, ni un compteur physique au niveau du pod, ni un produit de conformité réglementaire.',
        ],
        links: [
          { label: 'Lire les limites des estimations carbone', page: 'carbon' },
        ],
      },
      {
        id: 'integrations',
        presentation: 'table',
        eyebrow: 'Périmètre des intégrations',
        title: 'Vérifiez le support dans la version publiée.',
        introduction:
          'La base de référence produit 0.3.0 utilisée pour ce site est volontairement limitée. Une intégration mentionnée dans une idée, une feuille de route ou une branche de développement n’est pas un connecteur publié.',
        table: {
          caption: 'État des intégrations approuvé pour ce contenu',
          headers: ['Intégration ou fonctionnalité', 'État du contenu'],
          rows: [
            [
              'Déploiement et contexte Kubernetes',
              'Projet publié ; consultez la documentation pour les versions et la configuration prises en charge.',
            ],
            [
              'Prometheus et Grafana',
              'Intégration publiée pour la visibilité, les tableaux de bord et les rapports.',
            ],
            [
              'Véritables connecteurs VPA et Karpenter',
              'Aperçu sur dev ; ne pas les présenter comme intégrations de la version 0.3.0.',
            ],
            [
              'Bot de PR GitOps et manifestes cibles',
              'Aperçu sur dev ; aucun périmètre de PR généralement disponible n’est revendiqué en 0.3.0.',
            ],
          ],
        },
        links: [
          {
            label: 'Consulter le guide des intégrations par version',
            href: 'https://docs.greenkube.cloud/',
          },
        ],
      },
    ],
  },
  method: {
    id: 'method',
    title: 'Méthode GreenKube et périmètre des versions',
    description:
      'Comprenez comment GreenKube 0.3.0 présente ses estimations Kubernetes et quelles fonctions de preuves, classement, GitOps et vérification restent en aperçu sur dev.',
    hero: {
      eyebrow: 'MÉTHODE ET PÉRIMÈTRE PRODUIT',
      title: 'Interprétez le résultat avant d’agir.',
      summary:
        'GreenKube 0.3.0 présente des estimations de coûts, d’énergie et de carbone dans des tableaux de bord et des rapports via les intégrations prises en charge. Les entrées et l’allocation déterminent ce que ces estimations peuvent indiquer.',
      note: 'Les preuves pour les recommandations, le classement, la vérification après application, l’automatisation des PR GitOps, les résultats mesurés et les véritables connecteurs VPA/Karpenter sont en aperçu sur dev.',
      actions: [
        {
          label: 'Lire la documentation technique',
          href: 'https://docs.greenkube.cloud/',
        },
        { label: 'Voir la méthodologie carbone', page: 'carbon' },
      ],
    },
    sections: [
      {
        id: 'released-flow',
        presentation: 'data-flow',
        eyebrow: 'Publié en 0.3.0',
        title: 'La télémétrie devient une estimation et un rapport.',
        introduction:
          'La version publiée porte sur la visibilité et les rapports, pas sur une boucle de changement automatisée. Les métriques requises, les détails du modèle et la configuration sont décrits dans la documentation versionnée.',
        code: {
          filename: 'flux-publie.txt',
          lines: [
            'Contexte Kubernetes + télémétrie Prometheus prise en charge',
            '                    ↓',
            '     Estimations des coûts / de l’énergie / du carbone',
            '                    ↓',
            '             Tableaux de bord et rapports',
            '                    ↓',
            '               Intégration Grafana',
          ],
        },
      },
      {
        id: 'estimate',
        presentation: 'prose',
        eyebrow: 'Estimation',
        title: 'Les entrées, l’allocation et l’incertitude vont ensemble.',
        paragraphs: [
          'Les coûts sont estimés ou répartis ; ils ne garantissent pas la facturation. Les valeurs d’énergie et de carbone sont produites par un modèle ; le modèle opérationnel repose sur le CPU et ne mesure pas directement la puissance du matériel.',
          'L’allocation aux workloads peut répartir des valeurs partagées, mais n’établit pas la consommation physique exacte d’un pod. Les métriques manquantes, le contexte incomplet, la fraîcheur des sources et la couverture géographique influent sur ce qu’un rapport représente.',
          'La page Carbone présente les familles de sources, les limites du proxy, les questions de repli et les limites d’allocation à prendre en compte pour interpréter un résultat.',
        ],
        links: [
          {
            label: 'Lire la présentation de la méthodologie carbone',
            page: 'carbon',
          },
        ],
      },
      {
        id: 'preview-loop',
        presentation: 'steps',
        eyebrow: 'Aperçu de développement',
        title: 'Une boucle d’optimisation plus large est à l’étude.',
        introduction:
          'Les fonctionnalités ci-dessous sont marquées « Aperçu sur dev » car elles ne sont pas publiées. Elles ne doivent pas être présentées comme des fonctions de la version 0.3.0.',
        items: [
          {
            title: 'Preuves et classement des recommandations',
            description:
              'Un moteur de recommandations qui collecte des preuves, expose la confiance ou le risque et classe les actions possibles n’est pas publié.',
            status: 'Aperçu sur dev',
          },
          {
            title: 'Bot de pull requests GitOps',
            description:
              'Un bot proposant des changements de manifestes pris en charge est en aperçu de développement. Aucun support universel des manifestes, de Helm ou de Kustomize n’est revendiqué.',
            status: 'Aperçu sur dev',
          },
          {
            title: 'Détection de l’application et vérification',
            description:
              'Détecter qu’un changement a été appliqué et vérifier les signaux après ce changement ne fait pas partie de la version 0.3.0.',
            status: 'Aperçu sur dev',
          },
          {
            title: 'Résultats mesurés et économies',
            description:
              'L’attribution des résultats et les rapports d’économies mesurées restent en aperçu. Aucune économie n’est garantie.',
            status: 'Aperçu sur dev',
          },
          {
            title: 'Connecteurs VPA et Karpenter',
            description:
              'Les véritables connecteurs ne sont pas publiés. Une branche de développement ou un concept de source de recommandation ne prouvent pas un support en production.',
            status: 'Aperçu sur dev',
          },
        ],
      },
      {
        id: 'review',
        presentation: 'callout',
        eyebrow: 'Contrôle humain',
        title: 'Un aperçu n’est pas un changement autonome en production.',
        paragraphs: [
          'Aucun texte du site ne doit laisser entendre que GreenKube 0.3.0 modifie la production, fusionne une pull request, annule un déploiement ou garantit un résultat sain. Les aperçus de développement ne dispensent pas de la revue des opérateurs ni des contrôles de changement de l’équipe.',
          'Un impact projeté sur les coûts ou le carbone n’est pas un résultat mesuré. Une demande CPU plus faible ne réduit pas automatiquement l’énergie ou une facture.',
        ],
      },
      {
        id: 'versioned-details',
        presentation: 'prose',
        title: 'Consultez la documentation de référence pour l’implémentation.',
        paragraphs: [
          'Cette page marketing évite de reproduire les procédures d’installation, les valeurs exactes du modèle ou des comportements d’intégration non vérifiés. Consultez la documentation de la version installée avant de configurer une source ou d’interpréter un rapport.',
        ],
        links: [
          {
            label: 'Ouvrir la documentation GreenKube',
            href: 'https://docs.greenkube.cloud/',
          },
          {
            label: 'Voir les versions publiées',
            href: 'https://github.com/GreenKubeCloud/GreenKube/releases',
          },
        ],
      },
    ],
  },
  community: {
    id: 'community',
    title: 'Communauté open source GreenKube',
    description:
      'Découvrez le projet GreenKube sous licence Apache-2.0, son code source, ses discussions et ses façons de contribuer, sans indicateurs communautaires inventés.',
    hero: {
      eyebrow: 'OPEN SOURCE',
      title: 'Construit au grand jour.',
      summary:
        'GreenKube est un projet Kubernetes auto-hébergeable sous licence Apache-2.0. Consultez le code, lisez la documentation et participez aux discussions publiques du projet.',
      note: 'La taille, l’adoption et l’activité de la communauté ne sont pas représentées par des compteurs ou des références clients non vérifiés.',
      actions: [
        {
          label: 'Voir GreenKube sur GitHub',
          href: 'https://github.com/GreenKubeCloud/GreenKube',
        },
        {
          label: 'Participer à une discussion',
          href: 'https://github.com/GreenKubeCloud/GreenKube/discussions',
        },
      ],
    },
    sections: [
      {
        id: 'project',
        presentation: 'prose',
        eyebrow: 'Principes du projet',
        title: 'Open source, auto-hébergeable et inspectable.',
        paragraphs: [
          'Le projet GreenKube est distribué sous licence Apache-2.0 et conçu pour fonctionner dans un environnement Kubernetes que vous exploitez. Le projet de base ne nécessite pas de contrat commercial.',
          'La base publiée en 0.3.0 couvre la visibilité des coûts, de l’énergie et du carbone avec des estimations, des tableaux de bord et des rapports, ainsi que l’intégration Prometheus/Grafana. Le classement des preuves, l’automatisation des PR, la vérification après application, les résultats mesurés et les véritables connecteurs VPA/Karpenter sont en aperçu sur dev.',
        ],
        links: [
          {
            label: 'Lire la licence Apache-2.0',
            href: 'https://github.com/GreenKubeCloud/GreenKube/blob/main/LICENSE',
          },
          {
            label: 'Parcourir le dépôt source',
            href: 'https://github.com/GreenKubeCloud/GreenKube',
          },
          {
            label: 'Lire la documentation technique',
            href: 'https://docs.greenkube.cloud/',
          },
        ],
      },
      {
        id: 'contribute',
        presentation: 'steps',
        eyebrow: 'Participer',
        title: 'Choisissez une contribution adaptée à votre expérience.',
        introduction:
          'Utilisez les canaux publics du projet pour discuter de changements et consultez les consignes de contribution actuelles avant de commencer.',
        items: [
          {
            title: 'Essayer la version publiée',
            description:
              'Suivez la documentation de la version et signalez des problèmes reproductibles pour la version que vous utilisez.',
          },
          {
            title: 'Améliorer la documentation',
            description:
              'Clarifiez l’installation, la configuration, la couverture des sources ou la méthode lorsque les consignes du projet le nécessitent.',
          },
          {
            title: 'Discuter des intégrations et des sources de recommandation',
            description:
              'Proposez une idée publiquement. Une discussion ou une branche de développement ne signifie pas qu’une intégration est publiée.',
          },
          {
            title: 'Contribuer au code',
            description:
              'Consultez les consignes du dépôt et proposez un changement à l’examen des responsables du projet.',
          },
        ],
        links: [
          {
            label: 'Ouvrir un ticket GitHub',
            href: 'https://github.com/GreenKubeCloud/GreenKube/issues',
          },
          {
            label: 'Participer aux discussions GitHub',
            href: 'https://github.com/GreenKubeCloud/GreenKube/discussions',
          },
        ],
      },
      {
        id: 'release-transparency',
        presentation: 'callout',
        title: 'Vérifiez la version avant de compter sur une fonctionnalité.',
        paragraphs: [
          'Les travaux non publiés sont indiqués comme aperçu sur dev. Consultez le journal des changements, les versions taguées et la documentation versionnée plutôt que de considérer une feuille de route, un connecteur en aperçu ou une automatisation en développement comme un comportement stable.',
        ],
        links: [
          {
            label: 'Consulter les versions',
            href: 'https://github.com/GreenKubeCloud/GreenKube/releases',
          },
          {
            label: 'Consulter le journal des changements',
            href: 'https://github.com/GreenKubeCloud/GreenKube/blob/main/CHANGELOG.md',
          },
        ],
      },
    ],
  },
  services: {
    id: 'services',
    title: 'Accompagnement facultatif en optimisation Kubernetes | GreenKube',
    description:
      'Découvrez un accompagnement humain facultatif pour évaluer ou mettre en œuvre l’optimisation Kubernetes. GreenKube reste open source et auto-hébergeable.',
    hero: {
      eyebrow: 'ACCOMPAGNEMENT PROFESSIONNEL FACULTATIF',
      title: 'Besoin d’aide pour appliquer l’optimisation Kubernetes ?',
      summary:
        'GreenKube est gratuit et open source. Les équipes peuvent discuter d’un accompagnement facultatif pour l’évaluation, la mise en œuvre ou le suivi, sans que les services conditionnent l’usage du projet.',
      note: 'Le périmètre doit s’appuyer sur les fonctionnalités publiées, les données disponibles et les contrôles de changement de votre équipe. Aucun tarif ni aucune économie garantie ne sont annoncés ici.',
      actions: [
        {
          label: 'Discuter d’un accompagnement',
          href: 'https://github.com/GreenKubeCloud/GreenKube/discussions',
        },
        {
          label: 'Lire la documentation',
          href: 'https://docs.greenkube.cloud/',
        },
      ],
    },
    sections: [
      {
        id: 'independent',
        presentation: 'callout',
        eyebrow: 'Open source avant tout',
        title: 'Les services sont facultatifs ; le projet reste ouvert.',
        paragraphs: [
          'Le projet GreenKube est sous licence Apache-2.0 et peut être auto-hébergé. Une prestation n’est pas nécessaire pour accéder au logiciel ni à ses fonctionnalités publiées.',
        ],
        links: [
          {
            label: 'Voir la licence du projet',
            href: 'https://github.com/GreenKubeCloud/GreenKube/blob/main/LICENSE',
          },
        ],
      },
      {
        id: 'assessment',
        presentation: 'cards',
        eyebrow: 'Périmètres d’accompagnement possibles',
        title:
          'Commencez par la question à laquelle votre équipe veut répondre.',
        introduction:
          'Il s’agit de domaines d’accompagnement humain facultatifs, et non de promesses d’automatisation du produit. Le périmètre, les éléments examinés et les livrables sont convenus avant le début des travaux.',
        items: [
          {
            title: 'Évaluation de l’optimisation',
            description:
              'Examiner un état des lieux Kubernetes disponible, discuter des estimations de coûts, d’énergie et de carbone, et identifier les questions à valider par les opérateurs.',
          },
          {
            title: 'Accompagnement à la mise en œuvre',
            description:
              'Aider les équipes à interpréter les éléments disponibles, planifier des changements et suivre leur processus habituel de revue et de déploiement.',
          },
          {
            title: 'Revue continue',
            description:
              'Accompagner l’interprétation périodique des rapports et l’évolution d’un backlog d’amélioration piloté par les opérateurs.',
          },
        ],
      },
      {
        id: 'release-boundary',
        presentation: 'prose',
        eyebrow: 'Périmètre de version',
        title: 'L’accompagnement ne change pas le contenu du logiciel.',
        paragraphs: [
          'GreenKube 0.3.0 fournit une visibilité sur les coûts, l’énergie et le carbone, avec des estimations, des tableaux de bord et des rapports, ainsi que l’intégration Prometheus/Grafana. Tout accompagnement doit présenter ces résultats comme des estimations et tenir compte de la couverture des sources et des limites d’allocation.',
          'Le classement des preuves, le bot de PR GitOps, la vérification après application, les résultats mesurés et les véritables connecteurs VPA/Karpenter restent en aperçu sur dev. Ils ne constituent ni des livrables stables ni des fonctionnalités de la version 0.3.0.',
        ],
        links: [{ label: 'Lire la méthode et ses limites', page: 'method' }],
      },
      {
        id: 'start-conversation',
        presentation: 'prose',
        title: 'Discutez d’un périmètre dans un espace public.',
        paragraphs: [
          'Utilisez les discussions du projet pour amorcer un échange. Ne publiez pas d’identifiants, de données privées de cluster ni d’informations opérationnelles sensibles dans un forum public.',
        ],
        links: [
          {
            label: 'Ouvrir les discussions GitHub',
            href: 'https://github.com/GreenKubeCloud/GreenKube/discussions',
          },
          {
            label: 'Découvrir le projet',
            href: 'https://github.com/GreenKubeCloud/GreenKube',
          },
        ],
      },
    ],
  },
} satisfies typeof englishPages;

export const frenchPages = pages;
