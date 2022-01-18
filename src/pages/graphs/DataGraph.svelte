<script>
    import "@carbon/charts/styles.min.css";
    import "carbon-components/css/carbon-components.min.css";
    import { BarChartGrouped } from "@carbon/charts-svelte";

    export let data;
    export let title;

    const options = {
        title,
        axes: {
            left: {
                mapsTo: "value"
            },
            bottom: {
                scaleType: "labels",
                mapsTo: "key"
            }
        },
        height: "400px"
    }
</script>

<BarChartGrouped data={data} options={options}/>
