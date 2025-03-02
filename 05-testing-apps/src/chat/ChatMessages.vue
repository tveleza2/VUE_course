<template>

    <div ref="chatRef" class="flex-1 overflow-y-auto p-4">
        <div class="flex flex-col space-y-2">
            <ChatBubble v-for="msg in messages" 
            :key="msg.id" 
            v-bind="msg"/>
            
        </div>
    </div>
    <!-- v-for="{message,itsMine,image} in messages" -->
</template>


<script setup lang="ts">
import { onMounted, ref, watch } from 'vue';
import ChatBubble from './ChatBubble.vue';
import type { ChatMessage } from '@/interfaces/chat-message.interface';

interface Props{
    messages:ChatMessage[];

}

const prop = defineProps<Props>();

const messagesDiv = document.querySelector(".flex-1");


const chatRef = ref<HTMLDivElement|null>(null);

watch(prop.messages,() => {
    console.log("Messages cambió: "+prop.messages.length);
    setTimeout(()=>{
        chatRef.value?.scrollTo({
        top:chatRef.value.scrollHeight,
        behavior:'smooth',
    });
    },50)
    
});



</script>