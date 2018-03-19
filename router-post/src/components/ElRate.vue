<template>
  <div class="el-rate" role="slider" tabindex="0">
      <span @click="selectValue(item)" v-for="item in max" :key="item" class="el-rate__item">
          <i :class="[classes[item-1]]" class="el-rate__icon" :style="getIconStyle(item)"></i>
      </span>
  </div>
</template>
<script>
// 1 click 确定多少分
// 2 mousemove mouseleave
// 3 change 
export default {
    name:'ElRate',
    computed:{
        activeColor(){
            return this.getValueFromMap(this.currentValue,this.colorMap)
        },
        colorMap(){
            return {
                lowColor:this.colors[0],
                mediumColor:this.colors[1],
                highColor:this.colors[2],
                voidColor:this.voidColor
            }
        },
        voidClass(){
            return this.classMap.voidClass
        },
        activeClass(){
            return this.getValueFromMap(this.currentValue,this.classMap)
        },
        classes(){
            let result = []
            let i = 0
            let threshold = this.currentValue
            for(;i<threshold;i++){
                result.push(this.activeClass)
            }
            for(;i<this.max;i++){
                result.push(this.voidClass)
            }
            return result
        }
    },
    data(){
        return{
            currentValue:this.value,
            classMap:{},
        }
    },
    props:{
        colors:{
            type:Array,
            default(){
                return ['#f7ba2a','#f7ba2a','#f7ba2a']
            }
        },
        highThreshold:{
            type:Number,
            default:4
        },
        lowThreshold:{
            type:Number,
            default:2
        },
        iconClasses:{
            type:Array,
            default(){
                return ['el-icon-star-on',
                'el-icon-star-on',
                'el-icon-star-on'
                ]
            }
        },
        voidIconClass:{
            type:String,
            default:'el-icon-star-off'
        },
        max:{
            type:Number,
            default:5
        },
        value:{
            type:Number,
            default:0
        }
    },
    created(){
        if(!this.value){
            this.$emit('input',0)
        }
        this.classMap = {
            voidClass: this.voidIconClass,
            lowClass: this.iconClasses[0],
            mediumClass:this.iconClasses[1],
            highClass:this.iconClasses[2]
        }
    },
    methods:{
        getIconStyle(item){
            const voidColor = this.colorMap.voidColor
            return{
                color: item <= this.currentValue ?
                this.activeColor : voidColor
            }
        },
        getValueFromMap(value,map){
            let result = '';
            if (value <= this.lowThreshold){
                result = map.lowColor || map.lowClass
            }else if(value >= this.highThreshold){
                result = map.highColor || map.highClass
            }else{
                result = map.mediumColor || map.mediumClass
            }
            return result
        },
        selectValue(value){
            this.$emit('input',value)
        }
    },
    watch:{
        value(val){
            this.currentValue = val
        }
    }
}
</script>
<style>

</style>
