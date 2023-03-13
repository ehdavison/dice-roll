import './App.css';
import DiceRoll from './components/diceRoll';
import Result from './components/result';
import { Box } from '@mantine/core';
import Queue from './components/queue';


function App() {
  return (
    <Box bg='#1A1A1D' align='center' direction='column' py='3em' w='100vw'>
      <Box
      sx={(theme) => ({
        
      })}
      >
        <Result />
      </Box>
      <DiceRoll />
    </Box>
    
  );
}

export default App;
