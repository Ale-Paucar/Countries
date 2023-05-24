const validation = (input) => {
    let errors = {};
    const regEx = /^[a-zA-Z\s]*$/;
    // name
    if(!input.name)  errors.name = 'El nombre de la actividad es requerido';

    if(input.name.trim() === '')  errors.name = 'El nombre no puede estar en blanco';
    
    // ! hacer la validacion si existe una actividad con ese nombre

    if(!regEx.test(input.name)) errors.name = 'No se permiten números o caracteres especiales'
    if(input.name.length > 20)  errors.name = 'La actividad debe tener menos de 20 caracteres'.charAt
    //season
    
    if(!input.season){
        errors.season = 'Escoge alguna estación';
    }
    
    // dificulty
    if(input.dificulty === 0) errors.dificulty = 'La dificultad no puede ser cero';
    // duration
    if(input.duration === 0) errors.duration = 'La duration no puede ser cero';
    //selecteCountries
    if(!input.selectedCountries.length) errors.selectedCountries = 'Debes elegir un pais';

    if(input.selectedCountries.length > 10) errors.selectedCountries = 'Debes elegir 10 paises como máximo';

    return errors;
}

export default validation;