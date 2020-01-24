var Card = function(options){
  var newCard = CardService.newCardBuilder();
  if(options.title) newCard.setHeader(CardService.newCardHeader().setTitle(options.title));
  if(options.sections){
    if(!Array.isArray(options.sections)) options.sections = [options.sections];
    options.sections.forEach(function(section){ newCard.addSection(section) })
  } else if(options.widgets) {
    var newSection = this.Section({'widgets':options.widgets});
    newCard.addSection(newSection);
  }
  return newCard.build();
};

var CardSection = function(options){
  var newCardSection = CardService.newCardSection();
  if(options.header) newCardSection.setHeader(options.header);
  if(options.collapsible) newCardSection.setCollapsible(options.collapsible);
  if(options.widgets) {
    if(!Array.isArray(options.widgets)) options.widgets = [options.widgets];
    options.widgets.forEach(function(widget){ newCardSection.addWidget(widget) })
  } else if(options.text) newCardSection.addWidget(this.TextParagraph({'text':options.text}));
  return newCardSection;
};

var TextParagraph = function (options){
  var newTextParagraph = CardService.newTextParagraph();
  if(typeof options === 'string' || options instanceof String) newTextParagraph.setText(options);
  if(options.text) newTextParagraph.setText(options.text);
  return newTextParagraph;
};
