import jwt from "jsonwebtoken";

export const authMiddleware = (req, res, next) => {
    try {
        const authHeader = req.headers.authorization;

        if (!authHeader || !authHeader.startsWith("Bearer ")) {
            return res.status(401).json({
                message: "Authentication required"
            });
        }

        const accessToken = authHeader.split(" ")[1];

        const decodedUser = jwt.verify(
            accessToken,
            process.env.Secret_Access_Token
        );

        req.user = decodedUser;

        next();

    } catch (err) {
        return res.status(401).json({
            message: "Invalid or expired access token"
        });
    }
};