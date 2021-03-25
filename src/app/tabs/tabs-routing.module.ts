import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: 'tabs',
    component: TabsPage,
    children: [
      {
        path: '/',
        loadChildren: () => import('../home/home.module').then(m => m.HomePageModule)
      },
      // {
      //   path: 'form14day',
      //   loadChildren: () => import('../form14day/form14day.module').then(m => m.Form14dayPageModule)
      // },
      // {
      //   path: 'chatbot',
      //   loadChildren: () => import('../chatbot/chatbot.module').then(m => m.ChatbotPageModule)
      // },
      {
        path: 'form14day',
        loadChildren: () => import('../form14day/form14day.module').then(m => m.Form14dayPageModule)
      },
      {
        path: '',
        redirectTo: '/tabs/screening',
        pathMatch: 'full'
      }
    ]
  },
  // {
  //   path: '',
  //   redirectTo: '/tabs/screening',
  //   pathMatch: 'full'
  // },
  {
    path: '',
    loadChildren: () => import('../home/home.module').then(m => m.HomePageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TabsPageRoutingModule {}
