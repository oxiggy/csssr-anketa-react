import React from 'react'

export default ({ className, value, children, ...props }) => {

    return (
        <textarea className={className} value={value} {...props}>
            {children}
        </textarea>
    )
}