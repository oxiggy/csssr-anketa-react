import React from 'react'

export default ({ className, children, checked, ...props }) => {

    return (
        <label className={className} {...props}>
            <input
                type="checkbox"
                checked={checked}
            />
            {children}
        </label>
    )
}