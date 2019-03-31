import Vue from 'vue';
import VueRouter from 'vue-router';
import Alunos from './components/Aluno/Alunos.vue';
import Professores from './components/Professor/Professores.vue';
import Sobre from './components/Sobre/Sobre.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/alunos',
    component: Alunos
  },
  {
    path: '/professores',
    component: Professores
  },
  {
    path: '/sobre',
    component: Sobre
  }
];

export default new VueRouter({ routes });