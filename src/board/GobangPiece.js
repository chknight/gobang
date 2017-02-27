/**
 * The piece in gobang board
 * including black and white
 * Created by chknight on 5/2/17.
 */
import React from 'react';
const style = {
    blackPiece: {
        display: 'block',
        height:'30px',
        width:'30px',
        borderRadius:'15px',
        backgroundColor:'black',
        borderColor:'black',
        borderStyle:'Solid',
        boxSizing: 'border-box'
    },
    whitePiece: {
        display: 'block',
        height:'30px',
        width:'30px',
        borderRadius:'15px',
        borderColor:'black',
        backgroundColor:'white',
        borderStyle:'Solid',
        boxSizing: 'border-box'
    }
};
function GobangPiece(props) {
    if(props.maxRow - 1 > props.row && props.maxCol - 1 > props.col) {
        if(props.color == 'black') {
            return(
                    <div className="piece" style={style.blackPiece}>

                    </div>
            );
        } else if(props.color == 'white') {
            return(
                    <div className="piece" style={style.whitePiece}>

                    </div>
                );
        } else {
            return (
                <div>

                </div>
            )
        }

    } else {
        return (<div></div>)
    }

}

export default GobangPiece;