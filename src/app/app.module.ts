import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import{ HttpClientModule } from '@angular/common/http';
import { CreateUserComponent } from './create-user/create-user.component';
import { ListUserComponent } from './list-user/list-user.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { RegistrationComponent } from './registration/registration.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { ContactusComponent } from './contactus/contactus.component';
import { UserHeaderComponent } from './user-header/user-header.component';
import { AdminHeaderComponent } from './admin-header/admin-header.component';
import { RoomDetailsComponent } from './room-details/room-details.component';
import { RoomListComponent } from './room-list/room-list.component';
import { UpdateRoomComponent } from './update-room/update-room.component';
import { CreateBookroomComponent } from './create-bookroom/create-bookroom.component';
import { ListUserinfoComponent } from './list-userinfo/list-userinfo.component';
import { UpdateBookroomComponent } from './update-bookroom/update-bookroom.component';
import { UpdateUserinfoComponent } from './update-userinfo/update-userinfo.component';
import { UserinfoComponent } from './userinfo/userinfo.component';
import { CreateroomComponent } from './create-room/create-room.component';
import { BookroomComponent } from './list-bookroom/list-bookroom.component';
import { ViewRoomComponent } from './view-room/view-room.component';
import { FeedbackComponent } from './feedback/feedback.component';
import { UserLoginComponent } from './user-login/user-login.component';

@NgModule({
  declarations: [
    AppComponent,
    CreateUserComponent,
    ListUserComponent,
    RegistrationComponent,
    LoginComponent,
    HomeComponent,
    AboutusComponent,
    ContactusComponent,
    UserHeaderComponent,
    AdminHeaderComponent,
    RoomDetailsComponent,
    RoomListComponent,
    UpdateRoomComponent,
    CreateBookroomComponent,
    BookroomComponent,
    ListUserinfoComponent,
    UpdateBookroomComponent,
    UpdateUserinfoComponent,
    UserinfoComponent,
    CreateroomComponent,
    ViewRoomComponent,
    FeedbackComponent,
    UserLoginComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    NgbModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
