import { Component, OnInit } from '@angular/core';

// 1# Importer la class du service
import { ConnexionService } from '../../services/connexion.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',

  //2# Déclarer le service ds le tableau des providers
  providers: [ConnexionService]
})

export class LoginComponent implements OnInit {

  constructor(
    // 3# Créer une variable pour utiliser le service
    private connexionService: ConnexionService
  ) {}

  // Créer un objet vide à utiliser ds le ngModel du formulaire
  userInfos = {
    login:'',
    password: ''
  }

// Créer une fonction pour appeler userLogin() ds le service
formSubmit(infos){
  this.connexionService.userLogin(infos)
}
  ngOnInit() {
  }

}
