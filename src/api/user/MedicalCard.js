/* eslint-disable */
import DataApi from '../data.api'

const baseUrl = '/medical-card'

let MedicalCard = new DataApi(baseUrl)
MedicalCard.findMedicalCardsByOpenId=function(openId){
  let options={
    method:'get',
    url:MedicalCard.baseUrl+"/find-by-open-id?openId="+openId
  }
  return MedicalCard.invoke(options)
}
export {MedicalCard}
