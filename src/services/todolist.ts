import request from '../utils/request';

export const getJson = async function (params) {
  return request({
    url: 'todolist/getinfo',
    method: 'get',
    params,
  });
};
