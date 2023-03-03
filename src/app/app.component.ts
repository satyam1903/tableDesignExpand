import {Component, OnInit} from '@angular/core';
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
  displayedColumns: string[] = ["description","sap","project","versionFixed","dueDateCode","dueDateDelivery","watch","delivered"];

  GetIssueDetails(){
    this.service.GetIssueDetails().subscribe(response=>{
      
      this.openIssue=response;
      this.DoneIssue;
      // console.log(this.issuesData);
 
    });

  }
 
  title="ALL ISSUES LIST";
}