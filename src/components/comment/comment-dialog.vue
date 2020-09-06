<template>
  <el-dialog title="Comments" :visible.sync="commentDialogVisible">
    

  </el-dialog>


</template>
<script>
// import Comments from './comments'
export default {
    name: 'comment-dialog',
    props: {
      open: {
        type: Boolean,
        required: true,
        default: false
      }
    },
    delimiters: ['[[', ']]'],
    // components: {Comments},
    data: function() {
        return {
          commentDialogVisible: false,
          likes: 12,
          //Info about the owner of the post
          creator: {
              avatar: 'http://via.placeholder.com/100x100/36846e',
              
          },
          //Some info about the current user
          current_user: {
              avatar: 'http://via.placeholder.com/100x100/a74848',
              user: 'exampler'
          },
          //Comments that are under the post
          comments: [
              {
                  // /id: uuidv4(),
                  user: 'example',
                  avatar: 'http://via.placeholder.com/100x100/a74848',
                  text: 'lorem ipsum dolor lorem ipsum dolor lorem ipsum dolor',
              }
          ]
        }
    },
    watch: {
      open(value){
        this.commentDialogVisible = value;
      }
    },
    methods: {
        submitComment: function(reply) {
            this.comments.push({
                // id: uuidv4(),
                user: this.current_user.user,
                avatar: this.current_user.avatar,
                text: reply
            });
        }
    }
}
</script>