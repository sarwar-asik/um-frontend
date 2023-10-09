export interface IMeta {
  page: number;
  limit: number;
  total: number;
}

export type ResponseSuccessType = {
  data: any;
  meta?: IMeta;
};

export type IGenericResponse<T> = {
  meta: {
    page: number;
    limit: number;
    total: number;
  };
  data: T;
};

export type IGenericErrorMessage = {
  path: string | number;
  message: string;
};

export type IGenericErrorResponse = {
  statusCode: number;
  message: string;
  errorMessages: IGenericErrorMessage[];
};

//! for department
export interface IDepartment{
id:string,
title:string,
createdAt:string
updatedAt:string
_v:number
}


//! form admin 

export interface IAdmin {

}