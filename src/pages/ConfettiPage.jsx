import React from "react";
import { Box, Button, Container, VStack } from "@chakra-ui/react";
import confetti from "canvas-confetti";

const ConfettiPage = () => {
  

  const handleConfetti = () => {
    confetti({
      particleCount: 100,
      spread: 70,
      origin: { y: 0.6 },
    });
  };

  return (
    <Container centerContent maxW="container.md" height="100vh" display="flex" flexDirection="column" justifyContent="center" alignItems="center">
      <VStack spacing={4}>
        <Button colorScheme="teal" size="lg" onClick={handleConfetti}>
          Celebrate!
        </Button>
        
      </VStack>
    </Container>
  );
};

export default ConfettiPage;