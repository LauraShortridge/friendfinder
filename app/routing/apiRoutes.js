var friendData = require("../data/friends");


module.exports = function(app) {
  
  app.get("/api/friends", function(req, res) {
    res.json(friendData);
  });


  app.post("/api/friends", function(req, res) {
    var userAnswers = req.body.scores
    console.log(userAnswers);
    var matchName = "";
    var matchPic = "";
    var totalDiff = 10000;

    for (i = 0; i < friendData.length; i ++) {
      var diff = 0;
      for (var j = 0; j < userAnswers.length; j ++) {
        diff += Math.abs(friendData[i].scores[j] - userAnswers[j]);
      }
      console.log("diff = ", diff);
      if (diff < totalDiff) {
        totalDiff = diff;
        matchName = friendData[i].name;
        matchPic = friendData[i].picture;
        console.log(matchName, matchPic);
      }
    }
    friendData.push(req.body);

    res.json({"name": matchName, "picture": matchPic});



    });


  app.post("/api/clear", function(req, res) {
    // Empty out the arrays of data
    friendData.length = [];

    res.json({ ok: true });
  });
};
