/* eslint-disable no-underscore-dangle */
/* eslint-disable no-unused-vars */
/* eslint-disable react/no-array-index-key */

// import styles from 'Styles/Home.module.css';
import { Flex, Heading, useColorMode } from '@chakra-ui/react';
import { NextSeo } from 'next-seo';

function __store__({ data }) {
  //   const { colorMode, toggleColorMode } = useColorMode();

  return (
    <>
      <NextSeo title="__store__" />
      <Flex flexDirection="column" justifyContent="center" alignItems="center">
        <Heading lineHeight="1.15" fontSize="4rem">
          This is a Page Template
        </Heading>
      </Flex>
    </>
  );
}

export default __store__;
