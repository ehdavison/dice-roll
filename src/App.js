import logo from './logo.svg';
import './App.css';
import { Container, Flex, Button, Text } from '@mantine/core'
import { useState } from 'react';

function App() {
  const [roll, setRoll] = useState(0)
  const randomRoll = (max) => {
    return Math.floor(Math.random() * max);
  }
  return (
    <Flex>
      <Button
        onClick={() => {
          setRoll(randomRoll(20))
        }}
      >D-20</Button>
      <Text>{roll}</Text>
    </Flex>
  );
}

export default App;
