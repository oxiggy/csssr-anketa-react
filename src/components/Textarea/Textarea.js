import React from 'react'
import TextareaAutosize from 'react-autosize-textarea'
import './Textarea.styl'

export default class Textarea extends React.Component {

    render() {
        const {  value, onChange, ...props }= this.props;
        return (
            <TextareaAutosize
                className="b-textarea"
                value={value}
                onChange={this.handleChange}
            >
            </TextareaAutosize>
        )
    }

    handleChange= (evt) => {
        const {name, onChange}= this.props;
        onChange(name, evt.target.value);
    }
}
