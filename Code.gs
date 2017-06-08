function onOpen() {

  // REMOVE THIS PROMPT
  FormApp.getUi().alert('Open the script editor to get started!');
  //
  
  FormApp.getUi()
    .createAddonMenu()
    .addItem('Open Sidebar', 'openSidebar')
    .addToUi();

}

function onInstall() {
  onOpen();
}

function openSidebar() {
  var html = HtmlService.createTemplateFromFile('Sidebar')
    .evaluate();
  
  FormApp.getUi().showSidebar(html);
}