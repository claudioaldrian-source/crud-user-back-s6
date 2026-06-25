import { errorResponse } from "../helpers/response.helper.js";
const authorizeRoles = 
(...roles) =>
(req, res, next) => {
    try{
        if (!roles.includes(req.user.role)){
            return errorResponse(
                res,
                "Acceso denegado",
                403
            );
        }
        next();
            } catch (error) {
                console.error(
                    "❌ Error en authorizeRoles:",
                    error
                );
                return errorResponse(
                    res,
                    error.message || "Error interno del servicio",
                    error.statusCode || 500,
                    error.errors || null
                );
            }
             };
             export {
                authorizeRoles
             };