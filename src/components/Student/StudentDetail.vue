<template>
  <div class="StudentDetail container">
    <Title :text="`Student: ${student.name}`" :btnBack="!isEditing">
      <button
        class="btn btn-edit"
        @click="isEditing = !isEditing"
      >{{ isEditing? 'Cancel' : 'Edit' }}</button>
    </Title>
    <table>
      <tbody>
        <tr>
          <td class="colsmall">Id:</td>
          <td>
            <label>{{ student.id }}</label>
          </td>
        </tr>
        <tr>
          <td class="colsmall">Name:</td>
          <td>
            <input v-if="isEditing" v-model="student.name" type="text">
            <label v-else>{{ student.name }}</label>
          </td>
        </tr>
        <tr>
          <td class="colsmall">Last Name:</td>
          <td>
            <input v-if="isEditing" v-model="student.lastName" type="text">
            <label v-else>{{ student.lastName }}</label>
          </td>
        </tr>
        <tr>
          <td class="colsmall">Birth Date:</td>
          <td>
            <input v-if="isEditing" v-model="student.birthDate" type="text">
            <label v-else>{{ student.birthDate }}</label>
          </td>
        </tr>
        <tr>
          <td class="colsmall">Teacher:</td>
          <td>
            <select name="prof" id="profxx" v-model="student.teacherId" v-if="isEditing">
              <option v-for="teac in teachers" :key="teac.id" :value="teac.id">{{ teac.name }}</option>
            </select>
            <label v-else>
              <span v-if="student.teacher">{{ student.teacher.name }}</span>
            </label>
          </td>
        </tr>
      </tbody>
    </table>
    <div style="margin-top: 10px">
      <div v-if="isEditing">
        <button class="btn btn-save" @click="save">Save</button>
        <button class="btn btn-cancel" @click="cancel">Cancel</button>
      </div>
    </div>
  </div>
</template>

<script>
import Title from "../Common/Title";

export default {
  components: { Title },
  data() {
    return {
      studentId: this.$route.params.studentId,
      student: {},
      teachers: [],
      isEditing: false
    };
  },
  created() {
    this.getStudent();
    this.getTeachers();
  },
  methods: {
    save() {
      const student = {
        id: this.student.id,
        name: this.student.name,
        lastName: this.student.lastName,
        birthDate: this.student.birthDate,
        teacherId: this.student.teacherId
      };
      this.$http
        .put(`http://localhost:5000/api/student/${this.student.id}`, student)
        .then(res => res.json())
        .then(student => (this.student = student))
        .then(() => (this.isEditing = false));
    },
    cancel() {
      this.isEditing = false;
    },
    getStudent() {
      this.$http
        .get(`http://localhost:5000/api/student/${this.studentId}`)
        .then(res => res.json())
        .then(x => (this.student = x));
    },
    getTeachers() {
      this.$http
        .get("http://localhost:5000/api/teacher")
        .then(res => res.json())
        .then(teachers => {
          this.teachers = teachers;
        });
    }
  }
};
</script>

<style scoped>
.colsmall {
  width: 20%;
  text-align: right;
  background: rgb(125, 216, 245);
  font-weight: bold;
}
.btn-edit {
  float: right;
  background: rgb(76, 76, 249);
}
input,
select {
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
.btn-save {
  float: right;
  background: rgb(79, 196, 68);
}
.btn-cancel {
  float: left;
  background: rgb(76, 186, 249);
}
</style>