<script>
    import Select from "svelte-select";

    export let hour = null;

    const hours = [
        {value: 7, label: '07'},
        {value: 8, label: '08'},
        {value: 9, label: '09'},
        {value: 10, label: '10'},
        {value: 11, label: '11'},
        {value: 12, label: '12'},
        {value: 13, label: '13'},
        {value: 14, label: '14'},
        {value: 15, label: '15'},
        {value: 16, label: '16'},
        {value: 17, label: '17'},
        {value: 18, label: '18'},
        {value: 19, label: '19'},
        {value: 20, label: '20'},
        {value: 21, label: '21'},
        {value: 22, label: '22'},
    ];

    const optionIdentifier = 'value';
    const getOptionLabel = (option) => option.label;
    const getSelectionLabel = (option) => option.label;

    function handleChange(event) {
        hour = event.detail.value;
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
    <Select items={hours} {optionIdentifier} {getOptionLabel} {getSelectionLabel} isClearable="{false}" placeholder="Uur" on:select={handleChange} />
</div>