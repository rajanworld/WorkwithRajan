export function validateEnvVars() {
  const required = [
    'RESEND_API_KEY',
    'CONTACT_EMAIL',
    'NEXT_PUBLIC_CLARITY_ID'
  ];

  for (const var_name of required) {
    if (!process.env[var_name]) {
      throw new Error(`Missing required environment variable: ${var_name}`);
    }
  }
}
