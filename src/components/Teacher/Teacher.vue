<template>
  <div class="Teachers container">
    <Title text="Teachers" btnBack="true"/>
    <table>
      <thead v-if="teachers.length">
        <th>Code</th>
        <th>Name</th>
        <th>Students</th>
      </thead>
      <tbody v-if="teachers.length">
        <tr v-for="(teacher, index) in teachers" :key="index">
          <td>{{ teacher.id }}</td>
          <router-link
            :to="`/students/${teacher.id}`"
            tag="td"
            :style="{ cursor: 'pointer' }"
          >{{ teacher.name }}</router-link>
          <td>{{ teacher.countStudents }}</td>
        </tr>
      </tbody>
      <tfoot v-else>
        <tr>
          <td colspan="3">
            <h5>No teachers found</h5>
          </td>
        </tr>
      </tfoot>
    </table>
  </div>
</template>

<script>
import Title from "../Common/Title.vue";

export default {
  components: { Title },
  data() {
    return {
      teachers: [],
      students: []
    };
  },
  created() {
    this.$http
      .get("http://localhost:5000/api/student")
      .then(res => res.json())
      .then(students => {
        this.students = students;
        this.getTeachers();
      });
  },
  methods: {
    getCountStudents() {
      this.teachers.forEach((p, idx) => {
        p = {
          id: p.id,
          name: p.name,
          countStudents: this.students.filter(x => x.teacher.id == p.id).length
        };
        this.teachers[idx] = p;
      });
    },
    getTeachers() {
      this.$http
        .get("http://localhost:5000/api/teacher")
        .then(res => res.json())
        .then(teachers => {
          this.teachers = teachers;
          this.getCountStudents();
        });
    }
  }
};
</script>

<style scoped>
</style>