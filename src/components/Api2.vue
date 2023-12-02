<template>
    <div v-if="infoGeneral.length > 0 && infoPersonal.length > 0" class="m-auto w-11/12 mb-5">

        <div class="w-full mt-6 bg-gradient-to-r from-slate-300 to-gray-200 p-3 rounded-lg mt-2">
            <h1 class="text-2xl text-center font-bold text-black">INFORMACION PERSONAL</h1>

            <div v-for="(data, index) in infoPersonal" :key="index" class="bg-white p-4 shadow-md rounded-md">
                <div v-if="data.IEM">
                    <p>IEM - Listas: {{ data.IEM.listas }}, Faltantes: {{ data.IEM.faltantes }}</p>
                </div>
                <div v-if="data.IER">
                    <p>IER - Listas: {{ data.IER.listas }}, Faltantes: {{ data.IER.faltantes }}</p>
                </div>
                <div v-if="data.II">
                    <p>II - Listas: {{ data.II.listas }}, Faltantes: {{ data.II.faltantes }}</p>
                </div>
                <div v-if="data.ISC">
                    <p>ISC - Listas: {{ data.ISC.listas }}, Faltantes: {{ data.ISC.faltantes }}</p>
                </div>
                <!-- Otros datos que desees mostrar en la tarjeta -->
            </div>

        </div>
        <div class="w-full mt-6 bg-gradient-to-r from-slate-300 to-gray-200 p-3 rounded-lg mt-2">
            <h1 class="text-2xl text-center font-bold text-black">INFORMACION PERSONAL</h1>
            <div v-for="(data, index) in infoPersonal" :key="index" class="bg-white p-4 shadow-md rounded-md">
                <div v-if="data.IER">
                    <p>IER - Listas: {{ data.IER.listas }}, Faltantes: {{ data.IER.faltantes }}</p>
                </div>
            </div>
            
        </div>
    </div>

    <div v-else>
        <p>No hay datos de alumnos evaluados disponibles.</p>
    </div>
</template>


<script setup>
import { onMounted } from 'vue'
import { ref } from 'vue'

// Definir variables reactivas
const infoGeneral = ref([]) // Almacena datos de Información General
const infoPersonal = ref([]) // Almacena datos de Información Personal

// Variables para mostrar en la plantilla
const totalEvaluados = ref(0)
const totalAlumnos = ref(0)
const periodo = ref('')

// Función para obtener datos de la API
async function fetchData(apiUrl, infoArray) {
    try {
        const response = await fetch(apiUrl)
        const data = await response.json()
        infoArray.value.push(data) // Almacenar datos en el array correspondiente

        // Actualizar variables para mostrar en la plantilla
        totalEvaluados.value += data.alEvaluados || 0
        totalAlumnos.value += data.alTotal || 0
        if (!periodo.value) {
            periodo.value = data.periodo || ''
        }

        console.log('Datos recibidos:', data)
        // Imprimir datos adicionales en la consola
        if (data.ObjectIE) {
            console.log('ObjectIE:', data.ObjectIE)
        }
        if (data.IEM) {
            console.log('IEM:', data.IEM)
        }
        if (data.IER) {
            console.log('IER:', data.IER)
        }
        if (data.II) {
            console.log('II:', data.II)
        }
        if (data.ISC) {
            console.log('ISC:', data.ISC)
        }
    } catch (error) {
        console.error('Error al obtener datos:', error)
    }
}

// Función que se ejecuta al montar el componente
onMounted(async () => {
    // Obtener datos de la primera API
    await fetchData('https://sitmotul.com.mx/api/statusEval', infoGeneral)

    // Obtener datos de la segunda API (puedes cambiar la URL según sea necesario)
    await fetchData('https://sitmotul.com.mx/api/statusEvalIng', infoPersonal)
})
</script>