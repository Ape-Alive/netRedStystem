import request from '../utils/request';

export const getJson = async function (params) {
  return request({
    url: 'todolist/getinf',
    method: 'get',
    params,
  });
};
