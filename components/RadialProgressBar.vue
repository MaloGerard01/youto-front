<template>
  <div>
    <Doughnut
      :data="chartData"
      :options="chartOptions"
    />
  </div>
</template>

<script lang="ts" setup>
import { Chart as ChartJS, Title, ArcElement, CategoryScale, LinearScale } from 'chart.js'
import { Doughnut } from 'vue-chartjs'

// Register
ChartJS.register(Title, ArcElement, CategoryScale, LinearScale)


const chartData = ref({
  datasets: [
    {
      data: [40,50],
    backgroundColor: ['rgba(243, 148, 84, 1)','rgba(211, 211, 211, 1)'],
      borderColor: 'rgba(75, 192, 192, 0)',
      borderWidth: 1,
    },
  ],
})
const chartOptions = ref({
  responsive: true,
  maintainAspectRatio: false,
  cutout: 110,
})

</script>