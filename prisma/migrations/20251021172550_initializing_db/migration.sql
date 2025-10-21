-- CreateEnum
CREATE TYPE "RoleUser" AS ENUM ('ADMIN', 'USER');

-- CreateTable
CREATE TABLE "User" (
    "id" SERIAL NOT NULL,
    "nome" VARCHAR(50) NOT NULL,
    "email" VARCHAR(70) NOT NULL,
    "senha" VARCHAR(50) NOT NULL,
    "role" "RoleUser" NOT NULL DEFAULT 'USER',
    "avatarUrl" TEXT NOT NULL,
    "data" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Imagem" (
    "id" SERIAL NOT NULL,
    "userid" INTEGER NOT NULL,
    "url" TEXT NOT NULL,
    "titulo" TEXT NOT NULL,
    "data" TIMESTAMP(3) NOT NULL,
    "publico" BOOLEAN NOT NULL,

    CONSTRAINT "Imagem_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "User_email_key" ON "User"("email");

-- CreateIndex
CREATE UNIQUE INDEX "Imagem_userid_key" ON "Imagem"("userid");

-- AddForeignKey
ALTER TABLE "Imagem" ADD CONSTRAINT "Imagem_userid_fkey" FOREIGN KEY ("userid") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
