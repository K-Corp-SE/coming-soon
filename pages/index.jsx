import { FaDiscord } from "react-icons/fa";
import {
  Box,
  Button,
  Container,
  Flex,
  Heading,
  Image,
  Stack,
  Text,
} from "@chakra-ui/react";
import { ChakraProvider } from "@chakra-ui/react";

export default function HomePage() {
  return (
    <ChakraProvider>
      <Flex bg="linear-gradient(#000000, #2C3E50)">
        <Container w="container.lg" color="white" textAlign="center">
          <Stack justifyItems="flex-end" minHeight="100vh">
            <Stack flex="1" justify="center">
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
                  A rhythm game where you recruit k-pop idols and level them up.
                  Use your knowledge of k-pop to beat your friends and rise to
                  the top!
                </Text>
              </Box>
              <Box py="16" px="4">
                <Button
                  as="a"
                  href="https://discord.gg/fuEuSHpAMD"
                  target="_blank"
                  size="lg"
                  fontSize="24"
                  colorScheme="#1a202c"
                  color="#1a202c"
                  bg="#7289DA"
                  _hover={{
                    boxShadow: "6px 8px #000000",
                    fontSize: "26",
                  }}
                >
                  <FaDiscord />
                </Button>
                <Text py="4">Join our Discord Server and say Hello!</Text>
              </Box>
            </Stack>

            <Box pb="4" px="4" textAlign="center">
              <Image src={"/hyuna.png"} width="200px" marginX="auto" />
            </Box>
          </Stack>
        </Container>
      </Flex>
    </ChakraProvider>
  );
}
