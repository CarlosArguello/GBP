<template>
    <div class="card border shadow-lg px-3 pt-8 rounded-3xl text-md bg-white">
        <h3 class="text-xl font-bold flex justify-end text-blue-800">OP-0096</h3>
        <img src="/img/maizena.jpeg" class="w-full mt-1">

        <div class="description">
            <div class="mt-6 mb-2">
                <h4 class="font-bold text-center uppercase text-blue-800 text-md">Lactosa</h4>
                <p class="country font-light text-center text-gray-400 text-sm">Antiguo Cuscatlan, el salvador</p>
            </div>

            <div class="border-t">
                <p class="font-bold mt-2 text-blue-800 text-md truncate">BOLSA POUCH PARA QUESO MOZARELLA</p>
                <ul class="my-2">
                    <li class="text-sm font-light text-blue-400 flex justify-between mb-1">
                        <span class="mr-2 text-blue-800">Mensual</span>
                        40,000 Millares 5.304,00 Usd
                    </li>

                    <li class="text-sm font-light text-blue-400 flex justify-between">
                        <span class="mr-2 text-blue-800">Identificada</span>
                        Hace 335 dias
                    </li>
                </ul>

                <p class="font-bold text-center mb-2 text-gray-600 text-md">Hayssil Ayala</p>

                <div class="border-t border-b flex text-sm">
                    <div class="w-1/2 flex flex-col items-center font-bold py-1">
                        85%
                        <span class="text-xs font-light">Vista para correr m...</span>
                    </div>

                    <div class="w-1/2  flex justify-center items-center">
                        Alta
                    </div>
                </div>

                <p class="py-2 text-center font-bold text-blue-800 text-md">Gastos 0,00 Usd</p>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "card-product"
    }
</script>