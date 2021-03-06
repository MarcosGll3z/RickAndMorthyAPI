import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ListimageService {
  private baseUrl: string = 'https://rickandmortyapi.com/api';

  constructor(
    private http: HttpClient,
  ) { }

  getCharacter(): Observable<any>{
    const url = `${this.baseUrl}/character`;
    return this.http.get<any>(url)
  }
}
