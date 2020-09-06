<template>

    <div id="nav1"> 
      <b-card id="card1">
        <h1 style="text-align:center"> LOGIN</h1>
        <b-form  >
           
     
      <b-form-group
        id="input-group-1"
        label="EMAIL "
        label-for="input-1"
    
      >
        <b-form-input
          id="input-1"
          v-model="email"
          type="email"
          required
          placeholder="Enter email"
        ></b-form-input>
      </b-form-group>
     
      <b-form-group
        id="input-group-1"
        label="PASSWORD"
        label-for="input-1"
        
      >
        <b-form-input
          id="input-1"
          v-model="password"
          type="password"
          required
          placeholder="Enter password"
        ></b-form-input>
    <br>
     <b-button @click="loginUser()" variant="danger">login</b-button>
  </b-form-group>
        </b-form>
        </b-card>
    </div>
  
            
</template>
<script>
import { EventBus } from './../even-bus';


  export default {
    data() {
      return {
           email: '',
          password: ''
      }
    },
    methods:{
     loginUser(){
        var _obj = this;
        this.axios.post('http://localhost:3000/api/v2/users/sign_in', {
          email: this.email,
           password: this.password
        })
        .then(function (response) {
          alert(response.data.message)
          localStorage.setItem('token', response.data.data.token)
          localStorage.setItem('username', response.data.data.name)
          localStorage.setItem('avatar', response.data.data.avatar)
          console.log(localStorage);
          EventBus.$emit('logged', 'User logged')
          console.log(_obj, 'current obj');
          _obj.$router.push('dashboard');
      
        })
        .catch(function (error) {
            if(error.response){
              alert(error.response.data.message)
            }
          });
        }
      }
  }
    

  </script>
  <style scoped>
  #nav1{
      padding-left:30%;
      padding-right:30%;
      padding-top:4%;
      font-family: cursive;
      padding-bottom: 18%;
      background-color: teal;
      }
      #card1{
        background-color:white;
      }
  
  </style>