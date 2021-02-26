<script>
    import { emailValidator, requiredValidator } from '../../../mobielServices/Validation/validators';
    import { createFieldValidator } from '../../../mobielServices/Validation/validation';

    const [ validity, validate ] = createFieldValidator(requiredValidator(), emailValidator());

    export let label = '';
    export let value = '';
    export let placeholder = '';
    export let id = 0;
    export let readOnly = false;
    export let valid = true;

    let componentIsInvalid = !$validity.valid;

    $: {
        if(!$validity.valid)
        {
            valid = false;
            componentIsInvalid = true;
        }

        if(componentIsInvalid && $validity.valid)
        {
            valid = true;
            componentIsInvalid = false;
        }
    }
</script>

    {#if label}
        <label for="{label}{id}" class="font-bold">{ label} : </label>
    {/if}

    {#if !readOnly}
        <input id="{label}{id}"
            class="{ $$props.class } {$validity.valid ? '' : 'border-2 border-red'}"
            bind:value
            {placeholder}
            use:validate={value} />
    {:else}
        <div class="inline-block { $$props.class }">
            {#if value}
                { value }
            {/if}
        </div>
    {/if}