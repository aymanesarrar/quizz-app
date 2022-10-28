import { Flex, Heading, Center } from "@chakra-ui/react";
import { Image } from "@chakra-ui/react";
import { useState } from "react";
import { Answer } from "./Answer";
import { motion } from "framer-motion";
const Card = ({ children, onClick, counter }) => {
  return (
    <Flex flexDirection="column" w="100%">
      <Heading
        ml={["0", "20%", "35%"]}
        mb="0.5rem"
        color="white"
        as="h1"
        textTransform="uppercase"
        fontSize={["20px", "24px", "30px"]}
        fontWeight="700"
      >
        Country Quiz
      </Heading>
      <Flex
        flexDirection="column"
        borderRadius="24px"
        backgroundColor="white"
        w={["100%", "60%", "40%", "50%"]}
        mx="auto"
        position="relative"
        alignItems="center"
        onClick={onClick}
      >
        <Image
          src="/undraw_adventure_4hum 1.svg"
          height={150}
          width={150}
          alt="adventure"
          top="-7rem"
          right="0"
          display={counter != 10 ? "inline" : "none"}
        />
        <Flex flexDirection="column" width="100%" alignItems="center">
          {children}
        </Flex>
      </Flex>
    </Flex>
  );
};
export { Card };
