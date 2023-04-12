import { Component } from '@angular/core';

@Component({
  selector: 'bm-foo',
  templateUrl: './foo.component.html',
  styleUrls: ['./foo.component.css'],
})
export class FooComponent {
  foo: string = 'Angular';
  bar: number;
  names: string[] = ['Mehdi', 'yasamin', 'shuli'];
  myUrl = 'www.Google.de';
  title: string = '';
  constructor() {
    this.bar = 12345;
  }
  myClickHandler() {
    return (this.foo = this.foo + '2');
  }
}
