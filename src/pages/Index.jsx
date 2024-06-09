import { useState } from "react";
import { Container, Button, VStack } from "@chakra-ui/react";
import Confetti from "react-confetti";

const Index = () => {
  const [showConfetti, setShowConfetti] = useState(false);

  const handleButtonClick = () => {
    setShowConfetti(true);
    setTimeout(() => setShowConfetti(false), 3000); // Confetti lasts for 3 seconds
  };

  return (
    <Container centerContent maxW="container.md" height="100vh" display="flex" flexDirection="column" justifyContent="center" alignItems="center">
      <VStack spacing={4}>
        <Button colorScheme="teal" size="lg" onClick={handleButtonClick}>
          Celebrate!
        </Button>
        {showConfetti && <Confetti />}
      </VStack>
    </Container>
  );
};

export default Index;