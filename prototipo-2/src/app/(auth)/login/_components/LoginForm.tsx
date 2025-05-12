// pastas que iniciam com _ são desconsideradas como rotas para a aplicação
'use client'
import { FormEvent, useState } from "react"
import { useSignIn } from "@clerk/nextjs";
import { useRouter } from "next/navigation";// rever "next/router" ou "next/compat/router"
import { isClerkAPIResponseError } from "@clerk/nextjs/errors";
import { toast } from "sonner";

// essa pasta é um exemplo
export default function LoginForm(){
    const router = useRouter();
    const[email, setEmail] = useState("");
    const[password, setPassword] = useState("");
    const {isLoaded, signIn, setActive} = useSignIn();

    if(!isLoaded){
      return null;
    }
    const handlerSubmit = async(e: FormEvent<HTMLFormElement>) =>{
      e.preventDefault();
      try{
        const resultado = await signIn.create({
        identifier: email, password
      })
      if(resultado.status === 'complete'){
        await setActive({session: resultado.createdSessionId});
        router.push('/')
      }
      }catch(err){
        if(isClerkAPIResponseError(err)){
        toast.error(err.errors[0]?.message)
        }else{
        console.error(err)
        toast.error("Algo deu errado.")
        }
      }
      
    }
  return (
    <>
      <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <h2 className="mt-10 text-center text-2xl/9 font-bold tracking-tight text-gray-900">
            Sign in to your account
          </h2>
        </div>

        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
          <form onSubmit={handlerSubmit}>
            <div>
              <label htmlFor="email" className="block text-sm/6 font-medium text-gray-900">
                Email address
              </label>
              <div className="mt-2">
                <input
                  value={email}
                  onChange={(e)=> setEmail(e.target.value)}
                  id="email"
                  name="email"
                  type="email"
                  required
                  autoComplete="email"
                  className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                />
              </div>
            </div>

            <div>
              <div className="flex items-center justify-between">
                <label htmlFor="password" className="block text-sm/6 font-medium text-gray-900">
                  Password
                </label>
                <div className="text-sm">
                  <a href="#" className="font-semibold text-indigo-600 hover:text-indigo-500">
                    Forgot password?
                  </a>
                </div>
              </div>
              <div className="mt-2">
                <input
                  value={password}
                  onChange={(e)=> setPassword(e.target.value)}
                  id="password"
                  name="password"
                  type="password"
                  required
                  autoComplete="current-password"
                  className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                />
              </div>
            </div>

            <div>
              <button
                type="submit"
                className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm/6 font-semibold text-white shadow-xs hover:bg-indigo-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Sign in
              </button>
            </div>
            <div>
                <p>Não tem uma conta? <a href="/signup"> Crie a sua agora mesmo!</a></p>
            </div>
          </form>
        </div>
      </div>
    </>
  )
}