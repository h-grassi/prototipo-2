import { prisma } from "./prisma";

export async function getUsuarios(){
  return await prisma.usuario.findMany()
}

//faz a verificação se o usuário logado pelo clerk está no banco de dados
export async function verificaUsurioLogado(idClerk : string){
  return await prisma.usuario.findFirst({
    where:{
      id_clerk : idClerk
    }
  })
}
// caso a consulta acima retorne nulo, novo usuário é criado
export async function insereUsuarioLogado(idClerk: string, email: string, nome:string){
  return await prisma.usuario.create({
    data:{
      id_clerk: idClerk,
      nome: email,
      email: nome
    }
  })
}