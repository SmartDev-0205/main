import { Injectable } from '@angular/core';
import { APIService } from '../API.service';
import API, { graphqlOperation } from "@aws-amplify/api";
@Injectable({
  providedIn: 'root'
})
export class QuoteService {

  constructor(
    private apiService:APIService
  ) { }
  async createQuote(quote){
    return await this.apiService.CreateQuote(quote);
  }
  async deleteQuote(id){
    return await this.apiService.DeleteQuote({id:id});
  }
  async updatQuote(quote){
    return await this.apiService.UpdateQuote(quote);
  }
  async getQuoteFromProjectId(projectId){
    let quotesTemp = await this.apiService.GetQuotesByporjectId(projectId);
    return quotesTemp.items;
  }
  async getClientQuote(projectId){
    let quotesTemp = await this.apiService.GetQuotesByporjectIdAndDirection(projectId,{eq:"Client Quotation"});
    return quotesTemp.items;
  }
  async getSupplierQuotes(projectId){
    let quotesTemp = await this.apiService.GetQuotesByporjectIdAndDirection(projectId,{eq:"Supplier Purchase Order"});
    return quotesTemp.items;
  }
  async getQuote(id){
    let quotesTemp = await this.GetQuoteData(id);
    return quotesTemp;
  }

  async GetQuoteData(id: string){
    const statement = `query GetQuote($id: ID!) {
        getQuote(id: $id) {
          __typename
          id
          direction
          projectId
          project {
            __typename
            client {
              __typename
              profile {
                __typename
                givenName
                familyName
              }
            }
            name
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
    return response.data.getQuote;
  }


}
