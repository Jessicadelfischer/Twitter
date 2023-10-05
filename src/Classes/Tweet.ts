import { randomUUID } from "crypto"
import { Like } from "./Like"

export class Tweet implements Like {
    id: string
    content: string
    type: string
    constructor(content: string, type: string){
        this.id = randomUUID()
        this.content = content
        this.type = type
    }
    reply(content:any){
    }
    like(){
    }
    show(){
    }
    showRepiles(){        
    }
}