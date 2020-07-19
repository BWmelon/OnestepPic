<template>
  <div class="home">
    <Upload/>
  </div>
</template>

<script>
// @ is an alias to /src
import Upload from '@/components/Upload.vue'

export default {
  name: 'Home',
  components: {
    Upload
  }
}
</script>
