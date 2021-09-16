import React, {useState} from 'react'
import SignUpForm from './SignUpForm'
import SuccessForm from './SuccessForm'

const Form = ({valorNav}) => {
    const [formSubmitted, setFormSubmitted] = useState(false)
    function submitForm(){
        setFormSubmitted(true)
        setTimeout(function(){
            setFormSubmitted(false)
        }, 5000);
    }
    return (
        <div>
            {valorNav==="" &&
                <div className="col-lg-6 offset-lg-3">
                    <h1>Hola, bienvenido/a, sabemos que quieres viajar, elige una de las opciones para continuar</h1>
                </div>
            }
            {valorNav!=="" &&
                <div>
                    {!formSubmitted ? (<SignUpForm submitForm={submitForm} valorNav={valorNav}/>) :(<SuccessForm/>)}
                </div>
            }
        </div>
    )
}

export default Form
