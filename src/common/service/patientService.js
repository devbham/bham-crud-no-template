

angular.module('bham.patientService', [])

.factory('PatientService', function(){

    var patients = [
		{  firstName:'Tomson', lastName:'Ngassa', age:'19', sex:'Male'},
		{  firstName:'Himalay', lastName:'Majumdar', age:'19', sex:'Male'},
		{  firstName:'Utish', lastName:'Rajkarnikar', age:'19', sex:'Male'},
		{  firstName:'Tao',lastName:'Lin',age:'19',sex:'Male'},
		{  firstName:'Joel',lastName:'Amoussou',age:'19',sex:'Male'}
    ];

    return {
      query: function() { 
				return patients;
			},
      add : function(patient) { 
	            patient.id = patients.length
				return patients.push(patient);
			},
      get : function(id) { 
				return patients[id];
	        },
      update : function(id, patient) { 
				patients[id] = patient;
			},
	   delete : function(id) { 				
				patients.splice(id,1);
			}		
    };
})