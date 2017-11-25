import { AppRoutingModule } from './app-routing/app-routing.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { MultiselectDropdownModule } from 'angular-2-dropdown-multiselect';

import { AppComponent } from './app.component';
import { StarterComponent } from './starter/starter.component';
import { StarterHeaderComponent } from './starter/starter-header/starter-header.component';
import { StarterLeftSideComponent } from './starter/starter-left-side/starter-left-side.component';
import { StarterContentComponent } from './starter/starter-content/starter-content.component';
import { StarterFooterComponent } from './starter/starter-footer/starter-footer.component';
import { StarterControlSidebarComponent } from './starter/starter-control-sidebar/starter-control-sidebar.component';

import { ProfileComponent } from './profile/profile.component';
import { SearchComponent } from './search/search/search.component';
import { SearchTabMilestonesComponent } from './search/search-tab-milestones/search-tab-milestones.component';
import { SearchTabDocumentsComponent } from './search/search-tab-documents/search-tab-documents.component';
import { SearchResultComponent } from './search/search-result/search-result.component';
import { SearchTabsComponent } from './search/search-tabs/search-tabs.component';
import { ModalComponent } from './modals/modal/modal.component';
import { ModalService } from './modals/modal.service';
import { RegulatorComponent } from './regulartor/regulator/regulator.component';
import { RegulatorTabsComponent } from './regulartor/regulator-tabs/regulator-tabs.component';
import { RegulatorTabDocumentsComponent } from './regulartor/regulator-tab-documents/regulator-tab-documents.component';
import { RegulatorTabMilestonesComponent } from './regulartor/regulator-tab-milestones/regulator-tab-milestones.component';
import { NotificationsComponent } from './notifications/notifications.component';
import { StandardsComponent } from './standards/standards/standards.component';
import { StandardsTabsComponent } from './standards/standards-tabs/standards-tabs.component';
import { StandardsTabDocumentsComponent } from './standards/standards-tab-documents/standards-tab-documents.component';
import { StandardsTabMilestonesComponent } from './standards/standards-tab-milestones/standards-tab-milestones.component';
import { StandardsTabQuickGuideComponent } from './standards/standards-tab-quick-guide/standards-tab-quick-guide.component';
import { StandardsTabImplementationGuideComponent } from './standards/standards-tab-implementation-guide/standards-tab-implementation-guide.component';
import { StandardsTabContactsComponent } from './standards/standards-tab-contacts/standards-tab-contacts.component';
import { StandardsTabLinksComponent } from './standards/standards-tab-links/standards-tab-links.component';
import { QuickGuideOverviewComponent } from './standards/quick-guide-overview/quick-guide-overview.component';
import { QuickGuideGlossaryComponent } from './standards/quick-guide-glossary/quick-guide-glossary.component';

@NgModule({
  declarations: [
    AppComponent,
    StarterComponent,
    StarterHeaderComponent,
    StarterLeftSideComponent,
    StarterContentComponent,
    StarterFooterComponent,
    StarterControlSidebarComponent,
    ProfileComponent,
    SearchComponent,
    SearchTabMilestonesComponent,
    SearchTabDocumentsComponent,
    SearchResultComponent,
    SearchTabsComponent,
    ModalComponent,
    RegulatorComponent,
    RegulatorTabsComponent,
    RegulatorTabDocumentsComponent,
    RegulatorTabMilestonesComponent,
    NotificationsComponent,
    StandardsComponent,
    StandardsTabsComponent,
    StandardsTabDocumentsComponent,
    StandardsTabMilestonesComponent,
    StandardsTabQuickGuideComponent,
    StandardsTabImplementationGuideComponent,
    StandardsTabContactsComponent,
    StandardsTabLinksComponent,
    QuickGuideOverviewComponent,
    QuickGuideGlossaryComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MultiselectDropdownModule,
  ],
  providers: [ModalService],
  bootstrap: [AppComponent]
})
export class AppModule { }
