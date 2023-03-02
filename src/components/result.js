import React from 'react';
import { Box } from '@mantine/core'
import useStore from '../hooks/useStore';


const Result = () => {
    const { rollResult } = useStore()
    return (
        <Box>
            <Text>{rollResult}</Text>
        </Box>
    );
};

export default Result;