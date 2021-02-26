<script>
    import ParamedicPicture from "./ParamedicPicture.svelte";

    export let paramedic;
</script>

<div class="block text-center my-24">
    <div class="flex flex-row justify-center font-bold">{ paramedic.firstName } { paramedic.name }</div>
    <div class="flex flex-row justify-center my-8">
        <ParamedicPicture src={ paramedic.code } alt='{ paramedic.firstName } { paramedic.name }' />
    </div>
    <div class="flex flex-row justify-center font-bold">{ paramedic.title }</div>

    {#if paramedic.introduction}
        <a class="block font-bold text-center text-blue" href="../Team/{ paramedic.firstName }-{ paramedic.name }">Lees meer over { paramedic.firstName }...</a>
    {/if}
</div>                