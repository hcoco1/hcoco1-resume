---
title: "Audits Tool"
description: "Audits Tool is a React-based solution designed to streamline the process of storing and managing audit data in a user-friendly manner."
custom_link_label: "Live App"
custom_link: "https://www.audits.hcoco1.com/"
updatedDate: "March 6 2024"
category: "Web App"

repository: "https://github.com/hcoco1/todo-list-local-storage"
heroImage: "https://images.unsplash.com/photo-1613206485381-b028e578e791?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"


---

## Project: Audits Tool 🔧

### <a href="https://audits.hcoco1.com/" target="_blank">Live App</a> 

### <a href="https://www.hcoco1.com/blog/2024-03-13-audits-tool" target="_blank">Blog Post</a> 

>The Audits Tool is a React-based application designed to enhance the efficiency of audit data management. It offers a user-friendly interface for storing and managing audit details, such as usernames, process paths, and audit descriptions. This information is saved ina Firebase database and can be easily viewed or deleted as needed. Additionally, the tool features functionality to generate and download comprehensive audit reports, streamlining the audit compilation and review process.

---

![alt text](https://github.com/hcoco1/todo-list-local-storage/blob/main/audit_tool_1.png?raw=true)

---

---

![alt text](https://github.com/hcoco1/todo-list-local-storage/blob/main/audit_tool_2.png?raw=true)

---

---

![alt text](https://github.com/hcoco1/todo-list-local-storage/blob/main/audit_tool_3.png?raw=true)

---

---

![alt text](https://github.com/hcoco1/todo-list-local-storage/blob/main/audit_tool_4.png?raw=true)

---

---

![alt text](https://github.com/hcoco1/todo-list-local-storage/blob/main/audit_tool_5.png?raw=true)

---

# Core Functionalities (AI-Generated 🤖)

## State Management with React Hooks

### useState Hook

- Utilized for initializing and managing the component's state, enabling tracking of the todos list, new todo input fields, auditor's name, and the editing state of the auditor's name.
- Facilitates local state management within functional components, essential for dynamically handling user inputs and application data.

## Component Composition and Reusability

### Child Components

- Integrates reusable child components (`TodoForm`, `TodoList`, `Footer`, `ReportGenerator`, and `AuditorNameForm`), highlighting React's component composition model for a modular and maintainable codebase.

## Event Handling and State Updates

### Form Submission

- Processes new todo additions and auditor name submissions via form submission handlers, preventing default form behavior and updating the state with new data.


## Deployment and Custom Domain Configuration

GitHub Pages: Utilized for its simplicity in deploying static sites directly from a GitHub repository, offering a streamlined workflow for pushing updates and managing releases.

Custom Subdomain Configuration: Involves setting a CNAME record in GoDaddy’s DNS settings to point the chosen subdomain (audits.hcoco1.com) to the GitHub Pages URL. This process exemplifies domain management and the integration of external DNS services with GitHub-hosted projects.

