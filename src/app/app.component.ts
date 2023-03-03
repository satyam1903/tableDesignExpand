import {Component, OnInit} from '@angular/core';
import { count } from 'rxjs';
import { RestapiService } from './service/restapi.service';



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

  doneIssueTable: boolean = false;
  openIssueTable: boolean=false;
  readyIssueTable: boolean=false;
  openIssueCount: number=0;
  readyIssueCount: number=0;
  doneIssueCount: number=0;
  showDoneIssue() {
    this.doneIssueTable = !this.doneIssueTable;
  }
  showOpenIssue(){
    this.openIssueTable = !this.openIssueTable;
  }
  showReadyIssue(){
    this.readyIssueTable = !this.readyIssueTable;
  }

  
  ngOnInit(): void {
    this.GetIssueDetails();
  }
  constructor(private service:RestapiService){}
  Data: any;
  issuesData:any;
  openIssue:any;
  DoneIssue:any;
  openIssuesCount:any;
  displayedColumns: string[] = ["description","sap","project","versionFixed","dueDateCode","dueDateDelivery","watch","delivered"];

  GetIssueDetails(){
    this.service.GetIssueDetails().subscribe(response=>{
      let jsonString = JSON.stringify(response);
      let issues:IssueDetail[] = JSON.parse(jsonString);
      this.issuesData = issues.filter((issue:IssueDetail) => issue.delivered === false);
      let openCount= this.issuesData.length;
      this.openIssueCount=openCount;
      
      this.DoneIssue = issues.filter((issue:IssueDetail) => issue.delivered === true);
      let doneCount=this.DoneIssue.length;
      this.doneIssueCount=doneCount;
      console.log(this.DoneIssue);
      console.log(this.openIssueCount);
        
      // console.log(this.issuesData);
 
    });

  }
 
  title="ALL ISSUES LIST";

}