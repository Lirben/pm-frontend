<script>
    import Select from "svelte-select";

    export let min = null;

    const minutes = [
        {value: 0, label: '00'},
        {value: 5, label: '05'},
        {value: 10, label: '10'},
        {value: 15, label: '15'},
        {value: 20, label: '20'},
        {value: 25, label: '25'},
        {value: 30, label: '30'},
        {value: 35, label: '35'},
        {value: 40, label: '40'},
        {value: 45, label: '45'},
        {value: 50, label: '50'},
        {value: 55, label: '55'}
    ];

    const optionIdentifier = 'value';
    const getOptionLabel = (option) => option.label;
    const getSelectionLabel = (option) => option.label;

    function handleChange(event) {
        min = event.detail.value;
    }
</script>

<style>
    .themed {
      --border: 1px solid #ffc000;
      --borderFocusColor: #ffc000;
      --borderRadius: 10px;
    }
</style>

<div class="themed">
    <Select items={minutes} {optionIdentifier} {getOptionLabel} {getSelectionLabel} isClearable="{false}" placeholder="Min" on:select={handleChange} />
</div>