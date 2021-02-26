<script>
    import * as animateScroll from "svelte-scrollto";
    import IQTestSection from "../../components/PublicPages/Registration/IQTestSection.svelte";
    import RegistrationFinish from "../../components/PublicPages/Registration/RegistrationFinish.svelte";
    import RegistrationIntro from "../../components/PublicPages/Registration/RegistrationIntro.svelte";
    import TherapySection from "../../components/PublicPages/Registration/TherapySection.svelte";

    let treatmentType = 'THERAPIE';

    let showTherapy = false;
    let showIQTest = false;
    let showFinish = false;

    function finishIntro()
    {
        showTherapy = false;
        showIQTest = false;

        if(treatmentType && treatmentType.localeCompare('THERAPIE') == 0)
        {
            showTherapy = true;
            animateScroll.scrollTo({element: '#therapySection', offset: -100});
        }

        if(treatmentType && treatmentType.localeCompare('IQ-TEST') == 0)
        {
            showIQTest = true;
            animateScroll.scrollTo({element: '#iqtestSection', offset: -100});
        }
    }

    function finishBooking()
    {
        showFinish = true;
        animateScroll.scrollTo({element: '#finishSection', offset: -150});
    }

</script>


<section class="bg-grey-light pb-0 bg-cover bg-fixed min-h-screen">

    <div class="py-32">

        <!--- INTRO SECTION -->
        <RegistrationIntro bind:treatmentType {finishIntro} />

        <!--- THERAPY SECTION -->
        <div id="therapySection">
            {#if showTherapy}
                <TherapySection appointmentBooked="{finishBooking}" />
            {/if}
        </div>

        <!--- IQ-TEST SECTION -->
        <div id="iqtestSection">
            {#if showIQTest}
                <IQTestSection finishIQRegistration="{finishBooking}" />
            {/if}
        </div>

        <!--- THANK YOU SECTION -->
        <div id="finishSection">
            {#if showFinish}
                <RegistrationFinish {treatmentType}/>
            {/if}
        </div>
    </div>
</section>