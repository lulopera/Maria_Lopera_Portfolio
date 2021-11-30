export default {
    name: "TheLigthboxComponent",

    props: ["piece"],

    // data: function() {
    //     return {
    //         activeComponent: AudioComponent
    //     }
    // },

    template: `
    <section>
        <i @click="closeMe" class="fa-solid fa-circle-xmark"></i>
        <h1>{{ piece.project}}</h1>
        <nav>
        <li><span>{{piece.category}}</span></li>
        <li><span>{{piece.description}}</span></li>
        <li><span>{{piece.technical}}</span></li>
    
    
        </nav>


    </section>
    `
    ,

    methods: {
        closeMe() {
            this.$emit("closelb");
        }
    }
}