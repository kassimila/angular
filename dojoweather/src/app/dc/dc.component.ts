import { WeatherService } from './../weather.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dc',
  templateUrl: './dc.component.html',
  styleUrls: ['./dc.component.css']
})
export class DcComponent implements OnInit {
  weather;
  temp;
  maxTemp;
  minTemp;
  humidity;
  wind;
  clouds;

  constructor(private _weatherService: WeatherService) {}

  ngOnInit() {
    this.weather = this._weatherService
      .getWeather('District of Columbia')
      .then(weather => {
        console.log(weather);
        this.humidity = weather.main.humidity;
        this.temp = weather.main.temp;
        this.temp = Math.floor(this.temp * (9 / 5) - 459.67);
        this.maxTemp = weather.main.temp_max;
        this.maxTemp = Math.floor(this.maxTemp * (9 / 5) - 459.67);
        this.minTemp = weather.main.temp_min;
        this.minTemp = Math.floor(this.minTemp * (9 / 5) - 459.67);
        this.clouds = weather.weather[0].description;
        // console.log(this.weather);
      });
  }
}
