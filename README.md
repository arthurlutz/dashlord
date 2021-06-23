# DashLord

Tableau de bord des bonnes pratiques techniques

L'acquisition des données ainsi que la génération du rapport sont automatisés par des [GitHub actions](https://github.com/features/actions)

Exemples :
 - https://dashlord.incubateur.net
 - https://socialgouv.github.io/dashlord-fabrique
 - https://mtes-mct.github.io/dashlord
 - https://socialgouv.github.io/dnum-dashboard
 
## Usage

Pour déployer votre version de DashLord :

- Créer un nouveau repository [**à partir du template dashlord**](https://github.com/SocialGouv/dashlord)
- Éditer le fichier `dashlord.yml`
- Éditer le fichier `.github/workflows/scans.yml` si nécessaire
- Lancer `DashLord scans` dans l'onglet `Actions` de votre projet GitHub

Une fois les scans terminés, un rapport sera généré dans la branche `gh-pages` du repository. Vous devez aller dans l'onglet `Settings` du repository pour activer la fonctionnalité "GitHub Pages" et choisir la source `gh-pages`. Ceci permet de publier le rapport sur `https://[organisation].github.io/[repository]` (publiquement).

### GitHub actions

- Le workflow `DashLord scans` permet de lancer un scan sur les URLs, il est executé lors d'un changement dans le fichier `dashlord.yml`
- Le workflow `DashLord report` est lancé à la fin de chaque `DashLord scans` et produit le rapport sous forme de site web.

Ces workflows sont également déclenchables manuellement dans l'onglet "Actions"

## Customisation

- Le fichier [`dashlord.yml`](./dashlord.yml) permet de paramétrer les urls et quelques options du tableau de bord
- Le workflow [`.github/workflows/scans.yml`](./github/workflows/scans.yml) permet de customiser certains scanners
- Le workflow [`.github/workflows/report.yml`](./github/workflows/report.yml) permet de générer le rapport web en se basant sur [SocialGouv/dashlord-actions/report](https://github.com/SocialGouv/dashlord-actions).

### dashlord.yml

```yml
title: Dashboard title
# `tools` allows to activate only some of the tools in the report
tools:
  screenshot: true
  nmap: true
  zap: true
  wappalyzer: true
  httpobs: true
  testssl: true
  lighthouse: true
  thirdparties: true
  nuclei: false
  updownio: true
  dependabot: true
  codescan: true
urls:
  - url: https://www.free.fr
    title: Homepage free.fr
    tags:
      - telecom
      - provider
    repositories:
      - free/free-ui
      - free/free-css
    tools:
      nmap: false
  - url: https://www.lemonde.fr
    title: Homepage lemonde.fr
    tags:
      - presse
```

## Outils

Chaque outil peut être activé/désactivé dans le rapport avec la clé `tools` de dashlord.yml. 

| id           | outil                                                                                                                          | description                                                           |
| ------------ | ------------------------------------------------------------------------------------------------------------------------------ | --------------------------------------------------------------------- |
| lighthouse   | [Google Lighthouse](https://developers.google.com/web/tools/lighthouse)                                                        | Audit automatique de page web (best-practices a11y, webperf, seo...)  |
| zap          | [OWASP Zed Attack Proxy](https://www.zaproxy.org/docs/docker/baseline-scan)                                                    | Scan de vulnérabilités passif "baseline"                              |
| testssl      | [testssl.sh](https://testssl.sh)                                                                                               | Évaluation du niveau de confiance d'un certificat SSL                 |
| http         | [Mozilla HTTP observatory](https://www.zaproxy.org/docs/docker/baseline-scan)                                                  | Évalue le niveau de qualité/sécurité de la page web et de son serveur |
| thirdparties | [Third parties](https://github.com/SocialGouv/thirdparties)                                                                    | Liste tous les cookies et scripts externes                            |
| -            | [GeoIP2](https://www.maxmind.com/en/geoip-demo)                                                                                | Géolocalisation des ressources de la page web                         |
| nuclei       | [Nuclei](https://nuclei.projectdiscovery.io)                                                                                   | Détection d'erreurs de configuration courantes                        |
| wappalyzer   | [Wappalyzer](https://www.wappalyzer.com)                                                                                       | Détection des technologies web, Javascript, CMS, outillage...         |
| updownio     | [UpDown.io](https://www.updown.io)                                                                                             | Monitoring d'uptime et performance                                    |
| dependabot   | [Dependabot security alerts](https://docs.github.com/en/code-security/supply-chain-security/about-dependabot-security-updates) | Alertes de vulnerabilités                                             |
| nmap         | [nmap](https://nmap.org/) + [vulner](https://github.com/vulnersCom/nmap-vulners) port scan                                     | Ports ouverts et vulnérabilités     

## Contribute

Vous pouvez contribuer en remontant des issues de qualité, en améliorant la documentation, ou en ajoutant du code.

🤗 Toutes les suggestions sont bienvenues.

cf [CONTRIBUTING.md](./CONTRIBUTING.md)

### Dev

DashLord fonctionne en deux étapes :

1. **Acquisition des données** : Pour chaque URL, chaque outil est executé et génère un fichier JSON qui sera versionné dans le repository
2. **Génération du rapport** : À partir des données existantes, l'action [report](https://github.com/SocialGouv/dashlord-actions) aggrège, compresse les résultats et produit un rapport web statique.

Voir aussi : [SocialGouv/dashlord-actions](https://github.com/SocialGouv/dashlord-actions)

### Related repos

| Repo                                                                                        | desc                                                       |
| ------------------------------------------------------------------------------------------- | ---------------------------------------------------------- |
| [SocialGouv/dashlord-actions](https://github.com/SocialGouv/dashlord-actions)               | Dashlord specific actions                                  |
| [SocialGouv/dashlord-nuclei-action](https://github.com/SocialGouv/dashlord-nuclei-action)   | Dump nuclei result                                         |
| [SocialGouv/httpobs-action](https://github.com/SocialGouv/httpobs-action)                   | Dump Mozilla HTTP Observatory result                       |
| [SocialGouv/thirdparties-action](https://github.com/SocialGouv/thirdparties-action)         | Dump third party scripts scan result                       |
| [SocialGouv/wappalyzer-action](https://github.com/SocialGouv/wappalyzer-action)             | Dump Wappalyzer scan result                                |
| [MTES-MCT/dependabotalerts-action](https://github.com/MTES-MCT/dependabotalerts-action)     | Dump Github dependabot security alerts                     |
| [MTES-MCT/codescanalerts-action](https://github.com/MTES-MCT/codescanalerts-action)         | Dump Github CodeQL security alerts                         |
| [MTES-MCT/updownio-action](https://github.com/MTES-MCT/updownio-action)                     | Dump updown.io stats                                       |
| [MTES-MCT/nmap-action](https://github.com/MTES-MCT/nmap-action)                             | Dump nmap port scan stats                                  |
| [SocialGouv/thirdparties](https://github.com/SocialGouv/thirdparties)                       | thirdparty scripts database                                |
| [swinton/screenshot-website](https://github.com/swinton/screenshot-website)                 | grab website screenshot                                    |

