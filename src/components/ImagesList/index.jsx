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
                        <Row gutter={[24, 24]}>
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

            <article className={styles.descriptionlayout}>
                <Row className="container">
                    <Col span={24}>
                        <h1 className={styles.description}>DESCRIPTIONS</h1>
                        <hr className="divider--light" />
                        <p className={styles.description__content}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium laborum
                            corrupti ut iure aliquam. Quod, perferendis. Libero tempore iste, animi sint numquam illum quasi laboriosam
                            unde pariatur quidem! Suscipit consequatur nihil dolor impedit temporibus ad cum, voluptatum odit ratione
                            ullam
                            eligendi amet beatae aliquid eaque nesciunt optio nobis ducimus itaque. Voluptatibus aspernatur assumenda
                            quod
                            quo error consequuntur, vero iusto reprehenderit repellat maiores, sapiente dolores voluptates minima. Alias
                            dolore assumenda fuga quae repellat voluptatum quo, saepe exercitationem perspiciatis reiciendis modi
                            tempora.
                            Recusandae explicabo iusto corporis nam numquam dignissimos, necessitatibus, iure non culpa repellat
                            repudiandae temporibus! Saepe excepturi tempore iusto eos sit!</p>
                    </Col>
                </Row>

            </article>

        </div>

    );
}

