import {Flex} from '@chakra-ui/react'
export default function Layout({children}) {
	return (
		<Flex minH="100vh" alignItems="center" justifyContent="center" backgroundImage="url('./background.png')">
			{children}
		</Flex>
	)
}