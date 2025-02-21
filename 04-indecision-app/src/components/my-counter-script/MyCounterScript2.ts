import {defineComponent} from 'vue'
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