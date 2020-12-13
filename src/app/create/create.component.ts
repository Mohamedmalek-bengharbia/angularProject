import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { CommonService } from '../common.service';
import { User } from '../model/User';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {
 
  user:User = new User();

show:boolean = false;

add():void{
  this.us.addUser(this.user).subscribe(res => console.log(res));
  this.show = true;
  setTimeout(()=>{ 
    this.show = false; 
  }, 3000);
}

constructor(private us: CommonService) { }

ngOnInit(): void {
  
}
}
