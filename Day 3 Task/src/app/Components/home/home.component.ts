import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  greeting = 'Hello ';
  name = 'aya';
  userName: string = 'Mousa';

  students: string[] = ['Omar', 'Ezat', 'Tara', 'Kasem'];

  courses: string[] = ['PHP', 'Asp.net', 'Node.js'];

  users: any[] = [
    { name: 'ali', title: 'FrontEnd', isAdmin: true },
    { name: 'aya', title: 'BackEnd', isAdmin: false },
    { name: 'Mohab', title: 'Full Stack', isAdmin: false },
    { name: 'Lith', title: 'Tester', isAdmin: true },
  ];

  num: number = 0;

  constructor() {}

  ngOnInit(): void {}
}
