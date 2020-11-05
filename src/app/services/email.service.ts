import { Injectable } from '@angular/core';
import API, { graphqlOperation } from "@aws-amplify/api";
@Injectable({
  providedIn: 'root'
})
export class EmailService {

  constructor() { }
  async email(email,type,text,linkUrl){
    const apiName = 'restApi';
      const path = '/email'; 
      const myInit = {
        body: {
          email: email,
          type: type,
          text:text,
          linkUrl:linkUrl
        }, // replace this with attributes you need
        headers: {}, // OPTIONAL
    };
      await API
      .post(apiName, path, myInit)
      .then(response => {
        // Add your code here
      })
      .catch(error => {
    });
  }
}
