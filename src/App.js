import React, { Component } from 'react';
import ReactApexChart from "react-apexcharts";
import { Card } from 'semantic-ui-react';

import './chart.scss';

class App extends Component {

  state = {
    series: [44, 55, 41, 17, 15, 12, 14, 50, 19, 33],
    options: {
      dataLabels: {
        enabled: false
      },
      plotOptions: {
        pie: {
          customScale: 1,
          offsetX: 0,
          offsetY: 0,
          expandOnClick: true,
          dataLabels: {
            offset: 1,
            minAngleToShowLabel: 10
          },
          donut: {
            size: '35%',
            background: 'transparent',
            labels: {
              show: true,
              name: {
                show: true,
                fontSize: '15px',
                offsetY: -10
              },
              value: {
                show: true,
                fontSize: '15px',
                offsetY: 16,
                formatter: function (val) {
                  return val
                }
              },
              total: {
                show: false,
                showAlways: false,
                label: 'Total',
                fontSize: '22px',
                color: '#373d3f',
                formatter: (w) => {
                  return w.globals.seriesTotals.reduce((a, b) => {
                    return a + b
                  }, 0)
                }
              }
            }
          },
        }
      },
      chart: {
        type: 'donut',
      },
      responsive: [{
        breakpoint: 580,
        options: {
          chart: {
            width: 500
          },
          legend: {
            position: 'top'
          }
        }
      }]
    },
  };

  render() {
    const { options, series } = this.state;
    return (
      <div id="chart">
        <p className="text-overview">Overview</p>
        <Card fluid>
          <Card.Content>
            <Card.Header>Demo</Card.Header>
          </Card.Content>
          <Card.Content>
            <ReactApexChart className="chart-pie" options={options} series={series} type="donut" />
          </Card.Content>
        </Card>
      </div>
    );
  }
}

export default App;
