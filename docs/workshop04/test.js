
// write me a regx to get below groups from the context
// 1. You are a helpful assistant
// 2. 阿猛，如果你要cos一个角色，你会选择谁呢？
// 3. 阿猛可以cos大嫂吗 或者缸灿团队来cos个狂飙想看！！[星星眼][星星眼][星星眼]

// 下面是context
// {"text": "<|im_start|>system\nYou are a helpful assistant<|im_end|>\n<|im_start|>user\n\"阿猛，如果你要cos一个角色，你会选择谁呢？\"<|im_end|>\n<|im_start|>assistant\n阿猛可以cos大嫂吗 或者缸灿团队来cos个狂飙想看！！[星星眼][星星眼][星星眼]<|im_end|>"}

// 正则表达式
const regex = /\"(.*?)\"/g;

