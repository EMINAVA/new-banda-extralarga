<script>
    import { GaugeChart } from "@carbon/charts-svelte";

    const data = [
        {
            group: "value",
            value: 61
        }
    ]
    const options = {
        title: "Budget Utilizzato",
        resizable: true,
        height: "250px",
        width: "100%",
        gauge: {
            type: "semi",
            status: "danger",
            alignment: "center",
        }
    }
</script>
<div class="w-full h-full text-white py-4 px-10">
  <GaugeChart {data} {options}/>
</div>