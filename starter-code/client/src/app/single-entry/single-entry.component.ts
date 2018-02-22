import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { RetrieverService }  from '../../services/retriever.service';

@Component({
  selector: 'app-single-entry',
  templateUrl: './single-entry.component.html',
  styleUrls: ['./single-entry.component.css']
})

export class SingleEntryComponent implements OnInit {

  entry:any;

  constructor(
    private router:Router,
    private route: ActivatedRoute,
    private retrieverService:RetrieverService,
  ) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.getFullEntry(params['id']);
    });
  }
  getFullEntry(id) {
    this.retrieverService.getOne(id)
      .subscribe((entry) => {
        this.entry = entry;
      });
  }

}
