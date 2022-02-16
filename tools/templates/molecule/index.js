/* eslint-disable no-underscore-dangle */
/* eslint-disable no-unused-vars */
/* eslint-disable react/no-array-index-key */
/* Remove above Rules before starting */

/* Molecule Is Basic Building block of Application, Create only if not Created Previously */
/* This is a View will hold Independent View, and Common components. */

// import styles from 'Styles/Home.module.css';
import { Flex, Heading, useColorMode } from '@chakra-ui/react';

function __store__({ data }) {
  //   const { colorMode, toggleColorMode } = useColorMode();

  return (
    <>
      <Flex flexDirection="column" justifyContent="center" alignItems="center">
        <Heading lineHeight="1.15" fontSize="4rem">
          This is a Molecule Template
        </Heading>
      </Flex>
    </>
  );
}

export default __store__;
