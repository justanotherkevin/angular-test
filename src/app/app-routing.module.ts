import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TelecomOpsComponent } from './components/telecom-ops/telecom-ops.component';

const routes: Routes = [{ path: '', component: TelecomOpsComponent },
{path:'/telecom/:id'}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
