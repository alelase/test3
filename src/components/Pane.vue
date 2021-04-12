<template>
    <div class="pane-container">pane!

        <div v-for="index in 100" :key="index">
            hola! {{index}}
        </div>
    </div>
</template>

<script>
    export default {
        name: "Pane"
    }
</script>

<style scoped>
    .pane-container {
        width: 220px;
        padding-top: 16px;
        border-right: 1px solid #3467ac;
        overflow: auto;
    }
</style>