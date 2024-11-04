import { View } from "../framework/views/View"
import { User, UserProps } from "./User"

export class UserForm extends View<User, UserProps> {


    
    template() {
        return `
            <div>
                    <h1>User Form</h1>
                    <label>Nom</label>
                    <input/>
                    <button class="set-name" >Update Name</button>
                    <button class="set-age">Random Age</button>
                    <button class="set-user">Save User</button>
            </div>
        `
    }

    onSetAgeClick = () => {
        this.model.setRandomAge()
    }
    onSetNameClick = () => {
        const input = this.parents.querySelector('input')
        this.model.set({name: input!.value})
    }

    onSaveClick = () => {
        this.model.save()
    }

    eventsMap(): {[key: string] : () => void} {
        return{
            'click:.set-age': this.onSetAgeClick,
            'click:.set-name': this.onSetNameClick,
            'click:.set-user': this.onSaveClick
        }
        
    }

    

    onButtonClick() {
        console.log('Boutton cliqué')
    }

    
}

