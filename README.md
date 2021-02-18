# FullThrottle
##Deplyed Link :https://ftlapptime1.herokuapp.com/

###To run the application locally follow the steps mentioned below:
```
1)clone the repo and cd into the repo
2)In the mongodb database create a database with the name ft or include a .env file and add the Mongo_DB_URl which could be your local mongodb url or atlas
4) type npm install into the terminal
5) cd into the views folder follwed by fprt and perform step 2
6) type npm start into the terminal 
7) then cd out of the views folder and then type npm start so the server will run on port no 4000
8) visit the url http://localhost:4000/api/member/seed which will add the data inside the data.js file into the database
9) visit url http://localhost:4000/api/member/ to check if the api is working or not
10) At http://localhost:3000 the react app will run on your browser
11) check out the data.js file to know the activity period of the users
```
```
Refer to this data to check the output
members: [{
			id: "W012A3CDE",
			real_name: "Egon Spengler",
			tz: "America/Los_Angeles",
			activity_periods: [{
					start_time: "Feb 1 2020  1:33PM",
					end_time: "Feb 1 2020 1:54PM"
				},
				{
					start_time: "Mar 1 2020  11:11AM",
					end_time: "Mar 1 2020 2:00PM"
				},
				{
					start_time: "Mar 16 2020  5:33PM",
					end_time: "Mar 16 2020 8:02PM"
				}
			]
		},
		{
			id: "W07QCRPA4",
			real_name: "Glinda Southgood",
			tz: "Asia/Kolkata",
			activity_periods: [{
					start_time: "Feb 1 2020  1:33PM",
					end_time: "Feb 1 2020 1:54PM"
				},
				{
					start_time: "Mar 1 2020  11:11AM",
					end_time: "Mar 1 2020 2:00PM"
				},
				{
					start_time: "Mar 16 2020  5:33PM",
					end_time: "Mar 16 2020 8:02PM"
				}
			]
		},
		{
			id: "W012A3CDA",
			real_name: "Shivam",
			tz: "America/Los_Angeles",
			activity_periods: [{
					start_time: "Feb 1 2020  1:33PM",
					end_time: "Feb 1 2020 1:54PM"
				},
				{
					start_time: "Mar 1 2020  11:11AM",
					end_time: "Mar 1 2020 2:00PM"
				},
				{
					start_time: "Mar 16 2020  5:33PM",
					end_time: "Mar 16 2020 8:02PM"
				}
			]
		},
		{
			id: "W012A3CDB",
			real_name: "Shiv",
			tz: "America/Los_Angeles",
			activity_periods: [{
					start_time: "Feb 1 2020  1:33PM",
					end_time: "Feb 1 2020 1:54PM"
				},
				{
					start_time: "Mar 1 2020  11:11AM",
					end_time: "Mar 1 2020 2:00PM"
				},
				{
					start_time: "Mar 16 2020  5:33PM",
					end_time: "Mar 16 2020 8:02PM"
				}
			]
		}
		,{
			id: "W012A3CDC",
			real_name: "Jagdish",
			tz: "America/Los_Angeles",
			activity_periods: [{
					start_time: "Feb 1 2020  1:33PM",
					end_time: "Feb 1 2020 1:54PM"
				},
				{
					start_time: "Mar 1 2020  11:11AM",
					end_time: "Mar 1 2020 2:00PM"
				},
				{
					start_time: "Mar 16 2020  5:33PM",
					end_time: "Mar 16 2020 8:02PM"
				}
			]
		},
		{
			id: "W012A3CDD",
			real_name: "Eren",
			tz: "America/Los_Angeles",
			activity_periods: [{
					start_time: "Feb 19 2021  1:33PM",
					end_time: "Feb 19 2021 1:54PM"
				},
				{
					start_time: "Mar 19 2021  11:11AM",
					end_time: "Mar 19 2021 2:00PM"
				},
				{
					start_time: "Mar 16 2020  5:33PM",
					end_time: "Mar 16 2020 8:02PM"
				}
			]
		}
	]
  ```
