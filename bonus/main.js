const { createApp } = Vue;

createApp({
    data(){
        return {
            customMessage: "ciao",
            customImage: "https://i.etsystatic.com/10127509/r/il/d0524c/1457330456/il_fullxfull.1457330456_izda.jpg"
        }
    }
}).mount("#app")