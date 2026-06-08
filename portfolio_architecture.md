# Portfolio Web System Architecture

## Tech Stack

- Frontend: HTML, CSS, JavaScript, TypeScript, React
- Backend: Next.js API Routes
- Database: PostgreSQL

---

## 1. High-Level Architecture

```
[ Client (Browser) ]
        ↓
[ React Frontend ]
        ↓
[ Next.js Backend (API Layer) ]
        ↓
[ PostgreSQL Database ]
```

---

## 2. Frontend Architecture (React)

### Responsibilities
- UI rendering (Home, About, Projects, FAQ, Contact)
- Portfolio gallery display
- Form handling (Contact form)
- API communication

### Folder Structure

/src
 ├── components
 │     ├── Navbar.tsx
 │     ├── HeroSection.tsx
 │     ├── ProjectCard.tsx
 │     ├── FAQ.tsx
 │     └── Footer.tsx
 ├── pages
 │     ├── index.tsx
 │     ├── about.tsx
 │     ├── projects.tsx
 │     ├── contact.tsx
 ├── styles
 ├── utils

---

## 3. Backend Architecture (Next.js API)

### Responsibilities
- Handle API requests
- Manage portfolio data
- Process contact forms
- CRUD operations for projects

### API Routes

/api
 ├── projects
 │     ├── GET
 │     ├── POST
 │     ├── DELETE
 ├── contact
 │     ├── POST
 ├── myprofile
 │     ├── GET

---

## 4. Database Design (PostgreSQL)

### Tables

### users (optional admin)
id | name | email | password_hash | role

### projects
id | title | description | tech_stack | image_url | github_link | live_link

### messages
id | name | email | message | created_at

---

## 5. Data Flow Example

1. React component requests data
2. Next.js API receives request
3. PostgreSQL executes query
4. Data returned as JSON
5. React renders UI

---

## 6. Deployment Architecture

[ Vercel Hosting ]
        ↓
Next.js App (Frontend + Backend)
        ↓
PostgreSQL Cloud (Neon / Supabase / Railway)

---

## 7. Optional Features

- Admin dashboard (CRUD projects)
- Blog system (Markdown)
- Email service (Nodemailer / Resend)
- Image upload (Cloudinary)
- Analytics dashboard
