import styles from './index.less';
import React, { useState, useEffect } from 'react';
import { getJson } from '@/services/todolist';
import { Button } from 'antd-mobile';
import { unstable_Toast as Toast } from '@ant-design/mobile';
export default function IndexPage() {
  const en = () => {
    console.log(process.env.react_env);

    let jsondata = getJson(null);
    jsondata.then((res) => {
      console.log(res);
    });
    // console.log(jsondata);
    //   let xhr=new XMLHttpRequest();
    //   xhr.onreadystatechange = function(){
    //     if(xhr.readyState == 4){
    //         if(xhr.status == 200){
    //            console.log("成功");

    //         }
    //     }
    // }
    //   xhr.open('get','http://localhost:8000/todolist/getinfo')
    //   xhr.send(null)
    //   // jsondata.then((result)=>{
    //   //   console.log("result", result);
    //   // });
  };
  useState();
  useEffect(() => {
    // en();
    return () => {};
  }, []);
  return (
    <div>
      <h1 className={styles.title}>Page index</h1>
      <Button
        onClick={() => {
          en();
        }}
      ></Button>
      {/* <Button color='success'></Button> */}
    </div>
  );
}
