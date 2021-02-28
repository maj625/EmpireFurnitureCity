<template>
  <router-view />
  <spinner :start="isLoading.val"/>
</template>

<script>
import Spinner from './components/fragments/Spinner.vue'

export default {
  components: {Spinner},
    data() {
        return {
            isLoading: {
                val: false
            },
        }
    },
    provide(){
        return {
            myLoader: this.isLoading
        }
    }
}
</script>
