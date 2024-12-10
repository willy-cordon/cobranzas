<template>
    <div>
      <p>Cerrando sesión...</p>
    </div>
  </template>
  
  <script>
  export default {
    name: "Logout",
    created() {
      this.logout();
    },
    methods: {
      logout() {
        // Limpia los datos relacionados con la sesión
        this.$store.commit("clearAuth"); // Ejemplo de una mutación para limpiar la sesión
        localStorage.removeItem("authToken"); // Limpia el token si lo usas
        this.$router.push({ name: "Sign In" }); // Redirige a Sign In
      },
    },
  };
  </script>
  