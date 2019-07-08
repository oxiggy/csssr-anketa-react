import React from 'react'
import Slider from 'react-rangeslider'
import Media from 'react-media'
import 'react-rangeslider/lib/index.css'
import './Range.styl'

export default class Range extends React.Component {

    handleChange = value => {
        this.props.onChange(this.props.name, value);
    };

    render() {
        const { children, value, ...props }= this.props;
        const horizontalLabels = {
            0: 'Не владею',
            20: 'Использую готовые решения',
            50: 'Использую готовые решения и умею их переделывать',
            100: 'Пишу сложный JS с нуля'
        };
        return (
            <div className="b-range" {...props}>
                <Media query="(max-width: 699px)">
                    {(matches) => (
                        matches ? (
                            <Slider
                                min={0}
                                max={100}
                                value={value}
                                onChange={this.handleChange}
                                tooltip={false}
                                labels={horizontalLabels}
                                orientation="vertical"
                            />
                        ) : (
                            <Slider
                                min={0}
                                max={100}
                                value={value}
                                onChangeStart={this.handleChangeStart}
                                onChange={this.handleChange}
                                onChangeComplete={this.handleChangeComplete}
                                tooltip={false}
                                labels={horizontalLabels}
                            />
                        )
                    )}
                </Media>
            </div>
        )
    }
}
