import {test, expect} from '@playwright/test';

let token ="";
test.beforeEach(async({request}) =>{
    let authURL = "http://localhost:4000/api/auth/login"
   let authResponse = await request.post(authURL, 
    {
        data:{
                "email": "admin@acme.test",
                "password": "admin123"
            }
        
    }
   )
   expect(await authResponse.status()).toBe(200);
   const jsonBody = await authResponse.json();
   console.log(jsonBody);
   token = await jsonBody.data.token;
   console.log(token);
});

// Login Process

test("API Testing - Login process", async({request}) =>{
   let authURL = "http://localhost:4000/api/auth/login"
   let authResponse = await request.post(authURL, 
    {
        data:{
                "email": "admin@acme.test",
                "password": "admin123"
            }
        
    }
   )
   expect(authResponse.status()).toBe(200);
   const jsonBody = await authResponse.json();
   console.log(jsonBody);
   let token = await jsonBody.data.token;
   console.log(token);
});

// create user

test("API Testing - Create User", async({request}) =>{
   let createUserEndpoint = "http://localhost:4000/api/users"
   const userResponse = await request.post(createUserEndpoint, 
    {
        headers: {
            "Authorization":`Bearer ${token}`,
        },
        data:{
               "firstName": "TestQAManual",
               "lastName": "Core",
               "email": "TestQAManual@example.test",
               "phone": "1000025896",
               "role": "Quality Analyst",
               "status": "Active"
            }
    });

      expect(userResponse.status()).toBe(201);
      const userjsonBody = await userResponse.json();
      console.log(userjsonBody);
});