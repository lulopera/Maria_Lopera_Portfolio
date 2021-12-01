import TheVideoComponent from "./TheVideoComponent.js";
export default {
    name: "TheLigthboxComponent",

    props: ["piece"],

    computed:{
        activeComponent: function() {
            return `${this.piece.mediaType + "Component"}`;
        }
    },


    template: `
    <section>
        <i @click="closeMe" class="fa-solid fa-circle-xmark"></i>
        

        <component v-if="piece.mediaType":is="activeComponent"></component>
        
        <h1>{{ piece.project}}</h1>
        <nav>
        <li><span>{{piece.category}}</span></li>
        <li><span>{{piece.description}}</span></li>
        <li><span>{{piece.technical}}</span></li>
    
    
        </nav>


    </section>
    `,

    methods: {
        closeMe() {
            // document.querySelector(".ligthbox").classList.remove('visible');
            this.$emit("closelb");
        }
    },

    components: {
        VideoComponent: TheVideoComponent
    },

    
}