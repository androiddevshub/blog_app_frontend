<template>
       <div class="comments">
            <div>
                <Single
                    v-for="comment in comments"
                    :comment="comment"
                    :key="comment.id"
                ></Single>
            </div>
            <hr>
            <div class="reply">
                <div class="avatar">
                    <img :src="current_user.avatar" alt="">
                </div>
                <input 
                    type="text" 
                    v-model.trim="reply" 
                    class="reply--text" 
                    placeholder="Leave a comment..."
                    maxlength="250"
                    required
                    @keyup.enter="submitComment"
                />
                <button 
                    class="reply--button" 
                    @click.prevent="submitComment">
                    <i class="fa fa-paper-plane"></i> Send
                </button>
            </div>
        </div>
</template>
<script>
 import Single from './single-comment'
export default {
 
 components:{Single},
    delimiters: ['[[', ']]'],
    data: function() {
        return {
            reply: ''
        }
    },
    methods: {
        //Tell the parent component(main app) that we have a new comment
        submitComment: function() {
            if(this.reply != '') {
                this.$emit('submit-comment', this.reply);
                this.reply = '';
            }
        }
    },
    //What the component expects as parameters
    props: ['comments', 'current_user', 'post_id']
}
</script>