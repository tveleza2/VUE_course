<template>
    <section>
        <h3>Counter: {{ counter }}</h3>
        <h3>Square: {{ square }}</h3>

        <div>
            <button @click="counter--">-1</button>
            <button @click="counter++">+1</button>
        </div>
    </section>
    
</template>


<script lang="ts">
    import {defineComponent, defineEmits} from 'vue'
    import { useCounter } from '@/composables/useCounter';
    export default defineComponent({

        props:{
            value:{type:Number,required:true},
        },
        setup(props){
            const {counter, square} = useCounter(props.value)
            return {
                counter:counter,
                square:square,
            }
        }
    })

</script>


