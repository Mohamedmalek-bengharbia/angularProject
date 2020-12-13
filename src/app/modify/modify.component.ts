import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { CommonService } from '../common.service';
import { vol } from '../model/vol';

@Component({
  selector: 'app-modify',
  templateUrl: './modify.component.html',
  styleUrls: ['./modify.component.css']
})
export class ModifyComponent implements OnInit {
  alert:boolean=false;
  modifyform=new FormGroup({

    destination:new FormControl(''),
    Date_dep:new FormControl(''),
    duree:new FormControl(''),
    Date_ret:new FormControl('')
  })
  constructor(private v:CommonService, private router:ActivatedRoute) { }

  ngOnInit(): void {
    console.log(this.router.snapshot.params.id)
    this.v.getCurrentData(this.router.snapshot.params.id).subscribe((r)=>{
      console.log(r)
      this.modifyform=new FormGroup({

        destination:new FormControl(r['destination']),
        Date_dep:new FormControl(r['Date_dep']),
        duree:new FormControl(r['duree']),
        Date_ret:new FormControl(r['Date_ret'])
    })
  })

}
updatevol(){
  this.v.updatevol(this.router.snapshot.params.id,this.modifyform.value).subscribe((r)=>{
    console.log(r,"data updated")
    this.alert=true;
  })
}
closeAlert(){
  this.alert=false;
}
} 
 