from http.server import BaseHTTPRequestHandler
import json
import os
from datetime import datetime

# Simulação de banco de dados em memória (em produção use um banco real)
leads_db = []
remaining_spots = 97

class Handler(BaseHTTPRequestHandler):
    def do_OPTIONS(self):
        self.send_response(200)
        self.send_header('Access-Control-Allow-Origin', '*')
        self.send_header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS')
        self.send_header('Access-Control-Allow-Headers', 'Content-Type, X-Admin-Key')
        self.end_headers()

    def do_POST(self):
        global remaining_spots, leads_db
        
        try:
            # Ler dados da requisição
            content_length = int(self.headers['Content-Length'])
            post_data = self.rfile.read(content_length)
            data = json.loads(post_data.decode('utf-8'))
            
            email = data.get('email')
            name = data.get('name', '')
            
            if not email:
                self.send_error_response(400, "Email é obrigatório")
                return
            
            # Verificar se email já existe
            if any(lead['email'] == email for lead in leads_db):
                self.send_error_response(400, "Este email já está na lista")
                return
            
            # Adicionar lead
            lead = {
                "id": len(leads_db) + 1,
                "email": email,
                "name": name,
                "timestamp": datetime.now().isoformat()
            }
            
            leads_db.append(lead)
            remaining_spots = max(0, remaining_spots - 1)
            
            response = {
                "message": "Acesso exclusivo garantido",
                "remaining_spots": remaining_spots,
                "lead_id": lead["id"]
            }
            
            self.send_json_response(201, response)
            
        except Exception as e:
            self.send_error_response(500, "Erro interno")
    
    def do_GET(self):
        global leads_db
        
        # Endpoint protegido - apenas para admin
        auth_key = self.headers.get('X-Admin-Key')
        if auth_key != os.environ.get('ADMIN_KEY', 'admin123'):
            self.send_error_response(401, "Não autorizado")
            return
        
        response = {
            "leads": leads_db,
            "total": len(leads_db)
        }
        
        self.send_json_response(200, response)
    
    def send_json_response(self, status_code, data):
        self.send_response(status_code)
        self.send_header('Content-Type', 'application/json')
        self.send_header('Access-Control-Allow-Origin', '*')
        self.send_header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS')
        self.send_header('Access-Control-Allow-Headers', 'Content-Type, X-Admin-Key')
        self.end_headers()
        self.wfile.write(json.dumps(data).encode('utf-8'))
    
    def send_error_response(self, status_code, message):
        self.send_response(status_code)
        self.send_header('Content-Type', 'application/json')
        self.send_header('Access-Control-Allow-Origin', '*')
        self.send_header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS')
        self.send_header('Access-Control-Allow-Headers', 'Content-Type, X-Admin-Key')
        self.end_headers()
        self.wfile.write(json.dumps({"error": message}).encode('utf-8')) 