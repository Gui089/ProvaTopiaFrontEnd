import { HeaderContainer, TitlePage } from "../styles/HeaderNotific"
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from "react";


export const HeaderNotifcComponent = () => {

    useEffect(() => {
        AOS.init();
    }, []);

    return (
        <HeaderContainer data-aos="fade-up">
            <TitlePage>
                Início
            </TitlePage>

            <div style={{display:'flex', alignItems:'center', gap:"50px"}}>
                <img 
                    src="/img/Dropdown.png" 
                    alt="Sino" 
                />

                <img
                    src="/img/Vector (2).png"
                    alt="arrow down"
                    width={10}
                    height={8}
                />
            </div>
        </HeaderContainer>
    )
}