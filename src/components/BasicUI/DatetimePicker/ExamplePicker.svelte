<script>
    import Flatpickr from 'svelte-flatpickr'
    
    import 'flatpickr/dist/flatpickr.css'
    import 'flatpickr/dist/themes/light.css'
    
    let date = null
    const flatpickrOptions = {
        element: '#my-picker'
    }
    </script>

<Flatpickr options="{ flatpickrOptions }" bind:value={date} element="#my-picker">
    <div class="flatpickr" id="my-picker">
        <input type="text" placeholder="Select Date.." data-input>

        <a href="/test" class="input-button" title="clear" data-clear>
                <i class="icon-close"></i>
        </a>
    </div>
</Flatpickr>

