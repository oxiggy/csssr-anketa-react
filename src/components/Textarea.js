import React from 'react'

export default class Textarea extends React.Component {

    render() {
        const { className, value, onChange, ...props }= this.props;
        return (
            <textarea
                className={className}
                value={value}
                onChange={this.handleChange}
            >
            </textarea>
        )
    }

    handleChange= (evt) => {
        const {name, onChange}= this.props;
        onChange(name, evt.target.value);
    }
}
