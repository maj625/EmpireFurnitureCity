<template>
  <router-view />
</template>

<script>
import {auth} from './firebase'

export default {
  name: 'App',
  data() {
    return {
      isLoggedIn: false,
    }
  },
  methods: {
    logout(){
      auth.signOut().then(()=>{
        this.$router.push({ path: '/' })
      })
    },
    addItem() {
      console.log('Add item')
    }
  },
  created() {
    auth.onAuthStateChanged(user => {
      if(user == null){
        this.isLoggedIn = false;
      }else {
        this.isLoggedIn = true
      }
    })
  }
}
</script>

<style scoped>
.nav-item {
  margin-left: 5px;
}

.nav-item input{
  color: rgb(0, 0, 0) !important; 
  background-color: cornsilk;
}

.nav-item input:hover {
  transition: 0.1s; 
  border: 2px solid rgb(2, 2, 190);
}

::placeholder {
  color: rgba(0, 4, 236, 0.952);
}
</style>
