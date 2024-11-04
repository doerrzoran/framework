import { View } from "../framework/views/View";
import { User, UserProps } from "./User";
import { UserList } from "./UserList";
import { UserShow } from "./UserShow";
import { UserForm } from './Userform';

export class UserEdit extends View<User, UserProps> {

    regionsMap(): { [key: string] : string} {
        return{
            userShow: '.user-show',
            userForm: '.user-form',
            userList: '.user-form'
        }
    }
    

    template(): string {
        return`
            <div>
                <div class="user-show"></div>
                <div class="user-form"></div>
                <div class="user-form"></div>
            </div>
        `
    }

    onRender():void {
        new UserShow(this.regions.userShow, this.model).render()
        new UserForm(this.regions.userForm, this.model).render()
        new UserList(this.regions.userList, this.model).render()
    }
   
}