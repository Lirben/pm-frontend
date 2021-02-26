<script>
  import Flatpickr from 'svelte-flatpickr'
  import dayjs from 'dayjs';
  import locale_nl from 'dayjs/locale/nl-be';
  import { Dutch } from "flatpickr/dist/l10n/nl.js"

  import 'flatpickr/dist/flatpickr.css'
  import 'flatpickr/dist/themes/light.css'

  export let birthday;
  export let readOnly = false;
  export let label;
  
  dayjs.locale(locale_nl);

  const flatpickrOptions = {
    element: '#my-picker',
    enableTime: false,
    wrap: true,
    altInput: true,
    altFormat: "j F Y",
    dateFormat: "Y-m-d",
    "locale": Dutch,

    onClose: function(selectedDates){
      birthday = ( new Date(selectedDates).getTime() ) / 1000;
    }
  }
</script> 

{#if !readOnly}
  <Flatpickr options="{ flatpickrOptions }" value={ birthday * 1000 } element="#my-picker">
    <div class="flex flex-row justify-start">
      {#if label}
        <label for="datepicker" class="font-bold flex flex-col justify-center mr-2">
          {label}:
        </label>
      {/if}
      <div id="my-picker">
        <input type="text" placeholder="Selecteer geboortedatum" data-input class="{ $$props.class }"/>
      </div>
    </div>
  </Flatpickr>
{:else}
  <label for="datepicker" class="font-bold">
    Geboortedatum:
  </label>

  <div class="inline-block w-40" id="my-picker">
    <div class="{ $$props.class }">
      {#if birthday}
        {(dayjs.unix(birthday)).format("D MMM YYYY") }
      {/if}
    </div>
  </div>
{/if}