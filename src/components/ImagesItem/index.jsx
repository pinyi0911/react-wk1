export default function ImagesItem({ img }) {
    return (

        <section
            className="image"
        >
            <div>
                <a href="" className="image__link">
                    <img src={img.image} alt="" className="image__style" />
                </a>
                <p className="image_title">{img.text}</p>
            </div>
        </section>
    
    );
}