import { useState } from "react";
import CreateEditProduct from "../views/CreateEditProduct";

const UseCreateEditProduct = () => {

    //hook de imagen seleccionada 
    const [selectedImage, setSelectedImage] = useState("")
    const [images, setImages] = useState([])

    //selecciona una imagen del producto haciendo click
    const selectImage = (image) => setSelectedImage(image)

    const imageChange = (e) => setImages(images.concat(e.target.files[0]));

    return <CreateEditProduct images={images} selectImage={selectImage} selectedImage={selectedImage} imageChange={imageChange}/>
}

export default UseCreateEditProduct;