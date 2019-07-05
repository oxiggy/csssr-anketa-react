import React from 'react'

export default ({ className, children, ...props }) => {

    return (
        <header className={className} {...props}>{children}</header>
    )
}