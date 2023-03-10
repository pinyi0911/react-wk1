import ImagesItem from "../ImagesItem";
import styles from "./ImagesList.module.css";
import { Row, Col } from "antd";
export default function ImagesList({ imgs }) {
    return (

        <div>
            <article className={styles.image__layout}>
                <div className="container">
                    <Col align="middle">
                        <div className={styles.text}>
                            <h1 className={styles.IMAGES}>IMAGES</h1>
                            <hr className="divider--dark" />
                        </div>
                        <Row gutter={[24, 24]} className={styles.imagebox}>
                            {imgs.map(img => (
                                <Col key={img.id}
                                    sm={{ span: 12 }}
                                    lg={{ span: 6 }}
                                >
                                    <ImagesItem
                                        key={img.id}
                                        img={img}
                                    />
                                </Col>
                            ))}


                        </Row>

                    </Col>




                </div>
            </article>

        </div>

    );
}

