# NeoGallery -- Backend Challenge

API completa para gerenciamento de usuários e upload de imagens,
construída com foco em boas práticas, Clean Architecture, SOLID,
autenticação JWT e armazenamento local ou em nuvem.\
Esse desafio simula um sistema real utilizado para hospedar e organizar
imagens de usuários.

## Objetivo do Projeto

Desenvolver uma API backend robusta que permita:

-   Registro e autenticação de usuários\
-   Upload de imagens\
-   Listagem e remoção de imagens\
-   Controle de permissões (roles)\
-   Armazenamento local ou cloud (Cloudinary/S3)\
-   Arquitetura modular e escalável

## Tecnologias Utilizadas

-   Node.js\
-   TypeScript\
-   Express\
-   Prisma ORM\
-   PostgreSQL\
-   JWT\
-   Multer\
-   Cloudinary ou AWS S3\
-   Clean Architecture\
-   SOLID\
-   Docker (opcional)

## Funcionalidades

### Usuários

#### Endpoints

-   POST /users/register -- Criação de usuário
-   POST /users/login -- Login com retorno de JWT
-   GET /users -- Retorna o usuário autenticado

#### Regras

-   Senha hashada\
-   JWT contendo apenas id e role
-   Usuário possui id, role e avatarUrl opcional
-   A rota /users/me exige autenticação

### Imagens

#### Endpoints

-   POST /images -- Upload local ou cloud\

#### Regras

-   Usuário deve estar autenticado
-   Cada imagem pertence a um único usuário
-   Upload funcionando em modo local ou cloud
-   Apenas administradores podem deletar imagens de outros usuários

## Entidades

### User

-   id: string\
-   name: string\
-   email: string\
-   password: string\
-   avatarUrl?: string\
-   role: "user" \| "admin"\
-   createdAt: Date

### Image

-   id: string\
-   userId: string\
-   url: string\
-   title: string\
-   createdAt: Date\
-   isPublic?: boolean

## Arquitetura (Clean + SOLID)

src/\
├── domain/\
│ ├── entities/\
│ ├── repositories/\
│ └── services/\
├── application/\
│ ├── useCases/\
│ └── dtos/\
├── infra/\
│ ├── database/\
│ ├── http/\
│ └── providers/\
├── config/\
├── shared/\
└── main.ts

## Upload de Arquivos

### Upload Local

-   Usando Multer
-   Arquivos salvos em /uploads\
-   Exemplo de URL: http://localhost:5050/uploads/arquivo.png

### Upload em Nuvem

-   AWS S3
-   Salvar apenas a URL no banco
-   Configuração via .env
    STORAGE_DRIVER=local ou STORAGE_DRIVER=cloud

## Permissões e Segurança

-   JWT contendo apenas id e role
-   Middleware para rotas autenticadas
-   Middleware para autorização admin
-   Senhas sempre criptografadas

## Aprendizados Esperados

-   Clean Architecture no mundo real
-   Aplicação prática de SOLID
-   TS avançado
-   Upload local e cloud
-   Autenticação e autorização com JWT
-   Prisma ORM
-   Projetos escaláveis e organizados

## Como Rodar o Projeto

npm install
npx prisma migrate dev
npm run dev

Criar um .env baseado no .env.example é obrigatório.

