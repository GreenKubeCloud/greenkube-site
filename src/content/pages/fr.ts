import { pages as englishPages } from './en';

export const pages = {
  home: {
    id: 'home',
    title: 'Visibilité et optimisation Kubernetes open source | GreenKube',
    description:
      'Découvrez la visibilité open source des coûts, de l’énergie et du carbone Kubernetes, les recommandations étayées et les workflows GitOps relus par les opérateurs.',
    hero: {
      eyebrow: 'OPTIMISATION KUBERNETES OPEN SOURCE',
      title: 'Optimisez Kubernetes, du diagnostic à la pull request.',
      summary:
        'GreenKube est un projet open source et auto-hébergeable pour comprendre les coûts, l’énergie et le carbone de Kubernetes, avec des recommandations et des workflows GitOps qui laissent le contrôle aux opérateurs.',
      note: 'Examinez les preuves, proposez des changements de manifestes pris en charge et comparez l’impact attendu aux résultats observés avant de décider quoi appliquer.',
      workflow: [
        {
          title: 'Télémétrie',
          description:
            'Examinez les estimations Kubernetes de coûts, d’énergie et de carbone via Prometheus et Grafana.',
        },
        {
          title: 'Recommandation et preuves',
          description:
            'Classez les recommandations avec des preuves à l’appui et un contexte opérationnel clair.',
        },
        {
          title: 'Diff Git et pull request',
          description:
            'Proposez des changements de manifestes pris en charge sous forme de diffs Git et de pull requests à relire.',
        },
        {
          title: 'Application et vérification',
          description:
            'Vérifiez les changements appliqués au regard des signaux après modification et de contrôles de santé définis.',
        },
        {
          title: 'Résultat mesuré',
          description:
            'Comparez l’impact estimé aux résultats observés sans considérer les estimations comme des économies garanties.',
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
        eyebrow: 'La plateforme',
        title: 'D’abord la visibilité, avec des estimations contextualisées.',
        introduction:
          'GreenKube aide les équipes à examiner les estimations Kubernetes de coûts, d’énergie et de carbone, les recommandations étayées et les changements proposés avec revue humaine.',
        paragraphs: [
          'GreenKube est sous licence Apache-2.0 et conçu pour être auto-hébergé. Prometheus et Grafana relient la télémétrie du cluster aux tableaux de bord, recommandations et rapports ; consultez la documentation pour connaître la configuration et les données nécessaires.',
          'Une estimation affichée n’est ni une mesure directe, ni une facture cloud, ni une promesse d’économies. Le résultat dépend de la télémétrie disponible, de la couverture des sources et de la configuration.',
        ],
        links: [
          {
            label: 'Lire la documentation',
            href: 'https://docs.greenkube.cloud/',
          },
          {
            label: 'Consulter les versions',
            href: 'https://github.com/GreenKubeCloud/GreenKube/releases',
          },
        ],
      },
      {
        id: 'workflow',
        presentation: 'steps',
        eyebrow: 'Workflow relu par les opérateurs',
        title: 'De l’observation à un changement relu.',
        introduction:
          'GreenKube relie la télémétrie, les preuves, les changements proposés et les vérifications après modification, tout en laissant les décisions de production aux opérateurs.',
        items: [
          {
            title: 'Observer',
            description:
              'Utilisez la télémétrie Kubernetes et les tableaux de bord Prometheus/Grafana pour examiner les estimations de coûts, d’énergie et de carbone.',
          },
          {
            title: 'Prioriser avec des preuves',
            description:
              'Comparez les recommandations à partir des preuves, du niveau de confiance et du contexte opérationnel.',
          },
          {
            title: 'Proposer un changement Git',
            description:
              'Créez des pull requests pour les changements de manifestes pris en charge et relisez-les selon le processus habituel de l’équipe.',
          },
          {
            title: 'Vérifier le résultat',
            description:
              'Vérifiez les changements appliqués et comparez les signaux après modification aux estimations et preuves initiales.',
          },
        ],
      },
      {
        id: 'outcomes',
        presentation: 'table',
        eyebrow: 'Interprétation',
        title: 'Distinguez les estimations des résultats.',
        introduction:
          'Un impact projeté, un changement observé et un résultat vérifié sont des informations différentes. Les estimations et les rapports ne garantissent pas d’économies.',
        table: {
          caption: 'Sens des termes employés sur ce site',
          headers: ['Terme', 'Sens'],
          rows: [
            [
              'Projeté',
              'Impact potentiel estimé avant un changement ; il s’agit d’une projection, pas d’une garantie.',
            ],
            [
              'Appliqué',
              'Changement détecté ou enregistré dans l’environnement cible.',
            ],
            [
              'Mesuré',
              'Signaux observés dans le temps après un changement ; ce n’est ni une facture ni une mesure physique de l’énergie.',
            ],
            [
              'Vérifié',
              'Résultat contrôlé au regard de preuves ou de seuils de santé définis ; cette vérification ne garantit pas d’économies.',
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
          'Les vues GreenKube aident à étudier ces dimensions. Elles ne transforment pas chaque possibilité en action automatisée.',
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
              'Servez-vous du contexte des ressources et des recommandations classées pour éclairer les décisions des opérateurs.',
          },
        ],
      },
      {
        id: 'data',
        presentation: 'data-flow',
        eyebrow: 'Périmètre des intégrations',
        title: 'Suivez les données, pas un chiffre accrocheur.',
        introduction:
          'GreenKube s’intègre à Kubernetes, Prometheus et Grafana. Consultez la documentation pour connaître la disponibilité des fournisseurs et les détails de configuration.',
        code: {
          filename: 'flux-optimisation.txt',
          lines: [
            'Kubernetes + Prometheus',
            '          ↓',
            'Estimations GreenKube : coûts, énergie et carbone',
            '          ↓',
            'Tableaux de bord et rapports (intégration Grafana)',
            '',
            'Recommandations étayées et pull requests GitOps',
            '                    ↓',
            '      Revue opérateur et vérifications après changement',
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
          'Les équipes qui souhaitent un accompagnement humain peuvent discuter d’une évaluation de l’optimisation Kubernetes, de travaux de mise en œuvre ou d’un suivi continu. Le périmètre doit correspondre à la télémétrie, aux capacités du produit et au processus de changement réellement disponibles.',
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
        'GreenKube fournit une visibilité sur l’énergie et le carbone de Kubernetes au moyen d’estimations, de tableaux de bord et de rapports. Le modèle opérationnel repose sur le CPU ; ses résultats ne sont pas des mesures physiques directes au niveau du matériel ou du pod.',
      note: 'Les valeurs sont modélisées et réparties. Les sources disponibles, les replis et les valeurs par défaut dépendent de la configuration ; consultez la documentation de référence pour les détails d’implémentation.',
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
              'Un contexte manquant ou non pris en charge peut limiter l’attribution ; consultez la documentation pour connaître les champs pris en charge.',
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
              'Fournisseur alternatif facultatif d’intensité carbone ; la documentation indique 52 zones européennes à une résolution de 15 minutes.',
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
          'L’absence d’une source ne signifie pas une énergie ou des émissions nulles. Consultez la documentation pour savoir si un repli configuré est utilisé, si l’estimation est indisponible ou si la couverture est réduite.',
        ],
      },
      {
        id: 'fallbacks',
        presentation: 'steps',
        eyebrow: 'Données manquantes',
        title: 'Le comportement de repli fait partie du résultat.',
        introduction:
          'Les replis ne sont pas des valeurs par défaut interchangeables. Vérifiez le comportement pris en charge pour la configuration de source.',
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
          'Le résultat utilise le repli global d’intensité et le profil d’instance inconnue documentés. Ce n’est pas une mesure physique propre à un pod ; l’impact incorporé n’est pas inclus et aucune économie n’est démontrée. Les valeurs des pods sont réparties depuis l’énergie du nœud selon leur part d’utilisation CPU.',
        ],
      },
      {
        id: 'methodology',
        presentation: 'prose',
        eyebrow: 'Pour aller plus loin',
        title: 'La documentation précise le comportement.',
        introduction:
          'Les équations et valeurs de repli de cette page sont reprises de la documentation méthodologique publiée. Les fournisseurs, la configuration et la couverture des sources varient encore selon les déploiements.',
        paragraphs: [
          'Pour connaître le comportement applicable à un déploiement, consultez la documentation de référence et vérifiez la liste des sources, les options de configuration, les replis et les limites du modèle.',
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
      'Découvrez des usages opérationnels de la visibilité des coûts Kubernetes, des estimations d’énergie et de carbone, des recommandations étayées et des changements relisibles.',
    hero: {
      eyebrow: 'USAGES OPÉRATIONNELS',
      title: 'Commencez par la visibilité. Gardez les actions relisibles.',
      summary:
        'Avec GreenKube, examinez les estimations Kubernetes de coûts, d’énergie et de carbone dans des tableaux de bord et des rapports, puis relisez les recommandations étayées et les changements proposés.',
      note: 'Les recommandations et les pull requests GitOps sont conçues pour la revue des opérateurs ; les estimations et résultats dépendent de la télémétrie, des sources et de la configuration.',
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
          'Utilisez les recommandations étayées pour étudier le dimensionnement des ressources tout en gardant les changements relisibles par l’équipe.',
        paragraphs: [
          'Utilisez la télémétrie et les tableaux de bord pour comprendre le contexte des workloads. Relisez les changements de demandes de ressources selon votre processus habituel et surveillez leurs effets avec les outils de l’équipe.',
          'Le workflow de pull requests GitOps propose des changements de manifestes pris en charge pour revue ; les cibles dépendent de l’intégration et de la configuration documentées.',
        ],
        items: [
          {
            title: 'Disponible aujourd’hui',
            description:
              'Visibilité, estimations, tableaux de bord et rapports sur les coûts, l’énergie et le carbone avec l’intégration Prometheus/Grafana.',
          },
          {
            title: 'Preuves et classement des recommandations',
            description:
              'Classez les recommandations à partir de preuves et du contexte opérationnel.',
          },
          {
            title: 'Changement Git proposé et vérification',
            description:
              'Proposez des changements de manifestes pris en charge par pull request GitOps et vérifiez les signaux après modification.',
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
        title: 'Vérifiez le support des intégrations.',
        introduction:
          'GreenKube relie la télémétrie Kubernetes, l’allocation des coûts et les données carbone aux recommandations et aux workflows GitOps relus par les opérateurs.',
        table: {
          caption: 'Intégrations et workflows d’optimisation',
          headers: ['Intégration ou fonctionnalité', 'État du contenu'],
          rows: [
            [
              'Déploiement et contexte Kubernetes',
              'Fournit le contexte des nœuds et des workloads pour les estimations, recommandations et allocations.',
            ],
            [
              'Prometheus et Grafana',
              'Fournit la télémétrie, les tableaux de bord et les rapports sur les coûts, l’énergie et le carbone.',
            ],
            [
              'Véritables connecteurs VPA et Karpenter',
              'Relie les recommandations de ressources aux configurations VPA et Karpenter prises en charge.',
            ],
            [
              'Bot de PR GitOps et manifestes cibles',
              'Propose des changements pour les manifestes pris en charge sous forme de pull requests à relire.',
            ],
          ],
        },
        links: [
          {
            label: 'Consulter le guide des intégrations',
            href: 'https://docs.greenkube.cloud/',
          },
        ],
      },
    ],
  },
  method: {
    id: 'method',
    title: 'Méthode GreenKube et workflows d’optimisation',
    description:
      'Comprenez la méthode GreenKube pour les coûts, l’énergie et le carbone Kubernetes, et comment les recommandations étayées et workflows GitOps guident les décisions des opérateurs.',
    hero: {
      eyebrow: 'MÉTHODE ET PÉRIMÈTRE PRODUIT',
      title: 'Interprétez le résultat avant d’agir.',
      summary:
        'GreenKube présente des estimations de coûts, d’énergie et de carbone dans des tableaux de bord et des rapports, avec des recommandations étayées et des propositions GitOps relisibles.',
      note: 'Les entrées, la couverture des sources et l’allocation déterminent ce que les estimations et résultats après changement peuvent indiquer.',
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
        id: 'optimization-flow',
        presentation: 'data-flow',
        eyebrow: 'De la télémétrie à l’action',
        title: 'La télémétrie devient une estimation et un rapport.',
        introduction:
          'Le workflow associe visibilité et rapports à des recommandations étayées et des propositions GitOps. La documentation décrit les métriques requises, les détails du modèle et la configuration.',
        code: {
          filename: 'flux-optimisation.txt',
          lines: [
            'Contexte Kubernetes + télémétrie Prometheus prise en charge',
            '                    ↓',
            '     Estimations des coûts / de l’énergie / du carbone',
            '                    ↓',
            '             Tableaux de bord et rapports',
            '                    ↓',
            '       Recommandations étayées',
            '                    ↓',
            '       Pull request GitOps et revue',
            '                    ↓',
            '       Vérification après changement',
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
        id: 'optimization-loop',
        presentation: 'steps',
        eyebrow: 'Workflow d’optimisation',
        title: 'Des preuves à un changement relu.',
        introduction:
          'GreenKube relie les preuves des recommandations, les propositions GitOps et les vérifications après changement, tout en laissant les décisions de production aux opérateurs.',
        items: [
          {
            title: 'Preuves et classement des recommandations',
            description:
              'Collectez des preuves, exposez le niveau de confiance ou le risque et classez les actions possibles pour revue.',
          },
          {
            title: 'Bot de pull requests GitOps',
            description:
              'Proposez des changements de manifestes pris en charge par pull request ; les cibles dépendent de l’intégration configurée.',
          },
          {
            title: 'Détection de l’application et vérification',
            description:
              'Détectez les changements appliqués et vérifiez les signaux après modification selon des preuves ou seuils de santé définis.',
          },
          {
            title: 'Résultats mesurés et économies',
            description:
              'Comparez les résultats observés aux estimations ; l’attribution dépend des données et ne garantit pas d’économies.',
          },
          {
            title: 'Connecteurs VPA et Karpenter',
            description:
              'Reliez les configurations VPA et Karpenter prises en charge aux recommandations de ressources.',
          },
        ],
      },
      {
        id: 'review',
        presentation: 'callout',
        eyebrow: 'Contrôle humain',
        title: 'Gardez les changements de production sous contrôle.',
        paragraphs: [
          'GreenKube propose des changements par pull request pour les cibles prises en charge ; les équipes les relisent et les fusionnent selon leurs contrôles habituels. Le logiciel ne fusionne pas automatiquement les changements, n’annule pas les déploiements et ne garantit pas un résultat sain.',
          'Un impact projeté sur les coûts ou le carbone n’est pas un résultat mesuré. Une demande CPU plus faible ne réduit pas automatiquement l’énergie ou une facture.',
        ],
      },
      {
        id: 'implementation-details',
        presentation: 'prose',
        title: 'Consultez la documentation de référence pour l’implémentation.',
        paragraphs: [
          'Cette page marketing évite de reproduire les procédures d’installation, les valeurs exactes du modèle ou les comportements d’intégration qui dépendent de la configuration. Consultez la documentation avant de configurer une source ou d’interpréter un rapport.',
        ],
        links: [
          {
            label: 'Ouvrir la documentation GreenKube',
            href: 'https://docs.greenkube.cloud/',
          },
          {
            label: 'Consulter les versions',
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
          'La plateforme associe les estimations de coûts, d’énergie et de carbone aux tableaux de bord, rapports, recommandations étayées, pull requests GitOps et vérifications après changement.',
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
            title: 'Essayer GreenKube',
            description:
              'Suivez la documentation et signalez des problèmes reproductibles avec la configuration utilisée.',
          },
          {
            title: 'Améliorer la documentation',
            description:
              'Clarifiez l’installation, la configuration, la couverture des sources ou la méthode lorsque les consignes du projet le nécessitent.',
          },
          {
            title: 'Discuter des intégrations et des sources de recommandation',
            description:
              'Discutez publiquement des intégrations, des sources de recommandation et des workflows pris en charge.',
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
        title: 'Suivez le journal des changements du projet.',
        paragraphs: [
          'Le journal des changements et la liste des versions retracent l’évolution du projet. Consultez la documentation technique pour l’installation et la configuration actuelles.',
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
        eyebrow: 'Fonctionnalités du produit',
        title: 'Associez les preuves à la revue des opérateurs.',
        paragraphs: [
          'GreenKube fournit une visibilité sur les coûts, l’énergie et le carbone, avec des estimations, des tableaux de bord et des rapports, ainsi que l’intégration Prometheus/Grafana, des recommandations étayées, des pull requests GitOps et des vérifications après changement. Tout accompagnement doit tenir compte de la couverture des sources, des limites d’allocation et des contrôles de l’équipe.',
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
