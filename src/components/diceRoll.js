import React from 'react';
import { Container, Flex, Button, Text } from '@mantine/core';
import { useMemo, useState } from 'react';
import useStore from '../hooks/useStore';
import Queue from './queue';
import Roll from './roll';

const DiceRoll = () => {
    // const [roll, setRoll] = useState(0)
    const [rollQueue, setRollQueue] = useState([])
    const [queueBool, setQueueBool] = useState(true)
    const setRollResult  = useStore(state => state.setRollResult)
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
        console.log(rollQueue)

        return (

        <Flex align='center' direction='column'>
            <Flex my='2em' direction='column'>
                <Queue>
                    {rollQueue.map((roll) => {
                        return (
                            <Roll roll={roll}/>
                        )
                    })}
                </Queue>
            </Flex>
            <Flex>
            {items?.map((item) => {
                return (
                <Button
                    onClick={() => { 
                        if(queueBool !== true) {
                            setRollResult(item.onClickValue())
                        } else {
                            setRollQueue([...rollQueue, item.onClickValue()])
                        }
                    }}
                    key={`dice-${item.text}`}
                    mx='1em'
                    size='lg'
                    sx={(theme) => ({
                        backgroundColor : '#C3073F',
                        '&:hover': {
                            backgroundColor : '#950740'
                        },
                    })}
                >
                    {item.text}
                </Button>
                )
            })}
            <Button 
                onClick={() => {
                    setRollQueue([])
                }}
                size='lg'
                mx='1em'
                sx={(theme) => ({
                    backgroundColor : '#C3073F',
                    '&:hover': {
                        backgroundColor : '#950740'
                    },
                })}
            >
                CLEAR
            </Button>
            <Button
                mx='1em'
                onClick={() => {
                    setQueueBool(!queueBool)
                    console.log(queueBool)
                }}
                size='lg'
                sx={(theme) => ({
                    backgroundColor : '#C3073F',
                    '&:hover': {
                        backgroundColor : '#950740'
                    },
                })}
            >
                Queue
            </Button>
            </Flex>
            
        </Flex>
        );
};

export default DiceRoll;