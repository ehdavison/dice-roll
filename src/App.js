import './App.css';
import DiceRoll from './components/diceRoll';
import Result from './components/result';
import { Box } from '@mantine/core';
import Queue from './components/queue';


function App() {
  return (
    <Box bg='#1A1A1D' align='center' direction='column' py='5em' w='100vw'>
      <Result />
      <DiceRoll />
    </Box>
    
  );
}

export default App;
