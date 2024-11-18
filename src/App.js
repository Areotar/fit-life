import React, { useState } from 'react'
import DatosPersonales from './components/DatosPersonales'
import InfoContacto from './components/InfoContacto'
import Preferencias from './components/Preferencias'
import Pago from './components/Pago'
import Fin from './components/Fin'

const App = () => {
    const [formData, setFormData] = useState({});
    const [step, setStep] = useState(1);

    const handleDataChange = (newData) => {
        setFormData((prev) => ({ ...prev, ...newData }));
    }

    const nextStep = () => {
        setStep((prev) => prev + 1);
    }

    const prevStep = () => {
        setStep((prev) => Math.max(prev - 1))
    }

    const handleSubmit = () => {
        console.log(formData)
    }

    return (
        <div>
            {step === 1 && <DatosPersonales onDataChange={handleDataChange} onNext={nextStep} />}
            {step === 2 && <InfoContacto onDataChange={handleDataChange} onNext={nextStep} />}
            {step === 3 && <Preferencias onDataChange={handleDataChange} onNext={nextStep} />}
            {step === 4 && <Pago onDataChange={handleDataChange} onNext={nextStep} />}
            {step === 5 && <Fin onNext={handleSubmit}/>}

            {step > 1 && step <= 5 && (
                <button onClick={prevStep}>Anterior</button>
            )}
            
        </div>
    );
};

export default App;
