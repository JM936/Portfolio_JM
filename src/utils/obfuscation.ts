/**
 * Utilitário de ofuscação em Base64 para proteção de dados de contato contra bots (scrapers).
 * Evita a captura de e-mails, telefones e links de comunicação por robôs de spam automatizados.
 */

const OBFUSCATED_EMAIL = "anVsaW9tYWxvODExQG91dGxvb2suY29t"; // juliomalo811@outlook.com
const OBFUSCATED_PHONE = "KzI0NCA5MzYgOTE4IDE3Mg=="; // +244 936 918 172
const OBFUSCATED_WHATSAPP = "aHR0cHM6Ly93YS5tZS8yNDQ5MzY5MTgxNzI="; // https://wa.me/244936918172

export const getDecodedEmail = (): string => {
  return typeof window !== 'undefined' ? window.atob(OBFUSCATED_EMAIL) : '';
};

export const getDecodedPhone = (): string => {
  return typeof window !== 'undefined' ? window.atob(OBFUSCATED_PHONE) : '';
};

export const getDecodedWhatsApp = (): string => {
  return typeof window !== 'undefined' ? window.atob(OBFUSCATED_WHATSAPP) : '';
};
