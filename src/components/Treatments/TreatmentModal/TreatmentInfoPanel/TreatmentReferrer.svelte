<script>
    import { user } from '../../../../stores/authStore';
    import SectionTitle from '../../../BasicUI/Modal/SectionTitle.svelte';

    export let referrer;
    export let readOnly = false;

    let userLevel = 0;

    if(!referrer || !referrer.name)
        referrer = { name: '' };

    if($user)
        userLevel = $user.level;
        
</script>

{#if userLevel == 3 && referrer}
    <SectionTitle icon='call_me_hand' title="Doorverwijzer" />

    <div class="bg-grey-lighter text-left px-2">          
        <div class="my-1">
            {#if !readOnly}
                <textarea bind:value={referrer.name} class="w-full h-12 p-2 bg-grey-lighter leading-loose rounded-lg focus:ring-2 focus:ring-yellow focus:outline-none" placeholder="Vul hier de doorverwijzer in"></textarea>
            {:else}
                <div class="w-full h-12 p-2 bg-grey-lighter leading-loose rounded-lg">
                    {#if referrer.name !== ''}
                        {referrer.name}
                    {:else}
                        Geen doorverwijzer
                    {/if}
                </div>
            {/if}
        </div>
    </div>

{/if}