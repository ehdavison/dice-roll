import React from 'react';
import { Container, Flex, Button, Text } from '@mantine/core'
import { useMemo, useState } from 'react';

const DiceRoll = () => {
    const [roll, setRoll] = useState(0)
    const randomRoll = (max, min) => {
        return Math.floor(Math.random() * (max - min + 1)) + min;
        }
        const items = useMemo(() => {
        return [
            {text: 'D-20', onClickValue: () => randomRoll(20, 1)},
            {text: 'D-12', onClickValue: () => randomRoll(12, 1)},
            {text: 'D-10', onClickValue: () => randomRoll(10, 1)},
            {text: 'D-8', onClickValue: () => randomRoll(8, 1)},
            {text: 'D-6', onClickValue: () => randomRoll(6, 1)},
            {text: 'D-4', onClickValue: () => randomRoll(4, 1)},
            {text: 'Coin', onClickValue: () => randomRoll(2, 1)}
        ]
        })
        return (

        <Flex bg='#1A1A1D' align='center' direction='column' py='5em' w='100vw'>
            <Flex my='2em' direction='column'>
                <Text color='white' size='3.5em'>{roll}</Text>
            </Flex>
            <Flex>
            {items?.map((item) => {
                return (
                <Button
                    onClick={() => {
                        setRoll(item.onClickValue())
                    }}
                    key={`dice-${item.text}`}
                    mx='1em'
                    size='lg'
                    color='red'
                >
                    {item.text}
                </Button>
                )
            })}
            </Flex>
        </Flex>
        );
};

export default DiceRoll;