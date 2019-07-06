import React from 'react'

export default class Field extends React.Component {

    render() {
        const { children, label, value, name, onChange, ...props }= this.props;
        return (
            <label className="b-field">
                {label}
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
