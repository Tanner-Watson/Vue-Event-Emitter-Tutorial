Vue.component('badge', {
    template: 
        `<button type="button" class="btn btn-primary position-relative">
            Clicked
            <span class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                {{clicktotal}}
                <span class="visually-hidden"></span>
            </span>
        </button>`,

        props:['clicktotal']


})


Vue.component("doggycards", {
    template:
        `<div class="card" style="width: 18rem;">
            <img v-bind:src=dogobj.img class="card-img-top" alt="...">
                <div class="card-body">
                    <h5 class="card-title">{{dogobj.title}}</h5>
                    <p class="card-text">{{dogobj.text}}</p>
                    <button class="btn btn-primary" v-on:click=buttonClicked>Go somewhere</button>
                    <p>{{clicked}}</p>
                </div>
        </div>`,

    // creates an attribute called title....changed the whole file to use the dogobj though....
    props: ['title', 'dogobj'],
    data: function () {
        return {
            clicked: 0
        }
    },
    methods:
    {
        buttonClicked() {
            this.clicked++;
            //not the best way to work with outside components...use event emitter
            //app.clickTotal++;

            this.$emit('buttclick', this.dogobj)
        }
    }

})

const app = new Vue({
    el: "#app",
    data:
    {
        pageTitle: "Bootstrap Cue Vue Component",
        dogs:
            [
                { title: "German Shepard", img: "images/germ.jpg", text: "big ole cutie" },
                { title: "Lab?", img: "images/gold.jpg", text: "big ole cutie" },
                { title: "Pug", img: "images/gross.jpg", text: "Not you" },
            ],

        clickTotal: 0
    },

    methods:
    {
        buttClicked(event){
            // alert("Clicked");
            this.clickTotal++;
            console.log(event);
            event.text = "It Changed!"
        }
    }
})