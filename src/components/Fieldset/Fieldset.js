import React from 'react'
import './Fieldset.styl'

export default ({ children, legend, ...props }) => {
    return (
        <fieldset className="b-fieldset" {...props}>
            {!!legend && <legend className="b-fieldset__legend"> {legend}</legend>}
            {children}
        </fieldset>
    )
}
