import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TelecomOpsComponent } from './components/telecom-ops/telecom-ops.component';
import { TelecomComponent } from './components/pages/telecom/telecom.component';

const routes: Routes = [
  { path: '', component: TelecomOpsComponent },
  { path: 'telecom', redirectTo: '', pathMatch: 'full' },
  { path: 'telecom/:id', component: TelecomComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
