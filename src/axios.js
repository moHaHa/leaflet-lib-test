import axios from 'axios'
const instance = axios.create({
  baseURL: '',
  headers:{
    'Access-Control-Allow-Origin': '*'
  },  
  
  validateStatus: () => true
})

instance.interceptors.response.use(
  (res) => {
    console.log(res);
    return res
  },
  (err) => {
    console.error(err)
  }
)
export default instance
