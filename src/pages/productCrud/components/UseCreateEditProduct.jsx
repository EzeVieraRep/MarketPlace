import { useState } from "react";
import CreateEditProduct from "../views/CreateEditProduct";

const UseCreateEditProduct = () => {

    // hook de productNew se usa inicializa las propiedades
    const [productNew, setProductNew] = useState({
        name: "",
        price: 0,
        descripcion: "",
        stock: 0,
        category: null,
    });

    const { name, price, descripcion, category, checkedOffer, originalPrice, stock } = productNew;


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

    // guarda en el hooks de productNew los campos
    const productChange = (e) => {
        setProductNew({
            ...productNew,
            [e.target.name]: e.target.value,
        });
    };
    return <CreateEditProduct name={name} price={price} descripcion={descripcion} stock={stock} category={category} productChange={productChange} deleteImage={deleteImage} images={images} selectImage={selectImage} selectedImage={selectedImage} imageChange={imageChange} imageButtonDisabled={imageButtonDisabled} />
}

export default UseCreateEditProduct;