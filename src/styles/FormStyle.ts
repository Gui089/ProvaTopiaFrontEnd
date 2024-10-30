import styled from "styled-components";

export const Container = styled.form`
   display: flex;
   flex-direction: column;
   margin-left: 5%;
   gap: 30px;
   margin-top: 50px;
`;

export const LabelForm = styled.label`
   color: #A8A8A8;
   font-weight: 200;

   @media(min-width: 300px) {
      width: 250px;
      align-self: start;
   }

   @media(min-width: 390px) {
      align-self: start;
   }

`;

export const InputLabel = styled.input`
   border-radius: 8px;
   width: 400px;
   height: 48px;
   background-color: #2E3546;
   border-color: white;
   padding: 15px;
   margin-top: 15px;

   @media(min-width: 300px) {
      width: 250px;
      align-self: center;
   }

   @media(min-width: 390px) {
      width: 300px;
      align-self: center;
   }

   @media(min-width: 750px) {
      width: 400px;
   }
`;

export const Paragraph = styled.p`
  color: #CC8889;
  font-weight: 600;
`;

export const SecondParagraph = styled.p`
  color: #019EFF;
  font-weight: 600;
  cursor: pointer;
  margin-left: 13px;
`;