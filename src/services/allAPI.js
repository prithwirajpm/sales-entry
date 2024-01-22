import { commomAPI } from "./commonAPI";
import { BASE_URL } from "./serverURL";
// get items
export const getallItemsAPI = async()=>{
    return await commomAPI("GET",`${BASE_URL}/item`,"")
}


// upload sales details
export const uploadSalesAPI = async (reqBody)=>{
    return await commomAPI("POST",`${BASE_URL}/detail`,reqBody)
}

// upload customerpayment details
export const uploadCustomerPayDetailsAPI = async (reqBody)=>{
    return await commomAPI("POST",`${BASE_URL}/header`,reqBody)
}

// Get customerItem Items
export const getCustomerItemsAPI = async()=>{
    return await commomAPI("GET",`${BASE_URL}/detail`,"")
}


// delete items
export const deletesalesItemsAPI = async(id)=>{
    return await commomAPI("DELETE",`${BASE_URL}/detail/${id}`,{})
}