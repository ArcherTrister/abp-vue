﻿using System;
using Volo.Abp.Application.Dtos;

namespace YZ.PrintStore.AdministrationService.Auditing.Logging
{
    public class EntityPropertyChangeDto : EntityDto<Guid>
    {
        public string NewValue { get; set; }

        public string OriginalValue { get; set; }

        public string PropertyName { get; set; }

        public string PropertyTypeFullName { get; set; }
    }
}
