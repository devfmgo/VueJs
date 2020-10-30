import{createApp} from 'vue/dist/vue.esm-browser.js'
const Num  = {
    props:{
        number:{
            type:Number,
            required:true
        }
    },
    template:`
    <div :class="getClass(number)">{{number}}</div>
    `,
    methods:{
        getClass(number){
            if (this.isEven(number)) {
                return "red"
            }
            return "blue"
        },
        isEven(number){
            return number % 2 == 0
        }
    }
} 
const app = createApp({
    components:{
        Num
    },
            template:`
            <button @click="increment(5)">Increment</button>
            <p>{{count}}</p>
            <num v-for="number in numbers" :number="number"/>
            </div>
            <input type="checkbox" v-model="value" value="a"/>
            <input type="checkbox" v-model="value" value="b"/>
            {{value}}
            <div v-if="error">{{error}}</div>
            `,
            computed:{
               
                error(){
                    if (this.value.length < 7) {
                        return "Too short"
                    }
                }
            },
            data(){
                return{
                    count:0,
                    numbers:[1,2,3,4,5,6,7,8,9,10],
                    value:'User',
                    value:['a']
                }
            },
            methods:{
                input($evt){
               this.value = $evt.target.value
                },
                
                increment(val){
                    this.count +=val
                }
            }
        }).mount('#app') 