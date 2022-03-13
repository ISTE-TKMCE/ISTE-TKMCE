const homepage=(req, res) => {
    res.render("index", {PageTitle:"ISTETKMCE"});
  };

module.exports = {
    homepage:homepage
  };