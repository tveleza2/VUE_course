<template>
    <section>
        <h3>Counter: {{ counter }}</h3>
        <h3>Square: {{ square }}</h3>

        <div>
            <button class="p-5 bg-red-400 hover:bg-red-600 rounded mr-3" @click="counter--">-1</button>
            <button class="p-5 bg-red-400 hover:bg-red-600 rounded mr-3" @click="counter++">+1</button>
        </div>
    </section>
    
</template>


<script lang="ts" setup>
    import { useCounter } from '../composables/useCounter';

    interface Props{
        value:number;
    }

    const props = defineProps<Props>();

    const {counter, square} = useCounter(props.value);
</script>




