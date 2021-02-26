<script>
    import ParamedicPicture from "./ParamedicPicture.svelte";

    export let paramedic = null;
</script>

{#if paramedic}
    <div class="flex flex-row justify-left">
        <ParamedicPicture src="{ paramedic.code }" alt="{paramedic.firstName}" size="10" borderSize="2" />
        <div class="hidden md:flex md:flex-col md:justify-center">{ paramedic.firstName }</div>
    </div>
{/if}