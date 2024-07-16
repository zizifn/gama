prompts = ['天下没有不散的筵席，那么我们相聚的意义又是什么？',
'咖啡严格来说是不是也可以叫豆浆？',
'石油也是油，为啥没人用它来炒菜？',
'执行死刑时可以委托律师替我去吗？',
'目前我国同性群体离婚率为零，这是否说明同性间结婚比异性更有优势？',
'大家都说我嘴很甜，他们是怎么尝出来的？',
'吃了降压药之后可以摸高压电吗？',
'我爸再婚，我是不是就有了个新娘？',
'为什么我爸妈结婚的时候没邀请我参加婚礼？',
'蓝牙耳机坏了，去医院挂号挂牙科还是耳科？',
'赤道那么暖和，为什么不给东北修一条？',
'为什么长寿的都是老年人？',
'跳多高才能跳过广告？',
'我女朋友的老公应该叫我什么？',
'午餐肉可以在晚餐吃吗？',
'我想配个六千元左右的电脑，大概要多少钱？',
'香菇掉粪坑里了还能叫香菇吗？',
'变形金刚买保险是买车险还是人险？',
'生蚝煮熟了之后叫什么？',
'老鼠生病了，可以吃老鼠药治好吗？',
'去自首的路上被抓了还算自首吗？',
'监狱里罪犯那么多，警察为什么不直接到监狱抓人？',
'地球上的望远镜能看到那么多星球，为什么看不到地球？']

print(prompts)
for prompt in prompts:
    response = openai.Completion.create(
      engine="text-davinci-003",
      prompt=prompt,
      max_tokens=100
    )
    print(response.choices[0].text.strip())