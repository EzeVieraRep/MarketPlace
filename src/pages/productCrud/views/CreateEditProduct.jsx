import { Button, Form } from "react-bootstrap";
import '../Styles.css'

const CreateEditProduct = ({ images, selectImage, selectedImage, imageChange }) => {
    return (
        <div className="product_container">
            <div className="product_card">
                <h1>Agregar Producto</h1>
                <form className="product_form">
                    {/* NOMBRE */}
                    <div className="product_item">
                        <Form.Group className="mb-3">
                            <Form.Label>Nombre</Form.Label>
                            <Form.Control type="text" placeholder="ingrese el nombre del producto" name="name" />
                        </Form.Group>
                    </div>
                    {/* PRECIO */}
                    <div className="product_item">
                        <Form.Group className="mb-3">
                            <Form.Label>precio</Form.Label>
                            <Form.Control type="number" placeholder="ingrese el precio  del producto" name="price" />
                        </Form.Group>
                    </div>
                    {/* DESCRIPCION */}
                    <div className="product_item">
                        <Form.Group className="mb-3">
                            <Form.Label>Descripcion</Form.Label>
                            <Form.Control type="text" placeholder="ingrese la descripcion del producto" name="descripcion" />
                        </Form.Group>
                    </div>
                    {/* STOCK */}
                    <div className="product_item">
                        <Form.Group className="mb-3">
                            <Form.Label>Stock</Form.Label>
                            <Form.Control type="number" placeholder="ingrese el stck del producto" name="stock" />
                        </Form.Group>
                    </div>
                    {/* CATEGORIA */}
                    <div className="product_item">
                        <Form.Group className="mb-3">
                            <Form.Select aria-label="Default select example">
                                <option>Categoria</option>
                                <option value="1">One</option>
                                <option value="2">Two</option>
                                <option value="3">Three</option>
                            </Form.Select>
                        </Form.Group>
                    </div>
                    {/* SUBIR IMAGBEN */}
                    <div className="product_item">
                        <Form.Group controlId="formFile" className="mb-3" onChange={imageChange}>
                            <Form.Control type="file" />
                        </Form.Group>
                        
                    </div>
                    {/* IMAGEN PREVIA */}
                    <div className="product_item_col2">
                        {
                            images.length ?
                                <div className="product_upload_img">

                                    {images.map((image, i) =>
                                        <div key={i} className={(selectedImage === image) ? "product_select_image" : null}>
                                            <div variant="light" onClick={() => selectImage(image)}>
                                                <img src={URL.createObjectURL(image)} alt="uploaded_image" className="addEdditProduct_img" />
                                            </div>
                                        </div>
                                    )
                                    }
                                </div>
                                : <h3>No hay Imagenes seleccionadas</h3>
                        }

                    </div>
                    {/* ELIMINAR IMAGEN */}
                    <div className="product_item">
                        <Button variant="primary">Eliminar</Button>
                    </div>
                </form>
            </div >
        </div >
    );
}

export default CreateEditProduct;