<template>
  <div class="AlunoDetalhe container">
    <Titulo :text="`Aluno: ${aluno.nome}`" :btnVoltar="!isEditing">
      <button class="btn btn-editar" @click="isEditing = !isEditing">{{ isEditing? 'Cancelar' : 'Editar' }}</button>
    </Titulo>
    <table>
      <tbody>
        <tr>
          <td class="colPequeno">Matricula:</td>
          <td>
            <label>{{ aluno.id }}</label>
          </td>
        </tr>
        <tr>
          <td class="colPequeno">Nome:</td>
          <td>
            <input v-if="isEditing" v-model="aluno.nome" type="text">
            <label v-else>{{ aluno.nome }}</label>
          </td>
        </tr>
        <tr>
          <td class="colPequeno">Sobrenome:</td>
          <td>
            <input v-if="isEditing" v-model="aluno.sobrenome" type="text">
            <label v-else>{{ aluno.sobrenome }}</label>
          </td>
        </tr>
        <tr>
          <td class="colPequeno">Data nascimento:</td>
          <td>
            <input v-if="isEditing" v-model="aluno.dtNasc" type="text">
            <label v-else>{{ aluno.dtNasc }}</label>
          </td>
        </tr>
        <tr>
          <td class="colPequeno">Professor:</td>
          <td>
            <select name="prof" id="profxx" v-model="aluno.professor" v-if="isEditing">
              <option v-for="prof in professores" :key="prof.id" :value="prof">
                {{ prof.nome }}
              </option>
            </select>
            <label v-else>{{ aluno.professor.nome }}</label>
          </td>
        </tr>
      </tbody>
    </table>
    <div style="margin-top: 10px">
      <div v-if="isEditing">
        <button class="btn btn-salvar" @click="salvar">Salvar</button>
        <button class="btn btn-cancelar" @click="cancelar">Cancelar</button>
      </div>
    </div>
  </div>
</template>

<script>
import Titulo from '../Common/Titulo'

export default {
  components: { Titulo },
  data() {
    return {
      alunoId: this.$route.params.alunoId,
      aluno: {},
      professores: [],
      isEditing: false
    }
  },
  created() {
    this.getAluno();
    this.getProfessores();
  },
  methods: {
    salvar() {

    },
    cancelar() {
      this.isEditing = false;
    },
    getAluno() {
      this.$http
        .get(`http://localhost:3000/alunos/${this.alunoId}`)
        .then(res => res.json())
        .then(x => this.aluno = x)
    },
    getProfessores() {
      this.$http
        .get('http://localhost:3000/professores')
        .then(res => res.json())
        .then(professores => {
          this.professores = professores;
        });
    }
  }
}
</script>

<style scoped>
.colPequeno {
  width: 20%;
  text-align: right;
  background: rgb(125, 216, 245);
  font-weight: bold;
}
.btn-editar {
  float: right;
  background: rgb(76, 76, 249);
}
input, select {
  margin: 0;
  padding: 5px 10px;
  font-size: 0.9em;
  border: 1px solid silver;
  border-radius: 5px;
  font-family: Montserrat;
  width: 95%;
  background: rgb(245, 245, 245);
}
select {
  height: 38px;
  width: 100%;
}
.btn-salvar {
  float: right;
  background: rgb(79, 196, 68);
}
.btn-cancelar {
  float: left;
  background: rgb(76, 186, 249);
}
</style>