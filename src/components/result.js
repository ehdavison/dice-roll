import React from 'react';
import { Box, Flex, Text } from '@mantine/core'
import useStore from '../hooks/useStore';


const Result = () => {
    const rollResult = useStore(state => state.rollResult)
    return (
        <Box
            w='8em'
            sx={(theme) => ({
                border : 'solid #C3073F 0.4em',
                borderRadius : '5px',
                boxShadow : rollResult === 20 ? '0px 0px 40px 20px #950740' : '0px 0px 0px 0px #000000',
            })}
        >   
            <Text color='white' size='5em'>{rollResult}</Text>
        </Box>
    );
};

export default Result;