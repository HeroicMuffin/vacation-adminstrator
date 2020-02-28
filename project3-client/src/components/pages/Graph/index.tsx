import * as React from "react";
import ApexChart from "react-apexcharts";
import {connect} from "react-redux";



export class GraphComponent extends React.Component<any, any> {
    constructor(props: any) {
        super(props);
        const copy = props.data.sort((a: any, b: any) => (a.followers < b.followers) ? 1 : ((b.followers < a.followers) ? -1 : 0));
        const topSix = copy.slice(0, 10)
        const followers = topSix.map((e: any) => e.followers)
        const destinations = topSix.map((e: any) => e.destination)
        let options = {
            chart: {
                width: 380,
                type: "pie"
            },
            labels: ["Team A", "Team B", "Team C", "Team D", "Team E", "Team G"],
            responsive: [
                {
                    breakpoint: 480,
                    options: {
                        chart: {
                            width: 200
                        },
                        legend: {
                            position: "bottom"
                        }
                    }
                }
            ]
        }
        options.labels = destinations

        this.state = {
            data: props,
            series: followers,
            options: options
        };
    }


  public render() {
        
        return (
            <div id="chart">

                <ApexChart
                    options={this.state.options}
                    series={this.state.series}
                    type="pie"
                    width={620}
                />
            </div>
        );
    }
}

const mapStateToProps = (state: any, ownProps: any) => ({
    data: state.data
});



const GraphContainer = connect(mapStateToProps, null)(GraphComponent);

export default GraphContainer;