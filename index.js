import{createApp} from 'vue/dist/vue.esm-browser.js'
        const app = createApp({
            template:`
            <button v-on:click="increment(6)">Increment</button>
            <p>{{count}}</p>
            <div v-if="isEven()">
            Even 
            </div>
            <div v-else>
            Odd
            </div>
            <div v-for="number in numbers">
            <div :class="getClass(number)">
            {{number}}
            </div>
            </div>
            `,
            computed:{
                evenList(){
                    return this.numbers.filter(this.isEven)
                }
            },
            data(){
                return{
                    count:0,
                    numbers:[1,2,3,4,5,6,7,8,9,10]
                }
            },
            methods:{
                getClass(number){
                    if (this.isEven(number)) {
                        return "red"
                    }
                    return "blue"
                },
                increment(val){
                    this.count +=val
                },
                isEven(number){
                    return number % 2 == 0
                }
            }
        }).mount('#app') 