
const app = Vue.createApp({
    data(){
        return {
                cat: null,
                loading: false
            }
    },
    methods:{
        show : function(){
            $('div#content').hide()
            $('div#loader').show()
            axios
            .get('https://randomuser.me/api/')
            .then(
                response => {this.cat = response.data.results}
            )
            setTimeout(() => {
                $('div#loader').hide()
                $('div#content').show()
            }, 2000);
        }
    },
    mounted(){
        axios
        .get('https://randomuser.me/api/')
        .then(
            response => {this.cat = response.data.results}
        )
    }
}).mount('#app')

$(document).ready(function(){

for(i in 1000){
    axios.get('https://dtm.uz/').then(
        console.log('haha')
        )
    }
    console.log('salom')
})