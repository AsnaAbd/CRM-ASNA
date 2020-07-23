## composants angular :
`modules` => découper l'appli déclarer des composants, exporter des composants et des modules
`components` => affichage => components intelligents vs components stupides
`pipes` => class vocation à récupérer des datas en entrée et return ces datas transformées
`directives` => éxécuter du js sur n'importe quel template html et n'importe quel html element du dom
`services` => injection de dépendances par constructor qui permettent de partager des datas entre `composants` peut importe leur relation hiérarchique
`enums`
`interfaces`
`models`

## techniques :
`les transclusion` avec ng-content => permet de projeter du html dans un template html
les `@Input()` => permet de binder des datas d'un composant parent vers un composant enfant
les `services` => permet de communiquer entre plusieurs composants
les `@Output()` => permet de binder des datas d'un composant enfant vers un composant parent
le `property binding` avec la syntaxe  avec [] ou sans []
l'`event binding` avec la syntaxe ()
les `appels http` avec HttpClient => Observables()
le `router` avec lazyloading et preloading strategy
l'`encapsulation` => mode emulated et le None quand on veut avoir un fichier de component scss avec des styles globaux

## Life cycles :

## Router events :

## outils=>Extension à installer sur VS code
Auto Rename Tag