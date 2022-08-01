import React from 'react'
import react, { useState } from 'react'

import { IState as IProps } from '../App'

interface IStateProps {
    people: IProps["people"]
    setPeople: React.Dispatch<React.SetStateAction<IProps["people"]>>
}

const AddToList: React.FC<IStateProps> = ({ people, setPeople}) => {
    
    const [input, setInput] = useState({
        name: "",
        age: 0,
        note: '',
        url: ''
    })
    
const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setInput({
        ...input,
        [e.target.name]: e.target.value
    })
}

const handleClick = (): void => {

    setPeople([
        ...people,
        {
            name: input.name,
            age: input.age,
            url: input.url,
            note: input.note
        }
    ])
}

    return (
        <div>
            <input
                type="text"
                placeholder='Name'
                value={input.name}
                onChange={handleChange}
                name="name"
            />

            <input
                type="number"
                placeholder='age'
                value={input.age}
                onChange={handleChange}
                name="age"
            />

            <input
                type="text"
                placeholder='note'
                value={input.note}
                onChange={handleChange}
                name="note"
            />

            <textarea
            
                placeholder='Name'
                value={input.url}
                onChange={handleChange}
                name="url"
            />

            <button onClick={handleClick}>
                Add to list
            </button>
        </div>
    )
}

export default AddToList