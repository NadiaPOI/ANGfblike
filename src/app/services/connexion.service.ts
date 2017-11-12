import { Injectable } from '@angular/core';

// Importer la class du Router
import { Router } from '@angular/router';

@Injectable()
export class ConnexionService {

  constructor(
    // Déclarer une class pour utiliser le router
    private router: Router
  ) { }

  userLogin(infos){
    console.log('User try to login', infos);

    // Vérifier les informations saisies par l'utilisateur
    if(infos.login == 'admin' && infos.password == 'root'){
      console.log('Vous êtes connecté(e)');

      // Naviguer vers la vue connected
      this.router.navigateByUrl('/connected');

      // Générer des cookies de connexion Attention : pas sécurisé
      document.cookie = "cookieLogin=" + infos.login;
      document.cookie = "cookiePassword=" + infos.password;

    }else{
      console.log('Accès refusé');
    }
  }

}
