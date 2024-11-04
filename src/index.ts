import { User } from "./user/User";
import { UserList } from "./user/UserList";

const rootElement = document.getElementById('root')
const john = User.build({name: 'JOHN', age: 20})

if(rootElement){
    
}
const userList = new UserList(rootElement, john)
    userList.render()