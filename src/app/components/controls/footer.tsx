import Image from "next/image";
import { DetailedHTMLProps, HTMLAttributes, ReactNode } from "react";

export interface FooterData {
    name: string,
    icon: any
}


export interface FooterProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
    data: FooterData[]
}

export default function Footer(props: FooterProps) {
    const {data, className, ...other} = props

    return (
        <div className={`flex items-center justify-between ${className}`} {...other}>
            {data.map((item, index) => {
                return (
                    <div key={index} className="footer-item flex flex-col items-center justify-center">
                        <Image src={item.icon} alt={item.name} />
                        <span>
                            {item.name}
                        </span>
                    </div>
                )
            })}
        </div>
    )
}