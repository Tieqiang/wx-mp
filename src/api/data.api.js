/* eslint-disable */
import axios from '../lib/api.request'

class DataApi {
  constructor(baseUrl) {
    this.baseUrl = baseUrl;
  }

  /**
   * 获取哦所有的数据
   * @returns {*}
   */
  findALl() {
    return axios.request({
      method: 'GET',
      url: this.baseUrl+"/find-all"
    })
  }

  /**
   * 分页获取所有的数据
   * @returns {*}
   */
  findAllByPage(){
    return axios.request({
      method:"GET",
      url:this.baseUrl+"/find-all-by-page"
    })
  }

  /**
   * 保存单独的对象
   * @param obj
   * @returns {*}
   */
  createNewObject(obj){
    return axios.request({
      method:"POST",
      url:this.baseUrl,
      data:obj
    })
  }

  saveALl(obj){
    return axios.request({
      method:"POST",
      url:this.baseUrl+"/save-all",
      data:obj
    })
  }

  delete(id){
    return axios.request({
      method:"delete",
      url:this.baseUrl+"/"+id
    })
  }

  mrege(obj){
    return axios.request({
      method:"PUT",
      url:this.baseUrl,
      data:obj
    })
  }

  invoke(options){
    return axios.request(options)
  }

}

export default DataApi
