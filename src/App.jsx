import "./App.css";
import NavigationBar from "./navigationBar";
import PageContent from "./pageContent";
import { Container, Flex } from "@chakra-ui/react";

function App() {
  return (
    <Container maxW={"100%"} p={0}>
      <Flex>
        <NavigationBar />
        <PageContent />
      </Flex>
    </Container>
  );
}

export default App;
