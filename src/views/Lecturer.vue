<template>
    <p> This is the lecturer page</p>
    <button @click="setData()">Set Module Data</button>
</template>

<script>
// console log user that is logged in from firebase
// console.log(auth.currentUser)

import {initializeApp, applicationDefault, cert} from 'firebase-admin/app';
import {getFirestore, Timestamp, FieldValue} from 'firebase-admin/firestore';

//const { initializeApp, applicationDefault, cert } = require('firebase-admin/app');
//const { getFirestore, Timestamp, FieldValue } = require('firebase-admin/firestore');

initializeApp();

const db = getFirestore();


export default {
  methods: {
    setData( ) {
        const res = db.collection('modules').doc('CT101').set(data);},
  }
}

const data = {
    moduleID: 'CT101',
    taughtBy: 'Frank',
    times: ['M11', 'T14']
};


// Add a new document in collection "modules" with ID 'CT101'




</script>

<style scoped>

</style>
