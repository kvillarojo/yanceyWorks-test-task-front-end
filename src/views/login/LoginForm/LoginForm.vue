<template>
    <div class="LoginForm">
        <form @submit.stop.prevent="submit">
            <div class="field">
                <div class="control">
                    <input
                        class="input is-large"
                        type="email"
                        placeholder="Your Email"
                        autofocus=""
                        v-model="email"
                    >
                </div>
            </div>

            <div class="field">
                <div class="control">
                    <input
                        class="input is-large"
                        type="password"
                        placeholder="Your Password"
                        v-model="password"
                    >
                </div>
            </div>
            <button class="button is-block is-info is-large is-fullwidth">
                Login
            </button>
        </form>
    </div>
</template>

<script>

export default {
    props: {
    },
    data () {
        return {
            email: '',
            password: '',
        }
    },
    methods: {
        submit() {
            this.$store
                .dispatch("auth/login", {
                    email: this.email,
                    password: this.password
                })
                .then(() => {
                    this.errors = {};
                    return this.$router.push(
                        {
                            name: "Home"
                        },
                        () => {}
                    );
                })
                .catch(error => {
                    this.errors = this.$_.get(error, "response.data.errors", {});
                })
                .finally(() => {
                    this.isFormSubmitting = false;
                });
        }
    }

};
</script>
