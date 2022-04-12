import {Flex, Heading, Center, OrderedList, ListItem} from '@chakra-ui/react'
import {Image} from '@chakra-ui/react';
const Card = () => {
	return (
		<Flex flexDirection="column" w="100%">
			<Heading ml={["0", "20%", "35%"]} mb='0.5rem' color="white" as="h1" textTransform="uppercase" fontSize={["20px", "24px", "30px"]} fontWeight="700">Country Quiz</Heading>
			<Center borderRadius="24px" backgroundColor="white" minH="50vh" w={["100%", "60%", "40%", "30%"]} mx="auto" position="relative">
				<Image position="absolute" src="/undraw_adventure_4hum 1.svg" height={150} width={150} alt="adventure" top="-5rem" right="0"/>
				<Flex flexDirection="column" width="100%" alignItems="center">
				<Heading fontSize="24px" as="h2" color="#2F527B" fontWeight="700">is the capital of</Heading>
				<Heading fontWeight="500" color="#6066D0CC" mb="20px" width="80%" borderRadius="12px" borderColor="#6066D0CC" borderWidth="2px" padding="1rem" fontSize="xl" as="h3">Test</Heading>
				</Flex>
			</Center>
		</Flex>
	)
}
export {Card};