/**
 * The Main Block in the home page
 * The Main Block is the first block of the home page
 * Created by chknight on 27/11/16.
 */
import React from 'react';

function MainBlock(props) {

    const styleSheet = {
        width : '100%',
        padding : '0',
        margin : '0',
        height : '600px',
        backgroundImage: 'url(' + props.backgroundUrl +')',
        backgroundSize: 'cover',
        overflow: 'hidden',
        display : 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        border: 'grey'
    };

    const contentStyle = {
        textAlign:'center',
        color : 'white',
    };

    return(
        <section style={styleSheet}>
            <div style={contentStyle}>
                <h1>
                    {props.title}
                </h1>
                <p>
                    {props.content}
                </p>
            </div>
        </section>
    )
}

export default MainBlock;

