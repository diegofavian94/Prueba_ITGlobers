import React from 'react';
import useForm from './CustomHooks/useForm';
import validateForm from './validations/validateForm';
import './Form.css';

const SignUpForm = ({submitForm, valorNav}) => {
    const {values, handleChange, handleSubmit, errors}=useForm(submitForm, validateForm)
    return (
        <div className="col-lg-6 offset-lg-3">
            <form className="form" onSubmit={handleSubmit}>
                <h1 className="h1">Hola, bienvenido/a, sabemos que quieres viajar en una {valorNav}, por favor diligencia el siguiente formulario:</h1>
                <div className="form-inputs form-control">
                    <label className="form-label" htmlFor="nombreCompleto">
                        Nombre
                    </label>
                    <input 
                        type="text" 
                        className="form-input form-control" 
                        name="nombreCompleto"
                        id="nombreCompleto"
                        placeholder="Ingrese su nombre completo"
                        value={values.nombreCompleto}
                        onChange={handleChange}
                    >
                    </input>
                    {errors.nombreCompleto && <p>{errors.nombreCompleto}</p>}
                </div>
                <div className="form-inputs form-control">
                    <label className="form-label" htmlFor="email">
                        Correo Electrónico
                    </label>
                    <input 
                        type="email" 
                        className="form-input form-control" 
                        name="email"
                        id="email"
                        placeholder="Ingrese su correo electrónico"
                        value={values.email}
                        onChange={handleChange}
                    >
                    </input>
                    {errors.email && <p>{errors.email}</p>}
                </div>
                <div className="form-inputs form-control">
                    <label className="form-label" htmlFor="celular">
                        Número de Teléfono
                    </label>
                    <input 
                        type="tel" 
                        className="form-input form-control" 
                        name="celular"
                        id="celular"
                        placeholder="Ingrese su número de celular"
                        value={values.celular}
                        onChange={handleChange}
                    >
                    </input>
                    {errors.celular && <p>{errors.celular}</p>}
                </div>
                <div className="form-inputs form-control">
                    <label className="form-label" htmlFor="edad">
                        Edad
                    </label>
                    <input 
                        type="number" 
                        className="form-input form-control" 
                        name="edad"
                        id="edad"
                        placeholder="Ingrese su edad"
                        value={values.edad}
                        onChange={handleChange}
                    >
                    </input>
                    {errors.edad && <p>{errors.edad}</p>}
                </div>       
                <div className="d-grid gap-2">
                    <button className="form-input-btn btn btn-outline-primary" style={{}} type="submit">Registrar</button>                                         
                </div>
            </form>
        </div>
    )
}

export default SignUpForm
