import { Flex, Heading, Center } from "@chakra-ui/react";
import { Image } from "@chakra-ui/react";
import { useState } from "react";
import { Answer } from "./Answer";
const Card = ({ children }) => {
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
      <Center
        borderRadius="24px"
        backgroundColor="white"
        minH="60vh"
        w={["100%", "60%", "40%", "30%"]}
        mx="auto"
        position="relative"
      >
        <Image
          position="absolute"
          src="/undraw_adventure_4hum 1.svg"
          height={[50, 100, 150]}
          width={[50, 100, 150]}
          alt="adventure"
          top="-7rem"
          right="0"
        />
        <Flex flexDirection="column" width="100%" alignItems="center">
          {children}
        </Flex>
      </Center>
    </Flex>
  );
};
export { Card };
