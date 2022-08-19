import { FaDiscord } from "react-icons/fa";
import { Box, Button, Container, Heading, Image, Text } from "@chakra-ui/react";
import { ChakraProvider } from "@chakra-ui/react";
import Link from "next/link";

export default function HomePage() {
  return (
    <ChakraProvider>
      <Box h="100vh" bg="linear-gradient(#000000, #2C3E50)">
        <Container w="container.lg" color="white" textAlign="center">
          <Box py="16" px="4">
            <Heading
              as="h1"
              display="inline-block"
              bgGradient="linear-gradient(to-l, #white, #7289DA)"
              fontSize="6xl"
            >
              Coming. Soon. 🚀
            </Heading>
          </Box>
          <Box px="4">
            <Text>
              A rhythm game where you recruit k-pop idols and level them up. Use
              your knowledge of k-pop to beat your friends and rise to the top!
            </Text>
          </Box>
          <Box py="16" px="4">
            <Button
              as="a"
              href="https://discord.gg/fuEuSHpAMD"
              target="_blank"
              size="lg"
              colorScheme="#1a202c"
              color="#1a202c"
              bg="#7289DA"
              _hover={{
                boxShadow: "4px 6px #000000",
                mt: "-1",
                mb: "1",
              }}
            >
              <FaDiscord />
            </Button>
            <Text py="4">Join our Discord Server and say Hello!</Text>
          </Box>
          {/* <Box pb="4" px="4">
            <Image src="./yujin.png" />
          </Box> */}
        </Container>
      </Box>
    </ChakraProvider>
  );
}
