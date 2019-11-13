function makescatter1() {
    console.log('starting!')
    d3.json('wsoz_oil_vs_gas.json').then(res=>console.log(res.data))
    d3.json('wsoz_oil_vs_gas.json')
        .then(function(data) {
            d3.select("svg")
                .selectAll("circle")
                .data(data.data)
                .enter()
                .append("circle")
                .attr("r", 5).attr("fill", "red")
                .attr("cx", function (d) {return d["items"][0]
                })
                .attr("cy", function (d) {return d["items"][1]})
            }
        )
}