<template>
    <div>
        <div class="w-full text-xs font-medium text-blue-800 bg-gray-300 py-1 text-center">Probabilidad</div>
        <div class="w-full flex text-xs font-light text-blue-700">
            <div class="companies flex flex-col items-center w-4/12">
                <strong class="text-lg font-bold">28%</strong>
                Baja
                </div>
            <div class="opportunities flex flex-col items-center w-4/12">
                <strong class="text-lg font-bold">40.1%</strong>
                Media
            </div>
            <div class="money flex flex-col items-center  w-4/12">
                <strong class="text-lg font-bold">30.8%</strong>
                Alta
            </div>
        </div>
    </div>

</template>

<script>
    export default {
        name: "probabilities-company"
    }
</script>