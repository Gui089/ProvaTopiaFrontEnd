import { FormComponent } from "../components/Form"
import { ContainerLogin, HeaderComponent, TileComponent } from "../styles/LoginPageStyle"


export const LoginPage = () => {
    return (
        <ContainerLogin data-aos="fade-up">
           <HeaderComponent>
              <img 
                  src="/img/provatopialogo.png" 
                  alt="logo provatopia" 
                  width={60}
                  height={60}
               />
              <TileComponent>
                FAÇA LOGIN PARA ENTRAR NO PROVATOPIA!
              </TileComponent>


           </HeaderComponent>

           <FormComponent />
        </ContainerLogin>
    )
}