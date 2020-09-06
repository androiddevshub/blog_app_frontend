<template>
 <div id="nav"> 
      <b-card id="card2"> 
        <h1 style="text-align:center"> REGISTRATION</h1>
        <b-form  >
           <b-form-group
        id="input-group-1"
        label="NAME"
        label-for="input-1">
        <b-form-input
          id="input-1"
          v-model="name"
          type="text"
          required 
          placeholder="Enter Name"
        ></b-form-input>
      </b-form-group>
      <b-form-group
        id="input-group-2"
        label="EMAIL "
        label-for="input-1">
        <b-form-input
          id="input-1"
          v-model="email"
          type="email"
          required
          placeholder="Enter email"
        ></b-form-input>
      </b-form-group>
     
      <b-form-group
        id="input-group-3"
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
         <b-form-group
        id="input-group-4"
        label="PHONE NO"
        label-for="input-1"
    
      >
        <b-form-input
          id="input-1"
          v-model="phone"
          type="text"
          required
          placeholder="Enter phone"
        ></b-form-input>
      </b-form-group>
      <br>
    
  <b-button @click="registerUser()" variant="danger">Submit</b-button>
   <b-button  id ="btn" variant="success">Reset</b-button>
   </b-form-group>
        </b-form>
        </b-card> 
    </div>
</template>
<script>
  export default {
    data() {
      return {
        email: '',
        password: '',
        name:"",
        phone:"",
      }
    },
    methods: {
      registerUser(){
        var _obj = this;
        this.axios.post('http://localhost:3000/api/v2/users/sign_up', {
            name: this.name,
            email: this.email,
            phone: this.phone,
            password: this.password
        })
        .then(function (response) {
          //  this.$router.push("/login");
            alert(response.data.message)
            _obj.$router.push('login');
        
          })
          .catch(function (error) {
              if(error.response.data){
                alert(error.response.data.message)
              }
            });
          }
        }
    }
</script>
<style scoped>
  #nav{
      padding-left:30%;
      padding-right:30%;
      padding-top:4%;
      font-family: cursive;
      padding-bottom: 3%;
      background-color: teal;
      }
  #btn{
    margin-left: 7%;
  }
  #card2{
    background-color:white;
  }
  </style>