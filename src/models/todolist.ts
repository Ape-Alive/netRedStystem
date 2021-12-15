import { getJson } from '@/services/todolist';

export default {
  namespace: 'todolist', //调用mobel 的时候是通过命名空间调用的（命名空间要保持唯一）
  state: {
    tagslist: [],
  }, //状态，跟react 中的state 类似
  // payload为调用API时传过去的参数，callback 为进行而外操作的时候，put通过API获取的数据通过向下传递给reducers,call可以访问外部的方法
  effects: {
    *fetchtage({ payload, callback }, { put, call }) {
      const response = yield call(getJson);
      //调用reducers
      yield put({
        type: 'setTagList', //类似于redux中的action的type
        payload: response,
      });
    },
  }, //调用服务端接口，获取数据
  reducers: {
    setTagList(state, action) {
      return { ...state, tagslist: action.payload };
    },
  }, //更新state
};
