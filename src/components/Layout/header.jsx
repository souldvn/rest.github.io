import React from "react"
import SushiImg from '../../assets/sushiheader.jpg'
import styles from './header.module.css'
import HeaderCartButton from "./HeaderCartButton"

const Header = (props) => {
    return (
        <React.Fragment>
            <header className={styles.header}>
                <h1 className={styles.title}>Японская кухня</h1>
                <HeaderCartButton  onClick={props.onShowCart}/>
            </header>
            <div className={styles['main-image']}>
                <img src={SushiImg} alt="Блюдо японской кухни"/>
            </div>
        </React.Fragment>
    )

}

export default Header