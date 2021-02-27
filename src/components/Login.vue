<template>
    <div class="vertical-center" style="margin: 30px 15px">
        <div class="inner-block">
            <div class="vue-tempalte">
                <form>
                    <h3>Sign In</h3>

                    <div class="form-group">
                        <label>Email address</label>
                        <input type="email" class="form-control form-control-lg" v-model="email"/>
                    </div>

                    <div class="form-group">
                        <label>Password</label>
                        <input type="password" class="form-control form-control-lg" v-model="password"/>
                    </div>

                    <button type="button" class="btn btn-dark btn-lg btn-block" v-on:click="login()">Sign In</button>

                    <p class="forgot-password text-right mt-2 mb-4">
                        <router-link to="/forgot-password">Forgot password ?</router-link>
                    </p>

                </form>
            </div>
        </div>
      </div>
    
</template>
<script>
import firebase from "firebase";

export default {
    data() {
        return {
            loginForm: {
                email: "",
                password: "",
                errors: []
            },
        };
    },
    methods: {
        login: function () {
            this.checkForm()
            if (this.errors.length != 0) {
                this.$swal({title: 'Form Error', text:this.errors[0]});
                return
            }
            firebase
                .auth()
                .signInWithEmailAndPassword(this.email, this.password)
                .then((user) => {
                    this.$swal({
                        title: `Welcome ${user.user.email}`,
                        text: 'You have succesfully logged in',
                        showCancelButton: false,
                        confirmButtonColor: "#DD6B55",
                        confirmButtonText: "Thanks!",
                        closeOnConfirm: false
                    });
                    this.$router.push("/home");
                })
                .catch((err) => {
                    this.$swal({title: `Error Code: ${err.code}`, text: err.message});
                });
        },

        checkForm(){
            this.errors = []
            if (this.validateEmail() == false) {
                this.errors.push("Really? is that even an email address?")
            }
            if (this.password == null || this.password.length < 6) {
                this.errors.push("Why you being lazy to put your password? did you forget it again?")
            }
        },

        validateEmail() {
            const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
            return re.test(String(this.email).toLowerCase());
        }
    },
}
</script>