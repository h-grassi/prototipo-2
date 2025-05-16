-- CreateTable
CREATE TABLE "Usuario" (
    "id" SERIAL NOT NULL,
    "id_clerk" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "nome" TEXT NOT NULL,
    "dataCriacao" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Usuario_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Usuario_id_clerk_key" ON "Usuario"("id_clerk");
