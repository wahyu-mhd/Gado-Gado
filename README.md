Below is a detailed `README.md` file for your project that explains the purpose, installation, and how to use it.

---

# Gado-Gado Dashboard Project

This project is a simple web-based application that allows users to select their roles (either "Student" or "Teacher") and redirects them to their respective dashboards. The project includes basic role-based redirection functionality and features a responsive dashboard layout for students. The dashboard displays course completion statuses, including visual indicators for each subject.

## Project Structure

```
Gado-GadoForm
│
├── role-selection.html      # The role selection page for users
├── student-dashboard.html   # The dashboard page for students
├── teacher-dashboard.html   # The dashboard page for teachers (optional)
├── role-selection.js        # JavaScript file to handle role selection and redirection
├── role-selection.css       # CSS file for the role selection page styling
├── dashboard.css            # CSS file for dashboard page styling
├── README.md                # Project documentation
```

## Features

- **Role-based Redirection**: Users can select their role (Student or Teacher), and the page redirects them to their respective dashboard.
- **Student Dashboard**: Displays course progress, with charts showing the status of course completion for subjects like Physics, Math, and Programming.
- **Responsive Design**: The layout adjusts for different screen sizes using modern CSS techniques.
- **Clean and Simple UI**: The project features a clean user interface built using HTML5, CSS3, and JavaScript.

## Installation

To use this project locally, follow the steps below:

1. **Clone the repository**:
   ```bash
   git clone https://github.com/your-username/gado-gado-dashboard.git
   ```

2. **Navigate to the project folder**:
   ```bash
   cd Gado-GadoForm
   ```

3. **Open the `role-selection.html` file** in your web browser:
   You can either open the file manually or use the following command:
   ```bash
   open role-selection.html
   ```
   Or:
   ```bash
   start role-selection.html
   ```

   Alternatively, you can use a live server (e.g., from Visual Studio Code) to serve the project.

## How to Use

1. **Open `role-selection.html`**:
   - This page allows users to select their role (Student or Teacher).
   - When you click "Confirm" after selecting your role, the JavaScript (`role-selection.js`) will redirect you to the appropriate dashboard based on your choice.

2. **Student Dashboard** (`student-dashboard.html`):
   - If you select "Student," you'll be redirected to the **student dashboard**.
   - The dashboard includes visual indicators (charts) for the progress in subjects like Physics, Math, and Programming.

3. **Teacher Dashboard** (`teacher-dashboard.html`) (Optional):
   - If you select "Teacher," you'll be redirected to the **teacher dashboard**.
   - This page can be customized according to the needs of the teacher.

## File Overview

### 1. `role-selection.html`

- A simple form for users to select their role (Student/Teacher).
- It uses a `select` dropdown and a "Confirm" button to capture the role.
- The form is linked to `role-selection.js` for handling redirection.

### 2. `student-dashboard.html`

- The student dashboard contains cards for subjects like Physics, Math, and Programming.
- Each card displays a progress chart and status indicators like "Done", "On Going", "Not Started", and "Late".
- Uses **flexbox** to create a responsive layout.

### 3. `teacher-dashboard.html` (Optional)

- Placeholder for the teacher's dashboard.
- You can extend this file for any teacher-specific functionality.

### 4. `role-selection.js`

- Handles the form submission from `role-selection.html`.
- It prevents the default form submission and redirects users to the correct dashboard based on the role they select.

### 5. `role-selection.css`

- Contains the styles for the role selection page (`role-selection.html`).
- Includes styling for the form, buttons, and layout.

### 6. `dashboard.css`

- Contains the styles for the dashboard pages (both student and teacher).
- Includes styles for cards, charts, and course statuses (Done, On Going, Not Started, Late).

## Future Enhancements

- **Data Integration**: Integrate real-time data from an API or database to dynamically update course completion stats.
- **User Authentication**: Implement authentication so that only logged-in users can access the dashboards.
- **Admin Role**: Add an additional role (Admin) that has access to both the student and teacher dashboards and extra functionalities like user management.

## Technologies Used

- **HTML5**: For structuring the pages.
- **CSS3**: For styling the layout and making the UI responsive.
- **JavaScript**: For handling form submission and role-based redirection.
- **Google Fonts**: For typography and enhancing the visual appearance.

## Contributing

Feel free to contribute to this project by creating pull requests, submitting bug reports, or suggesting new features. Follow these steps to contribute:

1. Fork the repository.
2. Create a new branch for your feature or bug fix:
   ```bash
   git checkout -b feature-name
   ```
3. Commit your changes:
   ```bash
   git commit -m 'Add new feature'
   ```
4. Push to the branch:
   ```bash
   git push origin feature-name
   ```
5. Open a pull request.


---

Let me know if you need any other customizations or have further questions!
