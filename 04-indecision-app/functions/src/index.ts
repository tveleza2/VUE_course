/**
 * Import function triggers from their respective submodules:
 *
 * import {onCall} from "firebase-functions/v2/https";
 * import {onDocumentWritten} from "firebase-functions/v2/firestore";
 *
 * See a full list of supported triggers at https://firebase.google.com/docs/functions
 */
import {onRequest} from "firebase-functions/v2/https";
// import * as logger from "firebase-functions/logger";

// Start writing functions
// https://firebase.google.com/docs/functions/typescript

// export const helloWorld = onRequest((request, response) => {
//   logger.info("Hello logs!", {structuredData: true});
//   response.send("Hello from Firebase!");
// });

export interface ChatMessage{
    id:number;
    message:string;
    itsMine:boolean;
    image?:string;
}

export interface YesNoResponse {
    answer: string;
    forced: boolean;
    image:  string;
}



export const useMessage = onRequest(async(request, response) =>{
    const message=request.params[0];
    

    const getResponse = async() => {
        const response = await fetch("https://yesno.wtf/api");
        const data = await(response.json()) as YesNoResponse;
        return data;
    }

    const onMessage = async(text:string)=>{
        debugger;
        if(!text.endsWith("?")) return;
        const herAnswer = await getResponse();
        const resp:ChatMessage = {
            id:new Date().getTime(),
            message:herAnswer.answer,
            itsMine:false,
            image: herAnswer.image,
        };
        return resp;
    }
    const resp = await onMessage(message);
    response.json(resp)}
)
