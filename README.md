
# Library System

Esse projeto tem o objetivo de simular um sistema de biblioteca, no qual
o usuario administrador conseguirar registar, buscar e agendar livros.


##  Pré-requisitos

 - [Node js](https://nodejs.org/en/)
 - [Postgres SQL](https://github.com/matiassingers/awesome-readme)
 - NPM - incluso no node

## Começando

Para que você possa obter um cópia do projeto em operação na sua máquina,
siga os seguintes passos:


### Configuração inicial

Clone o repositório e instale as dependências

```bash
git clone https://github.com/LuizCarlos23/library-system.git
cd library-system
```
```bash
npm install
```
### Database

Crie um banco de dados com o nome `library-system`

### Migrations

Execute as migrations

```bash
npm run migrations
```
### Servidor

Agora é so iniciar o servidor

```bash
npm run dev
```

ou

```bash
npm start
```


## Documentação da API

#### Armazena os dados do livro no banco de dados

```http
  POST /books/register
```

| Parâmetro   | Tipo       | Descrição                           |
| :---------- | :--------- | :---------------------------------- |
| `name` | `string` | **Obrigatório**. Nome do livro |
| `author` | `string` | **Obrigatório**. Autor do livro |
| `release_date` | `number` | **Obrigatório**. Ano de lançamento do livro |

#### Retorna o(s) livro(s) referende ao filtro

```http
  POST /books/search/
```

| Parâmetro   | Tipo       | Descrição                           |
| :---------- | :--------- | :---------------------------------- |
| `name` | `string` | **Opcional**. Nome do livro |
| `author` | `string` | **Opcional**. Autor do livro |
| `release_date` | `number` | **Opcional**. Ano de lançamento do livro |
