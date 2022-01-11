<script>
    import { DonutChart } from "@carbon/charts-svelte";

    const data = [
        { group: "Unione Europea", value: 10_000_000 },
        { group: "Stato Italiano", value: 7_000_000 },
        { group: "Regione Lombardia", value: 3_000_000 },
    ];

    const options = {
        title: "Budget",
        resizable: true,
        donut: {
            center: {
                label: "Budget"
            },
            alignment: "center",
        },
        height: "400px"
    };
</script>

<div class="w-full h-full text-white py-4 px-10">
  <DonutChart {options} {data}/>
</div>