<template>
  <p> Lecturer page</p>

  <div class="mb-3">
      <label for="exampleFormControlInput1" class="form-label">Email address</label>
      <input type="email" class="form-control" v-model="moduleID" id="exampleFormControlInput1" placeholder="CT101">
    </div>

    <div class="mb-3">
      <label for="exampleFormControlInput1" class="form-label">Email address</label>
      <input type="email" class="form-control" v-model="taughtBy" id="exampleFormControlInput1" placeholder="f.glavin">
    </div>
    <div class="mb-3">
      <label for="exampleFormControlTextarea1" class="form-label">Times</label>
      <textarea class="form-control" v-model="times" id="exampleFormControlTextarea1" rows="3"></textarea>
    </div>
    <div class="mb-3 right">
      <button type="button" @click="addModule" class="btn btn-primary">Add Module</button>
    </div>

</template>

<script>
import app from '../api/firebase';
import { getFunctions, httpsCallable } from "firebase/functions";
export default {
  data() {
    return {
      moduleID: '',
      taughtBy: '',
      times:[]
    }
  },
  created(){

  },
  methods : {
    addModule() {
  const functions = getFunctions(app);
  const addModule = httpsCallable(functions, 'addModule');
  const data = {
    moduleID: this.moduleID,
    taughtBy: this.taughtBy,
    times: this.times
  };
  
  addModule(data).then((result) => {
    // Read the result of the Cloud Function
    // /** @type {any} */
    this.getComments();
  });
}
  }
}
</script>

<style scoped>

</style>
