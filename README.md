# html-chart-js-template

This is the source code of the [Chart.js](https://www.chartjs.org/) [JourneyApps iFrame Client](https://github.com/journeyapps/journey-iframe-client) template. This repo can be used as a template to generate HTML files that can be imported into your JourneyApps application and render charts.

## Prerequisites

1. Install NodeJS on your machine
2. Install Yarn package manager

## Installation

1. Clone the repository

2. Install the dependacies

```
yarn install 
```

3. Update the following items in the `config.yml`

```
outputFileName: output.html 
htmlTitle: Template name
```

## Build and Upload

1. Run `yarn build`. This generates the html file in the `dist` directory. The name of the file will match the `outputFileName` value in the `config.yml`

2. Upload the html file to Oxide

## Usage

1. Reference the html file in your view.xml file using the html component
```
<view title="View">
   <html id="frame" src="html/output.html" show-fullscreen-button="true"/>
</view>
```

2. Add the ChartJS config to your view.js e.g.
```
var chartConfig = {
   type: 'line',
   data: {
       labels: ["Count 1", "Count 2"],
       datasets: [{
           label: 'Count',
           data: [4, 5],
           backgroundColor: [
               'rgba(255, 99, 132, 0.2)',
               'rgba(54, 162, 235, 0.2)',
               'rgba(255, 206, 86, 0.2)',
               'rgba(75, 192, 192, 0.2)',
               'rgba(153, 102, 255, 0.2)',
               'rgba(255, 159, 64, 0.2)'
           ],
           borderColor: [
               'rgba(255, 99, 132, 1)',
               'rgba(54, 162, 235, 1)',
               'rgba(255, 206, 86, 1)',
               'rgba(75, 192, 192, 1)',
               'rgba(153, 102, 255, 1)',
               'rgba(255, 159, 64, 1)'
           ],
           borderWidth: 1
       }]
   },
   options: {
       scales: {
           yAxes: [{
               ticks: {
                   beginAtZero: true
               }
           }]
       }
   }
};
```

For more Chart.js options, please seee the [Chart.js docs](https://www.chartjs.org/docs/latest/)

3. Update your view.js to listen for the `mounted` event e.g.

```
function init() {
   component.html({ id: "frame" }).on("mounted", function (bool) {
       component.html({ id: "frame" }).post("render", chartConfig);
       return "success";
   });
}
```