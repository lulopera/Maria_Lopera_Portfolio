export default {
    name: "TheVideoComponent",

    props: ["piece"],

    template: `
         <section class="video-player">
            <i class="fas fa-film media-icon"></i><h1></h1>
            <video :src='"videos/" + piece.video' controls></video>

        </section>
        `
}