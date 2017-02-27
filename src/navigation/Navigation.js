/**
 * Created by chknight on 24/11/16.
 * The navigation bar of the website
 */
import React from 'react';
import AppBar from 'material-ui/AppBar';
import FlatButton from 'material-ui/FlatButton';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';


function handleTouchTap() {
    alert('onTouchTap triggered on the title component');
}

const styles = {
    title: {
        cursor: 'pointer',
        color: 'white',
    },
};

const subTitles = [
    {
        title : 'Home',
        href : '#'
    },
    {
        title : 'About',
        href : '#'
    },
    {
        title: 'Play',
        href : '#'
    },
    {
        title: 'Register',
        Href : '#'
    },
    {
        title:'Log in',
        href : '#'
    }
];



function SubItems (props) {
    return (
        <div style={styles.title}>
            {props.subTitles.map((element)=>(<FlatButton label={element.title} style={styles.title} />))}
        </div>
    )
}

/**
 * This example uses an [IconButton](/#/components/icon-button) on the left, has a clickable `title`
 * through the `onTouchTap` property, and a [FlatButton](/#/components/flat-button) on the right.
 */
const Navigation = () => (

    <MuiThemeProvider>
        <AppBar
            style={styles}
            title={<span style={styles.title}>五子棋大师</span>}
            onTitleTouchTap={handleTouchTap}
            iconElementLeft={undefined}
            iconElementRight={<SubItems subTitles={subTitles}/>}
        />
    </MuiThemeProvider>
);

export default Navigation;