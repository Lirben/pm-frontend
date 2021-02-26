<script>
    export let locations;
</script>

<div class="px-5">
    <h3 class="text-3xl font-bold border-b-2 border-white">Wij komen aan huis in</h3>
</div>

<div class="m-5 mb-0 font-bold text-blue">
    <div class="grid grid-cols-1 lg:grid-cols-2">
        <div>
            {#each Array(locations.length / 2) as _, i}
                <a rel=prefetch class="block" href="../{locations[i].name}" title="Kinderpsycholoog { locations[i].name }">{ locations[i].name }</a>
            {/each}
        </div>
        <div>
            {#each Array(locations.length / 2) as _, i}
                <a rel=prefetch class="block" href="../{locations[(locations.length / 2) + i].name}" title="Kinderpsycholoog { locations[(locations.length / 2) + i].name }">{ locations[(locations.length / 2) + i].name }</a>
            {/each}
        </div>
    </div>
</div>