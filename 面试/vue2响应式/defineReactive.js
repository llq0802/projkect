import observer from './observe.js';
import Dep from './Dep.js';

export default function defineReactive(targetObj, key, val) {
  if (arguments.length === 2) val = obj[key];
  let dep = new Dep();
  let childOb = observer(val);

  Object.defineProperty(targetObj, key, {
    configurable: true,
    enumerable: true,
    get() {
      return val;
    },
    set(newValue) {
      if (newValue === val) return;
      childOb = observer(val);
      val = newValue;
      dep.notify();
    },
  });
}
