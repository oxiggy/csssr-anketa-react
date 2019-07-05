import React from 'react'
import Checkbox from "./Checkbox";

export default ({ className, items, ...props }) => {

    return (
        <ul className={className} {...props}>
            {items && items.map((item, i) => {
                return (
                    <li key={i}>
                        <Checkbox checked={item.checked}>{item.label}</Checkbox>
                    </li>
                )
            })}
        </ul>
    )
}