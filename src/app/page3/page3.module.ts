import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import {ComponentsModule} from '../components/components.module';

import { IonicModule } from '@ionic/angular';

import { Page3Page } from './page3.page';

const routes: Routes = [
  {
    path: '',
    component: Page3Page
  }
];

@NgModule({
  imports: [
    ComponentsModule,
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [Page3Page]
})
export class Page3PageModule {}
