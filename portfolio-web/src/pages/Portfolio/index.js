import React from 'react'
import { PortfolioWrapper } from './style'
import FirstBlock from '../../containers/FirstBlock'
import SecondBlock from '../../containers/SecondBlock'
import ThirdBlock from '../../containers/ThirdBlock'


const Portfolio = (props) => {

    return(
        <PortfolioWrapper>
            <FirstBlock/>
            <SecondBlock/>
            <ThirdBlock />
        </PortfolioWrapper>
    )
}

export default Portfolio