import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';

type ButtonProps ={
    onClick: () => void;
    text: string;
}

const Button: React.FC<ButtonProps> = ({ onClick, text }) => {
    return(
        <button className = "btn btn-outline-primary" onClick = { onClick } >{ text }</button>
    );
};

export default Button;