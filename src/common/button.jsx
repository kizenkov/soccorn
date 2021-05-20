import React from 'react';
import classes from './button.module.css'

export const Button = (name, onClick, disabled, backgroundButton, type) => {
    return <button className={classes.button}
                   type={type}
                   disabled={disabled}
                   onClick={onClick}
                   style={{
                       background: backgroundButton,
                   }}>{name}
    </button>
}