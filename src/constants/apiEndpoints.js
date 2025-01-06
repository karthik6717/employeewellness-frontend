

//Employee-Controller
export const GET_ALL_EMPLOYEES='http://localhost:8765/api/employeewellness/getallemps';
export const GET_EMPLOYEE_BY_ID='http://localhost:8765/api/employeewellness/';
export const ADD_EMPLOYEE='http://localhost:8765/api/employeewellness/add';
export const UPDATE_EMPLOYEE='http://localhost:8765/api/employeewellness/update';
export const DELETE_EMPLOYEE='http://localhost:8765/api/employeewellness/remove/employee/';

//Wellness-program-controller

export const GET_ALL_WELLNESSPROGRAMS ='http://localhost:8765/api/wellnessprogram/getAllWellness';
export const GET_WELLNESSPROGRAM_BY_ID ='http://localhost:8765/api/wellnessprogram/getWellnessById/';
export const ADD_WELLNESSPROGRAM ='http://localhost:8765/api/wellnessprogram/addWell';
export const UPDATE_WELLNESSPROGRAM ='http://localhost:8765/api/wellnessprogram/updateWellness';
export const DELETE_WELLNESSPROGRAM ='http://localhost:8765/api/wellnessprogram/removeWellness/';

//wellness-program-registration

export const WELLNESS_REGISTRATION_REGISTER = 'http://localhost:8765/api/wellnessRegistration/register/{employeeId}/{wellnessProgramId}';




//challenge-controller

export const GET_ALL_CHALLENGES ='http://localhost:8765/api/employeewellness/getallchallenges';
export const GET_CHALLENGE_BY_ID ='http://localhost:8765/api/employeewellness/ChallengesDetails/';
export const ADD_CHALLENGE ='http://localhost:8765/api/employeewellness/addChal';
export const UPDATE_CHALLENGE ='http://localhost:8765/api/employeewellness/updateChallenge';
export const DELETE_CHALLENGE='http://localhost:8765/api/employeewellness/deleteChallenge/';


//Challenge-registration-controller

export const REGISTER_CHALLENGE ='http://localhost:8765/api/employeewellness/challengeregister/';



//event-controller
export const GET_ALL_EVENTS ='http://localhost:8765/api/employeewellness/getAllEvents';
export const GET_EVENT_BY_ID ='http://localhost:8765/api/employeewellness/getEventById/';
export const ADD_EVENT ='http://localhost:8765/api/employeewellness/addEvent';
export const UPDATE_EVENT ='http://localhost:8765/api/employeewellness/updateEvent';
export const DELETE_EVENT='http://localhost:8765/api/employeewellness/deleteEvent/';

//event-registration

export const EVENT_REGISTRATION ='http://localhost:8765/api/eventRegistration/{employeeId}/{eventId}';


//Doctor-controller
export const GET_ALL_DOCTORS ='http://localhost:8765/api/employeewellness/getAllDoctors';
export const GET_DOCTOR_BY_ID ='http://localhost:8765/api/employeewellness/getDoctorById/';
export const ADD_DOCTOR ='http://localhost:8765/api/employeewellness/addDoctor';
export const UPDATE_DOCTOR ='http://localhost:8765/api/employeewellness/updateDoctor';
export const DELETE_DOCTOR='http://localhost:8765/api/employeewellness/remove/';


export const LOGIN ='http://localhost:8765/api/auth/login'

