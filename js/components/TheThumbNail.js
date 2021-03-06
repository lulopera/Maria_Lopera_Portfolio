export default {
    name: "TheThumbnailComponent",

    props: ["piece"],

    template: `
    <div class="project-panel">
        <div class="p_stuff">
            <img :src='"images/" + piece.biopic' :alt="piece.name" :width="300" :height="200">
        </div>

        <h2 class="p_proj">{{ piece.project }}</h2>
        

        <button @click="showmydata">More Info</button>

        
    </div>
    `,

    methods: {
        showmydata() {
            
            this.$emit("showdata", this.piece);
        }
    }
}