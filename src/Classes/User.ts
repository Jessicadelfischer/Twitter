import { randomUUID } from "crypto"
export class User {
    private id: string
    name: string
    username: string
    email: string
    password: string

    constructor (name: string, username: string, email: string, password: string){
        this.id = randomUUID()
        this.name = name
        this.username = username
        this.email = email
        this.password = password
    }

    sendTweet(tweet: any){
    }
    follow(user: any){
    }
    showFeed(){
    }
    showTweets(){
    }

}