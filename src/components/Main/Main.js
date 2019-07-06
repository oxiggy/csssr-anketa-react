import React from 'react'
import './Main.styl'

export default ({ children, ...props }) => {

    return (
        <main className="b-main" {...props}>{children}</main>
    )
}