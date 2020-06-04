import {Injectable} from "@angular/core";

// import {APIService} from "../API.service";
import API, {graphqlOperation} from "@aws-amplify/api";
// import {Storage} from "aws-amplify";

@Injectable({
  providedIn: "root"
})
export class UserManagementService {

  constructor() {
  }

  public async listUsersWithRole(role: string) {
    const statement = `query ListVendors {
        listUsers(filter: {
          role: { eq: "${role}" }
        }) {
          items {
            id
            profile {
              givenName
              familyName
            }
          }
        }
      }
      `;
    const response = (await API.graphql(
      graphqlOperation(statement))
    ) as any;
    return response.data.listUsers.items;
  }

}
