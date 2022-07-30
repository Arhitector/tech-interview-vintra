const DB_HOST = 'http://127.0.0.1:8000'
export const PUBLIC_HEALTH_HOST = `${DB_HOST}/health`;
export const AUTH_HOST = `${DB_HOST}/auth/login`;
export const AUTH_ME_HOST = `${DB_HOST}/auth/me`;

export const PRIVATE_SENSORS_HOST = `${DB_HOST}/api/v1/sensors`;