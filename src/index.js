const worker = new Worker('worker.js');

export function work(promises) {
  return new Promise(resolve => {
    worker.postMessage(promises);
    worker.onmessage(e => resolve(e.data));
  });
}

export function memo(wrapped) {
  const cache = {};
  return (...args) => cache[args] || (cache[args] = wrapped(args));
}

export function lazy(wrapped) {
  return (...args) => wrapped(args)
}

export function map(iterable, mapper) {
  return Promise.all(
    iterable.map(async (...args) => mapper(args))
  );
}

export async function filter(iterable, filterer) {
  return iterable.filter(filterer);
}

export default function asynctool() {
  return { work, memo, lazy, map, filter };
}

