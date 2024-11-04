import { HeaderContainer, TitlePage } from "../styles/HeaderNotific"


export const HeaderNotifcComponent = () => {
    return (
        <HeaderContainer>
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