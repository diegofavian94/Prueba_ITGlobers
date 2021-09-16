import { useState } from "react";

const useForm = (submitForm,validateForm) => {

    const [values, setValues]=useState({
        nombreCompleto: '',
        email: '',
        celular : '',
        edad: '',
    })

    const [errors, setErrors] = useState({})
    const [submitting, setSubmitting]=useState({})

    const handleChange = e =>{
        const {name, value}=e.target
        setValues({
            ...values,
            [name]:value
        })
    }

    const handleSubmit = async (e) =>{
        e.preventDefault();
        let validation=validateForm(values)
        setErrors(validation)
        setSubmitting(true)
        if(Object.keys(validation).length===0 && submitting){
            submitForm();
            console.table(values)
        }
    }

    return {values, handleChange, handleSubmit, errors}
}

export default useForm