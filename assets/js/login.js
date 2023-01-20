const elBtnLogin = document.querySelector('.login');
const elBtnFavori = document.querySelector('.favoris');
const elBtnNotification = document.querySelector('.notifications');



let btnNoLoginDOM = `<img class="icone-svg" src="./assets/img/icone-svg/user.svg" alt="icone-utilisateur">Connexion`;
let btnLoginDOM = `<a class="login connexion" href="#">
                    <span>SP</span>
                    </a>`; //initiale de l'utilisateur

let btnFavoriLoginDOM =`<img class="icone-svg" src="./assets/img/icone-svg/heart-rempli.svg" alt="icone-coeur"><div>3</div>`;
let btnNotifieLoginDOM =`<img class="icone-svg"  src="./assets/img/icone-svg/bell.svg" alt="icone-cloche">`;




elBtnLogin.addEventListener ('click', function (e) {
    e.preventDefault();
    if (elBtnLogin.classList.contains('connexion')){
        /*deconnexion */
        elBtnLogin.classList.remove('connexion');
        elBtnLogin.innerHTML = btnNoLoginDOM;
        elBtnFavori.classList.remove('connexion');
        elBtnFavori.innerHTML = "";
        elBtnNotification.classList.remove('connexion');
        elBtnNotification.innerHTML = "";
        
    }else{
        /*connexion */
        elBtnLogin.classList.add('connexion');
        elBtnLogin.innerHTML = btnLoginDOM;
        elBtnFavori.classList.add('connexion');
        elBtnNotification.classList.add('connexion');
        elBtnFavori.classList.add('connexion');
        elBtnFavori.innerHTML = btnFavoriLoginDOM ;
        elBtnNotification.classList.add('connexion');
        elBtnNotification.innerHTML = btnNotifieLoginDOM ;
    }
   
  });