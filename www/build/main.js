webpackJsonp([24],{

/***/ 108:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AboutPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_storage__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__dettagliarticoli_dettagliarticoli__ = __webpack_require__(44);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





/**
 * Generated class for the MymagazzinoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var AboutPage = (function () {
    function AboutPage(navCtrl, http, navParams, altr, storage) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.http = http;
        this.navParams = navParams;
        this.altr = altr;
        this.storage = storage;
        this.articoli = [];
        //sessione: chi sei?  
        storage.get('email').then(function (val) {
            _this.user = val;
            console.log("email1: " + _this.user);
        });
        storage.get('password').then(function (val) {
            _this.pass = val;
        });
        this.quantita_articoli = [this.articoli.length];
    }
    AboutPage.prototype.ionViewWillEnter = function () {
        var _this = this;
        var headers = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Headers */]();
        headers.append('Content-Type', 'application/x-www-form-urlencoded');
        var options = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["d" /* RequestOptions */]({ headers: headers });
        var email = this.user;
        var password = this.pass;
        var nome_mag = "principale";
        var postParams = {
            nome_mag: nome_mag,
            email: email,
            password: password
        };
        this.http.post("http://niscmanager.altervista.org/get_articoli.php", JSON.stringify(postParams), options)
            .subscribe(function (data) {
            console.log("ciao " + data['_body']);
            _this.dati_server = JSON.parse(data['_body']);
            //this.dati_server = data.json();
            //console.log(this.dati_server);
            if (_this.dati_server != null) {
                _this.articoli = [];
                for (var i = 0; i < _this.dati_server.length; i++) {
                    _this.articoli.push(new Articolo(_this.dati_server[i].id, _this.dati_server[i].nome, _this.dati_server[i].quantita, _this.dati_server[i].descrizione, nome_mag));
                }
            }
        });
    };
    AboutPage.prototype.dettagli = function (articolo) {
        console.log("Selected Item", articolo.quantita);
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__dettagliarticoli_dettagliarticoli__["a" /* DettagliPage */], articolo);
    };
    AboutPage.prototype.reset = function () {
        for (var i = 0; i < this.quantita_articoli.length; i++) {
            this.quantita_articoli[i] = 0;
        }
    };
    AboutPage.prototype.invia_richiesta = function (text) {
        console.log("hai preso", this.quantita_articoli[0]);
        /*var headers = new Headers();
        headers.append('Content-Type', 'application/x-www-form-urlencoded' );
        let options = new RequestOptions({ headers: headers });
     
        var email= this.user;
        var password= this.pass;
        var nome_mag="principale";
      
          let postParams = {
            nome_mag,
            email,
            password,
            
          };
          this.http.post("http://niscmanager.altervista.org/articoli_inviati.php", JSON.stringify(postParams), options)
            .subscribe(data => {
              console.log("ciao "+data['_body']);
              this.dati_server=JSON.parse(data['_body']);
              if(this.dati_server!=null){
                this.articoli=[];
                for(var i=0;i<this.dati_server.length;i++){
                  this.articoli.push(new Articolo(this.dati_server[i].id,this.dati_server[i].nome,this.dati_server[i].quantita,this.dati_server[i].descrizione));
                }
              }
            });*/
        /* inviare con post i dati
        */
        this.presentConfirm('con successo');
    };
    AboutPage.prototype.presentConfirm = function (text) {
        var alert = this.altr.create({
            title: 'Richiesta inviata',
            message: text,
            buttons: [
                {
                    text: 'Ok',
                    role: 'cancel',
                    handler: function () {
                        console.log('Cancel clicked');
                    }
                },
            ]
        });
        alert.present();
    };
    AboutPage.prototype.initializeItems = function () {
        this.articoli = [];
        for (var i = 0; i < this.dati_server.length; i++) {
            this.articoli.push(this.dati_server[i]);
        }
    };
    AboutPage.prototype.getItems = function (ev) {
        // Reset items back to all of the items
        this.initializeItems();
        // set val to the value of the searchbar
        var val = ev.target.value;
        // if the value is an empty string don't filter the items
        if (val && val.trim() != '') {
            this.articoli = this.articoli.filter(function (articolo) {
                return (articolo.nome.toLowerCase().indexOf(val.toLowerCase()) > -1);
            });
        }
    };
    AboutPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'about',template:/*ion-inline-start:"C:\Users\Antonio\Documents\Progetti\NISC-Manager-Final-\src\pages\about\about.html"*/'<ion-header>\n    <ion-navbar color="primary">\n      <ion-title>Catalogo articoli</ion-title>\n    </ion-navbar>\n  </ion-header>\n  \n  <ion-content style="background-color:rgb(252, 253, 253);">\n    <p>\n  <ion-searchbar (ionInput)="getItems($event)"></ion-searchbar>\n          \n    </p>\n    <p></p>\n    <div ng-controller="listController"> \n        <ion-list>\n      \n         <ion-item *ngFor="let articolo of articoli; let i=index">\n            <ion-thumbnail item-start>\n              <img src="assets/img/articolo.png">\n            </ion-thumbnail>\n            <h4>Nome: {{articolo.nome}}</h4>\n            <h6><p>Disponibiltà : {{articolo.quantita}}</p>\n            <p><label>Richiesta:\n              <input type="number" name="articoli_richiesti" value="0" min="0" max="20" step="1" [(ngModel)]=quantita_articoli[i]>\n            </label></p></h6>\n           \n            <button ion-button outline  item-end (click)=\'dettagli(articolo)\'>Dettagli</button>\n          </ion-item>\n          \n      \n        </ion-list>\n      </div>\n  \n    <p align=\'center\'>\n      \n      <button ion-button color="primary" round (click)=\'invia_richiesta()\'>Invia Richiesta</button>\n      <button ion-button color="primary" round (click)=\'reset()\'>Reset</button>\n    </p>\n  </ion-content>'/*ion-inline-end:"C:\Users\Antonio\Documents\Progetti\NISC-Manager-Final-\src\pages\about\about.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_2__angular_http__["b" /* Http */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */], __WEBPACK_IMPORTED_MODULE_3__ionic_storage__["b" /* Storage */]])
    ], AboutPage);
    return AboutPage;
}());

var Articolo = (function () {
    function Articolo(id, nome, quantita, descrizione, nome_magazzino) {
        //
        this.id = id;
        this.nome = nome;
        this.quantita = quantita;
        this.descrizione = descrizione;
        this.nome_magazzino = nome_magazzino;
    }
    return Articolo;
}());
//# sourceMappingURL=about.js.map

/***/ }),

/***/ 109:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DettagliArticoliMagPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__inserisci_modifica_articolo_inserisci_modifica_articolo__ = __webpack_require__(55);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var DettagliArticoliMagPage = (function () {
    function DettagliArticoliMagPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.articolo = navParams.data;
    }
    DettagliArticoliMagPage.prototype.modifica = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__inserisci_modifica_articolo_inserisci_modifica_articolo__["a" /* InserisciModificaArticoloPage */], this.articolo);
    };
    DettagliArticoliMagPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-dettagli-articoli-mag',template:/*ion-inline-start:"C:\Users\Antonio\Documents\Progetti\NISC-Manager-Final-\src\pages\dettagli-articoli-mag\dettagli-articoli-mag.html"*/'<ion-header>\n\n    <ion-navbar>\n      <ion-title>dettagli articolo</ion-title>\n    </ion-navbar>\n  \n  </ion-header>\n  \n  \n  <ion-content padding>\n    <ion-grid>\n      <ion-row>\n        <ion-col col-4 class="logo">\n          <img src="../../assets/img/articolo.png"/>\n        </ion-col>\n        <ion-col> \n          <p><b>ID:</b> {{ articolo.id }}</p>\n          <h1>{{ articolo.nome }}</h1>\n        </ion-col>\n      </ion-row>\n      <ion-row>\n          <ion-col>\n            <b>Quantità:</b> {{ articolo.quantita }}\n          </ion-col>\n      </ion-row>\n      <ion-row>\n          <ion-col>\n              <b>Descrizione:</b><br>\n              {{ articolo.descrizione }}\n          </ion-col>\n      </ion-row>\n    </ion-grid>\n    <p align=\'center\'>\n        <button ion-button color="secondary" round (click)=\'modifica()\'>Modifica</button>\n      </p>\n  \n  </ion-content>'/*ion-inline-end:"C:\Users\Antonio\Documents\Progetti\NISC-Manager-Final-\src\pages\dettagli-articoli-mag\dettagli-articoli-mag.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */]])
    ], DettagliArticoliMagPage);
    return DettagliArticoliMagPage;
}());

var Articolo = (function () {
    function Articolo(id, nome, quantita, descrizione, nome_magazzino) {
        this.id = id;
        this.nome = nome;
        this.quantita = quantita;
        this.descrizione = descrizione;
        this.nome_magazzino = nome_magazzino;
    }
    return Articolo;
}());
//# sourceMappingURL=dettagli-articoli-mag.js.map

/***/ }),

/***/ 110:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DettagliRichiestaMagPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_storage__ = __webpack_require__(9);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var DettagliRichiestaMagPage = (function () {
    function DettagliRichiestaMagPage(navCtrl, http, navParams, storage, alertCtrl) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.http = http;
        this.navParams = navParams;
        this.storage = storage;
        this.alertCtrl = alertCtrl;
        this.richieste = [];
        this.approvare = [];
        storage.get('email').then(function (val) {
            _this.user = val;
        });
        storage.get('password').then(function (val) {
            _this.pass = val;
        });
        this.titolo = "Richiesta " + navParams.data[0] + " - " + navParams.data[1];
    }
    DettagliRichiestaMagPage.prototype.ionViewWillEnter = function () {
        var _this = this;
        var email = this.user;
        var password = this.pass;
        var id = this.navParams.data[0];
        var headers = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Headers */]();
        headers.append('Content-Type', 'application/x-www-form-urlencoded');
        var options = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["d" /* RequestOptions */]({ headers: headers });
        var postParams = {
            email: email,
            password: password,
            id: id
        };
        this.http.post("http://niscmanager.altervista.org/get_dettagli_richiesta_mag.php", JSON.stringify(postParams), options)
            .subscribe(function (data) {
            if (data['_body'][0] == "[") {
                _this.dati_server = JSON.parse(data['_body']);
                console.log(_this.dati_server);
                if (_this.dati_server != null) {
                    _this.richieste = [];
                    for (var i = 0; i < _this.dati_server.length; i++) {
                        _this.richieste.push(new Richiesta(id, _this.dati_server[i].id_articolo, _this.dati_server[i].articolo, _this.dati_server[i].quantita_ric, _this.dati_server[i].quantita_app, _this.dati_server[i].squadra, _this.dati_server[i].quantita_max));
                    }
                }
            }
            else {
                console.log(data['_body']);
            }
        });
    };
    DettagliRichiestaMagPage.prototype.salva = function () {
        var _this = this;
        var flag = true;
        var email = this.user;
        var password = this.pass;
        var id = this.navParams.data[0];
        var approva = [];
        for (var i = 0; i < this.approvare.length; i++) {
            if (this.approvare[i] > (this.richieste[i].quantita_ric - this.richieste[i].quantita_app)) {
                flag = false;
            }
            approva.push(new Approvazione(this.richieste[i].id_articolo, this.approvare[i]));
        }
        if (flag) {
            var headers = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Headers */]();
            headers.append('Content-Type', 'application/x-www-form-urlencoded');
            var options = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["d" /* RequestOptions */]({ headers: headers });
            var postParams = {
                email: email,
                password: password,
                id: id,
                approva: approva
            };
            this.http.post("http://niscmanager.altervista.org/approva_richiesta_mag.php", JSON.stringify(postParams), options)
                .subscribe(function (data) {
                var alert = _this.alertCtrl.create({
                    title: data['_body'],
                    subTitle: '',
                    buttons: [{
                            text: 'Ok',
                            handler: function () {
                                var navTransition = alert.dismiss();
                                navTransition.then(function () {
                                    _this.navCtrl.pop();
                                });
                                return false;
                            }
                        }]
                });
                alert.present();
            });
        }
        else {
            var alert_1 = this.alertCtrl.create({
                title: "Limite pezzi superato",
                subTitle: '',
                buttons: [{
                        text: 'Ok',
                        handler: function () {
                            var navTransition = alert_1.dismiss();
                            navTransition.then(function () {
                            });
                            return false;
                        }
                    }]
            });
            alert_1.present();
        }
    };
    DettagliRichiestaMagPage.prototype.rifiuta = function () {
        var _this = this;
        var email = this.user;
        var password = this.pass;
        var id = this.navParams.data[0];
        var headers = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Headers */]();
        headers.append('Content-Type', 'application/x-www-form-urlencoded');
        var options = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["d" /* RequestOptions */]({ headers: headers });
        var postParams = {
            email: email,
            password: password,
            id: id
        };
        this.http.post("http://niscmanager.altervista.org/rifiuta_richiesta_mag.php", JSON.stringify(postParams), options)
            .subscribe(function (data) {
            var alert = _this.alertCtrl.create({
                title: data['_body'],
                subTitle: '',
                buttons: [{
                        text: 'Ok',
                        handler: function () {
                            var navTransition = alert.dismiss();
                            navTransition.then(function () {
                                _this.navCtrl.pop();
                            });
                            return false;
                        }
                    }]
            });
            alert.present();
        });
    };
    DettagliRichiestaMagPage.prototype.initializeItems = function () {
        this.richieste = [];
        for (var i = 0; i < this.dati_server.length; i++) {
            this.richieste.push(this.dati_server[i]);
        }
    };
    DettagliRichiestaMagPage.prototype.getItems = function (ev) {
        // Reset items back to all of the items
        this.initializeItems();
        // set val to the value of the searchbar
        var val = ev.target.value;
        // if the value is an empty string don't filter the items
        if (val && val.trim() != '') {
            this.richieste = this.richieste.filter(function (richiesta) {
                return (richiesta.articolo.toLowerCase().indexOf(val.toLowerCase()) > -1);
            });
        }
    };
    DettagliRichiestaMagPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-dettagli-richiesta-mag',template:/*ion-inline-start:"C:\Users\Antonio\Documents\Progetti\NISC-Manager-Final-\src\pages\dettagli-richiesta-mag\dettagli-richiesta-mag.html"*/'<ion-header>\n  <ion-navbar color="danger">\n    <ion-title>{{titolo}}</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content style="background-color:rgb(205, 241, 245);">\n  <p>\n      <ion-searchbar (ionInput)="getItems($event)"></ion-searchbar>     \n  </p>\n  <p></p>\n  <div ng-controller="listController"> \n    <ion-list>\n    <ion-item *ngFor="let richiesta of richieste; let i=index">\n        <ion-thumbnail item-start>\n          <img src="assets/img/articolo.png">\n        </ion-thumbnail>\n        <h2>Articolo: {{richiesta.articolo}}</h2>\n        <p>Quantità richiesta: {{richiesta.quantita_ric}}</p>\n        <p>Quantità approvata: {{richiesta.quantita_app}}</p>\n        <p>\n          <label>Approva:\n            <input [(ngModel)]=approvare[i] type="number" value="0" min="0" max={{richiesta.quantita_ric-richiesta.quantita_app}} step="1">\n          </label>\n        </p>\n        <p>Quantità disponibile: {{richiesta.quantita_max}}</p>\n        \n      </ion-item>\n    </ion-list>\n  </div>\n</ion-content>\n<ion-footer>\n  <p align=\'center\'>\n    <button ion-button color="secondary" round (click)=\'salva()\'>Approva</button>\n    <button ion-button color="danger" round (click)=\'rifiuta()\'>Rifiuta</button>\n  </p>\n</ion-footer>'/*ion-inline-end:"C:\Users\Antonio\Documents\Progetti\NISC-Manager-Final-\src\pages\dettagli-richiesta-mag\dettagli-richiesta-mag.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_2__angular_http__["b" /* Http */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */], __WEBPACK_IMPORTED_MODULE_3__ionic_storage__["b" /* Storage */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */]])
    ], DettagliRichiestaMagPage);
    return DettagliRichiestaMagPage;
}());

var Richiesta = (function () {
    function Richiesta(id, id_articolo, articolo, quantita_ric, quantita_app, squadra, quantita_max) {
        this.id = id;
        this.id_articolo = id_articolo;
        this.articolo = articolo;
        this.quantita_ric = quantita_ric;
        this.quantita_app = quantita_app;
        this.squadra = squadra;
        this.quantita_max = quantita_max;
    }
    return Richiesta;
}());
var Approvazione = (function () {
    function Approvazione(id, quantita) {
        this.id = id;
        this.quantita = quantita;
    }
    return Approvazione;
}());
//# sourceMappingURL=dettagli-richiesta-mag.js.map

/***/ }),

/***/ 111:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EliminaArticoliPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_storage__ = __webpack_require__(9);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var EliminaArticoliPage = (function () {
    function EliminaArticoliPage(navCtrl, http, navParams, alertCtrl, storage) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.http = http;
        this.navParams = navParams;
        this.alertCtrl = alertCtrl;
        this.storage = storage;
        this.articoli = [];
        storage.get('email').then(function (val) {
            _this.user = val;
        });
        storage.get('password').then(function (val) {
            _this.pass = val;
        });
    }
    EliminaArticoliPage.prototype.ionViewWillEnter = function () {
        var _this = this;
        var email = this.user;
        var password = this.pass;
        var nome_mag = this.navParams.data;
        this.titolo = nome_mag;
        var headers = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Headers */]();
        headers.append('Content-Type', 'application/x-www-form-urlencoded');
        var options = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["d" /* RequestOptions */]({ headers: headers });
        var postParams = {
            email: email,
            password: password,
            nome_mag: nome_mag
        };
        this.http.post("http://niscmanager.altervista.org/get_articoli.php", JSON.stringify(postParams), options)
            .subscribe(function (data) {
            _this.dati_server = JSON.parse(data['_body']);
            console.log(_this.dati_server);
            if (_this.dati_server != null) {
                _this.articoli = [];
                for (var i = 0; i < _this.dati_server.length; i++) {
                    _this.articoli.push(new Articolo(_this.dati_server[i].id, _this.dati_server[i].nome, _this.dati_server[i].quantita, _this.dati_server[i].descrizione, nome_mag));
                }
            }
        });
    };
    EliminaArticoliPage.prototype.elimina = function (articolo) {
        var _this = this;
        var email = this.user;
        var password = this.pass;
        var id = articolo.id;
        var magazzino = articolo.nome_magazzino;
        var headers = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Headers */]();
        headers.append('Content-Type', 'application/x-www-form-urlencoded');
        var options = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["d" /* RequestOptions */]({ headers: headers });
        var postParams = {
            email: email,
            password: password,
            id: id,
            magazzino: magazzino
        };
        this.http.post("http://niscmanager.altervista.org/elimina_articolo.php", JSON.stringify(postParams), options)
            .subscribe(function (data) {
            console.log(data['_body']);
            if (data['_body'] == "Operazione eseguita") {
                var alert_1 = _this.alertCtrl.create({
                    title: 'Articolo eliminato',
                    subTitle: '',
                    buttons: ['OK']
                });
                alert_1.present();
                _this.ionViewWillEnter();
            }
            else {
                var alert_2 = _this.alertCtrl.create({
                    title: data['_body'],
                    subTitle: '',
                    buttons: ['OK']
                });
                alert_2.present();
            }
        });
    };
    EliminaArticoliPage.prototype.initializeItems = function () {
        this.articoli = [];
        for (var i = 0; i < this.dati_server.length; i++) {
            this.articoli.push(this.dati_server[i]);
        }
    };
    EliminaArticoliPage.prototype.getItems = function (ev) {
        // Reset items back to all of the items
        this.initializeItems();
        // set val to the value of the searchbar
        var val = ev.target.value;
        // if the value is an empty string don't filter the items
        if (val && val.trim() != '') {
            this.articoli = this.articoli.filter(function (articolo) {
                return (articolo.nome.toLowerCase().indexOf(val.toLowerCase()) > -1);
            });
        }
    };
    EliminaArticoliPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-elimina-articoli',template:/*ion-inline-start:"C:\Users\Antonio\Documents\Progetti\NISC-Manager-Final-\src\pages\elimina-articoli\elimina-articoli.html"*/'<ion-header>\n    <ion-navbar color="danger">\n      <ion-title>Elimina articoli</ion-title>\n    </ion-navbar>\n  </ion-header>\n  \n  <ion-content style="background-color:rgb(205, 241, 245);">\n    <p>\n        <ion-searchbar (ionInput)="getItems($event)"></ion-searchbar>     \n    </p>\n    <p></p>\n    <div ng-controller="listController"> \n    <ion-list>\n  \n     <ion-item *ngFor="let articolo of articoli">\n        <ion-thumbnail item-start>\n          <img src="assets/img/articolo.png">\n        </ion-thumbnail>\n        <h2>Nome: {{articolo.nome}}</h2>\n        <p>Disponibiltà: {{articolo.quantita}}</p>\n       \n        <button ion-button outline item-end (click)=\'elimina(articolo)\'>Elimina</button>\n      </ion-item>\n    </ion-list>\n  </div>\n  </ion-content>'/*ion-inline-end:"C:\Users\Antonio\Documents\Progetti\NISC-Manager-Final-\src\pages\elimina-articoli\elimina-articoli.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_2__angular_http__["b" /* Http */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */], __WEBPACK_IMPORTED_MODULE_3__ionic_storage__["b" /* Storage */]])
    ], EliminaArticoliPage);
    return EliminaArticoliPage;
}());

var Articolo = (function () {
    function Articolo(id, nome, quantita, descrizione, nome_magazzino) {
        this.id = id;
        this.nome = nome;
        this.quantita = quantita;
        this.descrizione = descrizione;
        this.nome_magazzino = nome_magazzino;
    }
    return Articolo;
}());
//# sourceMappingURL=elimina-articoli.js.map

/***/ }),

/***/ 112:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DettagliRichiestaPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_storage__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(7);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


//import { HttpClient } from '@angular/common/http';


/**
 * Generated class for the DettagliArticoloPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var DettagliRichiestaPage = (function () {
    function DettagliRichiestaPage(navCtrl, http, navParams, storage) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.http = http;
        this.navParams = navParams;
        this.storage = storage;
        /*id: number;
        stato: string;
        articolo: number;
        quantita_richiesta: number;
        quantita_approvata: number;*/
        this.richieste = [];
        //sessione: chi sei?  
        storage.get('email').then(function (val) {
            _this.user = val;
            console.log("email1: " + _this.user);
        });
        storage.get('password').then(function (val) {
            _this.pass = val;
        });
    }
    DettagliRichiestaPage.prototype.ionViewWillEnter = function () {
        var _this = this;
        var headers = new __WEBPACK_IMPORTED_MODULE_3__angular_http__["a" /* Headers */]();
        headers.append('Content-Type', 'application/x-www-form-urlencoded');
        var options = new __WEBPACK_IMPORTED_MODULE_3__angular_http__["d" /* RequestOptions */]({ headers: headers });
        // var squadra="squadra1"; 
        var id = this.navParams.data;
        var email = this.user;
        var password = this.pass;
        var postParams = {
            email: email,
            password: password,
            id: id
        };
        this.http.post("http://niscmanager.altervista.org/get_dettagli_richiesta.php", JSON.stringify(postParams), options)
            .subscribe(function (data) {
            console.log("ciao " + data['_body']);
            _this.richieste_divise = JSON.parse(data['_body']);
            console.log("ciao dopo " + _this.richieste_divise);
            if (_this.richieste_divise != null) {
                for (var i = 0; i < _this.richieste_divise.length; i++) {
                    _this.richieste.push(new Richiesta(_this.richieste_divise[i].id, _this.richieste_divise[i].stato, _this.richieste_divise[i].articolo, _this.richieste_divise[i].quantita_richiesta, _this.richieste_divise[i].quantita_approvata, _this.richieste_divise[i].nome_squadra));
                }
            }
        });
    };
    DettagliRichiestaPage.prototype.initializeItems = function () {
        this.richieste = [];
        for (var i = 0; i < this.richieste_divise.length; i++) {
            this.richieste.push(this.richieste_divise[i]);
        }
    };
    DettagliRichiestaPage.prototype.getItems = function (ev) {
        // Reset items back to all of the items
        this.initializeItems();
        // set val to the value of the searchbar
        var val = ev.target.value;
        // if the value is an empty string don't filter the items
        if (val && val.trim() != '') {
            this.richieste = this.richieste.filter(function (richiesta) {
                return (richiesta.stato.toLowerCase().indexOf(val.toLowerCase()) > -1);
            });
        }
    };
    DettagliRichiestaPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-dettaglirichiesta',template:/*ion-inline-start:"C:\Users\Antonio\Documents\Progetti\NISC-Manager-Final-\src\pages\dettaglirichiesta\dettaglirichiesta.html"*/'<!--\n  Generated template for the DettagliArticoloPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n    \n      <ion-navbar color="danger">\n        <ion-title>Dettagli richiesta articoli</ion-title>\n      </ion-navbar>\n    \n    </ion-header>\n    \n    \n    <ion-content padding >\n      <ion-grid >\n        <ion-row style="background:#ee3b53" >\n          \n          <ion-col col-4 style="font-weight: bold; color: white;">Nome articolo</ion-col>\n          <ion-col col-3  style="font-weight: bold; color: white;">Quantità richiesta</ion-col>\n          <ion-col col-4  style="font-weight: bold; color: white;">Quantità approvata</ion-col>\n          \n         \n        </ion-row>\n      </ion-grid>\n  \n      <ion-list ion-item *ngFor="let richiesta of richieste">\n          \n            <ion-grid style="font-size: 13px;">\n                <ion-row>\n                  \n                  <ion-col col-4>{{ richiesta.articolo }}</ion-col>\n                  <ion-col col-3>{{ richiesta.quantita_richiesta }}</ion-col>\n                  <ion-col col-4>{{ richiesta.quantita_approvata }}</ion-col>\n                  \n                </ion-row>\n              </ion-grid>\n         \n  \n        </ion-list>\n    \n    </ion-content>'/*ion-inline-end:"C:\Users\Antonio\Documents\Progetti\NISC-Manager-Final-\src\pages\dettaglirichiesta\dettaglirichiesta.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_3__angular_http__["b" /* Http */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__ionic_storage__["b" /* Storage */]])
    ], DettagliRichiestaPage);
    return DettagliRichiestaPage;
}());

var Richiesta = (function () {
    function Richiesta(id, stato, articolo, quantita_richiesta, quantita_approvata, nome_squadra) {
        this.id = id;
        this.nome_squadra = nome_squadra;
        this.stato = stato;
        this.articolo = articolo;
        this.quantita_richiesta = quantita_richiesta;
        this.quantita_approvata = quantita_approvata;
    }
    return Richiesta;
}());
//# sourceMappingURL=dettaglirichiesta.js.map

/***/ }),

/***/ 113:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EliminaMagazziniAdminPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_storage__ = __webpack_require__(9);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var EliminaMagazziniAdminPage = (function () {
    function EliminaMagazziniAdminPage(navCtrl, navParams, http, alertCtrl, storage) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.http = http;
        this.alertCtrl = alertCtrl;
        this.storage = storage;
        this.magazzini = [];
        this.magazzini = navParams.data;
        this.dati_server = navParams.data;
        storage.get('email').then(function (val) {
            _this.user = val;
        });
        storage.get('password').then(function (val) {
            _this.pass = val;
        });
    }
    EliminaMagazziniAdminPage.prototype.elimina = function (nome) {
        var _this = this;
        var confirm = this.alertCtrl.create({
            title: 'Sicuro di voler eliminare il magazzino "' + nome + '"?',
            message: '',
            buttons: [
                {
                    text: 'NO',
                    handler: function () {
                        console.log('Disagree clicked');
                    }
                },
                {
                    text: 'SI',
                    handler: function () {
                        console.log('Agree clicked');
                        var email = _this.user;
                        var password = _this.pass;
                        var headers = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Headers */]();
                        headers.append('Content-Type', 'application/x-www-form-urlencoded');
                        var options = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["d" /* RequestOptions */]({ headers: headers });
                        var postParams = {
                            email: email,
                            password: password,
                            nome: nome
                        };
                        _this.http.post("http://niscmanager.altervista.org/elimina_magazzino.php", JSON.stringify(postParams), options)
                            .subscribe(function (data) {
                            console.log(data['_body']);
                            if (data['_body'] == "Operazione eseguita") {
                                var alert_1 = _this.alertCtrl.create({
                                    title: 'Magazzino eliminato',
                                    subTitle: '',
                                    buttons: ['OK']
                                });
                                alert_1.present();
                                _this.navCtrl.pop();
                            }
                            else {
                                var alert_2 = _this.alertCtrl.create({
                                    title: data['_body'],
                                    subTitle: '',
                                    buttons: ['OK']
                                });
                                alert_2.present();
                            }
                        });
                    }
                }
            ]
        });
        confirm.present();
    };
    EliminaMagazziniAdminPage.prototype.initializeItems = function () {
        this.magazzini = [];
        for (var i = 0; i < this.dati_server.length; i++) {
            this.magazzini.push(this.dati_server[i]);
        }
    };
    EliminaMagazziniAdminPage.prototype.getItems = function (ev) {
        // Reset items back to all of the items
        this.initializeItems();
        // set val to the value of the searchbar
        var val = ev.target.value;
        // if the value is an empty string don't filter the items
        if (val && val.trim() != '') {
            this.magazzini = this.magazzini.filter(function (magazzino) {
                return (magazzino.nome.toLowerCase().indexOf(val.toLowerCase()) > -1);
            });
        }
    };
    EliminaMagazziniAdminPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-elimina-magazzini-admin',template:/*ion-inline-start:"C:\Users\Antonio\Documents\Progetti\NISC-Manager-Final-\src\pages\elimina-magazzini-admin\elimina-magazzini-admin.html"*/'<ion-header>\n    <ion-navbar color="danger">\n      <ion-title>Elimina magazzini</ion-title>\n    </ion-navbar>\n  </ion-header>\n  \n  <ion-content style="background-color:rgb(205, 241, 245);">\n    <p>\n        <ion-searchbar (ionInput)="getItems($event)"></ion-searchbar>\n    </p>\n    <p></p>\n    <div ng-controller="listController"> \n    <ion-list>\n      <ion-item *ngFor="let magazzino of magazzini">\n        <h2>{{magazzino.nome}}</h2>\n        <p>{{magazzino.descrizione}}</p>     \n        <button ion-button outline item-end (click)=\'elimina(magazzino.nome)\'>Elimina</button>\n      </ion-item>\n    </ion-list>\n  </div>\n  </ion-content>'/*ion-inline-end:"C:\Users\Antonio\Documents\Progetti\NISC-Manager-Final-\src\pages\elimina-magazzini-admin\elimina-magazzini-admin.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__angular_http__["b" /* Http */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */], __WEBPACK_IMPORTED_MODULE_3__ionic_storage__["b" /* Storage */]])
    ], EliminaMagazziniAdminPage);
    return EliminaMagazziniAdminPage;
}());

//# sourceMappingURL=elimina-magazzini-admin.js.map

/***/ }),

/***/ 114:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GestioneArticoliAdminPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__dettagliarticoli_dettagliarticoli__ = __webpack_require__(44);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_storage__ = __webpack_require__(9);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var GestioneArticoliAdminPage = (function () {
    function GestioneArticoliAdminPage(navCtrl, http, navParams, storage) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.http = http;
        this.navParams = navParams;
        this.storage = storage;
        this.articoli = [];
        this.totale_articoli = 0;
        this.nome_mag = navParams.data.nome;
        this.titolo = this.nome_mag;
        storage.get('email').then(function (val) {
            _this.user = val;
        });
        storage.get('password').then(function (val) {
            _this.pass = val;
        });
    }
    GestioneArticoliAdminPage.prototype.ionViewWillEnter = function () {
        var _this = this;
        var headers = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Headers */]();
        headers.append('Content-Type', 'application/x-www-form-urlencoded');
        var options = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["d" /* RequestOptions */]({ headers: headers });
        var email = this.user;
        var password = this.pass;
        var nome_mag = this.nome_mag;
        var postParams = {
            email: email,
            password: password,
            nome_mag: nome_mag
        };
        this.http.post("http://niscmanager.altervista.org/get_articoli.php", JSON.stringify(postParams), options)
            .subscribe(function (data) {
            _this.dati_server = JSON.parse(data['_body']);
            console.log(_this.dati_server);
            if (_this.dati_server != null) {
                _this.totale_articoli = 0;
                _this.articoli = [];
                for (var i = 0; i < _this.dati_server.length; i++) {
                    _this.totale_articoli += parseInt(_this.dati_server[i].quantita);
                    _this.articoli.push(new Articolo(_this.dati_server[i].id, _this.dati_server[i].nome, _this.dati_server[i].quantita, _this.dati_server[i].descrizione, "principale"));
                }
            }
        });
    };
    GestioneArticoliAdminPage.prototype.dettagli = function (articolo) {
        console.log("Selected Item", articolo.nome);
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__dettagliarticoli_dettagliarticoli__["a" /* DettagliPage */], articolo);
    };
    GestioneArticoliAdminPage.prototype.initializeItems = function () {
        this.articoli = [];
        for (var i = 0; i < this.dati_server.length; i++) {
            this.articoli.push(this.dati_server[i]);
        }
    };
    GestioneArticoliAdminPage.prototype.getItems = function (ev) {
        // Reset items back to all of the items
        this.initializeItems();
        // set val to the value of the searchbar
        var val = ev.target.value;
        // if the value is an empty string don't filter the items
        if (val && val.trim() != '') {
            this.articoli = this.articoli.filter(function (articolo) {
                return (articolo.nome.toLowerCase().indexOf(val.toLowerCase()) > -1);
            });
        }
    };
    GestioneArticoliAdminPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-gestione-articoli-admin',template:/*ion-inline-start:"C:\Users\Antonio\Documents\Progetti\NISC-Manager-Final-\src\pages\gestione-articoli-admin\gestione-articoli-admin.html"*/'<ion-header>\n  <ion-navbar color="danger">\n    <ion-title>{{ titolo }}</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content style="background-color:rgb(205, 241, 245);">\n  <p>\n      <ion-searchbar (ionInput)="getItems($event)"></ion-searchbar>     \n  </p>\n  <p></p>\n  <div ng-controller="listController"> \n  <ion-list>\n\n   <ion-item *ngFor="let articolo of articoli">\n      <ion-thumbnail item-start>\n        <img src="assets/img/articolo.png">\n      </ion-thumbnail>\n      <h2>Nome: {{articolo.nome}}</h2>\n      <p>Disponibiltà: {{articolo.quantita}}</p>\n     \n      <button ion-button outline item-end (click)=\'dettagli(articolo)\'>Dettagli</button>\n    </ion-item>\n    \n\n  </ion-list>\n</div>\n<h2 align=\'center\'>Totale: {{totale_articoli}} </h2>\n</ion-content>'/*ion-inline-end:"C:\Users\Antonio\Documents\Progetti\NISC-Manager-Final-\src\pages\gestione-articoli-admin\gestione-articoli-admin.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_2__angular_http__["b" /* Http */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */], __WEBPACK_IMPORTED_MODULE_4__ionic_storage__["b" /* Storage */]])
    ], GestioneArticoliAdminPage);
    return GestioneArticoliAdminPage;
}());

var Articolo = (function () {
    function Articolo(id, nome, quantita, descrizione, nome_magazzino) {
        this.id = id;
        this.nome = nome;
        this.quantita = quantita;
        this.descrizione = descrizione;
        this.nome_magazzino = nome_magazzino;
    }
    return Articolo;
}());
//# sourceMappingURL=gestione-articoli-admin.js.map

/***/ }),

/***/ 115:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GestioneArticoliMagPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__dettagli_articoli_mag_dettagli_articoli_mag__ = __webpack_require__(109);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__inserisci_modifica_articolo_inserisci_modifica_articolo__ = __webpack_require__(55);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__elimina_articoli_elimina_articoli__ = __webpack_require__(111);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__sposta_articoli_mag_sposta_articoli_mag__ = __webpack_require__(116);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ionic_storage__ = __webpack_require__(9);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var GestioneArticoliMagPage = (function () {
    function GestioneArticoliMagPage(navCtrl, http, navParams, storage) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.http = http;
        this.navParams = navParams;
        this.storage = storage;
        this.articoli = [];
        storage.get('email').then(function (val) {
            _this.user = val;
        });
        storage.get('password').then(function (val) {
            _this.pass = val;
        });
    }
    GestioneArticoliMagPage.prototype.ionViewWillEnter = function () {
        var _this = this;
        var email = this.user;
        var password = this.pass;
        var nome_mag = this.navParams.data.nome;
        this.titolo = nome_mag;
        var headers = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Headers */]();
        headers.append('Content-Type', 'application/x-www-form-urlencoded');
        var options = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["d" /* RequestOptions */]({ headers: headers });
        var postParams = {
            email: email,
            password: password,
            nome_mag: nome_mag
        };
        this.http.post("http://niscmanager.altervista.org/get_articoli.php", JSON.stringify(postParams), options)
            .subscribe(function (data) {
            _this.dati_server = JSON.parse(data['_body']);
            console.log(_this.dati_server);
            if (_this.dati_server != null) {
                _this.articoli = [];
                for (var i = 0; i < _this.dati_server.length; i++) {
                    _this.articoli.push(new Articolo(_this.dati_server[i].id, _this.dati_server[i].nome, _this.dati_server[i].quantita, _this.dati_server[i].descrizione, nome_mag));
                }
            }
        });
    };
    GestioneArticoliMagPage.prototype.dettagli = function (articolo) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__dettagli_articoli_mag_dettagli_articoli_mag__["a" /* DettagliArticoliMagPage */], articolo);
    };
    GestioneArticoliMagPage.prototype.inserisci = function () {
        var valori = [];
        valori[0] = "inserisci";
        valori[1] = this.navParams.data.nome;
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__inserisci_modifica_articolo_inserisci_modifica_articolo__["a" /* InserisciModificaArticoloPage */], valori);
    };
    GestioneArticoliMagPage.prototype.sposta = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_6__sposta_articoli_mag_sposta_articoli_mag__["a" /* SpostaArticoliMagPage */], this.navParams.data.nome);
    };
    GestioneArticoliMagPage.prototype.elimina = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_5__elimina_articoli_elimina_articoli__["a" /* EliminaArticoliPage */], this.navParams.data.nome);
    };
    GestioneArticoliMagPage.prototype.initializeItems = function () {
        this.articoli = [];
        for (var i = 0; i < this.dati_server.length; i++) {
            this.articoli.push(this.dati_server[i]);
        }
    };
    GestioneArticoliMagPage.prototype.getItems = function (ev) {
        // Reset items back to all of the items
        this.initializeItems();
        // set val to the value of the searchbar
        var val = ev.target.value;
        // if the value is an empty string don't filter the items
        if (val && val.trim() != '') {
            this.articoli = this.articoli.filter(function (articolo) {
                return (articolo.nome.toLowerCase().indexOf(val.toLowerCase()) > -1);
            });
        }
    };
    GestioneArticoliMagPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-gestione-articoli-mag',template:/*ion-inline-start:"C:\Users\Antonio\Documents\Progetti\NISC-Manager-Final-\src\pages\gestione-articoli-mag\gestione-articoli-mag.html"*/'<ion-header>\n  <ion-navbar color="danger">\n    <ion-title>{{ titolo }}</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content style="background-color:rgb(205, 241, 245);">\n  <p>\n      <ion-searchbar (ionInput)="getItems($event)"></ion-searchbar>     \n  </p>\n  <p></p>\n  <div ng-controller="listController"> \n    <ion-list>\n      <ion-item *ngFor="let articolo of articoli">\n        <ion-thumbnail item-start>\n          <img src="assets/img/articolo.png">\n        </ion-thumbnail>\n        <h2>Nome: {{articolo.nome}}</h2>\n        <p>Disponibiltà: {{articolo.quantita}}</p>\n        <button ion-button outline item-end (click)=\'dettagli(articolo)\'>Dettagli</button>\n      </ion-item>\n    </ion-list>\n  </div>\n  \n</ion-content>\n<ion-footer>\n  <div>\n    <p align=\'center\'>\n      <button ion-button color="secondary" round (click)=\'inserisci()\'>Inserisci</button>\n      <button ion-button round (click)=\'sposta()\'>Sposta</button>\n      <button ion-button color="danger" round (click)=\'elimina()\'>Elimina</button>\n    </p>\n  </div>\n</ion-footer>'/*ion-inline-end:"C:\Users\Antonio\Documents\Progetti\NISC-Manager-Final-\src\pages\gestione-articoli-mag\gestione-articoli-mag.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_2__angular_http__["b" /* Http */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */], __WEBPACK_IMPORTED_MODULE_7__ionic_storage__["b" /* Storage */]])
    ], GestioneArticoliMagPage);
    return GestioneArticoliMagPage;
}());

var Articolo = (function () {
    function Articolo(id, nome, quantita, descrizione, nome_magazzino) {
        this.id = id;
        this.nome = nome;
        this.quantita = quantita;
        this.descrizione = descrizione;
        this.nome_magazzino = nome_magazzino;
    }
    return Articolo;
}());
//# sourceMappingURL=gestione-articoli-mag.js.map

/***/ }),

/***/ 116:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SpostaArticoliMagPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_storage__ = __webpack_require__(9);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var SpostaArticoliMagPage = (function () {
    function SpostaArticoliMagPage(navCtrl, http, navParams, alertCtrl, storage) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.http = http;
        this.navParams = navParams;
        this.alertCtrl = alertCtrl;
        this.storage = storage;
        this.articoli = [];
        this.magazzini = [];
        storage.get('email').then(function (val) {
            _this.user = val;
        });
        storage.get('password').then(function (val) {
            _this.pass = val;
        });
    }
    SpostaArticoliMagPage.prototype.ionViewWillEnter = function () {
        var _this = this;
        var email = this.user;
        var password = this.pass;
        var nome_mag = this.navParams.data;
        this.titolo = nome_mag;
        var headers = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Headers */]();
        headers.append('Content-Type', 'application/x-www-form-urlencoded');
        var options = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["d" /* RequestOptions */]({ headers: headers });
        var postParams = {
            email: email,
            password: password,
            nome_mag: nome_mag
        };
        this.http.post("http://niscmanager.altervista.org/get_articoli.php", JSON.stringify(postParams), options)
            .subscribe(function (data) {
            _this.dati_server = JSON.parse(data['_body']);
            console.log(_this.dati_server);
            if (_this.dati_server != null) {
                _this.articoli = [];
                for (var i = 0; i < _this.dati_server.length; i++) {
                    _this.articoli.push(new Articolo(_this.dati_server[i].id, _this.dati_server[i].nome, _this.dati_server[i].quantita, _this.dati_server[i].descrizione, nome_mag));
                }
            }
        });
        postParams = {
            email: email,
            password: password,
            nome_mag: nome_mag
        };
        this.http.post("http://niscmanager.altervista.org/get_lista_magazzini.php", JSON.stringify(postParams), options)
            .subscribe(function (data) {
            _this.magazzini = JSON.parse(data['_body']);
            console.log(_this.magazzini);
        });
    };
    SpostaArticoliMagPage.prototype.sposta = function (articolo, spostare) {
        var _this = this;
        var email = this.user;
        var password = this.pass;
        var alert = this.alertCtrl.create();
        alert.setTitle('Sposta da ' + this.navParams.data + ' a...');
        alert.addInput({
            type: 'radio',
            label: this.magazzini[0],
            value: this.magazzini[0],
            checked: true
        });
        for (var i = 1; i < this.magazzini.length; i++) {
            alert.addInput({
                type: 'radio',
                label: this.magazzini[i],
                value: this.magazzini[i],
            });
        }
        alert.addButton('Cancel');
        alert.addButton({
            text: 'OK',
            handler: function (data) {
                console.log("sposto " + spostare + " in " + data);
                var id = articolo.id;
                var nome = articolo.nome;
                var descrizione = articolo.descrizione;
                var mag_part = articolo.nome_magazzino;
                var mag_dest = data;
                var headers = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Headers */]();
                headers.append('Content-Type', 'application/x-www-form-urlencoded');
                var options = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["d" /* RequestOptions */]({ headers: headers });
                var postParams = {
                    email: email,
                    password: password,
                    id: id,
                    nome: nome,
                    descrizione: descrizione,
                    mag_part: mag_part,
                    spostare: spostare,
                    mag_dest: mag_dest
                };
                _this.http.post("http://niscmanager.altervista.org/sposta_articoli.php", JSON.stringify(postParams), options)
                    .subscribe(function (data) {
                    console.log(data['_body']);
                    if (data['_body'] == "Operazione eseguita") {
                        var alert_1 = _this.alertCtrl.create({
                            title: 'Operazione completata',
                            subTitle: '',
                            buttons: [{
                                    text: 'Ok',
                                    handler: function () {
                                        var navTransition = alert_1.dismiss();
                                        navTransition.then(function () {
                                            _this.ionViewWillEnter();
                                        });
                                        return false;
                                    }
                                }]
                        });
                        alert_1.present();
                    }
                    else {
                        var alert_2 = _this.alertCtrl.create({
                            title: data['_body'],
                            subTitle: '',
                            buttons: ['Chiudi']
                        });
                        alert_2.present();
                    }
                });
            }
        });
        alert.present();
    };
    SpostaArticoliMagPage.prototype.initializeItems = function () {
        this.articoli = [];
        for (var i = 0; i < this.dati_server.length; i++) {
            this.articoli.push(this.dati_server[i]);
        }
    };
    SpostaArticoliMagPage.prototype.getItems = function (ev) {
        // Reset items back to all of the items
        this.initializeItems();
        // set val to the value of the searchbar
        var val = ev.target.value;
        // if the value is an empty string don't filter the items
        if (val && val.trim() != '') {
            this.articoli = this.articoli.filter(function (articolo) {
                return (articolo.nome.toLowerCase().indexOf(val.toLowerCase()) > -1);
            });
        }
    };
    SpostaArticoliMagPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-sposta-articoli-mag',template:/*ion-inline-start:"C:\Users\Antonio\Documents\Progetti\NISC-Manager-Final-\src\pages\sposta-articoli-mag\sposta-articoli-mag.html"*/'<ion-header>\n    <ion-navbar color="danger">\n      <ion-title>Sposta articoli</ion-title>\n    </ion-navbar>\n  </ion-header>\n  \n  <ion-content style="background-color:rgb(205, 241, 245);">\n    <p>\n        <ion-searchbar (ionInput)="getItems($event)"></ion-searchbar>     \n    </p>\n    <p></p>\n    <div ng-controller="listController"> \n      <ion-list>\n    \n      <ion-item *ngFor="let articolo of articoli">\n          <ion-thumbnail item-start>\n            <img src="assets/img/articolo.png">\n          </ion-thumbnail>\n          <h2>Nome: {{articolo.nome}}</h2>\n          <p>Disponibiltà: {{articolo.quantita}}</p>\n          <p>\n            <label>Da spostare:\n              <input #spostare type="number" value="0" min="0" max={{articolo.quantita}} step="1">\n            </label>\n          </p>\n          <button ion-button outline item-end (click)=\'sposta(articolo,spostare.value)\'>Sposta</button>\n        </ion-item>\n      </ion-list>\n    </div>\n\n  </ion-content>'/*ion-inline-end:"C:\Users\Antonio\Documents\Progetti\NISC-Manager-Final-\src\pages\sposta-articoli-mag\sposta-articoli-mag.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_2__angular_http__["b" /* Http */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */], __WEBPACK_IMPORTED_MODULE_3__ionic_storage__["b" /* Storage */]])
    ], SpostaArticoliMagPage);
    return SpostaArticoliMagPage;
}());

var Articolo = (function () {
    function Articolo(id, nome, quantita, descrizione, nome_magazzino) {
        this.id = id;
        this.nome = nome;
        this.quantita = quantita;
        this.descrizione = descrizione;
        this.nome_magazzino = nome_magazzino;
    }
    return Articolo;
}());
//# sourceMappingURL=sposta-articoli-mag.js.map

/***/ }),

/***/ 117:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GestioneMagazziniAdminPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__inserisci_modifica_magazzino_inserisci_modifica_magazzino__ = __webpack_require__(118);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__gestione_articoli_admin_gestione_articoli_admin__ = __webpack_require__(114);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__elimina_magazzini_admin_elimina_magazzini_admin__ = __webpack_require__(113);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_storage__ = __webpack_require__(9);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var GestioneMagazziniAdminPage = (function () {
    function GestioneMagazziniAdminPage(navCtrl, http, navParams, storage) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.http = http;
        this.navParams = navParams;
        this.storage = storage;
        this.magazzini = [];
        storage.get('email').then(function (val) {
            _this.user = val;
        });
        storage.get('password').then(function (val) {
            _this.pass = val;
        });
    }
    GestioneMagazziniAdminPage.prototype.ionViewWillEnter = function () {
        var _this = this;
        var email = this.user;
        var password = this.pass;
        this.magazzini = [];
        var headers = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Headers */]();
        headers.append('Content-Type', 'application/x-www-form-urlencoded');
        var options = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["d" /* RequestOptions */]({ headers: headers });
        var postParams = {
            email: email,
            password: password
        };
        this.http.post("http://niscmanager.altervista.org/get_magazzini.php", JSON.stringify(postParams), options)
            .subscribe(function (data) {
            console.log(data['_body']);
            _this.dati_server = JSON.parse(data['_body']);
            if (_this.dati_server != null) {
                for (var i = 0; i < _this.dati_server.length; i++) {
                    _this.magazzini.push(new Magazzino(_this.dati_server[i].nome, _this.dati_server[i].descrizione));
                }
            }
        });
    };
    GestioneMagazziniAdminPage.prototype.modifica = function (magazzino) {
        console.log("Selected Item", magazzino.nome);
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__inserisci_modifica_magazzino_inserisci_modifica_magazzino__["a" /* InserisciModificaMagazzinoPage */], magazzino);
    };
    GestioneMagazziniAdminPage.prototype.inserisci = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__inserisci_modifica_magazzino_inserisci_modifica_magazzino__["a" /* InserisciModificaMagazzinoPage */], "inserisci");
    };
    GestioneMagazziniAdminPage.prototype.mostra_articoli = function (magazzino) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__gestione_articoli_admin_gestione_articoli_admin__["a" /* GestioneArticoliAdminPage */], magazzino);
    };
    //bisogna selezionare quelli da eliminare
    GestioneMagazziniAdminPage.prototype.elimina = function () {
        console.log("Selected Item");
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_5__elimina_magazzini_admin_elimina_magazzini_admin__["a" /* EliminaMagazziniAdminPage */], this.magazzini);
    };
    GestioneMagazziniAdminPage.prototype.initializeItems = function () {
        this.magazzini = [];
        for (var i = 0; i < this.dati_server.length; i++) {
            this.magazzini.push(this.dati_server[i]);
        }
    };
    GestioneMagazziniAdminPage.prototype.getItems = function (ev) {
        // Reset items back to all of the items
        this.initializeItems();
        // set val to the value of the searchbar
        var val = ev.target.value;
        // if the value is an empty string don't filter the items
        if (val && val.trim() != '') {
            this.magazzini = this.magazzini.filter(function (magazzino) {
                return (magazzino.nome.toLowerCase().indexOf(val.toLowerCase()) > -1);
            });
        }
    };
    GestioneMagazziniAdminPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-gestione-magazzini-admin',template:/*ion-inline-start:"C:\Users\Antonio\Documents\Progetti\NISC-Manager-Final-\src\pages\gestione-magazzini-admin\gestione-magazzini-admin.html"*/'<ion-header>\n  <ion-navbar color="primary">\n    <ion-title>Gestione magazzini</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content>\n  <p>\n    <ion-searchbar (ionInput)="getItems($event)"></ion-searchbar> \n  </p>\n  <p></p>\n  <div ng-controller="listController"> \n    <ion-list>\n\n    <ion-item *ngFor="let magazzino of magazzini">\n        <h2 (click)=\'mostra_articoli(magazzino)\'>{{magazzino.nome}}</h2>\n        <p>{{magazzino.descrizione}}</p>\n            \n        <button ion-button outline item-end (click)=\'modifica(magazzino)\'>Modifica</button>\n      </ion-item>\n    </ion-list>\n  </div>\n  \n</ion-content>\n<ion-footer>\n  <p align=\'center\'>\n    <button ion-button color="secondary" round (click)=\'inserisci()\'>Inserisci</button>\n    <button ion-button color="danger" round (click)=\'elimina()\'>Elimina</button>\n  </p>\n</ion-footer>'/*ion-inline-end:"C:\Users\Antonio\Documents\Progetti\NISC-Manager-Final-\src\pages\gestione-magazzini-admin\gestione-magazzini-admin.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_2__angular_http__["b" /* Http */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */], __WEBPACK_IMPORTED_MODULE_6__ionic_storage__["b" /* Storage */]])
    ], GestioneMagazziniAdminPage);
    return GestioneMagazziniAdminPage;
}());

var Magazzino = (function () {
    function Magazzino(nome, descrizione) {
        this.nome = nome;
        this.descrizione = descrizione;
    }
    return Magazzino;
}());
//# sourceMappingURL=gestione-magazzini-admin.js.map

/***/ }),

/***/ 118:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return InserisciModificaMagazzinoPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_storage__ = __webpack_require__(9);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var InserisciModificaMagazzinoPage = (function () {
    function InserisciModificaMagazzinoPage(navCtrl, navParams, http, alertCtrl, storage) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.http = http;
        this.alertCtrl = alertCtrl;
        this.storage = storage;
        this.titolo_pagina = "";
        storage.get('email').then(function (val) {
            _this.user = val;
        });
        storage.get('password').then(function (val) {
            _this.pass = val;
        });
        if (navParams.data == "inserisci") {
            this.titolo_pagina = "Inserisci magazzino";
            this.magazzino = new Magazzino(null, null);
        }
        else {
            this.titolo_pagina = "Modifica magazzino";
            this.magazzino = navParams.data;
            console.log(this.magazzino.nome);
        }
    }
    InserisciModificaMagazzinoPage.prototype.salva = function (nome, descrizione) {
        var _this = this;
        var email = this.user;
        var password = this.pass;
        var headers = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Headers */]();
        headers.append('Content-Type', 'application/x-www-form-urlencoded');
        var options = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["d" /* RequestOptions */]({ headers: headers });
        if (this.navParams.data == "inserisci") {
            var postParams = {
                email: email,
                password: password,
                nome: nome,
                descrizione: descrizione
            };
            this.http.post("http://niscmanager.altervista.org/put_magazzino.php", JSON.stringify(postParams), options)
                .subscribe(function (data) {
                console.log(data['_body']);
                var alert = _this.alertCtrl.create({
                    title: 'titolo',
                    subTitle: 'sottotitolo',
                    buttons: ['Dismiss']
                });
                if (data['_body'] == "Records inserted successfully.") {
                    alert = _this.alertCtrl.create({
                        title: 'Operazione completata',
                        subTitle: '',
                        buttons: [{
                                text: 'Ok',
                                handler: function () {
                                    var navTransition = alert.dismiss();
                                    navTransition.then(function () {
                                        _this.navCtrl.pop();
                                    });
                                    return false;
                                }
                            }]
                    });
                }
                else {
                    alert = _this.alertCtrl.create({
                        title: data['_body'],
                        subTitle: '',
                        buttons: ['Chiudi']
                    });
                }
                alert.present();
            }, function (error) {
                console.log(error); // Error getting the data
            });
        }
        else {
            var vecchio_nome = this.magazzino.nome;
            var postParams = {
                email: email,
                password: password,
                vecchio_nome: vecchio_nome,
                nome: nome,
                descrizione: descrizione
            };
            this.http.post("http://niscmanager.altervista.org/modifica_magazzino.php", JSON.stringify(postParams), options)
                .subscribe(function (data) {
                console.log(data['_body']);
                var alert = _this.alertCtrl.create({
                    title: 'titolo',
                    subTitle: 'sottotitolo',
                    buttons: ['Dismiss']
                });
                if (data['_body'] == "Records updated successfully.") {
                    alert = _this.alertCtrl.create({
                        title: 'Operazione completata',
                        subTitle: '',
                        buttons: [{
                                text: 'Ok',
                                handler: function () {
                                    var navTransition = alert.dismiss();
                                    navTransition.then(function () {
                                        _this.navCtrl.pop();
                                    });
                                    return false;
                                }
                            }]
                    });
                }
                else {
                    alert = _this.alertCtrl.create({
                        title: data['_body'],
                        subTitle: '',
                        buttons: ['Chiudi']
                    });
                }
                alert.present();
            }, function (error) {
                console.log(error); // Error getting the data
            });
        }
    };
    InserisciModificaMagazzinoPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-inserisci-modifica-magazzino',template:/*ion-inline-start:"C:\Users\Antonio\Documents\Progetti\NISC-Manager-Final-\src\pages\inserisci-modifica-magazzino\inserisci-modifica-magazzino.html"*/'<ion-header>\n\n  <ion-navbar color="danger">\n    <ion-title>{{ titolo_pagina }}</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding style="background-color:rgb(205, 241, 245);">\n  <ion-grid>\n    <ion-row>\n      <ion-item>\n        <ion-label stacked>Nome magazzino (nome squadra)</ion-label>\n        <ion-input #nome type="text" value={{magazzino.nome}}></ion-input>\n      </ion-item>\n    </ion-row>\n    <ion-row>\n      <ion-item>\n        <ion-label stacked>Descrizione</ion-label>\n        <ion-input #descrizione type="text" value={{magazzino.descrizione}}></ion-input>\n      </ion-item>\n    </ion-row>\n  </ion-grid>\n\n</ion-content>\n<ion-footer>\n  <p align=\'center\'>\n      <button ion-button color="secondary" round (click)=\'salva(nome.value,descrizione.value)\'>Salva</button>\n  </p>\n</ion-footer>'/*ion-inline-end:"C:\Users\Antonio\Documents\Progetti\NISC-Manager-Final-\src\pages\inserisci-modifica-magazzino\inserisci-modifica-magazzino.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__angular_http__["b" /* Http */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */], __WEBPACK_IMPORTED_MODULE_3__ionic_storage__["b" /* Storage */]])
    ], InserisciModificaMagazzinoPage);
    return InserisciModificaMagazzinoPage;
}());

var Magazzino = (function () {
    function Magazzino(nome, descrizione) {
        this.nome = nome;
        this.descrizione = descrizione;
    }
    return Magazzino;
}());
//# sourceMappingURL=inserisci-modifica-magazzino.js.map

/***/ }),

/***/ 119:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GestioneMagazziniMagPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_storage__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__gestione_articoli_mag_gestione_articoli_mag__ = __webpack_require__(115);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var GestioneMagazziniMagPage = (function () {
    function GestioneMagazziniMagPage(navCtrl, http, navParams, storage) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.http = http;
        this.navParams = navParams;
        this.storage = storage;
        this.magazzini = [];
        storage.get('email').then(function (val) {
            _this.user = val;
        });
        storage.get('password').then(function (val) {
            _this.pass = val;
        });
    }
    GestioneMagazziniMagPage.prototype.ionViewWillEnter = function () {
        var _this = this;
        var email = this.user;
        var password = this.pass;
        this.magazzini = [];
        var headers = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Headers */]();
        headers.append('Content-Type', 'application/x-www-form-urlencoded');
        var options = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["d" /* RequestOptions */]({ headers: headers });
        var postParams = {
            email: email,
            password: password
        };
        this.http.post("http://niscmanager.altervista.org/get_magazzini.php", JSON.stringify(postParams), options)
            .subscribe(function (data) {
            if (data['_body'][0] == "[") {
                _this.dati_server = JSON.parse(data['_body']);
                if (_this.dati_server != null) {
                    for (var i = 0; i < _this.dati_server.length; i++) {
                        _this.magazzini.push(new Magazzino(_this.dati_server[i].nome, _this.dati_server[i].descrizione));
                    }
                }
            }
            else {
                console.log(data['_body']);
            }
        });
    };
    GestioneMagazziniMagPage.prototype.mostra_articoli = function (magazzino) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__gestione_articoli_mag_gestione_articoli_mag__["a" /* GestioneArticoliMagPage */], magazzino);
    };
    GestioneMagazziniMagPage.prototype.initializeItems = function () {
        this.magazzini = [];
        for (var i = 0; i < this.dati_server.length; i++) {
            this.magazzini.push(this.dati_server[i]);
        }
    };
    GestioneMagazziniMagPage.prototype.getItems = function (ev) {
        // Reset items back to all of the items
        this.initializeItems();
        // set val to the value of the searchbar
        var val = ev.target.value;
        // if the value is an empty string don't filter the items
        if (val && val.trim() != '') {
            this.magazzini = this.magazzini.filter(function (magazzino) {
                return (magazzino.nome.toLowerCase().indexOf(val.toLowerCase()) > -1);
            });
        }
    };
    GestioneMagazziniMagPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-gestione-magazzini-mag',template:/*ion-inline-start:"C:\Users\Antonio\Documents\Progetti\NISC-Manager-Final-\src\pages\gestione-magazzini-mag\gestione-magazzini-mag.html"*/'<ion-header>\n  <ion-navbar color="secondary">\n    <ion-title>Gestione magazzini</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content>\n  <p>\n      <ion-searchbar (ionInput)="getItems($event)"></ion-searchbar>\n  </p>\n  <p></p>\n  <div ng-controller="listController"> \n  <ion-list>\n   <ion-item *ngFor="let magazzino of magazzini" (click)=\'mostra_articoli(magazzino)\'>\n      <h2>{{magazzino.nome}}</h2>\n      <p>{{magazzino.descrizione}}</p>\n    </ion-item>\n  </ion-list>\n</div>\n</ion-content>'/*ion-inline-end:"C:\Users\Antonio\Documents\Progetti\NISC-Manager-Final-\src\pages\gestione-magazzini-mag\gestione-magazzini-mag.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_2__angular_http__["b" /* Http */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */], __WEBPACK_IMPORTED_MODULE_3__ionic_storage__["b" /* Storage */]])
    ], GestioneMagazziniMagPage);
    return GestioneMagazziniMagPage;
}());

var Magazzino = (function () {
    function Magazzino(nome, descrizione) {
        this.nome = nome;
        this.descrizione = descrizione;
    }
    return Magazzino;
}());
//# sourceMappingURL=gestione-magazzini-mag.js.map

/***/ }),

/***/ 120:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GestioneRichiesteMagPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_storage__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__dettagli_richiesta_mag_dettagli_richiesta_mag__ = __webpack_require__(110);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var GestioneRichiesteMagPage = (function () {
    function GestioneRichiesteMagPage(navCtrl, http, navParams, storage) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.http = http;
        this.navParams = navParams;
        this.storage = storage;
        this.richieste = [];
        storage.get('email').then(function (val) {
            _this.user = val;
        });
        storage.get('password').then(function (val) {
            _this.pass = val;
        });
    }
    GestioneRichiesteMagPage.prototype.ionViewWillEnter = function () {
        var _this = this;
        var email = this.user;
        var password = this.pass;
        this.richieste = [];
        var headers = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Headers */]();
        headers.append('Content-Type', 'application/x-www-form-urlencoded');
        var options = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["d" /* RequestOptions */]({ headers: headers });
        var postParams = {
            email: email,
            password: password
        };
        this.http.post("http://niscmanager.altervista.org/get_richieste_mag.php", JSON.stringify(postParams), options)
            .subscribe(function (data) {
            console.log(data['_body']);
            _this.dati_server = JSON.parse(data['_body']);
            if (_this.dati_server != null) {
                for (var i = 0; i < _this.dati_server.length; i++) {
                    _this.richieste.push(new Richiesta(_this.dati_server[i].id, _this.dati_server[i].squadra, _this.dati_server[i].stato));
                }
            }
        });
    };
    GestioneRichiesteMagPage.prototype.gestisci = function (richiesta) {
        if (richiesta.stato == "in attesa") {
            var valori = [];
            valori[0] = richiesta.id;
            valori[1] = richiesta.squadra;
            this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__dettagli_richiesta_mag_dettagli_richiesta_mag__["a" /* DettagliRichiestaMagPage */], valori);
        }
        else {
        }
    };
    GestioneRichiesteMagPage.prototype.initializeItems = function () {
        this.richieste = [];
        for (var i = 0; i < this.dati_server.length; i++) {
            this.richieste.push(this.dati_server[i]);
        }
    };
    GestioneRichiesteMagPage.prototype.getItems = function (ev) {
        // Reset items back to all of the items
        this.initializeItems();
        // set val to the value of the searchbar
        var val = ev.target.value;
        // if the value is an empty string don't filter the items
        if (val && val.trim() != '') {
            this.richieste = this.richieste.filter(function (richiesta) {
                return (richiesta.squadra.toLowerCase().indexOf(val.toLowerCase()) > -1);
            });
        }
    };
    GestioneRichiesteMagPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-gestione-richieste-mag',template:/*ion-inline-start:"C:\Users\Antonio\Documents\Progetti\NISC-Manager-Final-\src\pages\gestione-richieste-mag\gestione-richieste-mag.html"*/'<ion-header>\n  <ion-navbar color="danger">\n    <ion-title>Gestione richieste</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content style="background-color:rgb(205, 241, 245);">\n  <p>\n      <ion-searchbar (ionInput)="getItems($event)"></ion-searchbar>\n  </p>\n  <p></p>\n  <div ng-controller="listController"> \n  <ion-list>\n   <ion-item *ngFor="let richiesta of richieste">\n      <h2>ID: {{richiesta.id}}</h2>\n      <p>Squadra: {{richiesta.squadra}}</p>\n      <p>Stato: {{richiesta.stato}}</p>\n      <button ion-button outline item-end (click)=\'gestisci(richiesta)\'>Gestisci</button>\n    </ion-item>\n  </ion-list>\n</div>\n</ion-content>'/*ion-inline-end:"C:\Users\Antonio\Documents\Progetti\NISC-Manager-Final-\src\pages\gestione-richieste-mag\gestione-richieste-mag.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_2__angular_http__["b" /* Http */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */], __WEBPACK_IMPORTED_MODULE_3__ionic_storage__["b" /* Storage */]])
    ], GestioneRichiesteMagPage);
    return GestioneRichiesteMagPage;
}());

var Richiesta = (function () {
    function Richiesta(id, squadra, stato) {
        this.id = id;
        this.squadra = squadra;
        this.stato = stato;
    }
    return Richiesta;
}());
//# sourceMappingURL=gestione-richieste-mag.js.map

/***/ }),

/***/ 121:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GestioneRegistrazionePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_storage__ = __webpack_require__(9);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var GestioneRegistrazionePage = (function () {
    function GestioneRegistrazionePage(navCtrl, navParams, http, str) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.http = http;
        this.str = str;
        this.utenti = [];
        this.utenti_s = [];
        str.get('email').then(function (email) {
            _this.email_a = email;
        });
        str.get('password').then(function (pass) {
            _this.password_a = pass;
        });
        this.postRequest(this.email_a, this.password_a);
    }
    GestioneRegistrazionePage.prototype.postRequest = function (email, pass) {
        var _this = this;
        var headers = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Headers */]();
        headers.append('Content-Type', 'application/x-www-form-urlencoded');
        var options = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["d" /* RequestOptions */]({ headers: headers });
        var postParams = {
            email: email,
            pass: pass
        };
        this.http.post("http://niscmanager.altervista.org/get_richiedenti.php", JSON.stringify(postParams), options)
            .subscribe(function (data) {
            _this.dati_server = data.json();
            console.log(_this.dati_server);
            if (_this.dati_server != null) {
                for (var i = 0; i < _this.dati_server.length; i++) {
                    if (_this.dati_server[i].ruolo != 'Amministratore')
                        _this.utenti.push(new Utente(_this.dati_server[i].email, _this.dati_server[i].password, _this.dati_server[i].nome_squadra, _this.dati_server[i].componenti, _this.dati_server[i].stato, _this.dati_server[i].ruolo));
                }
            }
        }, function (error) {
            console.log(error); // Error getting the data
        });
    };
    GestioneRegistrazionePage.prototype.updateStatus = function (utente, stato, ruolo) {
        var _this = this;
        var headers = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Headers */]();
        headers.append('Content-Type', 'application/x-www-form-urlencoded');
        var options = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["d" /* RequestOptions */]({ headers: headers });
        console.log(utente.email, stato);
        var postParams = {
            email: utente.email,
            stato: stato,
            ruolo: ruolo
        };
        this.http.post("http://niscmanager.altervista.org/update_status.php", JSON.stringify(postParams), options)
            .subscribe(function (data) {
            _this.dati_server = data;
            _this.navCtrl.pop();
            _this.navCtrl.push(_this.navCtrl.getActive().component);
            console.log(_this.dati_server);
        }, function (error) {
            console.log(error); // Error getting the data
        });
    };
    GestioneRegistrazionePage.prototype.initializeItems = function () {
        this.utenti = [];
        for (var i = 0; i < this.dati_server.length; i++) {
            if (this.dati_server[i].ruolo != 'Amministratore')
                this.utenti.push(new Utente(this.dati_server[i].email, this.dati_server[i].password, this.dati_server[i].nome_squadra, this.dati_server[i].componenti, this.dati_server[i].stato, this.dati_server[i].ruolo));
        }
    };
    GestioneRegistrazionePage.prototype.getItems = function (ev) {
        // Reset items back to all of the items
        this.initializeItems();
        // set val to the value of the searchbar
        var val = ev.target.value;
        // if the value is an empty string don't filter the items
        if (val && val.trim() != '') {
            this.utenti = this.utenti.filter(function (search) {
                return (search.nome_s.toLowerCase().indexOf(val.toLowerCase()) > -1);
            });
        }
    };
    GestioneRegistrazionePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-gestione-registrazione',template:/*ion-inline-start:"C:\Users\Antonio\Documents\Progetti\NISC-Manager-Final-\src\pages\gestione-registrazione\gestione-registrazione.html"*/'<ion-header>\n\n  <ion-navbar color="primary">\n    <ion-title>Gestione Registrazione</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n<ion-content padding>\n    \n        <ion-searchbar placeholder="Cerca per nome squadra" (ionInput)="getItems($event)"></ion-searchbar>\n\n        <ion-list>\n            <ion-item *ngFor="let utente of utenti">\n              <h2>{{utente.nome_s}}</h2>\n              <h3>{{utente.email}}</h3>\n              <p>{{utente.ruolo}}</p>\n              <button item-end *ngIf="utente.stato == \'rifiutato\';" class="rifiutato" ion-button> </button>\n              <button item-end *ngIf="utente.stato == \'approvato\';" class="approvato" ion-button> </button>\n              <button item-end *ngIf="utente.stato == \'in attesa\';" class="inAttesa" ion-button> </button>\n              <ion-icon item-end name="checkmark-circle-outline" (click)="updateStatus(utente,\'approvato\',\'\')"></ion-icon> \n              <ion-icon item-end name="close" (click)="updateStatus(utente,\'rifiutato\',\'\')"></ion-icon>\n            </ion-item> \n          </ion-list>\n\n\n</ion-content>\n    \n        '/*ion-inline-end:"C:\Users\Antonio\Documents\Progetti\NISC-Manager-Final-\src\pages\gestione-registrazione\gestione-registrazione.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__angular_http__["b" /* Http */], __WEBPACK_IMPORTED_MODULE_3__ionic_storage__["b" /* Storage */]])
    ], GestioneRegistrazionePage);
    return GestioneRegistrazionePage;
}());

var Utente = (function () {
    function Utente(email, password, nome_s, compo, stato, ruolo) {
        this.email = email;
        this.password = password;
        this.nome_s = nome_s;
        this.componenti = compo;
        this.stato = stato;
        this.ruolo = ruolo;
    }
    return Utente;
}());
//# sourceMappingURL=gestione-registrazione.js.map

/***/ }),

/***/ 122:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GestioneUtentiPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__modifica_profilo_admin_modifica_profilo_admin__ = __webpack_require__(123);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_storage__ = __webpack_require__(9);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var GestioneUtentiPage = (function () {
    function GestioneUtentiPage(navCtrl, navParams, http, storage) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.http = http;
        this.storage = storage;
        this.utenti = [];
        storage.get('email').then(function (val) {
            _this.email = val;
        });
        storage.get('password').then(function (val) {
            _this.password = val;
        });
        this.postRequest(this.email, this.password);
    }
    GestioneUtentiPage.prototype.postRequest = function (email, pass) {
        var _this = this;
        var headers = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Headers */]();
        headers.append('Content-Type', 'application/x-www-form-urlencoded');
        var options = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["d" /* RequestOptions */]({ headers: headers });
        var params = {
            email: email,
            pass: pass,
        };
        this.http.post("http://niscmanager.altervista.org/get_richiedenti.php", JSON.stringify(params), options)
            .subscribe(function (data) {
            _this.dati_server = data.json();
            console.log(_this.dati_server);
            if (_this.dati_server != null) {
                for (var i = 0; i < _this.dati_server.length; i++) {
                    if (_this.dati_server[i].ruolo != 'Amministratore')
                        _this.utenti.push(new Utente(_this.dati_server[i].email, _this.dati_server[i].password, _this.dati_server[i].nome_squadra, _this.dati_server[i].componenti, _this.dati_server[i].stato, _this.dati_server[i].ruolo));
                }
            }
        }, function (error) {
            console.log(error); // Error getting the data
        });
    };
    GestioneUtentiPage.prototype.goToModified = function (utente) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__modifica_profilo_admin_modifica_profilo_admin__["a" /* ModificaProfiloAdminPage */], utente);
    };
    GestioneUtentiPage.prototype.initializeItems = function () {
        this.utenti = [];
        for (var i = 0; i < this.dati_server.length; i++) {
            if (this.dati_server[i].ruolo != 'Amministratore')
                this.utenti.push(new Utente(this.dati_server[i].email, this.dati_server[i].password, this.dati_server[i].nome_squadra, this.dati_server[i].componenti, this.dati_server[i].stato, this.dati_server[i].ruolo));
        }
    };
    GestioneUtentiPage.prototype.getItems = function (ev) {
        // Reset items back to all of the items
        this.initializeItems();
        // set val to the value of the searchbar
        var val = ev.target.value;
        // if the value is an empty string don't filter the items
        if (val && val.trim() != '') {
            this.utenti = this.utenti.filter(function (search) {
                return (search.nome_s.toLowerCase().indexOf(val.toLowerCase()) > -1);
            });
        }
    };
    GestioneUtentiPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-gestione-utenti',template:/*ion-inline-start:"C:\Users\Antonio\Documents\Progetti\NISC-Manager-Final-\src\pages\gestione-utenti\gestione-utenti.html"*/'<ion-header>\n\n  <ion-navbar color="primary">\n    <ion-title>Gestione Utenti</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n<ion-content padding>\n    <ion-searchbar (ionInput)="getItems($event)"></ion-searchbar>\n    <ion-list>\n      <ion-item *ngFor="let utente of utenti">\n        <ion-card>\n            <ion-card-header text-center>\n              {{utente.email}}\n            </ion-card-header>\n            <ion-card-content>\n              <ion-list>\n                  <ion-item><span>Squadra:  </span><span class="dati">{{utente.nome_s}}</span> <br/>\n                      Componenti:{{utente.componenti}} <br/>\n                      Ruolo : {{utente.ruolo}} <br/>\n                      Stato: {{utente.stato}} \n                    </ion-item>\n                  </ion-list>\n                      <div align=\'center\'><button ion-button round item-end (click)="goToModified(utente)">Modifica</button></div>\n                  \n             \n            </ion-card-content>\n          </ion-card>\n        </ion-item>\n    </ion-list>\n</ion-content>\n'/*ion-inline-end:"C:\Users\Antonio\Documents\Progetti\NISC-Manager-Final-\src\pages\gestione-utenti\gestione-utenti.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__angular_http__["b" /* Http */], __WEBPACK_IMPORTED_MODULE_4__ionic_storage__["b" /* Storage */]])
    ], GestioneUtentiPage);
    return GestioneUtentiPage;
}());

var Utente = (function () {
    function Utente(email, password, nome_s, compo, stato, ruolo) {
        this.email = email;
        this.password = password;
        this.nome_s = nome_s;
        this.componenti = compo;
        this.stato = stato;
        this.ruolo = ruolo;
    }
    return Utente;
}());
//# sourceMappingURL=gestione-utenti.js.map

/***/ }),

/***/ 123:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ModificaProfiloAdminPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__home_amm_home_amm__ = __webpack_require__(56);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





/**
 * Generated class for the ModificaProfiloAdminPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var ModificaProfiloAdminPage = (function () {
    function ModificaProfiloAdminPage(navCtrl, navParams, altr, http) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.altr = altr;
        this.http = http;
        this.nome = navParams.data.nome;
        this.email = navParams.data.email;
        this.password = navParams.data.password;
        this.componenti = navParams.data.componenti;
        this.ruolo = navParams.data.ruolo;
        this.nome_s = navParams.data.nome_s;
        this.stato = navParams.data.stato;
        this.email_v = this.email;
    }
    ModificaProfiloAdminPage.prototype.postRequest = function (email, stato, ruolo) {
        var _this = this;
        var headers = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Headers */]();
        var e = this.email_v;
        var nome_squadra = this.nome_s;
        headers.append('Content-Type', 'application/x-www-form-urlencoded');
        var options = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["d" /* RequestOptions */]({ headers: headers });
        var postParams = {
            nome_squadra: nome_squadra,
            e: e,
            email: email,
            ruolo: ruolo,
            stato: stato
        };
        console.log(e, email, ruolo, stato, nome_squadra);
        this.http.post("http://niscmanager.altervista.org/update_utente.php", JSON.stringify(postParams), options)
            .subscribe(function (data) {
            console.log(data['_body']);
            _this.presentConfirm('Modifica Effettuata');
            _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_3__home_amm_home_amm__["a" /* HomeAmmPage */]);
        }, function (error) {
            console.log(error); // Error getting the data
        });
    };
    ModificaProfiloAdminPage.prototype.presentConfirm = function (text) {
        var alert = this.altr.create({
            title: 'Modifica Profilo',
            message: text,
            buttons: [
                {
                    text: 'Ok',
                    role: 'cancel',
                    handler: function () {
                        console.log('Cancel clicked');
                    }
                },
            ]
        });
        alert.present();
    };
    ModificaProfiloAdminPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-modifica-profilo-admin',template:/*ion-inline-start:"C:\Users\Antonio\Documents\Progetti\NISC-Manager-Final-\src\pages\modifica-profilo-admin\modifica-profilo-admin.html"*/'<ion-header>\n\n  <ion-navbar color="primary">\n    <ion-title>Modifica Profilo</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n      <ion-grid>\n          <ion-row>\n            <ion-item>\n              <ion-label stacked>Email </ion-label>\n              <ion-input type="text" value={{email_v}} [(ngModel)]="email" [ngModelOptions]="{standalone: true}"></ion-input>\n            </ion-item>\n          </ion-row>\n          <ion-row>\n            <ion-item>\n              <ion-label stacked>Status</ion-label>\n              <ion-select [(ngModel)]="stato" [ngModelOptions]="{standalone: true}">\n                  <ion-option value="approvato">\n                    Approva\n                  </ion-option>\n                  <ion-option value="rifiutato">\n                    Rifiuta\n                  </ion-option>\n              </ion-select>\n            </ion-item>\n          </ion-row>\n         <ion-row>\n           <ion-item>\n              <ion-label stacked>Ruolo</ion-label>\n          <ion-select [(ngModel)]="ruolo" [ngModelOptions]="{standalone: true}">\n              <ion-option value="Richiedente">\n                Richiedente\n              </ion-option>\n              <ion-option value="Magazziniere">\n                Magazziniere\n              </ion-option>\n          </ion-select>\n        </ion-item>\n        </ion-row>\n      </ion-grid>\n\n  <p align=\'center\'>\n      <button ion-button color="primary" round (click)=\'postRequest(email, stato, ruolo)\'>Salva</button>\n  </p>\n  \n</ion-content>\n'/*ion-inline-end:"C:\Users\Antonio\Documents\Progetti\NISC-Manager-Final-\src\pages\modifica-profilo-admin\modifica-profilo-admin.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */], __WEBPACK_IMPORTED_MODULE_2__angular_http__["b" /* Http */]])
    ], ModificaProfiloAdminPage);
    return ModificaProfiloAdminPage;
}());

//# sourceMappingURL=modifica-profilo-admin.js.map

/***/ }),

/***/ 124:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MymagazzinoPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__dettagliarticoli_dettagliarticoli__ = __webpack_require__(44);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_storage__ = __webpack_require__(9);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



//import { HttpClient } from '@angular/common/http';


/**
 * Generated class for the MymagazzinoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var MymagazzinoPage = (function () {
    function MymagazzinoPage(navCtrl, http, navParams, storage) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.http = http;
        this.navParams = navParams;
        this.storage = storage;
        this.articoli = [];
        //sessione: chi sei?  
        storage.get('email').then(function (val) {
            _this.user = val;
            console.log("email1: " + _this.user);
        });
        storage.get('password').then(function (val) {
            _this.pass = val;
        });
        this.ionViewWillEnter();
    }
    MymagazzinoPage.prototype.itemSelected = function (articolo) {
        console.log("Selected Item", articolo.nome);
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__dettagliarticoli_dettagliarticoli__["a" /* DettagliPage */], articolo);
    };
    MymagazzinoPage.prototype.initializeItems = function () {
        this.articoli = [];
        for (var i = 0; i < this.dati_server.length; i++) {
            this.articoli.push(this.dati_server[i]);
        }
    };
    MymagazzinoPage.prototype.getItems = function (ev) {
        // Reset items back to all of the items
        this.initializeItems();
        // set val to the value of the searchbar
        var val = ev.target.value;
        // if the value is an empty string don't filter the items
        if (val && val.trim() != '') {
            this.articoli = this.articoli.filter(function (articolo) {
                return (articolo.nome.toLowerCase().indexOf(val.toLowerCase()) > -1);
            });
        }
    };
    MymagazzinoPage.prototype.ionViewWillEnter = function () {
        var _this = this;
        var headers = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Headers */]();
        headers.append('Content-Type', 'application/x-www-form-urlencoded');
        var options = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["d" /* RequestOptions */]({ headers: headers });
        //var nome_mag="squadra1"; 
        var email = this.user;
        var password = this.pass;
        var postParams = {
            email: email,
            password: password
        };
        console.log("email: " + email);
        this.http.post("http://niscmanager.altervista.org/get_magazzino_post.php", JSON.stringify(postParams), options)
            .subscribe(function (data) {
            console.log("ciao " + data['_body']);
            _this.dati_server = JSON.parse(data['_body']);
            console.log("ciao dopo " + _this.dati_server);
            if (_this.dati_server != null) {
                _this.articoli = []; //aggiorna da zero la lista
                for (var i = 0; i < _this.dati_server.length; i++) {
                    _this.articoli.push(new Articolo(_this.dati_server[i].id, _this.dati_server[i].nome, _this.dati_server[i].quantita, _this.dati_server[i].descrizione, _this.dati_server[i].magazzino));
                }
            }
        });
    };
    MymagazzinoPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-mymagazzino',template:/*ion-inline-start:"C:\Users\Antonio\Documents\Progetti\NISC-Manager-Final-\src\pages\mymagazzino\mymagazzino.html"*/'<ion-header>\n\n  <ion-navbar color="primary">\n    <ion-title>My Magazzino</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n\n    <ion-searchbar (ionInput)="getItems($event)"></ion-searchbar>\n\n    <ion-grid>\n      <ion-row>\n        <ion-col col-3></ion-col>\n        <ion-col col-1>ID</ion-col>\n        <ion-col col-6>Nome</ion-col>\n        <ion-col col-2>Quantità</ion-col>\n      </ion-row>\n    </ion-grid>\n\n    <ion-list>\n        <button ion-item *ngFor="let articolo of articoli" (click)="itemSelected(articolo)">\n          <ion-grid>\n              <ion-row>\n                <ion-col col-3><img src="assets/img/componente2.jpg"></ion-col>\n                <ion-col col-1>{{ articolo.id }}</ion-col>\n                <ion-col col-6>{{ articolo.nome }}</ion-col>\n                <ion-col col-2>{{ articolo.quantita }}</ion-col>\n              </ion-row>\n            </ion-grid>\n        </button>\n\n      </ion-list>\n\n</ion-content>\n'/*ion-inline-end:"C:\Users\Antonio\Documents\Progetti\NISC-Manager-Final-\src\pages\mymagazzino\mymagazzino.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_2__angular_http__["b" /* Http */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */], __WEBPACK_IMPORTED_MODULE_4__ionic_storage__["b" /* Storage */]])
    ], MymagazzinoPage);
    return MymagazzinoPage;
}());

var Articolo = (function () {
    function Articolo(id, nome, quantita, descrizione, nome_magazzino) {
        this.id = id;
        this.nome = nome;
        this.quantita = quantita;
        this.descrizione = descrizione;
        this.nome_magazzino = nome_magazzino;
    }
    return Articolo;
}());
//# sourceMappingURL=mymagazzino.js.map

/***/ }),

/***/ 125:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RichiesteMaterialePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_storage__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__dettaglirichiesta_dettaglirichiesta__ = __webpack_require__(112);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




//import { HttpClient } from '@angular/common/http';

/**
 * Generated class for the MymagazzinoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var RichiesteMaterialePage = (function () {
    function RichiesteMaterialePage(navCtrl, http, navParams, storage) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.http = http;
        this.navParams = navParams;
        this.storage = storage;
        this.richieste = [];
        //sessione: chi sei?  
        storage.get('email').then(function (val) {
            _this.user = val;
            console.log("email1: " + _this.user);
        });
        storage.get('password').then(function (val) {
            _this.pass = val;
        });
        this.ionViewWillEnter();
    }
    RichiesteMaterialePage.prototype.ionViewWillEnter = function () {
        var _this = this;
        var headers = new __WEBPACK_IMPORTED_MODULE_3__angular_http__["a" /* Headers */]();
        headers.append('Content-Type', 'application/x-www-form-urlencoded');
        var options = new __WEBPACK_IMPORTED_MODULE_3__angular_http__["d" /* RequestOptions */]({ headers: headers });
        // var squadra="squadra1"; 
        var email = this.user;
        var password = this.pass;
        var postParams = {
            email: email,
            password: password
        };
        this.http.post("http://niscmanager.altervista.org/get_richieste_inviate.php", JSON.stringify(postParams), options)
            .subscribe(function (data) {
            console.log("ciao " + data['_body']);
            _this.dati_server = JSON.parse(data['_body']);
            console.log("ciao dopo " + _this.dati_server);
            if (_this.dati_server != null) {
                _this.richieste = []; //aggiorna da zero la lista
                for (var i = 0; i < _this.dati_server.length; i++) {
                    _this.richieste.push(new Richiesta(_this.dati_server[i].id, _this.dati_server[i].stato, _this.dati_server[i].articolo, _this.dati_server[i].quantita_richiesta, _this.dati_server[i].quantita_approvata, _this.dati_server[i].nome_squadra));
                }
            }
        });
    };
    RichiesteMaterialePage.prototype.itemSelected = function (richiesta) {
        console.log("Selected Item", richiesta.stato);
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__dettaglirichiesta_dettaglirichiesta__["a" /* DettagliRichiestaPage */], richiesta.id);
    };
    RichiesteMaterialePage.prototype.initializeItems = function () {
        this.richieste = [];
        for (var i = 0; i < this.dati_server.length; i++) {
            this.richieste.push(this.dati_server[i]);
        }
    };
    RichiesteMaterialePage.prototype.getItems = function (ev) {
        // Reset items back to all of the items
        this.initializeItems();
        // set val to the value of the searchbar
        var val = ev.target.value;
        // if the value is an empty string don't filter the items
        if (val && val.trim() != '') {
            this.richieste = this.richieste.filter(function (richiesta) {
                return (richiesta.stato.toLowerCase().indexOf(val.toLowerCase()) > -1);
            });
        }
    };
    RichiesteMaterialePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-richiestemateriale',template:/*ion-inline-start:"C:\Users\Antonio\Documents\Progetti\NISC-Manager-Final-\src\pages\richiestemateriale\richiestemateriale.html"*/'<ion-header>\n    \n      <ion-navbar color="primary">\n        <ion-title>Richieste materiale</ion-title>\n      </ion-navbar>\n    \n    </ion-header>\n    \n    \n    <ion-content padding>\n    \n        <ion-searchbar (ionInput)="getItems($event)"></ion-searchbar>\n    \n        <ion-grid>\n          <ion-row>\n            \n            <ion-col col-4>ID richiesta</ion-col>\n            <ion-col col-5>Status</ion-col>\n            \n           \n          </ion-row>\n        </ion-grid>\n    \n        <ion-list>\n            <button ion-item *ngFor="let richiesta of richieste" (click)="itemSelected(richiesta)">\n              <ion-grid>\n                  <ion-row >\n                    \n                    <ion-col col-4>{{ richiesta.id }}</ion-col>\n                    <ion-col col-5>{{ richiesta.stato }}</ion-col>\n                    \n                  </ion-row>\n                </ion-grid>\n            </button>\n    \n          </ion-list>\n    \n    </ion-content>\n    '/*ion-inline-end:"C:\Users\Antonio\Documents\Progetti\NISC-Manager-Final-\src\pages\richiestemateriale\richiestemateriale.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_3__angular_http__["b" /* Http */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__ionic_storage__["b" /* Storage */]])
    ], RichiesteMaterialePage);
    return RichiesteMaterialePage;
}());

var Richiesta = (function () {
    function Richiesta(id, stato, articolo, quantita_richiesta, quantita_approvata, nome_squadra) {
        this.id = id;
        this.nome_squadra = nome_squadra;
        this.stato = stato;
        this.articolo = articolo;
        this.quantita_richiesta = quantita_richiesta;
        this.quantita_approvata = quantita_approvata;
    }
    return Richiesta;
}());
//# sourceMappingURL=richiestemateriale.js.map

/***/ }),

/***/ 126:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ModificaPasswordPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_storage__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__login_login__ = __webpack_require__(29);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var ModificaPasswordPage = (function () {
    function ModificaPasswordPage(navCtrl, http, alert, storage) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.http = http;
        this.alert = alert;
        this.storage = storage;
        //sessione: chi sei?  
        storage.get('email').then(function (val) {
            _this.email = val;
        });
        storage.get('password').then(function (val) {
            _this.password = val;
        });
    }
    ModificaPasswordPage.prototype.conferma_modifiche = function (pass, n_pass, c_pass) {
        var _this = this;
        var headers = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Headers */]();
        headers.append('Content-Type', 'application/x-www-form-urlencoded');
        var options = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["d" /* RequestOptions */]({ headers: headers });
        //per la sessione gli devo passare le variabili dell'account per postParams
        var email = this.email;
        var password = this.password;
        console.log(password);
        if (pass != password) {
            this.presentConfirm("Password non corretta");
            return;
        }
        if (n_pass != c_pass) {
            this.presentConfirm("Le password non corrispondono");
            return;
        }
        console.log(password, n_pass);
        var postParams = {
            email: email,
            password: password,
            n_pass: n_pass
        };
        //POST
        this.http.post("http://niscmanager.altervista.org/modifica_profilo.php", JSON.stringify(postParams), options)
            .subscribe(function (data) {
            console.log(data['_body']);
            _this.presentConfirm('Password Modificata');
            _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_4__login_login__["a" /* LoginPage */]);
        }, function (error) {
            _this.presentConfirm('Ops... Qualcosa è andato storto');
            console.log(error); // Error getting the data
        });
    };
    ModificaPasswordPage.prototype.presentConfirm = function (text) {
        var alert = this.alert.create({
            title: 'Modifica Password',
            message: text,
            buttons: [
                {
                    text: 'Ok',
                    role: 'cancel',
                    handler: function () {
                        console.log('Cancel clicked');
                    }
                },
            ]
        });
        alert.present();
    };
    ModificaPasswordPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-modifica-password',template:/*ion-inline-start:"C:\Users\Antonio\Documents\Progetti\NISC-Manager-Final-\src\pages\modifica-password\modifica-password.html"*/'<ion-header>\n    <ion-navbar color="primary">\n      <ion-title>Modifica Password</ion-title>\n      \n    </ion-navbar>\n  </ion-header>\n  \n  <ion-content padding >\n    <p>\n      <img src="assets/img/logo1.gif"/>\n    </p>\n  <p>\n  </p>\n  <ion-list>\n    <ion-item>\n      <ion-input type="password" placeholder="Password Attuale" style="font-size: 14px;font-weight: bold;" [(ngModel)]="pass"></ion-input>\n    </ion-item>\n    <ion-item>\n      <ion-input type="password" style="font-size: 14px;font-weight: bold;" placeholder="Nuova Password" [(ngModel)]="n_pass"></ion-input>\n    </ion-item>\n    <ion-item>\n      <ion-input type="password" style="font-size: 14px;font-weight: bold;" placeholder="Conferma Password" [(ngModel)]="c_pass"></ion-input>\n    </ion-item>\n  </ion-list>\n\n  <div padding align=\'center\'>\n    <button ion-button color="primary" round (click)=\'conferma_modifiche(pass, n_pass, c_pass)\'>Conferma</button>\n  </div>\n  </ion-content>\n\n'/*ion-inline-end:"C:\Users\Antonio\Documents\Progetti\NISC-Manager-Final-\src\pages\modifica-password\modifica-password.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_2__angular_http__["b" /* Http */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */], __WEBPACK_IMPORTED_MODULE_3__ionic_storage__["b" /* Storage */]])
    ], ModificaPasswordPage);
    return ModificaPasswordPage;
}());

//# sourceMappingURL=modifica-password.js.map

/***/ }),

/***/ 127:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomeMagPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__login_login__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__gestione_magazzini_mag_gestione_magazzini_mag__ = __webpack_require__(119);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__profilo_profilo__ = __webpack_require__(45);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__gestione_richieste_mag_gestione_richieste_mag__ = __webpack_require__(120);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var HomeMagPage = (function () {
    function HomeMagPage(navCtrl) {
        this.navCtrl = navCtrl;
    }
    HomeMagPage.prototype.logout = function () {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_2__login_login__["a" /* LoginPage */]);
    };
    HomeMagPage.prototype.viewMagazzini = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__gestione_magazzini_mag_gestione_magazzini_mag__["a" /* GestioneMagazziniMagPage */]);
    };
    HomeMagPage.prototype.goToProfilo = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__profilo_profilo__["a" /* ProfiloPage */]);
    };
    HomeMagPage.prototype.goToRichiesteArticoli = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_5__gestione_richieste_mag_gestione_richieste_mag__["a" /* GestioneRichiesteMagPage */]);
    };
    HomeMagPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-home-mag',template:/*ion-inline-start:"C:\Users\Antonio\Documents\Progetti\NISC-Manager-Final-\src\pages\home-mag\home-mag.html"*/'<ion-header>\n  <ion-navbar color="primary" >\n    <ion-title>Home</ion-title>\n    <ion-buttons end>\n      <button ion-button icon-only color="royal" (click)=\'logout()\'>\n        <ion-icon name="logout"><img src="assets/img/logout.png" class="dimensioni"> </ion-icon>\n      </button>\n    </ion-buttons>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding >\n    <p>\n        <img src="assets/img/logo1.gif"/>\n        </p>\n        <ion-grid>\n          <ion-row>\n            <ion-col>\n            <button class="home" (click)="goToProfilo()"><img src="assets/mag/Profilo.PNG"/>Profilo</button>\n           </ion-col>\n           <ion-col> \n           <button class="home" (click)="viewMagazzini()"><img src="assets/mag/Settings.PNG" />\n          Gestione Magazzini\n          </button>\n          </ion-col>\n          </ion-row>\n          </ion-grid>\n        <p align=\'center\'><button class="mag" (click)="goToRichiesteArticoli()"><img src="assets/mag/Articoli.PNG" />\n          Gestione Richieste articoli\n        </button></p>\n\n</ion-content>\n'/*ion-inline-end:"C:\Users\Antonio\Documents\Progetti\NISC-Manager-Final-\src\pages\home-mag\home-mag.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */]])
    ], HomeMagPage);
    return HomeMagPage;
}());

//# sourceMappingURL=home-mag.js.map

/***/ }),

/***/ 139:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 139;

/***/ }),

/***/ 181:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/about/about.module": [
		310,
		23
	],
	"../pages/dettagli-articoli-mag/dettagli-articoli-mag.module": [
		311,
		22
	],
	"../pages/dettagli-richiesta-mag/dettagli-richiesta-mag.module": [
		312,
		21
	],
	"../pages/dettagliarticoli/dettagliarticoli.module": [
		313,
		20
	],
	"../pages/dettaglirichiesta/dettaglirichiesta.module": [
		315,
		19
	],
	"../pages/elimina-articoli/elimina-articoli.module": [
		314,
		18
	],
	"../pages/elimina-magazzini-admin/elimina-magazzini-admin.module": [
		316,
		17
	],
	"../pages/gestione-articoli-admin/gestione-articoli-admin.module": [
		317,
		16
	],
	"../pages/gestione-articoli-mag/gestione-articoli-mag.module": [
		318,
		15
	],
	"../pages/gestione-magazzini-admin/gestione-magazzini-admin.module": [
		319,
		14
	],
	"../pages/gestione-magazzini-mag/gestione-magazzini-mag.module": [
		320,
		13
	],
	"../pages/gestione-registrazione/gestione-registrazione.module": [
		322,
		12
	],
	"../pages/gestione-richieste-mag/gestione-richieste-mag.module": [
		321,
		11
	],
	"../pages/gestione-utenti/gestione-utenti.module": [
		323,
		10
	],
	"../pages/home-amm/home-amm.module": [
		324,
		9
	],
	"../pages/home-mag/home-mag.module": [
		325,
		8
	],
	"../pages/inserisci-modifica-articolo/inserisci-modifica-articolo.module": [
		326,
		7
	],
	"../pages/inserisci-modifica-magazzino/inserisci-modifica-magazzino.module": [
		327,
		6
	],
	"../pages/modifica-password/modifica-password.module": [
		328,
		5
	],
	"../pages/modifica-profilo-admin/modifica-profilo-admin.module": [
		329,
		4
	],
	"../pages/mymagazzino/mymagazzino.module": [
		330,
		3
	],
	"../pages/profilo/profilo.module": [
		331,
		2
	],
	"../pages/richiestemateriale/richiestemateriale.module": [
		332,
		1
	],
	"../pages/sposta-articoli-mag/sposta-articoli-mag.module": [
		333,
		0
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids)
		return Promise.reject(new Error("Cannot find module '" + req + "'."));
	return __webpack_require__.e(ids[1]).then(function() {
		return __webpack_require__(ids[0]);
	});
};
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = 181;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 182:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RegistratiPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__login_login__ = __webpack_require__(29);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var RegistratiPage = (function () {
    function RegistratiPage(navCtrl, http, altr) {
        this.navCtrl = navCtrl;
        this.http = http;
        this.altr = altr;
    }
    RegistratiPage.prototype.postRequest = function (nome_s, email, pass, ruolo, conf_pass, compo) {
        var _this = this;
        var headers = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Headers */]();
        headers.append('Content-Type', 'application/x-www-form-urlencoded');
        var options = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["d" /* RequestOptions */]({ headers: headers });
        if (nome_s == null || email == null || pass == null || ruolo == null || conf_pass == null || compo == null) {
            this.presentConfirm("Inserisci tutti i campi");
            return;
        }
        var postParams = {
            nome_s: nome_s,
            email: email,
            pass: pass,
            ruolo: ruolo,
            compo: compo
        };
        if (pass != conf_pass) {
            this.presentConfirm("Le password non corrispondono");
            this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_3__login_login__["a" /* LoginPage */]);
            return;
        }
        this.http.post("http://niscmanager.altervista.org/put_richiedente.php", JSON.stringify(postParams), options)
            .subscribe(function (data) {
            _this.dati_server = data.json();
            if (_this.dati_server == 'Nome Squadra già presente') {
                _this.presentConfirm("Nome Squadra già presente");
                _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_3__login_login__["a" /* LoginPage */]);
            }
            if (_this.dati_server == 'ERROR: Could not able to execute') {
                _this.presentConfirm("Email già presente nel sistema o Nome Squadra già utilizzato");
                _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_3__login_login__["a" /* LoginPage */]);
            }
            if (_this.dati_server == 'Records inserted successfully.') {
                _this.presentConfirm("Richiesta Inoltrata, attendi l'approvazione dell'amministratore");
                _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_3__login_login__["a" /* LoginPage */]);
            }
        }, function (error) {
            console.log(error); // Error getting the data
        });
    };
    RegistratiPage.prototype.presentConfirm = function (text) {
        var alert = this.altr.create({
            title: 'Registrazione',
            message: text,
            buttons: [
                {
                    text: 'Ok',
                    role: 'cancel',
                    handler: function () {
                        console.log('Cancel clicked');
                    }
                },
            ]
        });
        alert.present();
    };
    RegistratiPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-registrati',template:/*ion-inline-start:"C:\Users\Antonio\Documents\Progetti\NISC-Manager-Final-\src\pages\registrati\registrati.html"*/'<ion-header>\n\n  <ion-navbar color="primary">\n\n    <ion-buttons start>\n\n    </ion-buttons>\n\n    <ion-title>\n\n      Registrati\n\n    </ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n<ion-content padding id="page2" style="background-color:#FFFFFF;">\n\n  <form id="registrati-form3">\n\n    <img src="assets/img/J6RhzI1UTRKQJdXpWUkV_logoneapolis.png" style="display:block;width:50%;height:50%;margin-left:auto;margin-right:auto;" />\n\n    <ion-list id="registrati-list1">\n\n      <ion-item id="registrati-input5">\n\n        <ion-input placeholder="Nome Squadra" type="text" [(ngModel)]="nome_s" [ngModelOptions]="{standalone: true}"></ion-input>\n\n      </ion-item>\n\n      <ion-item id="registrati-input5">\n\n        <ion-input placeholder="Componenti" type="number" [(ngModel)]="compo" [ngModelOptions]="{standalone: true}"></ion-input>\n\n      </ion-item>\n\n      <ion-item id="registrati-input7">\n\n        <ion-input placeholder="Email" type="text" [(ngModel)]="email" [ngModelOptions]="{standalone: true}"></ion-input>\n\n      </ion-item>\n\n      <ion-item id="registrati-input8">\n\n        <ion-input placeholder="Password" type="password" [(ngModel)]="pass" [ngModelOptions]="{standalone: true}"></ion-input>\n\n      </ion-item>\n\n      <ion-item id="Conferma password">\n\n        <ion-input placeholder="Conferma Password" type="password" [(ngModel)]="conf_pass" [ngModelOptions]="{standalone: true}"></ion-input>\n\n      </ion-item>\n\n    </ion-list>\n\n  </form>\n\n  <form id="registrati-form5">\n\n    <ion-item id="registrati-select1">\n\n      <ion-label>\n\n        Seleziona Ruolo\n\n      </ion-label>\n\n      <ion-select [(ngModel)]="ruolo" [ngModelOptions]="{standalone: true}">\n\n        <ion-option value="Richiedente">\n\n          Richiedente\n\n        </ion-option>\n\n        <ion-option value="Magazziniere">\n\n          Magazziniere\n\n        </ion-option>\n\n      </ion-select>\n\n    </ion-item>\n\n  </form>\n\n  <div padding>\n\n  <button id="registrati-button3" ion-button color="stable" block (click)="postRequest(nome_s,email, pass, ruolo,conf_pass,compo)">\n\n    Sign up\n\n  </button>\n\n</div>\n\n</ion-content>'/*ion-inline-end:"C:\Users\Antonio\Documents\Progetti\NISC-Manager-Final-\src\pages\registrati\registrati.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_2__angular_http__["b" /* Http */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */]])
    ], RegistratiPage);
    return RegistratiPage;
}());

//# sourceMappingURL=registrati.js.map

/***/ }),

/***/ 183:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RecuperaPasswordPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__login_login__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_email_composer__ = __webpack_require__(184);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var RecuperaPasswordPage = (function () {
    function RecuperaPasswordPage(navCtrl, http, altr, emailComposer) {
        this.navCtrl = navCtrl;
        this.http = http;
        this.altr = altr;
        this.emailComposer = emailComposer;
    }
    RecuperaPasswordPage.prototype.postRequest = function (email) {
        var _this = this;
        var headers = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Headers */]();
        headers.append('Content-Type', 'application/x-www-form-urlencoded');
        var options = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["d" /* RequestOptions */]({ headers: headers });
        var postParams = {
            email: email,
        };
        this.http.post("http://niscmanager.altervista.org/email_forward.php", JSON.stringify(postParams), options)
            .subscribe(function (data) {
            _this.dati_server = data.json();
            console.log(_this.dati_server);
            if (_this.dati_server != null) {
                if (_this.dati_server[0] == 'Email Inviata')
                    _this.presentConfirm("Ti è stata inviata una mail per il recupero password. \n" + "Controlla la casella di posta elettronica");
                else if (_this.dati_server[0] == 'Email non inviata')
                    _this.presentConfirm("Email non presente");
            }
            _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_3__login_login__["a" /* LoginPage */]);
        }, function (error) {
            console.log(error); // Error getting the data
        });
    };
    RecuperaPasswordPage.prototype.presentConfirm = function (text) {
        var alert = this.altr.create({
            title: 'Login failed',
            message: text,
            buttons: [
                {
                    text: 'Ok',
                    role: 'cancel',
                    handler: function () {
                        console.log('Cancel clicked');
                    }
                },
            ]
        });
        alert.present();
    };
    RecuperaPasswordPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-recupera-password',template:/*ion-inline-start:"C:\Users\Antonio\Documents\Progetti\NISC-Manager-Final-\src\pages\recupera-password\recupera-password.html"*/'<ion-header>\n\n  <ion-navbar color="primary">\n\n    <ion-title>\n\n      Recupera Password\n\n    </ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n<ion-content padding id="page4">\n\n  <img src="assets/img/J6RhzI1UTRKQJdXpWUkV_logoneapolis.png" style="display:block;width:100%;height:auto;margin-left:auto;margin-right:auto;" />\n\n  <form id="recuperaPassword-form9">\n\n    <ion-item id="recuperaPassword-input16">\n\n      <ion-label>\n\n        Email\n\n      </ion-label>\n\n      <ion-input type="text" placeholder="" [(ngModel)]="email" [ngModelOptions]="{standalone: true}"></ion-input>\n\n    </ion-item>\n\n  </form>\n\n  <div padding>\n\n  <button id="recuperaPassword-button10" ion-button color="positive" block (click)="postRequest(email)">\n\n    Conferma\n\n  </button>\n\n</div>\n\n</ion-content>'/*ion-inline-end:"C:\Users\Antonio\Documents\Progetti\NISC-Manager-Final-\src\pages\recupera-password\recupera-password.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_2__angular_http__["b" /* Http */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */], __WEBPACK_IMPORTED_MODULE_4__ionic_native_email_composer__["a" /* EmailComposer */]])
    ], RecuperaPasswordPage);
    return RecuperaPasswordPage;
}());

//# sourceMappingURL=recupera-password.js.map

/***/ }),

/***/ 186:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__login_login__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__about_about__ = __webpack_require__(108);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__mymagazzino_mymagazzino__ = __webpack_require__(124);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__richiestemateriale_richiestemateriale__ = __webpack_require__(125);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__profilo_profilo__ = __webpack_require__(45);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var HomePage = (function () {
    function HomePage(navCtrl) {
        this.navCtrl = navCtrl;
    }
    HomePage.prototype.logout = function () {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_2__login_login__["a" /* LoginPage */]);
    };
    HomePage.prototype.viewCatalogo = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__about_about__["a" /* AboutPage */]);
    };
    HomePage.prototype.viewMagazzino = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__mymagazzino_mymagazzino__["a" /* MymagazzinoPage */]);
    };
    HomePage.prototype.viewRichiesta = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_5__richiestemateriale_richiestemateriale__["a" /* RichiesteMaterialePage */]);
    };
    HomePage.prototype.viewProfilo = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_6__profilo_profilo__["a" /* ProfiloPage */]);
    };
    HomePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-home',template:/*ion-inline-start:"C:\Users\Antonio\Documents\Progetti\NISC-Manager-Final-\src\pages\home\home.html"*/'<ion-header>\n    <ion-navbar color="primary">\n  \n    <ion-title>Home</ion-title>\n    <ion-buttons end>\n      <button ion-button icon-only color="light" (click)=\'logout()\'>\n        <ion-icon name="logout"><img src="assets/img/logout.png" class="dimensioni"> </ion-icon>\n      </button>\n    </ion-buttons>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding >\n<p>\n<img src="assets/img/logo1.gif"/>\n</p>\n<ion-grid>\n  <ion-row>\n    <ion-col>\n    <button class="home" (click)="viewProfilo()"><img src="assets/rich/Profilo.png"/>Profilo</button>\n   </ion-col>\n   <ion-col> \n   <button class="home" (click)="viewCatalogo()"><img src="assets/rich/Catalogo_Articoli.png" />\n  Catalogo Articoli\n  </button>\n  </ion-col>\n  </ion-row>\n  <br/>\n  <ion-row>\n      <ion-col>\n      <button class="home" (click)="viewMagazzino()"><img src="assets/rich/mag.png" />\n      MyMagazzino\n      </button>\n     </ion-col>\n     <ion-col> \n    <button class="home" (click)="viewRichiesta()"> <img src="assets/rich/rich.png" />\n    Richieste\n    </button>\n    </ion-col>\n    </ion-row>\n</ion-grid>\n</ion-content>\n'/*ion-inline-end:"C:\Users\Antonio\Documents\Progetti\NISC-Manager-Final-\src\pages\home\home.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */]])
    ], HomePage);
    return HomePage;
}());

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 228:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(229);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(250);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 250:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_component__ = __webpack_require__(303);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_login_login__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_registrati_registrati__ = __webpack_require__(182);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_recupera_password_recupera_password__ = __webpack_require__(183);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__angular_common_http__ = __webpack_require__(304);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__angular_http__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_home_home__ = __webpack_require__(186);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_about_about__ = __webpack_require__(108);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_dettagliarticoli_dettagliarticoli__ = __webpack_require__(44);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__pages_mymagazzino_mymagazzino__ = __webpack_require__(124);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__pages_home_amm_home_amm__ = __webpack_require__(56);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__pages_gestione_registrazione_gestione_registrazione__ = __webpack_require__(121);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__pages_elimina_magazzini_admin_elimina_magazzini_admin__ = __webpack_require__(113);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__pages_gestione_articoli_admin_gestione_articoli_admin__ = __webpack_require__(114);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__pages_gestione_magazzini_admin_gestione_magazzini_admin__ = __webpack_require__(117);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__pages_inserisci_modifica_magazzino_inserisci_modifica_magazzino__ = __webpack_require__(118);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__pages_home_mag_home_mag__ = __webpack_require__(127);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__ionic_native_status_bar__ = __webpack_require__(226);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__ionic_native_email_composer__ = __webpack_require__(184);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__ionic_native_splash_screen__ = __webpack_require__(227);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__ionic_storage__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__pages_gestione_magazzini_mag_gestione_magazzini_mag__ = __webpack_require__(119);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__pages_richiestemateriale_richiestemateriale__ = __webpack_require__(125);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__pages_dettaglirichiesta_dettaglirichiesta__ = __webpack_require__(112);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27__pages_gestione_utenti_gestione_utenti__ = __webpack_require__(122);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_28__pages_modifica_profilo_admin_modifica_profilo_admin__ = __webpack_require__(123);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_29__pages_dettagli_articoli_mag_dettagli_articoli_mag__ = __webpack_require__(109);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_30__pages_elimina_articoli_elimina_articoli__ = __webpack_require__(111);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_31__pages_gestione_articoli_mag_gestione_articoli_mag__ = __webpack_require__(115);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_32__pages_inserisci_modifica_articolo_inserisci_modifica_articolo__ = __webpack_require__(55);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_33__pages_sposta_articoli_mag_sposta_articoli_mag__ = __webpack_require__(116);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_34__pages_profilo_profilo__ = __webpack_require__(45);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_35__pages_modifica_password_modifica_password__ = __webpack_require__(126);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_36__pages_dettagli_richiesta_mag_dettagli_richiesta_mag__ = __webpack_require__(110);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_37__pages_gestione_richieste_mag_gestione_richieste_mag__ = __webpack_require__(120);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






































var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_4__pages_login_login__["a" /* LoginPage */],
                __WEBPACK_IMPORTED_MODULE_5__pages_registrati_registrati__["a" /* RegistratiPage */],
                __WEBPACK_IMPORTED_MODULE_6__pages_recupera_password_recupera_password__["a" /* RecuperaPasswordPage */],
                __WEBPACK_IMPORTED_MODULE_9__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_10__pages_about_about__["a" /* AboutPage */],
                __WEBPACK_IMPORTED_MODULE_11__pages_dettagliarticoli_dettagliarticoli__["a" /* DettagliPage */],
                __WEBPACK_IMPORTED_MODULE_12__pages_mymagazzino_mymagazzino__["a" /* MymagazzinoPage */],
                __WEBPACK_IMPORTED_MODULE_13__pages_home_amm_home_amm__["a" /* HomeAmmPage */],
                __WEBPACK_IMPORTED_MODULE_14__pages_gestione_registrazione_gestione_registrazione__["a" /* GestioneRegistrazionePage */],
                __WEBPACK_IMPORTED_MODULE_15__pages_elimina_magazzini_admin_elimina_magazzini_admin__["a" /* EliminaMagazziniAdminPage */],
                __WEBPACK_IMPORTED_MODULE_16__pages_gestione_articoli_admin_gestione_articoli_admin__["a" /* GestioneArticoliAdminPage */],
                __WEBPACK_IMPORTED_MODULE_17__pages_gestione_magazzini_admin_gestione_magazzini_admin__["a" /* GestioneMagazziniAdminPage */],
                __WEBPACK_IMPORTED_MODULE_18__pages_inserisci_modifica_magazzino_inserisci_modifica_magazzino__["a" /* InserisciModificaMagazzinoPage */],
                __WEBPACK_IMPORTED_MODULE_24__pages_gestione_magazzini_mag_gestione_magazzini_mag__["a" /* GestioneMagazziniMagPage */],
                __WEBPACK_IMPORTED_MODULE_19__pages_home_mag_home_mag__["a" /* HomeMagPage */],
                __WEBPACK_IMPORTED_MODULE_25__pages_richiestemateriale_richiestemateriale__["a" /* RichiesteMaterialePage */],
                __WEBPACK_IMPORTED_MODULE_26__pages_dettaglirichiesta_dettaglirichiesta__["a" /* DettagliRichiestaPage */],
                __WEBPACK_IMPORTED_MODULE_27__pages_gestione_utenti_gestione_utenti__["a" /* GestioneUtentiPage */],
                __WEBPACK_IMPORTED_MODULE_28__pages_modifica_profilo_admin_modifica_profilo_admin__["a" /* ModificaProfiloAdminPage */],
                __WEBPACK_IMPORTED_MODULE_29__pages_dettagli_articoli_mag_dettagli_articoli_mag__["a" /* DettagliArticoliMagPage */],
                __WEBPACK_IMPORTED_MODULE_30__pages_elimina_articoli_elimina_articoli__["a" /* EliminaArticoliPage */],
                __WEBPACK_IMPORTED_MODULE_31__pages_gestione_articoli_mag_gestione_articoli_mag__["a" /* GestioneArticoliMagPage */],
                __WEBPACK_IMPORTED_MODULE_32__pages_inserisci_modifica_articolo_inserisci_modifica_articolo__["a" /* InserisciModificaArticoloPage */],
                __WEBPACK_IMPORTED_MODULE_33__pages_sposta_articoli_mag_sposta_articoli_mag__["a" /* SpostaArticoliMagPage */],
                __WEBPACK_IMPORTED_MODULE_34__pages_profilo_profilo__["a" /* ProfiloPage */],
                __WEBPACK_IMPORTED_MODULE_35__pages_modifica_password_modifica_password__["a" /* ModificaPasswordPage */],
                __WEBPACK_IMPORTED_MODULE_36__pages_dettagli_richiesta_mag_dettagli_richiesta_mag__["a" /* DettagliRichiestaMagPage */],
                __WEBPACK_IMPORTED_MODULE_37__pages_gestione_richieste_mag_gestione_richieste_mag__["a" /* GestioneRichiesteMagPage */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_7__angular_common_http__["a" /* HttpClientModule */],
                __WEBPACK_IMPORTED_MODULE_8__angular_http__["c" /* HttpModule */],
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["d" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */], {}, {
                    links: [
                        { loadChildren: '../pages/about/about.module#AboutPageModule', name: 'AboutPage', segment: 'about', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/dettagli-articoli-mag/dettagli-articoli-mag.module#DettagliArticoliMagPageModule', name: 'DettagliArticoliMagPage', segment: 'dettagli-articoli-mag', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/dettagli-richiesta-mag/dettagli-richiesta-mag.module#DettagliRichiestaMagPageModule', name: 'DettagliRichiestaMagPage', segment: 'dettagli-richiesta-mag', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/dettagliarticoli/dettagliarticoli.module#DettagliPageModule', name: 'DettagliPage', segment: 'dettagliarticoli', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/elimina-articoli/elimina-articoli.module#EliminaArticoliPageModule', name: 'EliminaArticoliPage', segment: 'elimina-articoli', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/dettaglirichiesta/dettaglirichiesta.module#DettagliRichiestaPageModule', name: 'DettagliRichiestaPage', segment: 'dettaglirichiesta', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/elimina-magazzini-admin/elimina-magazzini-admin.module#EliminaMagazziniAdminPageModule', name: 'EliminaMagazziniAdminPage', segment: 'elimina-magazzini-admin', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/gestione-articoli-admin/gestione-articoli-admin.module#GestioneArticoliAdminPageModule', name: 'GestioneArticoliAdminPage', segment: 'gestione-articoli-admin', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/gestione-articoli-mag/gestione-articoli-mag.module#GestioneArticoliMagPageModule', name: 'GestioneArticoliMagPage', segment: 'gestione-articoli-mag', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/gestione-magazzini-admin/gestione-magazzini-admin.module#GestioneMagazziniAdminPageModule', name: 'GestioneMagazziniAdminPage', segment: 'gestione-magazzini-admin', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/gestione-magazzini-mag/gestione-magazzini-mag.module#GestioneMagazziniMagPageModule', name: 'GestioneMagazziniMagPage', segment: 'gestione-magazzini-mag', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/gestione-richieste-mag/gestione-richieste-mag.module#GestioneRichiesteMagPageModule', name: 'GestioneRichiesteMagPage', segment: 'gestione-richieste-mag', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/gestione-registrazione/gestione-registrazione.module#GestioneRegistrazionePageModule', name: 'GestioneRegistrazionePage', segment: 'gestione-registrazione', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/gestione-utenti/gestione-utenti.module#GestioneUtentiPageModule', name: 'GestioneUtentiPage', segment: 'gestione-utenti', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/home-amm/home-amm.module#HomeAmmPageModule', name: 'HomeAmmPage', segment: 'home-amm', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/home-mag/home-mag.module#HomeMagPageModule', name: 'HomeMagPage', segment: 'home-mag', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/inserisci-modifica-articolo/inserisci-modifica-articolo.module#InserisciModificaArticoloPageModule', name: 'InserisciModificaArticoloPage', segment: 'inserisci-modifica-articolo', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/inserisci-modifica-magazzino/inserisci-modifica-magazzino.module#InserisciModificaMagazzinoPageModule', name: 'InserisciModificaMagazzinoPage', segment: 'inserisci-modifica-magazzino', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/modifica-password/modifica-password.module#ModificaPasswordPageModule', name: 'ModificaPasswordPage', segment: 'modifica-password', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/modifica-profilo-admin/modifica-profilo-admin.module#ModificaProfiloAdminPageModule', name: 'ModificaProfiloAdminPage', segment: 'modifica-profilo-admin', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/mymagazzino/mymagazzino.module#MymagazzinoPageModule', name: 'MymagazzinoPage', segment: 'mymagazzino', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/profilo/profilo.module#ProfiloUtentePageModule', name: 'ProfiloPage', segment: 'profilo', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/richiestemateriale/richiestemateriale.module#RichiesteMaterialePageModule', name: 'RichiesteMaterialePage', segment: 'richiestemateriale', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/sposta-articoli-mag/sposta-articoli-mag.module#SpostaArticoliMagPageModule', name: 'SpostaArticoliMagPage', segment: 'sposta-articoli-mag', priority: 'low', defaultHistory: [] }
                    ]
                }),
                __WEBPACK_IMPORTED_MODULE_23__ionic_storage__["a" /* IonicStorageModule */].forRoot()
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_4__pages_login_login__["a" /* LoginPage */],
                __WEBPACK_IMPORTED_MODULE_5__pages_registrati_registrati__["a" /* RegistratiPage */],
                __WEBPACK_IMPORTED_MODULE_6__pages_recupera_password_recupera_password__["a" /* RecuperaPasswordPage */],
                __WEBPACK_IMPORTED_MODULE_9__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_10__pages_about_about__["a" /* AboutPage */],
                __WEBPACK_IMPORTED_MODULE_11__pages_dettagliarticoli_dettagliarticoli__["a" /* DettagliPage */],
                __WEBPACK_IMPORTED_MODULE_12__pages_mymagazzino_mymagazzino__["a" /* MymagazzinoPage */],
                __WEBPACK_IMPORTED_MODULE_13__pages_home_amm_home_amm__["a" /* HomeAmmPage */],
                __WEBPACK_IMPORTED_MODULE_14__pages_gestione_registrazione_gestione_registrazione__["a" /* GestioneRegistrazionePage */],
                __WEBPACK_IMPORTED_MODULE_15__pages_elimina_magazzini_admin_elimina_magazzini_admin__["a" /* EliminaMagazziniAdminPage */],
                __WEBPACK_IMPORTED_MODULE_16__pages_gestione_articoli_admin_gestione_articoli_admin__["a" /* GestioneArticoliAdminPage */],
                __WEBPACK_IMPORTED_MODULE_17__pages_gestione_magazzini_admin_gestione_magazzini_admin__["a" /* GestioneMagazziniAdminPage */],
                __WEBPACK_IMPORTED_MODULE_18__pages_inserisci_modifica_magazzino_inserisci_modifica_magazzino__["a" /* InserisciModificaMagazzinoPage */],
                __WEBPACK_IMPORTED_MODULE_24__pages_gestione_magazzini_mag_gestione_magazzini_mag__["a" /* GestioneMagazziniMagPage */],
                __WEBPACK_IMPORTED_MODULE_19__pages_home_mag_home_mag__["a" /* HomeMagPage */],
                __WEBPACK_IMPORTED_MODULE_25__pages_richiestemateriale_richiestemateriale__["a" /* RichiesteMaterialePage */],
                __WEBPACK_IMPORTED_MODULE_26__pages_dettaglirichiesta_dettaglirichiesta__["a" /* DettagliRichiestaPage */],
                __WEBPACK_IMPORTED_MODULE_27__pages_gestione_utenti_gestione_utenti__["a" /* GestioneUtentiPage */],
                __WEBPACK_IMPORTED_MODULE_28__pages_modifica_profilo_admin_modifica_profilo_admin__["a" /* ModificaProfiloAdminPage */],
                __WEBPACK_IMPORTED_MODULE_29__pages_dettagli_articoli_mag_dettagli_articoli_mag__["a" /* DettagliArticoliMagPage */],
                __WEBPACK_IMPORTED_MODULE_30__pages_elimina_articoli_elimina_articoli__["a" /* EliminaArticoliPage */],
                __WEBPACK_IMPORTED_MODULE_31__pages_gestione_articoli_mag_gestione_articoli_mag__["a" /* GestioneArticoliMagPage */],
                __WEBPACK_IMPORTED_MODULE_32__pages_inserisci_modifica_articolo_inserisci_modifica_articolo__["a" /* InserisciModificaArticoloPage */],
                __WEBPACK_IMPORTED_MODULE_33__pages_sposta_articoli_mag_sposta_articoli_mag__["a" /* SpostaArticoliMagPage */],
                __WEBPACK_IMPORTED_MODULE_34__pages_profilo_profilo__["a" /* ProfiloPage */],
                __WEBPACK_IMPORTED_MODULE_35__pages_modifica_password_modifica_password__["a" /* ModificaPasswordPage */],
                __WEBPACK_IMPORTED_MODULE_36__pages_dettagli_richiesta_mag_dettagli_richiesta_mag__["a" /* DettagliRichiestaMagPage */],
                __WEBPACK_IMPORTED_MODULE_37__pages_gestione_richieste_mag_gestione_richieste_mag__["a" /* GestioneRichiesteMagPage */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_20__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_21__ionic_native_email_composer__["a" /* EmailComposer */],
                __WEBPACK_IMPORTED_MODULE_22__ionic_native_splash_screen__["a" /* SplashScreen */],
                { provide: __WEBPACK_IMPORTED_MODULE_0__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicErrorHandler */] }
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 29:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__registrati_registrati__ = __webpack_require__(182);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__recupera_password_recupera_password__ = __webpack_require__(183);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__home_home__ = __webpack_require__(186);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_http__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__home_amm_home_amm__ = __webpack_require__(56);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__home_mag_home_mag__ = __webpack_require__(127);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__ionic_storage__ = __webpack_require__(9);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};









var LoginPage = (function () {
    function LoginPage(navCtrl, http, altr, str) {
        this.navCtrl = navCtrl;
        this.http = http;
        this.altr = altr;
        this.str = str;
        this.utenti = [];
    }
    LoginPage.prototype.sign_up = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__registrati_registrati__["a" /* RegistratiPage */]);
    };
    LoginPage.prototype.recuperaPassword = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__recupera_password_recupera_password__["a" /* RecuperaPasswordPage */]);
    };
    LoginPage.prototype.enter = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__home_home__["a" /* HomePage */]);
    };
    LoginPage.prototype.postRequest = function (email, pass) {
        var _this = this;
        var headers = new __WEBPACK_IMPORTED_MODULE_5__angular_http__["a" /* Headers */]();
        headers.append('Content-Type', 'application/x-www-form-urlencoded');
        var options = new __WEBPACK_IMPORTED_MODULE_5__angular_http__["d" /* RequestOptions */]({ headers: headers });
        var postParams = {
            email: email,
            pass: pass
        };
        this.http.post("http://niscmanager.altervista.org/get_utenti.php", JSON.stringify(postParams), options)
            .subscribe(function (data) {
            _this.dati_server = data.json();
            console.log(_this.dati_server);
            if (_this.dati_server != null) {
                _this.utenti.push(new Utente(_this.dati_server[0].email, _this.dati_server[0].password, _this.dati_server[0].nome_squadra, _this.dati_server[0].componenti, _this.dati_server[0].stato, _this.dati_server[0].ruolo));
                if (_this.dati_server[0].ruolo == 'Amministratore') {
                    _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_6__home_amm_home_amm__["a" /* HomeAmmPage */]);
                    _this.setParams(_this.utenti[0]);
                }
                else if (_this.dati_server[0].stato == 'approvato') {
                    if (_this.dati_server[0].ruolo == 'Magazziniere') {
                        _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_7__home_mag_home_mag__["a" /* HomeMagPage */]);
                        _this.setParams(_this.utenti[0]);
                    }
                    if (_this.dati_server[0].ruolo == 'Richiedente') {
                        _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_4__home_home__["a" /* HomePage */]);
                        _this.setParams(_this.utenti[0]);
                    }
                }
                else
                    _this.presentConfirm('Richiesta in approvazione');
            }
            else
                _this.presentConfirm('Non sei registrato');
        }, function (error) {
            console.log(error); // Error getting the data
        });
    };
    LoginPage.prototype.setParams = function (utente) {
        this.str.set('email', utente.email);
        this.str.set('password', utente.password);
        this.str.set('nome_s', utente.nome_s);
        this.str.set('componenti', utente.componenti);
        this.str.set('stato', utente.stato);
        this.str.set('ruolo', utente.ruolo);
    };
    LoginPage.prototype.goToHomeAmm = function () {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_6__home_amm_home_amm__["a" /* HomeAmmPage */]);
    };
    LoginPage.prototype.goToHomeRic = function () {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_4__home_home__["a" /* HomePage */]);
    };
    LoginPage.prototype.goToHomeMag = function () {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_7__home_mag_home_mag__["a" /* HomeMagPage */]);
    };
    LoginPage.prototype.presentConfirm = function (text) {
        var alert = this.altr.create({
            title: 'Login failed',
            message: text,
            buttons: [
                {
                    text: 'Ok',
                    role: 'cancel',
                    handler: function () {
                        console.log('Cancel clicked');
                    }
                },
            ]
        });
        alert.present();
    };
    LoginPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-page',template:/*ion-inline-start:"C:\Users\Antonio\Documents\Progetti\NISC-Manager-Final-\src\pages\login\login.html"*/'<ion-header>\n\n  <ion-navbar color="primary">\n\n    <ion-title>\n\n      Login\n\n    </ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n<ion-content padding id="page1" class="no-scroll">\n\n  <img src="assets/img/J6RhzI1UTRKQJdXpWUkV_logoneapolis.png" style="display:block;width:100%;height:auto;margin-left:auto;margin-right:auto;" />\n\n  <form id="page-form2">\n\n    <ion-item id="page-input2">\n\n      <ion-label>\n\n        Email\n\n      </ion-label>\n\n      <ion-input type="text" placeholder="" [(ngModel)]="user_id" [ngModelOptions]="{standalone: true}"></ion-input>\n\n    </ion-item>\n\n    <ion-item id="page-input4">\n\n      <ion-label>\n\n        Password\n\n      </ion-label>\n\n      <ion-input type="password" placeholder="" [(ngModel)]="password" [ngModelOptions]="{standalone: true}"></ion-input>\n\n    </ion-item>\n\n   \n\n  </form>\n\n  <div padding>\n\n    <a (click)=\'recuperaPassword()\'>Password Dimentica?</a>\n\n  <button id="page-button1" ion-button color="positive" block (click)="postRequest(user_id,password)">\n\n    Login\n\n  </button>\n\n  <button id="page-button2" ion-button color="positive" block (click)=\'sign_up()\'>\n\n    Registarti\n\n  </button>\n\n</div>\n\n  <button ion-button color="positive" block (click)=\'goToHomeRic()\'>\n\n    Richiedente\n\n  </button>\n\n  <button ion-button color="positive" block (click)=\'goToHomeMag()\'>\n\n    Magazziniere\n\n  </button>\n\n  <button ion-button color="positive" block (click)=\'goToHomeAmm()\'>\n\n    Amministratore\n\n  </button>\n\n</ion-content>'/*ion-inline-end:"C:\Users\Antonio\Documents\Progetti\NISC-Manager-Final-\src\pages\login\login.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_5__angular_http__["b" /* Http */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */], __WEBPACK_IMPORTED_MODULE_8__ionic_storage__["b" /* Storage */]])
    ], LoginPage);
    return LoginPage;
}());

var Utente = (function () {
    function Utente(email, password, nome_s, compo, stato, ruolo) {
        this.email = email;
        this.password = password;
        this.nome_s = nome_s;
        this.componenti = compo;
        this.stato = stato;
        this.ruolo = ruolo;
    }
    return Utente;
}());
//# sourceMappingURL=login.js.map

/***/ }),

/***/ 303:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(226);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(227);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_login_login__ = __webpack_require__(29);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var MyApp = (function () {
    function MyApp(platform, statusBar, splashScreen) {
        this.rootPage = __WEBPACK_IMPORTED_MODULE_4__pages_login_login__["a" /* LoginPage */];
        platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            statusBar.styleDefault();
            splashScreen.hide();
        });
    }
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"C:\Users\Antonio\Documents\Progetti\NISC-Manager-Final-\src\app\app.html"*/'<ion-nav #mainContent [root]="rootPage"></ion-nav>'/*ion-inline-end:"C:\Users\Antonio\Documents\Progetti\NISC-Manager-Final-\src\app\app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 44:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DettagliPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the DettagliArticoloPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var DettagliPage = (function () {
    function DettagliPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        console.log(navParams.data.nome);
        this.id = navParams.data.id;
        this.nome = navParams.data.nome;
        this.quantita = navParams.data.quantita;
        this.descrizione = navParams.data.descrizione;
    }
    DettagliPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-dettagliarticoli',template:/*ion-inline-start:"C:\Users\Antonio\Documents\Progetti\NISC-Manager-Final-\src\pages\dettagliarticoli\dettagliarticoli.html"*/'<ion-header>\n\n  <ion-navbar color="primary">\n    <ion-title>Dettagli articolo</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n    <p align=\'center\'>\n        <img src="assets/img/logo1.gif"/>\n    </p>\n  <ion-grid>\n    <ion-row>\n      <ion-col col-4 class="logo">\n        <img src="assets/img/articolo.png"/>\n      </ion-col>\n      <ion-col> \n        <p><b>ID:</b> {{ id }}</p>\n        <h1>{{ nome }}</h1>\n      </ion-col>\n    </ion-row>\n    <ion-row>\n        <ion-col>\n          <b>Quantità:</b> {{ quantita }}\n        </ion-col>\n    </ion-row>\n    <ion-row>\n        <ion-col>\n            <b>Descrizione:</b><br>\n            {{ descrizione }}\n        </ion-col>\n    </ion-row>\n  </ion-grid>\n\n</ion-content>'/*ion-inline-end:"C:\Users\Antonio\Documents\Progetti\NISC-Manager-Final-\src\pages\dettagliarticoli\dettagliarticoli.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */]])
    ], DettagliPage);
    return DettagliPage;
}());

//# sourceMappingURL=dettagliarticoli.js.map

/***/ }),

/***/ 45:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProfiloPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_storage__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__modifica_password_modifica_password__ = __webpack_require__(126);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var ProfiloPage = (function () {
    function ProfiloPage(navCtrl, http, alert, storage) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.http = http;
        this.alert = alert;
        this.storage = storage;
        storage.get('email').then(function (val) {
            _this.email = val;
        });
        storage.get('password').then(function (val) {
            _this.password = val;
        });
        storage.get('nome_s').then(function (val) {
            _this.nome_s = val;
        });
        storage.get('componenti').then(function (val) {
            _this.componenti = val;
        });
        storage.get('stato').then(function (val) {
            _this.stato = val;
        });
        storage.get('ruolo').then(function (val) {
            _this.ruolo = val;
        });
    }
    ProfiloPage.prototype.goToModificaPassword = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__modifica_password_modifica_password__["a" /* ModificaPasswordPage */]);
    };
    ProfiloPage.prototype.presentConfirm = function (text) {
        var alert = this.alert.create({
            title: 'Login failed',
            message: text,
            buttons: [
                {
                    text: 'Ok',
                    role: 'cancel',
                    handler: function () {
                        console.log('Cancel clicked');
                    }
                },
            ]
        });
        alert.present();
    };
    ProfiloPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-profilo',template:/*ion-inline-start:"C:\Users\Antonio\Documents\Progetti\NISC-Manager-Final-\src\pages\profilo\profilo.html"*/'<ion-header>\n\n        <ion-navbar color="primary">\n\n          <ion-title>Modifica Password</ion-title>\n\n          \n\n        </ion-navbar>\n\n      </ion-header>\n\n      \n\n      <ion-content padding >\n\n        <p>\n\n          <img src="assets/img/logo1.gif"/>\n\n        </p>\n\n      <p>\n\n      </p>\n\n      <ion-list>\n\n        <ion-item>\n\n            <ion-icon name="ios-mail-outline" item-start></ion-icon>\n\n            <ion-label>Email</ion-label><ion-label class="dati"> {{email}} </ion-label>\n\n        </ion-item>\n\n        <ion-item>\n\n            <ion-icon name="ios-key-outline" item-start></ion-icon>\n\n            <ion-label>Password</ion-label><ion-label class="dati"> {{password}} </ion-label>\n\n        </ion-item>\n\n        <ion-item *ngIf="nome_s != \'admin\';">\n\n            <ion-icon name="ios-contacts-outline" item-start></ion-icon>\n\n            <ion-label>Nome Squadra</ion-label><ion-label class="dati"> {{nome_s}} </ion-label>\n\n        </ion-item>\n\n        <ion-item *ngIf="nome_s != \'admin\';">\n\n            <ion-icon name="logo-reddit" item-start></ion-icon>\n\n            <ion-label>Componenti</ion-label><ion-label class="dati"> {{componenti}} </ion-label>\n\n        </ion-item>\n\n        <ion-item *ngIf="nome_s != \'admin\';">\n\n            <ion-icon name="ios-star-outline" item-start></ion-icon>\n\n            <ion-label>Stato</ion-label><ion-label class="dati"> {{stato}} </ion-label>\n\n        </ion-item>\n\n        <ion-item>\n\n            <ion-icon name="ios-american-football-outline" item-start></ion-icon>\n\n            <ion-label>Ruolo</ion-label><ion-label class="dati"> {{ruolo}} </ion-label>\n\n        </ion-item>\n\n        \n\n      </ion-list>\n\n    \n\n      <p align=\'center\'>\n\n        <button ion-button color="primary" round (click)=\'goToModificaPassword()\'>Modifica Password</button>\n\n      </p>\n\n      </ion-content>\n\n    \n\n    '/*ion-inline-end:"C:\Users\Antonio\Documents\Progetti\NISC-Manager-Final-\src\pages\profilo\profilo.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_2__angular_http__["b" /* Http */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */], __WEBPACK_IMPORTED_MODULE_3__ionic_storage__["b" /* Storage */]])
    ], ProfiloPage);
    return ProfiloPage;
}());

//# sourceMappingURL=profilo.js.map

/***/ }),

/***/ 55:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return InserisciModificaArticoloPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_storage__ = __webpack_require__(9);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var InserisciModificaArticoloPage = (function () {
    function InserisciModificaArticoloPage(navCtrl, navParams, http, alertCtrl, storage) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.http = http;
        this.alertCtrl = alertCtrl;
        this.storage = storage;
        this.titolo_pagina = "";
        storage.get('email').then(function (val) {
            _this.user = val;
        });
        storage.get('password').then(function (val) {
            _this.pass = val;
        });
        this.articolo = new Articolo(null, null, null, null, null);
    }
    InserisciModificaArticoloPage.prototype.ionViewWillEnter = function () {
        var _this = this;
        var email = this.user;
        var password = this.pass;
        var headers = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Headers */]();
        headers.append('Content-Type', 'application/x-www-form-urlencoded');
        var options = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["d" /* RequestOptions */]({ headers: headers });
        if (this.navParams.data[0] == "inserisci") {
            this.magazzino = this.navParams.data[1];
            this.titolo_pagina = "Inserisci articolo";
            var postParams = {
                email: email,
                password: password
            };
            this.http.post("http://niscmanager.altervista.org/get_info_articoli.php", JSON.stringify(postParams), options)
                .subscribe(function (data) {
                _this.dati_server = JSON.parse(data['_body']);
                if (_this.dati_server != null) {
                    _this.next_id = _this.dati_server;
                    _this.next_id++;
                }
            });
        }
        else {
            this.titolo_pagina = "Modifica articolo";
            this.articolo = this.navParams.data;
            this.next_id = this.articolo.id;
            this.magazzino = this.articolo.nome_magazzino;
            console.log(this.articolo.nome);
        }
    };
    InserisciModificaArticoloPage.prototype.salva = function (nome, quantita, descrizione, magazzino) {
        var _this = this;
        var email = this.user;
        var password = this.pass;
        if (nome == "" || quantita == "" || descrizione == "" || magazzino == "") {
            console.log("vuoto");
            var alert_1 = this.alertCtrl.create({
                title: 'Compila tutti i campi',
                subTitle: '',
                buttons: ['OK']
            });
            alert_1.present();
        }
        else {
            var headers = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Headers */]();
            headers.append('Content-Type', 'application/x-www-form-urlencoded');
            var options = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["d" /* RequestOptions */]({ headers: headers });
            if (this.navParams.data[0] == "inserisci") {
                var postParams = {
                    email: email,
                    password: password,
                    nome: nome,
                    quantita: quantita,
                    descrizione: descrizione,
                    magazzino: magazzino
                };
                this.http.post("http://niscmanager.altervista.org/put_articolo.php", JSON.stringify(postParams), options)
                    .subscribe(function (data) {
                    console.log(data['_body']);
                    if (data['_body'] == "Operazione eseguita") {
                        var alert_2 = _this.alertCtrl.create({
                            title: 'Operazione completata',
                            subTitle: '',
                            buttons: [{
                                    text: 'Ok',
                                    handler: function () {
                                        var navTransition = alert_2.dismiss();
                                        navTransition.then(function () {
                                            _this.navCtrl.pop();
                                        });
                                        return false;
                                    }
                                }]
                        });
                        alert_2.present();
                    }
                    else {
                        var alert_3 = _this.alertCtrl.create({
                            title: data['_body'],
                            subTitle: '',
                            buttons: ['Chiudi']
                        });
                        alert_3.present();
                    }
                });
            }
            else {
                var id = this.articolo.id;
                var postParams = {
                    email: email,
                    password: password,
                    id: id,
                    nome: nome,
                    quantita: quantita,
                    descrizione: descrizione,
                    magazzino: magazzino
                };
                this.http.post("http://niscmanager.altervista.org/modifica_articolo.php", JSON.stringify(postParams), options)
                    .subscribe(function (data) {
                    console.log(data['_body']);
                    if (data['_body'] == "Operazione eseguita") {
                        var alert_4 = _this.alertCtrl.create({
                            title: 'Operazione completata',
                            subTitle: '',
                            buttons: [{
                                    text: 'Ok',
                                    handler: function () {
                                        var navTransition = alert_4.dismiss();
                                        navTransition.then(function () {
                                            _this.navCtrl.pop();
                                            _this.navCtrl.pop();
                                        });
                                        return false;
                                    }
                                }]
                        });
                        alert_4.present();
                    }
                    else {
                        var alert_5 = _this.alertCtrl.create({
                            title: data['_body'],
                            subTitle: '',
                            buttons: ['Chiudi']
                        });
                        alert_5.present();
                    }
                });
            }
        }
    };
    InserisciModificaArticoloPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-inserisci-modifica-articolo',template:/*ion-inline-start:"C:\Users\Antonio\Documents\Progetti\NISC-Manager-Final-\src\pages\inserisci-modifica-articolo\inserisci-modifica-articolo.html"*/'<ion-header>\n\n  <ion-navbar color="danger">\n    <ion-title>{{ titolo_pagina }}</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding style="background-color:rgb(205, 241, 245);">\n  <ion-grid>\n      <ion-row>\n          <ion-item>\n            <p>ID: {{next_id}}</p>\n          </ion-item>\n        </ion-row>\n    <ion-row>\n      <ion-item>\n        <ion-label stacked>Nome</ion-label>\n        <ion-input #nome type="text" value={{articolo.nome}}></ion-input>\n      </ion-item>\n    </ion-row>\n    <ion-row>\n      <ion-item>\n        <ion-label stacked>Quantità</ion-label>\n        <ion-input #quantita type="number" value={{articolo.quantita}}></ion-input>\n      </ion-item>\n    </ion-row>\n    <ion-row>\n      <ion-item>\n        <ion-label stacked>Descrizione</ion-label>\n        <ion-input #descrizione type="text" value={{articolo.descrizione}}></ion-input>\n      </ion-item>\n    </ion-row>\n    <ion-row>\n      <ion-item>\n          <p #mag>Magazzino: {{magazzino}}</p>\n      </ion-item>\n    </ion-row>\n  </ion-grid>\n</ion-content>\n<ion-footer>\n    <p align=\'center\'>\n        <button ion-button color="secondary" round (click)=\'salva(nome.value,quantita.value,descrizione.value,magazzino)\'>Salva</button>\n      </p>\n</ion-footer>'/*ion-inline-end:"C:\Users\Antonio\Documents\Progetti\NISC-Manager-Final-\src\pages\inserisci-modifica-articolo\inserisci-modifica-articolo.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__angular_http__["b" /* Http */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */], __WEBPACK_IMPORTED_MODULE_3__ionic_storage__["b" /* Storage */]])
    ], InserisciModificaArticoloPage);
    return InserisciModificaArticoloPage;
}());

var Articolo = (function () {
    function Articolo(id, nome, quantita, descrizione, nome_magazzino) {
        this.id = id;
        this.nome = nome;
        this.quantita = quantita;
        this.descrizione = descrizione;
        this.nome_magazzino = nome_magazzino;
    }
    return Articolo;
}());
//# sourceMappingURL=inserisci-modifica-articolo.js.map

/***/ }),

/***/ 56:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomeAmmPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__login_login__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__gestione_registrazione_gestione_registrazione__ = __webpack_require__(121);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__gestione_magazzini_admin_gestione_magazzini_admin__ = __webpack_require__(117);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__gestione_utenti_gestione_utenti__ = __webpack_require__(122);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__profilo_profilo__ = __webpack_require__(45);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var HomeAmmPage = (function () {
    function HomeAmmPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    HomeAmmPage.prototype.logout = function () {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_2__login_login__["a" /* LoginPage */]);
    };
    HomeAmmPage.prototype.viewMagazzini = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__gestione_magazzini_admin_gestione_magazzini_admin__["a" /* GestioneMagazziniAdminPage */]);
    };
    HomeAmmPage.prototype.goToGestioneRegistrazioni = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__gestione_registrazione_gestione_registrazione__["a" /* GestioneRegistrazionePage */]);
    };
    HomeAmmPage.prototype.goToGestioneUtenti = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_5__gestione_utenti_gestione_utenti__["a" /* GestioneUtentiPage */]);
    };
    HomeAmmPage.prototype.goToProfilo = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_6__profilo_profilo__["a" /* ProfiloPage */]);
    };
    HomeAmmPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-home-amm',template:/*ion-inline-start:"C:\Users\Antonio\Documents\Progetti\NISC-Manager-Final-\src\pages\home-amm\home-amm.html"*/'<ion-header>\n  <ion-navbar color="primary" >\n    <ion-title>Home</ion-title>\n    <ion-buttons end>\n      <button ion-button icon-only color="light" (click)=\'logout()\'>\n        <ion-icon name="logout"><img src="assets/img/logout.png" class="dimensioni"> </ion-icon>\n      </button>\n    </ion-buttons>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n<p>\n<img src="assets/img/logo1.gif"/>\n</p>\n\n<ion-grid>\n  <ion-row>\n    <ion-col>\n    <button class="home" (click)="goToProfilo()"><img src="assets/amm/Profilo.png"/>Profilo</button>\n   </ion-col>\n   <ion-col> \n   <button class="home" (click)="goToGestioneRegistrazioni()"><img src="assets/amm/Gestione_Reg.png" />\n  Gestione Registrazioni\n  </button>\n  </ion-col>\n  </ion-row>\n  <br/>\n  <ion-row>\n      <ion-col>\n      <button class="home"  (click)="goToGestioneUtenti()"><img src="assets/amm/Gestione_Utente.PNG" />\n      Gestione Utente\n      </button>\n     </ion-col>\n     <ion-col> \n    <button class="home" (click)="viewMagazzini()"> <img src="assets/amm/Gestione_Magazzini.PNG" />\n    Gestione Magazzini\n    </button>\n    </ion-col>\n    </ion-row>\n\n</ion-grid>\n\n</ion-content>\n'/*ion-inline-end:"C:\Users\Antonio\Documents\Progetti\NISC-Manager-Final-\src\pages\home-amm\home-amm.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */]])
    ], HomeAmmPage);
    return HomeAmmPage;
}());

var Utente = (function () {
    function Utente(email, password, nome_s, compo, stato, ruolo) {
        this.email = email;
        this.password = password;
        this.nome_s = nome_s;
        this.componenti = compo;
        this.stato = stato;
        this.ruolo = ruolo;
    }
    return Utente;
}());
//# sourceMappingURL=home-amm.js.map

/***/ })

},[228]);
//# sourceMappingURL=main.js.map