package main

import (
	"encoding/json"
	"net/http"
	"os"
	"text/template"
)

//ClimateDataElem データの一つのデータセット
type ClimateDataElem struct {
	Label string
	Data  []float64
}

func mainHandler(w http.ResponseWriter, r *http.Request) {
	t, err := template.ParseFiles("index.html")
	if err != nil {
		panic(err.Error())
	}
	if err := t.Execute(w, nil); err != nil {
		panic(err.Error())
	}
}

func tempratureHandler(w http.ResponseWriter, r *http.Request) {
	var temperatureData []ClimateDataElem
	temperatureData = append(temperatureData, ClimateDataElem{
		Label: "沖縄県",
		Data:  []float64{17.0, 17.1, 18.9, 21.4, 24.0, 26.8, 28.9, 28.7, 27.6, 25.2, 22.1, 18.7},
	})
	temperatureData = append(temperatureData, ClimateDataElem{
		Label: "東京都",
		Data:  []float64{5.2, 5.7, 8.7, 13.9, 18.2, 21.4, 25.0, 26.4, 22.8, 17.5, 12.1, 7.6},
	})
	js, err := json.Marshal(temperatureData)
	if err != nil {
		http.Error(w, err.Error(), http.StatusInternalServerError)
		return
	}
	w.Header().Set("Content-Type", "application/json")
	w.Write(js)
}

func precipitationHandler(w http.ResponseWriter, r *http.Request) {
	var temperatureData []ClimateDataElem
	temperatureData = append(temperatureData, ClimateDataElem{
		Label: "沖縄県",
		Data:  []float64{107.0, 119.7, 161.4, 165.7, 231.6, 247.2, 141.4, 240.5, 260.5, 152.9, 110.2, 102.8},
	})
	temperatureData = append(temperatureData, ClimateDataElem{
		Label: "東京都",
		Data:  []float64{52.3, 56.1, 117.5, 124.5, 137.8, 167.7, 153.5, 168.2, 209.9, 197.8, 92.5, 51.0},
	})
	js, err := json.Marshal(temperatureData)
	if err != nil {
		http.Error(w, err.Error(), http.StatusInternalServerError)
		return
	}
	w.Header().Set("Content-Type", "application/json")
	w.Write(js)
}

func main() {
	dir, _ := os.Getwd()
	http.HandleFunc("/", mainHandler)
	http.HandleFunc("/api/temprature/", tempratureHandler)
	http.HandleFunc("/api/precipitation/", precipitationHandler)
	http.Handle("/static/", http.StripPrefix("/static/", http.FileServer(http.Dir(dir+"/static/"))))
	http.Handle("/node_modules/", http.StripPrefix("/node_modules/", http.FileServer(http.Dir(dir+"/node_modules/"))))
	http.ListenAndServe(":8000", nil)
}
