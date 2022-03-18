import type { UpdateSettingInput } from './models';
import { RequestOptions } from '/#/axios';
import { defHttp } from '/@/utils/http/axios';
import type { ListResultDto } from '/@/utils/models/dtos';
import type { SettingGroup } from '../setting-ui/dto/models';

export class SettingService {
  apiName = 'AbpIdentity';

  get = (options?: RequestOptions) =>
    defHttp.request<ListResultDto<SettingGroup>>(
      {
        method: 'GET',
        url: '/api/identity/settings',
      },
      options,
    );

  update = (input: UpdateSettingInput, options?: RequestOptions) =>
    defHttp.request<void>(
      {
        method: 'POST',
        url: '/api/identity/settings',
        data: input,
      },
      options,
    );
}
