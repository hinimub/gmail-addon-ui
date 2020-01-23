gmail-addon-ui
===

An UI library for Gmail Add-on.

## Sample
![demo](https://user-images.githubusercontent.com/23465103/72988343-69f0df80-3e2f-11ea-8534-846e184067a7.png)
```js
function buildAddOn(e){
  var text1 = CardService.newTextParagraph().setText("TextParagraph-1");
  var text2 = CardService.newTextParagraph().setText("TextParagraph-2");

  var cardSection1 = CardService.newCardSection()
    .setHeader("Section-1")
    .addWidget(text1)

  var cardSection2 = CardService.newCardSection()
    .setHeader("Section-2")
    .addWidget(text1)
    .addWidget(text2)

  var card = CardService.newCardBuilder()
    .addSection(cardSection1)
    .addSection(cardSection2)
    .build();

  return card;
}  
```
Above code can be rewritten using this library:
```js
function buildAddOn(e){
  var text1 = ui.TextParagraph({text:'TextParagraph-1'});
  var text2 = ui.TextParagraph({text:'TextParagraph-2'});

  var cardSection1 = ui.CardSection({
    header: 'Section-1',
    widgets: text1
  });
  var cardSection2 = ui.CardSection({
    header: 'Section-2',
    widgets: [text1, text2]
  });

  var card = ui.Card({sections:[cardSection1, cardSection2]});

  return card;
}
