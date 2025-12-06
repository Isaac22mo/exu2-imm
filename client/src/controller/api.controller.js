const ApiController = {};
const ENV = import.meta.env;
const API_URL = `http://${ENV.VITE_API_HOST}:${ENV.VITE_API_PORT}${ENV.VITE_API_BASE}`;

ApiController.calculatorSuma = async suma => {
    try {
        const response = await fetch(API_URL, {
            method: 'POST',
            headers: { 
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(suma),
        });

        return await response.json();
    } catch (error) {
        console.error('Error al calcular:', error);
        throw error;
    }
};

export default ApiController;