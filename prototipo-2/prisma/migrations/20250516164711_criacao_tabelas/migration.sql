-- CreateTable
CREATE TABLE "Empresa" (
    "id" SERIAL NOT NULL,
    "nome" TEXT NOT NULL,
    "id_regiao" INTEGER NOT NULL,
    "id_estado" INTEGER NOT NULL,
    "id_cidade" INTEGER NOT NULL,
    "telefone" TEXT NOT NULL,
    "cnpj" TEXT,
    "email" TEXT,
    "site" TEXT,
    "cep" TEXT,
    "endereco" TEXT NOT NULL,
    "complemento_endereco" TEXT,
    "numero_endereco" INTEGER,

    CONSTRAINT "Empresa_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Regiao_br" (
    "id" SERIAL NOT NULL,
    "nome" TEXT NOT NULL,

    CONSTRAINT "Regiao_br_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Estado" (
    "id" SERIAL NOT NULL,
    "id_regiao" INTEGER NOT NULL,
    "codigo_ibge" INTEGER NOT NULL,
    "nome" TEXT NOT NULL,
    "uf" TEXT NOT NULL,

    CONSTRAINT "Estado_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Cidade" (
    "id" SERIAL NOT NULL,
    "id_estado" INTEGER NOT NULL,
    "codigo_ibge" INTEGER NOT NULL,
    "nome" TEXT NOT NULL,

    CONSTRAINT "Cidade_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Categoria_servicos" (
    "id" SERIAL NOT NULL,
    "nome" TEXT NOT NULL,
    "observacao" TEXT,
    "ativo" BOOLEAN NOT NULL DEFAULT true,

    CONSTRAINT "Categoria_servicos_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Servico" (
    "id" SERIAL NOT NULL,
    "id_categoria" INTEGER NOT NULL,
    "nome" TEXT NOT NULL,
    "observacao" TEXT,
    "ativo" BOOLEAN NOT NULL DEFAULT true,

    CONSTRAINT "Servico_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Empresa_servicos" (
    "id" SERIAL NOT NULL,
    "id_servico" INTEGER NOT NULL,
    "id_empresa" INTEGER NOT NULL,
    "observacao" TEXT,

    CONSTRAINT "Empresa_servicos_pkey" PRIMARY KEY ("id")
);
