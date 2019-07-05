import React from 'react'

export default ({ className, children, ...props }) => {

    return (
        <label className={className} {...props}>{children}</label>
    )
}