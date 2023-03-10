import styles from "./ImagesItem.module.css";
export default function ImagesItem({ img }) {
    return (

        <section
            className={styles.image}
        >
            <div>
                <a href="" className={styles.image__link}>
                    <img src={img.image} alt="" className={styles.image__style}/>
                </a>
                <p className={styles.image_title}>{img.text}</p>
            </div>
        </section>
    
    );
}