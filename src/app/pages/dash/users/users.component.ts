import { NgFor, NgIf } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { User_Type } from '../../../types';
import { UsersService } from './users.service';

@Component({
  selector: 'app-users',
  imports: [NgFor, NgIf, RouterLink],
  templateUrl: './users.component.html',
  styleUrl: './users.component.css'
})
export class UsersComponent implements OnInit {

  userList: Array<User_Type> = [];
  loading: boolean = false;

  constructor(
    private usersServices: UsersService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.loading = true
    this.usersServices.getAllUsers().subscribe({
      next: (res) => {
        if ('data' in res.body!) {
          this.userList = res.body.data.users
        }
      },
      error: (error) => {
        console.log(error)
        this.loading = false
      },
      complete: () => {
        this.loading = false;
      }
    })
  }
}
