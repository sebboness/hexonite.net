import { grabEnvSecret } from "./api";

const HCAPTCHA_SECRET = grabEnvSecret("HCAPTCHA_SECRET");

const HCAPTCHA_ERRORS: Record<string, string> = {
    'missing-input-secret': 'HCaptcha secret key is missing',
    'invalid-input-secret': 'HCaptcha secret key is invalid or malformed',
    'missing-input-response': 'The response parameter (verification token) is missing',
    'invalid-input-response': 'The response parameter (verification token) is invalid or malformed',
    'bad-request': 'The request is invalid or malformed',
    'invalid-or-already-seen-response': 'The response parameter has already been checked, or has another issue',
    'not-using-dummy-passcode': 'Testing sitekey but have not used its matching secret',
    'sitekey-secret-mismatch': 'HCaptcha sitekey is not registered with the provided secret',
}

interface HCaptchaResponse {
    success: boolean;
    challenge_ts?: string;
    hostname?: string;
    "error-codes"?: string[];
    errors?: string[];
}

const mapErrorCodes = (resp: HCaptchaResponse): HCaptchaResponse => {
    if (!resp["error-codes"])
        return resp;

    const errors: string[] = [];
    for (const err of resp["error-codes"]) {
        if (HCAPTCHA_ERRORS[err])
            errors.push(HCAPTCHA_ERRORS[err]);
        else
            errors.push(err);
    }
    resp.errors = errors;
    return resp;
}

export const verifyHCaptcha = async (hcaptcha_token: string): Promise<HCaptchaResponse> => {
    return new Promise<HCaptchaResponse>((resolve, reject) => {
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
                (response) => response.json(),
                (error: Error) => reject(error.message || (error + ""))
            )
            .then(
                (data: HCaptchaResponse) => resolve(mapErrorCodes(data)),
                (error: unknown) => reject(error + "")
            )
            .catch((error: unknown) => reject(error + ""));
    });
};
