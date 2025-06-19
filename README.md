
# 💼 LinkedIn Profile Clone

[![Deploy with Vercel](https://vercel.com/button)](https://linkedin-clone-gules-nine.vercel.app/)

A responsive and interactive **LinkedIn profile UI clone** built with **React** and **Material-UI**, showcasing personal profile sections, activity feeds, and clean layout — designed to closely match the real LinkedIn profile experience.

> 🔗 **Live Preview:** [https://linkedin-clone-gules-nine.vercel.app/](https://linkedin-clone-gules-nine.vercel.app/)

---

## 🔥 Features

- ✅ Editable profile info (name, title, location)
- ✅ Responsive layout for desktop, tablet, and mobile
- ✅ Static activity feed with recent posts
- ✅ Profile stats (connections, followers, contact info)
- ✅ Beautiful Material UI components
- ✅ Theme toggle (Light/Dark mode)
- ✅ Local profile image and cover banner support

---

## 🧩 Technologies Used

| Tech             | Purpose                             |
|------------------|-------------------------------------|
| **React**        | Frontend framework                  |
| **Material UI**  | UI Components and styling           |
| **JSX**          | React-based UI markup               |
| **CSS & Box**    | Responsive design & layouting       |

---

## 📁 Folder Structure

```

linkedin-clone/
│
├── public/
├── src/
│   ├── components/       # Reusable components (Header, Profile, Experience etc.)
│   ├── assets/           # Local images like profile picture
│   ├── App.js            # Main component
│   ├── index.js          # React DOM entry point
│
├── README.md
└── package.json

````

---

## ⚙️ Installation Instructions

1. **Clone this repository**:

```bash
git clone https://github.com/sowmyareddyy/linkedin-clone.git
cd linkedin-clone
````

2. **Install dependencies**:

```bash
npm install
```

3. **Start the development server**:

```bash
npm start
```

Your app will now be running at:
🌐 `http://localhost:3000`

---

## 💡 Interactive Component Highlight

* 📝 **Editable Profile Fields**: Toggle between view and input mode using local state.
* 🌗 **Theme Switch**: Switch between dark and light modes using MUI theming.
* 🖼️ **Dynamic Avatar**: Custom user image loaded locally or via URL.

---

## 🧠 Learning Outcomes

* ✅ Mastered component structuring in React
* ✅ Built reusable, clean, and modular UI
* ✅ Practiced Material UI’s system and component API
* ✅ Gained confidence in responsive layout design
* ✅ Learned to deploy real-world projects to GitHub and Vercel

---

## 📚 Comments & Documentation

All components are:

* Properly structured
* Written with **clear inline comments**
* Easy to scale or modify

### Example (inside `Profile.jsx`):

```jsx
// Handles profile name editing toggle
const [isEditing, setIsEditing] = useState(false);

// Toggles between display and input field
{isEditing ? (
  <TextField value={name} onChange={...} />
) : (
  <Typography>{name}</Typography>
)}
```

---

## 🚀 Deployment

> 🔗 **Live Preview:** [https://linkedin-clone-gules-nine.vercel.app/](https://linkedin-clone-gules-nine.vercel.app/)

---

##  Author

**V Sowmya Reddy**
📍 Hyderabad, India
🎓 Undergrad @ Anurag University
🔗 [LinkedIn](https://www.linkedin.com/in/sowmyareddyvangooru/)

## 📄 License

This project is for educational/demo purposes only.

```

