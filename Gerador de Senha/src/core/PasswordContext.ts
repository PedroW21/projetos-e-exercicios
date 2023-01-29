import { Dispatch, SetStateAction } from 'react';
import { createContext } from 'react';

type PasswordContextProps = {
    password: string
    setPassword: Dispatch<SetStateAction<string>>
}

const initialProps = {
    password: ''
}

const PasswordContext = createContext(initialProps as PasswordContextProps);

export default PasswordContext;