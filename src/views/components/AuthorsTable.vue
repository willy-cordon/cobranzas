<template>
  <div class="card mb-4">
    <div class="card-header pb-0">
      <h6>Authors table</h6>
    </div>
    <div class="card-body px-0 pt-0 pb-2">
      <div class="table-responsive p-0">
        <table class="table align-items-center mb-0">
          <thead>
            <tr>
              <th class="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7">Author</th>
              <th class="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7 ps-2">Function</th>
              <th class="text-center text-uppercase text-secondary text-xxs font-weight-bolder opacity-7">Status</th>
              <th class="text-center text-uppercase text-secondary text-xxs font-weight-bolder opacity-7">Employed</th>
              <th class="text-secondary opacity-7"></th>
            </tr>
          </thead>
          <tbody>
            <!-- Recorremos la lista de usuarios -->
            <tr v-for="user in users" :key="user.email">
              <td>
                <div class="d-flex px-2 py-1">
                  <div>
                    <soft-avatar
                      :img="img1" size="sm" border-radius="lg" class="me-3" alt="user1"
                    />
                  </div>
                  <div class="d-flex flex-column justify-content-center">
                    <h6 class="mb-0 text-sm">{{ user.name }}</h6>
                    <p class="text-xs text-secondary mb-0">{{ user.email }}</p>
                  </div>
                </div>
              </td>
              <td>
                <p class="text-xs font-weight-bold mb-0">{{ user.role }}</p>
              </td>
              <td class="align-middle text-center text-sm">
                <soft-badge color="success" variant="gradient" size="sm">Online</soft-badge>
              </td>
              <td class="align-middle text-center">
                <span class="text-secondary text-xs font-weight-bold">23/04/18</span>
              </td>
              <td class="align-middle">
                <a href="javascript:;" class="text-secondary font-weight-bold text-xs">Edit</a>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>

<script>
import SoftAvatar from "@/components/SoftAvatar.vue";
import SoftBadge from "@/components/SoftBadge.vue";
import axios from "axios";
import img1 from "../../assets/img/team-2.jpg";

export default {
  name: "authors-table",
  data() {
    return {
      img1,
      users: [], // Aquí se guardarán los usuarios
    };
  },
  components: {
    SoftAvatar,
    SoftBadge,
  },
  created() {
    this.fetchUsers();
  },
  methods: {
    // Función para obtener los usuarios desde la API
    async fetchUsers() {
      try {
        const response = await axios.get('/api/users', {
          headers: {
            Authorization: `Bearer ${localStorage.getItem('authToken')}`, // Asegúrate de incluir el token de autenticación
          }
        });
        this.users = response.data; // Asignamos los usuarios a la variable 'users'
      } catch (error) {
        console.error("Error al obtener usuarios:", error);
      }
    }
  }
};
</script>
