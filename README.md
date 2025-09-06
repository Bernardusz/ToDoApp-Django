# 📝 ToDoApp (Django + React)

A simple full-stack **ToDo App** built with **Django REST Framework** as the backend and **React** as the frontend.  
Users can add, toggle, and delete tasks — with JWT authentication.

---

## 🚀 Features
- User authentication (JWT)
- Add, delete, toggle tasks
- Persistent storage using Django backend
- React frontend for a clean UI

---

## ⚙️ Tech Stack
- **Backend**: Django, Django REST Framework
- **Frontend**: React, Axios
- **Database**: SQLite (default, can be swapped)
- **Auth**: JWT (SimpleJWT)

---

## 📂 Project Structure
```
|-- backend/ #Django Project
|  |-- manage.py
|  |-- backend/
|  |-- tasks/
|  |-- users/
|-- frontend/ #React Project
|  |-- src/
|  |-- package.json
|-- .gitignore
|-- README.md
```

## 🛠️ Setup & Installation
### 1️⃣ Backend (Django)

```bash
cd backend
python -m venv venv
source venv/bin/activate  # Windows: venv\Scripts\activate
pip install -r requirements.txt
python manage.py makemigrations
python manage.py migrate
python manage.py runserver
```

### 2️⃣ Frontend (React)
```bash
cd frontend
npm install
npm run dev
```

## ✔ Usage
1. Register a new user
2. Login to recieve JWT Token
3. Manage Tasks (Add, Toggle, Delete)

## Remember 🌠!
> *"Sometimes being confused, mean you are learning something !" - Bernardusz, made with confusion 🐧💀*