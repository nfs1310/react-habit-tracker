import React, { type ComponentProps, type ReactNode } from 'react'

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
    variant?: 'primary' | 'secondary' | 'ghost-destructive';
} & ComponentProps<'button'>;

const Button = ({ ...props }: ButtonProps) => {
    return (
        <button
            {...props}
            className="bg-violet-600 hover:bg-violet-500 
            transition-colors rounded px-2 py-1 
            disabled:opacity-30 disabled:cursor-not-allowed"
        />
    )
}

export default Button
