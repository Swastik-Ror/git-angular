import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Header } from './header/header';
<<<<<<< HEAD
import { Footer } from './footer/footer';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,Header,Footer],
=======

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,Header],
>>>>>>> 197b2f7fd4797d94a9b7b2bbe65c32b1dcfeb125
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('ecom-project');
}
