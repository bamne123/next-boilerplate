/* eslint-disable react/no-array-index-key */

// import styles from 'Styles/Home.module.css';
import { Box } from 'Molecules';
import Image from 'next/image';
import { Flex, Heading, Link, Text, Stack, Button, useColorMode } from '@chakra-ui/react';
import { NextSeo } from 'next-seo';

function HomeContainer({ data }) {
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <>
      <NextSeo title="Home Page" />
      <Flex flexDirection="column" justifyContent="center" alignItems="center">
        <Flex
          padding="3rem"
          display="flex"
          flexDirection="column"
          justifyContent="center"
          alignItems="center"
        >
          <Heading lineHeight="1.15" fontSize="4rem">
            Welcome to{' '}
            <Link color="#0070f3" textDecoration="none" href="https://nextjs.org">
              Next.js Boilerplate!
            </Link>
            <Stack
              direction={['column', 'row']}
              alignItems="center"
              justifyContent="center"
            >
              <Text lineHeight="1.5" fontSize="1.5rem">
                Get started by editing{' '}
              </Text>
              <Text
                background={colorMode === 'light' ? '#fafafa' : '#010101'}
                borderRadius="5px"
                padding="0.75rem"
                fontSize="1.1rem"
              >
                pages/index.js
              </Text>
            </Stack>
            <Stack
              direction={['column', 'row']}
              alignItems="center"
              justifyContent="center"
              marginTop="1rem"
            >
              <Text lineHeight="1.5" fontSize="1.5rem">
                {colorMode === 'light' ? 'Dark' : 'Light'} Mode
              </Text>
              <Button onClick={toggleColorMode} backgroundColor="#0070f3" color="#ffffff">
                {colorMode === 'light' ? 'Dark' : 'Light'}
              </Button>
            </Stack>
          </Heading>
          <Flex
            alignItems="center"
            justifyContent="center"
            flexDirection="row"
            flexWrap="wrap"
            maxWidth="800px"
            marginTop="3rem"
          >
            {data.map((item, index) => {
              return (
                <Box
                  key={index}
                  link={item.link}
                  header={item.header}
                  content={item.content}
                />
              );
            })}
          </Flex>
        </Flex>
        <Flex
          width="100%"
          borderTop="1px solid #eaeaea"
          justifyContent="center"
          alignItems="center"
        >
          <Link
            href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
            display="flex"
            justifyContent="center"
            alignItems="center"
          >
            <Text>Powered by</Text>
            <Image src="/static/vercel.svg" width="70" height="50" alt="Vercel Logo" />
          </Link>
        </Flex>
      </Flex>
    </>
  );
}

export default HomeContainer;
