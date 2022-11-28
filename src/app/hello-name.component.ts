import { Component } from '@angular/core';

@Component({
    selector: 'app-hello-name',
    template: '<h1>{{name}}</h1>',
    styles: [`
    h1 {
        color:green;
    }
    `]
})

export class HelloNameComponent {
    name = 'Hello Chavdar!';
}