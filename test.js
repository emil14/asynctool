import { work, map } from './src/index.js';

// this should return promise and resolve it in the main thread later
console.log(
  map([0, 1, 2], el => el * 2)
)

// this should return promise and resolve it in the worker later
console.log(
  work(
    map([0, 1, 2], el => el * 2)
  )
)
