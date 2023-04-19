<template>
  <v-form>
    <v-text-field label="Nom de l'agenda" v-model="nom"></v-text-field>
    <v-btn @click="ajouterAgenda" color="primary">Ajouter</v-btn>
  </v-form>
</template>

<script>
import { AgendaController } from '@/controllers/AgendaController';
import User from '../models/User';

export default {
  data() {
    return {
      nom: '',
    };
  },
  methods: {
    ajouterAgenda() {
      const user = new User('monLogin', 'monMotDePasse', []);
      const controller = new AgendaController(user);
      controller.ajouterAgenda(this.nom); // Passe le nom de l'agenda à ajouter
      // Réinitialiser le champ de texte après l'ajout de l'agenda
      this.nom = '';
    },
  },
};
</script>

