exports.getPublicRoute = (request, res) => {
    res.send({
        msg: "You called the public api route!"
    });
}

exports.getProtectedRoute = (request, res) => {
    res.send({
        msg: "You called the protected api route!"
    });
}