import React from 'react';
import { Box, Flex, Text } from '@mantine/core'

const Queue = ({children}) => {
    

    return (
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
    );
};

export default Queue;