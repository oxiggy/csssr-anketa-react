import React from 'react'

export default ({ className, children, legend, ...props }) => {
    return (
        <fieldset className={className} {...props}>
            {!!legend && <legend>{legend}</legend>}
            {children}
        </fieldset>
    )
}
