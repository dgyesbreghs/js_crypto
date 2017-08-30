module.exports = function index(request, response) {
    if (request.query.username == "4i{K7k[MYdkaYc,M") {
        response.render('pages/index');
        return;
    }
    response.status(403);
    response.send("Unauthenticated");
}