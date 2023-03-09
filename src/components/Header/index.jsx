import styles from "./header.module.css";
import '../../App.css';

import { Row , Col } from "antd";
export default function Header({title, slogan}) {
    return (
        <header className={styles.header}>
        <div className="container">
          <Col className={styles.headerbox} align="middle" justify="center"> 
          <img className={styles.header__avatar}src="./images/avatar.png" alt="avatar"/>
          <h1 className={styles.header_title}>{title}</h1>
          <hr className="divider--light"/>
          <p className={styles.header__slogan}>{slogan}</p>
          </Col>
          </div>
        
      </header>
    );
}
