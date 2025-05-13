import { useSignIn } from "@clerk/nextjs";
import { isClerkAPIResponseError } from "@clerk/nextjs/errors";
import { useRouter } from "next/navigation";
import { FormEvent, useState } from "react"
import { toast } from "sonner";

export default function ResetSenha(){
    const [code, setCode] = useState("")
    const [password, setPassword] = useState("")
    const {isLoaded, setActive, signIn} = useSignIn();
    const router = useRouter();
    if(!isLoaded){
        return null;
    }
    const handlerSubmit = async (e:FormEvent<HTMLFormElement>)=>{
        e.preventDefault();
        try{
            const cadastroCompleto = await signIn.attemptFirstFactor({
                strategy:'reset_password_email_code',
                code,
                password
            })
            if(cadastroCompleto.status === 'complete'){
                await setActive({session: cadastroCompleto.createdSessionId})
                router.push("/")
            }
        }catch(err){
            if(isClerkAPIResponseError(err)){
                return toast.error(err.errors[0].message)
            }
            toast.error("Algo deu errado")
        }
    }
    return(
        <>
        <form onSubmit={handlerSubmit}>
            <p>Altere sua senha:</p>
            <input value={code} onChange={(e)=>setCode(e.target.value)} type="text" placeholder="seu código"/>
            <br></br>
            <input value={password} onChange={(e)=>setPassword(e.target.value)} type="password" placeholder="********"/>
            <br></br>
            <button> Confirmar alteração de senha</button>
        </form>
        </>
    )
}