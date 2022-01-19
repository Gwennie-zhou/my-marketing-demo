import { $get, $post } from "../../../request";
import {getActivitesMock} from "./mock"

const ISMOCK = true

// 活动基本信息
export const getActivitesData = () => {
  if (ISMOCK) {
    return getActivitesMock()
  } else {
    return $get('/getActivitesData').then (res => { return res})
    .catch(err => {console.log(err)}) 
  }
} 