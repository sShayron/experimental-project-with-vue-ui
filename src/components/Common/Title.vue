<template>
  <div class="title">
    <div style="display: flex">
      <h2>{{ text }}</h2>
      <div class="back">
        <slot/>
        <button v-if="btnBack" class="btn btn-back" @click="$router.back()">Back</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    text: String,
    btnBack: {
      type: Boolean,
      default: true
    }
  }
};
</script>

<style scoped>
.back {
  width: 50%;
  position: absolute;
  margin-top: 15px;
}
.btn-back {
  float: right;
  background: rgb(199, 199, 199);
  font-size: 1.2em;
}
</style>


