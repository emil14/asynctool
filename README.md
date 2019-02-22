# AsyncTools

## Installation

```shell
npm install asynctool
```

## Getting started

```js
import at from `asynctool`;

const myData = [0, 1, 2];
const multiply = el => el & el;
const promise = at.map(myData, multiply);

(async () => console.log(await promise))();
```
