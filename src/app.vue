<template>
    <div id="test">
        <p>{{test}}</p>
        <p>{{count++}}</p>
    </div>
</template>

<script>
export default {
data(){
    return{
        test:'Hello Vue.js',
        count:'0'
    }
}
}
</script>

<style>
#test{
    color: brown;
    text-align: center;
}
</style>
