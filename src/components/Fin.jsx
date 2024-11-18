import React from 'react';

const Fin = ({ onNext }) => {
    const handleFinal = () => {
        onNext();
    };

    // Estilos en línea para mejorar la apariencia
    const containerStyle = {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
        backgroundColor: '#f4f4f4',
    };

    const headingStyle = {
        fontSize: '24px',
        fontWeight: 'bold',
        color: '#333',
        marginBottom: '20px',
    };

    const buttonStyle = {
        padding: '12px 24px',
        fontSize: '16px',
        color: '#fff',
        backgroundColor: '#4CAF50',
        border: 'none',
        borderRadius: '5px',
        cursor: 'pointer',
        transition: 'background-color 0.3s ease',
    };

    const buttonHoverStyle = {
        ...buttonStyle,
        backgroundColor: '#45a049',
    };

    return (
        <div style={containerStyle}>
            <h3 style={headingStyle}>¡Fin del formulario! ¿Deseas enviarlo?</h3>
            <button
                style={buttonStyle}
                onClick={handleFinal}
                onMouseEnter={(e) => e.target.style.backgroundColor = buttonHoverStyle.backgroundColor}
                onMouseLeave={(e) => e.target.style.backgroundColor = buttonStyle.backgroundColor}
            >
                Enviar
            </button>
        </div>
    );
};

export default Fin;


