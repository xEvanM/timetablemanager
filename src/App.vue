<template>
  <router-view />
  <notifications position="top center" classes="my-notification" />
</template>

<script>
export default {
  name: "App",
  components: {},
};
</script>

<style>

@import url("https://fonts.googleapis.com/css2?family=Noto+Sans:wght@700&family=Poppins:wght@400;500;600&display=swap");

body {
  background-color: rgb(46, 78, 141);
}

.my-notification {
  position: relative;
  top: 20px;
  padding: 15px;
  font-size: 12px;  
  height: 120px;
  width: 100%;
  max-width: 800px;
  color: white;
  font-family: Poppins;
  border-radius: 5px;
}

.my-notification .notification-title {
    font-size: 15px;
    text-decoration: underline;
    font-weight: 800;
  }

  .my-notification .notification-content {
    font-size: 14px;
  }

  .my-notification.success {
    background: #68cd86;
    border-left-color: #42a85f;
  }
  .my-notification.warn {
    background: #ffb648;
  }
  .my-notification.error {
    background: #e54d42;
    border-left-color: #b82e24;
  }
</style>
