import React from 'react';
import { useForm } from 'react-hook-form';

const Pago = ({ onDataChange, onNext }) => {
    const { register, handleSubmit, watch, formState: { errors } } = useForm();

    const metodoSeleccionado = watch('metodo', 'tarjeta');

    const onSubmit = (pago) => {
        console.log("Método de pago enviado:", pago);
        onDataChange(pago);
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
                <h3>Método de Pago</h3>
                <form style={formStyle} onSubmit={handleSubmit(onSubmit)}>

                    <div>
                        <label>Método de Pago</label>
                        <select {...register('metodo', { required: "Selecciona un método de pago" })}>
                            <option value="tarjeta">Tarjeta de Crédito</option>
                            <option value="paypal">PayPal</option>
                            <option value="transferencia">Transferencia Bancaria</option>
                        </select>
                        {errors.metodo && <p>{errors.metodo.message}</p>}
                    </div>

                    {metodoSeleccionado === 'tarjeta' && (
                        <>
                            <div>
                                <label>Número de Tarjeta</label>
                                <input
                                    type="text"
                                    {...register('numeroTarjeta', {
                                        required: "El número de tarjeta es obligatorio",
                                        pattern: { value: /^[0-9]/, message: "Número de tarjeta inválido" },
                                    })}
                                />
                                {errors.numeroTarjeta && <p>{errors.numeroTarjeta.message}</p>}
                            </div>

                            <div>
                                <label>Fecha de Expiración</label>
                                <input
                                    type="text"
                                    placeholder="MM/AA"
                                    {...register('fechaExpiracion', {
                                        required: "La fecha de expiración es obligatoria",
                                        pattern: { value: /^(0[1-9]|1[0-2])\/\d{2}$/, message: "Formato inválido (MM/AA)" },
                                    })}
                                />
                                {errors.fechaExpiracion && <p>{errors.fechaExpiracion.message}</p>}
                            </div>

                            <div>
                                <label>CVV</label>
                                <input
                                    type="text"
                                    {...register('cvv', {
                                        required: "El CVV es obligatorio",
                                        pattern: { value: /^[0-9]{3}$/, message: "CVV inválido" },
                                    })}
                                />
                                {errors.cvv && <p>{errors.cvv.message}</p>}
                            </div>
                        </>
                    )}

                    <button type="submit">Siguiente</button>
                </form>
            </div>
        </div>
    );
};

export default Pago;
