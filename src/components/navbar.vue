<template>
  <div>
   <b-navbar toggleable="lg" type="dark" variant="dark">
        <b-container>
            <router-link to="/"><a href="/"> <b-navbar-brand>BlogApp</b-navbar-brand></a></router-link>
            <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
            <b-collapse id="nav-collapse" is-nav>
              <!-- Right aligned nav items -->
              <b-navbar-nav class="ml-auto">
                <router-link to="/"><a href="/"> <b-navbar-brand v-if="isLogged === false">Home</b-navbar-brand></a></router-link>
                <router-link to="/about"><a href="about"> <b-navbar-brand v-if="isLogged === false">About</b-navbar-brand></a></router-link>
                <router-link to="/login"><a href="/login"> <b-navbar-brand v-if="isLogged === false">Login</b-navbar-brand></a></router-link>
                <router-link to="/registration"><a href="/registration"> <b-navbar-brand v-if="isLogged === false"> Registration</b-navbar-brand></a></router-link>
                <b-navbar-brand v-if="isLogged === true">Profile</b-navbar-brand>
                <b-navbar-brand @click="logout" v-if="isLogged === true" >Logout</b-navbar-brand>
              </b-navbar-nav>
           </b-collapse>
          </b-container>
      </b-navbar>
    </div>  
</template>

<script>
import { EventBus } from './../even-bus';
export default {
  template: 'navbar',
  name: 'navbar',
  data () {
    return {
      isLogged: false
    }
  },
  created () {
    EventBus.$on('logged', value => {
      console.log(value)
      this.isLogged = this.checkIfIsLogged()
    })
  },
  methods: {
    logout () {
      localStorage.removeItem('token')
      this.isLogged = this.checkIfIsLogged()
      this.$router.push('login')
    },
    checkIfIsLogged () {
      let token = localStorage.getItem('token')
      if (token) {
        return true
      } else {
        return false
      }
    }
  }
}

</script>