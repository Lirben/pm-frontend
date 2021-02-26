<script>
    export let title;
    export let date;
    export let blogURL;
    export let author;
    export let imageSrc;
    export let imageAlt;
    export let introText;
</script>

<div class="my-8 md:px-32 text-lg text-center">
    <h2 class="text-yellow text-2xl font-bold mb-4 mt-12">{ title }</h2>
    <div class="flex flex-row justify-center">
        <p class="text-grey">{ date }, door <span class="text-yellow">{ author }</span></p>
    </div>

    
    <div class="flex flex-row justify-center my-4">
        <a href="{ blogURL }" class="cursor-pointer"><img class="w-96" src="{ imageSrc }" alt="{ imageAlt }" /></a>
    </div>
        
    <p class="mx-2 font-bold cursor-pointer text-left">							
        {@html introText }
    </p>
    <a class="font-bold text-yellow my-8 cursor-pointer" href="{ blogURL }">[Lees verder...]</a>
</div>