import React from 'react'

// const Button = ({ text }: { text: string }) => {
//     return (
//         <button>{text}</button>
//     )
// }


type ButtonProps ={
    text: string;
};

const Button = (props: ButtonProps) => {
    return (
        <button>{props.text}</button>
    )
}

export default Button
