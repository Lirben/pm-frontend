<script>

    import ParamedicPicture from './ParamedicPicture.svelte';
    import TelephoneLink from '../BasicUI/TelephoneLink.svelte';

    export let paramedic;
</script>

{#if paramedic}
    <div class="grid grid-cols-1 md:grid-cols-3">
        <div class="md:col-span-1 flex flex-col justify-center text-center my-4">
            <div class=" flex flex-row justify-center">
                <ParamedicPicture src="{paramedic.code}" alt="{paramedic.firstName}" size="40" />
            </div>
            <div class="font-bold my-2">{ paramedic.title }</div>
        </div>
        <div class="md:col-span-2 flex flex-col justify-start text-center my-4 bg-grey-lighter">
            <h1 class="text-2xl mb-8 text-yellow font-bold">Contactgegevens</h1>

            <div class="grid grid-cols-3">
                <div class="col-span-1 font-bold text-right m-2">Telefoon:</div>
                <div class="col-span-2 text-left m-2"><TelephoneLink telephone="{paramedic.telephone}" /></div>
                <div class="col-span-1 font-bold text-right m-2">E-mail:</div>
                <div class="col-span-2 text-left m-2">{ paramedic.email }</div>
                <div class="col-span-1 font-bold text-right m-2">Adres:</div>
                <div class="col-span-2 text-left m-2">
                    {#if paramedic.address}
                        <span class="block">{ paramedic.address.street } { paramedic.address.houseNumber }</span>
                        <span class="block">{ paramedic.address.city }</span>
                    {/if}
                </div>
            </div>

        </div>

    </div>
{:else}
    <span>Gegevens laden...</span>
{/if}