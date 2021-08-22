<template>
  <h2>i am a very cool component</h2>
</template>

<script lang="ts">
import Vue from 'vue';
import { Component } from 'nuxt-property-decorator';

@Component
export default class CoolComponent extends Vue {}
</script>


<style>
.nuxt-logo {
  height: 180px;
}
</style>
