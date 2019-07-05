import React from 'react'

export default ({ className, children, name, value, ...props }) => {
    return (
        <label className={className} {...props}>
            {name}
            <input value={value} />
            {children}
        </label>
    )
}
