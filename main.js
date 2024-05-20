const { createApp } = Vue;

createApp({
    data(){
        return {
            customMessage: "ciao"
        }
    }
}).mount("#app")