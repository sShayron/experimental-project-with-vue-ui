import Vue from 'vue';
import VueRouter from 'vue-router';
import Students from './components/Student/Students.vue';
import StudentDetail from './components/Student/StudentDetail.vue';
import Teachers from './components/Teacher/Teacher.vue';
import About from './components/About/About.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/students/:teacId',
    component: Students
  },
  {
    path: '/students',
    component: Students
  },
  {
    path: '/student-detail/:studentId',
    component: StudentDetail
  },
  {
    path: '/teachers',
    component: Teachers
  },
  {
    path: '/about',
    component: About
  }
];

export default new VueRouter({ routes });
