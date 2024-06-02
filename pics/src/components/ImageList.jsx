import './ImageList.css'
import ImageShow from "./ImageShow";

export default function ImageList({ images }) {
    const renderedImages = images.map((image, index) => (
        <ImageShow image={image} key={image.id} />
    ))

    return (
        <div className="image-list">
            {renderedImages}
        </div>
    )
}