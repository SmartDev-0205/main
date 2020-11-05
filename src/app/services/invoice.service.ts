import { Injectable } from '@angular/core';
import { APIService } from '../API.service';
import API, { graphqlOperation } from "@aws-amplify/api";
@Injectable({
  providedIn: 'root'
})
export class InvoiceService {

  constructor(
    private apiService:APIService
  ) { }

  async createInvoice(invoice){
    return await this.apiService.CreateInvoice(invoice);
  }
  async deleteInvoice(id){
    return await this.apiService.DeleteInvoice({id:id});
  }
  async updatInvoice(invoice){
    return await this.apiService.UpdateInvoice(invoice);
  }
  async getInvoiceFromProjectId(projectId){
    let InvoicesTemp = await this.apiService.GetInvoiceByporjectId(projectId);
    return InvoicesTemp.items;
  }
  async getClientInvoice(projectId){
    let invoicesTemp = await this.apiService.GetInvoiceByporjectIdAndDirection(projectId,{eq:"Client Invoice"});
    return invoicesTemp.items;
  }
  async getSupplierInvoices(projectId){
    let invoicesTemp = await this.apiService.GetInvoiceByporjectIdAndDirection(projectId,{eq:"Supplier Invoice"});
    return invoicesTemp.items;
  }
  async getInvoice(id){
    let invoiceTemp = await this.GetInvoiceData(id);
    return invoiceTemp;
  }
  async GetInvoiceData(id: string) {
    const statement = `query GetInvoice($id: ID!) {
        getInvoice(id: $id) {
          __typename
          id
          direction
          projectId
          project {
            __typename
            name
            client {
              __typename
              profile {
                givenName
                familyName
              }
            }
          }
          companyName
          companyAddress
          taxId
          tel
          mobile
          siteUrl
          clientName
          documentNo
          date
          credit
          dueDate
          seller
          reference
          projectName
          total
          discount
          totalAfterDiscount
          vat
          grandTotal
          remark
          items {
            __typename
            items {
              __typename
              id
              paymentId
              services
              languages
              stratDate
              deliveryDate
              description
              quantity
              unit
              pricePerUnit
              amount
              currency
              createdAt
              updatedAt
            }
            nextToken
          }
          status
          collectionTerm
          financeString
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      id
    };
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return response.data.getInvoice;
  }

}
