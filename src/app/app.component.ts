import { Component, OnInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, OnDestroy {
  title = 'angular-video-series';
  intervalSub: string | number | NodeJS.Timer | undefined;

  
  ngOnInit() {
    this.intervalSub = setInterval(()=>{
      console.log('Hello from ngOnInit');

    }, 1000);
  }

  ngOnDestroy() {
    if(this.intervalSub) {
      clearInterval(this.intervalSub);

    }
  }

  getMin(a: number, b: number) {
    if(a < b){
      return a;
    }
    return b;
  }
}
