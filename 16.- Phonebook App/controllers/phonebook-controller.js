const Contact = require('../models/Contact');
const phonebook = require('../phonebook');

module.exports = {
  index: (req, res) => {
    res.render('index', {
      contacts: phonebook.getPhonebook()
    });
    
  },
  addPhonebookPost:(req, res) => {
    let ime = req.body.name;
    let brojTelefona = req.body.number;
    if(ime !== "" && brojTelefona !==""){
      let kontakt = new Contact(ime, brojTelefona);
      phonebook.addContact(kontakt);
    }

    res.redirect("/");//Vracanje na pocetnu stranicu
  }
}