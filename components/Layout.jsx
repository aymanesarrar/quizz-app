import {Flex} from '@chakra-ui/react'
import {useTheme} from '@chakra-ui/react'



export default function Layout({children}) {
	const theme = useTheme();
	return (
		<Flex minH="100vh" alignItems="center" justifyContent="center" backgroundImage="url('./background.png')" backgroundSize="cover" fontFamily={theme.fonts.body} backgroundRepeat="no-repeat" backgroundPosition="center">
			{children}
		</Flex>
	)
}