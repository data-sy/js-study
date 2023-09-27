import axios from 'axios';

// axios.defaults.baseURL = 'http://15.164.232.32:8080/api/v1';
// axios.defaults.headers.post['Content-Type'] = 'application/json;charset=utf-8';
// axios.defaults.headers.post['Access-Control-Allow-Origin'] = '*';

export function useApi() {
  // 기본 API URL을 설정합니다.
  const baseURL = 'http://15.164.232.32:8080/api/v1';

  // Axios 인스턴스를 생성합니다.
  const api = axios.create({
    baseURL,
    headers: {
      'Content-Type': 'application/json;charset=utf-8',
    },
  });

  // GET 요청을 보내는 함수
  async function get(endpoint) {
    try {
      const response = await api.get(endpoint);
      return response.data;
    } catch (error) {
      throw new Error(`GET ${endpoint} failed: ${error.message}`);
    }
  }

  // POST 요청을 보내는 함수
  async function post(endpoint, data) {
    try {
      const response = await api.post(endpoint, data);
      return response.data;
    } catch (error) {
      throw new Error(`POST ${endpoint} failed: ${error.message}`);
    }
  }

  // PUT 요청을 보내는 함수
  async function put(endpoint, data) {
    try {
      const response = await api.put(endpoint, data);
      return response.data;
    } catch (error) {
      throw new Error(`PUT ${endpoint} failed: ${error.message}`);
    }
  }

  // DELETE 요청을 보내는 함수
  async function del(endpoint) {
    try {
      const response = await api.delete(endpoint);
      return response.data;
    } catch (error) {
      throw new Error(`DELETE ${endpoint} failed: ${error.message}`);
    }
  }

  return {
    get,
    post,
    put,
    del,
  };
}
