<template>
  <div>
    众创公众平台后台管理系统
    <tinymce v-model="content" :height="300" /> 
    

    <div style="margin-top:30px;" v-html="content"></div>
  </div>
</template>

<script>
import Tinymce from '@/components/Tinymce'
export default {
  name: 'Home',
  components: { Tinymce },
  data() {
    return {
      content:`多功能富文本编辑器`
    }
  },
  methods: {
    save(){
      console.log(this.content,'-------')
    }
  },
}
</script>

<style lang="scss" scoped>

</style>
