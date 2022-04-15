import Layout from "./Layout";
import { Heading, Spinner } from "@chakra-ui/react";
import { useData } from "./utils/useData";
import { Card } from "./Card";
import { Answer } from "./Answer";
import { useEffect, useState } from "react";
import { gameContext } from "./utils/gameContext";
import { useSWRConfig } from "swr";
const Game = () => {
  const { data, isLoading, isError } = useData();
  const [choice, setChoice] = useState(false);
  if (isLoading)
    return (
      <Layout>
        <Spinner color="red.500" thickness="4px" size="xl" />
      </Layout>
    );
  if (isError)
    return (
      <Layout>
        <Heading as="h1">Error getting data</Heading>
      </Layout>
    );
  if (data) {
    //should be a state
    if (!choice) setChoice(true);
    const countries = [];
    for (let i = 0; i < 4; i++)
      countries.push(data[Math.floor(Math.random() * (data.length - 1))]);
    const capital = countries[Math.floor(Math.random() * 3)];
	console.log(capital);
    return (
        <Layout>
          <Card onClick={() => setTimeout(() => {
			  setChoice(!choice);
		  }, 1000)}>
            <Heading
              mb="2rem"
              fontSize={["20px", "20px", "25px"]}
              as="h2"
              color="#2F527B"
              fontWeight="700"
            >
              {capital.capital} is the capital of
            </Heading>
            {countries.length !== 0 &&
              countries.map((country, index) => (
                <Answer cap={capital.name} key={index} answer={country.name} />
              ))}
          </Card>
        </Layout>
    );
  } else return <Layout />;
};
export { Game };
