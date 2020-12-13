import { Component, OnInit } from '@angular/core';
import { CommonService } from '../common.service';
import { vol } from '../model/vol';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {
//  onSubmit(value:any){
  // console.log(value);
 //}
 vol:vol =new vol();
 show:boolean = false;

add():void{
  this.v.addVol(this.vol).subscribe(res => console.log(res));
  this.show = true;
  setTimeout(()=>{ 
    this.show = false; 
  }, 3000);
}
  constructor(private v:CommonService) { }

  ngOnInit(): void {
   
  }

}
