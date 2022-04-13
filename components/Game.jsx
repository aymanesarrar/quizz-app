import Layout from "./Layout";
import {Heading, Spinner} from '@chakra-ui/react'
import { useData } from "./utils/useData";
const Game = () => {
	const {data, isLoading, isError} = useData();

	if (isLoading)
		return (<Layout>
			<Spinner color='red.500' thickness='4px' size='xl'/>
		</Layout>)
	if (isError)
		return (<Layout>
			<Heading as="h1">Error getting data</Heading>
		</Layout>)
	if (data)
	return (<Layout>
			<Heading as="h1">Testing</Heading>
		</Layout>)
}
export {Game};