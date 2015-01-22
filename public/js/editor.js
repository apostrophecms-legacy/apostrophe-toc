// @class Editor for Instagram widgets

function AposTocWidgetEditor(options) {
  var self = this;

  self.type = 'toc';
  options.template = '.apos-toc-editor';

  AposWidgetEditor.call(self, options);

  // // What are these doing?
  // self.preSave = getPosts;

  // self.afterCreatingEl = function() {
  //   // What If I don't need an EL?
  //   console.log("The $el is", self.$el);
  // };


  self.preSave = function(callback) {
    //What do I need to do?
    self.exists = true;
    callback();
  }


}

AposTocWidgetEditor.label = 'Table of Contents';

apos.addWidgetType('toc');
