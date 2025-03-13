import { sleep } from "@/helpers/sleep"
import type { ChatMessage } from "@/interfaces/chat-message.interface"
import type { YesNoResponse } from "@/interfaces/yes-no-response"
import { ref } from "vue"

export const useChat = () =>{
    
    const messages = ref<ChatMessage[]>([
      ])

    
    const getHerResponse = async() =>{
        const resp = await fetch("https://yesno.wtf/api");
        const data = (await resp.json()) as YesNoResponse;
        return data;
    }
    
    
      const onMessage = async(text:string) =>{
        if(text.length===0) return;
        messages.value.push({
          id: new Date().getTime(),
          itsMine:true,
          message:text,
        })
        if(!text.endsWith('?')) return;
        
        await sleep();
        const{answer,image} = await getHerResponse()
        messages.value.push({
            id: new Date().getTime(),
            itsMine:false,
            message: answer,
            image: image,
        })
      };

    return {
        //Properites
        messages,

        //Methods
        onMessage,
    }
}


export const useChatFunctions = () =>{
    
  const messages = ref<ChatMessage[]>([
    ])

  
  
    const onMessage = async(text:string) =>{
      if(text.length===0) return;
      messages.value.push({
        id: new Date().getTime(),
        itsMine:true,
        message:text,
      })

      
      const encodedURL = `http://127.0.0.1:5001/hello-world-3bc97/us-central1/useMessage/message=${encodeURIComponent(text)}`;
      console.log(encodedURL);
      await sleep();
      fetch(encodedURL)
        .then(resp =>resp.json())
        .then((body:ChatMessage)=>{
          messages.value.push(body);
          // console.log(body);
        })
        .catch((body)=>{
          console.log("Promise not fullfilled" + body)
        });
    };
    
  return {
      //Properites
      messages,

      //Methods
      onMessage,
  }
}


// "http://127.0.0.1:5001/hello-world-3bc97/us-central1/useMessage/message=%3F"