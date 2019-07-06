import React from "react";
import Checkbox from "./Checkbox";

export default class CheckboxListItem extends React.Component {

    render() {
        const { name, label, checked, onChange, ...props }= this.props;
        return (
            <li {...props}>
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
