<template>
  <div class="chart-container">
    <chart height="100%" width="100%"/>
  </div>
</template>

<script>
import Chart from '@/components/Charts/adminList'

export default {
  name: 'adminList',
  components: { Chart }
}
</script>

<style scoped>
/*.chart-container{*/
  /*position: relative;*/
  /*width: 100%;*/
  /*height: calc(100vh - 84px);*/
/*}*/

/*修改为*/
.chart-container{
  position: relative;
  width: 100%;
  height: 100vh;
  /*height: calc(100vh - 84px);*/
  background-color: yellow;
}


</style>

