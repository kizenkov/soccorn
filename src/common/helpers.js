import React from 'react';
import {Button} from './button';

export const mapingItems = (items, itemId, objPropName, newObjProps) => {
    return items.map(item => {
        if (item[objPropName] === itemId) {
            return {...item, ...newObjProps}
        }
        return item
    })
}

export const createField = (name, onChange, onBlur, placeholder, value, type = null) => (
    <input name={name} onChange={onChange} onBlur={onBlur} placeholder={placeholder}
           value={value} type={type}/>
)

export const createSendArea = (changeText, text, send, backgroundButton) => {
    return <div>
        <div>
            <textarea onChange={changeText}
                      value={text}/>
        </div>
        <div>
            {Button('SEND', send, text === '', backgroundButton)}
        </div>
    </div>
}