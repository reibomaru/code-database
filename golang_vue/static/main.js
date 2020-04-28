const HeaderComponet = {
    template: '<h4>気候のグラフ</h4>'
}

const TemperatureChart = {
    extends: VueChartJs.Line,
    data() {
        return {
            jsonData: []
        }
    },
    watch: {
        jsonData: {
            deep: true,
            handler: function () {
                console.log(this.jsonData+'hi')
                const data = []
                for (let i = 0; i < this.jsonData.length; i++) {
                    data[i] = {
                        label: this.jsonData[i].Label,
                        data: this.jsonData[i].Data,
                        borderColor: `rgb(${(i + 1) * 50}, ${(i + 1) * 100}, ${(i + 1) * 100})`,
                        fill: false,
                        lineTension: 0.1
                    }
                }
                this.renderChart(
                    {
                        "labels": ["1月", "2月", "3月", "4月", "5月", "6月", "7月", "8月", "9月", "10月", "11月", "12月"],
                        "datasets": data
                    },
                    {
                        scales: {
                            yAxes: [{
                                ticks: {
                                    suggestedMax: 40,
                                    suggestedMin: -20,
                                }
                            }]
                        }
                    }
                )
            }
        } 
    },
    created() {
        this.axios.get('/api/temprature/')
            .then((response) => {
                this.jsonData = response.data
                console.log(this.jsonData)
        })
    }
}

const PrecipitationChart = {
    extends: VueChartJs.Bar,
    data() {
        return {
            jsonData: []
        }
    },
    watch: {
        jsonData: {
            deep: true,
            handler: function () {
                console.log(this.jsonData + 'hi')
                const data = []
                for (let i = 0; i < this.jsonData.length; i++) {
                    data[i] = {
                        "label": this.jsonData[i].Label,
                        "data": this.jsonData[i].Data,
                        "borderWidth": 5,
                        "backgroundColor": `rgb(${(i + 1) * 50}, ${(i + 1) * 100}, ${(i + 1) * 100})`,
                    }
                }
                this.renderChart(
                    {
                        "labels": ["1月", "2月", "3月", "4月", "5月", "6月", "7月", "8月", "9月", "10月", "11月", "12月"],
                        "datasets": data
                    },
                    {
                        scales: {
                            yAxes: [{
                                ticks: {
                                    suggestedMax: 300,
                                    suggestedMin: 0,
                                }
                            }]
                        }
                    }
                )
            }
        }
    },
    created() {
        this.axios.get('/api/precipitation/')
            .then((response) => {
                this.jsonData = response.data
                console.log(this.jsonData)
            })
    }
}

const TopPage = {
    template: `
    <div>
        <p>本サイトは沖縄県と東京都の気温と降水量を表示しています</p>
        <p>リンク</p>
        <router-link to="/temperature">気温を見る</router-link>
        <router-link to="/precipitationChart">降水量を見る</router-link>
    </div>
    `
}
const TemperatureChartPage = {
    components: {
        'temprature-chart': TemperatureChart
    },
    template: `
    <div>
        <router-link to="/">トップに戻る</router-link>
        <router-link to="/precipitationChart">降水量を見る</router-link>
        <div style="width:50%;">
            <temprature-chart></temprature-chart>
        </div>
    </div>
    `
}

const PrecipitationChartPage = {
    components: {
        'precipitation-chart': PrecipitationChart
    },
    template: `
    <div>
        <router-link to="/">トップに戻る</router-link>
        <router-link to="/temperature">気温を見る</router-link>
        <div style="width:50%;">
            <precipitation-chart></precipitation-chart>
        </div>
    </div>
    `
}
const StatusNotFoundPage = {
    template: '<div>お探しのページは見つかりませんでした</div>'
}

const routes = [
    { path: '/', component: TopPage },
    { path: '/temperature', component: TemperatureChartPage },
    { path: '/precipitationChart', component: PrecipitationChartPage },
    { path: '*', component: StatusNotFoundPage },
]

const router = new VueRouter({
    routes: routes
})

new Vue({
    el: "#app",
    components: {
        'header-component':HeaderComponet
    },
    router,
})