const homepage=(req, res) => {
    const events=[{name:'What an idea', source: 'assets/images/iste_tkmce_-20220129-0001.jpg', status: 'm', title:'WHAT AN IDEA', description: 'gdhfgshgfhfsjgfj', date:'', registration_link:''}]
    res.render("index", {PageTitle:"ISTETKMCE", events: events});
  };

module.exports = {
    homepage:homepage
  };