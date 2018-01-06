Acorta nombres de empresa eliminando palabras comunes


## Install

```
$ npm install --save acortador-nombre-empresa
```

## Usage

Brief example to show how to use:

```js
const  { acortar } = require('acortador-nombre-empresa');
//import { acortar } from 'acortador-nombre-empresa'

/* To normalize string */
const str = 'SOCIEDAD COMERCIALIZADORA LOS AROMOS LTDA';
acortar(str); // Los Aromos
```