AdminConfig = {
	nonAdminRedirectRoute: 'AdminLogin',
	adminEmails: ['none@none.com'],
  collections: {
    Posts: {
    	tableColumns: [
    		{label: 'TItle', name: 'title'},
    		{label: 'Published', name: 'published'},
    		{label: 'User', name: 'owner', collection: 'Users'}
    	],
    },
    Appointments: {},
    AppointmentSubmissions: {}
  }
};