import React from 'react'

export default ({ className, children, ...props }) => {

    return (
        <footer className={className} {...props}>{children}</footer>
    )
}