<template>
  <div>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
    <div>
      <b-container>
            <b-row>
              <b-col>
                <b-card id="dash"> 
                  <input type="file" @change="previewImage" ref="file" style="display: none">
                  <img :src="user.avatar" v-bind="mainProps" class="myImage" v-if="user.avatar.length > 0" @click="$refs.file.click()" alt="Circle image">
                  <img src="../assets/profile.jpg" v-bind="mainProps" class="myImage" v-else @click="$refs.file.click()" alt="Circle image">     
                   <h5 class="hfive">{{user.name}}</h5>      
                    <h5 class="hfour">images</h5>
                    <h5>profile</h5>
                   </b-card>
                   <b-card id="card2">
                    <P class="icon"><b-icon v-b-modal.comment-prevent-closing   icon="house-door" class="fa" >Comment</b-icon> Blog Home</p>      
                    <p class="icon"><b-icon v-b-modal.comment-prevent-closing   icon="pencil" class="fa" >Comment</b-icon> Your Post  </p>    
                    <p class="icon">  <b-icon v-b-modal.comment-prevent-closing   icon="newspaper" class="fa" >Comment</b-icon> Contact </p>                  
                    <p class="icon">  <b-icon v-b-modal.comment-prevent-closing   icon="people"  class="fa" >Comment</b-icon>Connections </p>                                 
                   </b-card>
                </b-col>           
                <b-col >        
                  <b-button v-b-modal.modal-prevent-closing id="btn" variant="info">POST</b-button>              
                <b-modal             
                    id="modal-prevent-closing"
                    ref="modal"
                    title="your post"
                    @show="resetModal"
                    @hidden="resetModal"
                    @ok="handleOk"
                   >              
                  <form ref="form" @submit.stop.prevent="handleSubmit"  > 
                      <b-form-group
                        label="title"
                        label-for="name-input"
                        invalid-feedback="title is required">
                        <b-form-input
                          id="name-input"
                          v-model="title"
                          required
                        ></b-form-input>
                      </b-form-group>
                      <b-form-group                 
                        label="description"
                        label-for="name-input"
                        invalid-feedback="description is required"  >
                        <b-form-input
                          id="name-input"
                          v-model="description"                 
                          required
                        ></b-form-input>
                      </b-form-group>
                    </form>                                 
                  </b-modal>             
                <b-card id="dash1">             
                  <b-card v-for="(post) in posts" :key="post.id" :id="post.id">  
                    <img v-if="post.user.avatar" :src="post.user.avatar" v-bind="mainProps" class="myImage1" alt="Circle image">
                    <img v-else src="../assets/profile.jpg" v-bind="mainProps" class="myImage1" alt="Circle image">
                              {{post.user.name}}<br>
                    <h5>{{post.title }}</h5>
                    <p>{{ post.description }}</p>       
                    <hr>
                    <b-row>
                        <b-col>
                          <b-icon icon="heart-fill" class="fa" @click="attachBlue=!attachBlue" :class="{blue:attachBlue}"></b-icon>               
                          <!-- <button> <b-icon icon="hand-thumbs-up"></b-icon></button> -->
                        </b-col>
                        <b-col id="icon1" >
                            <b-icon v-b-modal.comment-prevent-closing   icon="chat" class="fa" >Comment</b-icon>             
                        </b-col>
                    </b-row>               
                  </b-card>  
                   <b-modal id="comment-prevent-closing" title="comment box" >
                     <div > 
                       <ul v-for="comment in comments" :key="comment">
                         <li>{{comment.description}}</li>
                       </ul>           
                     </div>              
                      <input type="text" v-on:keyup.enter="comment">                             
                 </b-modal>
                </b-card>                   
              </b-col>
            </b-row>
        </b-container>
      </div>   
   </div>  
</template>
<script src="./dashboard.js"></script>
<style src="./dashboard.css" scoped></style>

       
    
    
      
    
  

  