import React from 'react';
import { useForm } from 'react-hook-form';

const InfoContacto = ({ onDataChange, onNext }) => {
    const { register, handleSubmit, formState: { errors } } = useForm();

    const onSubmit = (cont) => {
        console.log("Información de contacto enviada:", cont);
        onDataChange(cont);
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
                <h3>Información de Contacto</h3>
                <form style={formStyle} onSubmit={handleSubmit(onSubmit)}>

                    <div>
                        <label>Correo Electrónico</label>
                        <input
                            type="email"
                            {...register('correo', {
                                required: "El correo es obligatorio",
                                pattern: {
                                    value: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
                                    message: "El correo no es válido",
                                },
                            })}
                        />
                        {errors.correo && <p>{errors.correo.message}</p>}
                    </div>

                    <div>
                        <label>Dirección</label>
                        <input
                            {...register('direccion', {
                                required: "La dirección es obligatoria",
                                maxLength: { value: 100, message: "La dirección es demasiado larga" },
                            })}
                        />
                        {errors.direccion && <p>{errors.direccion.message}</p>}
                    </div>

                    <div>
                        <label>Código Postal</label>
                        <input
                            type="text"
                            {...register('codigoPostal', {
                                required: "El código postal es obligatorio",
                                pattern: {
                                    value: /^[0-9]{5}$/,
                                    message: "El código postal debe tener 5 dígitos",
                                },
                            })}
                        />
                        {errors.codigoPostal && <p>{errors.codigoPostal.message}</p>}
                    </div>

                    <button type="submit">Siguiente</button>
                </form>
            </div>
        </div>
    );
};

export default InfoContacto;
