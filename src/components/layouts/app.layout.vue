<template>
    <div class="w-full bg-gray-50">
        <NavBar />
        <div class="py-10 px-12 space-y-12">
            <slot></slot>
        </div>
    </div>
</template>

<script>
    import NavBar from "@common/navBar"
    export default {
        name: "app-layout",
        components:{
            NavBar
        }

    }
</script>