"use client"

import { useRouter } from "next/navigation";
import { useState } from "react";
import { Input } from "../ui/input";
import { faHeart } from "@fortawesome/free-regular-svg-icons";

export const SigninForm = () => {
    const router = useRouter();
    const [emailField, setEmailField] = useState('');
    const [passwordField, setPasswordField] = useState('');

    const handEnterButton = () => {
        router.replace('/home');
    }


    return (
        <>
            <Input
                placeholder="Digite o seu e-mail"
                value={emailField}
                onChange={t => setEmailField(t)}
            />

            <Input
                placeholder="Digite sua senha"
                value={passwordField}
                onChange={t => setPasswordField(t)}
                password
            />

            <button onClick={handEnterButton}>Entrar</button>
        </>
    );
}