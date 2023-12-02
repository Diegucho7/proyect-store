 import { Injectable } from '@angular/core';
 import { HttpClient } from '@angular/common/http';
 import { Observable } from 'rxjs';
 import { environments } from 'environments/environments';
 import { Hero } from '../interfaces/hero.interfaces';


 @Injectable({providedIn: 'root'})
 export class HeroService {

     private baseUrl: string = environments.baseUrl;

     constructor(private httpClient: HttpClient) { }
    
     getHeroes():Observable<Hero[]>{
         return this.httpClient.get<Hero[]>(`${this.baseUrl}/heroes`);
     }

        getHeroById(id: string):Observable<Hero>{
            return this.httpClient.get<Hero>(`${this.baseUrl}/heroes/${id}`);
        }

 }