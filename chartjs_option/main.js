const temperatureChart = document.getElementById('temperatureChart')
const precipitationChart = document.getElementById('precipitationChart')
const pokemonChart = document.getElementById('pokemonChart')
const climateChart = document.getElementById('climateChart')

new Chart(temperatureChart, {
    "type": "line",
    "data": {
        "labels": ["1月", "2月", "3月", "4月", "5月", "6月", "7月", "8月", "9月", "10月", "11月", "12月"],
        "datasets": [
            {
                "label": "沖縄県",
                "data": [17.0, 17.1, 18.9, 21.4, 24.0, 26.8, 28.9, 28.7, 27.6, 25.2, 22.1, 18.7],
                "fill": false,
                "borderColor": "rgb(75, 192, 192)",
                "lineTension": 0.1
            },
            {
                "label": "東京都",
                "data": [5.2, 5.7, 8.7, 13.9, 18.2, 21.4, 25.0, 26.4, 22.8, 17.5, 12.1, 7.6],
                "fill": false,
                "borderColor": "rgb(130, 156, 167)",
                "lineTension": 0.1
            }
        ]
    },
    "options": {
        scales: {
            yAxes: [{
                ticks: {
                    suggestedMax: 40,
                    suggestedMin: -20,
                }
            }]
        },
    }
})

new Chart(precipitationChart, {
    "type": "bar",
    "data": {
        "labels": ["1月", "2月", "3月", "4月", "5月", "6月", "7月", "8月", "9月", "10月", "11月", "12月"],
        "datasets": [
            {
                "label": "沖縄県",
                "data": [107.0, 119.7, 161.4, 165.7, 231.6, 247.2, 141.4, 240.5, 260.5, 152.9, 110.2, 102.8],
                "fill": false,
                "backgroundColor": "rgb(75, 192, 192)",
                "lineTension": 0.1
            },
            {
                "label": "東京都",
                "data": [52.3, 56.1, 117.5, 124.5, 137.8, 167.7, 153.5, 168.2, 209.9, 197.8, 92.5, 51.0],
                "fill": false,
                "backgroundColor": "rgb(130, 156, 167)",
                "lineTension": 0.1
            }
        ]
    },
    "options": {
        scales: {
            yAxes: [{
                ticks: {
                    suggestedMax: 300,
                    suggestedMin: 0,
                }
            }]
        }
    }
})

new Chart(pokemonChart, {
    "type": "radar",
    "data": {
        "labels": ["HP", "こうげき", "ぼうぎょ", "すばやさ", "とくこう", "とくぼう"],
        "datasets": [
            {
                "label": "ピカチュウ",
                "data": [3, 3, 5, 4, 3, 6],
                "fill": true,
                "backgroundColor": "rgba(255, 99, 132, 0.2)",
                "borderColor": "rgb(255, 99, 132)",
                "pointBackgroundColor": "rgb(255, 99, 132)",
                "pointBorderColor": "#fff",
                "pointHoverBackgroundColor": "#fff",
                "pointHoverBorderColor": "rgb(255, 99, 132)"
            },
            {
                "label": "アチャモ",
                "data": [4, 5, 6, 3, 3, 4],
                "fill": true,
                "backgroundColor": "rgba(54, 162, 235, 0.2)",
                "borderColor": "rgb(54, 162, 235)",
                "pointBackgroundColor": "rgb(54, 162, 235)",
                "pointBorderColor": "#fff",
                "pointHoverBackgroundColor": "#fff",
                "pointHoverBorderColor": "rgb(54, 162, 235)",
                "pointStyle": 'rect'
            }]
    },
    "options": {
        "elements": {
            "line": { "tension": 0, "borderWidth": 3 }
        },
        scale: {
            ticks: {
                suggestedMin: 0,
                suggestedMax: 6,
            }
        }
    }
});

new Chart(climateChart, {
    "type": "bar",
    "data": {
        "labels": ["1月", "2月", "3月", "4月", "5月", "6月", "7月", "8月", "9月", "10月", "11月", "12月"],
        "datasets": [
            {
                "type": "line",
                "label": "沖縄県・平均気温",
                "data": [17.0, 17.1, 18.9, 21.4, 24.0, 26.8, 28.9, 28.7, 27.6, 25.2, 22.1, 18.7],
                "fill": false,
                "borderColor": "rgb(75, 192, 192)",
                "backgroundColor": "rgb(75, 192, 192)",
                "lineTension": 0.1,
                "yAxisID": "y-axis-2",
            },
            {
                "type": "line",
                "label": "東京都・平均気温",
                "data": [5.2, 5.7, 8.7, 13.9, 18.2, 21.4, 25.0, 26.4, 22.8, 17.5, 12.1, 7.6],
                "fill": false,
                "borderColor": "rgb(130, 156, 167)",
                "backgroundColor": "rgb(130, 156, 167)",
                "lineTension": 0.1,
                "yAxisID": "y-axis-2",
            },
            {
                "type": "bar",
                "label": "沖縄県・平均降水量",
                "data": [107.0, 119.7, 161.4, 165.7, 231.6, 247.2, 141.4, 240.5, 260.5, 152.9, 110.2, 102.8],
                "fill": false,
                "borderColor": "rgb(75, 192, 192)",
                "backgroundColor": "rgb(75, 192, 192)",
                "lineTension": 0.1,
                "yAxisID": "y-axis-1",
            },
            {
                "type": "bar",
                "label": "東京都",
                "data": [52.3, 56.1, 117.5, 124.5, 137.8, 167.7, 153.5, 168.2, 209.9, 197.8, 92.5, 51.0],
                "fill": false,
                "borderColor": "rgb(130, 156, 167)",
                "backgroundColor": "rgb(130, 156, 167)",
                "lineTension": 0.1,
                "yAxisID": "y-axis-1",
            },
        ]
    },
    "options": {
        scales: {
            yAxes: [
                {
                    id: "y-axis-1",   // Y軸のID
                    type: "linear",   // linear固定 
                    position: "left", // どちら側に表示される軸か？
                    ticks: {          // スケール
                        max: 300,
                        min: 0,
                    },
                },
                {
                    id: "y-axis-2",
                    type: "linear",
                    position: "right",
                    ticks: {
                        max: 40,
                        min: -20,
                    },
                }
            ],
        }
    }
});