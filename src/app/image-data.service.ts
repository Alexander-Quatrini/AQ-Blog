import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ImageDataService {

  constructor(private http: HttpClient) { }

  fetchImageList(fileDir: string): Observable<string[]>{
    return this.http.get<string[]>("/api/images/" + fileDir);
  }
}
