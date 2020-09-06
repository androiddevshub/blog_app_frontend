<template>
<div>
  <div id="home">
    <b-container id="row">
  <b-row >   
    <b-col id="first"><h1>What is Lorem Ipsum?</h1>
    <h4>
      Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, .
    </h4>
    
    </b-col>
    <!-- <b-col id="second"><img src="./image.jpeg" height="100%" width="300%"> </b-col> -->
    <b-col id="third"><h1>Why do we use it?</h1>
    <h4>t is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages</h4>
    </b-col>
    <b-col id="second"><img src="./image.jpeg" height="100%" width="100%"> </b-col>
  </b-row>
</b-container>
  </div>
  <div id="home2">
    <h1>Where does it come from?</h1>
    <h5>Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor </h5>
<h1>why do we use it</h1>
<h5>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled</h5>

</div>
<div>
  <b-card-group id="card4" >
  <b-card id="card1" title="Card title" sub-title="Card subtitle">
    <b-card-text>
      Some quick example text to build on the <em>card title</em> and make up the bulk of the card's
      content.
    </b-card-text>

    <b-card-text>A second paragraph of text in the card.</b-card-text>

      
    </b-card>
    <b-card   id="card2" title="Card title" sub-title="Card subtitle">
    <b-card-text>
      Some quick example text to build on the <em>card title</em> and make up the bulk of the card's
      content.
    </b-card-text>

    <b-card-text>A second paragraph of text in the card.</b-card-text>

      
    </b-card>
  </b-card-group>
    <div>
  </div>   
</div>
</div>
</template>

<script>
import { EventBus } from './../even-bus'
export default {
  data(){
   return{
  }
  },
  created () {
    this.checkIfIsLogged();
  },
  methods: {
    checkIfIsLogged() {
      console.log(localStorage);
      let token = localStorage.getItem('token')
      if (token) {
        EventBus.$emit('logged', 'User logged')
        this.$router.push('dashboard')
      }
    }
  }
  
}
</script>
<style scoped>
#first{
  color:maroon;
  background-color: white;
}

#third{
  color:maroon;
  

}
#row{
  
  padding-top:4%;


}
#home{
  background-color:teal;
  padding-bottom:4%;
}


#home2{
  background-color: white;
  padding-bottom:5%;
  
  
}
h5{
  padding-left:25%;
  padding-right:25%;
  color:maroon;

}
#home3{
  background-color: teal;
  padding-bottom:4%;
}
#card4{
  padding-top:3%;
  background-color: teal;
  padding-left:20%;
  padding-right:40%;
  padding-bottom:5%;

}
#card1{
  margin-right:5%;
}
#card2{
  margin-left:20%;
}
h1{ 
  text-align: center;
  margin-top:4%;
  color:maroon;

}


 


 
 


 
 
</style>