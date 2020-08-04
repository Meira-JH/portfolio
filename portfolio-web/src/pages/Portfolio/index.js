import React from 'react'
import { PortfolioWrapper } from './style'
import FirstBlock from '../../containers/FirstBlock'
import SecondBlock from '../../containers/SecondBlock'
import ThirdBlock from '../../containers/ThirdBlock'
import FourthBlock from '../../containers/FourthBlock'


const Portfolio = (props) => {

    return(
        <PortfolioWrapper>
            <FirstBlock/>
            <SecondBlock/>
            <ThirdBlock />
            <FourthBlock />
        </PortfolioWrapper>
    )
}

export default Portfolio