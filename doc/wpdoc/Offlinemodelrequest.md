---
title: Offlinemodelrequest
date: 2020-05-22T15:29:30
---

# Offlinemodelrequest 离线数据更新请求

用于强制更新某些离线的业务对象数据

```json
{
    "type": "offlinemodelrequest",
    "modelnames": ["product", "store"]
}
```

* modelnames

  需要更新的业务对象的modellogicname，可以一次性更新多个