import request from '../utils/request';

export const getJson = async function (params) {
  return request.get('/todolist/getinfo', params);
};
