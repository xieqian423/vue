// import { Script } from "vm";

// import Vue from 'vue'

// Vue.component('anchored-heading', {
//     render: function (createElement) {
//         return createElement(
//             'h' + this.level,
//             this.$slots.default
//         )
//     },
//     props: {
//         level: {
//             type: Number,
//             required: true
//         }
//     }
// })
<script>
export default {
    render () {
        // return createElement(
        //     'h' + this.level,
        //     this.$slots.default
        // )
        // var hText = <h${this.level}>{this.$slots.default}</h${this.level}>
        var li = ''
       if (this.list.length > 0) {
            li = this.list.map(item => {
                return <li>{item.desc}</li>
            })
        } else {
            li = <li>暂无数据</li>
        }
        return (
           <div> 
              {this.$slots.default}
               <span>{this.inputVal}</span>
               <ul>
                   <li>
                       <input type="text" value={this.inputVal} onInput={this.inputChange}/>
                   </li>
                {
                    // this.list.map(item => {
                    //     return <li>{item.desc}</li>
                    // })
                    li
                }
               </ul>
               <button onClick={this.changeVal}>改变值</button>
           </div>
        )
    },
    props: {
        level: {
            type: Number,
            required: true
        },
        list: {
            type: Array,
            required: false
        }
    },
    data () {
        return {
            inputVal: '111'
        }
    },
    methods: {
        inputChange (e) {
            this.inputVal = e.target.value
        },
        changeVal () {
            this.inputVal = '2222'
        }
    }
}
</script>
<style lang="scss" scoped>
ul{
    list-style-type: none;
}
</style>