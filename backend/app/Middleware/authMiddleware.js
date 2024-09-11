module.exports = async (req, res, next) => {
    try {
        /** GET TOKEN **/
        const token = req.headers["authorization"].split(" ")[1];

        JWT.verify(token, process.env.SECRET_KEY, (err, user) => {
            if (err) {
                return res.status(401).send({
                    success: false , 
                    message: 'Unauthorized user',
                });
            } 
            
            req.body.user = user;

            next();
        });
    } catch (error) {
        console.log(error);
        res.status(500).send({
            success: false,
            message: `Please Provide Auth Token - ${error.message}`,
            error
        });
    }
}