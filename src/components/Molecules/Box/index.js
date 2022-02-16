import { Box, Heading, Text } from '@chakra-ui/react';
import Link from 'next/link';

function Index({ link, header, content }) {
  return (
    <Link href={link} passHref>
      <Box
        margin="1rem"
        width={['100%', '100%', '45%', '45%']}
        padding="1.5rem"
        textAlign="left"
        border="1px solid #eaeaea"
        borderRadius="10px"
        transition="color 0.15s ease, border-color 0.15s ease"
        cursor="pointer"
        _hover={{
          color: '#0070f3',
          borderColor: '#0070f3',
        }}
      >
        <Heading fontSize="1.5rem" dangerouslySetInnerHTML={{ __html: header }} />
        <Text fontSize="1.2rem" marginTop="2">
          {content}
        </Text>
      </Box>
    </Link>
  );
}

export default Index;
