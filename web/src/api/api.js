import axios from "axios"

const serverHost = "http://localhost:5000"

export async function getGoods(){
    return await axios.get(serverHost+"/get_goods")
}