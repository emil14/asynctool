const worker = new Worker('worker.js');

export function work(promises, shouldTransfer) {
  return new Promise(resolve => {
    if (!shouldTransfer) {
      worker.postMessage(promises);
    } else {
      const arrayBuffer = Uint16Array.from(promises)
      worker.postMessage(arrayBuffer, [arrayBuffer]);
    }
    worker.onmessage(e => resolve(e.data));
  });
}

export function memo(wrapped) {
  const cache = {};
  return (...args) => cache[args] || (cache[args] = wrapped(args));
}

export function lazy(wrapped) {
  return async (...args) => wrapped(args)
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

