import React from 'react'
import './Field.styl'

export default class Field extends React.Component {

    render() {
        const { className, children, label, value, name, onChange, ...props }= this.props;
        return (
            <label className="b-field">
                <div className="b-field__label">
                    {label}
                </div>
                <input className="b-field__input" {...props} value={value} onChange={this.handleChange} />
                {children}
            </label>
        )
    }

    handleChange= (evt) => {
        const { name, onChange }= this.props;
        onChange(name, evt.target.value);
    }

}
