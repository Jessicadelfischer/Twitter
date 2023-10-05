import { randomUUID } from "crypto"
import { tweetList, userList } from "../index"
import { User } from "./User"

export class Tweet {
    private id: string
    content: string
    type: 'normal' | 'reply'
    user: string
    replies: string[]
    likes: string[]

    constructor(content: string, user: string){
        const foundUser = userList.find((someUser) => 
                                    someUser.username === user)
        if(!foundUser)
            throw new Error("Usuário não encontrado")        
        this.id = randomUUID()
        this.content = content
        this.type = 'normal'
        this.user = user
        this.replies = []
        this.likes = []
        tweetList.push(this)
    }
    reply(content:Tweet){
        tweetList.forEach(tweet => { if (tweet === content) tweet.type = 'reply' })
        this.replies.push(`> @${content.user}: ${content.content}`)
    }
    like(user: User){
        if (!this.likes.includes(user.username))
            this.likes.push(user.username)
    }
    show(){
        const replies = this.replies.join('\n')
        let userLikes = "[0 likes]"
        const likes = this.likes.length
        if (likes > 1) {
            userLikes = `[@${this.likes[0]} and other ${likes - 1} user liked this]`
        }
        if (likes === 1) {
            userLikes = `[@${this.likes[0]} liked this]`
        }
        console.log(`@${this.user}: ${this.content}\n${userLikes}\n${replies}\n-----------------------------------------`)
    }
        
    showReplies() {
        const join = this.replies.join('\n')
        console.log(join)
    }
}