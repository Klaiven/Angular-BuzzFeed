import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-quizz',
  standalone: true,
  imports: [],
  templateUrl: './quizz.component.html',
  styleUrl: './quizz.component.css'
})
export class QuizzComponent implements OnInit {

  titulo:string = ""
  
  questions:any
  questionSelected:any

  constructor(){}

  ngOnInit(){

  }
}
