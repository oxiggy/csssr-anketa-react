import React from 'react'
import cs from 'classnames'
import './Section.styl'

export default ({ children, className, heading, text, ...props }) => {
    return (
        <section className={cs('b-section', className)} {...props}>
            {!!heading && <h1 className="b-section__title">{heading}</h1>}
            {!!text && <p className="b-section__text">{text}</p>}
            {children}
        </section>
    )
}
