import React from 'react'
import './Footer.styl'

export default ({ children, ...props }) => {

    return (
        <footer {...props} className="b-footer">{children}</footer>
    )
}