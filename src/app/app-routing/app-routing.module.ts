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
        ]
        },
    ])
  ],
  declarations: [],
  exports: [ RouterModule]
})
export class AppRoutingModule { }