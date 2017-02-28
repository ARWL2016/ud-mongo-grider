module.exports = {
  greeting(req, res) {
    res.send({hi: 'there'}); 
  }, 

  create(req, res) {
    console.log(req); 
    res.send({hi: 'there'}); 
  }
};