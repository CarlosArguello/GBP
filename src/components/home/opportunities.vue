<template>
    <div class="grid gap-4 grid-cols-2">
        <InfoCompany />

        <div class="grid gap-4 grid-cols-2">
            <ProbabilitiesCompany />
            <div class="flex justify-center items-center">
                <button class="py-3 px-8 uppercase text-xs font-light text-white bg-green-500">Filtrar</button>
            </div>
        </div>
    </div>
</template>

<script>
    import InfoCompany from "@common/infoCompany"
    import ProbabilitiesCompany from "@common/probabilitiesCompany"
    export default {
        name: "opportunities",
        components:{
            InfoCompany,
            ProbabilitiesCompany
        }
    }
</script>