import { useSignUp } from "@clerk/nextjs";
import { isClerkAPIResponseError } from "@clerk/nextjs/errors";
import { useRouter } from "next/navigation";
import { FormEvent, useState } from "react"
import { toast } from "sonner";

export default function EmailVerifica(){
    const [code, setCode] = useState("")
    const {isLoaded, setActive, signUp} = useSignUp();
    const router = useRouter();
    if(!isLoaded){
        return null;
    }
    const handlerSubmit = async (e:FormEvent<HTMLFormElement>)=>{
        e.preventDefault();
        try{
            const cadastroCompleto = await signUp.attemptEmailAddressVerification({
                code
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
    const reenviarEmail = async() =>{
        try{
            await signUp.prepareEmailAddressVerification({
                strategy:'email_code',
            })
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
            <p>Confirme seu email:</p>
            <input onChange={(e)=>setCode(e.target.value)} type="text" placeholder="seu código"/>
            <button> Confirmar e-mail</button>
            <br></br>
            <button type="button" onClick={reenviarEmail}>Reenviar e-mail</button>
        </form>
        </>
    )
}