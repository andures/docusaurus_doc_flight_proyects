---
sidebar_position: 7
---

# Checklists

**Checklists** is a Django web application providing compliance checklists for reviewing aeronautical charts and procedure design against ICAO standards.

**[GitHub →](https://github.com/FLYGHT7/checklists)**

## Overview

|                  |                                          |
| ---------------- | ---------------------------------------- |
| **Stack**        | HTML 47% / Python 23% / CSS 16% / JS 14% |
| **Framework**    | Django (Python)                          |
| **Database**     | PostgreSQL                               |
| **Deployment**   | Render + Supabase                        |
| **License**      | GPL-2.0                                  |
| **Contributors** | andures, flyght7-admin                   |

:::caution Development notice
This code is in development and provided as-is — it may contain errors and you are solely responsible for using it. Any feedback is welcome.
:::

## What It Does

The Checklists app provides structured, interactive checklists that procedure designers and chart producers use during quality assurance reviews. Each checklist item maps to a specific ICAO standard, helping teams ensure nothing is overlooked before submission or publication.

## Local Setup

### 1. Clone the repository

```bash
git clone https://github.com/FLYGHT7/checklists.git
cd checklists
```

### 2. Create and activate a virtual environment

```powershell
# Windows PowerShell
py -m venv .venv
.\.venv\Scripts\Activate.ps1
```

```bash
# Linux / macOS
python3 -m venv .venv
source .venv/bin/activate
```

### 3. Install dependencies

```bash
pip install --upgrade pip
pip install -r requirements.txt
```

### 4. Configure environment variables

```bash
copy .env.example .env   # Windows
cp .env.example .env     # Linux / macOS
```

Edit `.env` and set:

| Variable           | Description                                                 |
| ------------------ | ----------------------------------------------------------- |
| `SECRET_KEY`       | Required — Django secret key                                |
| `ENVIRONMENT`      | Use `development` for local work                            |
| `DATABASE_URL`     | Required when using PostgreSQL                              |
| `POSTGRES_LOCALLY` | Set `True` only for local Postgres; leave `False` otherwise |

Example local `DATABASE_URL`:

```
postgres://postgres:postgres@localhost:5432/checklists
```

### 5. Run migrations and start the server

```bash
python manage.py migrate
python manage.py runserver
```

The app will be available at **http://localhost:8000**.

## Deployment on Render

The recommended deployment target is [Render](https://render.com/) with a Supabase PostgreSQL database.

| Setting                | Value                                                  |
| ---------------------- | ------------------------------------------------------ |
| **Start Command**      | `gunicorn app_checklist.wsgi:application --log-file -` |
| **Pre-Deploy Command** | `python manage.py migrate`                             |

Required environment variables for production:

```
ENVIRONMENT=production
SECRET_KEY=<your-production-secret>
DATABASE_URL=<supabase-session-pooler-url>?sslmode=require
POSTGRES_LOCALLY=False
```

## References

- ICAO Doc 8168 PANS-OPS — Construction of Visual and Instrument Flight Procedures
- ICAO Annex 4 — Aeronautical Charts
- Django documentation: https://docs.djangoproject.com/
