'use client'
export default function GerenciarServicos(){
  var exibe: boolean = false;
  function exibeListaCategoriaServico(){
    console.log("chamou a função")
    
    if(exibe == false){
      console.log('abre componente')
      exibe = true
    }else{
      console.log('fecha componente')
      exibe = false
    }
  }
  return(
    <>
        <h3>Adicionar e editar categorias e serviços:</h3>
        <div>
          <div>
            <button onClick={(e)=>exibeListaCategoriaServico()}>Listar Categorias</button>
            <div id='listCatServicos'>
              
            </div>
          </div>
          <br></br>
          <button>Criar nova Categoria</button>
        </div>
    </>
  )
}