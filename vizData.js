function vizData(selection, data)
{
    const lineGenerator = d3.line()
        .x((d) => d.x)
        .y((d) => d.y);

    selection.selectAll('circle')
        .data(data)
        .join('circle')
        .attr('r', (d) => d.r)
        .attr('cx', (d) => d.x)
        .attr('cy', (d) => d.y);
    
    selection.selectAll('path')
        .data([1])
        .join('path')
        .attr('d', lineGenerator(data))
        .attr('fill', 'none')
        .attr('stroke', 'black');
}