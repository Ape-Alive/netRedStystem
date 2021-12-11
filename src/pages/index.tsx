import styles from './index.less';
import React, { useState, useEffect } from 'react';
import { getJson } from '@/services/todolist';
import { Button } from 'antd-mobile';
export default function IndexPage() {
  const en = () => {
    console.log(process.env.react_env);

    let jsondata = getJson(null);
    console.log(jsondata);

    // jsondata.then((result)=>{
    //   console.log("result", result);
    // });
  };
  useState();
  useEffect(() => {
    en();
    return () => {};
  }, []);
  return (
    <div>
      <h1 className={styles.title}>Page index</h1>
      <Button
        onClick={() => {
          getJson(null);
        }}
      >
        Success
      </Button>
      {/* <Button color='success'></Button> */}
    </div>
  );
}
