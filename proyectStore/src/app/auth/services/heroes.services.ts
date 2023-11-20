import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environments } from 'environments/environments';
import { Hero } from '../interface/hero.interface';

@Injectable({providedIn: 'root'})
export class ServiceNameService {

    private baseUrl: string = environments.baseUrl;

    constructor(private httpClient: HttpClient) { }
    
    getHeroes():Observable<Hero[]>{
        return this.httpClient.get<Hero[]>(`${this.baseUrl}/heroes`);
    }

}