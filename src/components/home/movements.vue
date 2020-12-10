<template>
    <div>
        <div class="header-movements flex justify-between items-end mb-4">
            <h2 class="text-xl font-medium ml-2">Movimientos</h2>
            <div class="filters-movements flex items-end space-x-2">
                <input type="text" class="py-2 px-4 w-80 shadow-md outline-none text-sm" placeholder="Buscar registro, encargado, cliente, etc">
                <button class="material-icons p-2 shadow-md text-gray-400 text-md">filter_alt</button>
                <button class="px-4 py-2 text-sm font-medium text-white bg-blue-900">Nuevo movimiento</button>
            </div>
        </div>
        <Movements />
    </div>
</template>

<script>
    import Movements from "@common/tableMovements"
    export default {
        name: "movements",
        components: { 
            Movements
        }
    }
</script>