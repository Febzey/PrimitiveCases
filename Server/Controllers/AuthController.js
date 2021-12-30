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

exports.getAdminRoute = (request, res) => {

    try {
        res.send({
            admin:true 
        });

    }

    catch (error) {
        console.log("Not an admin", error);
    }


}