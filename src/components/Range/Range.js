import React from 'react'
import './Range.styl'

export default ({ className, children, ...props }) => {

    return (
        <div className={className} {...props}>{children}</div>
    )
}