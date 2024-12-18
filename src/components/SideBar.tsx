import { useLocation } from "react-router-dom";
import { ButtonLogout, ButtonToggleSideBar, Conatiner, FooterSideBar, HeaderSideBar, ImageUser, ItemMenu, ListMenu, NameItem, SubTitle, TitleHeader } from "../styles/SideBarStyle";
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from "react";

interface SideBarProps {
    user:string;
    email:string;
}

export const SideBarComponent = ({user, email}:SideBarProps) => {
    useEffect(() => {
        AOS.init();
    },[]);

    const listMenu = [
        { id: 1, name: "Início", icon: "/img/Home.png", path: "/home" },
        { id: 2, name: "Questões", icon: "/img/qa.png", path: "/questoes" },
        { id: 3, name: "Cronograma", icon: "/img/Calendar.png", path: "/cronograma" },
        { id: 4, name: "Comunidade", icon: "/img/people (1).png", path: "/comunidade" },
        { id: 5, name: "Rank", icon: "/img/ribbon (1).png", path: "/rank" }
    ];

    const location = useLocation();
    const { pathname } = location;

    return (
        <Conatiner data-aos="fade-up">

            <ButtonToggleSideBar>{"<"}</ButtonToggleSideBar>
            <HeaderSideBar>
                <img 
                    src="/img/provatopialogo.png" 
                    alt="logo prova topia" 
                />
                 
                <div style={{display:'flex', flexDirection:'column',}}>
                   <TitleHeader>
                      {user}
                </TitleHeader>

                <SubTitle>
                    {email}
                </SubTitle>
                </div>

                <ImageUser />
            </HeaderSideBar>

            <ListMenu data-aos="fade-up">
                {listMenu.map(item => (
                    <ItemMenu
                        $isActive={pathname === item.path}
                        key={item.id}>
                        <img src={item.icon}/>
                        <NameItem>{item.name}</NameItem>
                    </ItemMenu>
                ))}
            </ListMenu>

            <FooterSideBar>
                <img src="/img/Log-out.png" alt="logo de logout"/>
                <ButtonLogout>
                    Sair da conta
                </ButtonLogout>

            </FooterSideBar>
        </Conatiner>
    )
}