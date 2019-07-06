import React from 'react';
import './Checkbox.styl';

export default class Checkbox extends React.Component {

    render () {
        const { checked, label }= this.props;
        return (
            <label className="b-checkbox">
                <input
                    className="b-checkbox__input"
                    type="checkbox"
                    checked={checked}
                    onChange={this.handleChange}
                />
                <span
                    className="b-checkbox__label"
                    dangerouslySetInnerHTML={{__html: label}}
                />
            </label>
        )
    }

    handleChange= (evt) => {
        this.props.onChange(this.props.name, evt.target.checked);
    }

}
