import React from 'react';
import { useForm } from 'react-hook-form';

const Preferencias = ({ onDataChange, onNext }) => {
    const { register, handleSubmit, formState: { errors } } = useForm();

    const onSubmit = (pref) => {
        console.log("Preferencias enviadas:", pref);
        onDataChange(pref);
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
                <h3>Preferencias de Entrenamiento</h3>
                <form style={formStyle} onSubmit={handleSubmit(onSubmit)}>

                    <div>
                        <label>Tipo de Entrenamiento</label>
                        <select
                            {...register('tipoEntrenamiento', {
                                required: "El tipo de entrenamiento es obligatorio",
                            })}
                        >
                            <option value="" disabled selected>Selecciona un tipo</option>
                            <option value="fuerza">Fuerza</option>
                            <option value="cardio">Cardio</option>
                            <option value="flexibilidad">Flexibilidad</option>
                        </select>
                        {errors.tipoEntrenamiento && <p>{errors.tipoEntrenamiento.message}</p>}
                    </div>

                    <div>
                        <label>Objetivos</label>
                        <input
                            {...register('objetivos', {
                                required: "Los objetivos son obligatorios",
                                maxLength: { value: 100, message: "Los objetivos no pueden exceder 100 caracteres" },
                            })}
                        />
                        {errors.objetivos && <p>{errors.objetivos.message}</p>}
                    </div>

                    <div>
                        <label>Disponibilidad</label>
                        <select
                            {...register('disponibilidad', {
                                required: "La disponibilidad es obligatoria",
                            })}
                        >
                            <option value="" disabled selected>Selecciona tu disponibilidad</option>
                            <option value="mañana">Mañana</option>
                            <option value="tarde">Tarde</option>
                            <option value="noche">Noche</option>
                            <option value="finesDeSemana">Fines de Semana</option>
                        </select>
                        {errors.disponibilidad && <p>{errors.disponibilidad.message}</p>}
                    </div>

                    <button type="submit">Siguiente</button>
                </form>
            </div>
        </div>
    );
};

export default Preferencias;
