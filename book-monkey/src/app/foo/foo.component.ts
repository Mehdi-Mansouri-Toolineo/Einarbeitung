import { Component } from '@angular/core';

@Component({
  selector: 'bm-foo',
  templateUrl: './foo.component.html',
  styleUrls: ['./foo.component.css'],
})
export class FooComponent {
  foo: string = 'Angular';
  myData:object={
    titles:'s',
    name:'name'

  }
  bar: number;
  date:Date=new Date()
  names: string[] = ['Mehdi', 'yasamin', 'shuli'];
  myUrl = 'www.Google.de';
  title: string = '';
  constructor() {
    this.bar = 12345;
  }
  myClickHandler() {
    return (this.foo = this.foo + '2');
  }
  useTheInput(){
    const randomValue: number = Math.floor(Math.random()* 3)+1;
   this.names[1]=this.names[randomValue];
  }
}
