---
title: "Audits Tool"
description: "Audits Tool is a React-based solution designed to streamline the process of storing and managing audit data in a user-friendly manner."
custom_link_label: "Live App"
custom_link: "https://hcoco1.github.io/todo-list-local-storage/"
updatedDate: "March 6 2024"
pricing: "Web App"
badge: "New"
oldPricing: "https://github.com/hcoco1/todo-list-local-storage"
heroImage: "https://images.unsplash.com/photo-1613206485381-b028e578e791?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"


---

## Project: Audits Tool.

### Live App: https://hcoco1.github.io/todo-list-local-storage/

### Project Pitch:

Audits Tool is a React-based solution designed to streamline the process of storing and managing audit data in a user-friendly manner. It allows users to input audit details such as usernames, process paths, and durable items, which are then saved locally and can be viewed or deleted. Additionally, the app offers a feature to generate and download comprehensive audit reports, enhancing the efficiency of audit compilation and review.

### Description:

Managing audits can often feel like navigating through a labyrinth in the bustling world of logistics and operations. The complexity of tracking numerous processes, ensuring compliance, and maintaining records can be overwhelming. I experienced this challenge in my job, where compiling audits became a task that consumed excessive time and energy, detracting from the efficiency and productivity of our operations. The need for a solution was clear: a tool that could streamline the audit process, making it more manageable and accessible. So, I created a simple yet powerful application designed to store and display audits in a user-friendly manner.

### Idea:

The core idea was to develop an app that simplifies adding and managing audit data and provides a seamless way to generate reports. The goal was to make an intuitive app that allows users to input and retrieve audit information easily.

### Project Structure:

The application's structure is straightforward. It utilizes React's useState hook to manage the state of audits (or "todos" in the context of the code), storing them locally in the browser's localStorage. As a result, data persists even after the browser is closed, providing a persistent storage solution without needing a backend database.

---
![how this app works](https://github.com/hcoco1/todo-list-local-storage/blob/main/audit_tool.png?raw=true) 

---

### How it works?

Users can add new audits through a simple form, inputting details such as the username, process path, and audit description. The form is designed to be intuitive, with placeholders and dropdown menus guiding the user through the data entry process. Upon submission, the audit is added to the list, and the form is reset and ready for the next entry.

### Features:

One critical feature of this app is its ability to capitalize the first letter of specific inputs automatically, ensuring consistency and readability in the data stored. This small but significant detail enhances the user experience by reducing the need for manual text formatting.

The application also includes functionality to delete individual audits, allowing users to manage their records easily. This feature ensures that the audit list remains relevant and up-to-date, reflecting the current state of operations.

The app's most powerful feature is its report-generation capability. With a single click, users can compile the audits into a downloadable text file. This capability makes sharing audit reports with stakeholders incredibly easy and provides a clear and concise overview of the audits conducted.

>In short, the development of this audit management application was driven by the need to simplify the complex process of handling audits. By leveraging React and modern web technologies, I created a tool that not only meets this need but also enhances the overall efficiency of audit management. This app stands as a testament to the power of technology in solving practical problems, making the daunting task of audit compilation a thing of the past.

### Future enhancements:

- Adding a button to edit audits.

- Adding authentication.