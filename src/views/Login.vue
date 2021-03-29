<template>
    <section class="section section-shaped section-lg my-0">
        <div class="shape shape-style-1 bg-gradient-default">
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
        </div>
        <div class="container pt-lg-md">
            <div class="row justify-content-center">
                <div class="col-lg-5">
                    <card type="secondary" shadow
                          header-classes="bg-white pb-5"
                          body-classes="px-lg-5 py-lg-5"
                          class="border-0">
                        <!-- <template>
                            <div class="text-muted text-center mb-3">
                                <small>Sign in with</small>
                            </div>
                            <div class="btn-wrapper text-center">
                                <base-button type="neutral">
                                    <img slot="icon" src="img/icons/common/github.svg">
                                    Github
                                </base-button>

                                <base-button type="neutral">
                                    <img slot="icon" src="img/icons/common/google.svg">
                                    Google
                                </base-button>
                            </div>
                        </template> -->
                        
                        <template>
                            <div class="text-center text-muted mb-4">
                                <small>Sign in with credentials</small>
                            </div>
                            <form role="form">
                                <base-input alternative
                                            class="mb-3"
                                            v-model="email"
                                            placeholder="Email"
                                            addon-left-icon="ni ni-email-83">
                                </base-input>
                                <base-input alternative
                                            v-model="password"
                                            type="password"
                                            placeholder="Password"
                                            @keyup.enter="login"
                                            addon-left-icon="ni ni-lock-circle-open">
                                </base-input>
                                <div class="text-center">
                                    <base-button @click="login" type="primary" class="my-4">Sign In</base-button>
                                </div>
                            </form>
                        </template>
                    </card>
                    <div class="row mt-3">
                        <div class="col-6">
                            <a href="#" class="text-light">
                                <small>Forgot password?</small>
                            </a>
                        </div>
                        <div class="col-6 text-right">
                            <a href="#" class="text-light">
                                <small>Create new account</small>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>
<script>
import { mapActions } from "vuex";
export default {
  name: "login",
  data() {
    return {
      email: "",
      password: ""
    };
  },
  methods: {
    ...mapActions(["signInAction"]),
    resetError() {
      this.validationErrors = [];
    },
    // validate() {
    //   // Clear the errors before we validate again
    //   this.resetError();

    //   // email validation
    //   if (!this.email) {
    //     this.validationErrors.push("<strong>E-mail</strong> cannot be empty.");
    //   }
    //   if (/.+@.+/.test(this.email) != true) {
    //     this.validationErrors.push("<strong>E-mail</strong> must be valid.");
    //   }
    //   // password validation
    //   if (!this.password) {
    //     this.validationErrors.push("<strong>Password</strong> cannot be empty");
    //   }
    //   if (/.{6,}/.test(this.password) != true) {
    //     this.validationErrors.push(
    //       "<strong>Password</strong> must be at least 6 characters long"
    //     );
    //   }
    //   // when valid then sign in
    //   if (this.validationErrors.length <= 0) {
    //     this.signIn();
    //   }
    // },
    login() {
      this.signInAction({ email: this.email, password: this.password });
    }
  }
};
</script>
<style>
</style>
