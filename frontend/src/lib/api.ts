// src/lib/api.ts

// Em produção, use a mesma URL do app (API e frontend servidos pelo mesmo servidor)
// Em desenvolvimento, use localhost:5001 para o backend local
export const API_CONFIG = {
  baseURL: import.meta.env.VITE_API_URL || 
           (import.meta.env.PROD ? '' : 'http://localhost:3000'),
  adminKey: import.meta.env.VITE_API_ADMIN_KEY || 'admin123'
};

export const apiEndpoints = {
  leads: `${API_CONFIG.baseURL}/api/leads`,
  remainingSpots: `${API_CONFIG.baseURL}/api/remaining-spots`
};

export interface LeadRequest {
  email: string;
  name?: string;
}

export interface LeadResponse {
  message: string;
  remaining_spots: number;
  lead_id: number;
}

export interface RemainingSpots {
  remaining_spots: number;
} 