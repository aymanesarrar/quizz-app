import {Heading} from '@chakra-ui/react'
import { useState } from 'react';

const Answer = ({answer, cap}) => {
	const [color, setColor] = useState('#6066D0CC');
	const [bgcolor, setBgcolor] = useState('#ffffff');
	const handleClick = e => {
			e.preventDefault();
			if (e.target.innerText === cap);
			{
				setBgcolor("#60BF88");
				setColor("#ffffff");
			}
	}
	return (
		<Heading onClick={handleClick} fontWeight="500" color={color} mb="20px" width="80%" borderRadius="12px" borderColor="#6066D0CC" borderWidth="2px" padding="1rem" cursor="pointer" _hover={{color: "white", backgroundColor: "#F9A826", borderColor: "#F9A826"}} fontSize="xl" backgroundColor={bgcolor} as="h3">{answer}</Heading>
	)
}
export {Answer};