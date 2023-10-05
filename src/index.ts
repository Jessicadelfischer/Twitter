import { Tweet } from "./Classes/Tweet"
import { User } from "./Classes/User"

export const userList: User[] = []
export const tweetList: Tweet[] = []

const usuario = new User("João", "joao", "joca@gmail.com", "123456")
const usuario2 = new User("Maria", "maria", "maria@gmail.com", "123456")
const usuario3 = new User("Pedro", "pedro", "pedro@gmail.com", "123456")
const tweet = new Tweet("Olá, mundo!", "joao")
const tweet2 = new Tweet("Olá, mundo!", "maria")
const tweet3 = new Tweet("Olá, mundo!", "pedro")

console.log("\nprimeiro tweet show\n***********************************************************************************************")
tweet.show()
tweet.reply(new Tweet("reply aqui", "joao"))
console.log("\ntweet show reply 1\n***********************************************************************************************")
tweet.show()
tweet.reply(new Tweet("reply aqui 2", "maria"))
tweet.reply(new Tweet("reply aqui 3", "pedro"))
console.log("\ntweet show reply 2\n***********************************************************************************************")
tweet.show()
tweet.like(usuario)
tweet.like(usuario)
console.log("\ntweets show like 1\n***********************************************************************************************")
tweet.show()
tweet.like(usuario2)
console.log("\ntweets show like 2\n***********************************************************************************************")
tweet.show()
tweet.like(usuario3)
console.log("\ntweets show like 3\n***********************************************************************************************")
tweet.show()

console.log("\nfim show\n***********************************************************************************************")
console.log("\napenas replies\n***********************************************************************************************")
tweet.showReplies()
console.log("\nfim replies\n***********************************************************************************************")

console.log("\nfeed\n***********************************************************************************************")
usuario.follow(usuario2)
usuario.follow(usuario3)
usuario.showFeed()
console.log("\nmeus tweets\n***********************************************************************************************")
usuario.showTweets()

