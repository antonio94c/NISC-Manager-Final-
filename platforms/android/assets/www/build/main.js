webpackJsonp([5],{

/***/ 103:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AboutPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common_http__ = __webpack_require__(79);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__dettagliarticoli_dettagliarticoli__ = __webpack_require__(51);
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

/***/ 104:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GestioneRegistrazionePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(13);
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
 * Generated class for the GestioneRegistrazionePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var GestioneRegistrazionePage = (function () {
    function GestioneRegistrazionePage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    GestioneRegistrazionePage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad GestioneRegistrazionePage');
    };
    GestioneRegistrazionePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-gestione-registrazione',template:/*ion-inline-start:"C:\Users\Antonio\Documents\Progetti\NISC-Manager-Final-\src\pages\gestione-registrazione\gestione-registrazione.html"*/'<!--\n  Generated template for the GestioneRegistrazionePage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>gestioneRegistrazione</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n\n</ion-content>\n'/*ion-inline-end:"C:\Users\Antonio\Documents\Progetti\NISC-Manager-Final-\src\pages\gestione-registrazione\gestione-registrazione.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */]])
    ], GestioneRegistrazionePage);
    return GestioneRegistrazionePage;
}());

//# sourceMappingURL=gestione-registrazione.js.map

/***/ }),

/***/ 105:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomeAmmPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__login_login__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__gestione_registrazione_gestione_registrazione__ = __webpack_require__(104);
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
    HomeAmmPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad HomeAmmPage');
    };
    HomeAmmPage.prototype.logout = function () {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_2__login_login__["a" /* LoginPage */]);
    };
    HomeAmmPage.prototype.goToGestioneRegistrazioni = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__gestione_registrazione_gestione_registrazione__["a" /* GestioneRegistrazionePage */]);
    };
    HomeAmmPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-home-amm',template:/*ion-inline-start:"C:\Users\Antonio\Documents\Progetti\NISC-Manager-Final-\src\pages\home-amm\home-amm.html"*/'<ion-header color="royal">\n  <ion-navbar color="royal" >\n    <ion-title>Home Richiedente</ion-title>\n    <ion-buttons end>\n      <button ion-button icon-only color="royal" (click)=\'logout()\'>\n        <ion-icon name="logout"><img src="assets/img/logout.png" class="dimensioni"> </ion-icon>\n      </button>\n    </ion-buttons>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding >\n<p>\n<img src="assets/img/logo1.gif"/>\n</p>\n\n<ion-grid>\n  <ion-row>\n    <ion-col>\n    <img src="assets/amm/Profilo.PNG"/>\n   </ion-col>\n   <ion-col> \n   <img src="assets/amm/Gestione_Reg.PNG" (click)="goToGestioneRegistrazioni()"/>\n  </ion-col>\n  </ion-row>\n  <br/>\n  <ion-row>\n      <ion-col>\n      <img src="assets/amm/Gestione_Utente.PNG"/>\n     </ion-col>\n     <ion-col> \n     <img src="assets/amm/Gestione_Magazzini.PNG"/>\n    </ion-col>\n    </ion-row>\n\n</ion-grid>\n\n</ion-content>\n'/*ion-inline-end:"C:\Users\Antonio\Documents\Progetti\NISC-Manager-Final-\src\pages\home-amm\home-amm.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */]])
    ], HomeAmmPage);
    return HomeAmmPage;
}());

//# sourceMappingURL=home-amm.js.map

/***/ }),

/***/ 106:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MymagazzinoPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common_http__ = __webpack_require__(79);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__dettagliarticoli_dettagliarticoli__ = __webpack_require__(51);
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

/***/ 119:
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
webpackEmptyAsyncContext.id = 119;

/***/ }),

/***/ 161:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/about/about.module": [
		286,
		4
	],
	"../pages/dettagliarticoli/dettagliarticoli.module": [
		290,
		3
	],
	"../pages/gestione-registrazione/gestione-registrazione.module": [
		287,
		2
	],
	"../pages/home-amm/home-amm.module": [
		288,
		1
	],
	"../pages/mymagazzino/mymagazzino.module": [
		289,
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
webpackAsyncContext.id = 161;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 162:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RegistratiPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__(80);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__login_login__ = __webpack_require__(41);
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

/***/ 163:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RecuperaPasswordPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(13);
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

/***/ 164:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__login_login__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__about_about__ = __webpack_require__(103);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__mymagazzino_mymagazzino__ = __webpack_require__(106);
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
    HomePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-home',template:/*ion-inline-start:"C:\Users\Antonio\Documents\Progetti\NISC-Manager-Final-\src\pages\home\home.html"*/'<ion-header color="royal">\n\n  <ion-navbar color="royal" >\n\n    <ion-title>Home Richiedente</ion-title>\n\n    <ion-buttons end>\n\n      <button ion-button icon-only color="royal" (click)=\'logout()\'>\n\n        <ion-icon name="logout"><img src="assets/img/logout.png" class="dimensioni"> </ion-icon>\n\n      </button>\n\n    </ion-buttons>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content padding >\n\n<p>\n\n<img src="assets/img/logo1.gif"/>\n\n\n\n</p>\n\n<p>\n\n\n\n</p>\n\n\n\n<ion-content class="card-background-page">\n\n<p>\n\n  <ion-card  (click)=\'viewCatalogo()\'>\n\n    <img src="assets/img/icona-catalogo3.png"/>\n\n    <div class="card-title">Catalogo Articoli</div>\n\n    <div class="card-subtitle"></div>\n\n  </ion-card>\n\n\n\n  <ion-card (click)=\'viewMagazzino()\'>\n\n    <img src="assets/img/magazzino.jpg"/>\n\n    <div class="card-title">MyMagazzino</div>\n\n    <div class="card-subtitle"></div>\n\n  </ion-card>\n\n\n\n  <ion-card>\n\n    <img src="assets/img/richieste.jpg"/>\n\n    <div class="card-title">Gestisci richieste</div>\n\n    <div class="card-subtitle"></div>\n\n  </ion-card>\n\n\n\n  <ion-card>\n\n    <img src="assets/img/squadra.jpg"/>\n\n    <div class="card-title">Profilo Squadra</div>\n\n    <div class="card-subtitle"></div>\n\n  </ion-card>\n\n</p>\n\n\n\n</ion-content>\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\Antonio\Documents\Progetti\NISC-Manager-Final-\src\pages\home\home.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */]])
    ], HomePage);
    return HomePage;
}());

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 208:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(209);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(230);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 230:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_component__ = __webpack_require__(277);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_login_login__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_registrati_registrati__ = __webpack_require__(162);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_recupera_password_recupera_password__ = __webpack_require__(163);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__angular_common_http__ = __webpack_require__(79);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__angular_http__ = __webpack_require__(80);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_home_home__ = __webpack_require__(164);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_about_about__ = __webpack_require__(103);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_dettagliarticoli_dettagliarticoli__ = __webpack_require__(51);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__pages_mymagazzino_mymagazzino__ = __webpack_require__(106);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__pages_home_amm_home_amm__ = __webpack_require__(105);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__pages_gestione_registrazione_gestione_registrazione__ = __webpack_require__(104);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__ionic_native_status_bar__ = __webpack_require__(204);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__ionic_native_splash_screen__ = __webpack_require__(207);
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
                __WEBPACK_IMPORTED_MODULE_14__pages_gestione_registrazione_gestione_registrazione__["a" /* GestioneRegistrazionePage */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_7__angular_common_http__["b" /* HttpClientModule */],
                __WEBPACK_IMPORTED_MODULE_8__angular_http__["c" /* HttpModule */],
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["d" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */], {}, {
                    links: [
                        { loadChildren: '../pages/about/about.module#AboutPageModule', name: 'AboutPage', segment: 'about', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/gestione-registrazione/gestione-registrazione.module#GestioneRegistrazionePageModule', name: 'GestioneRegistrazionePage', segment: 'gestione-registrazione', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/home-amm/home-amm.module#HomeAmmPageModule', name: 'HomeAmmPage', segment: 'home-amm', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/mymagazzino/mymagazzino.module#MymagazzinoPageModule', name: 'MymagazzinoPage', segment: 'mymagazzino', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/dettagliarticoli/dettagliarticoli.module#DettagliPageModule', name: 'DettagliPage', segment: 'dettagliarticoli', priority: 'low', defaultHistory: [] }
                    ]
                })
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
                __WEBPACK_IMPORTED_MODULE_14__pages_gestione_registrazione_gestione_registrazione__["a" /* GestioneRegistrazionePage */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_15__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_16__ionic_native_splash_screen__["a" /* SplashScreen */],
                { provide: __WEBPACK_IMPORTED_MODULE_0__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicErrorHandler */] }
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 277:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(204);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(207);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_login_login__ = __webpack_require__(41);
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

/***/ 41:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__registrati_registrati__ = __webpack_require__(162);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__recupera_password_recupera_password__ = __webpack_require__(163);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__home_home__ = __webpack_require__(164);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_http__ = __webpack_require__(80);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__home_amm_home_amm__ = __webpack_require__(105);
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
                _this.utenti.push(new Utente(_this.dati_server[0].email, _this.dati_server[0].password, _this.dati_server[0].nome_s, _this.dati_server[0].componenti, _this.dati_server[0].stato));
                if (_this.dati_server[0].stato == 'approvato')
                    _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_4__home_home__["a" /* HomePage */]);
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
            selector: 'page-page',template:/*ion-inline-start:"C:\Users\Antonio\Documents\Progetti\NISC-Manager-Final-\src\pages\login\login.html"*/'<ion-header>\n\n  <ion-navbar>\n\n    <ion-title>\n\n      Login\n\n    </ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n<ion-content padding id="page1">\n\n  <img src="assets/img/J6RhzI1UTRKQJdXpWUkV_logoneapolis.png" style="display:block;width:100%;height:auto;margin-left:auto;margin-right:auto;" />\n\n  <form id="page-form2">\n\n    <ion-item id="page-input2">\n\n      <ion-label>\n\n        USER_ID\n\n      </ion-label>\n\n      <ion-input type="text" placeholder="" [(ngModel)]="user_id" [ngModelOptions]="{standalone: true}"></ion-input>\n\n    </ion-item>\n\n    <ion-item id="page-input4">\n\n      <ion-label>\n\n        Password\n\n      </ion-label>\n\n      <ion-input type="password" placeholder="" [(ngModel)]="password" [ngModelOptions]="{standalone: true}"></ion-input>\n\n    </ion-item>\n\n    <ion-item><a (click)=\'recuperaPassword()\'>Password Dimentica?</a></ion-item>\n\n  </form>\n\n  <button id="page-button1" ion-button color="positive" block (click)=\'goToHomeAmm()\'>\n\n    Login\n\n  </button>\n\n  <button id="page-button2" ion-button color="positive" block (click)=\'sign_up()\'>\n\n    Registarti\n\n  </button>\n\n</ion-content>'/*ion-inline-end:"C:\Users\Antonio\Documents\Progetti\NISC-Manager-Final-\src\pages\login\login.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_5__angular_http__["b" /* Http */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */]])
    ], LoginPage);
    return LoginPage;
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
//# sourceMappingURL=login.js.map

/***/ }),

/***/ 51:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DettagliPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(13);
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

},[208]);
//# sourceMappingURL=main.js.map