import React from 'react'
import { PortfolioWrapper } from './style'
import FirstBlock from '../../components/FirstBlock'
import SecondBlock from '../../components/SecondBlock'


const Portfolio = (props) => {

    return(
        <PortfolioWrapper>
            <FirstBlock/>
            <SecondBlock/>
        </PortfolioWrapper>
    )
}

export default Portfolio