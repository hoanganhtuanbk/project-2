import { StarterComponent } from '../starter/starter.component';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import {StarterContentComponent} from '../starter/starter-content/starter-content.component';
import {ProfileComponent} from '../profile/profile.component';

import {SearchComponent} from '../search/search/search.component';
import {SearchTabsComponent} from '../search/search-tabs/search-tabs.component';
import {SearchResultComponent} from '../search/search-result/search-result.component';
import {SearchTabDocumentsComponent} from '../search/search-tab-documents/search-tab-documents.component';

import {SearchTabMilestonesComponent} from '../search/search-tab-milestones/search-tab-milestones.component';
import {RegulatorComponent} from '../regulartor/regulator/regulator.component';
import {RegulatorTabDocumentsComponent} from '../regulartor/regulator-tab-documents/regulator-tab-documents.component';
import {RegulatorTabMilestonesComponent} from '../regulartor/regulator-tab-milestones/regulator-tab-milestones.component';
import {RegulatorTabsComponent} from '../regulartor/regulator-tabs/regulator-tabs.component';

import {NotificationsComponent} from '../notifications/notifications.component';

import {StandardsComponent} from '../standards/standards/standards.component';
import {StandardsTabsComponent} from '../standards/standards-tabs/standards-tabs.component';
import {StandardsTabDocumentsComponent} from '../standards/standards-tab-documents/standards-tab-documents.component';
import {StandardsTabMilestonesComponent} from '../standards/standards-tab-milestones/standards-tab-milestones.component';
import {StandardsTabQuickGuideComponent} from '../standards/standards-tab-quick-guide/standards-tab-quick-guide.component';
import {StandardsTabImplementationGuideComponent} from '../standards/standards-tab-implementation-guide/standards-tab-implementation-guide.component';
import {StandardsTabContactsComponent} from '../standards/standards-tab-contacts/standards-tab-contacts.component';
import {StandardsTabLinksComponent} from '../standards/standards-tab-links/standards-tab-links.component';
import {QuickGuideOverviewComponent} from '../standards/quick-guide-overview/quick-guide-overview.component';
import {QuickGuideGlossaryComponent} from '../standards/quick-guide-glossary/quick-guide-glossary.component';

@NgModule({
  imports: [
    RouterModule.forRoot([
      {
        path: '',
        component: StarterComponent,
        children: [
          {
            path: '',
            redirectTo: 'dashboard',
            pathMatch: 'full'
          },
          {
            path: 'dashboard',
            component: StarterContentComponent
          },
          {
            path: 'notifications',
            component: NotificationsComponent
          },
          {
            path: 'profile',
            component: ProfileComponent
          },
          {
            path: 'search',
            component: SearchComponent,
            children: [
              {
                path: '',
                component: SearchTabsComponent,
                children: [
                  {
                    path: '',
                    redirectTo: 'documents',
                    pathMatch: 'full'
                  },
                  {
                    path: 'documents',
                    component: SearchTabDocumentsComponent
                  },
                  {
                    path: 'milestones',
                    component: SearchTabMilestonesComponent
                  },
                ]
              },
              {
                path: 'result',
                component: SearchResultComponent
              },
            ]
          },
          {
            path: 'regulator',
            component: RegulatorComponent,
            children: [
              {
                path: '',
                component: RegulatorTabsComponent,
                children: [
                  {
                    path: '',
                    redirectTo: 'documents',
                    pathMatch: 'full'
                  },
                  {
                    path: 'documents',
                    component: RegulatorTabDocumentsComponent
                  },
                  {
                    path: 'milestones',
                    component: RegulatorTabMilestonesComponent
                  },
                ]
              },
            ]
          },
          {
            path: 'regulations-regulators',
            component: StandardsComponent,
            children: [
              {
                path: '',
                component: StandardsTabsComponent,
                children: [
                  {
                    path: '',
                    redirectTo: 'documents',
                    pathMatch: 'full'
                  },
                  {
                    path: 'documents',
                    component: StandardsTabDocumentsComponent
                  },
                  {
                    path: 'milestones',
                    component: StandardsTabMilestonesComponent
                  },
                  {
                    path: 'quick-guide',
                    component: StandardsTabQuickGuideComponent,
                    children: [
                      {
                        path: '',
                        redirectTo: 'overview',
                        pathMatch: 'full'
                      },
                      {
                        path: 'overview',
                        component: QuickGuideOverviewComponent,
                      },
                      {
                        path: 'glossary',
                        component: QuickGuideGlossaryComponent,
                      }
                      ]
                  },
                  {
                    path: 'implementation-guide',
                    component: StandardsTabImplementationGuideComponent
                  },
                  {
                    path: 'contact',
                    component: StandardsTabContactsComponent
                  },
                  {
                    path: 'links',
                    component: StandardsTabLinksComponent
                  },
                ]
              },
            ]
          },
        ]
        },
    ])
  ],
  declarations: [],
  exports: [ RouterModule]
})
export class AppRoutingModule { }
