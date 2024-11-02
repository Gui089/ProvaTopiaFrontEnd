import {FormEvent, useContext, useEffect, useState } from "react";
import { Container, InputLabel, LabelForm, Paragraph, SecondParagraph } from "../styles/FormStyle";
import { ButtonMotion } from "./ButtonMotion";
import AOS from 'aos';
import 'aos/dist/aos.css';
import { PasswordStrength } from "./PasswordStrenth";
import { ContextAuth } from "../context/AuthProvider";
import { useNavigate } from "react-router-dom";

export const FormComponent = () => {
    const [email, setEmmail] = useState<string>("");
    const [password, setPassword] = useState<string>("");
    const navigate = useNavigate();

    const {handleLogin, token} = useContext(ContextAuth);
    
    const formSubmit = async (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        handleLogin(email,password);
        navigate("/home");
    };

    const handleClickSignUp = () => {
        navigate("/auth");   
    }
    console.log(token);
    

    useEffect(() => {
        AOS.init();
    }, []);

    return (
        <Container onSubmit={formSubmit} data-aos="fade-up">
            <div data-aos="fade-up" style={{ display: 'flex', flexDirection: 'column' }}>
                <LabelForm>E-mail</LabelForm>
                <InputLabel value={email} onChange={(e) => setEmmail(e.target.value)} type="text" placeholder="E-mail" />
            </div>

            <div data-aos="fade-up" style={{ display: 'flex', flexDirection: 'column' }}>
                <LabelForm>Password</LabelForm>
                <PasswordStrength value={password} placeholder="password" onChange={setPassword} />
            </div>

            <Paragraph data-aos="fade-up">
                Esqueceu a sua senha ?
            </Paragraph>

            <ButtonMotion data-aos="fade-up" title="Entrar" />

            <div data-aos="fade-up" style={{ display: 'flex' }}>
                <Paragraph>
                    Não possui uma conta ?
                </Paragraph>
                <SecondParagraph onClick={handleClickSignUp}>Cadastrar</SecondParagraph>
            </div>
        </Container>
    );
};
