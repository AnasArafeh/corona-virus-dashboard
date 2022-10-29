The project was made using both Flux and Modular architecture.

- Flux pattern where all of the views (parent and child) communicate with store using actions and actions get dispatched into the store using dispatcher instead of communcating directly with each other.

- Modular pattern where each module is not dependent on any other module and there is no communication between modules. Thus, we have loosely coupled application where we can add/remove modules without breaking the application.

---

Folder architecture:

- Assets folder contains any shared image, svg, etc... that might be needed in the application.

- Components folder contains theme compoenets and shared components across the application (communicate with parent components using props)

- Helpers folder contains helpers functions such as sorting functions, string manipulation, etc... .

- Hooks folder contains custome hooks.

- Models folder contains interfaces for all of the Get API requests that is done in the application which allows us to use for example categories API inside Product Module without referencing Category Module.

- Routes folder contains the application routing and it's permission.

- Screens folder contains the application screens/views each folder inside the Screen folder is considered as Module. And each Module has his own Components / Models / Store / Styles / Views and Index file.

  - Index file is used to provider the context for the screens/views inside the module and it use conditional render to avoid conflicts between screens/views.

- Services folder contains the baseAPI service where we have the API interceptors and a file for each Module which contains all of it's related API calls. It is shared for the same reason stated for the Models "for example categories API inside Product Module without referencing Category Module".

- StateManagement folder contains actions / interfaces and reducers for each Module which is the base of the Flux architecture / pattern.

- Store folder contains the static shared data across components for example the COVID apis uses Hatoes pattern. Which is a base API that returns all of the available APIs Rels which can be accessed directly. And in this cased I have saved all of the base Routes in the APIRoutes.ts file to avoid human error writing API Rels in case they were written in multiple places and it gives us the ability to easily change the Rel name from one place only.
