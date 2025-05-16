//contém todas as operações relativas os serviços e categorias de serviço
import { prisma } from "./prisma";

export async function getCategoriasServicos(){
  return await prisma.categoria_servicos.findMany()
}