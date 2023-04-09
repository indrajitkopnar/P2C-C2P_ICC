import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-demo',
  templateUrl: './demo.component.html',
  styleUrls: ['./demo.component.css']
})
export class DemoComponent 
{

@Output() public Myevent = new EventEmitter();

public SendMessage()
{
  this.Myevent.emit("child to parent");
}

@Input() public MessageFromParent1="";

}
