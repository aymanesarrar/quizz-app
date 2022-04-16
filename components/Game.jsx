import Layout from "./Layout";
import { Heading, Spinner, Image } from "@chakra-ui/react";
import { useData } from "./utils/useData";
import { Card } from "./Card";
import { Answer } from "./Answer";
import { useEffect, useState } from "react";
import { gameContext } from "./utils/gameContext";
import { useSWRConfig } from "swr";
const Game = () => {
  const { data, isLoading, isError } = useData();
  const [choice, setChoice] = useState(false);
  const [counter, setCounter] = useState(0);
  const [win, setWin] = useState(0);
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
    return (
      <Layout>
        {counter != 10 ? (
          <gameContext.Provider value={{ win, setWin }}>
            <Card
              onClick={counter != 10 ? () =>
                setTimeout(() => {
                  setChoice(!choice);
                  setCounter(() => counter++);
                }, 1000) : {}}
            >
              {capital.capital ? (
                <Heading
                  mb="2rem"
                  fontSize={["20px", "20px", "25px"]}
                  as="h2"
                  color="#2F527B"
                  fontWeight="700"
                >
                  {capital.capital} is the capital of
                </Heading>
              ) : (
                <Heading
                  mb="2rem"
                  fontSize={["20px", "20px", "25px"]}
                  as="h2"
                  color="#2F527B"
                  fontWeight="700"
                >
                  <Image
                    src={capital.flag}
                    alt="country"
                    width={150}
                    height={100}
                  />{" "}
                  is the flag of
                </Heading>
              )}
              {countries.length !== 0 &&
                countries.map((country, index) => (
                  <Answer
                    cap={capital.name}
                    key={index}
                    answer={country.name}
                  />
                ))}
            </Card>
          </gameContext.Provider>
        ) : (
          <Card counter={counter}>
            <Heading
              mb="2rem"
              fontSize={["20px", "20px", "25px"]}
              as="h2"
              color="#2F527B"
              fontWeight="700"
            >
              {win} / 10
            </Heading>
            <Image
              alt="winner"
              src="/undraw_winners_ao2o 2.svg"
              width="100%"
              height="auto"
            />
          </Card>
        )}
      </Layout>
    );
  } else return <Layout />;
};
export { Game };
