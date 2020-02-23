import { AdmitstatusComponent } from './admitstatus/admitstatus.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdmitStudentComponent } from './admit-student.component';


const routes: Routes = [
{
  path: '', component: AdmitStudentComponent
},
{
  path:'admit', component: AdmitstatusComponent
}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdmitStudentRoutingModule { }
