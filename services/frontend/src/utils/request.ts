import axios from 'axios';

export default class Request {

    domain:string;
    prefix:string;

    constructor(){
        this.domain = 'http://127.0.0.1:8000'
        this.prefix = ''
    }

    async get(endpoint:string){
        try{
            const response = await axios.get(`${this.domain}/${endpoint}`)
            return response.data
        }catch(e){
            return {success:false,message:'Ocurrió un error interno.',error: e}
        }
    }

    async post(endpoint:string,data?:any){
        try{
            const response = await axios.post(`${this.domain}/${endpoint}`,data)///${this.prefix}
            return response.data
        }catch(e){
            return {success:false,message:'Ocurrió un error interno.',error: e}
        }
    }

    async put(endpoint:string,data?:any){
        try{
            const response = await axios.put(`${this.domain}/${endpoint}`,data)
            return response.data
        }catch(e){
            return {success:false,message:'Ocurrió un error interno.',error: e}
        }
    }

    async delete(endpoint:string){
        try{
            const response = await axios.delete(`${this.domain}/${endpoint}`)
            return response.data
        }catch(e){
            return {success:false,message:'Ocurrió un error interno.',error: e}
        }
    }
}