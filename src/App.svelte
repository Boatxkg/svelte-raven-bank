<script lang="ts">
    import { nui } from "./stores/stores";
    import Main from "./lib/main.svelte";
    
    function updateState(){
        nui.update(state=>({...state, isOpenNUI: !state.isOpenNUI }))    
    }
</script>

<button onclick={()=> updateState()}>
    test
</button>

{#if $nui.isOpenNUI}
    <Main/>
{/if}


<style>
  button{
    position: absolute;
    z-index: 999;
  }
</style>