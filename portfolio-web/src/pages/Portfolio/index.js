import React from 'react'
import { PortfolioWrapper } from './style'
import FirstBlock from '../../containers/FirstBlock'
import SecondBlock from '../../containers/SecondBlock'
import ThirdBlock from '../../containers/ThirdBlock'
import FourthBlock from '../../containers/FourthBlock'
import FifthBlock from '../../containers/FifthBlock'
import Footer from '../../containers/Footer'


const Portfolio = (props) => {

    return(
        <PortfolioWrapper>
            <FirstBlock/>
            <SecondBlock/>
            <ThirdBlock />
            <FourthBlock />
            <FifthBlock />
            <Footer />
        </PortfolioWrapper>
    )
}

export default Portfolio