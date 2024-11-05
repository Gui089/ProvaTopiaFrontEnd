import { useContext, useEffect } from "react";
import { HeaderNotifcComponent } from "../components/HeaderNotifc";
import { SideBarComponent } from "../components/SideBar";
import { ContextAuth } from "../context/AuthProvider";
import Cookies from 'js-cookie';
import { PercentageAcerts } from "../components/PercentageAcerts";
import { ContainerHomePage } from "../styles/HomePageStyles";

export const HomePage = () => {
    const { getUserInfo, userInfo } = useContext(ContextAuth);
    
    const token = Cookies.get('token');

    useEffect(() => {
        const handleGetUserInfo = async () => {
            if (token) {
                await getUserInfo(token);
            }
        };

        handleGetUserInfo();
    }, [token, getUserInfo]);
    
    return (
        <>
            <HeaderNotifcComponent />
            <SideBarComponent user={userInfo.firstName} email={userInfo.email} />
            <ContainerHomePage>
                <PercentageAcerts questionsAcert={1} totalquestions={2} />
            </ContainerHomePage>
        </>
    );
};


