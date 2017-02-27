/**
 * The section block of the index page
 * The section block is consisted of left element and right element
 * You could diy your own element
 * An simple template also be given
 * The left one is image and right one is text
 * Created by chknight on 29/11/16.
 */
import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Paper from 'material-ui/Paper';

function TextBlock(props) {

    return(
        <div>
            <h1>
                {props.title}
            </h1>
            <p>
                {props.text}
            </p>
        </div>

    )

}


class SectionBlock extends Component {

    constructor() {
        super();

        this.props = {
            colNum: 2,
        };



    }

    render() {

        const width = (100 / this.props.colNum) + "%";

        console.log(width);

        let styleSheet = {

            mainStyle: {
                width: '100%',
                padding: '0',
                margin: '0',
                height: '600px',
                backgroundImage: 'url(' + this.props.backgroundUrl + ')',
                backgroundSize: 'cover',
                overflow: 'hidden',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                border: '1px solid rgba(34,36,38,.15)'
            },

            paperBlockStyle : {
                textAlign: 'center',
                height: '400px',
                width: '400px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
            },

            leftElementStyle: {
                textAlign: 'center',
                color: 'black',
                width: width,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
            },

            rightElementStyle : {
                textAlign: 'center',
                color: 'black',
                width: width,
                justifyContent: 'center',
                alignItems : 'center'
            },

            column: {
                boxShadow: '-1px 0 0 0 rgba(34,36,38,.15)',
            },

            imageStyle: {
                width: '400px',
                height: '400px'
            }
        };

        return(
            <section style={styleSheet.mainStyle}>
                <div style={styleSheet.leftElementStyle}>
                    <MuiThemeProvider>
                        <Paper style={styleSheet.paperBlockStyle} children={<TextBlock text={this.props.content} title={this.props.title}/>} zDepth={2}/>
                    </MuiThemeProvider>
                </div>
                <div style={styleSheet.rightElementStyle}>
                    <img src="img/image1.jpeg" alt="此图片无法加载" style={styleSheet.imageStyle}/>
                    </div>
            </section>
        )
    }

}

export default SectionBlock;
