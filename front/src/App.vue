<template>
  <div>
    <b-navbar class="bottom" centered fixed-top shadow>
      <template #start>
        <b-navbar-item tag="router-link" :to="{ name: 'home' }">
          Home
        </b-navbar-item>
        <b-navbar-item tag="router-link" :to="{ name: 'add' }">
          Add
        </b-navbar-item>
        <b-navbar-item tag="router-link" :to="{ name: 'calculator' }">
          Calculator
        </b-navbar-item>
      </template>
    </b-navbar>
    <div class="box1">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
export default {
  name: "App",
  components: {},
};
</script>
<style scoped>

.box1{

 display: flex;
  justify-content: center;
  align-items: center;
  width: 1300px;
  margin: 0 auto; 
}
</style>
