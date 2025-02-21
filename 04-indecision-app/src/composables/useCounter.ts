import {ref, computed} from 'vue';

export const useCounter = (initValue:number = 5) => {
    const counter = ref(initValue);
    const square = computed(()=>counter.value*counter.value);
    return{counter, square};
}