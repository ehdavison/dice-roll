import React, { useState } from 'react';
import { Flex, ScrollArea } from '@mantine/core';

const RollHistory = ({children}) => {
    
    return (
        <Flex
            w='20em'
            h='25em'
            m='3em'
            py='1em'
            sx={(theme) => ({
                borderRadius : '5px',
                backgroundColor : '#F3EFE0',
            })}
            
            direction='column'
        >
            <ScrollArea mah='25em'> 
                {children}
            </ScrollArea>
        </Flex>
    );
};

export default RollHistory;