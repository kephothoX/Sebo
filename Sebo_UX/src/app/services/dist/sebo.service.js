"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.SeboService = void 0;
var core_1 = require("@angular/core");
var rxjs_1 = require("rxjs");
var SeboService = /** @class */ (function () {
    function SeboService(_httpClient, _appService, _errorService) {
        this._httpClient = _httpClient;
        this._appService = _appService;
        this._errorService = _errorService;
    }
    SeboService.prototype.addNewPost = function (post) {
        return this._httpClient.post(this._appService.ConvexEndpoint + "/new-post", post).pipe(rxjs_1.catchError(this._errorService.handleError));
    };
    SeboService.prototype.addNewProfile = function (post) {
        return this._httpClient.post(this._appService.ConvexEndpoint + "/new-profile", post).pipe(rxjs_1.catchError(this._errorService.handleError));
    };
    SeboService.prototype.addNewPhoto = function (post) {
        return this._httpClient.post(this._appService.ConvexEndpoint + "/new-photo", post).pipe(rxjs_1.catchError(this._errorService.handleError));
    };
    SeboService.prototype.addNewVideo = function (post) {
        return this._httpClient.post(this._appService.ConvexEndpoint + "/new-video", post).pipe(rxjs_1.catchError(this._errorService.handleError));
    };
    SeboService.prototype.getUserProfiles = function () {
        return this._httpClient.get(this._appService.ConvexEndpoint + "/get-user-profiles").pipe(rxjs_1.catchError(this._errorService.handleError));
    };
    SeboService.prototype.addNewUser = function (user) {
        return this, this._httpClient.post(this._appService.ConvexEndpoint + "/new-user", user).pipe(rxjs_1.catchError(this._errorService.handleError));
    };
    SeboService = __decorate([
        core_1.Injectable({
            providedIn: 'root'
        })
    ], SeboService);
    return SeboService;
}());
exports.SeboService = SeboService;
