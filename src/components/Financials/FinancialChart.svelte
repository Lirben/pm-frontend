<script>
    import Bar from "svelte-chartjs/src/Bar.svelte"

    export let dataset;
    export let selectedMonth;

    const months = ["Januari", "Februari", "Maart", "April", "Mei", "Juni", "Juli", "Augustus", "September", "Oktober", "November", "December"];
    let data;
    let options;
    let totalTurnover = 0;

    $: {
        if(dataset && dataset.length > 0)
        {
            data = {
                labels: months,
                datasets: dataset
            };
        }
    }

    options = {
        maintainAspectRatio: false,
        responsive: true,
        scales: {
            xAxes: [{
                stacked: true,
                gridLines: {
                    display: false
                }
            }],
            yAxes: [{
                stacked: true,
                gridLines: {
                    display: true,
                    color: "rgba(0, 0, 0, 0.1)"
                },
                ticks: {
                    beginAtZero: true,
                    min: 0,
                    callback: function(value) {
                      return '€ ' + value;
                    }
                }
            }]
        },
        legend: {
            display: false
        },
        tooltips: {
            mode: 'label',
            callbacks: {
                label : function(tooltipItem, data) {
                    const label = data.datasets[tooltipItem.datasetIndex].label;
                    const value = data.datasets[tooltipItem.datasetIndex].data[tooltipItem.index];
                                  
                    totalTurnover += value;
                        
                    return label + ': € ' + value;
                },
                footer: function() {
                    const showTurnover = totalTurnover;
                    totalTurnover = 0;
                    return ['Totaal: € ' + showTurnover];
                }
            }
        },
        onClick: function(e) {
            const element = this.getElementAtEvent(e);
            if (element.length)
               showDetails(element[0]._index);
        },
        onHover: function(e) {
            const element = this.getElementAtEvent(e);
            if (element.length)
              document.body.style.cursor = 'pointer';
            else
              document.body.style.cursor = 'default';
        }
    }

    function showDetails(value)
    {
        selectedMonth = value;
    }
</script>

<div class="relative m-auto p-2 h-96 w-full">
    <Bar {data} {options} />
</div>