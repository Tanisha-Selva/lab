ANGULARJS + NODE.JS + MONGODB CRUD LAB PRACTICAL PACK
=====================================================

WHAT IS INCLUDED
----------------
Five complete, independent CRUD applications:
1. Student Attendance Management
2. Vehicle Service Management
3. Library Book Management
4. Event Registration Management
5. Clinic Appointment Management

Each application uses:
- AngularJS 1.x frontend
- HTML/CSS/JavaScript
- Node.js + Express backend
- MongoDB database
- Express serving the frontend, so no VS Code or Live Server is required

IMPORTANT
---------
Node.js does NOT include MongoDB.

For the applications to save data, a MongoDB server must be installed and running.
The default connection used by all projects is:

mongodb://127.0.0.1:27017/<scenario_database>

The databases are separate, so records from one scenario do not appear in another.

OFFLINE ANGULARJS
-----------------
Each application includes a local AngularJS 1.8.2 file under frontend/lib/angular.min.js.
The HTML loads this local file first. A CDN line is also included as a commented fallback.
Therefore, the normal application does not need internet access to load AngularJS.

QUICK START
-----------
1. Extract this ZIP.
2. Install/start MongoDB on the lab computer.
3. Open Command Prompt.
4. cd into ONE scenario folder.
5. Run:
       npm install
       npm start
6. Open:
       http://localhost:5000

Do not run npm start from the master folder. Run it inside the selected scenario folder.

If npm install has already been completed for that scenario, it is not necessary to repeat it.

NO VS CODE REQUIRED
-------------------
You can use File Explorer + Command Prompt + Chrome/Edge.
The Express server serves the HTML/CSS/JS itself.

MONGODB
-------
If MongoDB is installed as a Windows service, it may already be running.
If it is not running, start MongoDB using the method provided by your lab setup.

If the command "mongod" is not recognized, MongoDB may not be installed or may not be on PATH.
See each scenario's TROUBLESHOOTING.txt.

If MongoDB is completely unavailable, these CRUD projects cannot perform real database CRUD.
Do not claim that they are saving to MongoDB unless MongoDB is actually running.

ANGULARJS CHECK
---------------
If the page displays the raw Angular expressions or buttons do not work:
- Make sure frontend/lib/angular.min.js exists.
- Make sure the HTML has the AngularJS script before app.js.
- Open http://localhost:5000 rather than opening index.html directly.
- Refresh the page.

TESTING
-------
For each application:
1. Add a valid record.
2. Confirm it appears in the table.
3. Click Edit, change a value, and click Update.
4. Click Delete and confirm the record disappears.
5. Refresh the browser and verify saved records remain.

DATABASE NAMES
-------------
attendance_db
vehicle_service_db
library_db
event_registration_db
clinic_appointment_db

EXAM NOTE
---------
The code is intentionally simple and readable. The frontend uses ng-app,
ng-controller, ng-model, ng-repeat, ng-click and basic validation.
The backend exposes REST-style GET, POST, PUT and DELETE routes.
