---
title: "Audits Tool"
description: "Audits Tool is a React-based solution designed to streamline the process of storing and managing audit data in a user-friendly manner."
custom_link_label: "Live App"
custom_link: "https://audits.hcoco1.com/"
updatedDate: "March 6 2024"
pricing: "Web App"
badge: "New"
oldPricing: "https://github.com/hcoco1/todo-list-local-storage"
heroImage: "https://images.unsplash.com/photo-1613206485381-b028e578e791?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"


---

## Project: Audits Tool.

### Live App: https://audits.hcoco1.com/

### Project Pitch:

Audits Tool is a React-based solution designed to streamline the process of storing and managing audit data in a user-friendly manner. It allows users to input audit details such as usernames, process paths, and audit descriptions, which are then saved locally and can be viewed or deleted. Additionally, the app offers a feature to generate and download comprehensive audit reports, enhancing the efficiency of audit compilation and review.

---

![Audits Tool](https://github.com/hcoco1/todo-list-local-storage/blob/main/audit_tool.png?raw=true)

---

### Core Functionalities:

CRUD Operations: Implements Create, Read, Update, and Delete operations for todo items, facilitated by React's stateful components and hooks (useState for state management and useEffect for operations with side effects, such as localStorage manipulation).

Persistence: Utilizes the Web Storage API (localStorage) for persistence, ensuring that user data remains intact across browser sessions.

### Technical Stack:

React.js: Employs React for its component-based architecture, enabling the encapsulation of UI parts and reuse of components (e.g., TodoItem, TodoForm). React's virtual DOM ensures efficient updates and rendering of components based on state changes.

CSS3: Leverages CSS for styling, applying Flexbox and Media Queries to achieve a responsive design that adapts to various screen sizes and devices.

FontAwesome: Integrated for icons, enhancing UX with visually appealing elements for actions like delete, edit, and social media links.

### Architecture and Components:

TodoForm: A reusable form component, encapsulating input logic and submission handling. It dynamically updates the parent component's state on user interaction.

TodoList and TodoItem: TodoList manages the collection of TodoItem components, each representing a task with options to edit or delete. This separation concerns aligns with React's compositional model, promoting code readability and maintainability.

Footer with SocialMediaLink: Demonstrates composition in React, where Footer contains multiple SocialMediaLink components. Each SocialMediaLink is a reusable component configured with props for different social platforms, illustrating how props can customize component behavior and presentation.

### Deployment and Custom Domain Configuration:

GitHub Pages: Utilized for its simplicity in deploying static sites directly from a GitHub repository, offering a streamlined workflow for pushing updates and managing releases.

Custom Subdomain Configuration: Involves setting a CNAME record in GoDaddy’s DNS settings to point the chosen subdomain (audits.hcoco1.com) to the GitHub Pages URL. This process exemplifies domain management and the integration of external DNS services with GitHub-hosted projects.

### Development Best Practices:

Modular Design: The app's structure encourages modularity and component reuse, reducing redundancy and facilitating scalability.

State Management: Leverages React hooks for local state management within components, providing a clear pattern for handling user input and application state.

Responsive Design: Implements responsive web design principles, ensuring the app's UI is accessible and user-friendly across devices.

### Future enhancements:

- Adding authentication.
- Adding a database.