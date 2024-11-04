
import { FormSignupComponent } from "../components/FormSignup"
import { ContainerLogin, HeaderComponent, TileComponent } from "../styles/LoginPageStyle"


export const SignUpPage = () => {
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
                 CADASTRE-SE PARA ENTRAR NO PROVATOPIA!
              </TileComponent>


           </HeaderComponent>

           <FormSignupComponent />
        </ContainerLogin>
    )
}