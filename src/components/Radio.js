import React from 'react'

export default class Radio extends React.Component {

    render () {
        const { children, className, name, checked }= this.props;
        return (
            <label className={className}>
                <input
                    type="radio"
                    name={name}
                    checked={checked}
                    onChange={this.handleChange}
                />
                {children}
            </label>
        )
    }

    handleChange= (evt) => {
        this.props.onChange(this.props.name, evt.target.checked);
    }

}