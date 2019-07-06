import React from 'react'

export default class Checkbox extends React.Component {

    render () {
        const { className, checked, label }= this.props;
        return (
            <label className={className}>
                <input
                    type="checkbox"
                    checked={checked}
                    onChange={this.handleChange}
                />
                <span dangerouslySetInnerHTML={{__html: label}}/>
            </label>
        )
    }

    handleChange= (evt) => {
        this.props.onChange(this.props.name, evt.target.checked);
    }

}
