import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule)
  },
  {
    path: 'chatbot',
    loadChildren: () => import('./chatbot/chatbot.module').then( m => m.ChatbotPageModule)
  },
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: 'loginadmin',
    loadChildren: () => import('./loginadmin/loginadmin.module').then( m => m.LoginadminPageModule)
  },
  {
    path: 'information',
    loadChildren: () => import('./information/information.module').then( m => m.InformationPageModule)
  },
  {
    path: 'form14day',
    loadChildren: () => import('./form14day/form14day.module').then( m => m.Form14dayPageModule)
  },
  {
    path: 'healthform',
    loadChildren: () => import('./healthform/healthform.module').then( m => m.HealthformPageModule)
  },
  {
    path: 'description',
    loadChildren: () => import('./description/description.module').then( m => m.DescriptionPageModule)
  },
  {
    path: 'patientmap',
    loadChildren: () => import('./patientmap/patientmap.module').then( m => m.PatientmapPageModule)
  },
  // {
  //   path: 'patientgraph',
  //   loadChildren: () => import('./patientgraph/patientgraph.module').then( m => m.PatientgraphPageModule)
  // },
  {
    path: 'screening',
    loadChildren: () => import('./screening/screening.module').then( m => m.ScreeningPageModule)
  },
  {
    path: 'register',
    loadChildren: () => import('./register/register.module').then( m => m.RegisterPageModule)
  },
  {
    path: 'loginpatient',
    loadChildren: () => import('./loginpatient/loginpatient.module').then( m => m.LoginpatientPageModule)
  },
  {
    path: 'from14daytable',
    loadChildren: () => import('./from14daytable/from14daytable.module').then( m => m.From14daytablePageModule)
  },
  {
    path: 'screeningresult',
    loadChildren: () => import('./screeningresult/screeningresult.module').then( m => m.ScreeningresultPageModule)
  },
  {
    path: 'addformquestion',
    loadChildren: () => import('./addformquestion/addformquestion.module').then( m => m.AddformquestionPageModule)
  },
  {
    path: 'mediumstatus',
    loadChildren: () => import('./mediumstatus/mediumstatus.module').then( m => m.MediumstatusPageModule)
  },
  {
    path: 'riskystatus',
    loadChildren: () => import('./riskystatus/riskystatus.module').then( m => m.RiskystatusPageModule)
  },
  {
    path: 'veryriskystatus',
    loadChildren: () => import('./veryriskystatus/veryriskystatus.module').then( m => m.VeryriskystatusPageModule)
  },
  {
    path: 'namenormal',
    loadChildren: () => import('./namenormal/namenormal.module').then( m => m.NamenormalPageModule)
  },
  {
    path: 'checkuser',
    loadChildren: () => import('./checkuser/checkuser.module').then( m => m.CheckuserPageModule)
  },
  {
    path: 'namemediumstatus',
    loadChildren: () => import('./namemediumstatus/namemediumstatus.module').then( m => m.NamemediumstatusPageModule)
  },
  {
    path: 'nameriskstatus',
    loadChildren: () => import('./nameriskstatus/nameriskstatus.module').then( m => m.NameriskstatusPageModule)
  },
  {
    path: 'nameveryriskstatus',
    loadChildren: () => import('./nameveryriskstatus/nameveryriskstatus.module').then( m => m.NameveryriskstatusPageModule)
  },
  {
    path: 'normalstatus',
    loadChildren: () => import('./normalstatus/normalstatus.module').then( m => m.NormalstatusPageModule)
  },
  // {
  //   path: 'name',
  //   loadChildren: () => import('./name/name.module').then( m => m.NamePageModule)
  // },

];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
