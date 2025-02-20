<template>
    <h1 class="text-3xl font-bold underline">Mi primera app</h1>
    <hr>
    <MyCounter :value="5"/>
    <!-- <div class="bg-red-500 p-10 text-white"> -->
    <!-- Tailwind is working!
  </div> -->
    <MyCounterScript :value="7"/>
    <MyCounterScript2 :value="9"/>
</template>


<script lang="ts" setup>
    import MyCounter from './components/MyCounter.vue';
    import MyCounterScript from './components/MyCounterScript.vue';
    import MyCounterScript2 from './components/my-counter-script/MyCounterScript2.vue';
    
    

</script>


