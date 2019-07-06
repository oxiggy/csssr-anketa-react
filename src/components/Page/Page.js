import React from 'react'
import cs from 'classnames'
import './Page.styl'

export default ({ children, className, ...props }) => {

    return (
        <div {...props} className={cs('b-page', className)}>
            {children}
        </div>
    )

}
