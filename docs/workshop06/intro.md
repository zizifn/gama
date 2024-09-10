# Pretraining LLMs

## why-pre-training

![cost](./cost.png)

## data preparation

![data](./data.png)

Pre-Traing is like reading!
Fine-Tuning is specify task!

![data1](./data1.png)

## packaging-data-for-pretraining

### tokenization

### Data Packing

![data-packing](./data-packaging.png)

## model-initialization

### decoder only

预测下一个token。
![decoder](./decoder.png)

### weights

Random weights
![weights](./weights.png)

Existing Model weights, continue training
![exsiting weights](./weights2.png)

Downscaling an existing model
![downscaling](./downscaling.png)

Upscaling an existing model
![upscaling](./upscaling.png)


## training-in-action

### Training Cycle

![training-cycle](./training-cycle.png)

### Cost
https://huggingface.co/training-cluster

## evaluation
![evaluation](./evaluation1.png)

### Loss: trend

如果不对，就看下dataset 和 training arguments
![loss](./loss.png)

### see for yourself

人工很重要。

### compare with others

也需要人工

### benchmark

https://huggingface.co/open-llm-leaderboard

![benchmark-data](./benchmark-dataset.png)

