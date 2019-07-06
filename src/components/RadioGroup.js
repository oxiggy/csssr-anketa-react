import React from 'react'
import Radio from "./Radio.js";

export default class RadioGroup extends React.Component {
    render() {
        const {className, name, items, onChange, ...props}= this.props;
        return (
            <ul className={className} {...props}>
                {items && Object.keys(items).map((k, i) => {
                    const checked= items[k];
                    return (
                        <li key={i}>
                            <Radio
                                groupName={name}
                                name={k}
                                checked={checked}
                                onChange={this.handleChange}
                            >
                                {k}
                            </Radio>
                        </li>
                    )
                })}
            </ul>
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
