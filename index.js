"use strict";

// preprocess data count to be a ranking within years

/*
 * Why this line? Because if this script runs before the svg exists, then nothing will happen, and d3 won't even
 * complain.  This delays drawing until the entire DOM has loaded.
 */
window.addEventListener("load", drawGraph);
let midpoint = 0;

function drawGraph() {
  // d3 has been added to the html in a <script> tag so referencing it here should work.
  const svg = d3.select("svg");
  const margin = { top: 20, right: 20, bottom: 30, left: 50 };
  const width = +svg.attr("width").split("px")[0] - margin.left - margin.right;
  const height =
    +svg.attr("height").split("px")[0] - margin.top - margin.bottom;

  console.log(typeof width, height);

  const x = d3
    .scaleBand()
    .rangeRound([0, width])
    .padding(0.1)
    .domain(data.map((d) => d.year));

  console.log(colorBand.length);

  midpoint = d3.quantile(
    data.map((d) => d.sentiment),
    0.5
  );

  const y = d3
    .scaleLinear()
    .range([height - margin.bottom, margin.top])
    .domain([0, d3.max(data, (d) => d.rank)]);

  const color = d3
    .scaleQuantize()
    .domain([
      d3.min(data, (d) => d.sentiment),
      d3.max(data, (d) => d.sentiment),
    ])
    .range(colorBand);

  const size = d3
    .scaleQuantize()
    .domain([d3.min(data, (d) => d.rank), d3.max(data, (d) => d.rank)])
    .range(fontSizes.reverse());

  const topics = svg
    .selectAll(".topic")
    .data(data)
    .enter()
    .append("text")
    .attr("class", "topic")
    .attr("x", (d) => x(d.year) + x.bandwidth() / 2)
    .attr("y", (d) => y(d.rank))
    .attr("text-anchor", "middle")
    .text((d) => d.words)
    .style("font-size", (d) => size(d.rank) + "px")
    .style("fill", (d) => color(d.sentiment))
    .on("click", function (event) {
      d3.select(this);
      const d = event.target.__data__;
      showModal(d);
    });

  svg
    .append("g")
    .attr("transform", `translate(0, ${height})`)
    .call(d3.axisBottom(x))
    .selectAll("text")
    .style("font-size", "16px");

  const gradient = d3
    .select("#gradient")
    .style("background", `linear-gradient(to right, ${colorBand.join(", ")})`);

  // ...
}

function showModal(topic) {
  console.log(topic);
  const modal = document.getElementById("modal");
  console.log(modal);

  const header = document.getElementById("modal-title");
  header.textContent = topic.words;

  const backButton = document.getElementById("hide-modal");
  backButton.onclick = function () {
    modal.style.visibility = "hidden";
    modal.style.width = "0";
  };

  const modalContent = document.getElementById("modal-content");
  modalContent.innerHTML = `
    <h4>${topic.year}</h4>
    <p>Posts about this topic tend to have a ${
      topic.sentiment < midpoint
        ? '<em style="color:red;">negative</em>'
        : '<em style="color:blue;">positive</em>'
    } sentiment.</p>

    <ul>
    ${posts[topic.words]
      .map((post) => `<li><a href=${post.url}>${post.title}</a></li>`)
      .join("")}
    </ul>
  `;

  modal.style.width = "300px";
  modal.style.visibility = "visible";
}
