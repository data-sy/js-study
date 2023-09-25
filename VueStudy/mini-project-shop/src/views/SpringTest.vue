<template>
    <div>
        <h1> {{ connectData }}</h1>
    </div>
</template>
<script>
    export default {
        name: "SpringTest",
        components: [],
        data() {
            return {
                connectData: "",
            };
        },
        methods: {
            get() {
                this.axios.get("/api/v1/hello").then((response) => {
                    this.connectData = response.data;
                });
            }
        },
        mounted(){
            this.get();
        }
    }
</script>
