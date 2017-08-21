module.exports = function index(request, response) {
    if (request.query.username == "dgyesbreghs") {
        response.render('pages/index');
        return;
    }
    response.status(403);
    response.send("Unauthenticated");
}