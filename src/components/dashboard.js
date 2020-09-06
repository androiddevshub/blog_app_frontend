// import Comment from './comment/comment-dialog.vue'
export default {
  name: 'dashboard',
  components: { Comment },
  data() {
    return{  
      // modalOpen   
      attachBlue:false,
      comments:[],
      //   {
      //   description:"blog"
      // },
      // {
      //   description:"nice blog"
      // },
     
    
      
      openCommentModal: false,
      id: 0,
      title: '',
      description: '',
      progress: null,
      error: null,   
      mainProps: { blank: true ,blankColor: '#777', width: 100, height: 100},      
      posts: [],
      user:{ 
        name: localStorage.getItem('username'),
        avatar: localStorage.getItem('avatar')
      },
      
      postnames:{ 
            name:localStorage.getItem('username')
          },
       openAddPostModal: false
    }


  },


  watch: {
    'openAddPostModal': function (newVal){
      if(newVal){
        let url = 'http://localhost:3000/api/v2/posts'
        this.axios.get(url).then(response => {
          this.posts = response.data.data
          this.openAddPostModal = false;
         window.location.reload(true)
        });
      }
    }
  },
 mounted() {
    let url = 'http://localhost:3000/api/v2/posts' 
    this.axios.get(url).then(response => {
      this.posts = response.data.data
    });
  },
    

  methods: {

    comment(event){
      console.log(event.target.value)
      this.comments.push({description: event.target.value})
    },
    checkFormValidity() {
      const valid = this.$refs.form.checkValidity()
      // this.nameState = valid
      return valid
    },
    resetModal() {
      this.title= ''
      this.nameState = null
      this.description= ''
    },
    handleOk(bvModalEvt) {
      // Prevent modal from closing
      bvModalEvt.preventDefault()
      // Trigger submit handler
      this.handleSubmit()
    },
    commentOk(bvModalEvt) {
      // Prevent modal from closing
      bvModalEvt.preventDefault()
      // Trigger submit handler
      this.commentSubmit()
    },
     
    
    handleSubmit() {
      // Exit when the form isn't valid
      if (!this.checkFormValidity()) {
        return
      }
      // Push the name to submitted names
  

      this.axios.post('http://localhost:3000/api/v2/posts', {
        title: this.title,
        description: this.description
      })
      .then(function (response) {
        console.log(response.data)
      })
      .catch(function (error) {
        if(error.response){
          alert(error.response.data.message)
        }
      });
  
      // Hide the modal manually
      this.$nextTick(() => {
        this.$bvModal.hide('modal-prevent-closing')
        
      })
        this.openAddPostModal = true;

    },
     commentSubmit() {
      // Exit when the form isn't valid
      
      // Push the name to submitted names
  

      this.axios.post('http://localhost:3000/api/v2/comments', {
        description: this.description
      })
      .then(function (response) {
        console.log(response.data)
      })
      .catch(function (error) {
        if(error.response){
          alert(error.response.data.message)
        }
      });
  
      // Hide the modal manually
      this.$nextTick(() => {
        this.$bvModal.hide('comment-prevent-closing')
        
      })
        this.openAddPostModal = true;

    },
    previewImage(event) {
      console.log('entering here')
      const img = event.target.files[0];
      this.user.avatar = URL.createObjectURL(img);
      let fd= new FormData()
      fd.append('avatar', img)


      this.axios.post('http://localhost:3000/api/v2/users/avatar_upload', fd)
      .then(response=>{
        console.log(response.data.avatar)
        if(response.data.avatar){
          this.user.avatar = response.data.avatar
          localStorage.setItem('avatar', response.data.avatar)
          window.location.reload(true)
        }
      })
      .catch(err=>{
        console.error(err);
      });    
    },
    openCommentDialog(){
      this.openCommentModal = true;
    },
    likeClickButton(){
      this.attachBlue = true;
    }
   
  

  } 
  
}