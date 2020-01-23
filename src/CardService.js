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

var Section = function(options){
  var newSection = CardService.newCardSection();
  if(options.title) newSection.setHeader(options.title);
  if(options.collapsible) newSection.setCollapsible(options.collapsible);
  if(options.widgets) {
    if(!Array.isArray(options.widgets)) options.widgets = [options.widgets];
    options.widgets.forEach(function(widget){ newSection.addWidget(widget) })
  } else if(options.text) newSection.addWidget(this.TextParagraph({'text':options.text}));
  return newSection;
};

var TextParagraph = function (options){
  var newTextParagraph = CardService.newTextParagraph();
  if(options.text) newTextParagraph.setText(options.text);
  return newTextParagraph;
};
