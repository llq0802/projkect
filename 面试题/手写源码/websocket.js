/*
 * @Author: your name
 * @Date: 2021-11-22 14:38:15
 * @LastEditTime: 2021-12-10 12:22:21
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: \vue3.0-cli-ts\study-every-day\websocket.js
 */

//  原生WebSocket 封装成单例模式
const instance = Symbol('instance');
class SocketService {
  ws = null;
  isConnected = false;
  callbacks = {};
  cbs = [];
  static [instance] = null;
  static get Tnstance() {
    if (!this[instance]) {
      this[instance] = new SocketService();
    }
    return this[instance];
  }
  content() {
    this.ws = new WebSocket('ws://82.157.123.54:9010/ajaxchattest');
    this.ws.onopen = (e) => {
      this.isConnected = true;
    };
    this.ws.onclose = (e) => {
      this.isConnected = false;
      setTimeout(() => {
        this.content();
      }, 1000);
    };
    this.ws.onmessage = (e) => {
      console.log(e);
      let res = JSON.parse(e.data);
      const typeFn = res.typeFn;
      if (typeFn) {
        if (res.action === 'getData') {
          this.callbacks[typeFn].call(this, res.data.data);
        }
      }

      this.cbs.forEach((item) => {
        if (typeFn === item.typeFn) item.value.call(this);
      });
    };
  }
  setFn(value, cb) {
    this.callbacks[value] = cb;
    this.cbs.push({
      value: cb,
      typeFn: value,
    });
  }
  removeFn(value) {
    this.callbacks[value] = null;
  }
  send(data) {
    if (this.isConnected) {
      this.ws.send(data);
    } else {
      setTimeout(() => {
        this.send(data);
      }, 1000);
    }
  }
}
SocketService.Tnstance.content();
SocketService.Tnstance.send('123');
