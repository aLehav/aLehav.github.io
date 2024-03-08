import React, { useEffect, useRef } from 'react';
import * as d3 from 'd3';

const BookBubbleChart = () => {
    const d3Container = useRef(null);

    useEffect(() => {
        if (d3Container.current) {
            // Load the data from the books.json file
            d3.json('/books.json').then(data => {
                const margin = { top: 20, right: 30, bottom: 40, left: 90 },
                      width = 460 - margin.left - margin.right,
                      height = 400 - margin.top - margin.bottom;

                // Append the svg object to the body of the page
                const svg = d3.select(d3Container.current)
                              .append('svg')
                              .attr('width', width + margin.left + margin.right)
                              .attr('height', height + margin.top + margin.bottom)
                              .append('g')
                              .attr('transform', `translate(${margin.left},${margin.top})`);

                // Add X axis
                const x = d3.scaleLinear()
                            .domain([0, 10])
                            .range([0, width]);
                svg.append('g')
                   .attr('transform', `translate(0,${height})`)
                   .call(d3.axisBottom(x));

                // Add Y axis
                const y = d3.scaleLinear()
                            .domain([0, 10])
                            .range([height, 0]);
                svg.append('g')
                   .call(d3.axisLeft(y));

                // Add a scale for bubble size
                const z = d3.scaleSqrt()
                            .domain([0, d3.max(data, d => d.pages)])
                            .range([2, 30]);

                // Add a scale for bubble color
                const myColor = d3.scaleOrdinal()
                                  .domain([...new Set(data.map(item => item.author))])
                                  .range(d3.schemeCategory10);

                // Tooltip
                const tooltip = d3.select(d3Container.current)
                                  .append('div')
                                  .style('opacity', 0)
                                  .attr('class', 'tooltip')
                                  .style('background-color', 'white')
                                  .style('border', 'solid')
                                  .style('border-width', '2px')
                                  .style('border-radius', '5px')
                                  .style('padding', '5px');

                // Three function that change the tooltip when user hover / move / leave a cell
                const mouseover = function(event, d) {
                    tooltip.style('opacity', 1);
                    d3.select(this).style('stroke', 'black').style('opacity', 1);
                    svg.selectAll('.bubble')
                       .filter(function(db) { return db.author !== d.author; })
                       .style('opacity', 0.2);
                };
                const mousemove = function(event, d) {
                    tooltip.html(`Title: ${d.title}<br>Author: ${d.author}<br>Rating: ${d.personalRating}<br>Suggestion Score: ${d.suggestionScore}<br>Pages: ${d.pages}`)
                           .style('left', (event.x)/2 + 'px')
                           .style('top', (event.y)/2 + 'px');
                };
                const mouseleave = function(event, d) {
                    tooltip.style('opacity', 0);
                    d3.select(this).style('stroke', 'none').style('opacity', 0.8);
                    svg.selectAll('.bubble').style('opacity', 1);
                };

                // Add dots
                svg.append('g')
                   .selectAll('dot')
                   .data(data)
                   .join('circle')
                   .attr('class', 'bubble')
                   .attr('cx', d => x(d.personalRating))
                   .attr('cy', d => y(d.suggestionScore))
                   .attr('r', d => z(d.pages))
                   .style('fill', d => myColor(d.author))
                   .style('opacity', 0.8)
                   .attr('stroke', 'black')
                   .on('mouseover', mouseover)
                   .on('mousemove', mousemove)
                   .on('mouseleave', mouseleave);
            });
        }
    }, []);
    
    return (
        <div>
            <div ref={d3Container}></div>
        </div>
    );
};

export default BookBubbleChart;