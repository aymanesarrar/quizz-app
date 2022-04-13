import {Flex, Heading, Center} from '@chakra-ui/react'
import {Image} from '@chakra-ui/react';
import { Answer } from './Answer';
const Card = ({capital, countries}) => {
	
	
	return (
		<Flex flexDirection="column" w="100%">
			<Heading ml={["0", "20%", "35%"]} mb='0.5rem' color="white" as="h1" textTransform="uppercase" fontSize={["20px", "24px", "30px"]} fontWeight="700">Country Quiz</Heading>
			<Center borderRadius="24px" backgroundColor="white" minH="50vh" w={["100%", "60%", "40%", "30%"]} mx="auto" position="relative">
				<Image position="absolute" src="/undraw_adventure_4hum 1.svg" height={150} width={150} alt="adventure" top="-5rem" right="0"/>
				<Flex flexDirection="column" width="100%" alignItems="center">
				<Heading mb="20px" fontSize="3xl" as="h2" color="#2F527B" fontWeight="700">{capital} is the capital of</Heading>
				{countries && countries.map((country, index) => <Answer key={index} answer={country}/>)}
				</Flex>
			</Center>
		</Flex>
	)
}
export {Card};