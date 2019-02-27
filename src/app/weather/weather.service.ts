import { Injectable } from "@angular/core";
import { Observable } from "rxjs";

import { HttpClient } from "@angular/common/http";
import { map } from "rxjs/operators";

@Injectable({
  providedIn: "root"
})
export class WeatherService {
  constructor(private http: HttpClient) {}

  getSampleData(coords): Observable<any> {
    const apiUrl =
      "https://api.openweathermap.org/data/2.5/weather?q=Krakow&appid=b5ebfa48bba82c8aba26dcb7ea82274f";
    console.log(coords);
    // longitude 19
    // lattitude 49
    return this.http.get(apiUrl).pipe(map(val => this.transformResponse(val)));
  }
  transformResponse(res): any {
    return res;
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
        observer.error("Unsupported Browser");
      }
    });
  }
}
