import axios from "axios";

// Configuración base de Axios
const apiClient = axios.create({
  baseURL: "http://127.0.0.1:8000/api", // Cambia la URL por la de tu backend
  headers: {
    "Content-Type": "application/json",
  },
});

// Obtener todas las facturas
export const getAllBillings = async () => {
  try {
    const response = await apiClient.get("/billings");
    return response.data; // Retorna los datos de la respuesta
  } catch (error) {
    throw error.response ? error.response.data : error.message; // Manejo de errores
  }
};

// Obtener una factura específica
export const getBillingById = async (id) => {
  try {
    const response = await apiClient.get(`/billings/${id}`);
    return response.data; // Retorna los datos de la respuesta
  } catch (error) {
    throw error.response ? error.response.data : error.message; // Manejo de errores
  }
};

// Crear una nueva factura
export const createBilling = async (billingData) => {
  try {
    const response = await apiClient.post("/billings", billingData);
    return response.data; // Retorna los datos de la respuesta
  } catch (error) {
    throw error.response ? error.response.data : error.message; // Manejo de errores
  }
};
