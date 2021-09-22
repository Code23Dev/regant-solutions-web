<template>
<div>
  <div class="container">
    <div class="d-flex justify-content-center">
      <div class="col-6 mt-5 form-background-color">
        <div class="d-flex justify-content-center"> <img src="../assets/logo.png" width="20%" height="20%"></div>
        <hr/>
       <div class="form-padding">
         <FormItem
           inputStyle="border-radius: 50px;position: relative;left: 10px;z-index:1;"
           typeData="email"
           placeholderStyle="email adresiniz"
         />
         <FormItem
           inputStyle="border-radius: 50px;position: relative;left: 10px;z-index:1;"
           typeData="password"
           placeholderStyle="şifreniz"
         />
         <p><router-link to="/forget-password" style="text-decoration: none">Şifrenizi mi unuttunuz?</router-link></p>
         <FormButton
           buttonText="Giriş Yap"
           buttonStyle="padding:10px;width:100%"
         />
         <p class="mt-3">Hesab yok mu? <router-link to="/sign-up" style="text-decoration: none">Kayit ol</router-link></p>
       </div>
      </div>
    </div>
  </div>
</div>
</template>

<script>
import FormButton from '@/components/form/FormButton'
import FormItem from '@/components/form/FormItem'

export default {
  name: 'LogIn',
  components: {
    FormButton,
    FormItem
  },
  data () {
    return {
      routeName: this.$route.path,
      backgroundColor: 'SteelBlue'
    }
  },
  methods: {
    changeBackgroundColor () {
      if (this.$route.path) {
        window.document.body.style.backgroundColor = this.backgroundColor
      }
    }
  },
  created () {
    this.changeBackgroundColor()
  }
}
</script>

<style scoped>
.form-background-color{
  background-color: white;
  border-radius: 10px;
}
.form-padding{
  padding: 20px;
}
</style>
