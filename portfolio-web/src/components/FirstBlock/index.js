import React from 'react'
import { FirstBlockWrapper, Title, Subtitle, DrawWrapper, Draw } from './style'
import iconDraw from "../../img/desenhojoao.svg"
import { opening } from '../../Layout/Texts'

const FirstBlock = (props) => {

    return(
        <FirstBlockWrapper>
            <Title> {opening.title} </Title>
            <Subtitle> {opening.subtitle} </Subtitle>
            <DrawWrapper>
                <Draw src={iconDraw}/>
            </DrawWrapper>
        </FirstBlockWrapper>
    )
}

export default FirstBlock