import React from 'react';
import { Box, Flex, Text, Button } from '@mantine/core'

const Queue = ({children}) => {
    

    return (
        <Flex
            h='5em'
            w='auto'
            justify='center'
            align='center'
            sx={(theme) => ({
                border : 'solid #C3073F 0.4em',
                minWidth : '5em',
            })}
        >
            {children}
        </Flex>
    );
};

export default Queue;