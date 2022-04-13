import {Heading} from '@chakra-ui/react'
const Answer = ({answer}) => {
	return (
		<Heading fontWeight="500" color="#6066D0CC" mb="20px" width="80%" borderRadius="12px" borderColor="#6066D0CC" borderWidth="2px" padding="1rem" cursor="pointer" _hover={{color: "white", backgroundColor: "#F9A826", border: "none"}} fontSize="xl" as="h3">{answer}</Heading>
	)
}
export {Answer};