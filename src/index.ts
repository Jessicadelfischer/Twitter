import { Tweet } from "./Classes/Tweet"
import { User } from "./Classes/User"

export const userList: User[] = []
export const tweetList: Tweet[] = []

const usuario = new User("João", "joao", "joca@gmail.com", "123456")
const usuario2 = new User("Maria", "maria", "maria@gmail.com", "123456")
const usuario3 = new User("Pedro", "pedro", "pedro@gmail.com", "123456")
const usuario4 = new User("Julia", "juh", "juliacastro@hotmail.com", "balabola")
const tweett = new Tweet("Oba cheguei", "juh")
const tweet = new Tweet("Olá, mundo!", "joao")
const tweet2 = new Tweet("Tô na área", "maria")
const tweet3 = new Tweet("Olá, univero!!!!", "pedro")
const tweet4 = new Tweet("HI GUYS!!!", "pedro")

usuario.follow(usuario2)
usuario.follow(usuario3)
usuario2.follow(usuario)
usuario3.follow(usuario)
usuario4.follow(usuario)


tweett.like(usuario)
tweett.like(usuario2)
tweett.like(usuario3)
tweett.reply("Eu tbm cheguei", "maria")
tweet3.reply("Olá, Galaxia", "joao")


tweett.show()
tweet2.like(usuario)
tweet2.show()

usuario.sendTweet("Vamos lá!")

console.log("____________________Show Feed_________________________")
usuario.showFeed()
console.log("____________________Show Tweets ______________________")
usuario.showTweets()
console.log("____________________Show Replies de tweet_____________")
tweet3.showReplies()
tweett.showReplies()