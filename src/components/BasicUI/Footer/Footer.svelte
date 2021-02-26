<script>
	import Locations from "./Locations.svelte"
    import Contact from "./Contact.svelte"
    import BlogItems from "./BlogItems.svelte"
    import Employees from "./Employees.svelte"
    import DisclaimerItems from "./DisclaimerItems.svelte"

    export let locations;
</script>


<footer class="text-base bg-yellow py-5 md:px-32">

    <div class="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div>
            <Locations { locations } />
        </div>
        <div>
            <Contact />        
            <BlogItems />
        </div>
        <div>
            <Employees />
            <DisclaimerItems />
        </div>
      </div>
  
</footer>