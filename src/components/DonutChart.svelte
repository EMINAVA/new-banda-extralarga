<script>
    import { DonutChart } from "@carbon/charts-svelte";

    export let data;
    export let title;
    export let label;

    const options = {
        title,
        resizable: true,
        donut: {
            center: {
                label
            },
            alignment: "center",
        },
        height: "400px"
    };
</script>

<div class="w-full h-full text-white py-4 px-10">
  <DonutChart {options} {data}/>
</div>