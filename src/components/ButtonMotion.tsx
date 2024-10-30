
import { ButtonFramer } from '../styles/ButtonStyle';

interface ButtonMotionProps {
    title: string;
  }

export const ButtonMotion = ({title}:ButtonMotionProps) => {
  return (
    <ButtonFramer
      whileHover={{ scale: 1.1, backgroundColor: '#00f742' }} 
      whileTap={{ scale: 0.9 }}
      transition={{ type: 'spring', stiffness: 300 }}
    >
      {title}
    </ButtonFramer>
  );
};


