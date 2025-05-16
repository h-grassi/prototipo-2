//'use client';
import { insereUsuarioLogado, verificaUsurioLogado } from "@/lib/usuario";
import { currentUser } from "@clerk/nextjs/server";

export default async function Home() {
  const usuarioClerk = await currentUser()
  const verificaUsuario = await verificaUsurioLogado(usuarioClerk?.id)
  if(!verificaUsuario){
    insereUsuarioLogado(usuarioClerk?.id, usuarioClerk?.username, usuarioClerk?.emailAddresses[0].emailAddress);
  }
  return (
    <>
      <h1>Home page, se encontra na pasta system</h1>
      <main>
        <a href="/GerenciarEmpresas">Gerenciar Clientes </a> <br />
        <a href="/GerenciarServicos">Gerenciar Serviços</a><br />
        <a href="">Visualizar acessos</a><br />
      </main>
    </>
  );
}
