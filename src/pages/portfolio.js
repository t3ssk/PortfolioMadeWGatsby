import React from 'react'
import { Layout } from '../Components/Layout';
import { PortfolioItem } from '../Components/PortfolioItems/PortfolioItem';
import {Heading} from '../Components/UI/Heading/Heading'
import * as styles from './styles/portfolio.module.scss';

const porfolio = () => {
   
    return (
        <Layout>
        <main className={styles.Portfolio}>
            <div className={styles.heading}>
            <Heading>Portfolio</Heading></div>
            <PortfolioItem/>
        </main>
        </Layout>
    )
}


export default porfolio
