import { grabEnvSecret } from "./_default";

const HCAPTCHA_SECRET = grabEnvSecret("HCAPTCHA_SECRET");

const HCAPTCHA_ERRORS = {
    'missing-input-secret': 'HCaptcha secret key is missing',
    'invalid-input-secret': 'HCaptcha secret key is invalid or malformed',
    'missing-input-response': 'The response parameter (verification token) is missing',
    'invalid-input-response': 'The response parameter (verification token) is invalid or malformed',
    'bad-request': 'The request is invalid or malformed',
    'invalid-or-already-seen-response': 'The response parameter has already been checked, or has another issue',
    'not-using-dummy-passcode': 'Testing sitekey but have not used its matching secret',
    'sitekey-secret-mismatch': 'HCaptcha sitekey is not registered with the provided secret',
}

const mapErrorCodes = (resp) => {
    if (!resp["error-codes"])
        return resp;

    const errors = [];
    for (let err of resp["error-codes"]) {
        if (HCAPTCHA_ERRORS[err])
            errors.push(HCAPTCHA_ERRORS[err]);
        else
            errors.push(err);
    }
    resp.errors = errors;
    return resp;
}

export const verifyHCaptcha = async (hcaptcha_token) => {
    return new Promise((resolve, reject) => {
        const secret = encodeURIComponent(HCAPTCHA_SECRET);
        const token = encodeURIComponent(hcaptcha_token);

        fetch('https://api.hcaptcha.com/siteverify', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded',
            },
            body: `secret=${secret}&response=${token}`,
        })
            .then(
                // fetch done
                (response) => response.json(),
                (error) => reject(error.message || (error + ""))
            )
            .then(
                // response json() done
                (data) => resolve(mapErrorCodes(data)),
                (error) => reject(error + "")
            )
            .catch((error) => reject(error + ""));
    });
};