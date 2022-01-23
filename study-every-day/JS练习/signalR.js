//引入安装的signalr包
import * as signalR from '@aspnet/signalr';
import { SIGNALR_Url } from '@/utils';
// 定期检查token是否过期
import { checkTokenTime } from '@/utils/common';
const token = window.localStorage.getItem('token');
const tokenTime = window.localStorage.getItem('tokenTime');

export default class SocketService {
  // signalR实例
  ws = null;
  stream = null;
  instance = null;
  // 连接是否成功
  isConnected = false;
  // 需要执行的函数集
  callbacks = new Map();
  //默认发送类型
  type = 'send';
  //发送延迟次数
  connectCount = 0;
  /**
   * 单例模式
   */
  static get Instance() {
    if (!this.instance) {
      this.instance = new SocketService();
    }
    return this.instance;
  }
  /**
   *连接signalR
   * @memberof SocketService
   */
  async content() {
    this.ws = new signalR.HubConnectionBuilder()
      .withUrl(SIGNALR_Url, { accessTokenFactory: () => token })
      .build();
    try {
      //存在token并且没，并且没有过期
      if (token && !checkTokenTime(tokenTime, 0)) {
        // 开始连接
        await this.ws.start();
        //表示连接成功
        this.isConnected = true;

        this.onmessage();
      } else {
        // 如果在初试获取失败，则5秒后重连
        setTimeout(() => {
          this.content();
        }, 5000);
      }
    } catch (error) {
      // 如果在初试获取失败，则5秒后重连
      setTimeout(() => {
        this.content();
      }, 5000);
    }
  }
  /**
   * 监听消息的接收
   */
  onmessage() {
    this.ws.on(this.type, (e) => {
      if (e.eventType) {
        const cb = this.callbacks.get(e.eventType).callback;
        cb && cb.call(this, e.data);
      }
    });
  }

  /**
   *设置回调函数在map集上
   * @param {*} eventType
   * @param {*} cb
   * @memberof SocketService
   */
  setFn(eventType, data) {
    this.callbacks.set(eventType, {
      eventName: data.eventName,
      resourceId: data.resourceId,
      callback: data.callback,
    });
  }
  /**
   *删除回调函数在map集上
   * @param {*} eventName
   * @memberof SocketService
   */
  delFn(eventType) {
    this.callbacks.remove(eventType);
  }
  async send(type = 'send', eventType, data) {
    this.type = type;
    if (this.isConnected) {
      this.setFn(eventType, data);
      return this.ws
        .invoke(this.type, {
          eventName: data.eventName,
          resourceId: data.resourceId,
          callback: data.callback,
        })
        .then((codingId) => {
          console.log(codingId, '发送成功');
          return codingId;
        });
    } else {
      this.connectCount++;
      setTimeout(() => {
        this.send(type, data);
      }, 1000 * this.connectCount);
    }
  }

  /**
   *  关闭连接时回调
   * @memberof SocketService
   */
  close() {
    this.ws.onclose(() => {
      this.isconnected = false;
      this.callbacks.clear();
      setTimeout(() => {
        this.content();
      }, 5000);
    });
  }

  /**
   *在用户退出登录时调用logout确保退出登录时断开底层WebSocket
   * @memberof SocketService
   */
  logout() {
    this.ws.stop();
  }
}

SocketServic.Instance.connect();
const ws = SocketServic.Instance;

ws.send('subscribeAll', {
  eventName: 'getShipData',
  resourceId: 1,
  callback: () => {
    console.log(777);
  },
});
