function renderCore(sfdata) {
    if ( resizing )
    {
        return;
    }

    console.log('Entering Render Core');

    // Extract the columns
    var columns = sfdata.columns;

    // Extract the data array section
    var chartdata = sfdata.data;

    // Extract the config section
    var config = sfdata.config;

    // count the marked rows in the data set, needed later for marking rendering logic
    var markedRows = 0;
    for ( var i = 0; i < chartdata.length; i++ )
    {
        if ( chartdata[i].hints.marked )
        {
            markedRows = markedRows + 1;
        }
    }
    var width = window.innerWidth;
    var height = window.innerHeight;

    makescatter1(data, 'svg');

    function makescatter1(data, root_node) {
        console.log('starting!');
        //d3.json('test2.json')//.then(function(data) {
                    var svg = d3.select(root_node)
                        .selectAll("circle")
                        .data(data)
                        .enter()
                        .append("circle")
                        .attr("r", 5).attr("fill", "red")
                        .attr("cx", function (d) {return d["items"][0]
                        })
                        .attr("cy", function (d) {return d["items"][1]})
            //    }
            //)
    }
}

