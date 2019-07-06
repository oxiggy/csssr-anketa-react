import React from 'react'
import CheckboxListItem from "../CheckboxListItem/CheckboxListItem";
import './CheckboxList.styl';

export default class CheckboxList extends React.Component {

    render() {
        const { name, items, onChange, ...props}= this.props;
        return (
            <ul className="b-checkbox-list" {...props}>
                {items && Object.keys(items).map((k, i) => {
                    const checked= items[k];
                    return (
                        <CheckboxListItem
                            key={i}
                            name={k}
                            label={k}
                            checked={checked}
                            onChange={this.handleChange}
                        />
                    )
                })}
            </ul>
        )
    }

    handleChange= (checkboxName, checked) => {
        const newItems= { ...this.props.items };
        newItems[checkboxName]= checked;
        this.props.onChange(this.props.name, newItems);
    }

}
