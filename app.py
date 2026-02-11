"""
Flask backend for Rayyan Windows & Doors - Contact Form Mail API
"""
import os
from dotenv import load_dotenv
load_dotenv()
from flask import Flask, request, jsonify
from flask_cors import CORS

app = Flask(__name__)
# Allow all origins for /api/* routes (public contact form)
CORS(app, resources={r"/api/*": {"origins": "*"}})

# SMTP Config from env
SMTP_HOST = os.getenv('SMTP_HOST', 'smtp.gmail.com')
SMTP_PORT = int(os.getenv('SMTP_PORT', '587'))
SMTP_USER = os.getenv('SMTP_USER', '')
SMTP_PASS = os.getenv('SMTP_PASS', '')
MAIL_TO = os.getenv('MAIL_TO', 'windowsrayyan@gmail.com')


def send_enquiry_to_rayyan(data):
    """Send enquiry email to Rayyan (MAIL_TO). Reply-To = client email."""
    import smtplib
    from email.mime.text import MIMEText
    from email.mime.multipart import MIMEMultipart

    if not SMTP_USER or not SMTP_PASS:
        raise ValueError('SMTP credentials not configured. Set SMTP_USER and SMTP_PASS.')

    body = f"""
New Enquiry from Rayyan Windows Website
======================================

Name: {data.get('name', '')}
Email: {data.get('email', '')}
Mobile: +91-{data.get('mobile', '')}
City: {data.get('city', '')}
Project Type: {data.get('projectType', '')}
Approx. Windows/Doors: {data.get('windowsDoors', 'N/A')}

Additional Information:
{data.get('additionalInfo', 'N/A')}

---
Sent from Rayyan Windows Contact Form
"""
    msg = MIMEMultipart()
    msg['From'] = SMTP_USER
    msg['To'] = MAIL_TO
    msg['Reply-To'] = data.get('email', SMTP_USER)
    msg['Subject'] = f"New Enquiry: {data.get('name', '')} - {data.get('city', '')}"
    msg.attach(MIMEText(body.strip(), 'plain', 'utf-8'))

    with smtplib.SMTP(SMTP_HOST, SMTP_PORT, timeout=20) as server:
        server.starttls()
        server.login(SMTP_USER, SMTP_PASS)
        server.sendmail(SMTP_USER, MAIL_TO, msg.as_string())


def send_thankyou_to_client(data):
    """Send thank you auto-reply to client's email."""
    import smtplib
    from email.mime.text import MIMEText
    from email.mime.multipart import MIMEMultipart

    client_email = data.get('email', '').strip()
    if not client_email:
        return

    body = f"""
Dear {data.get('name', '')},

Thank you for your enquiry with Rayyan Windows & Doors!

We have received your project details and our team will contact you within 24 hours. For immediate assistance, you can reach us at:
• Call / WhatsApp: +91-93601-89417, +91-70925-14039
• Email: windowsrayyan@gmail.com

Best regards,
Rayyan Windows & Doors
Tenkasi
"""
    msg = MIMEMultipart()
    msg['From'] = SMTP_USER
    msg['To'] = client_email
    msg['Subject'] = "Thank you for your enquiry - Rayyan Windows & Doors"
    msg.attach(MIMEText(body.strip(), 'plain', 'utf-8'))

    with smtplib.SMTP(SMTP_HOST, SMTP_PORT, timeout=20) as server:
        server.starttls()
        server.login(SMTP_USER, SMTP_PASS)
        server.sendmail(SMTP_USER, client_email, msg.as_string())


@app.route('/api/contact', methods=['POST'])
def contact_submit():
    """Handle contact form submission and send email via SMTP."""
    try:
        data = request.get_json() or {}
        required = ['name', 'email', 'mobile', 'city', 'projectType']
        for field in required:
            if not data.get(field):
                return jsonify({'success': False, 'message': f'Missing required field: {field}'}), 400

        payload = {
            'name': data.get('name', ''),
            'email': data.get('email', '').strip(),
            'mobile': data.get('mobile', ''),
            'city': data.get('city', ''),
            'projectType': data.get('projectType', ''),
            'windowsDoors': data.get('windowsDoors', ''),
            'additionalInfo': data.get('additionalInfo', ''),
        }
        send_enquiry_to_rayyan(payload)
        try:
            send_thankyou_to_client(payload)
        except Exception:
            pass  # Enquiry sent; thank-you mail optional
        return jsonify({'success': True, 'message': 'Enquiry submitted successfully. We will contact you within 24 hours.'})
    except ValueError as e:
        return jsonify({'success': False, 'message': str(e)}), 500
    except Exception as e:
        return jsonify({'success': False, 'message': 'Failed to send enquiry. Please try again or contact us directly.'}), 500


@app.route('/health', methods=['GET'])
@app.route('/api/health', methods=['GET'])
def health():
    return jsonify({'status': 'ok'})


if __name__ == '__main__':
    app.run(host='0.0.0.0', port=5000, debug=True)
