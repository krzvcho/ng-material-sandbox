import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {
  constructor(private http: HttpClient) {}

  getSampleData(coords): Observable<any> {
    // const apiUrl = "https://api.openweathermap.org/data/2.5/weather?q=Krakow&appid=b5ebfa48bba82c8aba26dcb7ea82274f";
    const apiUrl =
      'https://api.openweathermap.org/data/2.5/weather?lat=' +
      coords.latitude +
      '&lon=' +
      coords.longitude +
      '&appid=b5ebfa48bba82c8aba26dcb7ea82274f';

    return this.http.get(apiUrl).pipe(map(val => this.transformResponse(val)));
  }
  getDataByCityName(city) {
    const apiUrl =
      'https://api.openweathermap.org/data/2.5/weather?q=' +
      city +
      '&appid=b5ebfa48bba82c8aba26dcb7ea82274f';
    return this.http.get(apiUrl).pipe(map(val => this.transformResponse(val)));
  }

  getCitiesAround(coords, cnt = 10): Observable<any> {
    const apiUrl =
      'https://api.openweathermap.org/data/2.5/find' +
      '?lat=' +
      coords.latitude +
      '&lon=' +
      coords.longitude +
      '&cnt=' +
      cnt +
      '&appid=b5ebfa48bba82c8aba26dcb7ea82274f&units=metric';

    return this.http.get(apiUrl).pipe(map(val => this.transformResponse(val)));
  }

  transformResponse(res): any {
    return res.list ? res.list : res;
  }

  getLocation(): Observable<any> {
    return Observable.create(observer => {
      if (window.navigator && window.navigator.geolocation) {
        window.navigator.geolocation.getCurrentPosition(
          position => {
            observer.next(position);
            observer.complete();
          },
          error => observer.error(error)
        );
      } else {
        observer.error('Unsupported Browser');
      }
    });
  }
}
