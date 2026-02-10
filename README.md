# Rayyan Windows - Backend (Flask)

Contact form mail API using Flask and SMTP.

## Setup

1. Create virtual environment:
   ```bash
   python -m venv venv
   venv\Scripts\activate   # Windows
   # source venv/bin/activate  # Mac/Linux
   ```

2. Install dependencies:
   ```bash
   pip install -r requirements.txt
   ```

3. Copy `.env.example` to `.env` and add your SMTP credentials:
   ```bash
   copy .env.example .env   # Windows
   # cp .env.example .env   # Mac/Linux
   ```

4. For Gmail, use [App Password](https://myaccount.google.com/apppasswords):
   - SMTP_HOST=smtp.gmail.com
   - SMTP_PORT=587
   - SMTP_USER=your-email@gmail.com
   - SMTP_PASS=your-16-char-app-password

## Run

```bash
python app.py
```

Server runs at http://localhost:5000

## API

- `POST /api/contact` - Submit contact form (JSON: name, mobile, city, projectType, windowsDoors?, additionalInfo?)
- `GET /health` - Health check
