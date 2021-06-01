import { Component, OnInit } from '@angular/core';
import axios from 'axios';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss']
})
export class PostsComponent implements OnInit {

  constructor() { }

  posts: []

  ngOnInit(): void {
    axios.get('https://jsonplaceholder.typicode.com/posts')
      .then(resp => this.posts = resp.data)
      .catch(err => console.log(err));
  }

}
