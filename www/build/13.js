webpackJsonp([13],{

/***/ 307:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DettagliRichiestaPageModule", function() { return DettagliRichiestaPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__dettaglirichiesta__ = __webpack_require__(308);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var DettagliRichiestaPageModule = (function () {
    function DettagliRichiestaPageModule() {
    }
    DettagliRichiestaPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__dettaglirichiesta__["a" /* DettagliRichiestaPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__dettaglirichiesta__["a" /* DettagliRichiestaPage */]),
            ],
        })
    ], DettagliRichiestaPageModule);
    return DettagliRichiestaPageModule;
}());

//# sourceMappingURL=dettaglirichiesta.module.js.map

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

/***/ })

});
//# sourceMappingURL=13.js.map