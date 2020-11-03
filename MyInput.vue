<template>
<div>
    <label for="">{{name}}</label>
      <input type="text" name="" id="">
</div>

</template>
<script>
export default {
    props:{
        name:{
            type:String,
            required:true
        }
    }
}
</script>

<style scoped>
div{
    display: flex;
    flex-direction: column;
}
      input{
       background: none;
       color: black;
       border:1px solid gainsboro;
       border-radius: 5px;
       padding: 10pxu7;
       font-size: 16px;
       cursor: pointer;
   }
</style>