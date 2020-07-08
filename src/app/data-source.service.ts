import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from "rxjs/operators"; 
@Injectable({
  providedIn: 'root'
})
export class DataSourceService {

 URL: string = "local";
 getCountriesURL: string = "http://127.0.0.1:9001/map"
  constructor(private http: HttpClient) { }

  public createFiles(file: any): Observable<any> {
    console.log("service File", file);
    return this.http.post(this.URL, file)
    .pipe(map((response: any) => response.json()));
  }

  public getCountriesData (): Observable<any> {
    return this.http.post(this.getCountriesURL, { "id": 470 })
    .pipe(map((response: any) =>  response));
  }


}