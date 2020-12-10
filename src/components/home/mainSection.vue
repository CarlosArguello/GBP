<template>
    <div class="container-products grid gap-4 grid-cols-3 xl:grid-cols-5">

        <CardProduct v-for="key in [1,2,3,4,5]" :key="key">

        </CardProduct>
    </div>
</template>

<script>
import CardProduct from "@common/cardProduct"
export default {
    name: "main-section",
    components: {
        CardProduct
    }
}
</script>