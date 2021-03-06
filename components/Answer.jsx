import { Heading } from "@chakra-ui/react";
import { useContext, useState} from "react";
import {motion} from 'framer-motion'
import { gameContext } from "./utils/gameContext";
const Answer = ({ answer, cap}) => {
  const [correct, setCorrect] = useState(0);
  const {win, setWin} = useContext(gameContext);
  const handleClick = (e) => {
    e.preventDefault();
    if (e.target.innerText === cap) {
      setCorrect(1);
      setTimeout(() => {
        win++;
        setWin(win);
        setCorrect(0);
      }, 1000);
    }
    else setCorrect(2);
    setTimeout(() => {
    //   setChoice(false);
      setCorrect(0);
    }, 1000);
  };
  return (
    <Heading
      onClick={handleClick}
      fontWeight="500"
      color={correct == 0 ? "#6066D0CC" : "#ffffff"}
      mb="20px"
      width="80%"
      borderRadius="12px"
      borderColor={
        correct == 0 ? "#6066D0CC" : correct == 1 ? "#60BF88" : "#EA8282"
      }
      borderWidth="2px"
      padding="1rem"
      cursor={correct == 0 ? "pointer" : "default"}
      _hover={correct == 0 ? {
        color: "white",
        backgroundColor: "#F9A826",
        borderColor: "#F9A826",
      } : {}}
	  whileHover={correct == 0 ? {scale: 1.1} : {}}
      fontSize="xl"
      backgroundColor={
        correct == 0 ? "#ffffff" : correct == 1 ? "#60BF88" : "#EA8282"
      }
      as={motion.h3}
    >
      {answer}
    </Heading>
  );
};
export { Answer };
