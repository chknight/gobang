/**
 * The board of the gobang
 * Could be used as plugin
 * Created by chknight on 17/12/16.
 */
import React, { Component } from 'react';
import GobangPiece from './GobangPiece'

const style = {
    board: {
        height: '600px',
        width: '600px',
        padding: 0,
},
    borderRow: {
        width:'100%',
        margin:0,
        height:'40px',
        padding:0,
        boxSizing:'border-box',
        display:'flex',
        flexDirection:'row'
    },
    boardCol: {
        display: 'inline-block',
        height: '40px',
        width: '40px',
        borderWidth:'1px',
        borderStyle: 'solid',
        margin:0,
        padding:0,
        boxSizing:'border-box',
        borderColor: 'black'

    },

    pieceBlock: {
        display: 'flex',
        justifyContent:'center',
        alignItems:'center',
        position:'relative',
        top:'20px',
        left:'20px',
        height:'40px',
        width:'40px',

    }

};

class GobangBoard extends Component {



    /**
     * The constructor of the gobang board
     */
    constructor() {
        super();
        this.state = {
            blocks: [],
            currentPlayer: 'black',
            currentRow: 0,
            currentCol: 0,
            maxRow: 15,
            maxCol: 15,

        };

        for (let i = 0; i < 15; ++i) {
            this.state.blocks.push([]);
            for (let j = 0; j < 15; ++j) {
                this.state.blocks[i].push(
                    {
                        color : undefined,
                        rowIndex : i,
                        colIndex : j,
                        clicked : false
                    });
            }
        }

        // bind the function to avoid loss the this object
        this.pieceBlockOnClick = this.pieceBlockOnClick.bind(this);
        this.judgeResult = this.judgeResult.bind(this);
        this.checkItem = this.checkItem.bind(this);
    }


    pieceBlockOnClick(item) {

        console.log("state before click");
        console.log(this.state);

        if(item.clicked) {
            return;
        } else {
            this.state.blocks[item.rowIndex][item.colIndex].clicked = true;
        }

        // add a new item in the board
        this.state.blocks[item.rowIndex][item.colIndex].color = this.state.currentPlayer;


        // update the states
        this.setState({
            blocks: this.state.blocks,
            currentRow: item.rowIndex,
            currentCol: item.colIndex
        }, ()=> {
            // 异步调用


            // judge the result to find the winner
            this.judgeResult(() => {
                alert( this.state.currentPlayer + " win!!");
            });

            // change the current player
            console.log("current player");
            this.state.currentPlayer = this.state.currentPlayer == 'black' ? 'white' : "black";

            console.log("state after click");
            console.log(this.state);
        });

    }

    render() {
        return (
            <div style={style.board}>
                {this.state.blocks.map((row)=> {
                    return (
                      <div className="boardRow" style={style.borderRow}>
                          {row.map((item) => {
                              return(
                                  <div className="boardCol" style={style.boardCol} >
                                      <div className='pieceBlock' style={style.pieceBlock} onClick={this.pieceBlockOnClick.bind(this, item)}>
                                        <GobangPiece row={item.rowIndex} col={item.colIndex} maxRow="15" maxCol="15" color={item.color}/>
                                      </div>
                                  </div>
                              )
                          })}
                      </div>
                    );
                })}
            </div>
        )
    }

    judgeResult(callback) {

        // get the necessary variables from the state
        let currentRow = this.state.currentRow;
        let currentCol = this.state.currentCol;
        let blocks = this.state.blocks;

        console.log("currentRow " + this.state.currentRow);
        console.log("currentCol " + currentCol);
        console.log(this.state);

        // to get the max items in a line
        let maxItemInLine = 1;

        // search in vertical
        for(let rowIncrease = 1; rowIncrease <= 4; ++rowIncrease) {
            if(this.checkItem(currentRow + rowIncrease, currentCol, blocks)) {
                maxItemInLine++;
            } else {
                break;
            }
        }

        for(let rowDecrease = -1; rowDecrease >= -4; --rowDecrease) {
            if(this.checkItem(currentRow + rowDecrease, currentCol, blocks)) {
                maxItemInLine++;
            } else {
                break;
            }
        }

        console.log(maxItemInLine);
        if(maxItemInLine >= 5) {
            callback.apply();
        }

        // search in horizontal
        maxItemInLine = 1;
        for(let colIncrease = 1; colIncrease <= 4; ++colIncrease) {
            if(this.checkItem(currentRow, currentCol + colIncrease, blocks)) {
                maxItemInLine++;
            } else {
                break;
            }
        }

        for(let colDecrease = -1; colDecrease >= -4; --colDecrease) {
            if(this.checkItem(currentRow , currentCol + colDecrease, blocks)) {
                maxItemInLine++;
            } else {
                break;
            }
        }

        console.log(maxItemInLine);

        if(maxItemInLine >= 5) {
            callback.apply();
        }

        // search in
        maxItemInLine = 1;
        for(let increase = 1; increase <= 4; ++increase) {
            if(this.checkItem(currentRow + increase, currentCol + increase, blocks)) {
                maxItemInLine++;
            }
        }

        for(let decrease = 1; decrease <= 4; ++decrease) {
            if(this.checkItem(currentRow + decrease, currentCol + decrease, blocks)) {
                maxItemInLine++;
            }
        }

        console.log(maxItemInLine);
        if(maxItemInLine >= 5) {
            callback.apply();
        }
    }

    checkItem(row, col, blocks) {
        return row >= 0 && row <= this.state.maxRow && col >= 0 && col <= this.state.maxCol && blocks[row][col].color === this.state.currentPlayer;
    }

}
export default GobangBoard;
