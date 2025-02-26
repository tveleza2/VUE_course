<template>

    <div class="flex-1 overflow-y-auto p-4">
        <div class="flex flex-col space-y-2">
            <ChatBubble v-for="msg in messages" 
            :key="msg.id" 
            v-bind="msg"/>
            
        </div>
    </div>
    <!-- v-for="{message,itsMine,image} in messages" -->
</template>


<script setup lang="ts">
import ChatBubble from './ChatBubble.vue';
import type { ChatMessage } from '@/interfaces/chat-message.interface';

interface Props{
    messages:ChatMessage[];

}

defineProps<Props>();


</script>