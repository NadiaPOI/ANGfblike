// Importer les class nécéssaires pour la configuration des routes
import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// Importer les composants à utiliser ds les Routes
import { LoginComponent } from './components/login/login.component';
import { ConnectedComponent } from './components/connected/connected.component';

// Déclarer une constante de type Routes
const appRoutes: Routes = [

    // Definition de la route login 
    {
        path: 'login',
        component: LoginComponent

    },

    // définition de la route connected
    {
        path: 'connected',
        component: ConnectedComponent
    }, 

    // Définition de la redirection pour la page d'accueil

    {
        path: '',
        redirectTo: 'login',
        pathMatch: 'full'
    }

];

// Exporter une constante pour les routes
export const Routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);