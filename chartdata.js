'use strict';

// Get values from saved data.
function getProductsFromLocalStorage() {
  var getAllThatJunk = localStorage.getItem('key');
  getAllThatJunk = JSON.parse(getAllThatJunk);
  console.log('Saved to localStorage!');
  console.log('this is ' + getAllThatJunk);
}

var ctx = document.getElementById('chart').getContext('2d');

var allProducts = JSON.parse(localStorage.allProducts);

function allProductClicks(products){
  var productClicks = [];

  for (var i = 0; i < products.length; i++) {
    productClicks.push(products[i].clicks);
    console.log('test' + products.length);
    console.log('All product clicks: ', productClicks);
  }
  return productClicks;
}

function allProductNames(products){
  var productNames = [];

  for (var i = 0; i < products.length; i++) {
    productNames.push(products[i].name);
    console.log('All product names: ', productNames);
  }
  return productNames;
}

var clickData = allProductClicks(allProducts);
var nameData = allProductNames(allProducts);

var labelColors = ['blue', 'red', 'orange', 'purple', 'green', 'yellow', 'salmon'];

var chartData = {
  type: 'bar',
  data: {
    labels: nameData,
    datasets: [{
      label: '# of Votes / Color',
      data: clickData,
      backgroundColor: 'darkgrey'

    }],
  },
  options: {
    scales: {
      yAxes: [{
        ticks: {
          beginAtZero: true
        }
      }]
    }
  },
};
console.log('This is click data ' + clickData);
var myChart = new Chart(ctx, chartData);

getProductsFromLocalStorage();
