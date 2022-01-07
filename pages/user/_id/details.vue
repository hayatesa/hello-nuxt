<template>
    <div class="container-main">
        <h1>用户详情</h1>
        <div>用户ID：{{$route.params.id}}</div>
        <div>用户名：{{name}}</div>
        <input v-model="newName" @input="updateName"/>
    </div>
</template>
<script lang="ts">
import Vue from "vue";
import {mapState, mapMutations} from "vuex"
export default Vue.extend({
    data () {
        return {
            newName: ''
        }
    },
    methods: {
        ...mapMutations(['CHANGE_NAME']),
        updateName () {
            this.CHANGE_NAME(this.newName)
        }
    },
    computed: {
        ...mapState(['name'])
    }
})
</script>