export enum PayRunStatus
{
  PENDING = "Pending",
  IN_PROGRESS = "In Progress",
  REQUIRES_AUTHORISATION = "Requires Authorisation",
  AUTHORISED = "Authorised",
  FINALISED = "Finalised",
  CLOSED = "Closed"
}

export enum PayRunSortBy
{
  PERIOD = "period",
  CREATION = "creation",
  FINALISATION = "finalisation"
}

export enum RunType
{
  MAIN = "Main",
  MANUAL = "Manual"
}

export enum ScopeLevel
{
  COUNTRY = "Country",
  COMPANY = "Company",
  EMPLOYEE = "Employee"
}