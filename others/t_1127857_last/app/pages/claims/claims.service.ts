import { Injectable } from "@angular/core";
import { ClaimModel } from "./claims.model";
import { GlobalService } from "../../shared/services/global.service";


@Injectable()
export class ClaimService {

  public selectedClaim: any = "";


  public constructor(public _globalService: GlobalService) {
  }

  public setSelectedClaim(claim: ClaimModel) {
    this.selectedClaim = claim;
  }

/*
  public getAllClaims(url, data) {
    return this._globalService.globalPost(url, "");
  }
  */

  /*
  public getAllClaims() {
  return [{
  "claimID": 634343,
  "dateOfService": "04/25/2014",
  "patientName": "Gretchen's Responsibility",
  "providerName": "CVS Pharmacy",
  "status": "Denied",
  "memberType": "subscriber",
  "visitType": "pharmacy",
  "submitAmount": 0,
  "allowedAmount": 8172.98,
  "paidAmount": 9847.45,
  "deductibleAmount": 827.12,
  "billedAmount": 237.98,
  "reason":"Lorem ipsum dolor amit lorem ipsum dolor amit lorem ipsum dolor amit lorem ipsum dolor amit lorem ipsum dolor amit lorem "
  },
  {
  "claimID": 265675,
  "dateOfService": "12/21/2005",
  "patientName": "Mary Smith",
  "providerName": "ABC Medical Association",
  "status": "Denied",
  "memberType": "Dependent",
  "visitType": "dental",
  "submitAmount": 453.23,
  "allowedAmount": 0,
  "paidAmount": 7455.21,
  "deductibleAmount": 856.12,
  "billedAmount": 5643.98,
  "reason":"Lorem ipsum dolor amit lorem ipsum dolor amit lorem ipsum dolor amit lorem ipsum dolor amit lorem ipsum dolor amit lorem "
  },
  {
  "claimID": 1876352,
  "dateOfService": "04/12/2016",
  "patientName": "Clarke Kent",
  "providerName": "Bethany Vision Specialist",
  "status": "Completed",
  "memberType": "Dependent",
  "visitType": "vision",
  "submitAmount": 6453.98,
  "allowedAmount": 987.98,
  "paidAmount": 0,
  "deductibleAmount": 856.12,
  "billedAmount":8654.98,
  "reason":""
  },
  {
  "claimID": 1876352,
  "dateOfService": "04/12/2016",
  "patientName": "Clarke Kent",
  "providerName": "CVS Pharmacy",
  "status": "Completed",
  "memberType": "Dependent",
  "visitType": "medical",
  "submitAmount": 8221.65,
  "allowedAmount": 3456.98,
  "paidAmount": 0,
  "deductibleAmount": 2334.12,
  "billedAmount": 9856.98,
  "reason":""
  },
  {
  "claimID": 1876352,
  "dateOfService": "04/12/2016",
  "patientName": "Clarke Kent",
  "providerName": "Dental Health Association",
  "status": "Completed",
  "memberType": "Dependent",
  "visitType": "dental",
  "submitAmount": 5676.34,
  "allowedAmount": 6545.98,
  "paidAmount": 345.21,
  "deductibleAmount": 0,
  "billedAmount": 3454.98,
  "reason":""
  },
  {
  "claimID": 1876352,
  "dateOfService": "04/12/2016",
  "patientName": "Clarke Kent",
  "providerName": "Watson Inc",
  "status": "Completed",
  "memberType": "Dependent",
  "visitType": "pharmacy",
  "submitAmount": 343.34,
  "allowedAmount": 0,
  "paidAmount": 231.21,
  "deductibleAmount": 232.12,
  "billedAmount": 0,
  "reason":""
  },
  {
  "claimID": 1876352,
  "dateOfService": "04/12/2016",
  "patientName": "Clarke Kent",
  "providerName": "CVS Pharmacy",
  "status": "Completed",
  "memberType": "Dependent",
  "visitType": "medical",
  "submitAmount": 8221.65,
  "allowedAmount": 3456.98,
  "paidAmount": 0,
  "deductibleAmount": 2334.12,
  "billedAmount": 9856.98,
  "reason":""
  },
  {
  "claimID": 1876352,
  "dateOfService": "04/12/2016",
  "patientName": "Clarke Kent",
  "providerName": "Dental Health Association",
  "status": "Completed",
  "memberType": "Dependent",
  "visitType": "dental",
  "submitAmount": 5676.34,
  "allowedAmount": 6545.98,
  "paidAmount": 345.21,
  "deductibleAmount": 0,
  "billedAmount": 3454.98,
  "reason":""
  },
  {
  "claimID": 1876352,
  "dateOfService": "04/12/2016",
  "patientName": "Clarke Kent",
  "providerName": "Watson Inc",
  "status": "Completed",
  "memberType": "Dependent",
  "visitType": "pharmacy",
  "submitAmount": 343.34,
  "allowedAmount": 0,
  "paidAmount": 231.21,
  "deductibleAmount": 232.12,
  "billedAmount": 0,
  "reason":""
  },
  {
  "claimID": 1876352,
  "dateOfService": "04/12/2016",
  "patientName": "Clarke Kent",
  "providerName": "CVS Pharmacy",
  "status": "Completed",
  "memberType": "Dependent",
  "visitType": "medical",
  "submitAmount": 8221.65,
  "allowedAmount": 3456.98,
  "paidAmount": 0,
  "deductibleAmount": 2334.12,
  "billedAmount": 9856.98,
  "reason":""
  },
  {
  "claimID": 1876352,
  "dateOfService": "04/12/2016",
  "patientName": "Clarke Kent",
  "providerName": "Dental Health Association",
  "status": "Completed",
  "memberType": "Dependent",
  "visitType": "dental",
  "submitAmount": 5676.34,
  "allowedAmount": 6545.98,
  "paidAmount": 345.21,
  "deductibleAmount": 0,
  "billedAmount": 3454.98,
  "reason":""
  },
  {
  "claimID": 1876352,
  "dateOfService": "04/12/2016",
  "patientName": "Clarke Kent",
  "providerName": "Watson Inc",
  "status": "Completed",
  "memberType": "Dependent",
  "visitType": "medical",
  "submitAmount": 343.34,
  "allowedAmount": 0,
  "paidAmount": 231.21,
  "deductibleAmount": 232.12,
  "billedAmount": 0,
  "reason":""
  },
  {
  "claimID": 1876352,
  "dateOfService": "04/12/2016",
  "patientName": "Clarke Kent",
  "providerName": "CVS Pharmacy",
  "status": "Completed",
  "memberType": "Dependent",
  "visitType": "medical",
  "submitAmount": 8221.65,
  "allowedAmount": 3456.98,
  "paidAmount": 0,
  "deductibleAmount": 2334.12,
  "billedAmount": 9856.98,
  "reason":""
  },
  {
  "claimID": 1876352,
  "dateOfService": "04/12/2016",
  "patientName": "Clarke Kent",
  "providerName": "Dental Health Association",
  "status": "Completed",
  "memberType": "Dependent",
  "visitType": "dental",
  "submitAmount": 5676.34,
  "allowedAmount": 6545.98,
  "paidAmount": 345.21,
  "deductibleAmount": 0,
  "billedAmount": 3454.98,
  "reason":""
  },
  {
  "claimID": 1876352,
  "dateOfService": "04/12/2016",
  "patientName": "Clarke Kent",
  "providerName": "Watson Inc",
  "status": "Completed",
  "memberType": "Dependent",
  "visitType": "pharmacy",
  "submitAmount": 343.34,
  "allowedAmount": 0,
  "paidAmount": 231.21,
  "deductibleAmount": 232.12,
  "billedAmount": 0,
  "reason":""
  },
  {
  "claimID": 1876352,
  "dateOfService": "04/12/2016",
  "patientName": "Clarke Kent",
  "providerName": "Watson Inc",
  "status": "Completed",
  "memberType": "Dependent",
  "visitType": "medical",
  "submitAmount": 343.34,
  "allowedAmount": 0,
  "paidAmount": 231.21,
  "deductibleAmount": 232.12,
  "billedAmount": 0,
  "reason":""
  },
  {
  "claimID": 1876352,
  "dateOfService": "04/12/2016",
  "patientName": "Clarke Kent",
  "providerName": "CVS Pharmacy",
  "status": "Completed",
  "memberType": "Dependent",
  "visitType": "medical",
  "submitAmount": 8221.65,
  "allowedAmount": 3456.98,
  "paidAmount": 0,
  "deductibleAmount": 2334.12,
  "billedAmount": 9856.98,
  "reason":""
  },
  {
  "claimID": 1876352,
  "dateOfService": "04/12/2016",
  "patientName": "Clarke Kent",
  "providerName": "Dental Health Association",
  "status": "Completed",
  "memberType": "Dependent",
  "visitType": "dental",
  "submitAmount": 5676.34,
  "allowedAmount": 6545.98,
  "paidAmount": 345.21,
  "deductibleAmount": 0,
  "billedAmount": 3454.98,
  "reason":""
  },
  {
  "claimID": 1876352,
  "dateOfService": "04/12/2016",
  "patientName": "Clarke Kent",
  "providerName": "Watson Inc",
  "status": "Completed",
  "memberType": "Dependent",
  "visitType": "pharmacy",
  "submitAmount": 343.34,
  "allowedAmount": 0,
  "paidAmount": 231.21,
  "deductibleAmount": 232.12,
  "billedAmount": 0,
  "reason":""
  },
  {
  "claimID": 1876352,
  "dateOfService": "04/12/2016",
  "patientName": "Clarke Kent",
  "providerName": "CVS Pharmacy",
  "status": "Completed",
  "memberType": "Dependent",
  "visitType": "medical",
  "submitAmount": 8221.65,
  "allowedAmount": 3456.98,
  "paidAmount": 0,
  "deductibleAmount": 2334.12,
  "billedAmount": 9856.98,
  "reason":""
  },
  {
  "claimID": 1876352,
  "dateOfService": "04/12/2016",
  "patientName": "Clarke Kent",
  "providerName": "Dental Health Association",
  "status": "Completed",
  "memberType": "Dependent",
  "visitType": "dental",
  "submitAmount": 5676.34,
  "allowedAmount": 6545.98,
  "paidAmount": 345.21,
  "deductibleAmount": 0,
  "billedAmount": 3454.98,
  "reason":""
  },
  {
  "claimID": 1876352,
  "dateOfService": "04/12/2016",
  "patientName": "Clarke Kent",
  "providerName": "Watson Inc",
  "status": "Completed",
  "memberType": "Dependent",
  "visitType": "medical",
  "submitAmount": 343.34,
  "allowedAmount": 0,
  "paidAmount": 231.21,
  "deductibleAmount": 232.12,
  "billedAmount": 0,
  "reason":""
  },
  {
  "claimID": 1876352,
  "dateOfService": "04/12/2016",
  "patientName": "Clarke Kent",
  "providerName": "CVS Pharmacy",
  "status": "Completed",
  "memberType": "Dependent",
  "visitType": "medical",
  "submitAmount": 8221.65,
  "allowedAmount": 3456.98,
  "paidAmount": 0,
  "deductibleAmount": 2334.12,
  "billedAmount": 9856.98,
  "reason":""
  },
  {
  "claimID": 1876352,
  "dateOfService": "04/12/2016",
  "patientName": "Clarke Kent",
  "providerName": "Dental Health Association",
  "status": "Completed",
  "memberType": "Dependent",
  "visitType": "dental",
  "submitAmount": 5676.34,
  "allowedAmount": 6545.98,
  "paidAmount": 345.21,
  "deductibleAmount": 0,
  "billedAmount": 3454.98,
  "reason":""
  },
  {
  "claimID": 1876352,
  "dateOfService": "04/12/2016",
  "patientName": "Clarke Kent",
  "providerName": "Watson Inc",
  "status": "Completed",
  "memberType": "Dependent",
  "visitType": "medical",
  "submitAmount": 343.34,
  "allowedAmount": 0,
  "paidAmount": 231.21,
  "deductibleAmount": 232.12,
  "billedAmount": 0,
  "reason":""
  },
  {
  "claimID": 1876352,
  "dateOfService": "04/12/2016",
  "patientName": "Clarke Kent",
  "providerName": "CVS Pharmacy",
  "status": "Completed",
  "memberType": "Dependent",
  "visitType": "medical",
  "submitAmount": 8221.65,
  "allowedAmount": 3456.98,
  "paidAmount": 0,
  "deductibleAmount": 2334.12,
  "billedAmount": 9856.98,
  "reason":""
  },
  {
  "claimID": 1876352,
  "dateOfService": "04/12/2016",
  "patientName": "Clarke Kent",
  "providerName": "Dental Health Association",
  "status": "Completed",
  "memberType": "Dependent",
  "visitType": "dental",
  "submitAmount": 5676.34,
  "allowedAmount": 6545.98,
  "paidAmount": 345.21,
  "deductibleAmount": 0,
  "billedAmount": 3454.98,
  "reason":""
  },
  {
  "claimID": 1876352,
  "dateOfService": "04/12/2016",
  "patientName": "Clarke Kent",
  "providerName": "Watson Inc",
  "status": "Completed",
  "memberType": "Dependent",
  "visitType": "medical",
  "submitAmount": 343.34,
  "allowedAmount": 0,
  "paidAmount": 231.21,
  "deductibleAmount": 232.12,
  "billedAmount": 0,
  "reason":""
  },
  {
  "claimID": 1876352,
  "dateOfService": "04/12/2016",
  "patientName": "Clarke Kent",
  "providerName": "CVS Pharmacy",
  "status": "Completed",
  "memberType": "Dependent",
  "visitType": "pharmacy",
  "submitAmount": 8221.65,
  "allowedAmount": 3456.98,
  "paidAmount": 0,
  "deductibleAmount": 2334.12,
  "billedAmount": 9856.98,
  "reason":""
  },
  {
  "claimID": 1876352,
  "dateOfService": "04/12/2016",
  "patientName": "Clarke Kent",
  "providerName": "Dental Health Association",
  "status": "Completed",
  "memberType": "Dependent",
  "visitType": "dental",
  "submitAmount": 5676.34,
  "allowedAmount": 6545.98,
  "paidAmount": 345.21,
  "deductibleAmount": 0,
  "billedAmount": 3454.98,
  "reason":""
  },
  {
  "claimID": 1876352,
  "dateOfService": "04/12/2016",
  "patientName": "Clarke Kent",
  "providerName": "Watson Inc",
  "status": "Completed",
  "memberType": "Dependent",
  "visitType": "medical",
  "submitAmount": 343.34,
  "allowedAmount": 0,
  "paidAmount": 231.21,
  "deductibleAmount": 232.12,
  "billedAmount": 0,
  "reason":""
  },
  {
  "claimID": 1876352,
  "dateOfService": "04/12/2016",
  "patientName": "Clarke Kent",
  "providerName": "CVS Pharmacy",
  "status": "Completed",
  "memberType": "Dependent",
  "visitType": "medical",
  "submitAmount": 8221.65,
  "allowedAmount": 3456.98,
  "paidAmount": 0,
  "deductibleAmount": 2334.12,
  "billedAmount": 9856.98,
  "reason":""
  },
  {
  "claimID": 1876352,
  "dateOfService": "04/12/2016",
  "patientName": "Clarke Kent",
  "providerName": "Dental Health Association",
  "status": "Completed",
  "memberType": "Dependent",
  "visitType": "dental",
  "submitAmount": 5676.34,
  "allowedAmount": 6545.98,
  "paidAmount": 345.21,
  "deductibleAmount": 0,
  "billedAmount": 3454.98,
  "reason":""
  },
  {
  "claimID": 1876352,
  "dateOfService": "04/12/2016",
  "patientName": "Clarke Kent",
  "providerName": "Watson Inc",
  "status": "Completed",
  "memberType": "Dependent",
  "visitType": "medical",
  "submitAmount": 343.34,
  "allowedAmount": 0,
  "paidAmount": 231.21,
  "deductibleAmount": 232.12,
  "billedAmount": 0,
  "reason":""
  },
  {
  "claimID": 1876352,
  "dateOfService": "04/12/2016",
  "patientName": "Clarke Kent",
  "providerName": "CVS Pharmacy",
  "status": "Completed",
  "memberType": "Dependent",
  "visitType": "medical",
  "submitAmount": 8221.65,
  "allowedAmount": 3456.98,
  "paidAmount": 0,
  "deductibleAmount": 2334.12,
  "billedAmount": 9856.98,
  "reason":""
  },
  {
  "claimID": 1876352,
  "dateOfService": "04/12/2016",
  "patientName": "Clarke Kent",
  "providerName": "Dental Health Association",
  "status": "Completed",
  "memberType": "Dependent",
  "visitType": "dental",
  "submitAmount": 5676.34,
  "allowedAmount": 6545.98,
  "paidAmount": 345.21,
  "deductibleAmount": 0,
  "billedAmount": 3454.98,
  "reason":""
  },
  {
  "claimID": 1876352,
  "dateOfService": "04/12/2016",
  "patientName": "Clarke Kent",
  "providerName": "Watson Inc",
  "status": "Completed",
  "memberType": "Dependent",
  "visitType": "medical",
  "submitAmount": 343.34,
  "allowedAmount": 0,
  "paidAmount": 231.21,
  "deductibleAmount": 232.12,
  "billedAmount": 0,
  "reason":""
  },
  {
  "claimID": 1876352,
  "dateOfService": "04/12/2016",
  "patientName": "Clarke Kent",
  "providerName": "CVS Pharmacy",
  "status": "Completed",
  "memberType": "Dependent",
  "visitType": "medical",
  "submitAmount": 8221.65,
  "allowedAmount": 3456.98,
  "paidAmount": 0,
  "deductibleAmount": 2334.12,
  "billedAmount": 9856.98,
  "reason":""
  },
  {
  "claimID": 1876352,
  "dateOfService": "04/12/2016",
  "patientName": "Clarke Kent",
  "providerName": "Dental Health Association",
  "status": "Completed",
  "memberType": "Dependent",
  "visitType": "dental",
  "submitAmount": 5676.34,
  "allowedAmount": 6545.98,
  "paidAmount": 345.21,
  "deductibleAmount": 0,
  "billedAmount": 3454.98,
  "reason":""
  },
  {
  "claimID": 1876352,
  "dateOfService": "04/12/2016",
  "patientName": "Clarke Kent",
  "providerName": "Watson Inc",
  "status": "Completed",
  "memberType": "Dependent",
  "visitType": "medical",
  "submitAmount": 343.34,
  "allowedAmount": 0,
  "paidAmount": 231.21,
  "deductibleAmount": 232.12,
  "billedAmount": 0,
  "reason":""
  },
  {
  "claimID": 1876352,
  "dateOfService": "04/12/2016",
  "patientName": "Clarke Kent",
  "providerName": "CVS Pharmacy",
  "status": "Completed",
  "memberType": "Dependent",
  "visitType": "medical",
  "submitAmount": 8221.65,
  "allowedAmount": 3456.98,
  "paidAmount": 0,
  "deductibleAmount": 2334.12,
  "billedAmount": 9856.98,
  "reason":""
  },
  {
  "claimID": 1876352,
  "dateOfService": "04/12/2016",
  "patientName": "Clarke Kent",
  "providerName": "Dental Health Association",
  "status": "Completed",
  "memberType": "Dependent",
  "visitType": "dental",
  "submitAmount": 5676.34,
  "allowedAmount": 6545.98,
  "paidAmount": 345.21,
  "deductibleAmount": 0,
  "billedAmount": 3454.98,
  "reason":""
  },
  {
  "claimID": 1876352,
  "dateOfService": "04/12/2016",
  "patientName": "Clarke Kent",
  "providerName": "Watson Inc",
  "status": "Completed",
  "memberType": "Dependent",
  "visitType": "medical",
  "submitAmount": 343.34,
  "allowedAmount": 0,
  "paidAmount": 231.21,
  "deductibleAmount": 232.12,
  "billedAmount": 0,
  "reason":""
  },
  {
  "claimID": 1876352,
  "dateOfService": "04/12/2016",
  "patientName": "Clarke Kent",
  "providerName": "CVS Pharmacy",
  "status": "Completed",
  "memberType": "Dependent",
  "visitType": "medical",
  "submitAmount": 8221.65,
  "allowedAmount": 3456.98,
  "paidAmount": 0,
  "deductibleAmount": 2334.12,
  "billedAmount": 9856.98,
  "reason":""
  },
  {
  "claimID": 1876352,
  "dateOfService": "04/12/2016",
  "patientName": "Clarke Kent",
  "providerName": "Dental Health Association",
  "status": "Completed",
  "memberType": "Dependent",
  "visitType": "dental",
  "submitAmount": 5676.34,
  "allowedAmount": 6545.98,
  "paidAmount": 345.21,
  "deductibleAmount": 0,
  "billedAmount": 3454.98,
  "reason":""
  },
  {
  "claimID": 1876352,
  "dateOfService": "04/12/2016",
  "patientName": "Clarke Kent",
  "providerName": "Watson Inc",
  "status": "Completed",
  "memberType": "Dependent",
  "visitType": "medical",
  "submitAmount": 343.34,
  "allowedAmount": 0,
  "paidAmount": 231.21,
  "deductibleAmount": 232.12,
  "billedAmount": 0,
  "reason":""
  },
  {
  "claimID": 1876352,
  "dateOfService": "04/12/2016",
  "patientName": "Clarke Kent",
  "providerName": "CVS Pharmacy",
  "status": "Completed",
  "memberType": "Dependent",
  "visitType": "medical",
  "submitAmount": 8221.65,
  "allowedAmount": 3456.98,
  "paidAmount": 0,
  "deductibleAmount": 2334.12,
  "billedAmount": 9856.98,
  "reason":""
  },
  {
  "claimID": 1876352,
  "dateOfService": "04/12/2016",
  "patientName": "Clarke Kent",
  "providerName": "Dental Health Association",
  "status": "Completed",
  "memberType": "Dependent",
  "visitType": "dental",
  "submitAmount": 5676.34,
  "allowedAmount": 6545.98,
  "paidAmount": 345.21,
  "deductibleAmount": 0,
  "billedAmount": 3454.98,
  "reason":""
  },
  {
  "claimID": 1876352,
  "dateOfService": "04/12/2016",
  "patientName": "Clarke Kent",
  "providerName": "Watson Inc",
  "status": "Completed",
  "memberType": "Dependent",
  "visitType": "medical",
  "submitAmount": 343.34,
  "allowedAmount": 0,
  "paidAmount": 231.21,
  "deductibleAmount": 232.12,
  "billedAmount": 0,
  "reason":""
  },
  {
  "claimID": 1876352,
  "dateOfService": "04/12/2016",
  "patientName": "Clarke Kent",
  "providerName": "CVS Pharmacy",
  "status": "Completed",
  "memberType": "Dependent",
  "visitType": "medical",
  "submitAmount": 8221.65,
  "allowedAmount": 3456.98,
  "paidAmount": 0,
  "deductibleAmount": 2334.12,
  "billedAmount": 9856.98,
  "reason":""
  },
  {
  "claimID": 1876352,
  "dateOfService": "04/12/2016",
  "patientName": "Clarke Kent",
  "providerName": "Dental Health Association",
  "status": "Completed",
  "memberType": "Dependent",
  "visitType": "dental",
  "submitAmount": 5676.34,
  "allowedAmount": 6545.98,
  "paidAmount": 345.21,
  "deductibleAmount": 0,
  "billedAmount": 3454.98,
  "reason":""
  }
  ];
  }
  */


  public getAllClaims() {
    return {
      "ROWS": [{
        "RowNum": "5",
        "PatName": "Amy Winehouse",
        "PatRelation": "Subscriber",
        "DOS": "01/17/2017",
        "PrvName": "ABC Medical Facility",
        "StatusDt": "01/20/14",
        "RecDt": "01/18/14",
        "ProAmt": 677.94,
        "CoinsAmt": "0",
        "CopayAmt": "0",
        "DedAmt": 0,
        "NotCovAmt": "0",
        "MemOwedAmt": 0,
        "PrvSubAmt": 1228,
        "AlldAmt": 423,
        "ClmType": "M",
        "ClmStat": "D",
        "SvcType": "Surgery",
        "MsgSpecified": "false",
        "LineMsgCode": "",
        "LineMsg": "Claim is denied because the bills are not submitted properly. Claim is denied because the bills are not submitted properly. Claim is denied because the bills are not submitted properly. ",
        "ICN": 1534343,
        "ClmStatus": "Paid",
        "address": "221B, Baker Street, Anywhere, MA",
        "phone": "(000) 000-0000",
        "totBilledAmt": 654
      }, {
        "RowNum": "8",
        "PatName": "Sherlock Holmes",
        "PatRelation": "Dependent",
        "DOS": "12/17/2016",
        "PrvName": "Southcoast Hospitals Ground",
        "StatusDt": "12/29/2016",
        "RecDt": "01/29/14",
        "ProAmt": 48.16,
        "CoinsAmt": "0",
        "CopayAmt": "0",
        "DedAmt": 0,
        "NotCovAmt": "0",
        "MemOwedAmt": 0,
        "PrvSubAmt": 122,
        "AlldAmt": 423,
        "ClmType": "V",
        "ClmStat": "C",
        "SvcType": "Ancillaries",
        "MsgSpecified": "false",
        "LineMsgCode": "",
        "LineMsg": "",
        "ICN": 453434,
        "ClmStatus": "Paid",
        "address": "221B, Baker Street, Anywhere, MA",
        "phone": "(000) 000-0000",
        "totBilledAmt": 654
      }, {
        "RowNum": "4",
        "PatName": "John Watson",
        "PatRelation": "Dependent",
        "DOS": "10/18/2016",
        "PrvName": "ABC Medical Facility",
        "StatusDt": "01/01/14",
        "RecDt": "01/01/14",
        "ProAmt": 145.62,
        "CoinsAmt": "0",
        "CopayAmt": "25",
        "DedAmt": 0,
        "NotCovAmt": "0",
        "MemOwedAmt": 25,
        "PrvSubAmt": 269,
        "AlldAmt": 423,
        "ClmType": "M",
        "ClmStat": "P",
        "SvcType": "Medical Care",
        "MsgSpecified": "false",
        "LineMsgCode": "",
        "LineMsg": "",
        "ICN": 534434,
        "ClmStatus": "Paid",
        "address": "221B, Baker Street, Anywhere, MA",
        "phone": "(000) 000-0000",
        "totBilledAmt": 654
      }, {
        "RowNum": "4",
        "PatName": "Mycroft Holmes",
        "PatRelation": "Dependent",
        "DOS": "08/18/2016",
        "PrvName": "John C Carroll MD",
        "StatusDt": "01/01/14",
        "RecDt": "01/01/14",
        "ProAmt": 145.62,
        "CoinsAmt": "0",
        "CopayAmt": "25",
        "DedAmt": 0,
        "NotCovAmt": "0",
        "MemOwedAmt": 25,
        "PrvSubAmt": 269,
        "AlldAmt": 423,
        "ClmType": "M",
        "ClmStat": "P",
        "SvcType": "Medical Care",
        "MsgSpecified": "false",
        "LineMsgCode": "",
        "LineMsg": "",
        "ICN": 534434,
        "ClmStatus": "Paid",
        "address": "221B, Baker Street, Anywhere, MA",
        "phone": "(000) 000-0000",
        "totBilledAmt": 654
      }, {
        "RowNum": "4",
        "PatName": "Eurus Holmes",
        "PatRelation": "Dependent",
        "DOS": "05/18/2016",
        "PrvName": "ABC Medical Facility",
        "StatusDt": "01/01/14",
        "RecDt": "01/01/14",
        "ProAmt": 145.62,
        "CoinsAmt": "0",
        "CopayAmt": "25",
        "DedAmt": 0,
        "NotCovAmt": "0",
        "MemOwedAmt": 25,
        "PrvSubAmt": 269,
        "AlldAmt": 423,
        "ClmType": "M",
        "ClmStat": "C",
        "SvcType": "Medical Care",
        "MsgSpecified": "false",
        "LineMsgCode": "",
        "LineMsg": "",
        "ICN": 534434,
        "ClmStatus": "Paid",
        "address": "221B, Baker Street, Anywhere, MA",
        "phone": "(000) 000-0000",
        "totBilledAmt": 654
      }, {
        "RowNum": "4",
        "PatName": "Mary Watson",
        "PatRelation": "Dependent",
        "DOS": "06/18/2015",
        "PrvName": "John C Carroll MD",
        "StatusDt": "01/01/14",
        "RecDt": "01/01/14",
        "ProAmt": 145.62,
        "CoinsAmt": "0",
        "CopayAmt": "25",
        "DedAmt": 0,
        "NotCovAmt": "0",
        "MemOwedAmt": 25,
        "PrvSubAmt": 269,
        "AlldAmt": 423,
        "ClmType": "M",
        "ClmStat": "P",
        "SvcType": "Medical Care",
        "MsgSpecified": "false",
        "LineMsgCode": "",
        "LineMsg": "",
        "ICN": 534434,
        "ClmStatus": "Paid",
        "address": "221B, Baker Street, Anywhere, MA",
        "phone": "(000) 000-0000",
        "totBilledAmt": 654
      }]
    };

  }
}