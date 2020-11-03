<template>
<div>
    <my-input
    name="Username"
    />
    <my-button
    color="white"
    background="darkslateblue"
    disabled="true"
    />
</div>

</template>
<script>
import MyButton from "./MyButton.vue"
import MyInput from "./MyInput.vue"
export default {
    
    components:{
        MyButton,
        MyInput
    }
}
</script>

<style>
  body{
      font-family: Product Sans;
  }
</style>