const HeaderComponet = {
    template: '<h4>気候のグラフ</h4>'
}

const TemperatureChart = {
    extends: VueChartJs.Line,
    props: {
        jsonData: Array
    },
    watch: {
        jsonData: {
            deep: true,
            handler: function () {
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
    }
}

const PrecipitationChart = {
    extends: VueChartJs.Bar,
    props: {
        jsonData: Array
    },
    watch: {
        jsonData: {
            deep: true,
            handler: function () {
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
}

const TopPage = {
    components: {
        'header-component': HeaderComponet,
    },
    template: `
    <div>
        <header-component></header-component>
        <p>本サイトは沖縄県と東京都の気温と降水量を表示しています</p>
        <p>リンク</p>
        <router-link to="/temperature">気温を見る</router-link>
        <router-link to="/precipitation">降水量を見る</router-link>
    </div>
    `
}

const TemperatureChartPage = {
    data() {
        return {
            jsonData: []
        }
    },
    components: {
        'header-component': HeaderComponet,
        'temprature-chart': TemperatureChart,
    },
    created() {
        this.axios.get('/api/temprature/')
            .then((response) => {
                this.jsonData = response.data
            })
    },
    template: `
    <div>
        <header-component></header-component>
        <router-link to="/">トップに戻る</router-link>
        <router-link to="/precipitation">降水量を見る</router-link>
        <div style="width:50%;">
            <temprature-chart v-bind:jsonData="jsonData"></temprature-chart>
        </div>
    </div>
    `,
}

const PrecipitationChartPage = {
    data() {
        return {
            jsonData: []
        }
    },
    components: {
        'header-component': HeaderComponet,
        'precipitation-chart': PrecipitationChart
    },
    created() {
        this.axios.get('/api/precipitation/')
            .then((response) => {
                this.jsonData = response.data
            })
    },
    template: `
    <div>
        <header-component></header-component>
        <router-link to="/">トップに戻る</router-link>
        <router-link to="/temperature">気温を見る</router-link>
        <div style="width:50%;">
            <precipitation-chart v-bind:jsonData="jsonData"></precipitation-chart>
        </div>
    </div>
    `,
}

const StatusNotFoundPage = {
    components: {
        'header-component': HeaderComponet,
    },
    template: `
    <div>
        <header-component></header-component>
        <p>お探しのページは見つかりませんでした</p>
    </div>
    `,
}

const routes = [
    { path: '/', component: TopPage },
    { path: '/temperature', component: TemperatureChartPage },
    { path: '/precipitation', component: PrecipitationChartPage },
    { path: '*', component: StatusNotFoundPage },
]

const router = new VueRouter({
    routes: routes
})

new Vue({
    el: "#app",
    router,
})