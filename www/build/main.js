webpackJsonp([11],{

/***/ 104:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AboutPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common_http__ = __webpack_require__(81);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__dettagliarticoli_dettagliarticoli__ = __webpack_require__(43);
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
    function AboutPage(navCtrl, http, navParams) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.http = http;
        this.navParams = navParams;
        this.articoli = [];
        http.get('http://niscmanager.altervista.org/get_articoli.php?magazzino=principale')
            .subscribe(function (data) {
            _this.dati_server = data;
            console.log(_this.dati_server);
            if (_this.dati_server != null) {
                for (var i = 0; i < _this.dati_server.length; i++) {
                    _this.articoli.push(new Articolo(_this.dati_server[i].id, _this.dati_server[i].nome, _this.dati_server[i].quantita, _this.dati_server[i].descrizione, "principale"));
                }
            }
        }, function (err) {
            console.log("Error occured");
        });
    }
    AboutPage.prototype.dettagli = function (articolo) {
        console.log("Selected Item", articolo.nome);
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__dettagliarticoli_dettagliarticoli__["a" /* DettagliPage */], articolo);
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
            selector: 'about',template:/*ion-inline-start:"C:\Users\Antonio\Documents\Progetti\NISC-Manager-Final-\src\pages\about\about.html"*/'<ion-header>\n\n  <ion-navbar color="danger">\n\n    <ion-title>Catalogo articoli</ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content style="background-color:rgb(205, 241, 245);">\n\n  <p>\n\n      \n\n      <ion-searchbar (ionInput)="getItems($event)"></ion-searchbar>\n\n          \n\n        \n\n  </p>\n\n  <p></p>\n\n  <div ng-controller="listController"> \n\n  <ion-list>\n\n\n\n   <ion-item *ngFor="let articolo of articoli">\n\n      <ion-thumbnail item-start>\n\n        <img src="assets/img/componente4.jpg">\n\n      </ion-thumbnail>\n\n      <h2>Nome: {{articolo.nome}}</h2>\n\n      <p>Disponibiltà: {{articolo.quantita}}</p>\n\n      <p><label>Richiesta:\n\n        <input type="number" name="articoli_richiesti" min="0" max="20" step="1">\n\n      </label></p>\n\n     \n\n      <button ion-button outline item-end (click)=\'dettagli(articolo)\'>Dettagli</button>\n\n    </ion-item>\n\n    \n\n\n\n  </ion-list>\n\n</div>\n\n\n\n  <p align=\'center\'>\n\n    \n\n    <button ion-button color="secondary" round (click)=\'invia_richiesta()\'>Invia Richiesta</button>\n\n    <button ion-button color="danger" round (click)=\'reset()\'>Reset</button>\n\n  </p>\n\n</ion-content>'/*ion-inline-end:"C:\Users\Antonio\Documents\Progetti\NISC-Manager-Final-\src\pages\about\about.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_2__angular_common_http__["a" /* HttpClient */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */]])
    ], AboutPage);
    return AboutPage;
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
//# sourceMappingURL=about.js.map

/***/ }),

/***/ 105:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EliminaMagazziniAdminPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__(27);
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
    function EliminaMagazziniAdminPage(navCtrl, navParams, http, alertCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.http = http;
        this.alertCtrl = alertCtrl;
        this.magazzini = [];
        this.magazzini = navParams.data;
        this.dati_server = navParams.data;
    }
    //bisogna selezionare quelli da eliminare
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
                        var headers = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Headers */]();
                        headers.append('Content-Type', 'application/x-www-form-urlencoded');
                        var options = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["d" /* RequestOptions */]({ headers: headers });
                        var postParams = {
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
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__angular_http__["b" /* Http */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */]])
    ], EliminaMagazziniAdminPage);
    return EliminaMagazziniAdminPage;
}());

//# sourceMappingURL=elimina-magazzini-admin.js.map

/***/ }),

/***/ 106:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GestioneArticoliAdminPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__dettagliarticoli_dettagliarticoli__ = __webpack_require__(43);
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
 * Generated class for the GestioneArticoliAdminPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var GestioneArticoliAdminPage = (function () {
    function GestioneArticoliAdminPage(navCtrl, http, navParams) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.http = http;
        this.navParams = navParams;
        this.articoli = [];
        this.totale_articoli = 0;
        var nome_mag = navParams.data.nome;
        this.titolo = nome_mag;
        var headers = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Headers */]();
        headers.append('Content-Type', 'application/x-www-form-urlencoded');
        var options = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["d" /* RequestOptions */]({ headers: headers });
        var postParams = {
            nome_mag: nome_mag
        };
        this.http.post("http://niscmanager.altervista.org/get_articoli_post.php", JSON.stringify(postParams), options)
            .subscribe(function (data) {
            _this.dati_server = JSON.parse(data['_body']);
            console.log(_this.dati_server);
            if (_this.dati_server != null) {
                for (var i = 0; i < _this.dati_server.length; i++) {
                    _this.totale_articoli += parseInt(_this.dati_server[i].quantita);
                    _this.articoli.push(new Articolo(_this.dati_server[i].id, _this.dati_server[i].nome, _this.dati_server[i].quantita, _this.dati_server[i].descrizione, "principale"));
                }
            }
        });
    }
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
            selector: 'page-gestione-articoli-admin',template:/*ion-inline-start:"C:\Users\Antonio\Documents\Progetti\NISC-Manager-Final-\src\pages\gestione-articoli-admin\gestione-articoli-admin.html"*/'<ion-header>\n  <ion-navbar color="danger">\n    <ion-title>{{ titolo }}</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content style="background-color:rgb(205, 241, 245);">\n  <p>\n      <ion-searchbar (ionInput)="getItems($event)"></ion-searchbar>     \n  </p>\n  <p></p>\n  <div ng-controller="listController"> \n  <ion-list>\n\n   <ion-item *ngFor="let articolo of articoli">\n      <ion-thumbnail item-start>\n        <img src="assets/img/componente4.jpg">\n      </ion-thumbnail>\n      <h2>Nome: {{articolo.nome}}</h2>\n      <p>Disponibiltà: {{articolo.quantita}}</p>\n     \n      <button ion-button outline item-end (click)=\'dettagli(articolo)\'>Dettagli</button>\n    </ion-item>\n    \n\n  </ion-list>\n</div>\n<h2 align=\'center\'>Totale: {{totale_articoli}} </h2>\n</ion-content>'/*ion-inline-end:"C:\Users\Antonio\Documents\Progetti\NISC-Manager-Final-\src\pages\gestione-articoli-admin\gestione-articoli-admin.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_2__angular_http__["b" /* Http */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */]])
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
var Magazzino = (function () {
    function Magazzino(nome, descrizione) {
        this.nome = nome;
        this.descrizione = descrizione;
    }
    return Magazzino;
}());
//# sourceMappingURL=gestione-articoli-admin.js.map

/***/ }),

/***/ 107:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GestioneMagazziniAdminPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__inserisci_modifica_magazzino_inserisci_modifica_magazzino__ = __webpack_require__(108);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__gestione_articoli_admin_gestione_articoli_admin__ = __webpack_require__(106);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__elimina_magazzini_admin_elimina_magazzini_admin__ = __webpack_require__(105);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_storage__ = __webpack_require__(167);
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
        storage.set('email', 'pippopluto92@gmail.com');
        storage.set('password', 'pippopluto');
        storage.get('email').then(function (val) {
            _this.email = val;
        });
        storage.get('password').then(function (val) {
            _this.password = val;
        });
    }
    GestioneMagazziniAdminPage.prototype.ionViewWillEnter = function () {
        var _this = this;
        var user = this.email;
        var pass = this.password;
        this.magazzini = [];
        var headers = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Headers */]();
        headers.append('Content-Type', 'application/x-www-form-urlencoded');
        var options = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["d" /* RequestOptions */]({ headers: headers });
        var postParams = {
            user: user,
            pass: pass
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
            selector: 'page-gestione-magazzini-admin',template:/*ion-inline-start:"C:\Users\Antonio\Documents\Progetti\NISC-Manager-Final-\src\pages\gestione-magazzini-admin\gestione-magazzini-admin.html"*/'<ion-header>\n  <ion-navbar color="danger">\n    <ion-title>Gestione magazzini</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content style="background-color:rgb(205, 241, 245);">\n  <p>\n      \n      <ion-searchbar (ionInput)="getItems($event)"></ion-searchbar>\n        \n  </p>\n  <p></p>\n  <div ng-controller="listController"> \n  <ion-list>\n\n   <ion-item *ngFor="let magazzino of magazzini">\n      <h2 (click)=\'mostra_articoli(magazzino)\'>{{magazzino.nome}}</h2>\n      <p>{{magazzino.descrizione}}</p>\n           \n      <button ion-button outline item-end (click)=\'modifica(magazzino)\'>Modifica</button>\n    </ion-item>\n  </ion-list>\n</div>\n\n  <p align=\'center\'>\n    \n    <button ion-button color="secondary" round (click)=\'inserisci()\'>Inserisci</button>\n    <button ion-button color="danger" round (click)=\'elimina()\'>Elimina</button>\n  </p>\n</ion-content>'/*ion-inline-end:"C:\Users\Antonio\Documents\Progetti\NISC-Manager-Final-\src\pages\gestione-magazzini-admin\gestione-magazzini-admin.html"*/,
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

/***/ 108:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return InserisciModificaMagazzinoPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__(27);
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
    function InserisciModificaMagazzinoPage(navCtrl, navParams, http, alertCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.http = http;
        this.alertCtrl = alertCtrl;
        this.titolo_pagina = "";
        console.log(navParams.data);
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
        var headers = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Headers */]();
        headers.append('Content-Type', 'application/x-www-form-urlencoded');
        var options = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["d" /* RequestOptions */]({ headers: headers });
        if (this.navParams.data == "inserisci") {
            var postParams = {
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
            selector: 'page-inserisci-modifica-magazzino',template:/*ion-inline-start:"C:\Users\Antonio\Documents\Progetti\NISC-Manager-Final-\src\pages\inserisci-modifica-magazzino\inserisci-modifica-magazzino.html"*/'<ion-header>\n\n  <ion-navbar color="danger">\n    <ion-title>{{ titolo_pagina }}</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding style="background-color:rgb(205, 241, 245);">\n  <ion-grid>\n    <ion-row>\n      <ion-item>\n        <ion-label stacked>Nome magazzino (nome squadra)</ion-label>\n        <ion-input #nome type="text" value={{magazzino.nome}}></ion-input>\n      </ion-item>\n    </ion-row>\n    <ion-row>\n      <ion-item>\n        <ion-label stacked>Descrizione</ion-label>\n        <ion-input #descrizione type="text" value={{magazzino.descrizione}}></ion-input>\n      </ion-item>\n    </ion-row>\n    \n  </ion-grid>\n\n  <p align=\'center\'>\n    <button ion-button color="secondary" round (click)=\'salva(nome.value,descrizione.value)\'>Salva</button>\n  </p>\n\n</ion-content>'/*ion-inline-end:"C:\Users\Antonio\Documents\Progetti\NISC-Manager-Final-\src\pages\inserisci-modifica-magazzino\inserisci-modifica-magazzino.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__angular_http__["b" /* Http */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */]])
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

/***/ 109:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GestioneMagazziniMagPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(8);
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
 * Generated class for the GestioneMagazziniMagPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var GestioneMagazziniMagPage = (function () {
    function GestioneMagazziniMagPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    GestioneMagazziniMagPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad GestioneMagazziniMagPage');
    };
    GestioneMagazziniMagPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-gestione-magazzini-mag',template:/*ion-inline-start:"C:\Users\Antonio\Documents\Progetti\NISC-Manager-Final-\src\pages\gestione-magazzini-mag\gestione-magazzini-mag.html"*/'<!--\n  Generated template for the GestioneMagazziniMagPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>gestione-magazzini-mag</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n\n</ion-content>\n'/*ion-inline-end:"C:\Users\Antonio\Documents\Progetti\NISC-Manager-Final-\src\pages\gestione-magazzini-mag\gestione-magazzini-mag.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */]])
    ], GestioneMagazziniMagPage);
    return GestioneMagazziniMagPage;
}());

//# sourceMappingURL=gestione-magazzini-mag.js.map

/***/ }),

/***/ 110:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomeAmmPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__login_login__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__gestione_magazzini_admin_gestione_magazzini_admin__ = __webpack_require__(107);
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
 * Generated class for the HomeAmmPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var HomeAmmPage = (function () {
    function HomeAmmPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    HomeAmmPage.prototype.logout = function () {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_2__login_login__["a" /* LoginPage */]);
    };
    HomeAmmPage.prototype.viewMagazzini = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__gestione_magazzini_admin_gestione_magazzini_admin__["a" /* GestioneMagazziniAdminPage */]);
    };
    HomeAmmPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-home-amm',template:/*ion-inline-start:"C:\Users\Antonio\Documents\Progetti\NISC-Manager-Final-\src\pages\home-amm\home-amm.html"*/'<ion-header color="royal">\n  <ion-navbar color="royal" >\n    <ion-title>Home Richiedente</ion-title>\n    <ion-buttons end>\n      <button ion-button icon-only color="royal" (click)=\'logout()\'>\n        <ion-icon name="logout"><img src="assets/img/logout.png" class="dimensioni"> </ion-icon>\n      </button>\n    </ion-buttons>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding >\n<p>\n<img src="assets/img/logo1.gif"/>\n</p>\n\n<ion-grid>\n  <ion-row>\n    <ion-col>\n    <img src="assets/amm/Profilo.PNG"/>\n   </ion-col>\n   <ion-col> \n   <img src="assets/amm/Gestione_Reg.PNG" (click)="goToGestioneRegistrazioni()"/>\n  </ion-col>\n  </ion-row>\n  <br/>\n  <ion-row>\n      <ion-col>\n      <img src="assets/amm/Gestione_Utente.PNG"/>\n     </ion-col>\n     <ion-col> \n     <img src="assets/amm/Gestione_Magazzini.PNG" (click)="viewMagazzini()"/>\n    </ion-col>\n    </ion-row>\n\n</ion-grid>\n\n</ion-content>\n'/*ion-inline-end:"C:\Users\Antonio\Documents\Progetti\NISC-Manager-Final-\src\pages\home-amm\home-amm.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */]])
    ], HomeAmmPage);
    return HomeAmmPage;
}());

//# sourceMappingURL=home-amm.js.map

/***/ }),

/***/ 111:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MymagazzinoPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common_http__ = __webpack_require__(81);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__dettagliarticoli_dettagliarticoli__ = __webpack_require__(43);
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
var MymagazzinoPage = (function () {
    function MymagazzinoPage(navCtrl, http, navParams) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.http = http;
        this.navParams = navParams;
        this.articoli = [];
        http.get('http://niscmanager.altervista.org/get_articoli.php?magazzino=the%20best')
            .subscribe(function (data) {
            _this.dati_server = data;
            console.log(_this.dati_server);
            if (_this.dati_server != null) {
                for (var i = 0; i < _this.dati_server.length; i++) {
                    _this.articoli.push(new Articolo(_this.dati_server[i].id, _this.dati_server[i].nome, _this.dati_server[i].quantita, _this.dati_server[i].descrizione, "principale"));
                }
            }
        }, function (err) {
            console.log("Error occured");
        });
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
    MymagazzinoPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-mymagazzino',template:/*ion-inline-start:"C:\Users\Antonio\Documents\Progetti\NISC-Manager-Final-\src\pages\mymagazzino\mymagazzino.html"*/'<!--\n\n  Generated template for the MymagazzinoPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n\n\n  <ion-navbar>\n\n    <ion-title>mymagazzino</ion-title>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content padding>\n\n\n\n    <ion-searchbar (ionInput)="getItems($event)"></ion-searchbar>\n\n\n\n    <ion-grid>\n\n      <ion-row>\n\n        <ion-col col-3></ion-col>\n\n        <ion-col col-1>ID</ion-col>\n\n        <ion-col col-6>Nome</ion-col>\n\n        <ion-col col-2>Quantità</ion-col>\n\n      </ion-row>\n\n    </ion-grid>\n\n\n\n    <ion-list>\n\n        <button ion-item *ngFor="let articolo of articoli" (click)="itemSelected(articolo)">\n\n          <ion-grid>\n\n              <ion-row>\n\n                <ion-col col-3><img src="http://www.ivanrizzo.altervista.org/img/portfolio/item2.png"></ion-col>\n\n                <ion-col col-1>{{ articolo.id }}</ion-col>\n\n                <ion-col col-6>{{ articolo.nome }}</ion-col>\n\n                <ion-col col-2>{{ articolo.quantita }}</ion-col>\n\n              </ion-row>\n\n            </ion-grid>\n\n        </button>\n\n\n\n      </ion-list>\n\n\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\Antonio\Documents\Progetti\NISC-Manager-Final-\src\pages\mymagazzino\mymagazzino.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_2__angular_common_http__["a" /* HttpClient */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */]])
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

/***/ 112:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomeMagPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__login_login__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__gestione_magazzini_mag_gestione_magazzini_mag__ = __webpack_require__(109);
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
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__login_login__["a" /* LoginPage */]);
    };
    HomeMagPage.prototype.viewMagazzini = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__gestione_magazzini_mag_gestione_magazzini_mag__["a" /* GestioneMagazziniMagPage */]);
    };
    HomeMagPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-home-mag',template:/*ion-inline-start:"C:\Users\Antonio\Documents\Progetti\NISC-Manager-Final-\src\pages\home-mag\home-mag.html"*/'<ion-header color="royal">\n  <ion-navbar color="royal" >\n    <ion-title>Home Magazziniere</ion-title>\n    <ion-buttons end>\n      <button ion-button icon-only color="royal" (click)=\'logout()\'>\n        <ion-icon name="logout"><img src="assets/img/logout.png" class="dimensioni"> </ion-icon>\n      </button>\n    </ion-buttons>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding >\n<p>\n<img src="assets/img/logo1.gif"/>\n\n</p>\n<p>\n\n</p>\n\n<ion-content class="card-background-page">\n<p>\n\n  <ion-card (click)=\'viewMagazzini()\'>\n    <img src="assets/img/magazzino.jpg"/>\n    <div class="card-title">Gestione magazzini</div>\n    <div class="card-subtitle"></div>\n  </ion-card>\n\n  <ion-card>\n    <img src="assets/img/richieste.jpg"/>\n    <div class="card-title">Gestione richieste artioli</div>\n    <div class="card-subtitle"></div>\n  </ion-card>\n\n  <ion-card>\n    <img src="assets/img/squadra.jpg"/>\n    <div class="card-title">Profilo</div>\n    <div class="card-subtitle"></div>\n  </ion-card>\n</p>\n\n</ion-content>\n</ion-content>\n'/*ion-inline-end:"C:\Users\Antonio\Documents\Progetti\NISC-Manager-Final-\src\pages\home-mag\home-mag.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */]])
    ], HomeMagPage);
    return HomeMagPage;
}());

//# sourceMappingURL=home-mag.js.map

/***/ }),

/***/ 124:
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
webpackEmptyAsyncContext.id = 124;

/***/ }),

/***/ 166:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/about/about.module": [
		296,
		26
	],
	"../pages/dettagliarticoli/dettagliarticoli.module": [
		297,
		25
	],
	"../pages/dettaglirichiesta/dettaglirichiesta.module": [
		307,
		1
	],
	"../pages/elimina-magazzini-admin/elimina-magazzini-admin.module": [
		298,
		10
	],
	"../pages/gestione-articoli-admin/gestione-articoli-admin.module": [
		299,
		9
	],
	"../pages/gestione-magazzini-admin/gestione-magazzini-admin.module": [
		300,
		8
	],
	"../pages/gestione-magazzini-mag/gestione-magazzini-mag.module": [
		301,
		7
	],
	"../pages/gestione-registrazione/gestione-registrazione.module": [
		302,
		6
	],
	"../pages/home-amm/home-amm.module": [
		303,
		5
	],
	"../pages/home-mag/home-mag.module": [
		304,
		4
	],
	"../pages/inserisci-modifica-magazzino/inserisci-modifica-magazzino.module": [
		305,
		3
	],
	"../pages/mymagazzino/mymagazzino.module": [
		306,
		2
	],
	"../pages/richiestemateriale/richiestemateriale.module": [
		309,
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
webpackAsyncContext.id = 166;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 168:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RegistratiPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__login_login__ = __webpack_require__(33);
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
    RegistratiPage.prototype.postRequest = function (nome_s, email, pass) {
        var _this = this;
        var headers = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Headers */]();
        headers.append('Content-Type', 'application/x-www-form-urlencoded');
        var options = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["d" /* RequestOptions */]({ headers: headers });
        var postParams = {
            nome_s: nome_s,
            email: email,
            pass: pass
        };
        this.http.post("http://niscmanager.altervista.org/put_richiedente.php", JSON.stringify(postParams), options)
            .subscribe(function (data) {
            console.log(data['_body']);
            _this.presentConfirm('Richiesta Inoltrata');
            _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_3__login_login__["a" /* LoginPage */]);
        }, function (error) {
            console.log(error); // Error getting the data
        });
    };
    RegistratiPage.prototype.presentConfirm = function (text) {
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
    RegistratiPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-registrati',template:/*ion-inline-start:"C:\Users\Antonio\Documents\Progetti\NISC-Manager-Final-\src\pages\registrati\registrati.html"*/'<ion-header>\n\n  <ion-navbar>\n\n    <ion-buttons start>\n\n    </ion-buttons>\n\n    <ion-title>\n\n      Registrati\n\n    </ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n<ion-content padding id="page2" style="background-color:#FFFFFF;">\n\n  <form id="registrati-form3">\n\n    <img src="assets/img/J6RhzI1UTRKQJdXpWUkV_logoneapolis.png" style="display:block;width:50%;height:50%;margin-left:auto;margin-right:auto;" />\n\n    <ion-list id="registrati-list1">\n\n      <ion-item id="registrati-input5">\n\n        <ion-label>\n\n          Nome Squadra\n\n        </ion-label>\n\n        <ion-input placeholder="Text Input" type="text" [(ngModel)]="nome_s" [ngModelOptions]="{standalone: true}"></ion-input>\n\n      </ion-item>\n\n      <ion-item id="registrati-input6">\n\n        <ion-label>\n\n          Nome del richiedente\n\n        </ion-label>\n\n        <ion-input placeholder="Text Input" type="text" [(ngModel)]="nome_r" [ngModelOptions]="{standalone: true}"></ion-input>\n\n      </ion-item>\n\n      <ion-item id="registrati-input7">\n\n        <ion-label>\n\n          Email\n\n        </ion-label>\n\n        <ion-input placeholder="Text Input" type="text" [(ngModel)]="email" [ngModelOptions]="{standalone: true}"></ion-input>\n\n      </ion-item>\n\n      <ion-item id="registrati-input8">\n\n        <ion-label>\n\n          Password\n\n        </ion-label>\n\n        <ion-input placeholder="Text Input" type="password" [(ngModel)]="pass" [ngModelOptions]="{standalone: true}"></ion-input>\n\n      </ion-item>\n\n      <ion-item id="registrati-input9">\n\n        <ion-label>\n\n          Conferma Password\n\n        </ion-label>\n\n        <ion-input placeholder="Text Input" type="password" [(ngModel)]="conf_pass" [ngModelOptions]="{standalone: true}"></ion-input>\n\n      </ion-item>\n\n    </ion-list>\n\n  </form>\n\n  <form id="registrati-form5">\n\n    <ion-item id="registrati-select1">\n\n      <ion-label>\n\n        Seleziona Ruolo\n\n      </ion-label>\n\n      <ion-select [(ngModel)]="selectedValue" [ngModelOptions]="{standalone: true}">\n\n        <ion-option>\n\n          Richiedente\n\n        </ion-option>\n\n        <ion-option>\n\n          Magazziniere\n\n        </ion-option>\n\n      </ion-select>\n\n    </ion-item>\n\n  </form>\n\n  <button id="registrati-button3" ion-button color="stable" block (click)="postRequest(nome_s,email, pass)">\n\n    Sign up\n\n  </button>\n\n</ion-content>'/*ion-inline-end:"C:\Users\Antonio\Documents\Progetti\NISC-Manager-Final-\src\pages\registrati\registrati.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_2__angular_http__["b" /* Http */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */]])
    ], RegistratiPage);
    return RegistratiPage;
}());

//# sourceMappingURL=registrati.js.map

/***/ }),

/***/ 169:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RecuperaPasswordPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(8);
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
    function RecuperaPasswordPage(navCtrl) {
        this.navCtrl = navCtrl;
    }
    RecuperaPasswordPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-recupera-password',template:/*ion-inline-start:"C:\Users\Antonio\Documents\Progetti\NISC-Manager-Final-\src\pages\recupera-password\recupera-password.html"*/'<ion-header>\n\n  <ion-navbar>\n\n    <ion-title>\n\n      Recupera Password\n\n    </ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n<ion-content padding id="page4">\n\n  <img src="assets/img/J6RhzI1UTRKQJdXpWUkV_logoneapolis.png" style="display:block;width:100%;height:auto;margin-left:auto;margin-right:auto;" />\n\n  <form id="recuperaPassword-form9">\n\n    <ion-item id="recuperaPassword-input16">\n\n      <ion-label>\n\n        Email\n\n      </ion-label>\n\n      <ion-input type="text" placeholder=""></ion-input>\n\n    </ion-item>\n\n  </form>\n\n  <button id="recuperaPassword-button10" ion-button color="positive" block>\n\n    Conferma\n\n  </button>\n\n  <button id="recuperaPassword-button11" ion-button color="positive" block>\n\n    Annulla\n\n  </button>\n\n</ion-content>'/*ion-inline-end:"C:\Users\Antonio\Documents\Progetti\NISC-Manager-Final-\src\pages\recupera-password\recupera-password.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */]])
    ], RecuperaPasswordPage);
    return RecuperaPasswordPage;
}());

//# sourceMappingURL=recupera-password.js.map

/***/ }),

/***/ 170:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__login_login__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__about_about__ = __webpack_require__(104);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__mymagazzino_mymagazzino__ = __webpack_require__(111);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__richiestemateriale_richiestemateriale__ = __webpack_require__(310);
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
    HomePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-home',template:/*ion-inline-start:"C:\Users\Antonio\Documents\Progetti\NISC-Manager-Final-\src\pages\home\home.html"*/'<ion-header color="royal">\n\n  <ion-navbar color="royal" >\n\n    <ion-title>Home Richiedente</ion-title>\n\n    <ion-buttons end>\n\n      <button ion-button icon-only color="royal" (click)=\'logout()\'>\n\n        <ion-icon name="logout"><img src="assets/img/logout.png" class="dimensioni"> </ion-icon>\n\n      </button>\n\n    </ion-buttons>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content padding >\n\n<p>\n\n<img src="assets/img/logo1.gif"/>\n\n\n\n</p>\n\n<p>\n\n\n\n</p>\n\n\n\n<ion-content class="card-background-page">\n\n<p>\n\n  <ion-card  (click)=\'viewCatalogo()\'>\n\n    <img src="assets/img/icona-catalogo3.png"/>\n\n    <div class="card-title">Catalogo Articoli</div>\n\n    <div class="card-subtitle"></div>\n\n  </ion-card>\n\n\n\n  <ion-card (click)=\'viewMagazzino()\'>\n\n    <img src="assets/img/magazzino.jpg"/>\n\n    <div class="card-title">MyMagazzino</div>\n\n    <div class="card-subtitle"></div>\n\n  </ion-card>\n\n\n\n  <ion-card (click)="viewRichiesta()">\n\n    <img src="assets/img/richieste.jpg"/>\n\n    <div class="card-title">Gestisci richieste</div>\n\n    <div class="card-subtitle"></div>\n\n  </ion-card>\n\n\n\n  <ion-card>\n\n    <img src="assets/img/squadra.jpg"/>\n\n    <div class="card-title">Profilo Squadra</div>\n\n    <div class="card-subtitle"></div>\n\n  </ion-card>\n\n</p>\n\n\n\n</ion-content>\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\Antonio\Documents\Progetti\NISC-Manager-Final-\src\pages\home\home.html"*/
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */]) === "function" && _a || Object])
    ], HomePage);
    return HomePage;
    var _a;
}());

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 214:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GestioneRegistrazionePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__(27);
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
    function GestioneRegistrazionePage(navCtrl, navParams, http) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.http = http;
        this.utenti = [];
        this.postRequest("", "");
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
                    _this.utenti.push(new Utente(_this.dati_server[i].email, _this.dati_server[i].password, _this.dati_server[i].nome_s, _this.dati_server[i].componenti, _this.dati_server[i].stato));
                }
            }
        }, function (error) {
            console.log(error); // Error getting the data
        });
    };
    GestioneRegistrazionePage.prototype.updateStatus = function (utente, st) {
        var _this = this;
        var headers = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Headers */]();
        headers.append('Content-Type', 'application/x-www-form-urlencoded');
        var options = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["d" /* RequestOptions */]({ headers: headers });
        console.log(utente.email, st);
        var postParams = {
            email: utente.email,
            st: st
        };
        this.http.post("http://niscmanager.altervista.org/update_status.php", JSON.stringify(postParams), options)
            .subscribe(function (data) {
            _this.dati_server = data;
            _this.navCtrl.setRoot(_this.navCtrl.getActive().component);
            console.log(_this.dati_server);
        }, function (error) {
            console.log(error); // Error getting the data
        });
    };
    GestioneRegistrazionePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-gestione-registrazione',template:/*ion-inline-start:"C:\Users\Antonio\Documents\Progetti\NISC-Manager-Final-\src\pages\gestione-registrazione\gestione-registrazione.html"*/'<!--\n  Generated template for the GestioneRegistrazionePage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>Gestione Registrazione</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n<ion-content padding>\n    \n        <ion-searchbar (ionInput)="getItems($event)"></ion-searchbar>\n    \n        <ion-grid>\n          <ion-row>\n            <ion-col col-3>Squadra</ion-col>\n            <ion-col col-3>Email</ion-col>\n            <ion-col col-3>Status</ion-col>\n            <ion-col col-3>Approvi?</ion-col>\n          </ion-row>\n        </ion-grid>\n    \n        <ion-list>\n            <ion-item *ngFor="let utente of utenti">\n              <ion-grid>\n                  <ion-row>\n                    <ion-col col-2>{{utente.nome_s}}</ion-col>\n                    <ion-col col-4>{{utente.email}}</ion-col>\n                    <ion-col col-4 *ngIf="utente.stato == \'in attesa\';">\n                      <button class="inAttesa" ion-button> </button>\n                    </ion-col>\n                    <ion-col col-4 *ngIf="utente.stato == \'approvato\';">\n                      <button class="approvato" ion-button> </button>\n                    </ion-col>\n                    <ion-col col-4 *ngIf="utente.stato == \'rifiutato\';">\n                      <button class="rifiutato" ion-button> </button>\n                    </ion-col>\n\n\n\n<!--\n\n                    <ng-template #elseBlock><button class="approvato" ion-button> </button></ng-template> -->\n                    <ion-col col-2><ion-icon name="checkmark-circle-outline" (click)="updateStatus(utente,\'approvato\')"></ion-icon> \n                      <ion-icon name="close" (click)="updateStatus(utente,\'rifiutato\')"></ion-icon></ion-col>\n                  </ion-row>\n                </ion-grid>\n            </ion-item>\n          </ion-list>\n   </ion-content>\n'/*ion-inline-end:"C:\Users\Antonio\Documents\Progetti\NISC-Manager-Final-\src\pages\gestione-registrazione\gestione-registrazione.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__angular_http__["b" /* Http */]])
    ], GestioneRegistrazionePage);
    return GestioneRegistrazionePage;
}());

var Utente = (function () {
    function Utente(email, password, nome_s, compo, stato) {
        this.email = email;
        this.password = password;
        this.nome_s = nome_s;
        this.componenti = compo;
        this.stato = stato;
    }
    return Utente;
}());
//# sourceMappingURL=gestione-registrazione.js.map

/***/ }),

/***/ 215:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(216);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(237);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 237:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_component__ = __webpack_require__(287);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_login_login__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_registrati_registrati__ = __webpack_require__(168);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_recupera_password_recupera_password__ = __webpack_require__(169);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__angular_common_http__ = __webpack_require__(81);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__angular_http__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_home_home__ = __webpack_require__(170);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_about_about__ = __webpack_require__(104);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_dettagliarticoli_dettagliarticoli__ = __webpack_require__(43);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__pages_mymagazzino_mymagazzino__ = __webpack_require__(111);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__pages_home_amm_home_amm__ = __webpack_require__(110);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__pages_gestione_registrazione_gestione_registrazione__ = __webpack_require__(214);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__pages_elimina_magazzini_admin_elimina_magazzini_admin__ = __webpack_require__(105);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__pages_gestione_articoli_admin_gestione_articoli_admin__ = __webpack_require__(106);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__pages_gestione_magazzini_admin_gestione_magazzini_admin__ = __webpack_require__(107);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__pages_inserisci_modifica_magazzino_inserisci_modifica_magazzino__ = __webpack_require__(108);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__pages_home_mag_home_mag__ = __webpack_require__(112);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__ionic_native_status_bar__ = __webpack_require__(210);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__ionic_native_splash_screen__ = __webpack_require__(213);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__ionic_storage__ = __webpack_require__(167);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__pages_gestione_magazzini_mag_gestione_magazzini_mag__ = __webpack_require__(109);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__pages_richiestemateriale_richiestemateriale__ = __webpack_require__(310);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__pages_dettaglirichiesta_dettaglirichiesta__ = __webpack_require__(308);
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
                __WEBPACK_IMPORTED_MODULE_23__pages_gestione_magazzini_mag_gestione_magazzini_mag__["a" /* GestioneMagazziniMagPage */],
                __WEBPACK_IMPORTED_MODULE_19__pages_home_mag_home_mag__["a" /* HomeMagPage */],
                __WEBPACK_IMPORTED_MODULE_24__pages_richiestemateriale_richiestemateriale__["a" /* RichiesteMaterialePage */],
                __WEBPACK_IMPORTED_MODULE_25__pages_dettaglirichiesta_dettaglirichiesta__["a" /* DettagliRichiestaPage */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_7__angular_common_http__["b" /* HttpClientModule */],
                __WEBPACK_IMPORTED_MODULE_8__angular_http__["c" /* HttpModule */],
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["d" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */], {}, {
                    links: [
                        { loadChildren: '../pages/about/about.module#AboutPageModule', name: 'AboutPage', segment: 'about', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/dettagliarticoli/dettagliarticoli.module#DettagliPageModule', name: 'DettagliPage', segment: 'dettagliarticoli', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/elimina-magazzini-admin/elimina-magazzini-admin.module#EliminaMagazziniAdminPageModule', name: 'EliminaMagazziniAdminPage', segment: 'elimina-magazzini-admin', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/gestione-articoli-admin/gestione-articoli-admin.module#GestioneArticoliAdminPageModule', name: 'GestioneArticoliAdminPage', segment: 'gestione-articoli-admin', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/gestione-magazzini-admin/gestione-magazzini-admin.module#GestioneMagazziniAdminPageModule', name: 'GestioneMagazziniAdminPage', segment: 'gestione-magazzini-admin', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/gestione-magazzini-mag/gestione-magazzini-mag.module#GestioneMagazziniMagPageModule', name: 'GestioneMagazziniMagPage', segment: 'gestione-magazzini-mag', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/gestione-registrazione/gestione-registrazione.module#GestioneRegistrazionePageModule', name: 'GestioneRegistrazionePage', segment: 'gestione-registrazione', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/home-amm/home-amm.module#HomeAmmPageModule', name: 'HomeAmmPage', segment: 'home-amm', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/home-mag/home-mag.module#HomeMagPageModule', name: 'HomeMagPage', segment: 'home-mag', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/inserisci-modifica-magazzino/inserisci-modifica-magazzino.module#InserisciModificaMagazzinoPageModule', name: 'InserisciModificaMagazzinoPage', segment: 'inserisci-modifica-magazzino', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/mymagazzino/mymagazzino.module#MymagazzinoPageModule', name: 'MymagazzinoPage', segment: 'mymagazzino', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/dettaglirichiesta/dettaglirichiesta.module#DettagliRichiestaPageModule', name: 'DettagliRichiestaPage', segment: 'dettaglirichiesta', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/richiestemateriale/richiestemateriale.module#RichiesteMaterialePageModule', name: 'RichiesteMaterialePage', segment: 'richiestemateriale', priority: 'low', defaultHistory: [] }
                    ]
                }),
                __WEBPACK_IMPORTED_MODULE_22__ionic_storage__["a" /* IonicStorageModule */].forRoot()
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
                __WEBPACK_IMPORTED_MODULE_23__pages_gestione_magazzini_mag_gestione_magazzini_mag__["a" /* GestioneMagazziniMagPage */],
                __WEBPACK_IMPORTED_MODULE_19__pages_home_mag_home_mag__["a" /* HomeMagPage */],
                __WEBPACK_IMPORTED_MODULE_24__pages_richiestemateriale_richiestemateriale__["a" /* RichiesteMaterialePage */],
                __WEBPACK_IMPORTED_MODULE_25__pages_dettaglirichiesta_dettaglirichiesta__["a" /* DettagliRichiestaPage */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_20__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_21__ionic_native_splash_screen__["a" /* SplashScreen */],
                { provide: __WEBPACK_IMPORTED_MODULE_0__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicErrorHandler */] }
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 287:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(210);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(213);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_login_login__ = __webpack_require__(33);
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

/***/ 308:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DettagliRichiestaPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common_http__ = __webpack_require__(81);
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
var DettagliRichiestaPage = (function () {
    function DettagliRichiestaPage(navCtrl, http, navParams) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.http = http;
        this.navParams = navParams;
        /* constructor(public navCtrl: NavController, public navParams: NavParams) {
           
           console.log(navParams.data.stato);
       
           this.id=navParams.data.id;
           this.stato=navParams.data.stato;
           this.articolo=navParams.data.articolo;
           this.quantita_richiesta=navParams.data.quantita_richiesta;
           this.quantita_approvata=navParams.data.quantita_approvata;
           
         
         }*/
        this.richieste = [];
        http.get('http://niscmanager.altervista.org/get_dettagli_richiesta.php?nome_squadra=squadra1')
            .subscribe(function (data) {
            _this.richieste_divise = data;
            console.log(_this.richieste_divise);
            if (_this.richieste_divise != null) {
                for (var i = 0; i < _this.richieste_divise.length; i++) {
                    _this.richieste.push(new Richiesta(_this.richieste_divise[i].id, _this.richieste_divise[i].stato, _this.richieste_divise[i].articolo, _this.richieste_divise[i].quantita_richiesta, _this.richieste_divise[i].quantita_approvata));
                }
            }
        }, function (err) {
            console.log("Error occured");
        });
    }
    /* itemSelected(richiesta: Richiesta) {
       console.log("Selected Item", richiesta.stato);
       this.navCtrl.push(DettagliRichiestaPage, richiesta);
     }*/
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
            selector: 'page-dettaglirichiesta',template:/*ion-inline-start:"C:\Users\Antonio\Documents\Progetti\NISC-Manager-Final-\src\pages\dettaglirichiesta\dettaglirichiesta.html"*/'<!--\n\n  Generated template for the DettagliArticoloPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n    \n\n      <ion-navbar color="danger">\n\n        <ion-title>Dettagli richiesta articoli</ion-title>\n\n      </ion-navbar>\n\n    \n\n    </ion-header>\n\n    \n\n    \n\n    <ion-content padding>\n\n      <ion-grid>\n\n        <ion-row>\n\n          \n\n          <ion-col col-4>ID articolo</ion-col>\n\n          <ion-col col-4>Quantità richiesta</ion-col>\n\n          <ion-col col-4>Quantità approvata</ion-col>\n\n          \n\n         \n\n        </ion-row>\n\n      </ion-grid>\n\n  \n\n      <ion-list ion-item *ngFor="let richiesta of richieste">\n\n          \n\n            <ion-grid>\n\n                <ion-row>\n\n                  \n\n                  <ion-col col-4>{{ richiesta.articolo }}</ion-col>\n\n                  <ion-col col-4>{{ richiesta.quantita_richiesta }}</ion-col>\n\n                  <ion-col col-4>{{ richiesta.quantita_approvata }}</ion-col>\n\n                  \n\n                </ion-row>\n\n              </ion-grid>\n\n         \n\n  \n\n        </ion-list>\n\n    \n\n    </ion-content>'/*ion-inline-end:"C:\Users\Antonio\Documents\Progetti\NISC-Manager-Final-\src\pages\dettaglirichiesta\dettaglirichiesta.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_2__angular_common_http__["a" /* HttpClient */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */]])
    ], DettagliRichiestaPage);
    return DettagliRichiestaPage;
}());

var Richiesta = (function () {
    function Richiesta(id, stato, articolo, quantita_richiesta, quantita_approvata) {
        this.id = id;
        this.stato = stato;
        this.articolo = articolo;
        this.quantita_richiesta = quantita_richiesta;
        this.quantita_approvata = quantita_approvata;
    }
    return Richiesta;
}());
//}
//# sourceMappingURL=dettaglirichiesta.js.map

/***/ }),

/***/ 310:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RichiesteMaterialePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common_http__ = __webpack_require__(81);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__dettaglirichiesta_dettaglirichiesta__ = __webpack_require__(308);
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
var RichiesteMaterialePage = (function () {
    function RichiesteMaterialePage(navCtrl, http, navParams) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.http = http;
        this.navParams = navParams;
        this.richieste = [];
        http.get('http://niscmanager.altervista.org/get_richieste_inviate.php?nome_squadra=squadra1')
            .subscribe(function (data) {
            _this.dati_server = data;
            console.log(_this.dati_server);
            if (_this.dati_server != null) {
                for (var i = 0; i < _this.dati_server.length; i++) {
                    _this.richieste.push(new Richiesta(_this.dati_server[i].id, _this.dati_server[i].stato, _this.dati_server[i].articolo, _this.dati_server[i].quantita_richiesta, _this.dati_server[i].quantita_approvata));
                }
            }
        }, function (err) {
            console.log("Error occured");
        });
    }
    RichiesteMaterialePage.prototype.itemSelected = function (richiesta) {
        console.log("Selected Item", richiesta.stato);
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__dettaglirichiesta_dettaglirichiesta__["a" /* DettagliRichiestaPage */], richiesta.id);
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
            selector: 'page-richiestemateriale',template:/*ion-inline-start:"C:\Users\Antonio\Documents\Progetti\NISC-Manager-Final-\src\pages\richiestemateriale\richiestemateriale.html"*/'<ion-header>\n\n    \n\n      <ion-navbar color="danger">\n\n        <ion-title>Richieste materiale</ion-title>\n\n      </ion-navbar>\n\n    \n\n    </ion-header>\n\n    \n\n    \n\n    <ion-content padding>\n\n    \n\n        <ion-searchbar (ionInput)="getItems($event)"></ion-searchbar>\n\n    \n\n        <ion-grid>\n\n          <ion-row>\n\n            \n\n            <ion-col col-4>ID richiesta</ion-col>\n\n            <ion-col col-5>Status</ion-col>\n\n            \n\n           \n\n          </ion-row>\n\n        </ion-grid>\n\n    \n\n        <ion-list>\n\n            <button ion-item *ngFor="let richiesta of richieste" (click)="itemSelected(richiesta)">\n\n              <ion-grid>\n\n                  <ion-row >\n\n                    \n\n                    <ion-col col-4>{{ richiesta.id }}</ion-col>\n\n                    <ion-col col-5>{{ richiesta.stato }}</ion-col>\n\n                    \n\n                  </ion-row>\n\n                </ion-grid>\n\n            </button>\n\n    \n\n          </ion-list>\n\n    \n\n    </ion-content>\n\n    '/*ion-inline-end:"C:\Users\Antonio\Documents\Progetti\NISC-Manager-Final-\src\pages\richiestemateriale\richiestemateriale.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_2__angular_common_http__["a" /* HttpClient */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */]])
    ], RichiesteMaterialePage);
    return RichiesteMaterialePage;
}());

var Richiesta = (function () {
    function Richiesta(id, stato, articolo, quantita_richiesta, quantita_approvata) {
        this.id = id;
        this.stato = stato;
        this.articolo = articolo;
        this.quantita_richiesta = quantita_richiesta;
        this.quantita_approvata = quantita_approvata;
    }
    return Richiesta;
}());
//# sourceMappingURL=richiestemateriale.js.map

/***/ }),

/***/ 33:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__registrati_registrati__ = __webpack_require__(168);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__recupera_password_recupera_password__ = __webpack_require__(169);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__home_home__ = __webpack_require__(170);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_http__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__home_amm_home_amm__ = __webpack_require__(110);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__home_mag_home_mag__ = __webpack_require__(112);
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
    function LoginPage(navCtrl, http, altr) {
        this.navCtrl = navCtrl;
        this.http = http;
        this.altr = altr;
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
        this.http.post("http://niscmanager.altervista.org/get_richiedenti.php", JSON.stringify(postParams), options)
            .subscribe(function (data) {
            _this.dati_server = data.json();
            console.log(_this.dati_server);
            if (_this.dati_server != null) {
                _this.utenti.push(new Utente(_this.dati_server[0].email, _this.dati_server[0].password, _this.dati_server[0].nome_s, _this.dati_server[0].componenti, _this.dati_server[0].stato, _this.dati_server[0].ruolo));
                if (_this.dati_server[0].ruolo == 'Amministratore')
                    _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_6__home_amm_home_amm__["a" /* HomeAmmPage */]);
                else if (_this.dati_server[0].stato == 'approvato') {
                    if (_this.dati_server[0].ruolo == 'Magazziniere')
                        _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_7__home_mag_home_mag__["a" /* HomeMagPage */]);
                    if (_this.dati_server[0].ruolo == 'Richiedente')
                        _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_4__home_home__["a" /* HomePage */]);
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
            selector: 'page-page',template:/*ion-inline-start:"C:\Users\Antonio\Documents\Progetti\NISC-Manager-Final-\src\pages\login\login.html"*/'<ion-header>\n\n  <ion-navbar>\n\n    <ion-title>\n\n      Login\n\n    </ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n<ion-content padding id="page1">\n\n  <img src="assets/img/J6RhzI1UTRKQJdXpWUkV_logoneapolis.png" style="display:block;width:100%;height:auto;margin-left:auto;margin-right:auto;" />\n\n  <form id="page-form2">\n\n    <ion-item id="page-input2">\n\n      <ion-label>\n\n        USER_ID\n\n      </ion-label>\n\n      <ion-input type="text" placeholder="" [(ngModel)]="user_id" [ngModelOptions]="{standalone: true}"></ion-input>\n\n    </ion-item>\n\n    <ion-item id="page-input4">\n\n      <ion-label>\n\n        Password\n\n      </ion-label>\n\n      <ion-input type="password" placeholder="" [(ngModel)]="password" [ngModelOptions]="{standalone: true}"></ion-input>\n\n    </ion-item>\n\n    <ion-item><a (click)=\'recuperaPassword()\'>Password Dimentica?</a></ion-item>\n\n  </form>\n\n  <button id="page-button1" ion-button color="positive" block (click)=\'postRequest(user_id,password)\'>\n\n    Login\n\n  </button>\n\n  <button id="page-button2" ion-button color="positive" block (click)=\'sign_up()\'>\n\n    Registarti\n\n  </button>\n\n  <button ion-button color="positive" block (click)=\'goToHomeRic()\'>\n\n    Richiedente\n\n  </button>\n\n  <button ion-button color="positive" block (click)=\'goToHomeMag()\'>\n\n    Magazziniere\n\n  </button>\n\n  <button ion-button color="positive" block (click)=\'goToHomeAmm()\'>\n\n    Amministratore\n\n  </button>\n\n</ion-content>'/*ion-inline-end:"C:\Users\Antonio\Documents\Progetti\NISC-Manager-Final-\src\pages\login\login.html"*/
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_5__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__angular_http__["b" /* Http */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */]) === "function" && _c || Object])
    ], LoginPage);
    return LoginPage;
    var _a, _b, _c;
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

/***/ 43:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DettagliPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(8);
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
            selector: 'page-dettagliarticoli',template:/*ion-inline-start:"C:\Users\Antonio\Documents\Progetti\NISC-Manager-Final-\src\pages\dettagliarticoli\dettagliarticoli.html"*/'<!--\n\n  Generated template for the DettagliArticoloPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n\n\n  <ion-navbar>\n\n    <ion-title>dettagli_articolo</ion-title>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content padding>\n\n  <ion-grid>\n\n    <ion-row>\n\n      <ion-col col-4 class="logo">\n\n        <img src="../../assets/imgs/logo.png"/>\n\n      </ion-col>\n\n      <ion-col> \n\n        <p><b>ID:</b> {{ id }}</p>\n\n        <h1>{{ nome }}</h1>\n\n      </ion-col>\n\n    </ion-row>\n\n    <ion-row>\n\n        <ion-col>\n\n          <b>Quantità:</b> {{ quantita }}\n\n        </ion-col>\n\n    </ion-row>\n\n    <ion-row>\n\n        <ion-col>\n\n            <b>Descrizione:</b><br>\n\n            {{ descrizione }}\n\n        </ion-col>\n\n    </ion-row>\n\n  </ion-grid>\n\n\n\n</ion-content>'/*ion-inline-end:"C:\Users\Antonio\Documents\Progetti\NISC-Manager-Final-\src\pages\dettagliarticoli\dettagliarticoli.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */]])
    ], DettagliPage);
    return DettagliPage;
}());

//# sourceMappingURL=dettagliarticoli.js.map

/***/ })

},[215]);
//# sourceMappingURL=main.js.map