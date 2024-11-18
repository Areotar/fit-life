import React from 'react';
import { useForm } from 'react-hook-form';

const DatosPersonales = ({ onDataChange, onNext }) => {
    const { register, handleSubmit, formState: { errors } } = useForm();

    const onSubmit = (per) => {
        console.log("Datos personales enviados:", per);
        onDataChange(per);
        onNext();
    };

    // Estilos en línea para centrar el formulario
    const containerStyle = {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
    };

    const formStyle = {
        display: 'flex',
        flexDirection: 'column',
        gap: '15px',
        padding: '20px',
        border: '1px solid #ccc',
        borderRadius: '8px',
        width: '300px',
        backgroundColor: '#f9f9f9',
    };

    return (
        <div style={containerStyle}>
            <div>
                <h3>Datos Personales</h3>
                <form style={formStyle} onSubmit={handleSubmit(onSubmit)}>
                    <div>
                        <label>Nombre</label>
                        <input
                            {...register('nombre', {
                                required: "El nombre es un campo obligatorio",
                                maxLength: 25
                            })}
                        />
                        {errors.nombre && <p>{errors.nombre.message}</p>}
                    </div>
                    <div>
                        <label>Sexo</label>
                        <select
                            {...register('sexo', { required: "El sexo es un campo obligatorio" })}
                        >
                            <option value="" disabled selected>Selecciona</option>
                            <option value="masculino">Masculino</option>
                            <option value="femenino">Femenino</option>
                        </select>
                        {errors.sexo && <p>{errors.sexo.message}</p>}
                    </div>
                    <div>
                        <label>Peso (kg)</label>
                        <input
                            type="number"
                            step="0.1"
                            {...register('peso', {
                                required: "El peso es obligatorio",
                                min: { value: 30, message: "El peso debe ser mayor a 30kg" },
                                max: { value: 300, message: "El peso debe ser menor a 300kg" }
                            })}
                        />
                        {errors.peso && <p>{errors.peso.message}</p>}
                    </div>
                    <div>
                        <label>Altura (cm)</label>
                        <input
                            type="number"
                            {...register('altura', {
                                required: "La altura es obligatoria",
                                min: { value: 100, message: "La altura debe ser mayor a 100cm" },
                                max: { value: 250, message: "La altura debe ser menor a 250cm" }
                            })}
                        />
                        {errors.altura && <p>{errors.altura.message}</p>}
                    </div>

                    <button type="submit">Siguiente</button>
                </form>
            </div>
        </div>
    );
};

export default DatosPersonales;
