const {createApp,ref} = Vue;



const app = createApp({

    setup(){
        const message = ref("I'm batman");
        const author = ref("Bruce Wayne");
        
        const changeQuote = () => {
            message.value = "Hola, soy Goku";
            author.value = "Príncipe de los sayayin"
        };
        return {
            message,
            author,
            changeQuote,
        };
    }

});



app.mount('#myApp');





