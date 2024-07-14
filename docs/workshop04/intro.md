---
sidebar_position: 3
---

# Fine Tuning LLM


## P-Tuning V2

P-Tuning v2: Prompt Tuning Can Be Comparable to
Fine-tuning Universally Across Scales and Tasks,
2022 https://arxiv.org/pdf/2110.07602.pdf

## Lora原理

## B站大战弱智吧

### Data
https://github.com/linyiLYi/bilibot

### 从模型下载
```
import torch
from modelscope import snapshot_download, AutoModel, AutoTokenizer
import os
model_dir = snapshot_download('qwen/Qwen2-7B-Instruct', cache_dir='/root/autodl-tmp', revision='master')
```

### 运行模型

[!code-python](./runmodel.ipynb)

### Fine Tuning

[!code-python](./finetune.ipynb)



## Self LLM
https://github.com/datawhalechina/self-llm/blob/master/Qwen2/05-Qwen2-7B-Instruct%20Lora%20%E5%BE%AE%E8%B0%83.md
