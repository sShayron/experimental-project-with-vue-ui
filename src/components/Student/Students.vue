<template>
  <div class="Students container">
    <Title :text="teacId != undefined ? `Teacher: ${teacher.name}` : 'All students'"/>
    <div v-if="teacId != undefined">
      <input @keyup.enter="add" type="text" placeholder="Student name" v-model="name">
      <button class="btn btnInput" @click="add">Add</button>
    </div>

    <table>
      <thead v-if="students.length">
        <th>Id.</th>
        <th>Name</th>
        <th>Options</th>
      </thead>
      <tbody v-if="students.length">
        <tr v-for="(student, index) in students" :key="index">
          <td>{{ student.id }}</td>
          <router-link
            :to="`/student-detail/${student.id}`"
            tag="td"
            style="{cursor: 'pointer'}"
          >{{ student.name }} {{ student.lastName }}</router-link>
          <td>
            <button class="btn btn-remove" @click="remove(student)">Remove</button>
          </td>
        </tr>
      </tbody>
      <tfoot v-else>
        <tr>
          <td colspan="3">No student found</td>
        </tr>
      </tfoot>
    </table>
  </div>
</template>

<script>
import Title from "../Common/Title.vue";

const URL = "http://localhost:5000/api/student";

export default {
  components: { Title },
  data() {
    return {
      students: [],
      name: "",
      teacId: this.$route.params.teacId,
      teacher: {}
    };
  },
  created() {
    if (this.teacId) {
      this.getTeacher();
      this.$http
        .get(`${URL}/teacher/${this.teacId}`)
        .then(res => res.json())
        .then(students => (this.students = students));
      return;
    }
    this.$http
      .get(URL)
      .then(res => res.json())
      .then(students => (this.students = students));
  },
  methods: {
    add() {
      const newStudent = {
        name: this.name,
        lastName: "",
        teacherId: this.teacher.id
      };
      this.$http
        .post(URL, newStudent)
        .then(res => res.json())
        .then(student => this.students.push(student));
      this.name = "";
    },
    remove(student) {
      this.$http.delete(`${URL}/${student.id}`).then(() => {
        const idx = this.students.indexOf(student);
        this.students.splice(idx, 1);
      });
    },
    getTeacher() {
      this.$http
        .get(`http://localhost:5000/api/teacher/${this.teacId}`)
        .then(res => res.json())
        .then(x => {
          this.teacher = x;
        });
    }
  }
};
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
  font-size: 0.8em !important;
}
table {
  margin: 0px;
  padding: 0px;
  list-style-type: none;
  width: 100%;
}
table tr td {
  padding: 20px;
  font-size: 1.3em;
  background-color: #e0edf4;
  margin-bottom: 2px;
  color: #3e5252;
}
table thead th {
  background-color: rgb(184, 208, 216) !important;
  font-size: 1.2em;
  padding: 10px 0px;
  text-align: center !important;
}
.colsmall {
  width: 5%;
}
</style>
