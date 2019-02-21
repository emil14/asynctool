const worker = new Worker('worker.js');

export function work(promises) {
  return new Promise(resolve => {
    worker.postMessage(promises);
    worker.onmessage(e => resolve(e.data));
  });
}

export function map(promises) {
  const promises = data.map(async (...args) => handler(args));
  return Promise.all(promises);
}

export default function asynctools() {
  return { work, map };
}

