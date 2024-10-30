import { useEffect, useState } from "react";
import { Container, InputLabel, LabelForm, Paragraph, SecondParagraph } from "../styles/FormStyle";
import { ButtonMotion } from "./ButtonMotion";
import AOS from 'aos';
import 'aos/dist/aos.css';
import { PasswordStrength } from "./PasswordStrenth";

export const FormComponent = () => {
    const [password, setPassword] = useState<string>("");

    useEffect(() => {
        AOS.init();
    }, []);

    return (
        <Container data-aos="fade-up">
            <div data-aos="fade-up" style={{ display: 'flex', flexDirection: 'column' }}>
                <LabelForm>E-mail</LabelForm>
                <InputLabel type="text" placeholder="E-mail" />
            </div>

            <div data-aos="fade-up" style={{ display: 'flex', flexDirection: 'column' }}>
                <LabelForm>Password</LabelForm>
                <PasswordStrength placeholder="password" onChange={setPassword} />
            </div>

            <Paragraph data-aos="fade-up">
                Esqueceu a sua senha ?
            </Paragraph>

            <ButtonMotion data-aos="fade-up" title="Entrar" />

            <div data-aos="fade-up" style={{ display: 'flex' }}>
                <Paragraph>
                    Não possui uma conta ?
                </Paragraph>
                <SecondParagraph>Cadastrar</SecondParagraph>
            </div>
        </Container>
    );
};
