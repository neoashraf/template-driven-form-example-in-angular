import { Component } from '@angular/core';
import {NgForm} from '@angular/forms';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  categories = [
    {id:"1",categoryName:"Computer Science"},
    {id:"2",categoryName:"Arts"},
    {id:"3",categoryName:"Finance"}
  ]

  submitted : boolean;

  submit(submittedValues : NgForm){
    this.submitted = true;
    console.log(submittedValues.value);
    console.log(submittedValues.valid);

  }

}
