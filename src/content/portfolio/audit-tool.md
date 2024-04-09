---
title: "Audits Tool"
description: "Audits Tool is a React-based solution designed to streamline the process of storing and managing audit data in a user-friendly manner."
custom_link_label: "Live App"
custom_link: "https://www.audits.hcoco1.com/"
updatedDate: "March 6 2024"
pricing: "Web App"
badge: "New"
oldPricing: "https://github.com/hcoco1/todo-list-local-storage"
heroImage: "https://images.unsplash.com/photo-1613206485381-b028e578e791?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"


---

## Project: Audits Tool 🔧

### <a href="https://www.audits.hcoco1.com/" target="_blank">Live App </a>

### <a href="https://www.hcoco1.com/blog/2024-03-13-audits-tool" target="_blank">Blog Post</a>

>Audits Tool is a React-based solution designed to streamline the process of storing and managing audit data in a user-friendly manner. It allows users to input audit details such as usernames, process paths, and audit descriptions, which are then saved locally and can be viewed or deleted. Additionally, the app offers a feature to generate and download comprehensive audit reports, enhancing the efficiency of audit compilation and review.

---

![alt text](https://github.com/hcoco1/todo-list-local-storage/blob/main/audit_tool.png?raw=true)

---

## Core Functionalities (AI-Generated 🤖)

## State Management with React Hooks

### useState Hook

- Utilized for initializing and managing the component's state, enabling tracking of the todos list, new todo input fields, auditor's name, and the editing state of the auditor's name.
- Facilitates local state management within functional components, essential for dynamically handling user inputs and application data.

### State Initialization

- Initial state values for todos and auditor's name are derived from `localStorage`, showcasing a pattern for initializing state with data from external sources.
- A function passed to `useState` fetches and parses data from `localStorage`, ensuring state synchronization with persisted data.

## Side Effects with useEffect Hook

### useEffect Hook

- Manages side effects, especially for persisting state changes to `localStorage`. Separate effects are defined for `todos` and `auditorName`, demonstrating controlled effect execution through the dependency array.

### Persistence Mechanism

- Leverages the Web Storage API (`localStorage`) to persist the todos list and auditor's name across sessions, enhancing user experience by maintaining the application state post-browser session.

## Component Composition and Reusability

### Child Components

- Integrates reusable child components (`TodoForm`, `TodoList`, `Footer`, `ReportGenerator`, and `AuditorNameForm`), highlighting React's component composition model for a modular and maintainable codebase.

### Props and Callbacks

- Interaction between `App` and child components is facilitated through props, including function props for adding, deleting, and editing todos, promoting a unidirectional data flow and decoupled parent-child communication.

## Event Handling and State Updates

### Form Submission

- Processes new todo additions and auditor name submissions via form submission handlers, preventing default form behavior and updating the state with new data.

### Editing and Deleting Todos

- Implements editing and deleting todos through state updates that manipulate the todos array, adhering to the immutability principle for efficient UI re-rendering.

## Localization and Date Handling

### Date Formatting

- Formats the current date and time to Eastern Time using `toLocaleString` when adding a new todo, addressing date handling and localization within React applications.

## Deployment and Custom Domain Configuration

GitHub Pages: Utilized for its simplicity in deploying static sites directly from a GitHub repository, offering a streamlined workflow for pushing updates and managing releases.

Custom Subdomain Configuration: Involves setting a CNAME record in GoDaddy’s DNS settings to point the chosen subdomain (audits.hcoco1.com) to the GitHub Pages URL. This process exemplifies domain management and the integration of external DNS services with GitHub-hosted projects.

## Directories (Project Structure)

```bash
tree -L 3 -I node_modules
.
├── CNAME
├── LICENSE.md
├── README.md
├── audit_tool.png
├── build
├── package-lock.json
├── package.json
├── public
└── src
    ├── App.css
    ├── App.js
    ├── components
    │   ├── AuditSummary.css
    │   ├── AuditSummary.js
    │   ├── AuditorNameForm.js
    │   ├── Footer.js
    │   ├── ReportGenerator.js
    │   ├── SocialMediaLink.js
    │   ├── TodoForm.js
    │   ├── TodoItem.js
    │   ├── TodoList.js
    │   └── form_components
    └── index.js
```

## Future enhancements

- Migration to AWS
- Adding authentication.
- Adding a database
