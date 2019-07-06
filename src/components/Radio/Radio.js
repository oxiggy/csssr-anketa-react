import React from 'react'
import './Radio.styl'

export default class Radio extends React.Component {

    render () {
        const { children,  name, checked }= this.props;
        return (
            <label className="b-radio">
                <input className="b-radio__input"
                    type="radio"
                    name={name}
                    checked={checked}
                    onChange={this.handleChange}
                />
                <span className="b-radio__label"> {children} </span>
            </label>
        )
    }

    handleChange= (evt) => {
        this.props.onChange(this.props.name, evt.target.checked);
    }

}