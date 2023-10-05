import { randomUUID } from "crypto"
import { tweetList, userList } from "../index"
import { Tweet } from "./Tweet"

export class User {
    private id: string
    name: string
    username: string
    email: string
    password: string
    following: User[]

    constructor (name: string, username: string, email: string, password: string){
        const foundUser = userList
                        .find((someUser) => someUser.username === username)
        if(foundUser)
            throw new Error("username já existente")        
        this.id = randomUUID()
        this.name = name
        this.username = username
        this.email = email
        this.password = password
        this.following = []
        userList.push(this)
    }

    sendTweet(tweet: Tweet){
        tweetList.push(tweet)    
    }
    follow(user: User){
        user !== this ?
            this.following.push(user) :       
            console.error("Não é possível seguir a si mesmo")
    }

    showFeed(){
        const usernames = this.following.map((user) => user.username)
        const normal = tweetList.filter((tweet) => tweet.type !== "reply")
        const feed = normal.filter((tweet) => tweet.user === this.username || usernames.includes(tweet.user))
        feed.map(tweet => tweet.show()).join('\n')
    }
    showTweets(){
        const usernames = this.following.map((user) => user.username)
        const feed = tweetList.filter((tweet) => tweet.user === this.username && tweet.type !== "reply")
        console.log(feed.map(tweet => tweet.show()).join('\n'))
    }
}