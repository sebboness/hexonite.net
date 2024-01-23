const defaultResp = (res, statusCode, status, errors, message, data) => res.status(statusCode).json({
    status,
    errors,
    message,
    data,
});

// 2xx
export const resp200OK = (res, message = "OK") => defaultResp(res, 200, "SUCCESS", [], message, null);
export const resp201Created = (res, data, message = "Created resource") => defaultResp(res, 201, "SUCCESS", [], message, data);

// 4xx
export const resp400BadRequest = (res, errors = [], message = "Bad request") => defaultResp(res, 400, "FAILURE", errors, message, null);
export const resp400InvalidInput = (res, errors = [], message = "Invalid input") => defaultResp(res, 400, "FAILURE", errors, message, null);
export const resp401Unauthorized = (res, errors = [], message = "Unauthorized") => defaultResp(res, 401, "FAILURE", errors, message, null);
export const resp404NotFound = (res, errors = [], message = "Resource not found") => defaultResp(res, 404, "FAILURE", errors, message, null);

// 5xx
export const resp500ServerError = (res, errors = [], message = "Internal server error") => defaultResp(res, 500, "FAILURE", errors, message, null);

export const escapeHtml = (s) => {
    let lookup = {
        '&': "&amp;",
        '"': "&quot;",
        '\'': "&apos;",
        '<': "&lt;",
        '>': "&gt;"
    };
    return s.replace( /[&"'<>]/g, c => lookup[c] );
}