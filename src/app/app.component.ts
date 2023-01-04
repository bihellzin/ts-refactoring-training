import { Component, ElementRef, HostListener, OnInit } from '@angular/core';
import { from, Observable, of } from 'rxjs';
import { filter, takeWhile, delay } from 'rxjs/operators';
import { Machine } from './machine';
import { MachineNoRefactor } from './machine-no-refactor';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  name = 'Angular';

  ngOnInit() {
    const machine0 = new Machine(0, '');
    const machine1 = new Machine(1, '');
    const machine2 = new Machine(2, '');
    const machine3 = new Machine(3, '');
    const machine4 = new Machine(4, '');

    const machine0nf = new MachineNoRefactor(0, '');
    const machine1nf = new MachineNoRefactor(1, '');
    const machine2nf = new MachineNoRefactor(2, '');
    const machine3nf = new MachineNoRefactor(3, '');
    const machine4nf = new MachineNoRefactor(4, '');
    console.log('Refactored class execution');
    console.log(
      machine0.description,
      machine0.color,
      machine0.name,
      machine0.trimColor
    );
    console.log(
      machine1.description,
      machine1.color,
      machine1.name,
      machine1.trimColor
    );
    console.log(
      machine2.description,
      machine2.color,
      machine2.name,
      machine2.trimColor
    );
    console.log(
      machine3.description,
      machine3.color,
      machine3.name,
      machine3.trimColor
    );
    console.log(
      machine4.description,
      machine4.color,
      machine4.name,
      machine4.trimColor
    );
    console.log('------------------');
    console.log('Not refactored class execution');
    console.log(
      machine0nf.description,
      machine0nf.color,
      machine0nf.name,
      machine0nf.trimColor
    );
    console.log(
      machine1nf.description,
      machine1nf.color,
      machine1nf.name,
      machine1nf.trimColor
    );
    console.log(
      machine2nf.description,
      machine2nf.color,
      machine2nf.name,
      machine2nf.trimColor
    );
    console.log(
      machine3nf.description,
      machine3nf.color,
      machine3nf.name,
      machine3nf.trimColor
    );
    console.log(
      machine4nf.description,
      machine4nf.color,
      machine4nf.name,
      machine4nf.trimColor
    );
  }
}
