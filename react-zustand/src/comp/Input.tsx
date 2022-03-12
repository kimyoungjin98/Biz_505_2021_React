import React from 'react';
import create from 'zustand';

export const useStore = create((set:any)=>({
	inputValue:'',
	
	onChangeHandler(ev:any){
		set((state:any) => ({
			inputValue : ev.target.value
		}))
	}
}))

const Input = () => {

 const { onChangeHandler } = useStore();

  return (
	<div>
		<input onChange={onChangeHandler} />
	</div>
  )
}

export default Input