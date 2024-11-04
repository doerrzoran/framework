import axios from "axios";
import { Eventing } from "./Eventing";


export  class Collection<T, P> {
    models: T[] = []
    events: Eventing = new Eventing()

    constructor(
        public url: string,
        public deserialization: (json: P) => T
    ) {}

    
    on = this.events.on
    
    trigger = this.events.trigger
    
    fetch() : void {
        axios.get(this.url)
        .then(response => {
            response.data.forEach((json: P) => {
                const user = this.deserialization(json)
                this.models.push(user)
            })
            .this.trigger('change')
        })
    }
}