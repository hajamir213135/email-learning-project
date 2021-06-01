import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import axios from 'axios';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss']
})
export class PostComponent implements OnInit {

  constructor(private route: ActivatedRoute) { }

  post: any

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      axios.get('https://jsonplaceholder.typicode.com/posts/' + params.id)
        .then(resp => this.post = resp.data)
        .catch(err => console.log(err))
    })
  }


}
