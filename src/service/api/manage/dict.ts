import { request } from '@/service/request';

// =============== Dict Begin ===============

/** get dict page list */
export function fetchGetDictPageList(params?: Api.SystemManage.DictSearchParams) {
  return request<Api.SystemManage.DictPageList>({
    url: '/sys_dict/page',
    method: 'GET',
    params
  });
}

/** get dict list */
export function fetchGetDictList() {
  return request<Api.SystemManage.DictTree[]>({
    url: '/sys_dict/list',
    method: 'GET'
  });
}

/** get dict edit */
export function fetchGetEditDict(id: string) {
  return request<Api.SystemManage.Dict>({
    url: `/sys_dict/${id}`,
    method: 'GET'
  });
}

/** add dict info */
export function fetchAddDict(data: Api.SystemManage.DictEdit) {
  return request<boolean>({
    url: '/sys_dict/',
    method: 'POST',
    data
  });
}

/** update dict info */
export function fetchUpdateDict(data: Api.SystemManage.DictEdit) {
  return request<boolean>({
    url: '/sys_dict/',
    method: 'PUT',
    data
  });
}

/** edit delete dict */
export function fetchDeleteDict(data: Api.Common.DeleteParams) {
  return request<boolean>({
    url: '/sys_dict/',
    method: 'DELETE',
    data
  });
}

export function fetchLoadCacheDict() {
  return request<boolean>({
    url: '/sys_dict/load_cache',
    method: 'POST'
  });
}

/** get dict item page list */
export function fetchGetDictItemPageList(params?: Api.SystemManage.DictItemSearchParams) {
  return request<Api.SystemManage.DictItemPageList>({
    url: '/sys_dict_item/page',
    method: 'GET',
    params
  });
}

/** get dict item edit */
export function fetchGetEditDictItem(id: string) {
  return request<Api.SystemManage.DictItem>({
    url: `/sys_dict_item/${id}`,
    method: 'GET'
  });
}

/** add dict item info */
export function fetchAddDictItem(data: Api.SystemManage.DictItemEdit) {
  return request<boolean>({
    url: '/sys_dict_item/',
    method: 'POST',
    data
  });
}

/** update dict item info */
export function fetchUpdateDictItem(data: Api.SystemManage.DictItemEdit) {
  return request<boolean>({
    url: '/sys_dict_item/',
    method: 'PUT',
    data
  });
}

/** edit delete item dict */
export function fetchDeleteDictItem(data: Api.Common.DeleteParams) {
  return request<boolean>({
    url: '/sys_dict_item/',
    method: 'DELETE',
    data
  });
}

// =============== Dict End  ===============
