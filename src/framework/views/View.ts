import { HasId } from "../interfaces/HasId.interface"
import { Model } from "../Model"

export abstract class View<T extends Model<P>, P extends HasId> {
    regions:{[key: string] : Element} = {}

    constructor(
        public parents: Element,
        public model: T
    ){
        this.bindModel()
    }

    eventsMap(): {[key: string] : () => void}{
        return {}
    }
    abstract template() : string

    bindEvents(fragment: DocumentFragment) {
        const eventsMap = this.eventsMap()
        for(let eventKey in eventsMap){
            const [eventName, selector] = eventKey.split(':')
            fragment.querySelectorAll(selector).forEach(element => {
                element.addEventListener(eventName, eventsMap[eventKey])
            })
        }
    }

    bindModel(){
        this.model.on('change', () => this.render())
    }

    onRender() {} 

    render() {
        this.parents.innerHTML = ''
        const templateElement = document.createElement('template')
        templateElement.innerHTML = this.template()
        this.bindEvents(templateElement.content)
        this.parents.append(templateElement.content)
    }


    regionsMap(): {[key: string] : string}{
        return {}
    }

    bindRegions(fragment: DocumentFragment){
        const regionsMap = this.regionsMap()

        for (let regionsKey in regionsMap) {
            const selector =regionsMap[regionsKey]
            const element = fragment.querySelector(selector)

            if (element) {
                
            }
            
        }
    }
}

