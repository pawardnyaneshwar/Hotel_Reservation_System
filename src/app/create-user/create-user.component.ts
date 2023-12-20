import { Component, OnInit } from '@angular/core';
import { User } from '../user';
import { UserService } from '../user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-user',
  templateUrl: './create-user.component.html',
  styleUrls: ['./create-user.component.css']
})


export class CreateUserComponent implements OnInit {
  user: User= new User();
  //UserService: any;
  constructor(private userService: UserService,private router: Router){}
  
  ngOnInit(): void {
      
  }
  saveUser()
  {
    this.userService['createUser'](this.user).subscribe( (data: any)=>
    {
      console.log(data);
      this.goToUserList();

    },
    (error:any)=>
    console.log(error));
  }
    goToUserList()
    {
    this.router.navigate(['/user']);
  }
  onSubmit()
  {
    console.log(this.user);
    this.saveUser();
  }

}