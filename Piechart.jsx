
import React from "react";
import { Chart } from "react-google-charts";


export const data = [
    ["City", "2010 plantation", "2000 plantation"],
    ["New York City, NY", 8175000, 8008000],
    ["Los Angeles, CA", 3792000, 3694000],
    ["Chicago, IL", 2695000, 2896000],
    ["Houston, TX", 2099000, 1953000],
    ["Philadelphia, PA", 1526000, 1517000],
];



export default function PieChart() {
    const options = {
        title: "plantation of Largest U.S. Cities",
        chartArea: { width: "50%" },
        colors: ["darkgreen", "#77dd77"],
        hAxis: {
            title: "Total plantation",
            minValue: 0,
        },
        vAxis: {
            title: "City",
        },
    };
    return (
        <div style={{ borderRadius: "10px", padding: "30px" }}
            >
            <h2
                style={{
                fontFamily: "Playfair Display",
                fontSize: "30px",
                fontWeight: "300",
                letterSpacing: " 5px",
                color: "rgb(245, 222, 179)",
                textShadow: "1px 1px 1px black",
                textAlign: "center",

            }}>YEARLY PLANTATION DIFFERNCE </h2>
            <Chart
                chartType="BarChart"
                width="100%"
                height="400px"
                data={data}
                options={options}

            />
        </div>
    );
}

