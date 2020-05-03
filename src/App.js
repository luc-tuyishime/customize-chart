import React, { Component } from 'react';
import { Doughnut } from 'react-chartjs-2';
import { Card, Grid } from 'semantic-ui-react';

import './chart.scss';


const state = {
  labels: ['Instagam', 'Twitter', 'Linkedin',
    'Youtube', 'Facebook', 'Snapchat'],
  datasets: [
    {
      label: 'Rainfall',
      backgroundColor: [
        '#B21F00',
        '#C9DE00',
        '#2FDE00',
        '#00A6B4',
        '#6800B4',
        '#f4511e'
      ],
      hoverBackgroundColor: [
        '#501800',
        '#4B5000',
        '#175000',
        '#003350',
        '#35014F',
        '#bf360c'
      ],
      data: [65, 59, 80, 81, 56, 92]
    }
  ]
}

class App extends Component {

  render() {
    return (
      <div id="chart">
        <p className="text-overview">Overview</p>
        <Card fluid>
          <Card.Content>
            <Card.Header>Demo</Card.Header>
          </Card.Content>
          <Card.Content>
            <Grid>
              <Grid.Column width={3}>
                <div className="facebook">Facebook</div>
                <div className="percentage">56%</div>
                <div className="dataset-moon"></div>


                <div className="instagram">Instagram</div>
                <div className="percentage2">65%</div>
                <div className="dataset-moon2"></div>

                <div className="twitter">Twitter</div>
                <div className="percentage3">59%</div>
                <div className="dataset-moon3"></div>

              </Grid.Column>
              <Grid.Column width={10}>
                <Doughnut
                  data={state}
                  options={{
                    title: {
                      display: true,
                      fontSize: 20
                    },
                    legend: {
                      display: false,
                      position: 'right'
                    },
                  }}
                />
              </Grid.Column>
              <Grid.Column width={3}>
                <div className="linkedin">Linkedin</div>
                <div className="percentage4">80%</div>
                <div className="dataset-moon4"></div>


                <div className="snapchat">Snapchat</div>
                <div className="percentage5">92%</div>
                <div className="dataset-moon5"></div>
                <div className="youtube-div">
                  <div className="youtube">Youtube</div>
                  <div className="percentage6">81%</div>
                  <div className="dataset-moon6"></div>
                </div>
              </Grid.Column>
            </Grid>
          </Card.Content>
        </Card>
      </div>
    );
  }
}

export default App;
