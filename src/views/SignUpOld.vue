<template>
    <div class="SignUp">
        <h3 class="text-center text-white pt-5">Login form</h3>
        <div class="container">
            <div id="login-row" class="row justify-content-center align-items-center">
                <div id="login-column" class="col-md-6">
                    <div  class="col-md-12 bg-danger" v-if="errors.length">
                        <p v-for="error in errors" v-bind:key="error">{{ error }}</p>
                    </div>
                    <div id="login-box" class="col-md-12">
                        <form @submit.prevent="submitForm" id="login-form" class="form" action="" method="post">
                            <h3 class="text-center text-info">Login</h3>
                            <div class="form-group">
                                <label for="username" class="text-info">Email:</label><br>
                                <input v-model="email" type="text" name="email" id="email" class="form-control">
                            </div>
                            <div class="form-group">
                                <label for="username" class="text-info">Username:</label><br>
                                <input v-model="username" type="text" name="username" id="username" class="form-control">
                            </div>
                            <div class="form-group">
                                <label for="password" class="text-info">Password:</label><br>
                                <input v-model="password" type="text" name="password" id="password" class="form-control">
                            </div>
                            <div class="form-group">
                                <label for="password2" class="text-info">Repeat password:</label><br>
                                <input v-model="password2" type="text" name="password" id="password" class="form-control">
                            </div>
                            <div class="form-group">
                                <label for="remember-me" class="text-info"><span>Remember me</span> <span><input id="remember-me" name="remember-me" type="checkbox"></span></label><br>
                                <input type="submit" name="submit" class="btn btn-info btn-md" value="submit">
                            </div>
                            <div id="register-link" class="text-right">
                                Or <router-link to="/login" class="text-info">click here</router-link> to log-in
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script charset="utf-8">
import axios from "axios";
import Vue from 'vue'

export default Vue.extend({
    name: 'SignUp',
    data(){
        return {
            email: '',
            username: '',
            password: '',
            password2: '',
            errors: [],
        }
    },
    methods: {
        submitForm(){
            this.errors = []

            if(this.username === ''){
                this.errors.push('The username is missing')
            }
            if(this.email === ''){
                this.errors.push('The email is missing')
            }
            if(this.password === ''){
                this.errors.push('The password is missing')
            }
            if(this.password2 !== this.password){
                this.errors.push("The passwords doesn't match")
            }

            if(!this.errors.length){
                const formData = {
                    email: this.email,
                    username: this.username,
                    password: this.password,
                }

                /* First get the csrf_token from django */
                axios
                    .get('/get-token')
                    .then(response => {
                        const csrf_token = response.data.csrf_token
                        /* add csrf_token to axios headers */
                        axios.defaults.headers.common['X-CSRFToken'] = csrf_token
                    })
                    .catch(error => {
                        // TODO: Display toast message will error message
                        console.log(error)
                    })

                axios
                    .post("auth/signup", formData)
                    .then(response => {
                        /* TODO: Faire un toast pour dir afficher le msg de success */
                        console.log(response.data.key)
                        const token = response.data.auth_token

                        this.$store.commit('setToken', token)

                        axios.defaults.headers.common["Authorization"] = "Token" + token

                        localStorage.setItem("token", token)

                        const toPath = this.$route.query.to || '/cart'

                        this.$router.push(toPath)
                    })
                    .catch(error => {
                        if(error.response) {
                            for(const property in error.response.data){
                                this.errors.push(property+": "+error.response.data[property])
                            }
                            console.log(JSON.stringify(error.response.data))
                        } else if (error.message) {
                            this.errors.push('Something wrong, Please again'),
                            console.log(JSON.stringify(error))
                        }
                    })
                }

        },
    },
})
</script>
