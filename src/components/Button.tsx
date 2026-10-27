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

type Variant = 'primary' | 'secondary' | 'ghost-destructive';

type ButtonProps = {
    variant?: Variant
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

function getVariantStyles(variant: Variant) {
    switch (variant) {
        case "primary":
            return "bg-violet-600 hover:bg-violet-500"
        case "secondary":
            return "bg-zinc-700 hover:bg-zinc-600 text-zinc-400"
        case "ghost-destructive":
            return "hover:bg-red-800 text-red-800 hover:text-red-200"
        default:
            throw new Error(`Invalid Variant: ${variant}`)
    }
}
