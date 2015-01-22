var extend = require('extend');
var _ = require('lodash');
var chalk = require('chalk');

module.exports = function(options, callback) {
  return new Construct(options, callback);
};

module.exports.Construct = Construct;

function Construct(options, callback) {
  var apos = options.apos;
  var app = options.app;

  var self = this;
  self._apos = apos;
  self._app = app;


  self._apos.mixinModuleAssets(self, 'toc', __dirname, options);

  // This widget should be part of the default set of widgets for areas
  // (this isn't mandatory)
  apos.defaultControls.push('toc');

  // Include our editor template in the markup when aposTemplates is called

  // I'm not sure there's an editing interface needed for it at this point.
  self.pushAsset('template', 'tocEditor', { when: 'user' });
  self.pushAsset('template', 'toc', { when: 'always' });

  // Make sure that aposScripts and aposStylesheets summon our assets

  // We need the editor for RSS feeds. (TODO: consider separate script lists for
  // resources needed also by non-editing users.)
  self.pushAsset('script', 'editor', { when: 'user' });
  self.pushAsset('script', 'toc.min', { when: 'always' });
  self.pushAsset('script', 'content', { when: 'always' });
  self.pushAsset('stylesheet', 'content', { when: 'always' });

  self.widget = true;
  self.label = options.label || 'Table of Contents';
  self.css = options.css || 'toc';
  self.icon = options.icon || 'icon-ul';

  // Do I even need to do anything on the server for this?

  self.renderWidget = function(data) {
    return self.render('toc', data);
  };

  self._apos.addWidgetType('toc', self);

  return setImmediate(function() { return callback(null); });
}
