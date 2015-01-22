// @class Editor for Instagram widgets

function AposTocWidgetEditor(options) {
  var self = this;

  self.type = 'toc';
  options.template = '.apos-instagram-editor';

  AposWidgetEditor.call(self, options);

  // // What are these doing?
  // self.preSave = getPosts;

  self.afterCreatingEl = function() {
    // What If I don't need an EL?
    
    self.$userName = self.$el.find('[name="instagramUsername"]');
    self.$userName.val(self.data.userName);
    self.$hashTag = self.$el.find('[name="instagramHashtag"]');
    self.$hashTag.val(self.data.hashTag);
    self.$limit = self.$el.find('[name="instagramLimit"]');
    self.$limit.val(self.data.limit || 10);
    setTimeout(function() {
      self.$userName.focus();
      //self.$pageUrl.setSelection(0, 0);
    }, 500);
  };


  self.preSave = function(callback) {
    //What do I need to do?
  }


}

AposTocWidgetEditor.label = 'Table of Contents';

apos.addWidgetType('toc');
