import React from 'react';
import nba from 'nba';
import { Profile } from "./Profile";

export class Main extends React.Component {
    state = {
        playerId: nba.findPlayer('Stephen Curry').playerId,
        playerInfo: {}
    };

    componentDidMount() {
        nba.stats.playerInfo({ PlayerID: this.state.playerId })
            .then((info) => {
                let playerInfo = Object.assign(info.commonPlayerInfo[0], info.playerHeadlineStats[0]);
                this.setState({ playerInfo });
            })
            .catch((e) => console.log(e));
    }

    render() {
        return (
            <div className={"main"}>
                <Profile playerInfo={this.state.playerInfo}/>
                <div>ShotChart</div>
            </div>
        );
    };
}