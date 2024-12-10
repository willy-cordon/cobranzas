import axios from "axios";

// Configuración base de Axios
const apiClient = axios.create({
  baseURL: "http://127.0.0.1:8000/api", // Cambia la URL por la de tu backend
  headers: {
    "Content-Type": "application/json",
  },
});

// Función para iniciar sesión
export const login = async (email, password) => {
  try {
    const response = await apiClient.post("/login", {
      email,
      password,
    });
    return response.data; // Retorna los datos de la respuesta
  } catch (error) {
    throw error.response ? error.response.data : error.message; // Manejo de errores
  }
};
