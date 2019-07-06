import React from 'react'
import './Header.styl'

export default ({ children, ...props }) => {

    return (
        <header className="b-header" {...props}>{children}</header>
    )
}