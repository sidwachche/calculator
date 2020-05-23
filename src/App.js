import React from 'react'
import './App.css'

import { useSelector, useDispatch } from 'react-redux'

const config = [
	{ type: 'clear', id: 'clear', text: 'AC', customClass: 'border-radius-20' },
	{ type: 'operation', id: 'divide', text: '/' },
	{ type: 'number', id: 'seven', text: '7' },
	{ type: 'number', id: 'eight', text: '8' },
	{ type: 'number', id: 'nine', text: '9' },
	{ type: 'operation', id: 'multiply', text: '*' },
	{ type: 'number', id: 'four', text: '4' },
	{ type: 'number', id: 'five', text: '5' },
	{ type: 'number', id: 'six', text: '6' },
	{ type: 'operation', id: 'subtract', text: '-' },
	{ type: 'number', id: 'one', text: '1' },
	{ type: 'number', id: 'two', text: '2' },
	{ type: 'number', id: 'three', text: '3' },
	{ type: 'operation', id: 'add', text: '+' },
	{ type: 'number', id: 'zero', text: '0', customClass: 'border-radius-20' },
	{ type: 'decimal', id: 'decimal', text: '.' },
	{ type: 'equal', id: 'equals', text: '=' },
]

function App() {
	const dispatch = useDispatch()
	const inputArr = useSelector((state) => state.inputArr)
	const result = useSelector((state) => state.result)

	return (
		<>
			<div className='app'>
				<h1> Sid 's Calculator</h1>
				<div className='grid'>
					<div className='result'>
						<div>{inputArr}</div>
						<div id='display'>{result}</div>
					</div>
					{config.map(({ text, id, customClass, type }) => {
						return (
							<button
								key={text}
								id={id}
								className={customClass}
								onClick={() => {
									dispatch({ type, payload: text })
								}}
							>
								{text}
							</button>
						)
					})}
				</div>
			</div>
		</>
	)
}
export default App
