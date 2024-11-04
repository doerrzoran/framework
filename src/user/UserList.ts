import { View } from "../framework/views/View";
import { User, UserProps } from "./User";

export class UserList extends View<User, UserProps> {
    


    template(): string {
        
        
       return  `
            <div>
                <h1>User list</h1>
                <select>
                    ${this.model.fetchAll()}
                </select>

            </div>
        `
    }

    
}