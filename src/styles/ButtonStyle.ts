import styled from "styled-components";
import { motion } from 'framer-motion';

export const ButtonFramer = styled(motion.button)`
   background-color: #49FC79;
   width: 400px;
   height: 48px;
   border-radius: 10px;
   border: none;
   font-weight: bold;
   font-size: 17px;
   cursor: pointer;

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