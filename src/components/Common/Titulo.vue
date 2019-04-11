<template>
  <div class="titulo">
    <div style="display: flex">
      <h2>{{ text }}</h2>
      <div class="voltar">
        <slot />
        <button  v-if="btnVoltar" class="btn btn-voltar" @click="$router.back()">Voltar</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    text: String,
    btnVoltar: {
      type: Boolean,
      default: true
    }
  }
}
</script>

<style scoped>
.voltar {
  width: 50%;
  position: absolute;
  margin-top: 15px;
}
.btn-voltar {
  float: right;
  background: rgb(199, 199, 199);
  font-size: 1.2em;
}
</style>


