// @ts-ignore
/* eslint-disable */
import { request } from '@umijs/max';

/** 查询运行日志列表 GET /runlogs */
export async function getRunlogs(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.getRunlogsParams,
  options?: { [key: string]: any },
) {
  return request<API.Response & { data?: API.PaginatedData & { list?: API.RunLog[] } }>(
    '/runlogs',
    {
      method: 'GET',
      params: {
        ...params,
      },
      ...(options || {}),
    },
  );
}
