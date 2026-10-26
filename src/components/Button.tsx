import React, { type ReactNode } from 'react'

// const Button = ({ text }: { text: string }) => {
//     return (
//         <button>{text}</button>
//     )
// }


// type ButtonProps ={
//     text: string;
// };

// const Button = (props: ButtonProps) => {
//     const {text} = props;
//     return (
//         <button>{text}</button>
//     )
// }

type ButtonProps = {
    children: ReactNode;
};

const Button = ({ children }: ButtonProps) => {
    return (
        <button  className="bg-violet-600 hover:bg-violet-500 
        transition-colors rounded px-2 py-1 
        disabled:opacity-30 disabled:cursor-not-allowed">
            {children}
        </button>
    )
}

export default Button
