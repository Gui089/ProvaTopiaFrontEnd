import styled from "styled-components";

interface ItemMenuProps {
    isActive: boolean;
}

export const Conatiner = styled.div`
   width: 17%;
   height: 80%;
   display: flex;
   flex-direction: column;
   border:1px solid white;
   border-radius: 20px;
   margin: 30px;
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
  background-color: ${({ isActive }) => (isActive ? '#2D2F39' : 'transparent')};
  
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

export const SubTitle = styled.h4`
  color: #B5B5B5;
  font-weight: 200;
`;

export const ImageUser = styled.div`
  width: 60px;
  height: 60px;
  border-radius: 100%;
  background-color: gray;
`;

export const FooterSideBar = styled.div`
  display: flex;
  margin-top: 110%;
  margin-left: 10px;
  padding: 20px;
  cursor: pointer;
  align-items: center;
`;

export const ButtonLogout = styled.h4`
  color: #CC8889;
  font-weight: 200;
  margin-left: 10px;
`;