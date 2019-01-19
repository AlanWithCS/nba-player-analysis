import React from 'react';
import {ShotChart} from "./ShotChart";
import {CountSlider} from "./CountSlider";
import {Radio, Switch} from "antd";

const RadioGroup = Radio.Group;

export class DataViewContainer extends React.Component {
    state = {
        minCount: 2,
        charType: "hexbin",
        displayToolTips: true,
    };

    onMinCountChange = (minCount) => {
        console.log("mincount: ", minCount);
        this.setState({minCount});
    };

    onCharTypeChange = (e) => {
        this.setState({
            charType: e.target.value,
        });
    };

    onToolTipChange = (displayToolTips) => {
        this.setState({displayToolTips});
    };

    render() {
        const { charType } = this.state;
        return (
            <div className={"data-view"}>
                <ShotChart
                    playerId={this.props.playerId}
                    minCount={2}
                    displayToolTips={true}
                    charType={charType}
                />
                <CountSlider
                    onChange={this.onMinCountChange}
                />
                <RadioGroup onChange={this.onCharTypeChange} value={charType}>
                    <Radio value={"hexbin"}>Hexbin</Radio>
                    <Radio value={"scatter"}>Scatter</Radio>
                </RadioGroup>
                <Switch
                    checkedChildren="On"
                    unCheckedChildren="Off"
                    defaultChecked
                    onChange={this.onToolTipChange}
                />
            </div>
        );
    }
}