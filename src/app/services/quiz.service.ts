import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class QuizService {
  constructor(private http: HttpClient) { }

  get(url: string) {
    return this.http.get(url);
  }

  getAll() {
    return [
      {
        id: 'data/java.json',
        name: 'Java',
        description:
          "Are you ready for this quiz? This quiz has MCQ based quesntions contains 10 questions, and for each question you will get 30 sec.",
        imageUrl: 'assets/images/Java.jpg',
      },
    ];
  }
}
