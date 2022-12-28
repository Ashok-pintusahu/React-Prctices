import axios from "../config"

const productPath="/products"

const productServices={
    
    getAllProduct:()=>{
        return axios.get(productPath)
    },
    getProduct:(id)=>{
        return axios.get(productPath+`/${id}`)
        
    },
    // getAllProduct:()=>{
    //     return axios.get(productPath)
    // },
}

export default productServices;