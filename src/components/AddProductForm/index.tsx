import React, {FC, useCallback} from "react";
import {Field, Form, Formik, FormikHelpers} from "formik";
import {useNavigate} from "react-router-dom";
import {number, string} from "yup";
import {useAppDispatch} from "../../hooks/useHooksRedux";
import {addNewProduct} from "../../store/productsSlice";
import {uid} from "uid";

type FormValues = { name: string, price: number }
const AddProductForm: FC = () => {
    const navigate = useNavigate()
    const dispatch = useAppDispatch()

    const handleNavigate = useCallback(() => {
        navigate('/')
    }, [])
    const handleSubmit = (values: FormValues): void => {
        dispatch(addNewProduct({
            id: Math.floor(Math.random() * (1000 - 31) + 31),
            title: values.name,
            description: 'string',
            price: values.price,
            images: [],
            rating: 3,
            stock: 4,
            brand: 'string',
            category: 'string',
        }))
        handleNavigate()
    }

    return (
        <div className="wrapperCreateForm">
            <button type="button" onClick={handleNavigate}>Home page</button>
            <Formik
                initialValues={{name: '', price: 0}}
                onSubmit={handleSubmit}>
                <Form>
                    <Field name='name' placeholder="Name"/>
                    <Field name="price" type="number" placeholder="Price"/>
                    <button type="submit">Create</button>

                </Form>

            </Formik>

        </div>
    )
}
export default AddProductForm;