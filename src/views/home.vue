<template>
  <div class="ion-page">
    <ion-header>
      <ion-toolbar color="">
        <ion-title>{{appName}}</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content padding>
      <img alt="Vue logo" src="../assets/logo.png" />
      Welcome to Your Vue.js App
    </ion-content>
    <ion-router-link href="/camera">Camera</ion-router-link>
  </div>
</template>

<script>
export default {
  name: "Home",
  components: {
  },
  data() {
    return {
      appName: 'Goodclic'
    }
  },
}
</script>