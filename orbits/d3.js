let canvas = d3.select('body')
  .append('svg')
  .attr('width', 500)
  .attr('height', 500);

// let circle = canvas.append('circle')
//   .attr('cx', 250)
//   .attr('cy', 250)
//   .attr('r', 5)
//   .attr('fill', 'teal');

// let ring = canvas.append('circle')
//   .attr('cx', 250)
//   .attr('cy', 250)
//   .attr('r', 20)
//   .attr('stroke', 'blue')
//   .attr('stroke-width', '3')
//   .attr('fill', 'none');

// let ring2 = canvas.append('circle')
//   .attr('cx', 250)
//   .attr('cy', 250)
//   .attr('r', 100)
//   .attr('stroke', 'white')
//   .attr('stroke-width', '4')
//   .attr('fill', 'none');

// let ring3 = canvas.append('circle')
//   .attr('cx', 250)
//   .attr('cy', 250)
//   .attr('r', 150)
//   .attr('stroke', 'green')
//   .attr('stroke-width', '5')
//   .attr('fill', 'none');

// let ring = canvas.append('ring')
//   .attr('cx', 250)
//   .attr('cy', 250)
//   .attr('r', 5)
//   .attr('fill', '#CC0000');

// d3.select('h1').style('color', 'teal')
//   .text('Chimboree!');

// let n = .5;
// setInterval(() => {
//   d3.select('circle').attr('r', n += .3);
// }, 50);

function changeIt(n) {
  return Math.floor(Math.random() * 100);
}

let abMag = [17.8, 21.3, 24.8, 23.3, 21.4, 27.7, 21.9];
function relativeSize(a) {
  return a.sort((a, b) => a - b);
}

for (let i in abMag) {
  canvas.append('circle')
    .attr('cx', (250 * i * .25))
    .attr('cy', (250 * i * .25))
    .attr('r', abMag[i] * 5)
    // .attr('stroke', 'green')
    // .attr('stroke-width', '5')
    .attr('fill', 'orange')
    .attr('opacity', '.5')
    .attr('box-shadow', '0 0 60px 30px #fff, 0 0 100px 60px #f0f, 0 0 140px 90px #0ff');
}