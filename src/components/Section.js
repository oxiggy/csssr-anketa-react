import React from 'react'

export default ({ className, children, heading, text, ...props }) => {
    return (
        <section className={className} {...props}>
            {!!heading && <h1>{heading}</h1>}
            {!!text && <p>{text}</p>}
            {children}
        </section>
    )
}
