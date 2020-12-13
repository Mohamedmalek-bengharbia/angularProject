import { Component, Input, OnInit } from '@angular/core';
import { CommonService } from '../common.service';
import { vol } from '../model/vol';

@Component({
  selector: 'app-consulter',
  templateUrl: './consulter.component.html',
  styleUrls: ['./consulter.component.css']
})
export class ConsulterComponent implements OnInit {
  @Input() vol:vol;
  @Input() searchnameInput;
  public list:any;
  public collection:any=[];
  alert:boolean=false;
  
  constructor(private commonService:CommonService) { }

  ngOnInit(): void {
    this.commonService.getVol().subscribe((result)=>{
      this.list=result;
      console.log(this.list)
    });
  }
  deletevol(vol){
    this.collection.splice(vol.id,1)
    this.commonService.deletevol(vol).subscribe((r)=>{
      console.log("data deleted successfully!", r )
      this.alert=true;
    });
  }
  closeAlert(){
    this.alert=false;
  }

}
