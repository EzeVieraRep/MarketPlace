import { useState } from "react";
import CreateEditProduct from "../views/CreateEditProduct";

const UseCreateEditProduct = () => {

    //hook de imagen seleccionada 
    const [selectedImage, setSelectedImage] = useState("")
    const [images, setImages] = useState([])

    //selecciona una imagen del producto haciendo click
    const selectImage = (image) => setSelectedImage(image)

    const imageChange = (e) => setImages(images.concat(e.target.files[0]));

    const isEmpty = (aField) => aField === "";

    //desabilita el boton de eliminar Imagen 
    const imageButtonDisabled = () => isEmpty(selectedImage)

    const deleteImage = () => setImages(images.filter(image => image !== selectedImage))


    return <CreateEditProduct deleteImage={deleteImage} images={images} selectImage={selectImage} selectedImage={selectedImage} imageChange={imageChange} imageButtonDisabled={imageButtonDisabled} />
}

export default UseCreateEditProduct;