import { BrowserModule, Title } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule, XHRBackend, RequestOptions } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgxMyDatePickerModule } from 'ngx-mydatepicker';
import { DateTimePickerModule } from 'ng-pick-datetime'; // https://github.com/DanielYKPan/date-time-picker
import { SelectModule } from 'ng2-select';
import { NgxPaginationModule } from 'ngx-pagination'; // http://michaelbromley.github.io/ngx-pagination/#/

// directives
import { EqualValidator } from 'app/directives/equal-validator.directive';

// pipes
import { SortStringPipe } from 'app/pipes/sortString.pipe';
import { SortDatePipe } from 'app/pipes/sortDate.pipe';
import { SortNumberPipe } from 'app/pipes/sortNumber.pipe';


// guards
import { AuthGuard } from 'app/guards/auth.guard';
import { AdminGuard } from 'app/guards/admin.guard';
import { DisabledGuard } from 'app/guards/disabled.guard';

// interceptor
import { HttpInterceptorService } from 'app/services/http.service';

// services
import { LeftProfileService } from 'app/services/left-profile.service'; // profile view control
import { AuthorizationService } from 'app/services/authorization.service';
import { AdministrationService } from 'app/services/administration.service';
import { UsersService } from 'app/services/users.service';
import { PublicService } from 'app/services/public.service';
import { SettlementsService } from 'app/services/settlements.service';

// components
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { BreadcrumbsComponent } from './components/breadcrumbs/breadcrumbs.component';
import { LoginComponent } from './components/login/login.component';
import { ErrorComponent } from './components/error/error.component';
import { MenuComponent } from './components/menu/menu.component';
import { AdministrationComponent } from './components/administration/administration.component';
import { HomeComponent } from './components/home/home.component';
import { ProfileComponent } from './components/profile/profile.component';
import { EventsComponent } from './components/events/events.component';
import { NewsComponent } from './components/news/news.component';
import { EquipmentComponent } from './components/equipment/equipment.component';
import { GroupsComponent } from './components/groups/groups.component';
import { UsersComponent } from './components/users/users.component';
import { ModalAddCoachComponent } from './components/users/modal-add-coach/modal-add-coach.component';
import { MessagesComponent } from './components/messages/messages.component';
import { TimetableComponent } from './components/timetable/timetable.component';
import { MsgReceivedComponent } from './components/messages/msg-received/msg-received.component';
import { MsgSentComponent } from './components/messages/msg-sent/msg-sent.component';
import { MsgNewComponent } from './components/messages/msg-new/msg-new.component';
import { MsgTabsComponent } from './components/messages/msg-tabs/msg-tabs.component';
import { MygroupsComponent } from './components/profile/mygroups/mygroups.component';
import { MydataComponent } from './components/profile/mydata/mydata.component';
import { MychargesComponent } from './components/profile/mycharges/mycharges.component';
import { MypaymentsComponent } from './components/profile/mypayments/mypayments.component';
import { MytimetableComponent } from './components/profile/mytimetable/mytimetable.component';
import { MyinjuryComponent } from './components/profile/myinjury/myinjury.component';
import { MyequipmentComponent } from './components/profile/myequipment/myequipment.component';
import { MyworkComponent } from './components/profile/mywork/mywork.component';
import { TabsAreaComponent } from './components/profile/tabs-area/tabs-area.component';
import { LeftProfileInfoComponent } from './components/profile/left-profile-info/left-profile-info.component';
import { SettlementsComponent } from './components/settlements/settlements.component';
import { SChargesComponent } from './components/settlements/s-charges/s-charges.component';
import { SPaymentsComponent } from './components/settlements/s-payments/s-payments.component';
import { ResourcesComponent } from './components/administration/resources/resources.component';
import { SectionsgroupsComponent } from './components/administration/sectionsgroups/sectionsgroups.component';
import { ModalManageSectionsComponent } from './components/administration/sectionsgroups/modal-manage-sections/modal-manage-sections.component';
import { ModalEditSectionComponent } from './components/administration/sectionsgroups/modal-edit-section/modal-edit-section.component';
import { ModalAddSectionComponent } from './components/administration/sectionsgroups/modal-add-section/modal-add-section.component';
import { ModalAddGroupComponent } from './components/administration/sectionsgroups/modal-add-group/modal-add-group.component';
import { ModalEditGroupComponent } from './components/administration/sectionsgroups/modal-edit-group/modal-edit-group.component';
import { ModalListUsersComponent } from './components/administration/sectionsgroups/modal-list-users/modal-list-users.component';
import { ModalAddUserComponent } from './components/administration/sectionsgroups/modal-add-user/modal-add-user.component';
import { ModalAddActivityComponent } from './components/administration/sectionsgroups/modal-add-activity/modal-add-activity.component';
import { ModalUserInfoGroupComponent } from 'app/components/administration/sectionsgroups/modal-user-info-group/modal-user-info-group.component';
import { PersonalizationsComponent } from './components/administration/personalizations/personalizations.component';
import { NotetypesComponent } from './components/administration/notetypes/notetypes.component';
import { CoachReplacementsComponent } from './components/administration/coach-replacements/coach-replacements.component';
import { AdminTabsComponent } from './components/administration/admin-tabs/admin-tabs.component';
import { ActivitiesComponent } from './components/administration/activities/activities.component';
import { HomeGuardianComponent } from './components/guardian/home-guardian/home-guardian.component';
import { ModalPupilInfoComponent } from './components/guardian/home-guardian/modal-pupil-info/modal-pupil-info.component';
import { ModalEditPupilComponent } from './components/guardian/home-guardian/modal-edit-pupil/modal-edit-pupil.component';
import { ModalAddPlayerComponent } from './components/guardian/home-guardian/modal-add-player/modal-add-player.component';
import { EmailConfirmationComponent } from './components/email-confirmation/email-confirmation.component';
import { RegisterComponent } from './components/register/register.component';
import { PeriodsComponent } from './components/settlements/periods/periods.component';
import { SettlementsTabsComponent } from './components/settlements/settlements-tabs/settlements-tabs.component';
import { InvoicesComponent } from './components/settlements/periods/invoices/invoices.component';
import { ModalAddPeriodComponent } from './components/settlements/periods/modal-add-period/modal-add-period.component';
import { ModalMarkPaidComponent } from './components/settlements/periods/modal-mark-paid/modal-mark-paid.component';
import { UpdatePasswordComponent } from './components/update-password/update-password.component';
import { UsersWithoutGroupComponent } from './components/users/users-without-group/users-without-group.component';
import { UsersTabsComponent } from './components/users/users-tabs/users-tabs.component';
import { UsersListComponent } from './components/users/users-list/users-list.component';
import { UsersInactiveComponent } from './components/users/users-inactive/users-inactive.component';
import { UsersCoachListComponent } from './components/users/users-coach-list/users-coach-list.component';
import { UsersAllListComponent } from './components/users/users-all-list/users-all-list.component';
import { ModalUserInfoComponent } from './components/users/modal-user-info/modal-user-info.component';
import { ModalEditUserComponent } from './components/users/modal-edit-user/modal-edit-user.component';
import { ModalEditMydataComponent } from './components/profile/modal-edit-mydata/modal-edit-mydata.component';
import { UsersWithoutPlayersComponent } from './components/users/users-without-players/users-without-players.component';
import { PaidInvoicesComponent } from './components/settlements/periods/paid-invoices/paid-invoices.component';
import { UnpaidInvoicesComponent } from './components/settlements/periods//unpaid-invoices/unpaid-invoices.component';
import { InvoicesTabsComponent } from './components/settlements/periods//invoices-tabs/invoices-tabs.component';
import { ModalEditCoachComponent } from './components/users/modal-edit-coach/modal-edit-coach.component';
import { ModalEditActivityComponent } from './components/administration/activities/modal-edit-activity/modal-edit-activity.component';
import { ModalCorrectionInvoiceComponent } from 'app/components/settlements/periods/modal-correction-invoice/modal-correction-invoice.component';


@NgModule({
  declarations: [
    EqualValidator,
    AppComponent,
    SortStringPipe,
    LoginComponent, 
    AdministrationComponent,
    ErrorComponent,
    MenuComponent,
    AdministrationComponent,
    HomeComponent,
    ProfileComponent,
    EventsComponent,
    NewsComponent,
    EquipmentComponent,
    GroupsComponent,
    UsersComponent,
    MessagesComponent,
    TimetableComponent,
    MsgReceivedComponent,
    MsgSentComponent,
    MygroupsComponent,
    MydataComponent,
    MychargesComponent,
    MypaymentsComponent,
    MytimetableComponent,
    MyinjuryComponent,
    MyequipmentComponent,
    MyworkComponent,
    SettlementsComponent,
    SChargesComponent,
    SPaymentsComponent,
    ResourcesComponent,
    SectionsgroupsComponent,
    PersonalizationsComponent,
    NotetypesComponent,
    CoachReplacementsComponent,
    HeaderComponent,
    FooterComponent,
    TabsAreaComponent,
    LeftProfileInfoComponent,
    BreadcrumbsComponent,
    MsgTabsComponent,
    MsgNewComponent,
    AdminTabsComponent,
    ModalAddCoachComponent,
    HomeGuardianComponent,
    ModalAddPlayerComponent,
    EmailConfirmationComponent,
    RegisterComponent,
    ModalAddGroupComponent,
    ModalManageSectionsComponent,
    ModalEditSectionComponent,
    ModalAddSectionComponent,
    ModalEditGroupComponent,
    ModalListUsersComponent,
    ModalAddUserComponent,
    PeriodsComponent,
    SettlementsTabsComponent,
    InvoicesComponent,
    ModalAddPeriodComponent,
    UpdatePasswordComponent,
    ActivitiesComponent,
    ModalAddActivityComponent,
    UsersWithoutGroupComponent,
    UsersTabsComponent,
    UsersListComponent,
    UsersInactiveComponent,
    ModalPupilInfoComponent,
    UsersCoachListComponent,
    UsersAllListComponent,
    ModalUserInfoComponent,
    ModalUserInfoGroupComponent,
    ModalEditUserComponent,
    UsersWithoutPlayersComponent,
    ModalEditPupilComponent,
    ModalEditMydataComponent,
    PaidInvoicesComponent,
    ModalMarkPaidComponent,
    UnpaidInvoicesComponent,
    InvoicesTabsComponent,
    ModalEditCoachComponent,
    SortDatePipe,
    ModalEditActivityComponent,
    ModalCorrectionInvoiceComponent,
    SortNumberPipe
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    AppRoutingModule,
    NgxMyDatePickerModule.forRoot(),
    NgxPaginationModule,
    DateTimePickerModule,
    SelectModule
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: HttpInterceptorService,
      multi: true
    },
    Title,
    AuthGuard,
    AdminGuard,
    DisabledGuard,
    LeftProfileService,
    AuthorizationService,
    AdministrationService,
    UsersService,
    PublicService,
    SettlementsService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
