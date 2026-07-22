export function validateEnvironment(environment) {
    const production = environment.NODE_ENV === 'production';
    const errors = [];
    if (production) {
        required(environment, errors, 'DATABASE_URL');
        required(environment, errors, 'SITE_URL');
        required(environment, errors, 'WEB_ORIGIN');
        required(environment, errors, 'JWT_ACCESS_SECRET');
        if ((environment.JWT_ACCESS_SECRET?.length ?? 0) < 32) {
            errors.push('JWT_ACCESS_SECRET must contain at least 32 characters');
        }
        validateUrl(environment, errors, 'SITE_URL');
        validateUrl(environment, errors, 'WEB_ORIGIN');
    }
    const smtpConfigured = Boolean(environment.SMTP_HOST);
    if (smtpConfigured) {
        ['SMTP_USER', 'SMTP_PASSWORD', 'MAIL_FROM', 'LEAD_NOTIFICATION_TO'].forEach((key) => required(environment, errors, key));
    }
    const storageKeys = [
        'S3_BUCKET',
        'S3_ACCESS_KEY_ID',
        'S3_SECRET_ACCESS_KEY',
        'S3_PUBLIC_URL',
    ];
    const storageConfigured = storageKeys.some((key) => Boolean(environment[key]));
    if (storageConfigured) {
        storageKeys.forEach((key) => required(environment, errors, key));
        validateUrl(environment, errors, 'S3_PUBLIC_URL');
    }
    if (errors.length) {
        throw new Error(`Invalid environment configuration:\n- ${errors.join('\n- ')}`);
    }
    return environment;
}
function required(environment, errors, key) {
    if (!environment[key]?.trim()) {
        errors.push(`${key} is required`);
    }
}
function validateUrl(environment, errors, key) {
    const value = environment[key];
    if (!value) {
        return;
    }
    try {
        new URL(value);
    }
    catch {
        errors.push(`${key} must be an absolute URL`);
    }
}
//# sourceMappingURL=environment.validation.js.map