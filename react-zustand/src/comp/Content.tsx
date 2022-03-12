import React from 'react'
import { useStore } from './Input';

const Content = () => {
  
	const {inputValue} = useStore();

  return (
	<div>{inputValue}</div>
  )
}

export default Content