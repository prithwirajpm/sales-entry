import { commomAPI } from "./commonAPI";
import { BASE_URL } from "./serverURL";

export const getallItemsAPI = async()=>{
    return await commomAPI("GET",`${BASE_URL}/item`,"")
}

export const uploadSalesAPI = async (reqBody)=>{
    return await commomAPI("POST",`${BASE_URL}/detail`,reqBody)
}