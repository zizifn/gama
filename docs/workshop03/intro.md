---
sidebar_position: 3
---

# Running LLMs in Local

> 有个好机器和好网络！

## Opensource

### Huggingface

https://huggingface.co/

#### Transformers

Transformers provides APIs and tools to easily download and train state-of-the-art pretrained models. Using pretrained models can reduce your compute costs, carbon footprint, and save you the time and resources required to train a model from scratch.

https://huggingface.co/docs/transformers/en/index

#### Model

https://huggingface.co/models

#### datasets

https://huggingface.co/datasets

#### spaces

https://huggingface.co/spaces
https://huggingface.co/pricing#spaces

#### Load model from Huggingface

`workshop/03-LLMs-Local/Qwen2-1.5B-Instruct-huggingface.py`

### Model Scope 魔搭社区

https://www.modelscope.cn/home
https://community.modelscope.cn/

#### modelscope libary

https://www.modelscope.cn/docs/Quick%20Start

#### setup

1. check CUDA version
   `nvidia-smi`
2. pytorch with CUDA
   https://pytorch.org/get-started/locally/

#### Load model from Model Scope

`workshop/03-LLMs-Local/Qwen2-1.5B-Instruct.py`

### vllm

### Ollama

https://ollama.com/

#### Load model from Ollama

#### Quantized LLMs

Process of reducing the precision of the model's parameters (weights) from high-precision formats (such as 32-bit floating point) to lower-precision formats (such as 8-bit integers).

FP32 (32-bit floating point): Standard precision used in most training processes.
FP16 (16-bit floating point): Common in mixed precision training, offering a good balance between speed and accuracy.
INT8 (8-bit integer): Often used in inference for maximum efficiency.

#### llama.cpp

GGUF was developed by @ggerganov who is also the developer of llama.cpp, a popular C/C++ LLM inference framework.
https://huggingface.co/docs/hub/en/gguf

#### Llama-3-8B-Instruct-GGUF

https://huggingface.co/QuantFactory/Meta-Llama-3-8B-Instruct-GGUF-v2/tree/main

#### load from disk

https://www.markhneedham.com/blog/2023/10/18/ollama-hugging-face-gguf-models/

#### ONNX etc

#### Load model from Huggingface
