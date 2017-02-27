/**
 * Created by chknight on 27/11/16.
 * The index file of the webpage
 */
import React from 'react';
import MainBlock from './MainBlock'
import SectionBlock from './SectionBlock'
import GobangBoard from '../board/GobangBoard'

function Index(props) {
    return(
        <div>
            <MainBlock color="blue" backgroundUrl="img/background2.jpg" title="世界上最好的五子棋"
            content="这是一个无法击败的五子棋应用。
                    尝试来击败它吧！"/>
            <SectionBlock colNum='2' title="多种多样的游戏方式" content="单人游戏，双人游戏，网络对战，挑战强大的AI"/>
            <GobangBoard />
        </div>
    )
}

export default Index;