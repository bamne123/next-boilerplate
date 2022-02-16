/* eslint-disable camelcase */
/* eslint-disable no-underscore-dangle */
/* eslint-disable no-unused-vars */
/* eslint-disable react/no-array-index-key */

/* Remove above Rules before starting */
/* This is a View will hold local State, Hooks and Independent View. Create only if not Created Previously */

import { Flex, Heading, useColorMode } from '@chakra-ui/react';

function __store__Container({ data }) {
  //   const { colorMode, toggleColorMode } = useColorMode();

  return (
    <>
      <Flex flexDirection="column" justifyContent="center" alignItems="center">
        <Heading lineHeight="1.15" fontSize="4rem">
          This is a Organism Template
        </Heading>
      </Flex>
    </>
  );
}

export default __store__Container;
