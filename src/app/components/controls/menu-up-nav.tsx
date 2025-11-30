import { DetailedHTMLProps, HTMLAttributes, ReactNode } from "react";

export interface MenuUpNavProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
    data: ReactNode[],
    renderOption?: (item: string | ReactNode) => ReactNode
}

export default function MenuUpNav(props: MenuUpNavProps) {
    const {data, renderOption, className, ...other} = props
    return (
        <div className={`flex items-center gap-5 ${className}`} {...other}>
            {data.map((item, index) => {
                return (
                    renderOption ? renderOption(item) : <div key={index}>{item}</div>
                )
            })}
        </div>
    )
}