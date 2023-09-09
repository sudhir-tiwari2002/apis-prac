import axios from "axios";

export const fetchData = (url:string,params?:any) =>{

    return axios.get(url,{params});

}

export const postData = ( url:string,data:any) =>{
    return axios.post(url,data);
}
export const deleteData=( url:string,id:any) =>{
    return axios.delete(url,id)
}