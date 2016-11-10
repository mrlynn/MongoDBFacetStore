/**
 * GET /
 * Home page.
 */
exports.index = (req, res) => {
  res.render('home', {
    title: 'Home'
  });
};

exports.teama = (req, res) => {
  res.render('teama', {
    title: 'TEAM A'
  });
}

exports.teamb = (req, res) => {
  res.render('teamb', {
    title: 'TEAM B'
  });
}

exports.teamc = (req, res) => {
  res.render('teamc', {
    title: 'TEAM C'
  });
}

exports.teamd = (req, res) => {
  res.render('teamd', {
    title: 'TEAM D'
  });
}