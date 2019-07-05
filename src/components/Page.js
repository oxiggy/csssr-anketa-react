import React from 'react'

export default ({ className, children, ...props }) => {

    return (
        <div className={className} {...props}>{children}</div>
    )
}
