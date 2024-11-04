import styled from "styled-components";

interface ItemMenuProps {
    $isActive?: boolean;
}

export const Conatiner = styled.div`
   width: 17%;
   height: 80%;
   display: flex;
   flex-direction: column;
   border: 1px solid white;
   border-radius: 20px;
   margin: 30px;
   position: relative; 

   @media(min-width: 390px) {
     width: 55%;
     height: 780px;
   }

   @media(min-width: 768px) {
     width: 35%;
     height: 1100px;
   }
   @media(min-width: 1024px) {
     width: 28%;
   }

  @media(min-width: 1440px) {
     width: 20%;
  }

  @media(min-width: 1550px) {
    height: 90%;
  }
`;

export const ListMenu = styled.ul`
   display: flex;
   flex-direction: column;
   gap: 20px;
   margin: 20px;
`;

export const ItemMenu = styled.li<ItemMenuProps>`
  display: flex;
  align-items: center;
  border-radius: 10px;
  height: 50px;
  width: 95%;
  cursor: pointer;
  transition: 0.2s;
  padding: 10px;
  background-color: ${({ $isActive }) => ($isActive ? '#2D2F39' : 'transparent')};
  
  &:hover {
    background-color: #2D2F39;
  }

  img {
    margin-right: 10px;
  }
`;

export const NameItem = styled.h4`
  color: #B5B5B5;
  font-weight: 300;
  margin-left: 10px;
`;

export const HeaderSideBar = styled.header`
  display: flex;
  align-items: center;
  padding: 12px;
  justify-content: space-around;
`;

export const TitleHeader = styled.h4`
  color: white;
  font-weight: 200;
`;

export const SubTitle = styled.p`
  color: #B5B5B5;
  font-weight: 100;
  font-size: 14px;
`;

export const ImageUser = styled.div`
  width: 60px;
  height: 60px;
  border-radius: 100%;
  background-color: gray;

  @media(min-width: 390px) {
     display: none;
  }

  @media(min-width: 768px) {
     display: flex;
  }
`;

export const FooterSideBar = styled.div`
  display: flex;
  margin-top: 95%;
  margin-left: 10px;
  padding: 20px;
  cursor: pointer;
  align-items: center;

  @media(min-width: 820px) {
    margin-top: 160%;
  }
  
  @media(min-width: 1024px) {
    margin-top: 190%;
  }

  @media(min-width: 1440px) {
    margin-top: 190%;
  }

  @media(min-width: 1550px) {
    margin-top: 90%;
  }
`;

export const ButtonLogout = styled.h4`
  color: #CC8889;
  font-weight: 200;
  margin-left: 10px;
`;

export const ButtonToggleSideBar = styled.button`
  background-color: #161A23;
  color: white;
  width: 28px;
  height: 28px;
  border-radius: 8px;
  position: absolute;
  right: -14px; 
  top: 100px;
  border: 0.5px solid #2D2F39;
  cursor: pointer;
`;