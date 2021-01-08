## Présentation du projet

**Lebondev** est un site web vous permettant de vendre ou d'acheter des développeurs d'occasion.
Il est possible d'échanger, via notre page "Chat", avec les autres membres pour négocier votre développeur au meilleur prix.

_"Faites un petit geste pour la planète en sauvant de la matière grise !"_

## Fonctionnalités

### Message privé

Comme demandé dans le test, il est possible d'envoyer des "messages privés".

### Textarea auto-resize

Le composant `Textarea` ajuste automatiquement son nombre de `rows` (donc sa hauteur) en fonction du contenu et des valeurs définies dans le code:

```
minRows = 1
maxRows = 6
```

Il permet également de _submit_ le formulaire en appuyant sur sa touche `entrée`.
Il est toujours possible de faire des sauts de ligne via:

```
shift + enter
```

### Conversation de groupe

L'UI est capable d'afficher des conversations avec plusieurs membres.

## Améliorations possibles

### Textarea hardcoded values

Le composant `Textarea` utilise actuellement des valeurs en pixel pour sa `fontSize` et `lineHeight`. Ces valeurs ne sont pas en `rem` car elles sont utilisées dans le composant pour ajuster automatiquement le nombre de `rows` du tag `textarea`.

### Searchbar API

Actuellement la searchbar ne fonctionne pas car elle n'a aucun endpoint.

J'ai choisi d'appeler une API plutôt que de filtrer en front parmi les conversations listées car à terme cette liste de conversations sera paginée.

Il sera donc plus intéressant de pouvoir sortir des résultats n'étant pas encore affichés par la liste.

### Conversation Context

J'aurais aimé créer un context (`useContext`) pour les **Conversations** et placer son `Provider` autour de la page **Chat**.

Il aurait été en charge de fournir les methods et la data concernant les **Conversations**.

### Emoji picker

Pour un peu plus de fun, il aurait été sympa d'ajouter un [emoji picker](https://github.com/missive/emoji-mart).

> Sur mac vous pouvez quand même le faire via `control + command + space` 😉

## Démarrer le projet

Il est conseillé de suivre le [README](https://github.com/TristanBlg/lebondev/blob/master/LEBONCOIN.md).

### Développement

```
yarn start
```

> [http://localhost:3000](http://localhost:3000)

### Production

#### Build

```
yarn build
```

#### Serve

```
// yarn global add serve

serve -s build
```

> [http://localhost:5000](http://localhost:5000)
