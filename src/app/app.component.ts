

import {Component, OnInit} from '@angular/core';
import { RestapiService } from './service/restapi.service';



// export class Group {
//   level = 0;
//   parent: Group;
//   expanded = true;
//   totalCounts = 0;
//   get visible(): boolean {
//     return !this.parent || (this.parent.visible && this.parent.expanded);
//   }
// }

export interface IssueDetail {
  description:string;
  sap:string;
  project:string;
  versionFixed:string;
  dueDateCode:string;
  dueDateDelivery:string;
  watch:boolean;
  delivered:boolean;
}





@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})



export class AppComponent implements OnInit {
  ngOnInit(): void {
    this.GetIssueDetails();
  }
  constructor(private service:RestapiService){}
  issuesData:any;
  displayedColumns: string[] = ["description","sap","project","versionFixed","dueDateCode","dueDateDelivery","watch","delivered"];

  GetIssueDetails(){
    this.service.GetIssueDetails().subscribe(response=>{
      this.issuesData=response;
      console.log(this.issuesData);
 
    });
  }
 
  title="ALL ISSUES LIST";
}
