const url = require("url");

function expressCallback(controller) {
  return (req, res) => {
    const query = url.parse(req.url, true).query;
    const request = {
      body: req.body,
      userId: req?.userId,
      params: req.params,
      query
    };
    controller(request)
      .then((response) => {
        if (response.redirect) {
          res.redirect(response.redirect);
          return;
        }
        res.status(response.statusCode).send(response.response);
      })
      .catch((error) => {
        console.log(error);
        res.status(500).send({
          error: "Server error",
          msg: "Internal server error occurred"
        });
      });
  };
}

module.exports = expressCallback;
