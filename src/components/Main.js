import React from 'react'

export default ({ className, children, ...props }) => {

    return (
        <main className={className} {...props}>{children}</main>
    )
}