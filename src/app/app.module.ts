import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AdminToolbarComponent } from './admin/admin-toolbar/admin-toolbar.component';
import { AdminSidenavComponent } from './admin/admin-sidenav/admin-sidenav.component';
import { AdminDashboardComponent } from './admin/admin-dashboard/admin-dashboard.component';
import { TeamManagementComponent } from './admin/team-management/team-management.component';
import { AddTeamComponent } from './admin/add-team/add-team.component';
import { ListTeamsComponent } from './admin/list-teams/list-teams.component';
import { ViewTeamComponent } from './admin/view-team/view-team.component';
import { UserManagementComponent } from './admin/user-management/user-management.component';
import { AddUserComponent } from './admin/add-user/add-user.component';
import { ListUsersComponent } from './admin/list-users/list-users.component';
import { AdminHomeComponent } from './admin/admin-home/admin-home.component';
import { UserHomeComponent } from './user/user-home/user-home.component';
import { UserToolbarComponent } from './user/user-toolbar/user-toolbar.component';
import { UserSidenavComponent } from './user/user-sidenav/user-sidenav.component';
import { UserProfileComponent } from './user/user-profile/user-profile.component';
import { UserDashboardComponent } from './user/user-dashboard/user-dashboard.component';
import { EventManagerDashboardComponent } from './event-manager/event-manager-dashboard/event-manager-dashboard.component';
import { EventManagerSidenavComponent } from './event-manager/event-manager-sidenav/event-manager-sidenav.component';
import { EventManagerToolbarComponent } from './event-manager/event-manager-toolbar/event-manager-toolbar.component';
import { PaymentHistoryComponent } from './payments/payment-history/payment-history.component';
import { DueAmountsComponent } from './payments/due-amounts/due-amounts.component';
import { PaidAmountsComponent } from './payments/paid-amounts/paid-amounts.component';
import { PayNowComponent } from './payments/pay-now/pay-now.component';
import { FooterComponent } from './shared/footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    AdminToolbarComponent,
    AdminSidenavComponent,
    AdminDashboardComponent,
    TeamManagementComponent,
    AddTeamComponent,
    ListTeamsComponent,
    ViewTeamComponent,
    UserManagementComponent,
    AddUserComponent,
    ListUsersComponent,
    AdminHomeComponent,
    UserHomeComponent,
    UserToolbarComponent,
    UserSidenavComponent,
    UserProfileComponent,
    UserDashboardComponent,
    EventManagerDashboardComponent,
    EventManagerSidenavComponent,
    EventManagerToolbarComponent,
    PaymentHistoryComponent,
    DueAmountsComponent,
    PaidAmountsComponent,
    PayNowComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
