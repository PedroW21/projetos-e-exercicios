import { useContext } from "react"
import PasswordContext from "../core/PasswordContext"

type ButtonProps = {
    inputProps: Array<string>
    passwordLengthProps: string
    generatePassword: (passwordLength: string, inputs: string[]) => string
}

export const Button = (props: ButtonProps) => {

    const  { password, setPassword } = useContext(PasswordContext);

    const generatePassword = () =>
    {
        const inputPropsArr = Array.from(props.inputProps);

        if(!inputPropsArr.length || parseInt(props.passwordLengthProps) === 0)
        {
            alert('A senha precisa ter mais que um caractere e/ou ao menos uma opção precisa estar selecionada!!');
            return;
        }

       const result = props.generatePassword(props.passwordLengthProps, inputPropsArr);

       setPassword(result)
    }

    return (
        <button 
        onClick={() => generatePassword()}
        className={`
            h-14
            mt-3
            border-2
            inline-flex
            items-center
            justify-center
            border-primaryColor
            bg-primaryColor
            text-black
            active:bg-darkerGray            
            active:text-primaryColor
        `}
        >
        GERAR SENHA
        <span className="text-2xl ml-3" >➜</span>
        </button>
        
    )
}