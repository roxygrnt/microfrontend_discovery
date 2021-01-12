import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { loadRemoteModule } from '@angular-architects/module-federation';

export const APP_ROUTES: Routes = [
  {
    path: 'flights',
    loadChildren: () =>
        loadRemoteModule({
            // remoteEntry: 'http://localhost:3000/remoteEntry.js',
            remoteName: 'mfe1',
            exposedModule: './Module'
        })
        .then(m => m.FlightsModule)
},


    // Your route here:

    {
      path: '**',
      component: NotFoundComponent
    }

    // DO NOT insert routes after this one.
    // { path:'**', ...} needs to be the LAST one.

];

