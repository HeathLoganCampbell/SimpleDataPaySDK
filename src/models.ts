import { ScopeLevel, PayRunStatus, RunType } from './enums';

export type AccessTokenResponse = {
  access_token : string;
  epires_in : Number;
  token_type : string;
}

export type Company = {
  Id : string;
  Name : string;
  Code : string;
}

export type PayGroup = {
  Id : string;
  CompanyId: string;
  Code : string;
  Name : string;
}

export type PayPeriod = {
  StartDate : Date;
  EndDate? : Date;
}

export type PayRun = {
  Id : Number;
  PayGroupId: string;
  RunType : RunType;
  Status : PayRunStatus;
  Locked : boolean;
  PayPeriod : PayPeriod;
  FinalisationDate : string;
  DCDate : Date;
  ExcludeFromBanking : boolean;
}

export type Employee = {
  Id : string;
  Type : string;
  CompanyId : string;
  Code : string;
  FirstName : string;
  LastName : string;
  StartDate : Date;
}

export type ReferenceValue = {
  Id : string;
  Name : string;
  Value : string;
}

export type ParameterComponent = {
  Id : string;
  Name : string;
  ValueType : string;
  ReferenceValues?:  ReferenceValue[]
}

export type CompanyComponent = {
  Id : string;
  Code : string;
  Category : string;
  SubCategory : string;
  Parameters? : ParameterComponent[]
}

export type ScopeOwner = {
  Id : string;
  Type : ScopeLevel;
}

export type EmployeeComponent = {
  Id : string;
  StartDate : Date;
  EndDate? : Date;
  ParameterId : string;
  ReferenceValueId : string;
  Value: string;
  Owner : ScopeOwner;
}