import React, {FC, MouseEventHandler, useCallback} from "react";
import {Field, Form, Formik, FormikErrors, FormikTouched} from "formik";
import {useNavigate} from "react-router-dom";
import {useAppDispatch} from "../../hooks/useHooksRedux";
import {addNewProduct} from "../../store/productsSlice";
import * as yup from "yup";

type FormValues = {
    name: string;
    description: string;
    price: any;
    rating: any;
    stock: any;
    brand: string;
    category: string;
}
const AddProductForm: FC = () => {
    const validationSchema = yup.object().shape({
        name: yup.string().typeError('please enter string').required('required field'),
        description: yup.string().typeError('please enter string').required('required field'),
        price: yup.number().typeError('please enter number').required('required field'),
        rating: yup.number().typeError('please enter number').required('required field'),
        stock: yup.number().typeError('please enter number').required('required field'),
        brand: yup.string().typeError('please enter string').required('required field'),
        category: yup.string().typeError('please enter string').required('required field'),

    });
    const navigate = useNavigate()
    const dispatch = useAppDispatch()

    const handleNavigate = useCallback(() => {
        navigate('/')
    }, [])
    const submitForm = (values: FormValues): void => {
        dispatch(addNewProduct({
            id: Math.floor(Math.random() * (1000 - 31) + 31),
            title: values.name,
            description: values.description,
            price: values.price,
            images: ['https://www.theseasonedhome.com/content/images/thumbs/default-image_450.png'],
            rating: values.rating,
            stock: values.stock,
            brand: values.brand,
            category: values.category,
        }))
        handleNavigate()
    }


    return (
        <div className="wrapperCreateForm">
            <div className="wrapperBtnBack">
                <button className="buttonBack" type="button" onClick={handleNavigate}>← Home page</button>

            </div>
            <div className="contentForm">
                <h2>Create new product</h2>
                <Formik
                    initialValues={{
                        name: '',
                        description: '',
                        price: '',
                        rating: '',
                        stock: '',
                        brand: '',
                        category: ''
                    }}
                    validateOnBlur
                    onSubmit={submitForm}
                    validationSchema={validationSchema}
                >

                    {(
                        {
                            values,
                            errors,
                            touched,
                            handleChange,
                            handleBlur,
                            isValid,
                            dirty,
                            handleSubmit,
                        }) => (
                        <>
                            <Form className="form">
                                <label>
                                    Name:
                                    <Field name='name' placeholder="Name" onChange={handleChange} onBlur={handleBlur}
                                           value={values.name}/>
                                    {touched.name && errors.name && <p className="error">{errors.name}</p>}
                                </label>

                                <label>
                                    Description:
                                    <Field name="description" type="text" placeholder="Description"
                                           onChange={handleChange}
                                           onBlur={handleBlur} value={values.description}/>
                                    {touched.description && errors.description &&
                                        <p className="error">{errors.description}</p>}
                                </label>
                                <label>
                                    Price:
                                    <Field name="price" type="text" placeholder="Price" onChange={handleChange}
                                           onBlur={handleBlur} value={values.price}/>
                                    {touched.price && errors.price && <p className="error">{errors.price}</p>}
                                </label>
                                <label>
                                    Rating
                                    <Field name="rating" type="text" placeholder="Rating" onChange={handleChange}
                                           onBlur={handleBlur} value={values.rating}/>
                                    {touched.rating && errors.rating && <p className="error">{errors.rating}</p>}
                                </label>
                                <label>
                                    Stock:
                                    <Field name="stock" type="text" placeholder="Stock" onChange={handleChange}
                                           onBlur={handleBlur} value={values.stock}/>
                                    {touched.stock && errors.stock && <p className="error">{errors.stock}</p>}
                                </label>
                                <label>
                                    Brand:
                                    <Field name="brand" type="text" placeholder="Brand" onChange={handleChange}
                                           onBlur={handleBlur} value={values.brand}/>
                                    {touched.brand && errors.brand && <p className="error">{errors.brand}</p>}
                                </label>

                                <label>
                                    Category:
                                    <Field name="category" type="text" placeholder="Category" onChange={handleChange}
                                           onBlur={handleBlur} value={values.category}/>
                                    {touched.category && errors.category && <p className="error">{errors.category}</p>}
                                </label>


                            </Form>
                            <button onClick={() => handleSubmit()} disabled={!isValid && !dirty}
                                    className="btnCreateProduct"
                                    type="submit">Create
                            </button>
                        </>
                    )}
                </Formik>
            </div>

        </div>
    )
}
export default AddProductForm;