import React from 'react';
import { Container, Flex, Button, Text, Box } from '@mantine/core';
import { useMemo, useState } from 'react';
import useStore from '../hooks/useStore';
import Queue from './queue';
import Roll from './roll';
import RollHistory from './rollHistory';
import { reverse } from 'ramda';


const DiceRoll = () => {
    const [rollQueue, setRollQueue] = useState([])
    const [historyQueue, setHistoryQueue] = useState([])
    const [queueBool, setQueueBool] = useState(true)
    const setRollResult  = useStore(state => state.setRollResult)
    const initialValue = 0;
    const queueSum = rollQueue.reduce((accumulator, currentValue) => accumulator + currentValue, initialValue)
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

        <Flex align='center' direction='row'>
                <RollHistory>
                    {reverse(historyQueue || []).map((roll) => {
                        return (
                            <Flex direction='row' justify='center'>
                                <Text

                                    sx={(theme) => ({
                                        fontSize: '1.2em',
                                    })}
                                >
                                    You rolled a 
                                </Text>
                                <Text          
                                    mx='0.5em'
                                    sx={(theme) => ({
                                        fontSize: '1.2em',
                                    })}
                                >
                                    {<Roll roll={roll}/>}
                                </Text>
                            </Flex>
                        )
                    })}
                </RollHistory>
            <Flex 
                direction='column'
                justify='center'
                align='center'
                sx={(theme) => ({
                    border : 'solid red 5px',
                })}
            >
                {/* Queue Component Flex */}
                <Flex direction='row'>
                    {queueBool ? 
                        <Queue>
                            {rollQueue.map((roll) => {
                                return (
                                    <Text 
                                        color='white'
                                        sx={(theme) => ({
                                            fontSize: '2em',
                                        })}
                                        mx='1em'
                                    >
                                        {<Roll roll={roll}/>}
                                    </Text>
                                )
                            })}
                        </Queue> :
                        <Box></Box>
                    }  
                </Flex>

                <Flex 
                    wrap='wrap'
                >
                    {items?.map((item) => {
                        return (
                        <Button
                            onClick={() => {
                                const result = item.onClickValue()
                                setHistoryQueue([...historyQueue, result])
                                if(queueBool !== true) { 
                                    setRollResult(result)
                                } else { 
                                    setRollQueue([...rollQueue, result])
                                }
                            }}
                            key={`dice-${item.text}`}
                            m='1em'
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
                            setRollResult(0)
                        }}
                        size='lg'
                        m='1em'
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
                        m='1em'
                        onClick={() => {
                            setQueueBool(!queueBool)
                            setRollResult(0)
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
                    <Button
                        onClick={() => {
                            setRollResult(queueSum)
                        }}
                        m='1em'
                        size='lg'
                        sx={(theme) => ({
                            backgroundColor : '#C3073F',
                            '&:hover': {
                                backgroundColor : '#950740'
                            },
                        })}
                    >
                        =
                    </Button>
                </Flex>
            </Flex>
            
        </Flex>
        );
};

export default DiceRoll;