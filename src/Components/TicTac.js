import React, { Component } from 'react'
import './TicTac.css'
import WinnerModal from './WinnerModal';

class TicTac extends Component {

    constructor(props) {
        super(props);
        this.setSymbol = this.setSymbol.bind(this);
        this.state =
        {
            isWinner: false,
            symbol: "",
            result: [['01', '02', '03'], ['11', '12', '13'], ['21', '22', '23']]
        }

    }

    setSymbol(symbol) {
        this.setState({ symbol: symbol })
    }

    selectCell = (e) => {
        if (!e.target.innerHTML) {
            e.target.innerHTML = this.state.symbol
            this.setState(prev => { return { symbol: prev.symbol == "X" ? "O" : "X" } })
            let indexes = e.target.id.slice(4).split("");
            let temp = this.state.result[Number(indexes[0])];
            if (temp.length > 0) {
                temp[Number(indexes[1])] = this.state.symbol
            }
            else {
                temp[Number(indexes[1])] = this.state.symbol
            }
            this.state.result[Number(indexes[0])] = temp;
            this.setState({ result: this.state.result })
        }

    }

    restartTheGame = () => {
        window.location.reload()
        // this.setState({ symbol: "", results: [] })
    }
    componentDidUpdate() {
        for (let i = 0; i < 3; i++) {
            let rowVal = this.state.result[i][0];
            let rowResult = false;

            let colVal = this.state.result[0][i];
            let colResult = false;

            let y1Result = false;
            let y2Result = false;

            for (let ii = 1; ii < 3; ii++) {
                if (rowVal == this.state.result[i][ii]) {
                    rowResult = true;
                }
                else {
                    rowResult = false;
                    break;
                }
            }

            for (let ii = 1; ii < 3; ii++) {
                if (colVal == this.state.result[ii][i]) {
                    colResult = true;
                }
                else {
                    colResult = false;

                    break;
                }
            }



            for (let ii = 1; ii < 3; ii++) {
                let temp = this.state.result[0][0];

                if (temp == this.state.result[ii][ii]) {
                    y1Result = true;
                }
                else {
                    y1Result = false;
                    break;
                }
            }


            for (let ii = 1; ii < 2; ii++) {
                let temp1 = this.state.result[0][2];
                let temp2 = this.state.result[2][0];
                if (temp1 == temp2 && temp1 == this.state.result[ii][ii]) {
                    y2Result = true;
                }
                else {
                    y2Result = false;
                    break;
                }
            }

            if (rowResult || colResult || y1Result || y2Result) {
                if (this.state.isWinner === false) {
                    this.setState({ isWinner: true })
                }
            }
        }
    }
    render() {



        return <React.Fragment>
            <div id="intro-screen" className="center" hidden={this.state.symbol ? true : false}>
                <h2>Choose your symbol:</h2>
                <button type="button" id="choose-x" className="choose" onClick={() => { this.setSymbol("X") }}>X</button>
                <button type="button" id="choose-o" className="choose" onClick={() => { this.setSymbol("O") }}>O</button>
            </div>

            <div id="game-screen" className="center" hidden={this.state.symbol ? false : true}>
                <table className="center">
                    <tbody>
                        <tr>
                            <td>
                                <button type="button" className="cell" id="cell00" onClick={this.selectCell}></button>
                            </td>
                            <td>
                                <button type="button" className="cell" id="cell01" onClick={this.selectCell}></button>
                            </td>
                            <td>
                                <button type="button" className="cell" id="cell02" onClick={this.selectCell}></button>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <button type="button" className="cell" id="cell10" onClick={this.selectCell}></button>
                            </td>
                            <td>
                                <button type="button" className="cell" id="cell11" onClick={this.selectCell}></button>
                            </td>
                            <td>
                                <button type="button" className="cell" id="cell12" onClick={this.selectCell}></button>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <button type="button" className="cell" id="cell20" onClick={this.selectCell}></button>
                            </td>
                            <td>
                                <button type="button" className="cell" id="cell21" onClick={this.selectCell}></button>
                            </td>
                            <td>
                                <button type="button" className="cell" id="cell22" onClick={this.selectCell}></button>
                            </td>
                        </tr>
                    </tbody>

                </table>
                <button type="button" id="restart" onClick={this.restartTheGame}>Restart </button>
                <div></div>
            </div>
            {(this.state.isWinner) ? <WinnerModal winner={this.state.symbol == "X" ? "O" : "X"} /> : ""}
        </React.Fragment>
    }

}

export default TicTac