# Avaliação Final do Módulo

#### Trabalho final depois de aprender sobre Typescript, Programação Orientada a Objetos e seus pilares.

### Cenário
GrowTwitter: o objetivo desta ferramenta é permitir
que usuários possam interagir com outros usuários através de algumas
funcionalidades.

![bird_blue](/assets/twitter_blue.jpg)

Desenvolvido a camada back-end do GrowTwitter usando as tecnologias que aprendi no módulo:
Typescript + POO e seus pilares 💻.

Nesta camada:

 * Cadastrar usuários. 
 * Cada usuário poderá criar tweets.
 * Seguir outros usuários (mecanismo de followers).
 * Curtir tweets de outros usuários e/ou respondê-los com tweets do tipo “reply”.

 ![diagrama](/assets/Diagrama.png)

 # Features

### Feature cadastro de usuários
- Deve ser possível criar usuários na aplicação. 
- Os campos ID e Username devem ser únicos por usuário, sendo que o ID pode ser gerado automaticamente pela aplicação.
### Feature cadastro de tweets
- Deve ser possível criar tweets por usuário. 
- Cada usuário poderá criar N tweets e um tweet pertence a
somente um usuário (relacionamento 0-N).
- O campo ID deve ser único e pode ser gerado automaticamente pela aplicação.
- Cada tweet possui um tipo obrigatório (normal ou reply).
### Feature exibição de tweets
- Deve ser possível exibir um tweet na aplicação. 
- A exibição de um tweet deve ser feita da seguinte forma

```
@<username>: <conteúdo>
  <likes> *
  <replies> * 
```
Exemplo:
```
@user1: tweet de exemplo
[0 likes]
  > @bruna: Hey!
```
```
@daphne: adoro isso
[user1 e mais 4 usuários curtiram]
  > @bruna: Hey!
  > @user1: tweet de exemplo
```
```
@bruna: Hey!
[user1 like this]
  > @user1: tweet de exemplo
  > @daphne: adoro isso
```

### Feature followers
- Deve ser possível para um usuário seguir outro usuário, exceto a si mesmo. 
- O usuário deve ter acesso a lista de usuário a quem segue.
### Feature like em tweets
- Deve ser possível para um usuário curtir os tweets de outros usuários.
- Um tweet (normal ou reply) pode ter 0 ou N curtidas.
### Feature reply em tweets
- Deve ser possível para um usuário responder a tweets de outros usuários.
- A resposta a um tweet deve ser um novo tweet com o tipo “reply”
- Um tweet (normal ou reply) pode ter 0 ou N replies.
### Feature exibição de tweets com likes
- Deve ser possível exibir tweets com a informação de seus likes recebidos.
```
@<username>: <conteúdo>
        <likes>
```
- A exibição dos likes varia dependendo da quantidade:
    - Sem like - não exibir.
    - 1 like – “@<username> curtiu”.
    - 2 ou + likes – “@<username1> e mais X usuários curtiram”.
- Exemplo:
```
@daphne: adoro a growdev :)
[@bruna and other 1 user liked this]
```
### Feature exibição de tweets com replies
- Deve ser possível exibir tweets com os seus replies.
```
@<username>: <conteúdo>
    <replies>
```
- Adicione um indicador ao início do reply para indicar que se trata de uma resposta (p.ex. o caractere “>”).
```
@username: conteúdo do tweet original.
  > @username2: conteúdo do reply 1.
  > @username3: conteúdo do reply 2.
```
- Exemplo:
```
@daphne: Hello!
[@bruna and other 2 users liked this]
  > @user1: tweet de exemplo
  > @daphne: adoro isso
```
### Feature feed de tweets
- Um usuário poderá exibir o seu feed de tweets. 
- O feed é composto por seus tweets e pelos tweets dos usuários a quem segue.
- Na exibição do feed, cada tweet deverá ser exibido conforme features anteriores: 
    - com seu conteúdo, seus likes e replies.
- Exemplo:

```
@bruna: hehehehe
[0 likes]
------------------------------------------
@bruna: tweet de exemplo
[0 likes]
  > @bruna: Hey!
  > @user1: tweet de exemplo
  > @daphne: adoro isso
------------------------------------------
@bruna: Hey!
[user1 like this]
  > @user1: tweet de exemplo
  > @daphne: adoro isso
------------------------------------------
@bruna: adoro isso
[@daphne and other 1 user liked this]
  > @user1: tweet de exemplo
  > @daphne: adoro isso
```

