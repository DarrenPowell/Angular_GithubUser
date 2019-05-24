import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GitHubComponent } from './github.component';
import { GitHubUserComponent } from './github-user.component';
import { AuthGuard } from '../login/auth-guard.service';


export const GitHubRouting = RouterModule.forChild([
    {path: 'GitHub', component: GitHubComponent, canActivate: [AuthGuard]},
    {path: 'GitHub/user/:login/:score', component: GitHubUserComponent, canActivate:[AuthGuard]},

]);