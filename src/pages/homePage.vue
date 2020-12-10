<template>
    <AppLayout>
        <Title />
        <FiltersOpportunities />
        <Opportunities />
        <FiltersProduct />
        <MainSection />
        <Movements />
    </AppLayout>
</template>

<script>
    import AppLayout from "@layouts/app.layout"
    import Title from "@components/home/title"
    import FiltersOpportunities from "@common/filtersOpportunities"
    import FiltersProduct from "@common/filtersProduct"
    import Opportunities from "@components/home/opportunities"
    import MainSection from "@components/home/mainSection"
    import Movements from "@components/home/movements"

    export default {
        name: "home-page",
        components: { 
            AppLayout,
            Title,
            FiltersOpportunities,
            FiltersProduct,
            Opportunities,
            MainSection,
            Movements
        }
    }
</script>