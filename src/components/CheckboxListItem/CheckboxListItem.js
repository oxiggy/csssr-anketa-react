import React from "react";
import Checkbox from "../Checkbox/Checkbox";
import './CheckboxListItem.styl'

export default class CheckboxListItem extends React.Component {

    render() {
        const { name, label, checked, onChange, ...props }= this.props;
        return (
            <li className="b-checkbox-list__item" {...props}>
                <Checkbox
                    name={name}
                    label={name}
                    checked={checked}
                    onChange={onChange}
                >
                </Checkbox>
            </li>
        )
    }

}
