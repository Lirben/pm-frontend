<script>
  import TreatmentOverview from "../../components/Treatments/TreatmentOverview.svelte";
  import { getActiveTreatments } from '../../mobielServices/treatmentService';

  let treatments;

  async function loadTreatments()
  {
      treatments = await getActiveTreatments();
  }

  loadTreatments();
</script>

<svelte:head>
    <meta name="description" content="Beheer jouw dossiers.">
    <meta name="author" content="Praktijk Mobiel">
    <meta property="og:locale" content="nl_NL">
    <link rel="canonical" href="https://www.praktijkmobiel.be/auth/treatments">

    <title>Beheer jouw dossiers | Praktijk Mobiel</title>
</svelte:head>

<section class="bg-grey-light text-center mx-0 px-0 md:px-24 pt-36 md:pt-64 lg:pt-44 min-h-full">

  <TreatmentOverview { treatments } />

</section>