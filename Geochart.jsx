import React from "react";
import { Chart } from "react-google-charts";



export default function GeoChart() {
    const data = [
        ["Country", "plantation"],
        ["Germany", 200],
        ["United States", 300],
        ["Brazil", 400],
        ["Canada", 500],
        ["india", 600],
        ["Australia", 700]

    ];
    return (
        <div className="container-fluid"
            style={{ marginTop: "10px" }}>
            <h2 style={{
                fontFamily: "Playfair Display",
                fontSize: "30px",
                fontWeight: "300",
                letterSpacing: " 5px",
                color: "rgb(245, 222, 179)",
                textShadow: "1px 1px 1px black",
                textAlign: "center"
            }}>WORLD WIDE PLANTATION </h2>
            <Chart
                chartEvents={[
                    {
                        eventName: "select",
                        callback: ({ chartWrapper }) => {
                            const chart = chartWrapper.getChart();
                            const selection = chart.getSelection();
                            if (selection.length === 0) return;
                            const region = data[selection[0].row + 1];
                            console.log("Selected : " + region);
                            console.log(data);
                        },
                    },
                ]}
                className="layout"
                chartType="GeoChart"
                width="100%"
                height="400px"
                data={data}

            />
        </div >
    );
}
