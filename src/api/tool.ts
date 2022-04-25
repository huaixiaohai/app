import {request, methods} from '@/utils/request';

export class ToolListReq {
  public ID: string = ""
  public Name: string = ""
}

export class ToolListResp {
  public ID: string = ""
  public Name: string = ""
}

export function ToolList(data: any) {
  return request({
      url:"/tool/list",
      method:methods.GET,
      data:data,
  });
}

