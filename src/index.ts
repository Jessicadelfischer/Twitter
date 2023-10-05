import { User } from "./Classes/User"
import { Tweet } from "./Classes/Tweet"
import { createUser } from "./Service/UserService"

export const userList: User[] = []
export const tweetList: Tweet[] = []
export const followList: any[] = []    

createUser("Amanda", "Mandita", "lopesamanda@gmail.com", "123456")




