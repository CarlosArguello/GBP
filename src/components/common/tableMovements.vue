<template>
    <table class="card border rounded-md text-xs w-full text-left bg-white">
        <thead>
            <tr class="border text-gray-400">
                <th></th>
                <th class="py-3 px-1">No.</th>
                <th class="py-3 px-1">Origin/Proveedor</th>
                <th class="py-3 px-1">Destino/Cliente</th>
                <th class="py-3 px-1">Encargado</th>
                <th class="py-3 px-1">Productos</th>
                <th class="py-3 px-1">Motivo/Tipo</th>
                <th class="py-3 px-1">Fecha</th>
                <th class="py-3 px-1">Costo</th>
            </tr>
        </thead>

        <tbody>
            <tr 
                v-for="({ id, provider, destination, manager, quantity, type, date, price }, index) in movements" :key="index"
                class="hover:border text-md"
            >

                <td class="py-3 text-center">
                    <span class="material-icons  text-purple-500 mr-2" v-if="index%2==0">privacy_tip</span>
                    <span class="material-icons  text-red-500 mr-2" v-else>auto_delete</span>
                    <span class="material-icons  text-blue-500 mr-2">description</span>
                </td>
                <td class="py-3 px-1 font-bold text-md">{{ id }}</td>
                <td class="py-3 px-1 text-md">{{ provider }}</td>
                <td class="py-3 px-1 text-md">{{ destination }}</td>
                <td class="py-3 px-1 text-md">{{ manager }}</td>
                <td class="py-3 px-1 text-md">{{ quantity }}</td>
                <td class="py-3 px-1 text-md">{{ type }}</td>
                <td class="py-3 px-1 text-md">{{ date }}</td>
                <td class="py-3 px-1 text-md">$ {{ price }}</td>
            </tr>
        </tbody>
    </table>
</template>

<script>
    import movements from "@data/tableMovements.json"
    export default {
        name: "table-movements",
        data: () => ({ movements })
    }
</script>