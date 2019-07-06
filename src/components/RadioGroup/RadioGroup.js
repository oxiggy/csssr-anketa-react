import React from 'react'
import Radio from "../Radio/Radio.js"
import './RadioGroup.styl'

export default class RadioGroup extends React.Component {
    render() {
        const { name, items, onChange, ...props}= this.props;
        return (
            <div className="b-radio-group" {...props}>
                {items && Object.keys(items).map((k, i) => {
                    const checked= items[k];
                    return (
                        <Radio
                            key={i}
                            groupName={name}
                            name={k}
                            checked={checked}
                            onChange={this.handleChange}
                        >
                            {k}
                        </Radio>
                    )
                })}
            </div>
        )
    }

    handleChange= (name, checked) => {
        const newItems= { ...this.props.items };
        Object.keys(this.props.items).forEach((k) => {
            newItems[k]= false;
        });
        newItems[name]= checked;
        this.props.onChange(this.props.name, newItems);
    }

}
