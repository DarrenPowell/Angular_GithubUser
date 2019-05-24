import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http'; 
import { GitHubService } from './github/github.service';
import { HomeComponent } from './home.component';
import { GitHubComponent } from './github/github.component';
import { NotFoundComponent } from './notfound.component';
import { routing } from './app.routing';
import { MyOwnComponent } from './my.component';
import { GitHubUserComponent } from './github/github-user.component';
import { AuthGuard } from './login/auth-guard.service';
import { LoginComponent } from './login/login.component';
import { LoginService } from './login/login.service';
import { GitHubModule } from './github/github.module';
import { LoginModule } from './login/login.module';
import { GitHubRouting } from './github/github.routing';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NotFoundComponent,
    MyOwnComponent,
   

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    GitHubRouting,
    routing,

    GitHubModule,
    LoginModule,
    

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {

 }
