/*
 * @Author: your name
 * @Date: 2021-08-10 11:52:26
 * @LastEditTime: 2021-08-12 09:30:42
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \vue3.0-cli-ts\src\store\index.ts
 */
import { createStore } from "vuex";

interface obj {
  value?: string | number;
  [key: string]: any;
}

const options = {
  state() {
    return {
      currentCount: 100,
      list: ["a1", "a2", "a3"],
    };
  },
  getters: {
    listLength(state: any): number {
      return state.list.length;
    },
  },
  mutations: {
    add(state: any, payload: obj): void {
      state.currentCount += payload.value;
    },
  },
  actions: {
    yibuAdd(context: { commit: (arg0: string, arg1: obj) => void; state: any }, payload: obj) {
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          resolve("成功了");
          console.log(context.state);
          context.commit("add", payload);
        }, 1000);
      });
    },

    async asyncAdd(context: { commit: (arg0: string, arg1: obj) => void }, payload: obj) {
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          resolve("async成功");
          context.commit("add", payload);
        }, 1000);
      });
    },
  },
  modules: {},
};

const store = createStore(options);

export default store;
