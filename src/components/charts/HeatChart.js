import React from "react";
import ReactApexChart from "react-apexcharts";

class HeatChart extends React.Component {
    constructor(props) {
      super(props);

      this.state = {
        chartData: [],
        chartOptions: {},
    };
  }

  componentDidMount() {
    this.setState({
      chartData: this.props.chartData,
      chartOptions: this.props.chartOptions,
    });
  }

  render() {
    return (
      <ReactApexChart
        options={this.state.chartOptions}
        series={this.state.chartData}
        type='heatmap'
        height={350}
      />
    );
  }
}

export default HeatChart;