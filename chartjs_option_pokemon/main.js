const pokemonChart = document.getElementById('pokemonChart')

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
        scale: {
            ticks: {
                suggestedMin: 0,
                suggestedMax: 6,
            }
        }
    }
});