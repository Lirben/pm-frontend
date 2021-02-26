<script>
    import emoji from "node-emoji";
    import Toggle from './Inputfields/Toggle.svelte';

    export let email;
    export let checked;
</script>


<div class="bg-grey-lighter text-left px-2 my-1 flex flex-col justify-center">
    <div class="font-bold my-1 flex flex-row justify-start">
        <div class="flex flex-col justify-center w-62 md:w-40">
            <span class="font-bold">{ emoji.get('email') }Bevestigingsmail?</span>
            <span class="font-normal text-sm">({ email })</span>
        </div>
        <div class="flex-grow flex flex-row justify-end md:justify-start">
            <Toggle bind:checked="{checked}" />
        </div>
    </div>
</div>