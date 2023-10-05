import { userList } from ".."
import { User } from "../Classes/User"

export const createUser = (name: string, username: string, email: string, password: string): User => {
    userList.find((user) => {        
         if(user.username === username){
            console.error("Username já existente")
         }
     })  
     const newUser = new User(name, username, email, password)
     userList.push(newUser)
     return newUser
 } 