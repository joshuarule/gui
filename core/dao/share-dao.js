"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var abstract_dao_1 = require('./abstract-dao');
var ShareDao = (function (_super) {
    __extends(ShareDao, _super);
    function ShareDao() {
        _super.call(this, 'Share');
    }
    return ShareDao;
}(abstract_dao_1.AbstractDao));
exports.ShareDao = ShareDao;
