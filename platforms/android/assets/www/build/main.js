webpackJsonp([21],{

/***/ 108:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AboutPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common_http__ = __webpack_require__(43);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__dettagliarticoli_dettagliarticoli__ = __webpack_require__(45);
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

/***/ 109:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DettagliArticoliMagPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
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
            selector: 'page-dettagli-articoli-mag',template:/*ion-inline-start:"C:\Users\Antonio\Documents\Progetti\NISC-Manager-Final-\src\pages\dettagli-articoli-mag\dettagli-articoli-mag.html"*/'<ion-header>\n\n    <ion-navbar>\n      <ion-title>dettagli articolo</ion-title>\n    </ion-navbar>\n  \n  </ion-header>\n  \n  \n  <ion-content padding>\n    <ion-grid>\n      <ion-row>\n        <ion-col col-4 class="logo">\n          <img src="../../assets/imgs/logo.png"/>\n        </ion-col>\n        <ion-col> \n          <p><b>ID:</b> {{ articolo.id }}</p>\n          <h1>{{ articolo.nome }}</h1>\n        </ion-col>\n      </ion-row>\n      <ion-row>\n          <ion-col>\n            <b>Quantità:</b> {{ articolo.quantita }}\n          </ion-col>\n      </ion-row>\n      <ion-row>\n          <ion-col>\n              <b>Descrizione:</b><br>\n              {{ articolo.descrizione }}\n          </ion-col>\n      </ion-row>\n    </ion-grid>\n    <p align=\'center\'>\n        <button ion-button color="secondary" round (click)=\'modifica()\'>Modifica</button>\n      </p>\n  \n  </ion-content>'/*ion-inline-end:"C:\Users\Antonio\Documents\Progetti\NISC-Manager-Final-\src\pages\dettagli-articoli-mag\dettagli-articoli-mag.html"*/,
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
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DettagliRichiestaPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common_http__ = __webpack_require__(43);
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

/***/ 111:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EliminaArticoliPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__(12);
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
    function EliminaArticoliPage(navCtrl, http, navParams, alertCtrl) {
        this.navCtrl = navCtrl;
        this.http = http;
        this.navParams = navParams;
        this.alertCtrl = alertCtrl;
        this.articoli = [];
    }
    EliminaArticoliPage.prototype.ionViewWillEnter = function () {
        var _this = this;
        var nome_mag = this.navParams.data;
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
                _this.articoli = [];
                for (var i = 0; i < _this.dati_server.length; i++) {
                    _this.articoli.push(new Articolo(_this.dati_server[i].id, _this.dati_server[i].nome, _this.dati_server[i].quantita, _this.dati_server[i].descrizione, nome_mag));
                }
            }
        });
    };
    EliminaArticoliPage.prototype.elimina = function (articolo) {
        var _this = this;
        var id = articolo.id;
        var magazzino = articolo.nome_magazzino;
        var headers = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Headers */]();
        headers.append('Content-Type', 'application/x-www-form-urlencoded');
        var options = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["d" /* RequestOptions */]({ headers: headers });
        var postParams = {
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
            selector: 'page-elimina-articoli',template:/*ion-inline-start:"C:\Users\Antonio\Documents\Progetti\NISC-Manager-Final-\src\pages\elimina-articoli\elimina-articoli.html"*/'<ion-header>\n    <ion-navbar color="danger">\n      <ion-title>Elimina articoli</ion-title>\n    </ion-navbar>\n  </ion-header>\n  \n  <ion-content style="background-color:rgb(205, 241, 245);">\n    <p>\n        <ion-searchbar (ionInput)="getItems($event)"></ion-searchbar>     \n    </p>\n    <p></p>\n    <div ng-controller="listController"> \n    <ion-list>\n  \n     <ion-item *ngFor="let articolo of articoli">\n        <ion-thumbnail item-start>\n          <img src="assets/img/componente4.jpg">\n        </ion-thumbnail>\n        <h2>Nome: {{articolo.nome}}</h2>\n        <p>Disponibiltà: {{articolo.quantita}}</p>\n       \n        <button ion-button outline item-end (click)=\'elimina(articolo)\'>Elimina</button>\n      </ion-item>\n    </ion-list>\n  </div>\n  </ion-content>'/*ion-inline-end:"C:\Users\Antonio\Documents\Progetti\NISC-Manager-Final-\src\pages\elimina-articoli\elimina-articoli.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_2__angular_http__["b" /* Http */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */]])
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
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EliminaMagazziniAdminPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__(12);
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

/***/ 113:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GestioneArticoliAdminPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__dettagliarticoli_dettagliarticoli__ = __webpack_require__(45);
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

/***/ 114:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GestioneArticoliMagPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__dettagli_articoli_mag_dettagli_articoli_mag__ = __webpack_require__(109);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__inserisci_modifica_articolo_inserisci_modifica_articolo__ = __webpack_require__(55);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__elimina_articoli_elimina_articoli__ = __webpack_require__(111);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__sposta_articoli_mag_sposta_articoli_mag__ = __webpack_require__(115);
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
    function GestioneArticoliMagPage(navCtrl, http, navParams) {
        this.navCtrl = navCtrl;
        this.http = http;
        this.navParams = navParams;
        this.articoli = [];
    }
    GestioneArticoliMagPage.prototype.ionViewWillEnter = function () {
        var _this = this;
        var nome_mag = this.navParams.data.nome;
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
            selector: 'page-gestione-articoli-mag',template:/*ion-inline-start:"C:\Users\Antonio\Documents\Progetti\NISC-Manager-Final-\src\pages\gestione-articoli-mag\gestione-articoli-mag.html"*/'<ion-header>\n  <ion-navbar color="danger">\n    <ion-title>{{ titolo }}</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content style="background-color:rgb(205, 241, 245);">\n  <p>\n      <ion-searchbar (ionInput)="getItems($event)"></ion-searchbar>     \n  </p>\n  <p></p>\n  <div ng-controller="listController"> \n  <ion-list>\n\n   <ion-item *ngFor="let articolo of articoli">\n      <ion-thumbnail item-start>\n        <img src="assets/img/componente4.jpg">\n      </ion-thumbnail>\n      <h2>Nome: {{articolo.nome}}</h2>\n      <p>Disponibiltà: {{articolo.quantita}}</p>\n     \n      <button ion-button outline item-end (click)=\'dettagli(articolo)\'>Dettagli</button>\n    </ion-item>\n  </ion-list>\n</div>\n<p align=\'center\'>\n  <button ion-button color="secondary" round (click)=\'inserisci()\'>Inserisci</button>\n  <button ion-button round (click)=\'sposta()\'>Sposta</button>\n  <button ion-button color="danger" round (click)=\'elimina()\'>Elimina</button>\n</p>\n</ion-content>'/*ion-inline-end:"C:\Users\Antonio\Documents\Progetti\NISC-Manager-Final-\src\pages\gestione-articoli-mag\gestione-articoli-mag.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_2__angular_http__["b" /* Http */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */]])
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

/***/ 115:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SpostaArticoliMagPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__(12);
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
    function SpostaArticoliMagPage(navCtrl, http, navParams, alertCtrl) {
        this.navCtrl = navCtrl;
        this.http = http;
        this.navParams = navParams;
        this.alertCtrl = alertCtrl;
        this.articoli = [];
        this.magazzini = [];
    }
    SpostaArticoliMagPage.prototype.ionViewWillEnter = function () {
        var _this = this;
        var nome_mag = this.navParams.data;
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
                _this.articoli = [];
                for (var i = 0; i < _this.dati_server.length; i++) {
                    _this.articoli.push(new Articolo(_this.dati_server[i].id, _this.dati_server[i].nome, _this.dati_server[i].quantita, _this.dati_server[i].descrizione, nome_mag));
                }
            }
        });
        postParams = {
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
            selector: 'page-sposta-articoli-mag',template:/*ion-inline-start:"C:\Users\Antonio\Documents\Progetti\NISC-Manager-Final-\src\pages\sposta-articoli-mag\sposta-articoli-mag.html"*/'<ion-header>\n    <ion-navbar color="danger">\n      <ion-title>Sposta articoli</ion-title>\n    </ion-navbar>\n  </ion-header>\n  \n  <ion-content style="background-color:rgb(205, 241, 245);">\n    <p>\n        <ion-searchbar (ionInput)="getItems($event)"></ion-searchbar>     \n    </p>\n    <p></p>\n    <div ng-controller="listController"> \n      <ion-list>\n    \n      <ion-item *ngFor="let articolo of articoli">\n          <ion-thumbnail item-start>\n            <img src="assets/img/componente4.jpg">\n          </ion-thumbnail>\n          <h2>Nome: {{articolo.nome}}</h2>\n          <p>Disponibiltà: {{articolo.quantita}}</p>\n          <p>\n            <label>Da spostare:\n              <input #spostare type="number" value="0" min="0" max={{articolo.quantita}} step="1">\n            </label>\n          </p>\n          <button ion-button outline item-end (click)=\'sposta(articolo,spostare.value)\'>Sposta</button>\n        </ion-item>\n      </ion-list>\n    </div>\n\n  </ion-content>'/*ion-inline-end:"C:\Users\Antonio\Documents\Progetti\NISC-Manager-Final-\src\pages\sposta-articoli-mag\sposta-articoli-mag.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_2__angular_http__["b" /* Http */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */]])
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

/***/ 116:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GestioneMagazziniAdminPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__inserisci_modifica_magazzino_inserisci_modifica_magazzino__ = __webpack_require__(117);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__gestione_articoli_admin_gestione_articoli_admin__ = __webpack_require__(113);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__elimina_magazzini_admin_elimina_magazzini_admin__ = __webpack_require__(112);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_storage__ = __webpack_require__(44);
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

/***/ 117:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return InserisciModificaMagazzinoPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__(12);
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

/***/ 118:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GestioneMagazziniMagPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_storage__ = __webpack_require__(44);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__gestione_articoli_mag_gestione_articoli_mag__ = __webpack_require__(114);
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
            _this.email = val;
        });
        storage.get('password').then(function (val) {
            _this.password = val;
        });
    }
    GestioneMagazziniMagPage.prototype.ionViewWillEnter = function () {
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
            selector: 'page-gestione-magazzini-mag',template:/*ion-inline-start:"C:\Users\Antonio\Documents\Progetti\NISC-Manager-Final-\src\pages\gestione-magazzini-mag\gestione-magazzini-mag.html"*/'<ion-header>\n  <ion-navbar color="danger">\n    <ion-title>Gestione magazzini</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content style="background-color:rgb(205, 241, 245);">\n  <p>\n      <ion-searchbar (ionInput)="getItems($event)"></ion-searchbar>\n  </p>\n  <p></p>\n  <div ng-controller="listController"> \n  <ion-list>\n   <ion-item *ngFor="let magazzino of magazzini" (click)=\'mostra_articoli(magazzino)\'>\n      <h2>{{magazzino.nome}}</h2>\n      <p>{{magazzino.descrizione}}</p>\n    </ion-item>\n  </ion-list>\n</div>\n</ion-content>'/*ion-inline-end:"C:\Users\Antonio\Documents\Progetti\NISC-Manager-Final-\src\pages\gestione-magazzini-mag\gestione-magazzini-mag.html"*/,
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

/***/ 119:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GestioneRegistrazionePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_storage__ = __webpack_require__(44);
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
        str.get('email').then(function (email) {
            _this.email_a = email;
        });
        str.get('password').then(function (pass) {
            _this.password_a = pass;
        });
        this.postRequest("", "registrati");
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
        this.http.post("http://niscmanager.altervista.org/get_utenti.php", JSON.stringify(postParams), options)
            .subscribe(function (data) {
            _this.dati_server = data.json();
            console.log(_this.dati_server);
            if (_this.dati_server != null) {
                for (var i = 0; i < _this.dati_server.length; i++) {
                    _this.utenti.push(new Utente(_this.dati_server[i].email, _this.dati_server[i].password, _this.dati_server[i].nome_squadra, _this.dati_server[i].componenti, _this.dati_server[i].stato));
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
    GestioneRegistrazionePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-gestione-registrazione',template:/*ion-inline-start:"C:\Users\Antonio\Documents\Progetti\NISC-Manager-Final-\src\pages\gestione-registrazione\gestione-registrazione.html"*/'<!--\n  Generated template for the GestioneRegistrazionePage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>Gestione Registrazione</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n<ion-content padding>\n    \n        <ion-searchbar (ionInput)="getItems($event)"></ion-searchbar>\n    \n        <ion-grid>\n          <ion-row>\n            <ion-col col-3>Squadra</ion-col>\n            <ion-col col-3>Email</ion-col>\n            <ion-col col-3>Status</ion-col>\n            <ion-col col-3>Approvi?</ion-col>\n          </ion-row>\n        </ion-grid>\n    \n        <ion-list>\n            <ion-item *ngFor="let utente of utenti">\n              <ion-grid>\n                  <ion-row>\n                    <ion-col col-2>{{utente.nome_s}}</ion-col>\n                    <ion-col col-4>{{utente.email}}</ion-col>\n                    <ion-col col-4 *ngIf="utente.stato == \'in attesa\';">\n                      <button class="inAttesa" ion-button> </button>\n                    </ion-col>\n                    <ion-col col-4 *ngIf="utente.stato == \'approvato\';">\n                      <button class="approvato" ion-button> </button>\n                    </ion-col>\n                    <ion-col col-4 *ngIf="utente.stato == \'rifiutato\';">\n                      <button class="rifiutato" ion-button> </button>\n                    </ion-col>\n                    <ion-col col-2><ion-icon name="checkmark-circle-outline" (click)="updateStatus(utente,\'approvato\',\'\')"></ion-icon> \n                      <ion-icon name="close" (click)="updateStatus(utente,\'rifiutato\',\'\')"></ion-icon></ion-col>\n                  </ion-row>\n                </ion-grid>\n            </ion-item>\n          </ion-list>\n   </ion-content>\n'/*ion-inline-end:"C:\Users\Antonio\Documents\Progetti\NISC-Manager-Final-\src\pages\gestione-registrazione\gestione-registrazione.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__angular_http__["b" /* Http */], __WEBPACK_IMPORTED_MODULE_3__ionic_storage__["b" /* Storage */]])
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

/***/ 120:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GestioneUtentiPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__modifica_profilo_admin_modifica_profilo_admin__ = __webpack_require__(121);
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
    function GestioneUtentiPage(navCtrl, navParams, http) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.http = http;
        this.utenti = [];
        this.postRequest("", "registrazione");
    }
    GestioneUtentiPage.prototype.postRequest = function (email, pass) {
        var _this = this;
        var headers = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Headers */]();
        headers.append('Content-Type', 'application/x-www-form-urlencoded');
        var options = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["d" /* RequestOptions */]({ headers: headers });
        var params = {
            email: email,
            pass: pass
        };
        this.http.post("http://niscmanager.altervista.org/get_utenti.php", JSON.stringify(params), options)
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
    GestioneUtentiPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-gestione-utenti',template:/*ion-inline-start:"C:\Users\Antonio\Documents\Progetti\NISC-Manager-Final-\src\pages\gestione-utenti\gestione-utenti.html"*/'<ion-header>\n\n  <ion-navbar>\n    <ion-title>Gestione Utenti</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n    <ion-searchbar (ionInput)="getItems($event)"></ion-searchbar>\n    <ion-list>\n      <ion-item *ngFor="let utente of utenti">\n        <ion-card>\n            <ion-card-header>\n              {{utente.email}}\n            </ion-card-header>\n            <ion-card-content>\n                      Squadra: {{utente.nome_s}} <br/>\n                      Componenti: {{utente.componenti}} <br/>\n                      Ruolo : {{utente.ruolo}} <br/>\n                      Stato: {{utente.stato}} \n\n                      <div><button ion-button outline item-end (click)="goToModified(utente)">Modifica</button></div>\n            </ion-card-content>\n          </ion-card>\n        </ion-item>\n    </ion-list>\n</ion-content>\n'/*ion-inline-end:"C:\Users\Antonio\Documents\Progetti\NISC-Manager-Final-\src\pages\gestione-utenti\gestione-utenti.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__angular_http__["b" /* Http */]])
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

/***/ 121:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ModificaProfiloAdminPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__(12);
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
    ModificaProfiloAdminPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-modifica-profilo-admin',template:/*ion-inline-start:"C:\Users\Antonio\Documents\Progetti\NISC-Manager-Final-\src\pages\modifica-profilo-admin\modifica-profilo-admin.html"*/'<ion-header>\n\n  <ion-navbar>\n    <ion-title>Modifica Profilo</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n      <ion-grid>\n          <ion-row>\n            <ion-item>\n              <ion-label stacked>Email </ion-label>\n              <ion-input type="text" value={{email_v}} [(ngModel)]="email" [ngModelOptions]="{standalone: true}"></ion-input>\n            </ion-item>\n          </ion-row>\n          <ion-row>\n            <ion-item>\n              <ion-label stacked>Status</ion-label>\n              <ion-select [(ngModel)]="stato" [ngModelOptions]="{standalone: true}">\n                  <ion-option value="approvato">\n                    Approva\n                  </ion-option>\n                  <ion-option value="rifiutato">\n                    Rifiuta\n                  </ion-option>\n              </ion-select>\n            </ion-item>\n          </ion-row>\n         <ion-row>\n           <ion-item>\n              <ion-label stacked>Ruolo</ion-label>\n          <ion-select [(ngModel)]="ruolo" [ngModelOptions]="{standalone: true}">\n              <ion-option value="Richiedente">\n                Richiedente\n              </ion-option>\n              <ion-option value="Magazziniere">\n                Magazziniere\n              </ion-option>\n          </ion-select>\n        </ion-item>\n        </ion-row>\n      </ion-grid>\n\n  <p align=\'center\'>\n      <button ion-button color="secondary" round (click)=\'postRequest(email, stato, ruolo)\'>Salva</button>\n  </p>\n  \n</ion-content>\n'/*ion-inline-end:"C:\Users\Antonio\Documents\Progetti\NISC-Manager-Final-\src\pages\modifica-profilo-admin\modifica-profilo-admin.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */], __WEBPACK_IMPORTED_MODULE_2__angular_http__["b" /* Http */]])
    ], ModificaProfiloAdminPage);
    return ModificaProfiloAdminPage;
}());

//# sourceMappingURL=modifica-profilo-admin.js.map

/***/ }),

/***/ 122:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MymagazzinoPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common_http__ = __webpack_require__(43);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__dettagliarticoli_dettagliarticoli__ = __webpack_require__(45);
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

/***/ 123:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RichiesteMaterialePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common_http__ = __webpack_require__(43);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__dettaglirichiesta_dettaglirichiesta__ = __webpack_require__(110);
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

/***/ 124:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomeMagPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__login_login__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__gestione_magazzini_mag_gestione_magazzini_mag__ = __webpack_require__(118);
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

/***/ 125:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProfiloAdminPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ProfiloAdminPage = (function () {
    function ProfiloAdminPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.mail = navParams.data.email;
        this.password = navParams.data.password;
        this.stato = navParams.data.stato;
        this.ruolo = navParams.data.ruolo;
        this.compo = navParams.data.componenti;
        this.nome = navParams.data.nome_s;
    }
    ProfiloAdminPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-profilo-admin',template:/*ion-inline-start:"C:\Users\Antonio\Documents\Progetti\NISC-Manager-Final-\src\pages\profilo-admin\profilo-admin.html"*/'<!--\n  Generated template for the ProfiloAdminPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>Profilo </ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n<ion-content padding>\n    <p>\n        <img src="assets/img/logo1.gif"/>\n    </p>\n\n    <ion-grid>\n        <ion-row>\n          <ion-item>\n            <ion-label stacked>Password</ion-label>\n            <ion-input type="text" value={{password}} [(ngModel)]="password" [ngModelOptions]="{standalone: true}"></ion-input>\n          </ion-item>\n        </ion-row>\n        <ion-row>\n          <ion-item>\n              <ion-label stacked>Nuova Password</ion-label>\n              <ion-input type="password" [(ngModel)]="n_password" [ngModelOptions]="{standalone: true}"></ion-input>\n            </ion-item>\n        </ion-row>\n        <ion-row>\n            <ion-item>\n                <ion-label stacked>Conferma Password</ion-label>\n                <ion-input type="password" [(ngModel)]="c_password" [ngModelOptions]="{standalone: true}"></ion-input>\n              </ion-item>\n            </ion-row>\n            <ion-row>\n                <ion-item>\n                    <ion-label stacked>Nome</ion-label>\n                    <ion-label>{{nome}}</ion-label>\n                  </ion-item>\n                  <ion-item>\n                      <ion-label stacked>Ruolo</ion-label>\n                      <ion-label>{{ruolo}}</ion-label>\n                    </ion-item>\n                    <ion-item>\n                        <ion-label stacked>Email</ion-label>\n                        <ion-label>{{email}}</ion-label>\n                      </ion-item>\n                </ion-row>\n    </ion-grid>\n\n<p align=\'center\'>\n    <button ion-button color="secondary" round (click)=\'postRequest(email, stato, ruolo)\'>Salva</button>\n</p>\n\n</ion-content>\n'/*ion-inline-end:"C:\Users\Antonio\Documents\Progetti\NISC-Manager-Final-\src\pages\profilo-admin\profilo-admin.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */]])
    ], ProfiloAdminPage);
    return ProfiloAdminPage;
}());

//# sourceMappingURL=profilo-admin.js.map

/***/ }),

/***/ 137:
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
webpackEmptyAsyncContext.id = 137;

/***/ }),

/***/ 179:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/about/about.module": [
		307,
		20
	],
	"../pages/dettagli-articoli-mag/dettagli-articoli-mag.module": [
		308,
		19
	],
	"../pages/dettagliarticoli/dettagliarticoli.module": [
		309,
		18
	],
	"../pages/dettaglirichiesta/dettaglirichiesta.module": [
		310,
		17
	],
	"../pages/elimina-articoli/elimina-articoli.module": [
		311,
		16
	],
	"../pages/elimina-magazzini-admin/elimina-magazzini-admin.module": [
		312,
		15
	],
	"../pages/gestione-articoli-admin/gestione-articoli-admin.module": [
		313,
		14
	],
	"../pages/gestione-articoli-mag/gestione-articoli-mag.module": [
		314,
		13
	],
	"../pages/gestione-magazzini-admin/gestione-magazzini-admin.module": [
		315,
		12
	],
	"../pages/gestione-magazzini-mag/gestione-magazzini-mag.module": [
		316,
		11
	],
	"../pages/gestione-registrazione/gestione-registrazione.module": [
		317,
		10
	],
	"../pages/gestione-utenti/gestione-utenti.module": [
		318,
		9
	],
	"../pages/home-amm/home-amm.module": [
		319,
		8
	],
	"../pages/home-mag/home-mag.module": [
		320,
		7
	],
	"../pages/inserisci-modifica-articolo/inserisci-modifica-articolo.module": [
		321,
		6
	],
	"../pages/inserisci-modifica-magazzino/inserisci-modifica-magazzino.module": [
		322,
		5
	],
	"../pages/modifica-profilo-admin/modifica-profilo-admin.module": [
		323,
		4
	],
	"../pages/mymagazzino/mymagazzino.module": [
		324,
		3
	],
	"../pages/profilo-admin/profilo-admin.module": [
		325,
		2
	],
	"../pages/richiestemateriale/richiestemateriale.module": [
		326,
		1
	],
	"../pages/sposta-articoli-mag/sposta-articoli-mag.module": [
		327,
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
webpackAsyncContext.id = 179;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 180:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RegistratiPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__login_login__ = __webpack_require__(31);
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

/***/ 181:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RecuperaPasswordPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__login_login__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_email_composer__ = __webpack_require__(182);
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
            selector: 'page-recupera-password',template:/*ion-inline-start:"C:\Users\Antonio\Documents\Progetti\NISC-Manager-Final-\src\pages\recupera-password\recupera-password.html"*/'<ion-header>\n\n  <ion-navbar>\n\n    <ion-title>\n\n      Recupera Password\n\n    </ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n<ion-content padding id="page4">\n\n  <img src="assets/img/J6RhzI1UTRKQJdXpWUkV_logoneapolis.png" style="display:block;width:100%;height:auto;margin-left:auto;margin-right:auto;" />\n\n  <form id="recuperaPassword-form9">\n\n    <ion-item id="recuperaPassword-input16">\n\n      <ion-label>\n\n        Email\n\n      </ion-label>\n\n      <ion-input type="text" placeholder="" [(ngModel)]="email" [ngModelOptions]="{standalone: true}"></ion-input>\n\n    </ion-item>\n\n  </form>\n\n  <button id="recuperaPassword-button10" ion-button color="positive" block (click)="postRequest(email)">\n\n    Conferma\n\n  </button>\n\n</ion-content>'/*ion-inline-end:"C:\Users\Antonio\Documents\Progetti\NISC-Manager-Final-\src\pages\recupera-password\recupera-password.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_2__angular_http__["b" /* Http */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */], __WEBPACK_IMPORTED_MODULE_4__ionic_native_email_composer__["a" /* EmailComposer */]])
    ], RecuperaPasswordPage);
    return RecuperaPasswordPage;
}());

//# sourceMappingURL=recupera-password.js.map

/***/ }),

/***/ 184:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__login_login__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__about_about__ = __webpack_require__(108);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__mymagazzino_mymagazzino__ = __webpack_require__(122);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__richiestemateriale_richiestemateriale__ = __webpack_require__(123);
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
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */]])
    ], HomePage);
    return HomePage;
}());

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 226:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(227);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(248);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 248:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_component__ = __webpack_require__(306);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_login_login__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_registrati_registrati__ = __webpack_require__(180);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_recupera_password_recupera_password__ = __webpack_require__(181);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__angular_common_http__ = __webpack_require__(43);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__angular_http__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_home_home__ = __webpack_require__(184);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_about_about__ = __webpack_require__(108);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_dettagliarticoli_dettagliarticoli__ = __webpack_require__(45);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__pages_mymagazzino_mymagazzino__ = __webpack_require__(122);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__pages_home_amm_home_amm__ = __webpack_require__(56);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__pages_gestione_registrazione_gestione_registrazione__ = __webpack_require__(119);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__pages_elimina_magazzini_admin_elimina_magazzini_admin__ = __webpack_require__(112);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__pages_gestione_articoli_admin_gestione_articoli_admin__ = __webpack_require__(113);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__pages_gestione_magazzini_admin_gestione_magazzini_admin__ = __webpack_require__(116);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__pages_inserisci_modifica_magazzino_inserisci_modifica_magazzino__ = __webpack_require__(117);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__pages_home_mag_home_mag__ = __webpack_require__(124);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__ionic_native_status_bar__ = __webpack_require__(224);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__ionic_native_email_composer__ = __webpack_require__(182);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__ionic_native_splash_screen__ = __webpack_require__(225);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__ionic_storage__ = __webpack_require__(44);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__pages_gestione_magazzini_mag_gestione_magazzini_mag__ = __webpack_require__(118);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__pages_richiestemateriale_richiestemateriale__ = __webpack_require__(123);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__pages_dettaglirichiesta_dettaglirichiesta__ = __webpack_require__(110);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27__pages_gestione_utenti_gestione_utenti__ = __webpack_require__(120);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_28__pages_modifica_profilo_admin_modifica_profilo_admin__ = __webpack_require__(121);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_29__pages_profilo_admin_profilo_admin__ = __webpack_require__(125);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_30__pages_dettagli_articoli_mag_dettagli_articoli_mag__ = __webpack_require__(109);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_31__pages_elimina_articoli_elimina_articoli__ = __webpack_require__(111);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_32__pages_gestione_articoli_mag_gestione_articoli_mag__ = __webpack_require__(114);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_33__pages_inserisci_modifica_articolo_inserisci_modifica_articolo__ = __webpack_require__(55);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_34__pages_sposta_articoli_mag_sposta_articoli_mag__ = __webpack_require__(115);
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
                __WEBPACK_IMPORTED_MODULE_29__pages_profilo_admin_profilo_admin__["a" /* ProfiloAdminPage */],
                __WEBPACK_IMPORTED_MODULE_30__pages_dettagli_articoli_mag_dettagli_articoli_mag__["a" /* DettagliArticoliMagPage */],
                __WEBPACK_IMPORTED_MODULE_31__pages_elimina_articoli_elimina_articoli__["a" /* EliminaArticoliPage */],
                __WEBPACK_IMPORTED_MODULE_32__pages_gestione_articoli_mag_gestione_articoli_mag__["a" /* GestioneArticoliMagPage */],
                __WEBPACK_IMPORTED_MODULE_33__pages_inserisci_modifica_articolo_inserisci_modifica_articolo__["a" /* InserisciModificaArticoloPage */],
                __WEBPACK_IMPORTED_MODULE_34__pages_sposta_articoli_mag_sposta_articoli_mag__["a" /* SpostaArticoliMagPage */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_7__angular_common_http__["b" /* HttpClientModule */],
                __WEBPACK_IMPORTED_MODULE_8__angular_http__["c" /* HttpModule */],
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["d" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */], {}, {
                    links: [
                        { loadChildren: '../pages/about/about.module#AboutPageModule', name: 'AboutPage', segment: 'about', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/dettagli-articoli-mag/dettagli-articoli-mag.module#DettagliArticoliMagPageModule', name: 'DettagliArticoliMagPage', segment: 'dettagli-articoli-mag', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/dettagliarticoli/dettagliarticoli.module#DettagliPageModule', name: 'DettagliPage', segment: 'dettagliarticoli', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/dettaglirichiesta/dettaglirichiesta.module#DettagliRichiestaPageModule', name: 'DettagliRichiestaPage', segment: 'dettaglirichiesta', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/elimina-articoli/elimina-articoli.module#EliminaArticoliPageModule', name: 'EliminaArticoliPage', segment: 'elimina-articoli', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/elimina-magazzini-admin/elimina-magazzini-admin.module#EliminaMagazziniAdminPageModule', name: 'EliminaMagazziniAdminPage', segment: 'elimina-magazzini-admin', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/gestione-articoli-admin/gestione-articoli-admin.module#GestioneArticoliAdminPageModule', name: 'GestioneArticoliAdminPage', segment: 'gestione-articoli-admin', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/gestione-articoli-mag/gestione-articoli-mag.module#GestioneArticoliMagPageModule', name: 'GestioneArticoliMagPage', segment: 'gestione-articoli-mag', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/gestione-magazzini-admin/gestione-magazzini-admin.module#GestioneMagazziniAdminPageModule', name: 'GestioneMagazziniAdminPage', segment: 'gestione-magazzini-admin', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/gestione-magazzini-mag/gestione-magazzini-mag.module#GestioneMagazziniMagPageModule', name: 'GestioneMagazziniMagPage', segment: 'gestione-magazzini-mag', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/gestione-registrazione/gestione-registrazione.module#GestioneRegistrazionePageModule', name: 'GestioneRegistrazionePage', segment: 'gestione-registrazione', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/gestione-utenti/gestione-utenti.module#GestioneUtentiPageModule', name: 'GestioneUtentiPage', segment: 'gestione-utenti', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/home-amm/home-amm.module#HomeAmmPageModule', name: 'HomeAmmPage', segment: 'home-amm', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/home-mag/home-mag.module#HomeMagPageModule', name: 'HomeMagPage', segment: 'home-mag', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/inserisci-modifica-articolo/inserisci-modifica-articolo.module#InserisciModificaArticoloPageModule', name: 'InserisciModificaArticoloPage', segment: 'inserisci-modifica-articolo', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/inserisci-modifica-magazzino/inserisci-modifica-magazzino.module#InserisciModificaMagazzinoPageModule', name: 'InserisciModificaMagazzinoPage', segment: 'inserisci-modifica-magazzino', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/modifica-profilo-admin/modifica-profilo-admin.module#ModificaProfiloAdminPageModule', name: 'ModificaProfiloAdminPage', segment: 'modifica-profilo-admin', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/mymagazzino/mymagazzino.module#MymagazzinoPageModule', name: 'MymagazzinoPage', segment: 'mymagazzino', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/profilo-admin/profilo-admin.module#ProfiloAdminPageModule', name: 'ProfiloAdminPage', segment: 'profilo-admin', priority: 'low', defaultHistory: [] },
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
                __WEBPACK_IMPORTED_MODULE_29__pages_profilo_admin_profilo_admin__["a" /* ProfiloAdminPage */],
                __WEBPACK_IMPORTED_MODULE_30__pages_dettagli_articoli_mag_dettagli_articoli_mag__["a" /* DettagliArticoliMagPage */],
                __WEBPACK_IMPORTED_MODULE_31__pages_elimina_articoli_elimina_articoli__["a" /* EliminaArticoliPage */],
                __WEBPACK_IMPORTED_MODULE_32__pages_gestione_articoli_mag_gestione_articoli_mag__["a" /* GestioneArticoliMagPage */],
                __WEBPACK_IMPORTED_MODULE_33__pages_inserisci_modifica_articolo_inserisci_modifica_articolo__["a" /* InserisciModificaArticoloPage */],
                __WEBPACK_IMPORTED_MODULE_34__pages_sposta_articoli_mag_sposta_articoli_mag__["a" /* SpostaArticoliMagPage */]
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

/***/ 306:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(224);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(225);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_login_login__ = __webpack_require__(31);
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

/***/ 31:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__registrati_registrati__ = __webpack_require__(180);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__recupera_password_recupera_password__ = __webpack_require__(181);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__home_home__ = __webpack_require__(184);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_http__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__home_amm_home_amm__ = __webpack_require__(56);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__home_mag_home_mag__ = __webpack_require__(124);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__ionic_storage__ = __webpack_require__(44);
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
                    _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_6__home_amm_home_amm__["a" /* HomeAmmPage */], _this.utenti[0]);
                    _this.str.set('email', _this.utenti[0].email);
                    _this.str.set('password', _this.utenti[0].password);
                }
                else if (_this.dati_server[0].stato == 'approvato') {
                    console.log(_this.dati_server[0].stato);
                    if (_this.dati_server[0].ruolo == 'Magazziniere') {
                        _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_7__home_mag_home_mag__["a" /* HomeMagPage */], _this.utenti[0]);
                        _this.str.set('email', _this.utenti[0].email);
                        _this.str.set('password', _this.utenti[0].password);
                    }
                    if (_this.dati_server[0].ruolo == 'Richiedente') {
                        _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_4__home_home__["a" /* HomePage */]);
                        _this.str.set('email', _this.utenti[0].email);
                        _this.str.set('password', _this.utenti[0].password);
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

/***/ 45:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DettagliPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
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

/***/ }),

/***/ 55:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return InserisciModificaArticoloPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__(12);
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
    function InserisciModificaArticoloPage(navCtrl, navParams, http, alertCtrl) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.http = http;
        this.alertCtrl = alertCtrl;
        this.titolo_pagina = "";
        var headers = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Headers */]();
        headers.append('Content-Type', 'application/x-www-form-urlencoded');
        var options = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["d" /* RequestOptions */]({ headers: headers });
        if (navParams.data[0] == "inserisci") {
            this.magazzino = this.navParams.data[1];
            this.titolo_pagina = "Inserisci articolo";
            var postParams = {};
            this.http.post("http://niscmanager.altervista.org/get_info_articoli.php", JSON.stringify(postParams), options)
                .subscribe(function (data) {
                _this.dati_server = JSON.parse(data['_body']);
                if (_this.dati_server != null) {
                    _this.next_id = _this.dati_server;
                    _this.next_id++;
                }
            });
            this.articolo = new Articolo(null, null, null, null, null);
        }
        else {
            this.titolo_pagina = "Modifica articolo";
            this.articolo = navParams.data;
            this.next_id = this.articolo.id;
            this.magazzino = this.articolo.nome_magazzino;
            console.log(this.articolo.nome);
        }
    }
    InserisciModificaArticoloPage.prototype.salva = function (nome, quantita, descrizione, magazzino) {
        var _this = this;
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
            selector: 'page-inserisci-modifica-articolo',template:/*ion-inline-start:"C:\Users\Antonio\Documents\Progetti\NISC-Manager-Final-\src\pages\inserisci-modifica-articolo\inserisci-modifica-articolo.html"*/'<ion-header>\n\n  <ion-navbar color="danger">\n    <ion-title>{{ titolo_pagina }}</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding style="background-color:rgb(205, 241, 245);">\n  <ion-grid>\n      <ion-row>\n          <ion-item>\n            <p>ID: {{next_id}}</p>\n          </ion-item>\n        </ion-row>\n    <ion-row>\n      <ion-item>\n        <ion-label stacked>Nome</ion-label>\n        <ion-input #nome type="text" value={{articolo.nome}}></ion-input>\n      </ion-item>\n    </ion-row>\n    <ion-row>\n      <ion-item>\n        <ion-label stacked>Quantità</ion-label>\n        <ion-input #quantita type="number" value={{articolo.quantita}}></ion-input>\n      </ion-item>\n    </ion-row>\n    <ion-row>\n      <ion-item>\n        <ion-label stacked>Descrizione</ion-label>\n        <ion-input #descrizione type="text" value={{articolo.descrizione}}></ion-input>\n      </ion-item>\n    </ion-row>\n    <ion-row>\n      <ion-item>\n          <p #mag>Magazzino: {{magazzino}}</p>\n      </ion-item>\n    </ion-row>\n    \n  </ion-grid>\n\n  <p align=\'center\'>\n    <button ion-button color="secondary" round (click)=\'salva(nome.value,quantita.value,descrizione.value,magazzino)\'>Salva</button>\n  </p>\n\n</ion-content>'/*ion-inline-end:"C:\Users\Antonio\Documents\Progetti\NISC-Manager-Final-\src\pages\inserisci-modifica-articolo\inserisci-modifica-articolo.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__angular_http__["b" /* Http */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */]])
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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__login_login__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__gestione_registrazione_gestione_registrazione__ = __webpack_require__(119);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__gestione_magazzini_admin_gestione_magazzini_admin__ = __webpack_require__(116);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__gestione_utenti_gestione_utenti__ = __webpack_require__(120);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__profilo_admin_profilo_admin__ = __webpack_require__(125);
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
        this.utente = new Utente(navParams.data.email, navParams.data.password, navParams.data.nome_s, 0, navParams.data.stato, navParams.data.ruolo);
        console.log(this.utente);
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
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_6__profilo_admin_profilo_admin__["a" /* ProfiloAdminPage */], this.utente);
    };
    HomeAmmPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-home-amm',template:/*ion-inline-start:"C:\Users\Antonio\Documents\Progetti\NISC-Manager-Final-\src\pages\home-amm\home-amm.html"*/'<ion-header color="royal">\n  <ion-navbar color="royal" >\n    <ion-title>Home Richiedente</ion-title>\n    <ion-buttons end>\n      <button ion-button icon-only color="royal" (click)=\'logout()\'>\n        <ion-icon name="logout"><img src="assets/img/logout.png" class="dimensioni"> </ion-icon>\n      </button>\n    </ion-buttons>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding >\n<p>\n<img src="assets/img/logo1.gif"/>\n</p>\n\n<ion-grid>\n  <ion-row>\n    <ion-col>\n    <img src="assets/amm/Profilo.PNG" (click)="goToProfilo()"/>\n   </ion-col>\n   <ion-col> \n   <img src="assets/amm/Gestione_Reg.PNG" (click)="goToGestioneRegistrazioni()"/>\n  </ion-col>\n  </ion-row>\n  <br/>\n  <ion-row>\n      <ion-col>\n      <img src="assets/amm/Gestione_Utente.PNG" (click)="goToGestioneUtenti()"/>\n     </ion-col>\n     <ion-col> \n     <img src="assets/amm/Gestione_Magazzini.PNG" (click)="viewMagazzini()"/>\n    </ion-col>\n    </ion-row>\n\n</ion-grid>\n\n</ion-content>\n'/*ion-inline-end:"C:\Users\Antonio\Documents\Progetti\NISC-Manager-Final-\src\pages\home-amm\home-amm.html"*/,
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

},[226]);
//# sourceMappingURL=main.js.map