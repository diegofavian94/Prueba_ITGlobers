export default function validateForm(values){
    let errors={}

    if (!values.nombreCompleto.trim()){
        errors.nombreCompleto="El nombre completo es requerido"
    }

    if(!values.email){
        errors.email="El correo electrónico es requerido"
    }else if (!/^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/i.test(values.email)){
        errors.email="Dirección de correo inválida"
    }

    if(!values.celular){
        errors.celular="El número de teléfono es requerido"
    }else if(!/[0-9]{10}/.test(values.celular)){
        errors.celular="El número de teléfono es incorrecto"
    }

    if(!values.edad){
        errors.edad="La edad es requerida"
    }else if(values.edad<18 || values.edad>100){
        errors.edad="La edad debe estar entre 18 y 100"
    }

    return errors

}