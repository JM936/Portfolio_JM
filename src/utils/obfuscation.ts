/**
 * Utilitário para centralização e proteção de dados de contato contra bots (scrapers).
 * Evita a captura estática direta de e-mails, telefones e links de comunicação.
 */

const EMAIL_PARTS = ['juliomalo811', 'outlook.com'];
const PHONE_PARTS = ['+244', '936', '918', '172'];
const WHATSAPP_RAW = '244936918172';

export const getDecodedEmail = (): string => {
  return EMAIL_PARTS.join('@');
};

export const getDecodedPhone = (): string => {
  return PHONE_PARTS.join(' ');
};

export const getWhatsAppPhone = (): string => {
  return WHATSAPP_RAW;
};

export const getDecodedWhatsApp = (): string => {
  return `https://wa.me/${WHATSAPP_RAW}`;
};

