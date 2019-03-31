<template>
  <div class="Professores container">
    <Titulo text="Professores"/>
    <table>
      <thead v-if="professores.length">
        <th>Cod.</th>
        <th>Nome</th>
        <th>Alunos</th>
      </thead>
      <tbody v-if="professores.length">
        <tr v-for="(professor, index) in professores" :key="index">
          <td>{{ professor.id }}</td>
          <router-link to="/alunos" tag="td" :style="{ cursor: 'pointer' }">
            {{ professor.nome }}
          </router-link>
          <td>3</td>
        </tr>
      </tbody>
      <tfoot v-else>Nenhum professor encontrado</tfoot>
    </table>
  </div>
</template>

<script>
import Titulo from "../Common/Titulo.vue";

export default {
  components: { Titulo },
  data() {
    return {
      professores: [
        {
          id: 1,
          nome: 'xx'
        },
        {
          id: 2,
          nome: 'zz'
        }
      ]
    };
  }
};
</script>

<style scoped>
</style>