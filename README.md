# Simple Todo List Application

A simple frontend application for task management. You can add, edit, delete and mak tasks as completed.


## 🚀 Basic functions

-  Adding tasks.
-  Editing existing tasks.
-  Deleting tasks.
-  Marking tasks as completed.
-  Animation when deleting and adding tasks (using Framer Motion).
-  Show only completed tasks.
-  Search by task title


## 🛠 Technologies

-  **React&** - a library for building user interfaces.
-  **React Hook Form&** - for manual work with forms and validation.
-  **Framer Motion** - for smooth animation.
-  **Tailwind CSS** - is a utilitarian CSS framework for flexible styling.
-  **Simplebar-React** - for creating custom scrollbars.


## 📂 Project structure

📦 src/ \n
┣ 📂 assets/
┃ ┣ 📂 fonts/
┃ ┣ 📂 icons/
┃ ┣ 📜 base.css   # Globals Styles
┃
┣ 📂 components/   # Basic components
┃ ┣ 📂 buttons/    # Button components (CreateTaskButton, ShowCompletedTasks)
┃ ┣ 📂 forms/      # Forms (AddTaskForm, ChangeTaskForm)
┃ ┣ 📂 modal/      # Modal Window (DeletingTaskModal)
┃ ┣ 📂 sort/       # Sorting (SortByState)
┃ ┣ 📂 task/       # Task Components (Task, TaskDate, TaskTitle etc.)
┃
┣ 📂 config/         # Configuration files
┃ ┣ 📂 animations/   # Setting animations
┃ ┣ 📂 lists/        # Customizing animations
┃
┣ 📂 hooks/
┃ ┣ 📜 useTaskManager.jsx   # Task management custom hook
┃
┣ 📂 layouts/
┃ ┣ 📜 TaskLayout.jsx   # Basic layout
┃ ┣ 📜 Wrapper.jsx      # Container
┃
┣ 📂 storage/
┃ ┣ 📜 taskLocalStorage.jsx   # Functions for saving and removing tasks from localStorage
┃
┣ 📂 ui/   # User Interface Components
┃
┣ 📜 App.jsx
┣ 📜 index.css
┣ 📜 main.jsx

📜 eslint.config.js
📜 index.html
📜 package.json
📜 postcss.config.js
📜 tailwind.config.js
📜 vite.config.js
📜 yarn.lock


## 🧑‍💻 The useTaskManager hook

### useTaskManager - is a custom hook for managing tasks in an application. It provides functionality for adding, removing, modifying and tagging tasks, as well as for managing the state of the form and modal windows.

#### Parameters

**initialTasks** (optional) — an array of tasks that is passed as the initial state. If tasks are already stored in `localStorage`, the hook will load them from that storage.

#### States

- **taskList** — an array of all tasks in the application.
- **selectedTask** is the currently selected task to be edited or deleted.
- **countOfTasks** — the number of tasks in the list.
- **buttonsClickStates** — button state for creating, changing and deleting tasks.

#### Methods:

- **handleAddTask** — adds a new task to the list.
- **handleDeleteTask** — removes a task from the list by its ID.
- **handleSaveChangedTask** — saves changes to an existing task.
- **handleToggleFavoriteTask** — marks a task as a favorite or removes this mark.
- **handleToggleImportantTask** — marks a task as important or removes this mark.
- **handleToggleCompletedTask** — marks a task as completed or cancels it.
- **handleOpenChangeTaskForm** — opens a form for editing a task.
- **handleOpenAddTaskForm** — opens a form for adding a new task.
- **handleCloseAddTaskForm** — closes the form for adding a new task.
- **handleCloseChangeTaskForm** — closes the task editing form.
- **handleOpenDeletingTaskModal** — opens a modal window to confirm the task deletion.
- **handleCloseDeletingTaskModal** — closes the modal window to confirm the deletion.
- **handleGetCountOfTasks** — updates the number of tasks in the list.


## ⚙️ Installation and launch

1. Make sure you have **Node.js** installed
2. Clone the repository
    git clone https://github.com/korniienkodd21/Simple-Todo-List-Application.git
3. Go to the project folder
4. Install the dependencies
    yarn install or npm install
5. Run the project
    yarn run dev or npm run dev