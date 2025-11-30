import Image from "next/image"
import { ButtonHTMLAttributes, DetailedHTMLProps } from "react"

export interface AppButtonProps extends DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> {
    variant?: 'primary' | 'outline' | 'inherit' | 'ghost',
    iconLeft?: string,
    iconRight?: string
}

export default function AppButton(props: AppButtonProps) {
    const {variant = 'primary', children, className, iconLeft, iconRight, ...other} = props

    return (
        <button {...other} className={`flex items-center justify-center gap-2 pt-2 pr-5 pb-2 pl-5 cursor-pointer ${variant === 'primary' ? 'bg-[#578C62] rounded-[90px] hover:shadow duration-200 transition-all' : variant === 'outline' ? 'bg-transparent border-1 border-[#D7DBE2] rounded-[90px] hover:shadow duration-200 transition-all' : variant === 'inherit' ? 'rounded-[90px] bg-[#EAE3E199] hover:shadow duration-200 transition-all' : 'hover:border-b-1 duration-200 transition-all'} ${className}`}>
          {iconLeft && <Image src={iconLeft} alt="icon-left" />}  {children} {iconRight && <Image src={iconRight} alt="icon-right" />}
        </button>
    )
}