import styled from "styled-components";

export const HeaderContainer = styled.div`
   width: 70%;
   height: 80px;
   display: flex;
   justify-content: space-between;
   position: absolute;
   right: 100px;
   align-items: center;

   @media (max-width: 1365px) {
     width: 60%;
     right: 50px;
   }

   @media (max-width: 1200px) {
     width: 60%;
     right: 50px;
   }

   @media (max-width: 768px) {
     width: 55%;
     height: 60px;
     right: 20px;
   }

   @media (max-width: 480px) {
     width: 60%;
     height: 50px;
     right: 0;
     justify-content: center;
   }
`;

export const TitlePage = styled.h1`
  color: white;
  font-weight: 600;

  @media (max-width: 768px) {
    font-size: 20px;
  }

  @media (max-width: 480px) {
    font-size: 16px;
  }
`;