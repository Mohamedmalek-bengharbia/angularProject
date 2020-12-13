import { Component, OnInit } from '@angular/core';
import { CommonService } from '../common.service';

@Component({
  selector: 'app-consulter-parent',
  templateUrl: './consulter-parent.component.html',
  styleUrls: ['./consulter-parent.component.css']
})
export class ConsulterParentComponent implements OnInit {
  Listvol: any;
  searchname:string;
  constructor(private commonService:CommonService) { }

  ngOnInit(): void {
    this.Listvol=this.commonService.getVol().subscribe((r)=>(this.Listvol=r));
    console.log(this.Listvol)
  }

}
