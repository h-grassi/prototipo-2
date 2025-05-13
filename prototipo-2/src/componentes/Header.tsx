import { UserButton } from "@clerk/nextjs";
export default function Header(){
    return(
        <>
        <h1>Header do site</h1>
        <UserButton/>
        <p>teste</p>
        </>
    )
}