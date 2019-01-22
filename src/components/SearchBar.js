import React from 'react';
import { AutoComplete, Input, Icon } from 'antd';

export class SearchBar extends React.Component {
    state = {
        dataSource: [],
    }

    onSelect = (value) => {
        console.log('onSelect', value);
    };

    handleSearch = (value) => {
        this.setState({
            dataSource: !value ? [] : [
                value,
                value + value,
                value + value + value,
            ],
        });
    };

    render() {
        const { dataSource } = this.state;
        return (
            <AutoComplete
                dataSource={dataSource}
                className={"search-bar"}
                onSelect={this.onSelect}
                onSearch={this.handleSearch}
                placeholder="Search NBA Player"
                size={"large"}
            >
                <Input suffix={<Icon type="search" className="certain-category-icon" />} />
            </AutoComplete>
        );
    }
}