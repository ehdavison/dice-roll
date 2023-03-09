import React from 'react';
import { Box, Flex, Text, Button } from '@mantine/core'

const Queue = ({children}) => {
    

    return (
        <Box>
            <Flex
                h='5em'
                w='auto'
                my='5em'
                mx='15em'
                sx={(theme) => ({
                    border : 'solid #C3073F 0.4em', 
                })}
            >
                {children}
            </Flex>
        </Box>
    );
};

export default Queue;