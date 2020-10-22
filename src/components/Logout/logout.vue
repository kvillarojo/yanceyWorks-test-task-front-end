<template>
    <button class="button" @click="handleSignOut"> {{ btn_name }}</button>
</template>

<script>

export default {
    props: {
        employee_id: Number,
        btn_name: String
    },
    methods: {
        handleSignOut() {
            this.$store.dispatch("auth/logout").then(() => {
                if (this.$router.currentRoute.name !== "home") {
                    return this.$router.push({ name: "Login" });
                }
            });
        }
    }
}
</script>
