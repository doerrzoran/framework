import axios from "axios"
import { HasId } from "./interfaces/HasId.interface"


export class ApiSync<P extends HasId> {

    constructor(
        public url: string
    ){}

    fetch(id: string) {
        return axios.get(`${this.url}/${id}`)
    
    }
    fetchAll() {
        return axios.get(`${this.url}`)
    
    }

    save(data: P){
        const {id} = data
        if(id) {
            return axios.put(`${this.url}/${id}`, data)
        }
           return axios.post(`${this.url}/${id}`, data)
        
    }
}