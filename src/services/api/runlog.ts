// @ts-ignore
/* eslint-disable */
import { request } from '@umijs/max';

/** 下载运行日志 GET /runlog/download */
export async function getRunlogDownload(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.getRunlogDownloadParams,
  options?: { [key: string]: any },
) {
  return request<any>('/runlog/download', {
    method: 'GET',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}
