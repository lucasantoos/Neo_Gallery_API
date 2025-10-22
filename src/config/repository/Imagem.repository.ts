import type { PrismaClient } from "@prisma/client";

export class ImagemRepository {
    constructor(
        private prisma: PrismaClient
    ) { }

}