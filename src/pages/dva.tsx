//1，创建一个UI组件
//2创建model
//3将ui组件与mode进行连接

import React from 'react';
import { connect } from 'umi';

function Dva(props) {
  console.log(props);

  const { dispatch } = props;
  console.log(dispatch);

  const getData = () => {
    dispatch({
      type: 'todolist/fetchtage',
      payload: null,
    });
  };

  return (
    <>
      <h2>Todolist的使用</h2>
      <button onClick={getData}>获取列表数据</button>
    </>
  );
}

export default connect(({ todolist }) => ({ todolist }))(Dva);
