window.$ = require('jquery');
window._ = require('underscore');
window.Backbone = require('backbone');
window.App = {
  Models: {},
  Collections: {}
}
App.Models.Board = require('./models/board_model'),
App.Collections.Board = require('./collections/board_collection')

window.app = angular.module('app', [])
.controller('BoardController', require('./controllers/board_controller'))
.controller('NavigationController', require('./controllers/navigation_controller'))
