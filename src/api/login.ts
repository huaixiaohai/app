import {request, methods} from '@/utils/request';

export function login(data: any) {
  return request({
      url:"/login",
      method:methods.GET,
      data:data,
  });
}

