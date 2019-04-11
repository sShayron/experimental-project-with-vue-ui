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
          <router-link :to="`/alunos/${professor.id}`" tag="td" :style="{ cursor: 'pointer' }">
            {{ professor.nome }}
          </router-link>
          <td>{{ professor.qtdAlunos }}</td>
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
      professores: [],
      alunos: []
    };
  },
  created() {
    this.$http
      .get('http://localhost:3000/alunos')
      .then(res => res.json())
      .then(alunos => {
        this.alunos = alunos;
        this.getProfessores();
      });
  },
  methods: {
    pegaQtdAlunos() {
      this.professores.forEach((p, idx) => {
        p = {
          id: p.id,
          nome: p.nome,
          qtdAlunos: this.alunos.filter(x => x.professor.id == p.id).length
        }
        this.professores[idx] = p;
      })
    },
    getProfessores() {
      this.$http
        .get('http://localhost:3000/professores')
        .then(res => res.json())
        .then(professores => {
          this.professores = professores;
          this.pegaQtdAlunos();
        });
    }
  }
};
</script>

<style scoped>
</style>