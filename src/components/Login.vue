<template>
  <div class="hello">
    <h1>{{ msg }}</h1>

    <p>
      {{code}}
    </p>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "Login",
  props: {
    msg: String
  },

  data(){
    return{
      code:{}
    }
  },
  mounted() {
    axios({
      method:"post",
      url:"http://localhost:6610/user/login",
      data: querystring.stringifier({
        userName:"gzladmin",
        password:"gzladmin"
      })
        }).then(res=>{
      console.log(res.data)
      this.code=res.data
    })

  }
}
</script>

<style scoped>

</style>