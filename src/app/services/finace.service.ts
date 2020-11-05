import { Injectable, ApplicationModule } from '@angular/core';
import API, { graphqlOperation } from "@aws-amplify/api";
@Injectable({
  providedIn: 'root'
})
export class FinaceService {

  constructor() { }
  async payToSupplier(email,amount){
    const apiName = 'financeApi';
      const path = '/finace'; 
      const myInit = {
        body: {
          email: email,
          amount: amount,
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
