
import {FormEvent,useEffect, useState } from "react";
import { Container, InputLabel, LabelForm, Paragraph, SecondParagraph } from "../styles/FormStyle";
import { ButtonMotion } from "./ButtonMotion";
import AOS from 'aos';
import 'aos/dist/aos.css';
import { PasswordStrength } from "./PasswordStrenth";
import { SignUpUser } from "../domain/signupUser/signupUserService";
import { useNavigate } from "react-router-dom";

export const FormSignupComponent = () => {

    const [firstName,setFirstName] = useState<string>("");
    const [lastName, setLastName] = useState<string>("");
    const [email, setEmmail] = useState<string>("");
    const [password, setPassword] = useState<string>("");
    const navigate = useNavigate();

    const formSubmit = async (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const response = await SignUpUser({
            firstName,
            lastName,
            email,
            password
        });

        if(response.status) {
            navigate('/');
        }

        console.log(response.status);
    };

    useEffect(() => {
        AOS.init();
    }, []);


    const handleGoToLogin = () => {
        navigate("/");
    }

    return (
        <Container onSubmit={formSubmit} data-aos="fade-up">

            <div data-aos="fade-up" style={{ display: 'flex', flexDirection: 'column' }}>
                <LabelForm>Primeiro nome</LabelForm>
                <InputLabel value={firstName} onChange={(e) => setFirstName(e.target.value)} type="text" placeholder="Primeiro Nome" />
            </div>
             
            <div data-aos="fade-up" style={{ display: 'flex', flexDirection: 'column' }}>
                <LabelForm>Sobrenome</LabelForm>
                <InputLabel value={lastName} onChange={(e) => setLastName(e.target.value)} type="text" placeholder="Sobrenome" />
            </div>

            <div data-aos="fade-up" style={{ display: 'flex', flexDirection: 'column' }}>
                <LabelForm>E-mail</LabelForm>
                <InputLabel value={email} onChange={(e) => setEmmail(e.target.value)} type="text" placeholder="E-mail" />
            </div>

            <div data-aos="fade-up" style={{ display: 'flex', flexDirection: 'column' }}>
                <LabelForm>Password</LabelForm>
                <PasswordStrength value={password} placeholder="password" onChange={setPassword} />
            </div>

            <ButtonMotion data-aos="fade-up" title="Cadastrar" />

            <div data-aos="fade-up" style={{ display: 'flex' }}>
                <Paragraph>
                    Já possui uma conta ?
                </Paragraph>
                <SecondParagraph onClick={handleGoToLogin}>Entrar</SecondParagraph>
            </div>
        </Container>
    );
};
