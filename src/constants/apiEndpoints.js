

//Employee-Controller
export const GET_ALL_EMPLOYEES='http://localhost:9091/api/employeewellness/getallemps';
export const GET_EMPLOYEE_BY_ID='http://localhost:9091/api/employeewellness/';
export const ADD_EMPLOYEE='http://localhost:9091/api/employeewellness/add';
export const UPDATE_EMPLOYEE='http://localhost:9091/api/employeewellness/update';
export const DELETE_EMPLOYEE='http://localhost:9091/api/employeewellness/remove/employee/';

//Wellness-program-controller

export const GET_ALL_WELLNESSPROGRAMS ='http://localhost:9091/api/wellnessprogram/getAllWellness';
export const GET_WELLNESSPROGRAM_BY_ID ='http://localhost:9091/api/wellnessprogram/getWellnessById/{wellId}';
export const ADD_WELLNESSPROGRAM ='http://localhost:9091/api/wellnessprogram/addWell';
export const UPDATE_WELLNESSPROGRAM ='http://localhost:9091/api/wellnessprogram/updateWellness';
export const DELETE_WELLNESSPROGRAM ='http://localhost:9091/api/wellnessprogram/removeWellness/{wellId}';

//wellness-program-registration

export const WELLNESS_REGISTRATION_REGISTER = 'http://localhost:9091/api/wellnessRegistration/register/{employeeId}/{wellnessProgramId}';




//challenge-controller

export const GET_ALL_CHALLENGES ='http://localhost:9091/api/employeewellness/getallchallenges';
export const GET_CHALLENGE_BY_ID ='http://localhost:9091/api/employeewellness/ChallengesDetails/';
export const ADD_CHALLENGE ='http://localhost:9091/api/employeewellness/addChal';
export const UPDATE_CHALLENGE ='http://localhost:9091/api/employeewellness/updateChallenge';
export const DELETE_CHALLENGE='http://localhost:9091/api/employeewellness/deleteChallenge/';


//Challenge-registration-controller

export const REGISTER_CHALLENGE ='http://localhost:9091/api/employeewellness/register/{employeeId}/{challengeId}';



//event-controller
export const GET_ALL_EVENTS ='http://localhost:9091/api/employeewellness/getAllEvents';
export const GET_EVENT_BY_ID ='http://localhost:9091/api/employeewellness/getEventById/{eventId}';
export const ADD_EVENT ='http://localhost:9091/api/employeewellness/addEvent';
export const UPDATE_EVENT ='http://localhost:9091/api/employeewellness/updateEvent/{eventId}';
export const DELETE_EVENT='http://localhost:9091/api/employeewellness/deleteEvent/{eventId}';

//event-registration

export const EVENT_REGISTRATION ='http://localhost:9091/api/eventRegistration/{employeeId}/{eventId}';


//Doctor-controller

export const ADD_DOCTOR = ''





