<!--

<template>
  <div>
    <h1>Connexion à l'agenda</h1>
    <form @submit.prevent="login">
      <div>
        <label for="login">Login :</label>
        <input type="text" id="login" v-model="login" />
      </div>
      <div>
        <label for="motDePasse">Mot de passe :</label>
        <input type="password" id="motDePasse" v-model="motDePasse" />
      </div>
      <button type="submit">Se connecter</button>
    </form>
    <div v-if="erreur" class="erreur">{{ erreur }}</div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { AgendaController } from '../controllers/AgendaController';
import { AuthService } from '../services/AuthService';

export default defineComponent({
  name: 'Login',
  data() {
    return {
      login: '',
      motDePasse: '',
      erreur: '',
    };
  },
  methods: {
    async login() {
      try {
        const authService = new AuthService();
        const token = await authService.login(this.login, this.motDePasse);
        if (token) {
          this.$router.push('/agenda');
        }
      } catch (error) {
        this.erreur = error.message;
      }
    },
  },
});
</script>

-->