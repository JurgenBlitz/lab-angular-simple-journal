import { Component, OnInit } from '@angular/core';
import { RetrieverService }  from '../../services/retriever.service';

@Component({
  selector: 'app-entry-list',
  templateUrl: './entry-list.component.html',
  styleUrls: ['./entry-list.component.css']
})
export class EntryListComponent implements OnInit {

  entries:Array<any>;
  constructor(public pS:RetrieverService) { 
    this.pS.getList().subscribe(list => this.entries = list);
  }


  ngOnInit() {
  }

}
