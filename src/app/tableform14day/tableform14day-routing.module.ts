import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Tableform14dayPage } from './tableform14day.page';



const routes: Routes = [
  {
    path: 'tableform14day',
    component: Tableform14dayPage,
    children: [
      {
        path: 'screening',
        loadChildren: () => import('../screening/screening.module').then(m => m.ScreeningPageModule)
      },
      {
        path: 'form14day',
        loadChildren: () => import('../form14day/form14day.module').then(m => m.Form14dayPageModule)
      },
      {
        path: 'chatbot',
        loadChildren: () => import('../chatbot/chatbot.module').then(m => m.ChatbotPageModule)
      },
      {
        path: '',
        redirectTo: 'app/tableform14day/screening',
        pathMatch: 'full'
      }
    ]
  },
  {
    path: '',
    redirectTo: '/tableform14day/screening',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Tableform14dayPageRoutingModule {}

// const routes: Routes = [
//   {
//     path: '',
//     component: Tableform14dayPage
//   }
// ];

// @NgModule({
//   imports: [RouterModule.forChild(routes)],
//   exports: [RouterModule],
// })
// export class Tableform14dayPageRoutingModule {}
