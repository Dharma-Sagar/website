import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SermonComponent } from './sermon.component';

const routes: Routes = [{ path: '', component: SermonComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SermonRoutingModule { }
