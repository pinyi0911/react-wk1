import styles from './footer.module.css';

import { Row , Col } from "antd";

export default function Footer() {
    return (
<footer className={styles.footer}>
    <div className={styles.footer__above}>
      <div className="container">
        <Row className={styles.footer__abovebox} justify="space-between" align="middle" >
          <Col span={24}lg={{ span: 16 }}>
          <h5 className={styles.footer__description}>
            臺北市和平東路二段134號，國立臺北教育大學 數位科技設計學系
          </h5>
          </Col>
          <Col span={24}lg={{ span:8 }}>
          <ul className={styles.footer__list}>
            <li className={styles.footer__item}><a href="" className={styles.footer__link}><i className="fab fa-facebook-f"></i></a></li>
            <li className={styles.footer__item}><a href="" className={styles.footer__link}><i className="fab fa-google-plus-g"></i></a></li>
            <li className={styles.footer__item}><a href="" className={styles.footer__link}><i className="fab fa-linkedin-in"></i></a></li>
          </ul>
          </Col>
          </Row>
      </div>
    </div>

    <div className={styles.footer__below}>
      <div className={styles.container}>
        <h6 className={styles.copyright}>
          &copy; Copyright All rights reserved.
        </h6>
      </div>
    </div>
  </footer>          
    );
}