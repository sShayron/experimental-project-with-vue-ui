<template>
  <div class="Alunos container">
   <Titulo :text="profId != undefined ? `Professor: ${professor.nome}` : 'Todos alunos'" />
    <div v-if="profId != undefined">
      <input @keyup.enter="add" type="text" placeholder="Nome do aluno" v-model="nome">
      <button class="btn btnInput" @click="add">Adicionar</button>
    </div>

    <table>
      <thead v-if="alunos.length">
        <th>Mat.</th>
        <th>Nome</th>
        <th>Opcoes</th>
      </thead>
      <tbody v-if="alunos.length">
        <tr v-for="(aluno, index) in alunos" :key="index">
          <td>{{ aluno.id }}</td>
          <router-link :to="`/aluno-detalhe/${aluno.id}`" tag="td" style="{cursor: 'pointer'}">
            {{ aluno.nome }} {{ aluno.sobrenome }}
          </router-link>
          <td>
            <button class="btn btn-remove" @click="remove(aluno)">Remover</button>
          </td>
        </tr>
      </tbody>
      <tfoot v-else>Nenhum aluno encontrado</tfoot>
    </table>
  </div>
</template>

<script>
import Titulo from '../Common/Titulo.vue';

const URL = 'http://localhost:3000/alunos';

export default {
  components: { Titulo },
  data() {
    return {
      alunos: [],
      nome: '',
      profId: this.$route.params.profId,
      professor: {}
    }
  },
  created() {
    if (this.profId) {
      this.getProfessor();
      this.$http
      .get(`${URL}?professor.id=${this.profId}`)
      .then(res => res.json())
      .then(alunos => this.alunos = alunos);
      return;
    }
    this.$http
      .get(URL)
      .then(res => res.json())
      .then(alunos => this.alunos = alunos);
  },
  methods: {
    add() {
      const newAluno = {
        nome: this.nome,
        sobrenome: '',
        professor: this.professor
      };
      this.$http
        .post(URL, newAluno)
        .then(res => res.json())
        .then(aluno => this.alunos.push(aluno));
      this.nome = '';
    },
    remove(aluno) {
      this.$http
        .delete(`${URL}/${aluno.id}`)
        .then(() => {
          const idx = this.alunos.indexOf(aluno);
          this.alunos.splice(idx, 1);
        });
    },
    getProfessor() {
      this.$http
        .get(`http://localhost:3000/professores/${this.profId}`)
        .then(res => res.json())
        .then(x => {
          this.professor = x;
        });
    }
  }
}
</script>

<style scoped>
input {
  width: calc(100% - 192px);
  border: 0;
  padding: 20px;
  font-size: 1em;
  color: #687f7f;
}
.btnInput {
  width: 150px;
  border: 0;
  padding: 20px;
  background-color: rgb(116, 115, 115);
}
.btnInput:hover {
  padding: 20px;
  margin: 0;
  border: 0;
}
.btn-remove {
  font-size: 0.8em!important;
}
table {
  margin: 0px;
  padding: 0px;
  list-style-type: none;
  width: 100%;
}
table tr td{
  padding: 20px;
  font-size: 1.3em;
  background-color: #e0edf4;
  margin-bottom: 2px;
  color: #3e5252;
}
table thead th{
  background-color: rgb(184, 208, 216) !important;
  font-size: 1.2em;
  padding: 10px 0px;
  text-align: center !important;
}
.colPequeno {
  width: 5%;
}
</style>
