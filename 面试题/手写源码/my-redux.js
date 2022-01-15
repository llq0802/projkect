/*
 * @Author: your name
 * @Date: 2021-12-27 14:21:47
 * @LastEditTime: 2022-01-04 09:32:29
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: \my-react\src\redux\my-redux.js
 */

import React, { Component, useContext, createContext } from 'react';
import PropTypes from 'prop-types';
let MyContext = createContext();
let { Provider } = MyContext;

// mapState=(state)=>(
//   {
//     count:state.count
//   }
// )

// mapDispatch=(dispatch)=>(
//   {
//     setCount:(value)=>(dispatch({type:'setCount',value}))
//   }
// )
export class Provider extends Component {
  static propTypes = {
    store: PropTypes.object.isRequired,
  };
  render() {
    const stroe = this.props.store;
    return <Provider value={{ stroe }}>{this.props.children}</Provider>;
    // return  React.Children.only(this.props.children)
  }
}

export function connect(mapState = (state) => state, mapDispatch = (dispatch) => dispatch) {
  return (UiComponent) => {
    return class UU extends Component {
      static contextType = MyContext;
      componentDidMount() {
        const { store } = this.context; // 从 Context 中拿到 store 对象
        this.state = { ...store };
        this.stateProps = mapState(store.getState());
        let dispatchProps;
        if (typeof mapDispatch === 'function') {
          dispatchProps = mapDispatch(store.dispatch);
        } else {
          dispatchProps = {};
          Object.keys(mapDispatch).forEach((itemKey) => {
            const actionCreator = mapDispatch[itemKey];
            dispatchProps[itemKey] = (...args) => {
              store.dispatch(actionCreator(...args));
            };
          });
        }
        this.dispatchProps = dispatchProps;
        store.subscribe(() => {
          mapState(store.getState());
        });
      }

      render() {
        return <UiComponent {...this.stateProps} {...this.dispatchProps} />;
      }
    };
  };
}

/**
 *
 * @param {* function} reducer
 * @returns {* object } getStore dispatch subscribe,
 */
export function createStore(reducer) {
  // 调用reducer获取初始值state
  let state = reducer(undefined, '@@/init');
  // 保存监听state更新后的回调函数的数组
  const callbacks = [];
  // 返回state的值
  function getStore() {
    return state;
  }
  // 分发action对象 调用reducer函数 更新state
  function dispatch(action) {
    let newState = reducer(state, action.type);
    state = newState;
    callbacks.forEach((item) => {
      item();
    });
  }

  // 监听state更新后的回调函数
  function subscribe(callback) {
    callbacks.push(callback);

    return {
      //取消监听
      unsubscribe() {
        const index = callbacks.indexOf(callback);
        callbacks.splice(index, 1);
      },
    };
  }
  //返回stroe对象
  return {
    getStore,
    dispatch,
    subscribe,
  };
}

/**
 * 合并reducer方法
 * @param {*object} reducers
 * @returns {*function}
 */
export function combineReducers(reducers) {
  // 返回一个总的reducer函数，state是总的状态
  return (state = {}, action) => {
    return Object.keys(reducers).reduce((prv, cur) => {
      prv[cur] = reducers[cur](state[cur], action);
      return prv;
    }, {});
  };
}
