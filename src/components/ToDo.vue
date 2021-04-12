<template>
    <div class="todo-container">
        <Header></Header>
        <Body>
            <template v-slot:pane>
                <Pane></Pane>
            </template>
            <template v-slot:work>
                <WorkArea></WorkArea>
            </template>
        </Body>
        <Footer></Footer>
    </div>
</template>

<script>
    import Header from "./Header";
    import Body from "./Body";
    import Footer from "./Footer";
    import Pane from "./Pane";
    import WorkArea from "./WorkArea";

    export default {
        name: "ToDo",
        components: {WorkArea, Pane, Footer, Body, Header}
    }
</script>

<style scoped>

    .todo-container {
        height: 100vh;
        display: flex;
        flex-direction: column;
    }

</style>