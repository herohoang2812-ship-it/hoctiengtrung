import { balanceAnswerPositions } from './balanceOptions.js';

export const LESEN_EXAMS = [
  {
    "id": 1,
    "level": "HSK 1",
    "title": "Học tiếng Trung tại 北京",
    "text": "我叫李华。我是北京人。我今年15岁。我喜欢喝苹果，天天去学校学习汉语。",
    "pinyin": "Wǒ jiào 李华. Wǒ shì 北京 rén. Wǒ jīnnián 15 suì. Wǒ xǐhuan hē 苹果, tiāntiān qù xuéxiào xuéxí Hànyǔ.",
    "translation": "Tôi tên là 李华. Tôi là người 北京. Năm nay tôi 15 tuổi. Tôi thích uống 苹果, ngày ngày đến trường học tiếng Trung.",
    "questions": [
      {
        "id": 101,
        "question": "文章中的人叫什么名字？ (Người trong đoạn văn tên là gì?)",
        "options": [
          "A. 李华",
          "B. 王老师",
          "C. 李医生",
          "D. 小猫"
        ],
        "correct": 0,
        "explanation": "Đáp án chính xác là A. 李华. Nội dung này được thể hiện trực tiếp trong bài đọc."
      },
      {
        "id": 102,
        "question": "他今年多大了？ (Cậu ấy năm nay bao nhiêu tuổi?)",
        "options": [
          "A. 10岁",
          "B. 15岁",
          "C. 40岁",
          "D. 50岁"
        ],
        "correct": 1,
        "explanation": "Đáp án chính xác là B. 15岁. Nội dung này được thể hiện trực tiếp trong bài đọc."
      },
      {
        "id": 103,
        "question": "他喜欢喝什么？ (Cậu ấy thích uống gì?)",
        "options": [
          "A. 苹果",
          "B. 咖啡",
          "C. 牛奶",
          "D. 啤酒"
        ],
        "correct": 0,
        "explanation": "Đáp án chính xác là A. 苹果. Nội dung này được thể hiện trực tiếp trong bài đọc."
      }
    ]
  },
  {
    "id": 2,
    "level": "HSK 1",
    "title": "Ngày thứ bảy ở nhà 张明",
    "text": "这里是张明的家。家里有四口人，今天星期六，全家人都在家里看电视、吃西瓜。",
    "pinyin": "Zhèlǐ shì 张明 de jiā. Jiālǐ yǒu sì kǒu rén, jīntiān xīngqīliù, quánjiā rén dōu zài jiālǐ kàn diànshì, chī 西瓜.",
    "translation": "Đây là nhà của 张明. Trong nhà có bốn người, hôm nay là thứ bảy, cả nhà đều ở nhà xem tivi, ăn 西瓜.",
    "questions": [
      {
        "id": 201,
        "question": "今天是星期几？ (Hôm nay là thứ mấy?)",
        "options": [
          "A. 星期一",
          "B. 星期五",
          "C. 星期六",
          "D. 星期天"
        ],
        "correct": 2,
        "explanation": "Đáp án chính xác là C. 星期六. Nội dung này được thể hiện trực tiếp trong bài đọc."
      },
      {
        "id": 202,
        "question": "他们家里有几口人？ (Nhà họ có mấy người?)",
        "options": [
          "A. 三口人",
          "B. 四口人",
          "C. 五口人",
          "D. 六口人"
        ],
        "correct": 1,
        "explanation": "Đáp án chính xác là B. 四口人. Nội dung này được thể hiện trực tiếp trong bài đọc."
      },
      {
        "id": 203,
        "question": "他们在家里做什么？ (Họ làm gì ở nhà?)",
        "options": [
          "A. 看电视、吃西瓜",
          "B. 睡觉",
          "C. 去商店",
          "D. 做工作"
        ],
        "correct": 0,
        "explanation": "Đáp án chính xác là A. 看电视、吃西瓜. Nội dung này được thể hiện trực tiếp trong bài đọc."
      }
    ]
  },
  {
    "id": 3,
    "level": "HSK 1",
    "title": "Kế hoạch ngày mưa của 小猫",
    "text": "今天中午下雨了，小猫不去外面的饭馆吃饭。他在房间里看书，下午三点去买东西。",
    "pinyin": "Jīntiān zhōngwǔ xiàyǔ le, 小猫 bú qù wàimiàn de fànguǎn chīfàn. Tā zài fángjiān lǐ kànshū, xiàwǔ sān diǎn qù mǎi dōngxi.",
    "translation": "Trưa hôm nay trời mưa, 小猫 không ra nhà hàng bên ngoài ăn cơm. Cậu ấy ở trong phòng đọc sách, ba giờ chiều đi mua đồ.",
    "questions": [
      {
        "id": 301,
        "question": "今天中午的天气怎么样？ (Thời tiết trưa nay thế nào?)",
        "options": [
          "A. 很好",
          "B. 下雨了",
          "C. 很热",
          "D. 刮大风"
        ],
        "correct": 1,
        "explanation": "Đáp án chính xác là B. 下雨了. Nội dung này được thể hiện trực tiếp trong bài đọc."
      },
      {
        "id": 302,
        "question": "他中午在哪儿吃饭？ (Cậu ấy ăn cơm trưa ở đâu?)",
        "options": [
          "A. 外面的饭馆",
          "B. 朋友家",
          "C. 房间里/家里",
          "D. 学校"
        ],
        "correct": 2,
        "explanation": "Đáp án chính xác là C. 房间里/家里. Nội dung này được thể hiện trực tiếp trong bài đọc."
      },
      {
        "id": 303,
        "question": "他下午几点去买东西？ (Mấy giờ chiều cậu ấy đi mua đồ?)",
        "options": [
          "A. 一点",
          "B. 两点",
          "C. 三点",
          "D. 四点"
        ],
        "correct": 2,
        "explanation": "Đáp án chính xác là C. 三点. Nội dung này được thể hiện trực tiếp trong bài đọc."
      }
    ]
  },
  {
    "id": 4,
    "level": "HSK 1",
    "title": "Học tiếng Trung tại 河内",
    "text": "我叫王老师。我是河内人。我今年18岁。我喜欢喝茶，天天去学校学习汉语。",
    "pinyin": "Wǒ jiào 王老师. Wǒ shì 河内 rén. Wǒ jīnnián 18 suì. Wǒ xǐhuan hē 茶, tiāntiān qù xuéxiào xuéxí Hànyǔ.",
    "translation": "Tôi tên là 王老师. Tôi là người 河内. Năm nay tôi 18 tuổi. Tôi thích uống 茶, ngày ngày đến trường học tiếng Trung.",
    "questions": [
      {
        "id": 401,
        "question": "文章中的人叫什么名字？ (Người trong đoạn văn tên là gì?)",
        "options": [
          "A. 王老师",
          "B. 王老师",
          "C. 李医生",
          "D. 小猫"
        ],
        "correct": 0,
        "explanation": "Đáp án chính xác là A. 王老师. Nội dung này được thể hiện trực tiếp trong bài đọc."
      },
      {
        "id": 402,
        "question": "他今年多大了？ (Cậu ấy năm nay bao nhiêu tuổi?)",
        "options": [
          "A. 10岁",
          "B. 18岁",
          "C. 40岁",
          "D. 50岁"
        ],
        "correct": 1,
        "explanation": "Đáp án chính xác là B. 18岁. Nội dung này được thể hiện trực tiếp trong bài đọc."
      },
      {
        "id": 403,
        "question": "他喜欢喝什么？ (Cậu ấy thích uống gì?)",
        "options": [
          "A. 茶",
          "B. 咖啡",
          "C. 牛奶",
          "D. 啤酒"
        ],
        "correct": 0,
        "explanation": "Đáp án chính xác là A. 茶. Nội dung này được thể hiện trực tiếp trong bài đọc."
      }
    ]
  },
  {
    "id": 5,
    "level": "HSK 1",
    "title": "Ngày thứ bảy ở nhà 刘医生",
    "text": "这里是刘医生的家。家里有四口人，今天星期六，全家人都在家里看电视、吃水。",
    "pinyin": "Zhèlǐ shì 刘医生 de jiā. Jiālǐ yǒu sì kǒu rén, jīntiān xīngqīliù, quánjiā rén dōu zài jiālǐ kàn diànshì, chī 水.",
    "translation": "Đây là nhà của 刘医生. Trong nhà có bốn người, hôm nay là thứ bảy, cả nhà đều ở nhà xem tivi, ăn 水.",
    "questions": [
      {
        "id": 501,
        "question": "今天是星期几？ (Hôm nay là thứ mấy?)",
        "options": [
          "A. 星期一",
          "B. 星期五",
          "C. 星期六",
          "D. 星期天"
        ],
        "correct": 2,
        "explanation": "Đáp án chính xác là C. 星期六. Nội dung này được thể hiện trực tiếp trong bài đọc."
      },
      {
        "id": 502,
        "question": "他们家里有几口人？ (Nhà họ có mấy người?)",
        "options": [
          "A. 三口人",
          "B. 四口人",
          "C. 五口人",
          "D. 六口人"
        ],
        "correct": 1,
        "explanation": "Đáp án chính xác là B. 四口人. Nội dung này được thể hiện trực tiếp trong bài đọc."
      },
      {
        "id": 503,
        "question": "他们在家里做什么？ (Họ làm gì ở nhà?)",
        "options": [
          "A. 看电视、吃水",
          "B. 睡觉",
          "C. 去商店",
          "D. 做工作"
        ],
        "correct": 0,
        "explanation": "Đáp án chính xác là A. 看电视、吃水. Nội dung này được thể hiện trực tiếp trong bài đọc."
      }
    ]
  },
  {
    "id": 6,
    "level": "HSK 1",
    "title": "Kế hoạch ngày mưa của 陈同学",
    "text": "今天中午下雨了，陈同学不去外面的饭馆吃饭。他在房间里看书，下午三点去买东西。",
    "pinyin": "Jīntiān zhōngwǔ xiàyǔ le, 陈同学 bú qù wàimiàn de fànguǎn chīfàn. Tā zài fángjiān lǐ kànshū, xiàwǔ sān diǎn qù mǎi dōngxi.",
    "translation": "Trưa hôm nay trời mưa, 陈同学 không ra nhà hàng bên ngoài ăn cơm. Cậu ấy ở trong phòng đọc sách, ba giờ chiều đi mua đồ.",
    "questions": [
      {
        "id": 601,
        "question": "今天中午的天气怎么样？ (Thời tiết trưa nay thế nào?)",
        "options": [
          "A. 很好",
          "B. 下雨了",
          "C. 很热",
          "D. 刮大风"
        ],
        "correct": 1,
        "explanation": "Đáp án chính xác là B. 下雨了. Nội dung này được thể hiện trực tiếp trong bài đọc."
      },
      {
        "id": 602,
        "question": "他中午在哪儿吃饭？ (Cậu ấy ăn cơm trưa ở đâu?)",
        "options": [
          "A. 外面的饭馆",
          "B. 朋友家",
          "C. 房间里/家里",
          "D. 学校"
        ],
        "correct": 2,
        "explanation": "Đáp án chính xác là C. 房间里/家里. Nội dung này được thể hiện trực tiếp trong bài đọc."
      },
      {
        "id": 603,
        "question": "他下午几点去买东西？ (Mấy giờ chiều cậu ấy đi mua đồ?)",
        "options": [
          "A. 一点",
          "B. 两点",
          "C. 三点",
          "D. 四点"
        ],
        "correct": 2,
        "explanation": "Đáp án chính xác là C. 三点. Nội dung này được thể hiện trực tiếp trong bài đọc."
      }
    ]
  },
  {
    "id": 7,
    "level": "HSK 1",
    "title": "Học tiếng Trung tại 上海",
    "text": "我叫安娜。我是上海人。我今年21岁。我喜欢喝西瓜，天天去学校学习汉语。",
    "pinyin": "Wǒ jiào 安娜. Wǒ shì 上海 rén. Wǒ jīnnián 21 suì. Wǒ xǐhuan hē 西瓜, tiāntiān qù xuéxiào xuéxí Hànyǔ.",
    "translation": "Tôi tên là 安娜. Tôi là người 上海. Năm nay tôi 21 tuổi. Tôi thích uống 西瓜, ngày ngày đến trường học tiếng Trung.",
    "questions": [
      {
        "id": 701,
        "question": "文章中的人叫什么名字？ (Người trong đoạn văn tên là gì?)",
        "options": [
          "A. 安娜",
          "B. 王老师",
          "C. 李医生",
          "D. 小猫"
        ],
        "correct": 0,
        "explanation": "Đáp án chính xác là A. 安娜. Nội dung này được thể hiện trực tiếp trong bài đọc."
      },
      {
        "id": 702,
        "question": "他今年多大了？ (Cậu ấy năm nay bao nhiêu tuổi?)",
        "options": [
          "A. 10岁",
          "B. 21岁",
          "C. 40岁",
          "D. 50岁"
        ],
        "correct": 1,
        "explanation": "Đáp án chính xác là B. 21岁. Nội dung này được thể hiện trực tiếp trong bài đọc."
      },
      {
        "id": 703,
        "question": "他喜欢喝什么？ (Cậu ấy thích uống gì?)",
        "options": [
          "A. 西瓜",
          "B. 咖啡",
          "C. 牛奶",
          "D. 啤酒"
        ],
        "correct": 0,
        "explanation": "Đáp án chính xác là A. 西瓜. Nội dung này được thể hiện trực tiếp trong bài đọc."
      }
    ]
  },
  {
    "id": 8,
    "level": "HSK 1",
    "title": "Ngày thứ bảy ở nhà 大卫",
    "text": "这里是大卫的家。家里有四口人，今天星期六，全家人都在家里看电视、吃香蕉。",
    "pinyin": "Zhèlǐ shì 大卫 de jiā. Jiālǐ yǒu sì kǒu rén, jīntiān xīngqīliù, quánjiā rén dōu zài jiālǐ kàn diànshì, chī 香蕉.",
    "translation": "Đây là nhà của 大卫. Trong nhà có bốn người, hôm nay là thứ bảy, cả nhà đều ở nhà xem tivi, ăn 香蕉.",
    "questions": [
      {
        "id": 801,
        "question": "今天是星期几？ (Hôm nay là thứ mấy?)",
        "options": [
          "A. 星期一",
          "B. 星期五",
          "C. 星期六",
          "D. 星期天"
        ],
        "correct": 2,
        "explanation": "Đáp án chính xác là C. 星期六. Nội dung này được thể hiện trực tiếp trong bài đọc."
      },
      {
        "id": 802,
        "question": "他们家里有几口人？ (Nhà họ có mấy người?)",
        "options": [
          "A. 三口人",
          "B. 四口人",
          "C. 五口人",
          "D. 六口人"
        ],
        "correct": 1,
        "explanation": "Đáp án chính xác là B. 四口人. Nội dung này được thể hiện trực tiếp trong bài đọc."
      },
      {
        "id": 803,
        "question": "他们在家里做什么？ (Họ làm gì ở nhà?)",
        "options": [
          "A. 看电视、吃香蕉",
          "B. 睡觉",
          "C. 去商店",
          "D. 做工作"
        ],
        "correct": 0,
        "explanation": "Đáp án chính xác là A. 看电视、吃香蕉. Nội dung này được thể hiện trực tiếp trong bài đọc."
      }
    ]
  },
  {
    "id": 9,
    "level": "HSK 1",
    "title": "Kế hoạch ngày mưa của 玛丽",
    "text": "今天中午下雨了，玛丽不去外面的饭馆吃饭。他在房间里看书，下午三点去买东西。",
    "pinyin": "Jīntiān zhōngwǔ xiàyǔ le, 玛丽 bú qù wàimiàn de fànguǎn chīfàn. Tā zài fángjiān lǐ kànshū, xiàwǔ sān diǎn qù mǎi dōngxi.",
    "translation": "Trưa hôm nay trời mưa, 玛丽 không ra nhà hàng bên ngoài ăn cơm. Cậu ấy ở trong phòng đọc sách, ba giờ chiều đi mua đồ.",
    "questions": [
      {
        "id": 901,
        "question": "今天中午的天气怎么样？ (Thời tiết trưa nay thế nào?)",
        "options": [
          "A. 很好",
          "B. 下雨了",
          "C. 很热",
          "D. 刮大风"
        ],
        "correct": 1,
        "explanation": "Đáp án chính xác là B. 下雨了. Nội dung này được thể hiện trực tiếp trong bài đọc."
      },
      {
        "id": 902,
        "question": "他中午在哪儿吃饭？ (Cậu ấy ăn cơm trưa ở đâu?)",
        "options": [
          "A. 外面的饭馆",
          "B. 朋友家",
          "C. 房间里/家里",
          "D. 学校"
        ],
        "correct": 2,
        "explanation": "Đáp án chính xác là C. 房间里/家里. Nội dung này được thể hiện trực tiếp trong bài đọc."
      },
      {
        "id": 903,
        "question": "他下午几点去买东西？ (Mấy giờ chiều cậu ấy đi mua đồ?)",
        "options": [
          "A. 一点",
          "B. 两点",
          "C. 三点",
          "D. 四点"
        ],
        "correct": 2,
        "explanation": "Đáp án chính xác là C. 三点. Nội dung này được thể hiện trực tiếp trong bài đọc."
      }
    ]
  },
  {
    "id": 10,
    "level": "HSK 1",
    "title": "Học tiếng Trung tại 西贡",
    "text": "我叫林华。我是西贡人。我今年24岁。我喜欢喝水，天天去学校学习汉语。",
    "pinyin": "Wǒ jiào 林华. Wǒ shì 西贡 rén. Wǒ jīnnián 24 suì. Wǒ xǐhuan hē 水, tiāntiān qù xuéxiào xuéxí Hànyǔ.",
    "translation": "Tôi tên là 林华. Tôi là người 西贡. Năm nay tôi 24 tuổi. Tôi thích uống 水, ngày ngày đến trường học tiếng Trung.",
    "questions": [
      {
        "id": 1001,
        "question": "文章中的人叫什么名字？ (Người trong đoạn văn tên là gì?)",
        "options": [
          "A. 林华",
          "B. 王老师",
          "C. 李医生",
          "D. 小猫"
        ],
        "correct": 0,
        "explanation": "Đáp án chính xác là A. 林华. Nội dung này được thể hiện trực tiếp trong bài đọc."
      },
      {
        "id": 1002,
        "question": "他今年多大了？ (Cậu ấy năm nay bao nhiêu tuổi?)",
        "options": [
          "A. 10岁",
          "B. 24岁",
          "C. 40岁",
          "D. 50岁"
        ],
        "correct": 1,
        "explanation": "Đáp án chính xác là B. 24岁. Nội dung này được thể hiện trực tiếp trong bài đọc."
      },
      {
        "id": 1003,
        "question": "他喜欢喝什么？ (Cậu ấy thích uống gì?)",
        "options": [
          "A. 水",
          "B. 咖啡",
          "C. 牛奶",
          "D. 啤酒"
        ],
        "correct": 0,
        "explanation": "Đáp án chính xác là A. 水. Nội dung này được thể hiện trực tiếp trong bài đọc."
      }
    ]
  },
  {
    "id": 11,
    "level": "HSK 1",
    "title": "Ngày thứ bảy ở nhà 李华",
    "text": "这里是李华的家。家里有四口人，今天星期六，全家人都在家里看电视、吃苹果。",
    "pinyin": "Zhèlǐ shì 李华 de jiā. Jiālǐ yǒu sì kǒu rén, jīntiān xīngqīliù, quánjiā rén dōu zài jiālǐ kàn diànshì, chī 苹果.",
    "translation": "Đây là nhà của 李华. Trong nhà có bốn người, hôm nay là thứ bảy, cả nhà đều ở nhà xem tivi, ăn 苹果.",
    "questions": [
      {
        "id": 1101,
        "question": "今天是星期几？ (Hôm nay là thứ mấy?)",
        "options": [
          "A. 星期一",
          "B. 星期五",
          "C. 星期六",
          "D. 星期天"
        ],
        "correct": 2,
        "explanation": "Đáp án chính xác là C. 星期六. Nội dung này được thể hiện trực tiếp trong bài đọc."
      },
      {
        "id": 1102,
        "question": "他们家里有几口人？ (Nhà họ có mấy người?)",
        "options": [
          "A. 三口人",
          "B. 四口人",
          "C. 五口人",
          "D. 六口人"
        ],
        "correct": 1,
        "explanation": "Đáp án chính xác là B. 四口人. Nội dung này được thể hiện trực tiếp trong bài đọc."
      },
      {
        "id": 1103,
        "question": "他们在家里做什么？ (Họ làm gì ở nhà?)",
        "options": [
          "A. 看电视、吃苹果",
          "B. 睡觉",
          "C. 去商店",
          "D. 做工作"
        ],
        "correct": 0,
        "explanation": "Đáp án chính xác là A. 看电视、吃苹果. Nội dung này được thể hiện trực tiếp trong bài đọc."
      }
    ]
  },
  {
    "id": 12,
    "level": "HSK 1",
    "title": "Kế hoạch ngày mưa của 张明",
    "text": "今天中午下雨了，张明不去外面的饭馆吃饭。他在房间里看书，下午三点去买东西。",
    "pinyin": "Jīntiān zhōngwǔ xiàyǔ le, 张明 bú qù wàimiàn de fànguǎn chīfàn. Tā zài fángjiān lǐ kànshū, xiàwǔ sān diǎn qù mǎi dōngxi.",
    "translation": "Trưa hôm nay trời mưa, 张明 không ra nhà hàng bên ngoài ăn cơm. Cậu ấy ở trong phòng đọc sách, ba giờ chiều đi mua đồ.",
    "questions": [
      {
        "id": 1201,
        "question": "今天中午的天气怎么样？ (Thời tiết trưa nay thế nào?)",
        "options": [
          "A. 很好",
          "B. 下雨了",
          "C. 很热",
          "D. 刮大风"
        ],
        "correct": 1,
        "explanation": "Đáp án chính xác là B. 下雨了. Nội dung này được thể hiện trực tiếp trong bài đọc."
      },
      {
        "id": 1202,
        "question": "他中午在哪儿吃饭？ (Cậu ấy ăn cơm trưa ở đâu?)",
        "options": [
          "A. 外面的饭馆",
          "B. 朋友家",
          "C. 房间里/家里",
          "D. 学校"
        ],
        "correct": 2,
        "explanation": "Đáp án chính xác là C. 房间里/家里. Nội dung này được thể hiện trực tiếp trong bài đọc."
      },
      {
        "id": 1203,
        "question": "他下午几点去买东西？ (Mấy giờ chiều cậu ấy đi mua đồ?)",
        "options": [
          "A. 一点",
          "B. 两点",
          "C. 三点",
          "D. 四点"
        ],
        "correct": 2,
        "explanation": "Đáp án chính xác là C. 三点. Nội dung này được thể hiện trực tiếp trong bài đọc."
      }
    ]
  },
  {
    "id": 13,
    "level": "HSK 1",
    "title": "Học tiếng Trung tại 广州",
    "text": "我叫小猫。我是广州人。我今年17岁。我喜欢喝香蕉，天天去学校学习汉语。",
    "pinyin": "Wǒ jiào 小猫. Wǒ shì 广州 rén. Wǒ jīnnián 17 suì. Wǒ xǐhuan hē 香蕉, tiāntiān qù xuéxiào xuéxí Hànyǔ.",
    "translation": "Tôi tên là 小猫. Tôi là người 广州. Năm nay tôi 17 tuổi. Tôi thích uống 香蕉, ngày ngày đến trường học tiếng Trung.",
    "questions": [
      {
        "id": 1301,
        "question": "文章中的人叫什么名字？ (Người trong đoạn văn tên là gì?)",
        "options": [
          "A. 小猫",
          "B. 王老师",
          "C. 李医生",
          "D. 小猫"
        ],
        "correct": 0,
        "explanation": "Đáp án chính xác là A. 小猫. Nội dung này được thể hiện trực tiếp trong bài đọc."
      },
      {
        "id": 1302,
        "question": "他今年多大了？ (Cậu ấy năm nay bao nhiêu tuổi?)",
        "options": [
          "A. 10岁",
          "B. 17岁",
          "C. 40岁",
          "D. 50岁"
        ],
        "correct": 1,
        "explanation": "Đáp án chính xác là B. 17岁. Nội dung này được thể hiện trực tiếp trong bài đọc."
      },
      {
        "id": 1303,
        "question": "他喜欢喝什么？ (Cậu ấy thích uống gì?)",
        "options": [
          "A. 香蕉",
          "B. 咖啡",
          "C. 牛奶",
          "D. 啤酒"
        ],
        "correct": 0,
        "explanation": "Đáp án chính xác là A. 香蕉. Nội dung này được thể hiện trực tiếp trong bài đọc."
      }
    ]
  },
  {
    "id": 14,
    "level": "HSK 1",
    "title": "Ngày thứ bảy ở nhà 王老师",
    "text": "这里是王老师的家。家里有四口人，今天星期六，全家人都在家里看电视、吃茶。",
    "pinyin": "Zhèlǐ shì 王老师 de jiā. Jiālǐ yǒu sì kǒu rén, jīntiān xīngqīliù, quánjiā rén dōu zài jiālǐ kàn diànshì, chī 茶.",
    "translation": "Đây là nhà của 王老师. Trong nhà có bốn người, hôm nay là thứ bảy, cả nhà đều ở nhà xem tivi, ăn 茶.",
    "questions": [
      {
        "id": 1401,
        "question": "今天是星期几？ (Hôm nay là thứ mấy?)",
        "options": [
          "A. 星期一",
          "B. 星期五",
          "C. 星期六",
          "D. 星期天"
        ],
        "correct": 2,
        "explanation": "Đáp án chính xác là C. 星期六. Nội dung này được thể hiện trực tiếp trong bài đọc."
      },
      {
        "id": 1402,
        "question": "他们家里有几口人？ (Nhà họ có mấy người?)",
        "options": [
          "A. 三口人",
          "B. 四口人",
          "C. 五口人",
          "D. 六口人"
        ],
        "correct": 1,
        "explanation": "Đáp án chính xác là B. 四口人. Nội dung này được thể hiện trực tiếp trong bài đọc."
      },
      {
        "id": 1403,
        "question": "他们在家里做什么？ (Họ làm gì ở nhà?)",
        "options": [
          "A. 看电视、吃茶",
          "B. 睡觉",
          "C. 去商店",
          "D. 做工作"
        ],
        "correct": 0,
        "explanation": "Đáp án chính xác là A. 看电视、吃茶. Nội dung này được thể hiện trực tiếp trong bài đọc."
      }
    ]
  },
  {
    "id": 15,
    "level": "HSK 1",
    "title": "Kế hoạch ngày mưa của 刘医生",
    "text": "今天中午下雨了，刘医生不去外面的饭馆吃饭。他在房间里看书，下午三点去买东西。",
    "pinyin": "Jīntiān zhōngwǔ xiàyǔ le, 刘医生 bú qù wàimiàn de fànguǎn chīfàn. Tā zài fángjiān lǐ kànshū, xiàwǔ sān diǎn qù mǎi dōngxi.",
    "translation": "Trưa hôm nay trời mưa, 刘医生 không ra nhà hàng bên ngoài ăn cơm. Cậu ấy ở trong phòng đọc sách, ba giờ chiều đi mua đồ.",
    "questions": [
      {
        "id": 1501,
        "question": "今天中午的天气怎么样？ (Thời tiết trưa nay thế nào?)",
        "options": [
          "A. 很好",
          "B. 下雨了",
          "C. 很热",
          "D. 刮大风"
        ],
        "correct": 1,
        "explanation": "Đáp án chính xác là B. 下雨了. Nội dung này được thể hiện trực tiếp trong bài đọc."
      },
      {
        "id": 1502,
        "question": "他中午在哪儿吃饭？ (Cậu ấy ăn cơm trưa ở đâu?)",
        "options": [
          "A. 外面的饭馆",
          "B. 朋友家",
          "C. 房间里/家里",
          "D. 学校"
        ],
        "correct": 2,
        "explanation": "Đáp án chính xác là C. 房间里/家里. Nội dung này được thể hiện trực tiếp trong bài đọc."
      },
      {
        "id": 1503,
        "question": "他下午几点去买东西？ (Mấy giờ chiều cậu ấy đi mua đồ?)",
        "options": [
          "A. 一点",
          "B. 两点",
          "C. 三点",
          "D. 四点"
        ],
        "correct": 2,
        "explanation": "Đáp án chính xác là C. 三点. Nội dung này được thể hiện trực tiếp trong bài đọc."
      }
    ]
  },
  {
    "id": 16,
    "level": "HSK 1",
    "title": "Học tiếng Trung tại 北京",
    "text": "我叫陈同学。我是北京人。我今年20岁。我喜欢喝苹果，天天去学校学习汉语。",
    "pinyin": "Wǒ jiào 陈同学. Wǒ shì 北京 rén. Wǒ jīnnián 20 suì. Wǒ xǐhuan hē 苹果, tiāntiān qù xuéxiào xuéxí Hànyǔ.",
    "translation": "Tôi tên là 陈同学. Tôi là người 北京. Năm nay tôi 20 tuổi. Tôi thích uống 苹果, ngày ngày đến trường học tiếng Trung.",
    "questions": [
      {
        "id": 1601,
        "question": "文章中的人叫什么名字？ (Người trong đoạn văn tên là gì?)",
        "options": [
          "A. 陈同学",
          "B. 王老师",
          "C. 李医生",
          "D. 小猫"
        ],
        "correct": 0,
        "explanation": "Đáp án chính xác là A. 陈同学. Nội dung này được thể hiện trực tiếp trong bài đọc."
      },
      {
        "id": 1602,
        "question": "他今年多大了？ (Cậu ấy năm nay bao nhiêu tuổi?)",
        "options": [
          "A. 10岁",
          "B. 20岁",
          "C. 40岁",
          "D. 50岁"
        ],
        "correct": 1,
        "explanation": "Đáp án chính xác là B. 20岁. Nội dung này được thể hiện trực tiếp trong bài đọc."
      },
      {
        "id": 1603,
        "question": "他喜欢喝什么？ (Cậu ấy thích uống gì?)",
        "options": [
          "A. 苹果",
          "B. 咖啡",
          "C. 牛奶",
          "D. 啤酒"
        ],
        "correct": 0,
        "explanation": "Đáp án chính xác là A. 苹果. Nội dung này được thể hiện trực tiếp trong bài đọc."
      }
    ]
  },
  {
    "id": 17,
    "level": "HSK 1",
    "title": "Ngày thứ bảy ở nhà 安娜",
    "text": "这里是安娜的家。家里有四口人，今天星期六，全家人都在家里看电视、吃西瓜。",
    "pinyin": "Zhèlǐ shì 安娜 de jiā. Jiālǐ yǒu sì kǒu rén, jīntiān xīngqīliù, quánjiā rén dōu zài jiālǐ kàn diànshì, chī 西瓜.",
    "translation": "Đây là nhà của 安娜. Trong nhà có bốn người, hôm nay là thứ bảy, cả nhà đều ở nhà xem tivi, ăn 西瓜.",
    "questions": [
      {
        "id": 1701,
        "question": "今天是星期几？ (Hôm nay là thứ mấy?)",
        "options": [
          "A. 星期一",
          "B. 星期五",
          "C. 星期六",
          "D. 星期天"
        ],
        "correct": 2,
        "explanation": "Đáp án chính xác là C. 星期六. Nội dung này được thể hiện trực tiếp trong bài đọc."
      },
      {
        "id": 1702,
        "question": "他们家里有几口人？ (Nhà họ có mấy người?)",
        "options": [
          "A. 三口人",
          "B. 四口人",
          "C. 五口人",
          "D. 六口人"
        ],
        "correct": 1,
        "explanation": "Đáp án chính xác là B. 四口人. Nội dung này được thể hiện trực tiếp trong bài đọc."
      },
      {
        "id": 1703,
        "question": "他们在家里做什么？ (Họ làm gì ở nhà?)",
        "options": [
          "A. 看电视、吃西瓜",
          "B. 睡觉",
          "C. 去商店",
          "D. 做工作"
        ],
        "correct": 0,
        "explanation": "Đáp án chính xác là A. 看电视、吃西瓜. Nội dung này được thể hiện trực tiếp trong bài đọc."
      }
    ]
  },
  {
    "id": 18,
    "level": "HSK 1",
    "title": "Kế hoạch ngày mưa của 大卫",
    "text": "今天中午下雨了，大卫不去外面的饭馆吃饭。他在房间里看书，下午三点去买东西。",
    "pinyin": "Jīntiān zhōngwǔ xiàyǔ le, 大卫 bú qù wàimiàn de fànguǎn chīfàn. Tā zài fángjiān lǐ kànshū, xiàwǔ sān diǎn qù mǎi dōngxi.",
    "translation": "Trưa hôm nay trời mưa, 大卫 không ra nhà hàng bên ngoài ăn cơm. Cậu ấy ở trong phòng đọc sách, ba giờ chiều đi mua đồ.",
    "questions": [
      {
        "id": 1801,
        "question": "今天中午的天气怎么样？ (Thời tiết trưa nay thế nào?)",
        "options": [
          "A. 很好",
          "B. 下雨了",
          "C. 很热",
          "D. 刮大风"
        ],
        "correct": 1,
        "explanation": "Đáp án chính xác là B. 下雨了. Nội dung này được thể hiện trực tiếp trong bài đọc."
      },
      {
        "id": 1802,
        "question": "他中午在哪儿吃饭？ (Cậu ấy ăn cơm trưa ở đâu?)",
        "options": [
          "A. 外面的饭馆",
          "B. 朋友家",
          "C. 房间里/家里",
          "D. 学校"
        ],
        "correct": 2,
        "explanation": "Đáp án chính xác là C. 房间里/家里. Nội dung này được thể hiện trực tiếp trong bài đọc."
      },
      {
        "id": 1803,
        "question": "他下午几点去买东西？ (Mấy giờ chiều cậu ấy đi mua đồ?)",
        "options": [
          "A. 一点",
          "B. 两点",
          "C. 三点",
          "D. 四点"
        ],
        "correct": 2,
        "explanation": "Đáp án chính xác là C. 三点. Nội dung này được thể hiện trực tiếp trong bài đọc."
      }
    ]
  },
  {
    "id": 19,
    "level": "HSK 1",
    "title": "Học tiếng Trung tại 河内",
    "text": "我叫玛丽。我是河内人。我今年23岁。我喜欢喝茶，天天去学校学习汉语。",
    "pinyin": "Wǒ jiào 玛丽. Wǒ shì 河内 rén. Wǒ jīnnián 23 suì. Wǒ xǐhuan hē 茶, tiāntiān qù xuéxiào xuéxí Hànyǔ.",
    "translation": "Tôi tên là 玛丽. Tôi là người 河内. Năm nay tôi 23 tuổi. Tôi thích uống 茶, ngày ngày đến trường học tiếng Trung.",
    "questions": [
      {
        "id": 1901,
        "question": "文章中的人叫什么名字？ (Người trong đoạn văn tên là gì?)",
        "options": [
          "A. 玛丽",
          "B. 王老师",
          "C. 李医生",
          "D. 小猫"
        ],
        "correct": 0,
        "explanation": "Đáp án chính xác là A. 玛丽. Nội dung này được thể hiện trực tiếp trong bài đọc."
      },
      {
        "id": 1902,
        "question": "他今年多大了？ (Cậu ấy năm nay bao nhiêu tuổi?)",
        "options": [
          "A. 10岁",
          "B. 23岁",
          "C. 40岁",
          "D. 50岁"
        ],
        "correct": 1,
        "explanation": "Đáp án chính xác là B. 23岁. Nội dung này được thể hiện trực tiếp trong bài đọc."
      },
      {
        "id": 1903,
        "question": "他喜欢喝什么？ (Cậu ấy thích uống gì?)",
        "options": [
          "A. 茶",
          "B. 咖啡",
          "C. 牛奶",
          "D. 啤酒"
        ],
        "correct": 0,
        "explanation": "Đáp án chính xác là A. 茶. Nội dung này được thể hiện trực tiếp trong bài đọc."
      }
    ]
  },
  {
    "id": 20,
    "level": "HSK 1",
    "title": "Ngày thứ bảy ở nhà 林华",
    "text": "这里是林华的家。家里有四口人，今天星期六，全家人都在家里看电视、吃水。",
    "pinyin": "Zhèlǐ shì 林华 de jiā. Jiālǐ yǒu sì kǒu rén, jīntiān xīngqīliù, quánjiā rén dōu zài jiālǐ kàn diànshì, chī 水.",
    "translation": "Đây là nhà của 林华. Trong nhà có bốn người, hôm nay là thứ bảy, cả nhà đều ở nhà xem tivi, ăn 水.",
    "questions": [
      {
        "id": 2001,
        "question": "今天是星期几？ (Hôm nay là thứ mấy?)",
        "options": [
          "A. 星期一",
          "B. 星期五",
          "C. 星期六",
          "D. 星期天"
        ],
        "correct": 2,
        "explanation": "Đáp án chính xác là C. 星期六. Nội dung này được thể hiện trực tiếp trong bài đọc."
      },
      {
        "id": 2002,
        "question": "他们家里有几口人？ (Nhà họ có mấy người?)",
        "options": [
          "A. 三口人",
          "B. 四口人",
          "C. 五口人",
          "D. 六口人"
        ],
        "correct": 1,
        "explanation": "Đáp án chính xác là B. 四口人. Nội dung này được thể hiện trực tiếp trong bài đọc."
      },
      {
        "id": 2003,
        "question": "他们在家里做什么？ (Họ làm gì ở nhà?)",
        "options": [
          "A. 看电视、吃水",
          "B. 睡觉",
          "C. 去商店",
          "D. 做工作"
        ],
        "correct": 0,
        "explanation": "Đáp án chính xác là A. 看电视、吃水. Nội dung này được thể hiện trực tiếp trong bài đọc."
      }
    ]
  },
  {
    "id": 21,
    "level": "HSK 1",
    "title": "Kế hoạch ngày mưa của 李华",
    "text": "今天中午下雨了，李华不去外面的饭馆吃饭。他在房间里看书，下午三点去买东西。",
    "pinyin": "Jīntiān zhōngwǔ xiàyǔ le, 李华 bú qù wàimiàn de fànguǎn chīfàn. Tā zài fángjiān lǐ kànshū, xiàwǔ sān diǎn qù mǎi dōngxi.",
    "translation": "Trưa hôm nay trời mưa, 李华 không ra nhà hàng bên ngoài ăn cơm. Cậu ấy ở trong phòng đọc sách, ba giờ chiều đi mua đồ.",
    "questions": [
      {
        "id": 2101,
        "question": "今天中午的天气怎么样？ (Thời tiết trưa nay thế nào?)",
        "options": [
          "A. 很好",
          "B. 下雨了",
          "C. 很热",
          "D. 刮大风"
        ],
        "correct": 1,
        "explanation": "Đáp án chính xác là B. 下雨了. Nội dung này được thể hiện trực tiếp trong bài đọc."
      },
      {
        "id": 2102,
        "question": "他中午在哪儿吃饭？ (Cậu ấy ăn cơm trưa ở đâu?)",
        "options": [
          "A. 外面的饭馆",
          "B. 朋友家",
          "C. 房间里/家里",
          "D. 学校"
        ],
        "correct": 2,
        "explanation": "Đáp án chính xác là C. 房间里/家里. Nội dung này được thể hiện trực tiếp trong bài đọc."
      },
      {
        "id": 2103,
        "question": "他下午几点去买东西？ (Mấy giờ chiều cậu ấy đi mua đồ?)",
        "options": [
          "A. 一点",
          "B. 两点",
          "C. 三点",
          "D. 四点"
        ],
        "correct": 2,
        "explanation": "Đáp án chính xác là C. 三点. Nội dung này được thể hiện trực tiếp trong bài đọc."
      }
    ]
  },
  {
    "id": 22,
    "level": "HSK 1",
    "title": "Học tiếng Trung tại 上海",
    "text": "我叫张明。我是上海人。我今年16岁。我喜欢喝西瓜，天天去学校学习汉语。",
    "pinyin": "Wǒ jiào 张明. Wǒ shì 上海 rén. Wǒ jīnnián 16 suì. Wǒ xǐhuan hē 西瓜, tiāntiān qù xuéxiào xuéxí Hànyǔ.",
    "translation": "Tôi tên là 张明. Tôi là người 上海. Năm nay tôi 16 tuổi. Tôi thích uống 西瓜, ngày ngày đến trường học tiếng Trung.",
    "questions": [
      {
        "id": 2201,
        "question": "文章中的人叫什么名字？ (Người trong đoạn văn tên là gì?)",
        "options": [
          "A. 张明",
          "B. 王老师",
          "C. 李医生",
          "D. 小猫"
        ],
        "correct": 0,
        "explanation": "Đáp án chính xác là A. 张明. Nội dung này được thể hiện trực tiếp trong bài đọc."
      },
      {
        "id": 2202,
        "question": "他今年多大了？ (Cậu ấy năm nay bao nhiêu tuổi?)",
        "options": [
          "A. 10岁",
          "B. 16岁",
          "C. 40岁",
          "D. 50岁"
        ],
        "correct": 1,
        "explanation": "Đáp án chính xác là B. 16岁. Nội dung này được thể hiện trực tiếp trong bài đọc."
      },
      {
        "id": 2203,
        "question": "他喜欢喝什么？ (Cậu ấy thích uống gì?)",
        "options": [
          "A. 西瓜",
          "B. 咖啡",
          "C. 牛奶",
          "D. 啤酒"
        ],
        "correct": 0,
        "explanation": "Đáp án chính xác là A. 西瓜. Nội dung này được thể hiện trực tiếp trong bài đọc."
      }
    ]
  },
  {
    "id": 23,
    "level": "HSK 1",
    "title": "Ngày thứ bảy ở nhà 小猫",
    "text": "这里是小猫的家。家里有四口人，今天星期六，全家人都在家里看电视、吃香蕉。",
    "pinyin": "Zhèlǐ shì 小猫 de jiā. Jiālǐ yǒu sì kǒu rén, jīntiān xīngqīliù, quánjiā rén dōu zài jiālǐ kàn diànshì, chī 香蕉.",
    "translation": "Đây là nhà của 小猫. Trong nhà có bốn người, hôm nay là thứ bảy, cả nhà đều ở nhà xem tivi, ăn 香蕉.",
    "questions": [
      {
        "id": 2301,
        "question": "今天是星期几？ (Hôm nay là thứ mấy?)",
        "options": [
          "A. 星期一",
          "B. 星期五",
          "C. 星期六",
          "D. 星期天"
        ],
        "correct": 2,
        "explanation": "Đáp án chính xác là C. 星期六. Nội dung này được thể hiện trực tiếp trong bài đọc."
      },
      {
        "id": 2302,
        "question": "他们家里有几口人？ (Nhà họ có mấy người?)",
        "options": [
          "A. 三口人",
          "B. 四口人",
          "C. 五口人",
          "D. 六口人"
        ],
        "correct": 1,
        "explanation": "Đáp án chính xác là B. 四口人. Nội dung này được thể hiện trực tiếp trong bài đọc."
      },
      {
        "id": 2303,
        "question": "他们在家里做什么？ (Họ làm gì ở nhà?)",
        "options": [
          "A. 看电视、吃香蕉",
          "B. 睡觉",
          "C. 去商店",
          "D. 做工作"
        ],
        "correct": 0,
        "explanation": "Đáp án chính xác là A. 看电视、吃香蕉. Nội dung này được thể hiện trực tiếp trong bài đọc."
      }
    ]
  },
  {
    "id": 24,
    "level": "HSK 1",
    "title": "Kế hoạch ngày mưa của 王老师",
    "text": "今天中午下雨了，王老师不去外面的饭馆吃饭。他在房间里看书，下午三点去买东西。",
    "pinyin": "Jīntiān zhōngwǔ xiàyǔ le, 王老师 bú qù wàimiàn de fànguǎn chīfàn. Tā zài fángjiān lǐ kànshū, xiàwǔ sān diǎn qù mǎi dōngxi.",
    "translation": "Trưa hôm nay trời mưa, 王老师 không ra nhà hàng bên ngoài ăn cơm. Cậu ấy ở trong phòng đọc sách, ba giờ chiều đi mua đồ.",
    "questions": [
      {
        "id": 2401,
        "question": "今天中午的天气怎么样？ (Thời tiết trưa nay thế nào?)",
        "options": [
          "A. 很好",
          "B. 下雨了",
          "C. 很热",
          "D. 刮大风"
        ],
        "correct": 1,
        "explanation": "Đáp án chính xác là B. 下雨了. Nội dung này được thể hiện trực tiếp trong bài đọc."
      },
      {
        "id": 2402,
        "question": "他中午在哪儿吃饭？ (Cậu ấy ăn cơm trưa ở đâu?)",
        "options": [
          "A. 外面的饭馆",
          "B. 朋友家",
          "C. 房间里/家里",
          "D. 学校"
        ],
        "correct": 2,
        "explanation": "Đáp án chính xác là C. 房间里/家里. Nội dung này được thể hiện trực tiếp trong bài đọc."
      },
      {
        "id": 2403,
        "question": "他下午几点去买东西？ (Mấy giờ chiều cậu ấy đi mua đồ?)",
        "options": [
          "A. 一点",
          "B. 两点",
          "C. 三点",
          "D. 四点"
        ],
        "correct": 2,
        "explanation": "Đáp án chính xác là C. 三点. Nội dung này được thể hiện trực tiếp trong bài đọc."
      }
    ]
  },
  {
    "id": 25,
    "level": "HSK 1",
    "title": "Học tiếng Trung tại 西贡",
    "text": "我叫刘医生。我是西贡人。我今年19岁。我喜欢喝水，天天去学校学习汉语。",
    "pinyin": "Wǒ jiào 刘医生. Wǒ shì 西贡 rén. Wǒ jīnnián 19 suì. Wǒ xǐhuan hē 水, tiāntiān qù xuéxiào xuéxí Hànyǔ.",
    "translation": "Tôi tên là 刘医生. Tôi là người 西贡. Năm nay tôi 19 tuổi. Tôi thích uống 水, ngày ngày đến trường học tiếng Trung.",
    "questions": [
      {
        "id": 2501,
        "question": "文章中的人叫什么名字？ (Người trong đoạn văn tên là gì?)",
        "options": [
          "A. 刘医生",
          "B. 王老师",
          "C. 李医生",
          "D. 小猫"
        ],
        "correct": 0,
        "explanation": "Đáp án chính xác là A. 刘医生. Nội dung này được thể hiện trực tiếp trong bài đọc."
      },
      {
        "id": 2502,
        "question": "他今年多大了？ (Cậu ấy năm nay bao nhiêu tuổi?)",
        "options": [
          "A. 10岁",
          "B. 19岁",
          "C. 40岁",
          "D. 50岁"
        ],
        "correct": 1,
        "explanation": "Đáp án chính xác là B. 19岁. Nội dung này được thể hiện trực tiếp trong bài đọc."
      },
      {
        "id": 2503,
        "question": "他喜欢喝什么？ (Cậu ấy thích uống gì?)",
        "options": [
          "A. 水",
          "B. 咖啡",
          "C. 牛奶",
          "D. 啤酒"
        ],
        "correct": 0,
        "explanation": "Đáp án chính xác là A. 水. Nội dung này được thể hiện trực tiếp trong bài đọc."
      }
    ]
  },
  {
    "id": 26,
    "level": "HSK 1",
    "title": "Ngày thứ bảy ở nhà 陈同学",
    "text": "这里是陈同学的家。家里有四口人，今天星期六，全家人都在家里看电视、吃苹果。",
    "pinyin": "Zhèlǐ shì 陈同学 de jiā. Jiālǐ yǒu sì kǒu rén, jīntiān xīngqīliù, quánjiā rén dōu zài jiālǐ kàn diànshì, chī 苹果.",
    "translation": "Đây là nhà của 陈同学. Trong nhà có bốn người, hôm nay là thứ bảy, cả nhà đều ở nhà xem tivi, ăn 苹果.",
    "questions": [
      {
        "id": 2601,
        "question": "今天是星期几？ (Hôm nay là thứ mấy?)",
        "options": [
          "A. 星期一",
          "B. 星期五",
          "C. 星期六",
          "D. 星期天"
        ],
        "correct": 2,
        "explanation": "Đáp án chính xác là C. 星期六. Nội dung này được thể hiện trực tiếp trong bài đọc."
      },
      {
        "id": 2602,
        "question": "他们家里有几口人？ (Nhà họ có mấy người?)",
        "options": [
          "A. 三口人",
          "B. 四口人",
          "C. 五口人",
          "D. 六口人"
        ],
        "correct": 1,
        "explanation": "Đáp án chính xác là B. 四口人. Nội dung này được thể hiện trực tiếp trong bài đọc."
      },
      {
        "id": 2603,
        "question": "他们在家里做什么？ (Họ làm gì ở nhà?)",
        "options": [
          "A. 看电视、吃苹果",
          "B. 睡觉",
          "C. 去商店",
          "D. 做工作"
        ],
        "correct": 0,
        "explanation": "Đáp án chính xác là A. 看电视、吃苹果. Nội dung này được thể hiện trực tiếp trong bài đọc."
      }
    ]
  },
  {
    "id": 27,
    "level": "HSK 1",
    "title": "Kế hoạch ngày mưa của 安娜",
    "text": "今天中午下雨了，安娜不去外面的饭馆吃饭。他在房间里看书，下午三点去买东西。",
    "pinyin": "Jīntiān zhōngwǔ xiàyǔ le, 安娜 bú qù wàimiàn de fànguǎn chīfàn. Tā zài fángjiān lǐ kànshū, xiàwǔ sān diǎn qù mǎi dōngxi.",
    "translation": "Trưa hôm nay trời mưa, 安娜 không ra nhà hàng bên ngoài ăn cơm. Cậu ấy ở trong phòng đọc sách, ba giờ chiều đi mua đồ.",
    "questions": [
      {
        "id": 2701,
        "question": "今天中午的天气怎么样？ (Thời tiết trưa nay thế nào?)",
        "options": [
          "A. 很好",
          "B. 下雨了",
          "C. 很热",
          "D. 刮大风"
        ],
        "correct": 1,
        "explanation": "Đáp án chính xác là B. 下雨了. Nội dung này được thể hiện trực tiếp trong bài đọc."
      },
      {
        "id": 2702,
        "question": "他中午在哪儿吃饭？ (Cậu ấy ăn cơm trưa ở đâu?)",
        "options": [
          "A. 外面的饭馆",
          "B. 朋友家",
          "C. 房间里/家里",
          "D. 学校"
        ],
        "correct": 2,
        "explanation": "Đáp án chính xác là C. 房间里/家里. Nội dung này được thể hiện trực tiếp trong bài đọc."
      },
      {
        "id": 2703,
        "question": "他下午几点去买东西？ (Mấy giờ chiều cậu ấy đi mua đồ?)",
        "options": [
          "A. 一点",
          "B. 两点",
          "C. 三点",
          "D. 四点"
        ],
        "correct": 2,
        "explanation": "Đáp án chính xác là C. 三点. Nội dung này được thể hiện trực tiếp trong bài đọc."
      }
    ]
  },
  {
    "id": 28,
    "level": "HSK 1",
    "title": "Học tiếng Trung tại 广州",
    "text": "我叫大卫。我是广州人。我今年22岁。我喜欢喝香蕉，天天去学校学习汉语。",
    "pinyin": "Wǒ jiào 大卫. Wǒ shì 广州 rén. Wǒ jīnnián 22 suì. Wǒ xǐhuan hē 香蕉, tiāntiān qù xuéxiào xuéxí Hànyǔ.",
    "translation": "Tôi tên là 大卫. Tôi là người 广州. Năm nay tôi 22 tuổi. Tôi thích uống 香蕉, ngày ngày đến trường học tiếng Trung.",
    "questions": [
      {
        "id": 2801,
        "question": "文章中的人叫什么名字？ (Người trong đoạn văn tên là gì?)",
        "options": [
          "A. 大卫",
          "B. 王老师",
          "C. 李医生",
          "D. 小猫"
        ],
        "correct": 0,
        "explanation": "Đáp án chính xác là A. 大卫. Nội dung này được thể hiện trực tiếp trong bài đọc."
      },
      {
        "id": 2802,
        "question": "他今年多大了？ (Cậu ấy năm nay bao nhiêu tuổi?)",
        "options": [
          "A. 10岁",
          "B. 22岁",
          "C. 40岁",
          "D. 50岁"
        ],
        "correct": 1,
        "explanation": "Đáp án chính xác là B. 22岁. Nội dung này được thể hiện trực tiếp trong bài đọc."
      },
      {
        "id": 2803,
        "question": "他喜欢喝什么？ (Cậu ấy thích uống gì?)",
        "options": [
          "A. 香蕉",
          "B. 咖啡",
          "C. 牛奶",
          "D. 啤酒"
        ],
        "correct": 0,
        "explanation": "Đáp án chính xác là A. 香蕉. Nội dung này được thể hiện trực tiếp trong bài đọc."
      }
    ]
  },
  {
    "id": 29,
    "level": "HSK 1",
    "title": "Ngày thứ bảy ở nhà 玛丽",
    "text": "这里是玛丽的家。家里有四口人，今天星期六，全家人都在家里看电视、吃茶。",
    "pinyin": "Zhèlǐ shì 玛丽 de jiā. Jiālǐ yǒu sì kǒu rén, jīntiān xīngqīliù, quánjiā rén dōu zài jiālǐ kàn diànshì, chī 茶.",
    "translation": "Đây là nhà của 玛丽. Trong nhà có bốn người, hôm nay là thứ bảy, cả nhà đều ở nhà xem tivi, ăn 茶.",
    "questions": [
      {
        "id": 2901,
        "question": "今天是星期几？ (Hôm nay là thứ mấy?)",
        "options": [
          "A. 星期一",
          "B. 星期五",
          "C. 星期六",
          "D. 星期天"
        ],
        "correct": 2,
        "explanation": "Đáp án chính xác là C. 星期六. Nội dung này được thể hiện trực tiếp trong bài đọc."
      },
      {
        "id": 2902,
        "question": "他们家里有几口人？ (Nhà họ có mấy người?)",
        "options": [
          "A. 三口人",
          "B. 四口人",
          "C. 五口人",
          "D. 六口人"
        ],
        "correct": 1,
        "explanation": "Đáp án chính xác là B. 四口人. Nội dung này được thể hiện trực tiếp trong bài đọc."
      },
      {
        "id": 2903,
        "question": "他们在家里做什么？ (Họ làm gì ở nhà?)",
        "options": [
          "A. 看电视、吃茶",
          "B. 睡觉",
          "C. 去商店",
          "D. 做工作"
        ],
        "correct": 0,
        "explanation": "Đáp án chính xác là A. 看电视、吃茶. Nội dung này được thể hiện trực tiếp trong bài đọc."
      }
    ]
  },
  {
    "id": 30,
    "level": "HSK 1",
    "title": "Kế hoạch ngày mưa của 林华",
    "text": "今天中午下雨了，林华不去外面的饭馆吃饭。他在房间里看书，下午三点去买东西。",
    "pinyin": "Jīntiān zhōngwǔ xiàyǔ le, 林华 bú qù wàimiàn de fànguǎn chīfàn. Tā zài fángjiān lǐ kànshū, xiàwǔ sān diǎn qù mǎi dōngxi.",
    "translation": "Trưa hôm nay trời mưa, 林华 không ra nhà hàng bên ngoài ăn cơm. Cậu ấy ở trong phòng đọc sách, ba giờ chiều đi mua đồ.",
    "questions": [
      {
        "id": 3001,
        "question": "今天中午的天气怎么样？ (Thời tiết trưa nay thế nào?)",
        "options": [
          "A. 很好",
          "B. 下雨了",
          "C. 很热",
          "D. 刮大风"
        ],
        "correct": 1,
        "explanation": "Đáp án chính xác là B. 下雨了. Nội dung này được thể hiện trực tiếp trong bài đọc."
      },
      {
        "id": 3002,
        "question": "他中午在哪儿吃饭？ (Cậu ấy ăn cơm trưa ở đâu?)",
        "options": [
          "A. 外面的饭馆",
          "B. 朋友家",
          "C. 房间里/家里",
          "D. 学校"
        ],
        "correct": 2,
        "explanation": "Đáp án chính xác là C. 房间里/家里. Nội dung này được thể hiện trực tiếp trong bài đọc."
      },
      {
        "id": 3003,
        "question": "他下午几点去买东西？ (Mấy giờ chiều cậu ấy đi mua đồ?)",
        "options": [
          "A. 一点",
          "B. 两点",
          "C. 三点",
          "D. 四点"
        ],
        "correct": 2,
        "explanation": "Đáp án chính xác là C. 三点. Nội dung này được thể hiện trực tiếp trong bài đọc."
      }
    ]
  },
  {
    "id": 31,
    "level": "HSK 2",
    "title": "Sở thích du lịch của 李华",
    "text": "李华特别喜欢旅游。去年他坐火车去了北京，今年他打算和姐姐一起坐飞机去西安。他觉得旅游可以让他看到很多美丽的地方，虽然有点累，但是很快乐。",
    "pinyin": "李华 tèbié xǐhuan lǚyóu. Qùnián tā zuò huǒchē qùle Běijīng, jīnnián tā dǎsuàn hé jiějie yīqǐ zuò fēijī qù Xī'ān. Tā juéde lǚyóu kěyǐ ràng tā kàndào hěnduō měilì de dìfang, suīrán yǒudiǎn lèi, dànshì hěn kuàilè.",
    "translation": "李华 đặc biệt thích đi du lịch. Năm ngoái anh ấy đi Bắc Kinh bằng tàu hỏa, năm nay định cùng chị gái đi Tây An bằng máy bay. Anh ấy thấy du lịch có thể giúp mình ngắm nhìn nhiều nơi xinh đẹp, tuy có chút mệt nhưng rất vui vẻ.",
    "questions": [
      {
        "id": 3101,
        "question": "李华去年怎么去北京的？ (Năm ngoái anh ấy đi Bắc Kinh bằng gì?)",
        "options": [
          "A. 坐火车 (Tàu hỏa)",
          "B. 坐飞机 (Máy bay)",
          "C. 出租车 (Taxi)",
          "D. 跑步 (Chạy bộ)"
        ],
        "correct": 0,
        "explanation": "Đáp án chính xác là A. 坐火车 (Tàu hỏa). Nội dung này được thể hiện trực tiếp trong bài đọc."
      },
      {
        "id": 3102,
        "question": "今年 打算和谁去西安？ (Năm nay anh ấy định đi Tây An cùng ai?)",
        "options": [
          "A. 哥哥",
          "B. 姐姐",
          "C. 朋友",
          "D. 老师"
        ],
        "correct": 1,
        "explanation": "Đáp án chính xác là B. 姐姐. Nội dung này được thể hiện trực tiếp trong bài đọc."
      },
      {
        "id": 3103,
        "question": "他觉得 thế nào？",
        "options": [
          "A. 太贵了",
          "B. 没意思",
          "C. 虽然累但是快乐",
          "D. 很不舒服"
        ],
        "correct": 2,
        "explanation": "Đáp án chính xác là C. 虽然累但是快乐. Nội dung này được thể hiện trực tiếp trong bài đọc."
      }
    ]
  },
  {
    "id": 32,
    "level": "HSK 2",
    "title": "Lời khuyên sức khỏe cho 张明",
    "text": "张医生的生病建议：多喝热牛奶，晚上早点睡觉，不要总是工作到深夜。张明听了医生的话，现在身体比以前好多了，脸色也变得很好看。",
    "pinyin": "Zhāng yīshēng de shēngbìng jiànyì: duō hē rè niúnǎi, wǎnshang zǎodiǎn shuìjiào, búyào zǒngshì gōngzuò dào shēnyè. 张明 tīngle yīshēng de huà, xiànzài shēntǐ bǐ yǐqián hǎoduō le, liǎnsè yě biànde hěn hǎokàn.",
    "translation": "Lời khuyên của bác sĩ Trương: Uống nhiều sữa bò ấm, buổi tối đi ngủ sớm một chút, đừng luôn làm việc đến đêm muộn. 张明 nghe lời bác sĩ, giờ cơ thể tốt hơn trước nhiều, sắc mặt cũng trở nên hồng hào đẹp đẽ.",
    "questions": [
      {
        "id": 3201,
        "question": "医生建议晚上做什么？ (Bác sĩ khuyên buổi tối làm gì?)",
        "options": [
          "A. 晚点睡觉",
          "B. 早点睡觉",
          "C. 继续工作",
          "D. 去跑步"
        ],
        "correct": 1,
        "explanation": "Đáp án chính xác là B. 早点睡觉. Nội dung này được thể hiện trực tiếp trong bài đọc."
      },
      {
        "id": 3202,
        "question": "应该多喝什么？ (Nên uống nhiều cái gì?)",
        "options": [
          "A. 冰水 (Nước đá)",
          "B. 热牛奶 (Sữa ấm)",
          "C. 咖啡",
          "D. 啤酒"
        ],
        "correct": 1,
        "explanation": "Đáp án chính xác là B. 热牛奶 (Sữa ấm). Nội dung này được thể hiện trực tiếp trong bài đọc."
      },
      {
        "id": 3203,
        "question": "张明听了医生的话以后怎么样了？ (Sau khi nghe lời bác sĩ thì thế nào?)",
        "options": [
          "A. 身体比以前好多了",
          "B. 身体更生病了",
          "C. 不想去上班",
          "D. 忘记了医生的话"
        ],
        "correct": 0,
        "explanation": "Đáp án chính xác là A. 身体比以前好多了. Nội dung này được thể hiện trực tiếp trong bài đọc."
      }
    ]
  },
  {
    "id": 33,
    "level": "HSK 2",
    "title": "Sở thích du lịch của 小猫",
    "text": "小猫特别喜欢旅游。去年他坐火车去了北京，今年他打算和姐姐一起坐飞机去西安。他觉得旅游可以让他看到很多美丽的地方，虽然有点累，但是很快乐。",
    "pinyin": "小猫 tèbié xǐhuan lǚyóu. Qùnián tā zuò huǒchē qùle Běijīng, jīnnián tā dǎsuàn hé jiějie yīqǐ zuò fēijī qù Xī'ān. Tā juéde lǚyóu kěyǐ ràng tā kàndào hěnduō měilì de dìfang, suīrán yǒudiǎn lèi, dànshì hěn kuàilè.",
    "translation": "小猫 đặc biệt thích đi du lịch. Năm ngoái anh ấy đi Bắc Kinh bằng tàu hỏa, năm nay định cùng chị gái đi Tây An bằng máy bay. Anh ấy thấy du lịch có thể giúp mình ngắm nhìn nhiều nơi xinh đẹp, tuy có chút mệt nhưng rất vui vẻ.",
    "questions": [
      {
        "id": 3301,
        "question": "小猫去年怎么去北京的？ (Năm ngoái anh ấy đi Bắc Kinh bằng gì?)",
        "options": [
          "A. 坐火车 (Tàu hỏa)",
          "B. 坐飞机 (Máy bay)",
          "C. 出租车 (Taxi)",
          "D. 跑步 (Chạy bộ)"
        ],
        "correct": 0,
        "explanation": "Đáp án chính xác là A. 坐火车 (Tàu hỏa). Nội dung này được thể hiện trực tiếp trong bài đọc."
      },
      {
        "id": 3302,
        "question": "今年 打算和谁去西安？ (Năm nay anh ấy định đi Tây An cùng ai?)",
        "options": [
          "A. 哥哥",
          "B. 姐姐",
          "C. 朋友",
          "D. 老师"
        ],
        "correct": 1,
        "explanation": "Đáp án chính xác là B. 姐姐. Nội dung này được thể hiện trực tiếp trong bài đọc."
      },
      {
        "id": 3303,
        "question": "他觉得 thế nào？",
        "options": [
          "A. 太贵了",
          "B. 没意思",
          "C. 虽然累但是快乐",
          "D. 很不舒服"
        ],
        "correct": 2,
        "explanation": "Đáp án chính xác là C. 虽然累但是快乐. Nội dung này được thể hiện trực tiếp trong bài đọc."
      }
    ]
  },
  {
    "id": 34,
    "level": "HSK 2",
    "title": "Lời khuyên sức khỏe cho 王老师",
    "text": "张医生的生病建议：多喝热牛奶，晚上早点睡觉，不要总是工作到深夜。王老师听了医生的话，现在身体比以前好多了，脸色也变得很好看。",
    "pinyin": "Zhāng yīshēng de shēngbìng jiànyì: duō hē rè niúnǎi, wǎnshang zǎodiǎn shuìjiào, búyào zǒngshì gōngzuò dào shēnyè. 王老师 tīngle yīshēng de huà, xiànzài shēntǐ bǐ yǐqián hǎoduō le, liǎnsè yě biànde hěn hǎokàn.",
    "translation": "Lời khuyên của bác sĩ Trương: Uống nhiều sữa bò ấm, buổi tối đi ngủ sớm một chút, đừng luôn làm việc đến đêm muộn. 王老师 nghe lời bác sĩ, giờ cơ thể tốt hơn trước nhiều, sắc mặt cũng trở nên hồng hào đẹp đẽ.",
    "questions": [
      {
        "id": 3401,
        "question": "医生建议晚上做什么？ (Bác sĩ khuyên buổi tối làm gì?)",
        "options": [
          "A. 晚点睡觉",
          "B. 早点睡觉",
          "C. 继续工作",
          "D. 去跑步"
        ],
        "correct": 1,
        "explanation": "Đáp án chính xác là B. 早点睡觉. Nội dung này được thể hiện trực tiếp trong bài đọc."
      },
      {
        "id": 3402,
        "question": "应该多喝什么？ (Nên uống nhiều cái gì?)",
        "options": [
          "A. 冰水 (Nước đá)",
          "B. 热牛奶 (Sữa ấm)",
          "C. 咖啡",
          "D. 啤酒"
        ],
        "correct": 1,
        "explanation": "Đáp án chính xác là B. 热牛奶 (Sữa ấm). Nội dung này được thể hiện trực tiếp trong bài đọc."
      },
      {
        "id": 3403,
        "question": "王老师听了医生的话以后怎么样了？ (Sau khi nghe lời bác sĩ thì thế nào?)",
        "options": [
          "A. 身体比以前好多了",
          "B. 身体更生病了",
          "C. 不想去上班",
          "D. 忘记了医生的话"
        ],
        "correct": 0,
        "explanation": "Đáp án chính xác là A. 身体比以前好多了. Nội dung này được thể hiện trực tiếp trong bài đọc."
      }
    ]
  },
  {
    "id": 35,
    "level": "HSK 2",
    "title": "Sở thích du lịch của 刘医生",
    "text": "刘医生特别喜欢旅游。去年他坐火车去了北京，今年他打算和姐姐一起坐飞机去西安。他觉得旅游可以让他看到很多美丽的地方，虽然有点累，但是很快乐。",
    "pinyin": "刘医生 tèbié xǐhuan lǚyóu. Qùnián tā zuò huǒchē qùle Běijīng, jīnnián tā dǎsuàn hé jiějie yīqǐ zuò fēijī qù Xī'ān. Tā juéde lǚyóu kěyǐ ràng tā kàndào hěnduō měilì de dìfang, suīrán yǒudiǎn lèi, dànshì hěn kuàilè.",
    "translation": "刘医生 đặc biệt thích đi du lịch. Năm ngoái anh ấy đi Bắc Kinh bằng tàu hỏa, năm nay định cùng chị gái đi Tây An bằng máy bay. Anh ấy thấy du lịch có thể giúp mình ngắm nhìn nhiều nơi xinh đẹp, tuy có chút mệt nhưng rất vui vẻ.",
    "questions": [
      {
        "id": 3501,
        "question": "刘医生去年怎么去北京的？ (Năm ngoái anh ấy đi Bắc Kinh bằng gì?)",
        "options": [
          "A. 坐火车 (Tàu hỏa)",
          "B. 坐飞机 (Máy bay)",
          "C. 出租车 (Taxi)",
          "D. 跑步 (Chạy bộ)"
        ],
        "correct": 0,
        "explanation": "Đáp án chính xác là A. 坐火车 (Tàu hỏa). Nội dung này được thể hiện trực tiếp trong bài đọc."
      },
      {
        "id": 3502,
        "question": "今年 打算和谁去西安？ (Năm nay anh ấy định đi Tây An cùng ai?)",
        "options": [
          "A. 哥哥",
          "B. 姐姐",
          "C. 朋友",
          "D. 老师"
        ],
        "correct": 1,
        "explanation": "Đáp án chính xác là B. 姐姐. Nội dung này được thể hiện trực tiếp trong bài đọc."
      },
      {
        "id": 3503,
        "question": "他觉得 thế nào？",
        "options": [
          "A. 太贵了",
          "B. 没意思",
          "C. 虽然累但是快乐",
          "D. 很不舒服"
        ],
        "correct": 2,
        "explanation": "Đáp án chính xác là C. 虽然累但是快乐. Nội dung này được thể hiện trực tiếp trong bài đọc."
      }
    ]
  },
  {
    "id": 36,
    "level": "HSK 2",
    "title": "Lời khuyên sức khỏe cho 陈同学",
    "text": "张医生的生病建议：多喝热牛奶，晚上早点睡觉，不要总是工作到深夜。陈同学听了医生的话，现在身体比以前好多了，脸色也变得很好看。",
    "pinyin": "Zhāng yīshēng de shēngbìng jiànyì: duō hē rè niúnǎi, wǎnshang zǎodiǎn shuìjiào, búyào zǒngshì gōngzuò dào shēnyè. 陈同学 tīngle yīshēng de huà, xiànzài shēntǐ bǐ yǐqián hǎoduō le, liǎnsè yě biànde hěn hǎokàn.",
    "translation": "Lời khuyên của bác sĩ Trương: Uống nhiều sữa bò ấm, buổi tối đi ngủ sớm một chút, đừng luôn làm việc đến đêm muộn. 陈同学 nghe lời bác sĩ, giờ cơ thể tốt hơn trước nhiều, sắc mặt cũng trở nên hồng hào đẹp đẽ.",
    "questions": [
      {
        "id": 3601,
        "question": "医生建议晚上做什么？ (Bác sĩ khuyên buổi tối làm gì?)",
        "options": [
          "A. 晚点睡觉",
          "B. 早点睡觉",
          "C. 继续工作",
          "D. 去跑步"
        ],
        "correct": 1,
        "explanation": "Đáp án chính xác là B. 早点睡觉. Nội dung này được thể hiện trực tiếp trong bài đọc."
      },
      {
        "id": 3602,
        "question": "应该多喝什么？ (Nên uống nhiều cái gì?)",
        "options": [
          "A. 冰水 (Nước đá)",
          "B. 热牛奶 (Sữa ấm)",
          "C. 咖啡",
          "D. 啤酒"
        ],
        "correct": 1,
        "explanation": "Đáp án chính xác là B. 热牛奶 (Sữa ấm). Nội dung này được thể hiện trực tiếp trong bài đọc."
      },
      {
        "id": 3603,
        "question": "陈同学听了医生的话以后怎么样了？ (Sau khi nghe lời bác sĩ thì thế nào?)",
        "options": [
          "A. 身体比以前好多了",
          "B. 身体更生病了",
          "C. 不想去上班",
          "D. 忘记了医生的话"
        ],
        "correct": 0,
        "explanation": "Đáp án chính xác là A. 身体比以前好多了. Nội dung này được thể hiện trực tiếp trong bài đọc."
      }
    ]
  },
  {
    "id": 37,
    "level": "HSK 2",
    "title": "Sở thích du lịch của 安娜",
    "text": "安娜特别喜欢旅游。去年他坐火车去了北京，今年他打算和姐姐一起坐飞机去西安。他觉得旅游可以让他看到很多美丽的地方，虽然有点累，但是很快乐。",
    "pinyin": "安娜 tèbié xǐhuan lǚyóu. Qùnián tā zuò huǒchē qùle Běijīng, jīnnián tā dǎsuàn hé jiějie yīqǐ zuò fēijī qù Xī'ān. Tā juéde lǚyóu kěyǐ ràng tā kàndào hěnduō měilì de dìfang, suīrán yǒudiǎn lèi, dànshì hěn kuàilè.",
    "translation": "安娜 đặc biệt thích đi du lịch. Năm ngoái anh ấy đi Bắc Kinh bằng tàu hỏa, năm nay định cùng chị gái đi Tây An bằng máy bay. Anh ấy thấy du lịch có thể giúp mình ngắm nhìn nhiều nơi xinh đẹp, tuy có chút mệt nhưng rất vui vẻ.",
    "questions": [
      {
        "id": 3701,
        "question": "安娜去年怎么去北京的？ (Năm ngoái anh ấy đi Bắc Kinh bằng gì?)",
        "options": [
          "A. 坐火车 (Tàu hỏa)",
          "B. 坐飞机 (Máy bay)",
          "C. 出租车 (Taxi)",
          "D. 跑步 (Chạy bộ)"
        ],
        "correct": 0,
        "explanation": "Đáp án chính xác là A. 坐火车 (Tàu hỏa). Nội dung này được thể hiện trực tiếp trong bài đọc."
      },
      {
        "id": 3702,
        "question": "今年 打算和谁去西安？ (Năm nay anh ấy định đi Tây An cùng ai?)",
        "options": [
          "A. 哥哥",
          "B. 姐姐",
          "C. 朋友",
          "D. 老师"
        ],
        "correct": 1,
        "explanation": "Đáp án chính xác là B. 姐姐. Nội dung này được thể hiện trực tiếp trong bài đọc."
      },
      {
        "id": 3703,
        "question": "他觉得 thế nào？",
        "options": [
          "A. 太贵了",
          "B. 没意思",
          "C. 虽然累但是快乐",
          "D. 很不舒服"
        ],
        "correct": 2,
        "explanation": "Đáp án chính xác là C. 虽然累但是快乐. Nội dung này được thể hiện trực tiếp trong bài đọc."
      }
    ]
  },
  {
    "id": 38,
    "level": "HSK 2",
    "title": "Lời khuyên sức khỏe cho 大卫",
    "text": "张医生的生病建议：多喝热牛奶，晚上早点睡觉，不要总是工作到深夜。大卫听了医生的话，现在身体比以前好多了，脸色也变得很好看。",
    "pinyin": "Zhāng yīshēng de shēngbìng jiànyì: duō hē rè niúnǎi, wǎnshang zǎodiǎn shuìjiào, búyào zǒngshì gōngzuò dào shēnyè. 大卫 tīngle yīshēng de huà, xiànzài shēntǐ bǐ yǐqián hǎoduō le, liǎnsè yě biànde hěn hǎokàn.",
    "translation": "Lời khuyên của bác sĩ Trương: Uống nhiều sữa bò ấm, buổi tối đi ngủ sớm một chút, đừng luôn làm việc đến đêm muộn. 大卫 nghe lời bác sĩ, giờ cơ thể tốt hơn trước nhiều, sắc mặt cũng trở nên hồng hào đẹp đẽ.",
    "questions": [
      {
        "id": 3801,
        "question": "医生建议晚上做什么？ (Bác sĩ khuyên buổi tối làm gì?)",
        "options": [
          "A. 晚点睡觉",
          "B. 早点睡觉",
          "C. 继续工作",
          "D. 去跑步"
        ],
        "correct": 1,
        "explanation": "Đáp án chính xác là B. 早点睡觉. Nội dung này được thể hiện trực tiếp trong bài đọc."
      },
      {
        "id": 3802,
        "question": "应该多喝什么？ (Nên uống nhiều cái gì?)",
        "options": [
          "A. 冰水 (Nước đá)",
          "B. 热牛奶 (Sữa ấm)",
          "C. 咖啡",
          "D. 啤酒"
        ],
        "correct": 1,
        "explanation": "Đáp án chính xác là B. 热牛奶 (Sữa ấm). Nội dung này được thể hiện trực tiếp trong bài đọc."
      },
      {
        "id": 3803,
        "question": "大卫听了医生的话以后怎么样了？ (Sau khi nghe lời bác sĩ thì thế nào?)",
        "options": [
          "A. 身体比以前好多了",
          "B. 身体更生病了",
          "C. 不想去上班",
          "D. 忘记了医生的话"
        ],
        "correct": 0,
        "explanation": "Đáp án chính xác là A. 身体比以前好多了. Nội dung này được thể hiện trực tiếp trong bài đọc."
      }
    ]
  },
  {
    "id": 39,
    "level": "HSK 2",
    "title": "Sở thích du lịch của 玛丽",
    "text": "玛丽特别喜欢旅游。去年他坐火车去了北京，今年他打算和姐姐一起坐飞机去西安。他觉得旅游可以让他看到很多美丽的地方，虽然有点累，但是很快乐。",
    "pinyin": "玛丽 tèbié xǐhuan lǚyóu. Qùnián tā zuò huǒchē qùle Běijīng, jīnnián tā dǎsuàn hé jiějie yīqǐ zuò fēijī qù Xī'ān. Tā juéde lǚyóu kěyǐ ràng tā kàndào hěnduō měilì de dìfang, suīrán yǒudiǎn lèi, dànshì hěn kuàilè.",
    "translation": "玛丽 đặc biệt thích đi du lịch. Năm ngoái anh ấy đi Bắc Kinh bằng tàu hỏa, năm nay định cùng chị gái đi Tây An bằng máy bay. Anh ấy thấy du lịch có thể giúp mình ngắm nhìn nhiều nơi xinh đẹp, tuy có chút mệt nhưng rất vui vẻ.",
    "questions": [
      {
        "id": 3901,
        "question": "玛丽去年怎么去北京的？ (Năm ngoái anh ấy đi Bắc Kinh bằng gì?)",
        "options": [
          "A. 坐火车 (Tàu hỏa)",
          "B. 坐飞机 (Máy bay)",
          "C. 出租车 (Taxi)",
          "D. 跑步 (Chạy bộ)"
        ],
        "correct": 0,
        "explanation": "Đáp án chính xác là A. 坐火车 (Tàu hỏa). Nội dung này được thể hiện trực tiếp trong bài đọc."
      },
      {
        "id": 3902,
        "question": "今年 打算和谁去西安？ (Năm nay anh ấy định đi Tây An cùng ai?)",
        "options": [
          "A. 哥哥",
          "B. 姐姐",
          "C. 朋友",
          "D. 老师"
        ],
        "correct": 1,
        "explanation": "Đáp án chính xác là B. 姐姐. Nội dung này được thể hiện trực tiếp trong bài đọc."
      },
      {
        "id": 3903,
        "question": "他觉得 thế nào？",
        "options": [
          "A. 太贵了",
          "B. 没意思",
          "C. 虽然累但是快乐",
          "D. 很不舒服"
        ],
        "correct": 2,
        "explanation": "Đáp án chính xác là C. 虽然累但是快乐. Nội dung này được thể hiện trực tiếp trong bài đọc."
      }
    ]
  },
  {
    "id": 40,
    "level": "HSK 2",
    "title": "Lời khuyên sức khỏe cho 林华",
    "text": "张医生的生病建议：多喝热牛奶，晚上早点睡觉，不要总是工作到深夜。林华听了医生的话，现在身体比以前好多了，脸色也变得很好看。",
    "pinyin": "Zhāng yīshēng de shēngbìng jiànyì: duō hē rè niúnǎi, wǎnshang zǎodiǎn shuìjiào, búyào zǒngshì gōngzuò dào shēnyè. 林华 tīngle yīshēng de huà, xiànzài shēntǐ bǐ yǐqián hǎoduō le, liǎnsè yě biànde hěn hǎokàn.",
    "translation": "Lời khuyên của bác sĩ Trương: Uống nhiều sữa bò ấm, buổi tối đi ngủ sớm một chút, đừng luôn làm việc đến đêm muộn. 林华 nghe lời bác sĩ, giờ cơ thể tốt hơn trước nhiều, sắc mặt cũng trở nên hồng hào đẹp đẽ.",
    "questions": [
      {
        "id": 4001,
        "question": "医生建议晚上做什么？ (Bác sĩ khuyên buổi tối làm gì?)",
        "options": [
          "A. 晚点睡觉",
          "B. 早点睡觉",
          "C. 继续工作",
          "D. 去跑步"
        ],
        "correct": 1,
        "explanation": "Đáp án chính xác là B. 早点睡觉. Nội dung này được thể hiện trực tiếp trong bài đọc."
      },
      {
        "id": 4002,
        "question": "应该多喝什么？ (Nên uống nhiều cái gì?)",
        "options": [
          "A. 冰水 (Nước đá)",
          "B. 热牛奶 (Sữa ấm)",
          "C. 咖啡",
          "D. 啤酒"
        ],
        "correct": 1,
        "explanation": "Đáp án chính xác là B. 热牛奶 (Sữa ấm). Nội dung này được thể hiện trực tiếp trong bài đọc."
      },
      {
        "id": 4003,
        "question": "林华听了医生的话以后怎么样了？ (Sau khi nghe lời bác sĩ thì thế nào?)",
        "options": [
          "A. 身体比以前好多了",
          "B. 身体更生病了",
          "C. 不想去上班",
          "D. 忘记了医生的话"
        ],
        "correct": 0,
        "explanation": "Đáp án chính xác là A. 身体比以前好多了. Nội dung này được thể hiện trực tiếp trong bài đọc."
      }
    ]
  },
  {
    "id": 41,
    "level": "HSK 2",
    "title": "Sở thích du lịch của 李华",
    "text": "李华特别喜欢旅游。去年他坐火车去了北京，今年他打算和姐姐一起坐飞机去西安。他觉得旅游可以让他看到很多美丽的地方，虽然有点累，但是很快乐。",
    "pinyin": "李华 tèbié xǐhuan lǚyóu. Qùnián tā zuò huǒchē qùle Běijīng, jīnnián tā dǎsuàn hé jiějie yīqǐ zuò fēijī qù Xī'ān. Tā juéde lǚyóu kěyǐ ràng tā kàndào hěnduō měilì de dìfang, suīrán yǒudiǎn lèi, dànshì hěn kuàilè.",
    "translation": "李华 đặc biệt thích đi du lịch. Năm ngoái anh ấy đi Bắc Kinh bằng tàu hỏa, năm nay định cùng chị gái đi Tây An bằng máy bay. Anh ấy thấy du lịch có thể giúp mình ngắm nhìn nhiều nơi xinh đẹp, tuy có chút mệt nhưng rất vui vẻ.",
    "questions": [
      {
        "id": 4101,
        "question": "李华去年怎么去北京的？ (Năm ngoái anh ấy đi Bắc Kinh bằng gì?)",
        "options": [
          "A. 坐火车 (Tàu hỏa)",
          "B. 坐飞机 (Máy bay)",
          "C. 出租车 (Taxi)",
          "D. 跑步 (Chạy bộ)"
        ],
        "correct": 0,
        "explanation": "Đáp án chính xác là A. 坐火车 (Tàu hỏa). Nội dung này được thể hiện trực tiếp trong bài đọc."
      },
      {
        "id": 4102,
        "question": "今年 打算和谁去西安？ (Năm nay anh ấy định đi Tây An cùng ai?)",
        "options": [
          "A. 哥哥",
          "B. 姐姐",
          "C. 朋友",
          "D. 老师"
        ],
        "correct": 1,
        "explanation": "Đáp án chính xác là B. 姐姐. Nội dung này được thể hiện trực tiếp trong bài đọc."
      },
      {
        "id": 4103,
        "question": "他觉得 thế nào？",
        "options": [
          "A. 太贵了",
          "B. 没意思",
          "C. 虽然累但是快乐",
          "D. 很不舒服"
        ],
        "correct": 2,
        "explanation": "Đáp án chính xác là C. 虽然累但是快乐. Nội dung này được thể hiện trực tiếp trong bài đọc."
      }
    ]
  },
  {
    "id": 42,
    "level": "HSK 2",
    "title": "Lời khuyên sức khỏe cho 张明",
    "text": "张医生的生病建议：多喝热牛奶，晚上早点睡觉，不要总是工作到深夜。张明听了医生的话，现在身体比以前好多了，脸色也变得很好看。",
    "pinyin": "Zhāng yīshēng de shēngbìng jiànyì: duō hē rè niúnǎi, wǎnshang zǎodiǎn shuìjiào, búyào zǒngshì gōngzuò dào shēnyè. 张明 tīngle yīshēng de huà, xiànzài shēntǐ bǐ yǐqián hǎoduō le, liǎnsè yě biànde hěn hǎokàn.",
    "translation": "Lời khuyên của bác sĩ Trương: Uống nhiều sữa bò ấm, buổi tối đi ngủ sớm một chút, đừng luôn làm việc đến đêm muộn. 张明 nghe lời bác sĩ, giờ cơ thể tốt hơn trước nhiều, sắc mặt cũng trở nên hồng hào đẹp đẽ.",
    "questions": [
      {
        "id": 4201,
        "question": "医生建议晚上做什么？ (Bác sĩ khuyên buổi tối làm gì?)",
        "options": [
          "A. 晚点睡觉",
          "B. 早点睡觉",
          "C. 继续工作",
          "D. 去跑步"
        ],
        "correct": 1,
        "explanation": "Đáp án chính xác là B. 早点睡觉. Nội dung này được thể hiện trực tiếp trong bài đọc."
      },
      {
        "id": 4202,
        "question": "应该多喝什么？ (Nên uống nhiều cái gì?)",
        "options": [
          "A. 冰水 (Nước đá)",
          "B. 热牛奶 (Sữa ấm)",
          "C. 咖啡",
          "D. 啤酒"
        ],
        "correct": 1,
        "explanation": "Đáp án chính xác là B. 热牛奶 (Sữa ấm). Nội dung này được thể hiện trực tiếp trong bài đọc."
      },
      {
        "id": 4203,
        "question": "张明听了医生的话以后怎么样了？ (Sau khi nghe lời bác sĩ thì thế nào?)",
        "options": [
          "A. 身体比以前好多了",
          "B. 身体更生病了",
          "C. 不想去上班",
          "D. 忘记了医生的话"
        ],
        "correct": 0,
        "explanation": "Đáp án chính xác là A. 身体比以前好多了. Nội dung này được thể hiện trực tiếp trong bài đọc."
      }
    ]
  },
  {
    "id": 43,
    "level": "HSK 2",
    "title": "Sở thích du lịch của 小猫",
    "text": "小猫特别喜欢旅游。去年他坐火车去了北京，今年他打算和姐姐一起坐飞机去西安。他觉得旅游可以让他看到很多美丽的地方，虽然有点累，但是很快乐。",
    "pinyin": "小猫 tèbié xǐhuan lǚyóu. Qùnián tā zuò huǒchē qùle Běijīng, jīnnián tā dǎsuàn hé jiějie yīqǐ zuò fēijī qù Xī'ān. Tā juéde lǚyóu kěyǐ ràng tā kàndào hěnduō měilì de dìfang, suīrán yǒudiǎn lèi, dànshì hěn kuàilè.",
    "translation": "小猫 đặc biệt thích đi du lịch. Năm ngoái anh ấy đi Bắc Kinh bằng tàu hỏa, năm nay định cùng chị gái đi Tây An bằng máy bay. Anh ấy thấy du lịch có thể giúp mình ngắm nhìn nhiều nơi xinh đẹp, tuy có chút mệt nhưng rất vui vẻ.",
    "questions": [
      {
        "id": 4301,
        "question": "小猫去年怎么去北京的？ (Năm ngoái anh ấy đi Bắc Kinh bằng gì?)",
        "options": [
          "A. 坐火车 (Tàu hỏa)",
          "B. 坐飞机 (Máy bay)",
          "C. 出租车 (Taxi)",
          "D. 跑步 (Chạy bộ)"
        ],
        "correct": 0,
        "explanation": "Đáp án chính xác là A. 坐火车 (Tàu hỏa). Nội dung này được thể hiện trực tiếp trong bài đọc."
      },
      {
        "id": 4302,
        "question": "今年 打算和谁去西安？ (Năm nay anh ấy định đi Tây An cùng ai?)",
        "options": [
          "A. 哥哥",
          "B. 姐姐",
          "C. 朋友",
          "D. 老师"
        ],
        "correct": 1,
        "explanation": "Đáp án chính xác là B. 姐姐. Nội dung này được thể hiện trực tiếp trong bài đọc."
      },
      {
        "id": 4303,
        "question": "他觉得 thế nào？",
        "options": [
          "A. 太贵了",
          "B. 没意思",
          "C. 虽然累但是快乐",
          "D. 很不舒服"
        ],
        "correct": 2,
        "explanation": "Đáp án chính xác là C. 虽然累但是快乐. Nội dung này được thể hiện trực tiếp trong bài đọc."
      }
    ]
  },
  {
    "id": 44,
    "level": "HSK 2",
    "title": "Lời khuyên sức khỏe cho 王老师",
    "text": "张医生的生病建议：多喝热牛奶，晚上早点睡觉，不要总是工作到深夜。王老师听了医生的话，现在身体比以前好多了，脸色也变得很好看。",
    "pinyin": "Zhāng yīshēng de shēngbìng jiànyì: duō hē rè niúnǎi, wǎnshang zǎodiǎn shuìjiào, búyào zǒngshì gōngzuò dào shēnyè. 王老师 tīngle yīshēng de huà, xiànzài shēntǐ bǐ yǐqián hǎoduō le, liǎnsè yě biànde hěn hǎokàn.",
    "translation": "Lời khuyên của bác sĩ Trương: Uống nhiều sữa bò ấm, buổi tối đi ngủ sớm một chút, đừng luôn làm việc đến đêm muộn. 王老师 nghe lời bác sĩ, giờ cơ thể tốt hơn trước nhiều, sắc mặt cũng trở nên hồng hào đẹp đẽ.",
    "questions": [
      {
        "id": 4401,
        "question": "医生建议晚上做什么？ (Bác sĩ khuyên buổi tối làm gì?)",
        "options": [
          "A. 晚点睡觉",
          "B. 早点睡觉",
          "C. 继续工作",
          "D. 去跑步"
        ],
        "correct": 1,
        "explanation": "Đáp án chính xác là B. 早点睡觉. Nội dung này được thể hiện trực tiếp trong bài đọc."
      },
      {
        "id": 4402,
        "question": "应该多喝什么？ (Nên uống nhiều cái gì?)",
        "options": [
          "A. 冰水 (Nước đá)",
          "B. 热牛奶 (Sữa ấm)",
          "C. 咖啡",
          "D. 啤酒"
        ],
        "correct": 1,
        "explanation": "Đáp án chính xác là B. 热牛奶 (Sữa ấm). Nội dung này được thể hiện trực tiếp trong bài đọc."
      },
      {
        "id": 4403,
        "question": "王老师听了医生的话以后怎么样了？ (Sau khi nghe lời bác sĩ thì thế nào?)",
        "options": [
          "A. 身体比以前好多了",
          "B. 身体更生病了",
          "C. 不想去上班",
          "D. 忘记了医生的话"
        ],
        "correct": 0,
        "explanation": "Đáp án chính xác là A. 身体比以前好多了. Nội dung này được thể hiện trực tiếp trong bài đọc."
      }
    ]
  },
  {
    "id": 45,
    "level": "HSK 2",
    "title": "Sở thích du lịch của 刘医生",
    "text": "刘医生特别喜欢旅游。去年他坐火车去了北京，今年他打算和姐姐一起坐飞机去西安。他觉得旅游可以让他看到很多美丽的地方，虽然有点累，但是很快乐。",
    "pinyin": "刘医生 tèbié xǐhuan lǚyóu. Qùnián tā zuò huǒchē qùle Běijīng, jīnnián tā dǎsuàn hé jiějie yīqǐ zuò fēijī qù Xī'ān. Tā juéde lǚyóu kěyǐ ràng tā kàndào hěnduō měilì de dìfang, suīrán yǒudiǎn lèi, dànshì hěn kuàilè.",
    "translation": "刘医生 đặc biệt thích đi du lịch. Năm ngoái anh ấy đi Bắc Kinh bằng tàu hỏa, năm nay định cùng chị gái đi Tây An bằng máy bay. Anh ấy thấy du lịch có thể giúp mình ngắm nhìn nhiều nơi xinh đẹp, tuy có chút mệt nhưng rất vui vẻ.",
    "questions": [
      {
        "id": 4501,
        "question": "刘医生去年怎么去北京的？ (Năm ngoái anh ấy đi Bắc Kinh bằng gì?)",
        "options": [
          "A. 坐火车 (Tàu hỏa)",
          "B. 坐飞机 (Máy bay)",
          "C. 出租车 (Taxi)",
          "D. 跑步 (Chạy bộ)"
        ],
        "correct": 0,
        "explanation": "Đáp án chính xác là A. 坐火车 (Tàu hỏa). Nội dung này được thể hiện trực tiếp trong bài đọc."
      },
      {
        "id": 4502,
        "question": "今年 打算和谁去西安？ (Năm nay anh ấy định đi Tây An cùng ai?)",
        "options": [
          "A. 哥哥",
          "B. 姐姐",
          "C. 朋友",
          "D. 老师"
        ],
        "correct": 1,
        "explanation": "Đáp án chính xác là B. 姐姐. Nội dung này được thể hiện trực tiếp trong bài đọc."
      },
      {
        "id": 4503,
        "question": "他觉得 thế nào？",
        "options": [
          "A. 太贵了",
          "B. 没意思",
          "C. 虽然累但是快乐",
          "D. 很不舒服"
        ],
        "correct": 2,
        "explanation": "Đáp án chính xác là C. 虽然累但是快乐. Nội dung này được thể hiện trực tiếp trong bài đọc."
      }
    ]
  },
  {
    "id": 46,
    "level": "HSK 2",
    "title": "Lời khuyên sức khỏe cho 陈同学",
    "text": "张医生的生病建议：多喝热牛奶，晚上早点睡觉，不要总是工作到深夜。陈同学听了医生的话，现在身体比以前好多了，脸色也变得很好看。",
    "pinyin": "Zhāng yīshēng de shēngbìng jiànyì: duō hē rè niúnǎi, wǎnshang zǎodiǎn shuìjiào, búyào zǒngshì gōngzuò dào shēnyè. 陈同学 tīngle yīshēng de huà, xiànzài shēntǐ bǐ yǐqián hǎoduō le, liǎnsè yě biànde hěn hǎokàn.",
    "translation": "Lời khuyên của bác sĩ Trương: Uống nhiều sữa bò ấm, buổi tối đi ngủ sớm một chút, đừng luôn làm việc đến đêm muộn. 陈同学 nghe lời bác sĩ, giờ cơ thể tốt hơn trước nhiều, sắc mặt cũng trở nên hồng hào đẹp đẽ.",
    "questions": [
      {
        "id": 4601,
        "question": "医生建议晚上做什么？ (Bác sĩ khuyên buổi tối làm gì?)",
        "options": [
          "A. 晚点睡觉",
          "B. 早点睡觉",
          "C. 继续工作",
          "D. 去跑步"
        ],
        "correct": 1,
        "explanation": "Đáp án chính xác là B. 早点睡觉. Nội dung này được thể hiện trực tiếp trong bài đọc."
      },
      {
        "id": 4602,
        "question": "应该多喝什么？ (Nên uống nhiều cái gì?)",
        "options": [
          "A. 冰水 (Nước đá)",
          "B. 热牛奶 (Sữa ấm)",
          "C. 咖啡",
          "D. 啤酒"
        ],
        "correct": 1,
        "explanation": "Đáp án chính xác là B. 热牛奶 (Sữa ấm). Nội dung này được thể hiện trực tiếp trong bài đọc."
      },
      {
        "id": 4603,
        "question": "陈同学听了医生的话以后怎么样了？ (Sau khi nghe lời bác sĩ thì thế nào?)",
        "options": [
          "A. 身体比以前好多了",
          "B. 身体更生病了",
          "C. 不想去上班",
          "D. 忘记了医生的话"
        ],
        "correct": 0,
        "explanation": "Đáp án chính xác là A. 身体比以前好多了. Nội dung này được thể hiện trực tiếp trong bài đọc."
      }
    ]
  },
  {
    "id": 47,
    "level": "HSK 2",
    "title": "Sở thích du lịch của 安娜",
    "text": "安娜特别喜欢旅游。去年他坐火车去了北京，今年他打算和姐姐一起坐飞机去西安。他觉得旅游可以让他看到很多美丽的地方，虽然有点累，但是很快乐。",
    "pinyin": "安娜 tèbié xǐhuan lǚyóu. Qùnián tā zuò huǒchē qùle Běijīng, jīnnián tā dǎsuàn hé jiějie yīqǐ zuò fēijī qù Xī'ān. Tā juéde lǚyóu kěyǐ ràng tā kàndào hěnduō měilì de dìfang, suīrán yǒudiǎn lèi, dànshì hěn kuàilè.",
    "translation": "安娜 đặc biệt thích đi du lịch. Năm ngoái anh ấy đi Bắc Kinh bằng tàu hỏa, năm nay định cùng chị gái đi Tây An bằng máy bay. Anh ấy thấy du lịch có thể giúp mình ngắm nhìn nhiều nơi xinh đẹp, tuy có chút mệt nhưng rất vui vẻ.",
    "questions": [
      {
        "id": 4701,
        "question": "安娜去年怎么去北京的？ (Năm ngoái anh ấy đi Bắc Kinh bằng gì?)",
        "options": [
          "A. 坐火车 (Tàu hỏa)",
          "B. 坐飞机 (Máy bay)",
          "C. 出租车 (Taxi)",
          "D. 跑步 (Chạy bộ)"
        ],
        "correct": 0,
        "explanation": "Đáp án chính xác là A. 坐火车 (Tàu hỏa). Nội dung này được thể hiện trực tiếp trong bài đọc."
      },
      {
        "id": 4702,
        "question": "今年 打算和谁去西安？ (Năm nay anh ấy định đi Tây An cùng ai?)",
        "options": [
          "A. 哥哥",
          "B. 姐姐",
          "C. 朋友",
          "D. 老师"
        ],
        "correct": 1,
        "explanation": "Đáp án chính xác là B. 姐姐. Nội dung này được thể hiện trực tiếp trong bài đọc."
      },
      {
        "id": 4703,
        "question": "他觉得 thế nào？",
        "options": [
          "A. 太贵了",
          "B. 没意思",
          "C. 虽然累但是快乐",
          "D. 很不舒服"
        ],
        "correct": 2,
        "explanation": "Đáp án chính xác là C. 虽然累但是快乐. Nội dung này được thể hiện trực tiếp trong bài đọc."
      }
    ]
  },
  {
    "id": 48,
    "level": "HSK 2",
    "title": "Lời khuyên sức khỏe cho 大卫",
    "text": "张医生的生病建议：多喝热牛奶，晚上早点睡觉，不要总是工作到深夜。大卫听了医生的话，现在身体比以前好多了，脸色也变得很好看。",
    "pinyin": "Zhāng yīshēng de shēngbìng jiànyì: duō hē rè niúnǎi, wǎnshang zǎodiǎn shuìjiào, búyào zǒngshì gōngzuò dào shēnyè. 大卫 tīngle yīshēng de huà, xiànzài shēntǐ bǐ yǐqián hǎoduō le, liǎnsè yě biànde hěn hǎokàn.",
    "translation": "Lời khuyên của bác sĩ Trương: Uống nhiều sữa bò ấm, buổi tối đi ngủ sớm một chút, đừng luôn làm việc đến đêm muộn. 大卫 nghe lời bác sĩ, giờ cơ thể tốt hơn trước nhiều, sắc mặt cũng trở nên hồng hào đẹp đẽ.",
    "questions": [
      {
        "id": 4801,
        "question": "医生建议晚上做什么？ (Bác sĩ khuyên buổi tối làm gì?)",
        "options": [
          "A. 晚点睡觉",
          "B. 早点睡觉",
          "C. 继续工作",
          "D. 去跑步"
        ],
        "correct": 1,
        "explanation": "Đáp án chính xác là B. 早点睡觉. Nội dung này được thể hiện trực tiếp trong bài đọc."
      },
      {
        "id": 4802,
        "question": "应该多喝什么？ (Nên uống nhiều cái gì?)",
        "options": [
          "A. 冰水 (Nước đá)",
          "B. 热牛奶 (Sữa ấm)",
          "C. 咖啡",
          "D. 啤酒"
        ],
        "correct": 1,
        "explanation": "Đáp án chính xác là B. 热牛奶 (Sữa ấm). Nội dung này được thể hiện trực tiếp trong bài đọc."
      },
      {
        "id": 4803,
        "question": "大卫听了医生的话以后怎么样了？ (Sau khi nghe lời bác sĩ thì thế nào?)",
        "options": [
          "A. 身体比以前好多了",
          "B. 身体更生病了",
          "C. 不想去上班",
          "D. 忘记了医生的话"
        ],
        "correct": 0,
        "explanation": "Đáp án chính xác là A. 身体比以前好多了. Nội dung này được thể hiện trực tiếp trong bài đọc."
      }
    ]
  },
  {
    "id": 49,
    "level": "HSK 2",
    "title": "Sở thích du lịch của 玛丽",
    "text": "玛丽特别喜欢旅游。去年他坐火车去了北京，今年他打算和姐姐一起坐飞机去西安。他觉得旅游可以让他看到很多美丽的地方，虽然有点累，但是很快乐。",
    "pinyin": "玛丽 tèbié xǐhuan lǚyóu. Qùnián tā zuò huǒchē qùle Běijīng, jīnnián tā dǎsuàn hé jiějie yīqǐ zuò fēijī qù Xī'ān. Tā juéde lǚyóu kěyǐ ràng tā kàndào hěnduō měilì de dìfang, suīrán yǒudiǎn lèi, dànshì hěn kuàilè.",
    "translation": "玛丽 đặc biệt thích đi du lịch. Năm ngoái anh ấy đi Bắc Kinh bằng tàu hỏa, năm nay định cùng chị gái đi Tây An bằng máy bay. Anh ấy thấy du lịch có thể giúp mình ngắm nhìn nhiều nơi xinh đẹp, tuy có chút mệt nhưng rất vui vẻ.",
    "questions": [
      {
        "id": 4901,
        "question": "玛丽去年怎么去北京的？ (Năm ngoái anh ấy đi Bắc Kinh bằng gì?)",
        "options": [
          "A. 坐火车 (Tàu hỏa)",
          "B. 坐飞机 (Máy bay)",
          "C. 出租车 (Taxi)",
          "D. 跑步 (Chạy bộ)"
        ],
        "correct": 0,
        "explanation": "Đáp án chính xác là A. 坐火车 (Tàu hỏa). Nội dung này được thể hiện trực tiếp trong bài đọc."
      },
      {
        "id": 4902,
        "question": "今年 打算和谁去西安？ (Năm nay anh ấy định đi Tây An cùng ai?)",
        "options": [
          "A. 哥哥",
          "B. 姐姐",
          "C. 朋友",
          "D. 老师"
        ],
        "correct": 1,
        "explanation": "Đáp án chính xác là B. 姐姐. Nội dung này được thể hiện trực tiếp trong bài đọc."
      },
      {
        "id": 4903,
        "question": "他觉得 thế nào？",
        "options": [
          "A. 太贵了",
          "B. 没意思",
          "C. 虽然累但是快乐",
          "D. 很不舒服"
        ],
        "correct": 2,
        "explanation": "Đáp án chính xác là C. 虽然累但是快乐. Nội dung này được thể hiện trực tiếp trong bài đọc."
      }
    ]
  },
  {
    "id": 50,
    "level": "HSK 2",
    "title": "Lời khuyên sức khỏe cho 林华",
    "text": "张医生的生病建议：多喝热牛奶，晚上早点睡觉，不要总是工作到深夜。林华听了医生的话，现在身体比以前好多了，脸色也变得很好看。",
    "pinyin": "Zhāng yīshēng de shēngbìng jiànyì: duō hē rè niúnǎi, wǎnshang zǎodiǎn shuìjiào, búyào zǒngshì gōngzuò dào shēnyè. 林华 tīngle yīshēng de huà, xiànzài shēntǐ bǐ yǐqián hǎoduō le, liǎnsè yě biànde hěn hǎokàn.",
    "translation": "Lời khuyên của bác sĩ Trương: Uống nhiều sữa bò ấm, buổi tối đi ngủ sớm một chút, đừng luôn làm việc đến đêm muộn. 林华 nghe lời bác sĩ, giờ cơ thể tốt hơn trước nhiều, sắc mặt cũng trở nên hồng hào đẹp đẽ.",
    "questions": [
      {
        "id": 5001,
        "question": "医生建议晚上做什么？ (Bác sĩ khuyên buổi tối làm gì?)",
        "options": [
          "A. 晚点睡觉",
          "B. 早点睡觉",
          "C. 继续工作",
          "D. 去跑步"
        ],
        "correct": 1,
        "explanation": "Đáp án chính xác là B. 早点睡觉. Nội dung này được thể hiện trực tiếp trong bài đọc."
      },
      {
        "id": 5002,
        "question": "应该多喝什么？ (Nên uống nhiều cái gì?)",
        "options": [
          "A. 冰水 (Nước đá)",
          "B. 热牛奶 (Sữa ấm)",
          "C. 咖啡",
          "D. 啤酒"
        ],
        "correct": 1,
        "explanation": "Đáp án chính xác là B. 热牛奶 (Sữa ấm). Nội dung này được thể hiện trực tiếp trong bài đọc."
      },
      {
        "id": 5003,
        "question": "林华听了医生的话以后怎么样了？ (Sau khi nghe lời bác sĩ thì thế nào?)",
        "options": [
          "A. 身体比以前好多了",
          "B. 身体更生病了",
          "C. 不想去上班",
          "D. 忘记了医生的话"
        ],
        "correct": 0,
        "explanation": "Đáp án chính xác là A. 身体比以前好多了. Nội dung này được thể hiện trực tiếp trong bài đọc."
      }
    ]
  },
  {
    "id": 51,
    "level": "HSK 2",
    "title": "Sở thích du lịch của 李华",
    "text": "李华特别喜欢旅游。去年他坐火车去了北京，今年他打算和姐姐一起坐飞机去西安。他觉得旅游可以让他看到很多美丽的地方，虽然有点累，但是很快乐。",
    "pinyin": "李华 tèbié xǐhuan lǚyóu. Qùnián tā zuò huǒchē qùle Běijīng, jīnnián tā dǎsuàn hé jiějie yīqǐ zuò fēijī qù Xī'ān. Tā juéde lǚyóu kěyǐ ràng tā kàndào hěnduō měilì de dìfang, suīrán yǒudiǎn lèi, dànshì hěn kuàilè.",
    "translation": "李华 đặc biệt thích đi du lịch. Năm ngoái anh ấy đi Bắc Kinh bằng tàu hỏa, năm nay định cùng chị gái đi Tây An bằng máy bay. Anh ấy thấy du lịch có thể giúp mình ngắm nhìn nhiều nơi xinh đẹp, tuy có chút mệt nhưng rất vui vẻ.",
    "questions": [
      {
        "id": 5101,
        "question": "李华去年怎么去北京的？ (Năm ngoái anh ấy đi Bắc Kinh bằng gì?)",
        "options": [
          "A. 坐火车 (Tàu hỏa)",
          "B. 坐飞机 (Máy bay)",
          "C. 出租车 (Taxi)",
          "D. 跑步 (Chạy bộ)"
        ],
        "correct": 0,
        "explanation": "Đáp án chính xác là A. 坐火车 (Tàu hỏa). Nội dung này được thể hiện trực tiếp trong bài đọc."
      },
      {
        "id": 5102,
        "question": "今年 打算和谁去西安？ (Năm nay anh ấy định đi Tây An cùng ai?)",
        "options": [
          "A. 哥哥",
          "B. 姐姐",
          "C. 朋友",
          "D. 老师"
        ],
        "correct": 1,
        "explanation": "Đáp án chính xác là B. 姐姐. Nội dung này được thể hiện trực tiếp trong bài đọc."
      },
      {
        "id": 5103,
        "question": "他觉得 thế nào？",
        "options": [
          "A. 太贵了",
          "B. 没意思",
          "C. 虽然累但是快乐",
          "D. 很不舒服"
        ],
        "correct": 2,
        "explanation": "Đáp án chính xác là C. 虽然累但是快乐. Nội dung này được thể hiện trực tiếp trong bài đọc."
      }
    ]
  },
  {
    "id": 52,
    "level": "HSK 2",
    "title": "Lời khuyên sức khỏe cho 张明",
    "text": "张医生的生病建议：多喝热牛奶，晚上早点睡觉，不要总是工作到深夜。张明听了医生的话，现在身体比以前好多了，脸色也变得很好看。",
    "pinyin": "Zhāng yīshēng de shēngbìng jiànyì: duō hē rè niúnǎi, wǎnshang zǎodiǎn shuìjiào, búyào zǒngshì gōngzuò dào shēnyè. 张明 tīngle yīshēng de huà, xiànzài shēntǐ bǐ yǐqián hǎoduō le, liǎnsè yě biànde hěn hǎokàn.",
    "translation": "Lời khuyên của bác sĩ Trương: Uống nhiều sữa bò ấm, buổi tối đi ngủ sớm một chút, đừng luôn làm việc đến đêm muộn. 张明 nghe lời bác sĩ, giờ cơ thể tốt hơn trước nhiều, sắc mặt cũng trở nên hồng hào đẹp đẽ.",
    "questions": [
      {
        "id": 5201,
        "question": "医生建议晚上做什么？ (Bác sĩ khuyên buổi tối làm gì?)",
        "options": [
          "A. 晚点睡觉",
          "B. 早点睡觉",
          "C. 继续工作",
          "D. 去跑步"
        ],
        "correct": 1,
        "explanation": "Đáp án chính xác là B. 早点睡觉. Nội dung này được thể hiện trực tiếp trong bài đọc."
      },
      {
        "id": 5202,
        "question": "应该多喝什么？ (Nên uống nhiều cái gì?)",
        "options": [
          "A. 冰水 (Nước đá)",
          "B. 热牛奶 (Sữa ấm)",
          "C. 咖啡",
          "D. 啤酒"
        ],
        "correct": 1,
        "explanation": "Đáp án chính xác là B. 热牛奶 (Sữa ấm). Nội dung này được thể hiện trực tiếp trong bài đọc."
      },
      {
        "id": 5203,
        "question": "张明听了医生的话以后怎么样了？ (Sau khi nghe lời bác sĩ thì thế nào?)",
        "options": [
          "A. 身体比以前好多了",
          "B. 身体更生病了",
          "C. 不想去上班",
          "D. 忘记了医生的话"
        ],
        "correct": 0,
        "explanation": "Đáp án chính xác là A. 身体比以前好多了. Nội dung này được thể hiện trực tiếp trong bài đọc."
      }
    ]
  },
  {
    "id": 53,
    "level": "HSK 2",
    "title": "Sở thích du lịch của 小猫",
    "text": "小猫特别喜欢旅游。去年他坐火车去了北京，今年他打算和姐姐一起坐飞机去西安。他觉得旅游可以让他看到很多美丽的地方，虽然有点累，但是很快乐。",
    "pinyin": "小猫 tèbié xǐhuan lǚyóu. Qùnián tā zuò huǒchē qùle Běijīng, jīnnián tā dǎsuàn hé jiějie yīqǐ zuò fēijī qù Xī'ān. Tā juéde lǚyóu kěyǐ ràng tā kàndào hěnduō měilì de dìfang, suīrán yǒudiǎn lèi, dànshì hěn kuàilè.",
    "translation": "小猫 đặc biệt thích đi du lịch. Năm ngoái anh ấy đi Bắc Kinh bằng tàu hỏa, năm nay định cùng chị gái đi Tây An bằng máy bay. Anh ấy thấy du lịch có thể giúp mình ngắm nhìn nhiều nơi xinh đẹp, tuy có chút mệt nhưng rất vui vẻ.",
    "questions": [
      {
        "id": 5301,
        "question": "小猫去年怎么去北京的？ (Năm ngoái anh ấy đi Bắc Kinh bằng gì?)",
        "options": [
          "A. 坐火车 (Tàu hỏa)",
          "B. 坐飞机 (Máy bay)",
          "C. 出租车 (Taxi)",
          "D. 跑步 (Chạy bộ)"
        ],
        "correct": 0,
        "explanation": "Đáp án chính xác là A. 坐火车 (Tàu hỏa). Nội dung này được thể hiện trực tiếp trong bài đọc."
      },
      {
        "id": 5302,
        "question": "今年 打算和谁去西安？ (Năm nay anh ấy định đi Tây An cùng ai?)",
        "options": [
          "A. 哥哥",
          "B. 姐姐",
          "C. 朋友",
          "D. 老师"
        ],
        "correct": 1,
        "explanation": "Đáp án chính xác là B. 姐姐. Nội dung này được thể hiện trực tiếp trong bài đọc."
      },
      {
        "id": 5303,
        "question": "他觉得 thế nào？",
        "options": [
          "A. 太贵了",
          "B. 没意思",
          "C. 虽然累但是快乐",
          "D. 很不舒服"
        ],
        "correct": 2,
        "explanation": "Đáp án chính xác là C. 虽然累但是快乐. Nội dung này được thể hiện trực tiếp trong bài đọc."
      }
    ]
  },
  {
    "id": 54,
    "level": "HSK 2",
    "title": "Lời khuyên sức khỏe cho 王老师",
    "text": "张医生的生病建议：多喝热牛奶，晚上早点睡觉，不要总是工作到深夜。王老师听了医生的话，现在身体比以前好多了，脸色也变得很好看。",
    "pinyin": "Zhāng yīshēng de shēngbìng jiànyì: duō hē rè niúnǎi, wǎnshang zǎodiǎn shuìjiào, búyào zǒngshì gōngzuò dào shēnyè. 王老师 tīngle yīshēng de huà, xiànzài shēntǐ bǐ yǐqián hǎoduō le, liǎnsè yě biànde hěn hǎokàn.",
    "translation": "Lời khuyên của bác sĩ Trương: Uống nhiều sữa bò ấm, buổi tối đi ngủ sớm một chút, đừng luôn làm việc đến đêm muộn. 王老师 nghe lời bác sĩ, giờ cơ thể tốt hơn trước nhiều, sắc mặt cũng trở nên hồng hào đẹp đẽ.",
    "questions": [
      {
        "id": 5401,
        "question": "医生建议晚上做什么？ (Bác sĩ khuyên buổi tối làm gì?)",
        "options": [
          "A. 晚点睡觉",
          "B. 早点睡觉",
          "C. 继续工作",
          "D. 去跑步"
        ],
        "correct": 1,
        "explanation": "Đáp án chính xác là B. 早点睡觉. Nội dung này được thể hiện trực tiếp trong bài đọc."
      },
      {
        "id": 5402,
        "question": "应该多喝什么？ (Nên uống nhiều cái gì?)",
        "options": [
          "A. 冰水 (Nước đá)",
          "B. 热牛奶 (Sữa ấm)",
          "C. 咖啡",
          "D. 啤酒"
        ],
        "correct": 1,
        "explanation": "Đáp án chính xác là B. 热牛奶 (Sữa ấm). Nội dung này được thể hiện trực tiếp trong bài đọc."
      },
      {
        "id": 5403,
        "question": "王老师听了医生的话以后怎么样了？ (Sau khi nghe lời bác sĩ thì thế nào?)",
        "options": [
          "A. 身体比以前好多了",
          "B. 身体更生病了",
          "C. 不想去上班",
          "D. 忘记了医生的话"
        ],
        "correct": 0,
        "explanation": "Đáp án chính xác là A. 身体比以前好多了. Nội dung này được thể hiện trực tiếp trong bài đọc."
      }
    ]
  },
  {
    "id": 55,
    "level": "HSK 2",
    "title": "Sở thích du lịch của 刘医生",
    "text": "刘医生特别喜欢旅游。去年他坐火车去了北京，今年他打算和姐姐一起坐飞机去西安。他觉得旅游可以让他看到很多美丽的地方，虽然有点累，但是很快乐。",
    "pinyin": "刘医生 tèbié xǐhuan lǚyóu. Qùnián tā zuò huǒchē qùle Běijīng, jīnnián tā dǎsuàn hé jiějie yīqǐ zuò fēijī qù Xī'ān. Tā juéde lǚyóu kěyǐ ràng tā kàndào hěnduō měilì de dìfang, suīrán yǒudiǎn lèi, dànshì hěn kuàilè.",
    "translation": "刘医生 đặc biệt thích đi du lịch. Năm ngoái anh ấy đi Bắc Kinh bằng tàu hỏa, năm nay định cùng chị gái đi Tây An bằng máy bay. Anh ấy thấy du lịch có thể giúp mình ngắm nhìn nhiều nơi xinh đẹp, tuy có chút mệt nhưng rất vui vẻ.",
    "questions": [
      {
        "id": 5501,
        "question": "刘医生去年怎么去北京的？ (Năm ngoái anh ấy đi Bắc Kinh bằng gì?)",
        "options": [
          "A. 坐火车 (Tàu hỏa)",
          "B. 坐飞机 (Máy bay)",
          "C. 出租车 (Taxi)",
          "D. 跑步 (Chạy bộ)"
        ],
        "correct": 0,
        "explanation": "Đáp án chính xác là A. 坐火车 (Tàu hỏa). Nội dung này được thể hiện trực tiếp trong bài đọc."
      },
      {
        "id": 5502,
        "question": "今年 打算和谁去西安？ (Năm nay anh ấy định đi Tây An cùng ai?)",
        "options": [
          "A. 哥哥",
          "B. 姐姐",
          "C. 朋友",
          "D. 老师"
        ],
        "correct": 1,
        "explanation": "Đáp án chính xác là B. 姐姐. Nội dung này được thể hiện trực tiếp trong bài đọc."
      },
      {
        "id": 5503,
        "question": "他觉得 thế nào？",
        "options": [
          "A. 太贵了",
          "B. 没意思",
          "C. 虽然累但是快乐",
          "D. 很不舒服"
        ],
        "correct": 2,
        "explanation": "Đáp án chính xác là C. 虽然累但是快乐. Nội dung này được thể hiện trực tiếp trong bài đọc."
      }
    ]
  },
  {
    "id": 56,
    "level": "HSK 3",
    "title": "Bí quyết học tiếng Trung của 李华",
    "text": "为了学好汉语，李华每天晚上都花两个小时练习听力和口语。他经常用手机跟中国朋友聊天，遇到不会的生词就马上查字典。上个星期，他参加了学校的汉语比赛，虽然没有拿到第一名，但是他的进步得到了王老师的夸奖。他觉得只要坚持努力，就一定能把汉语说得像中国人一样流利。",
    "pinyin": "Wèile xuéhǎo Hànyǔ, 李华 měitiān wǎnshang dōu huā liǎng gè xiǎoshí liànxí tīnglì hé kǒuyǔ. Tā jīngcháng yòng shǒujī gēn Zhōngguó péngyou liáotiān, yùdào bú huì de shēngcí jiù mǎshàng chá zìdiǎn. Shàng gè xīngqī, tā cānjiāle xuéxiào de Hànyǔ bǐsài, suīrán méiyǒu nádào dì-yī míng, dànshì tā de jìnbù dédàole Wáng lǎoshī de kuājiǎng. Tā juéde zhǐyào jiānchí nǔlì, jiù yídìng néng bǎ Hànyǔ shuō de xiàng Zhōngguórén yíyàng liúlì.",
    "translation": "Để học tốt tiếng Trung, 李华 tối nào cũng dành hai tiếng để luyện nghe và nói. Anh ấy thường dùng điện thoại nhắn tin trò chuyện với bạn Trung Quốc, gặp từ mới không biết là lập tức tra từ điển ngay. Tuần trước, anh ấy tham gia cuộc thi tiếng Trung của trường, tuy không giành được giải nhất nhưng tiến bộ của anh ấy đã được thầy Vương khen ngợi. Anh ấy tin rằng chỉ cần kiên trì nỗ lực thì nhất định sẽ nói tiếng Trung lưu loát như người bản xứ.",
    "questions": [
      {
        "id": 5601,
        "question": "李华每天晚上花多长时间练习汉语？ (Mỗi tối dành bao nhiêu thời gian?)",
        "options": [
          "A. 半个小时",
          "B. 一个小时",
          "C. 两个小时",
          "D. 三个小时"
        ],
        "correct": 2,
        "explanation": "Đáp án chính xác là C. 两个小时. Nội dung này được thể hiện trực tiếp trong bài đọc."
      },
      {
        "id": 5602,
        "question": "他遇到不会的生词时怎么办？ (Gặp từ mới không biết thì làm thế nào?)",
        "options": [
          "A. 问爸爸妈妈",
          "B. 马上查字典",
          "C. 不管它",
          "D. 不学了"
        ],
        "correct": 1,
        "explanation": "Đáp án chính xác là B. 马上查字典. Nội dung này được thể hiện trực tiếp trong bài đọc."
      },
      {
        "id": 5603,
        "question": "关于上个星期的比赛，哪项是正确的？ (Về cuộc thi tuần trước, điều nào đúng?)",
        "options": [
          "A. 他拿到了第一名",
          "B. 他没有参加",
          "C. 他的进步得到了老师的夸奖",
          "D. 老师很不高兴"
        ],
        "correct": 2,
        "explanation": "Đáp án chính xác là C. 他的进步得到了老师的夸奖. Nội dung này được thể hiện trực tiếp trong bài đọc."
      }
    ]
  },
  {
    "id": 57,
    "level": "HSK 3",
    "title": "Bí quyết học tiếng Trung của 张明",
    "text": "为了学好汉语，张明每天晚上都花两个小时练习听力和口语。他经常用手机跟中国朋友聊天，遇到不会的生词就马上查字典。上个星期，他参加了学校的汉语比赛，虽然没有拿到第一名，但是他的进步得到了王老师的夸奖。他觉得只要坚持努力，就一定能把汉语说得像中国人一样流利。",
    "pinyin": "Wèile xuéhǎo Hànyǔ, 张明 měitiān wǎnshang dōu huā liǎng gè xiǎoshí liànxí tīnglì hé kǒuyǔ. Tā jīngcháng yòng shǒujī gēn Zhōngguó péngyou liáotiān, yùdào bú huì de shēngcí jiù mǎshàng chá zìdiǎn. Shàng gè xīngqī, tā cānjiāle xuéxiào de Hànyǔ bǐsài, suīrán méiyǒu nádào dì-yī míng, dànshì tā de jìnbù dédàole Wáng lǎoshī de kuājiǎng. Tā juéde zhǐyào jiānchí nǔlì, jiù yídìng néng bǎ Hànyǔ shuō de xiàng Zhōngguórén yíyàng liúlì.",
    "translation": "Để học tốt tiếng Trung, 张明 tối nào cũng dành hai tiếng để luyện nghe và nói. Anh ấy thường dùng điện thoại nhắn tin trò chuyện với bạn Trung Quốc, gặp từ mới không biết là lập tức tra từ điển ngay. Tuần trước, anh ấy tham gia cuộc thi tiếng Trung của trường, tuy không giành được giải nhất nhưng tiến bộ của anh ấy đã được thầy Vương khen ngợi. Anh ấy tin rằng chỉ cần kiên trì nỗ lực thì nhất định sẽ nói tiếng Trung lưu loát như người bản xứ.",
    "questions": [
      {
        "id": 5701,
        "question": "张明每天晚上花多长时间练习汉语？ (Mỗi tối dành bao nhiêu thời gian?)",
        "options": [
          "A. 半个小时",
          "B. 一个小时",
          "C. 两个小时",
          "D. 三个小时"
        ],
        "correct": 2,
        "explanation": "Đáp án chính xác là C. 两个小时. Nội dung này được thể hiện trực tiếp trong bài đọc."
      },
      {
        "id": 5702,
        "question": "他遇到不会的生词时怎么办？ (Gặp từ mới không biết thì làm thế nào?)",
        "options": [
          "A. 问爸爸妈妈",
          "B. 马上查字典",
          "C. 不管它",
          "D. 不学了"
        ],
        "correct": 1,
        "explanation": "Đáp án chính xác là B. 马上查字典. Nội dung này được thể hiện trực tiếp trong bài đọc."
      },
      {
        "id": 5703,
        "question": "关于上个星期的比赛，哪项是正确的？ (Về cuộc thi tuần trước, điều nào đúng?)",
        "options": [
          "A. 他拿到了第一名",
          "B. 他没有参加",
          "C. 他的进步得到了老师的夸奖",
          "D. 老师很不高兴"
        ],
        "correct": 2,
        "explanation": "Đáp án chính xác là C. 他的进步得到了老师的夸奖. Nội dung này được thể hiện trực tiếp trong bài đọc."
      }
    ]
  },
  {
    "id": 58,
    "level": "HSK 3",
    "title": "Bí quyết học tiếng Trung của 小猫",
    "text": "为了学好汉语，小猫每天晚上都花两个小时练习听力和口语。他经常用手机跟中国朋友聊天，遇到不会的生词就马上查字典。上个星期，他参加了学校的汉语比赛，虽然没有拿到第一名，但是他的进步得到了王老师的夸奖。他觉得只要坚持努力，就一定能把汉语说得像中国人一样流利。",
    "pinyin": "Wèile xuéhǎo Hànyǔ, 小猫 měitiān wǎnshang dōu huā liǎng gè xiǎoshí liànxí tīnglì hé kǒuyǔ. Tā jīngcháng yòng shǒujī gēn Zhōngguó péngyou liáotiān, yùdào bú huì de shēngcí jiù mǎshàng chá zìdiǎn. Shàng gè xīngqī, tā cānjiāle xuéxiào de Hànyǔ bǐsài, suīrán méiyǒu nádào dì-yī míng, dànshì tā de jìnbù dédàole Wáng lǎoshī de kuājiǎng. Tā juéde zhǐyào jiānchí nǔlì, jiù yídìng néng bǎ Hànyǔ shuō de xiàng Zhōngguórén yíyàng liúlì.",
    "translation": "Để học tốt tiếng Trung, 小猫 tối nào cũng dành hai tiếng để luyện nghe và nói. Anh ấy thường dùng điện thoại nhắn tin trò chuyện với bạn Trung Quốc, gặp từ mới không biết là lập tức tra từ điển ngay. Tuần trước, anh ấy tham gia cuộc thi tiếng Trung của trường, tuy không giành được giải nhất nhưng tiến bộ của anh ấy đã được thầy Vương khen ngợi. Anh ấy tin rằng chỉ cần kiên trì nỗ lực thì nhất định sẽ nói tiếng Trung lưu loát như người bản xứ.",
    "questions": [
      {
        "id": 5801,
        "question": "小猫每天晚上花多长时间练习汉语？ (Mỗi tối dành bao nhiêu thời gian?)",
        "options": [
          "A. 半个小时",
          "B. 一个小时",
          "C. 两个小时",
          "D. 三个小时"
        ],
        "correct": 2,
        "explanation": "Đáp án chính xác là C. 两个小时. Nội dung này được thể hiện trực tiếp trong bài đọc."
      },
      {
        "id": 5802,
        "question": "他遇到不会的生词时怎么办？ (Gặp từ mới không biết thì làm thế nào?)",
        "options": [
          "A. 问爸爸妈妈",
          "B. 马上查字典",
          "C. 不管它",
          "D. 不学了"
        ],
        "correct": 1,
        "explanation": "Đáp án chính xác là B. 马上查字典. Nội dung này được thể hiện trực tiếp trong bài đọc."
      },
      {
        "id": 5803,
        "question": "关于上个星期的比赛，哪项是正确的？ (Về cuộc thi tuần trước, điều nào đúng?)",
        "options": [
          "A. 他拿到了第一名",
          "B. 他没有参加",
          "C. 他的进步得到了老师的夸奖",
          "D. 老师很不高兴"
        ],
        "correct": 2,
        "explanation": "Đáp án chính xác là C. 他的进步得到了老师的夸奖. Nội dung này được thể hiện trực tiếp trong bài đọc."
      }
    ]
  },
  {
    "id": 59,
    "level": "HSK 3",
    "title": "Bí quyết học tiếng Trung của 王老师",
    "text": "为了学好汉语，王老师每天晚上都花两个小时练习听力和口语。他经常用手机跟中国朋友聊天，遇到不会的生词就马上查字典。上个星期，他参加了学校的汉语比赛，虽然没有拿到第一名，但是他的进步得到了王老师的夸奖。他觉得只要坚持努力，就一定能把汉语说得像中国人一样流利。",
    "pinyin": "Wèile xuéhǎo Hànyǔ, 王老师 měitiān wǎnshang dōu huā liǎng gè xiǎoshí liànxí tīnglì hé kǒuyǔ. Tā jīngcháng yòng shǒujī gēn Zhōngguó péngyou liáotiān, yùdào bú huì de shēngcí jiù mǎshàng chá zìdiǎn. Shàng gè xīngqī, tā cānjiāle xuéxiào de Hànyǔ bǐsài, suīrán méiyǒu nádào dì-yī míng, dànshì tā de jìnbù dédàole Wáng lǎoshī de kuājiǎng. Tā juéde zhǐyào jiānchí nǔlì, jiù yídìng néng bǎ Hànyǔ shuō de xiàng Zhōngguórén yíyàng liúlì.",
    "translation": "Để học tốt tiếng Trung, 王老师 tối nào cũng dành hai tiếng để luyện nghe và nói. Anh ấy thường dùng điện thoại nhắn tin trò chuyện với bạn Trung Quốc, gặp từ mới không biết là lập tức tra từ điển ngay. Tuần trước, anh ấy tham gia cuộc thi tiếng Trung của trường, tuy không giành được giải nhất nhưng tiến bộ của anh ấy đã được thầy Vương khen ngợi. Anh ấy tin rằng chỉ cần kiên trì nỗ lực thì nhất định sẽ nói tiếng Trung lưu loát như người bản xứ.",
    "questions": [
      {
        "id": 5901,
        "question": "王老师每天晚上花多长时间练习汉语？ (Mỗi tối dành bao nhiêu thời gian?)",
        "options": [
          "A. 半个小时",
          "B. 一个小时",
          "C. 两个小时",
          "D. 三个小时"
        ],
        "correct": 2,
        "explanation": "Đáp án chính xác là C. 两个小时. Nội dung này được thể hiện trực tiếp trong bài đọc."
      },
      {
        "id": 5902,
        "question": "他遇到不会的生词时怎么办？ (Gặp từ mới không biết thì làm thế nào?)",
        "options": [
          "A. 问爸爸妈妈",
          "B. 马上查字典",
          "C. 不管它",
          "D. 不学了"
        ],
        "correct": 1,
        "explanation": "Đáp án chính xác là B. 马上查字典. Nội dung này được thể hiện trực tiếp trong bài đọc."
      },
      {
        "id": 5903,
        "question": "关于上个星期的比赛，哪项是正确的？ (Về cuộc thi tuần trước, điều nào đúng?)",
        "options": [
          "A. 他拿到了第一名",
          "B. 他没有参加",
          "C. 他的进步得到了老师的夸奖",
          "D. 老师很不高兴"
        ],
        "correct": 2,
        "explanation": "Đáp án chính xác là C. 他的进步得到了老师的夸奖. Nội dung này được thể hiện trực tiếp trong bài đọc."
      }
    ]
  },
  {
    "id": 60,
    "level": "HSK 3",
    "title": "Bí quyết học tiếng Trung của 刘医生",
    "text": "为了学好汉语，刘医生每天晚上都花两个小时练习听力和口语。他经常用手机跟中国朋友聊天，遇到不会的生词就马上查字典。上个星期，他参加了学校的汉语比赛，虽然没有拿到第一名，但是他的进步得到了王老师的夸奖。他觉得只要坚持努力，就一定能把汉语说得像中国人一样流利。",
    "pinyin": "Wèile xuéhǎo Hànyǔ, 刘医生 měitiān wǎnshang dōu huā liǎng gè xiǎoshí liànxí tīnglì hé kǒuyǔ. Tā jīngcháng yòng shǒujī gēn Zhōngguó péngyou liáotiān, yùdào bú huì de shēngcí jiù mǎshàng chá zìdiǎn. Shàng gè xīngqī, tā cānjiāle xuéxiào de Hànyǔ bǐsài, suīrán méiyǒu nádào dì-yī míng, dànshì tā de jìnbù dédàole Wáng lǎoshī de kuājiǎng. Tā juéde zhǐyào jiānchí nǔlì, jiù yídìng néng bǎ Hànyǔ shuō de xiàng Zhōngguórén yíyàng liúlì.",
    "translation": "Để học tốt tiếng Trung, 刘医生 tối nào cũng dành hai tiếng để luyện nghe và nói. Anh ấy thường dùng điện thoại nhắn tin trò chuyện với bạn Trung Quốc, gặp từ mới không biết là lập tức tra từ điển ngay. Tuần trước, anh ấy tham gia cuộc thi tiếng Trung của trường, tuy không giành được giải nhất nhưng tiến bộ của anh ấy đã được thầy Vương khen ngợi. Anh ấy tin rằng chỉ cần kiên trì nỗ lực thì nhất định sẽ nói tiếng Trung lưu loát như người bản xứ.",
    "questions": [
      {
        "id": 6001,
        "question": "刘医生每天晚上花多长时间练习汉语？ (Mỗi tối dành bao nhiêu thời gian?)",
        "options": [
          "A. 半个小时",
          "B. 一个小时",
          "C. 两个小时",
          "D. 三个小时"
        ],
        "correct": 2,
        "explanation": "Đáp án chính xác là C. 两个小时. Nội dung này được thể hiện trực tiếp trong bài đọc."
      },
      {
        "id": 6002,
        "question": "他遇到不会的生词时怎么办？ (Gặp từ mới không biết thì làm thế nào?)",
        "options": [
          "A. 问爸爸妈妈",
          "B. 马上查字典",
          "C. 不管它",
          "D. 不学了"
        ],
        "correct": 1,
        "explanation": "Đáp án chính xác là B. 马上查字典. Nội dung này được thể hiện trực tiếp trong bài đọc."
      },
      {
        "id": 6003,
        "question": "关于上个星期的比赛，哪项是正确的？ (Về cuộc thi tuần trước, điều nào đúng?)",
        "options": [
          "A. 他拿到了第一名",
          "B. 他没有参加",
          "C. 他的进步得到了老师的夸奖",
          "D. 老师很不高兴"
        ],
        "correct": 2,
        "explanation": "Đáp án chính xác là C. 他的进步得到了老师的夸奖. Nội dung này được thể hiện trực tiếp trong bài đọc."
      }
    ]
  },
  {
    "id": 61,
    "level": "HSK 3",
    "title": "Bí quyết học tiếng Trung của 陈同学",
    "text": "为了学好汉语，陈同学每天晚上都花两个小时练习听力和口语。他经常用手机跟中国朋友聊天，遇到不会的生词就马上查字典。上个星期，他参加了学校的汉语比赛，虽然没有拿到第一名，但是他的进步得到了王老师的夸奖。他觉得只要坚持努力，就一定能把汉语说得像中国人一样流利。",
    "pinyin": "Wèile xuéhǎo Hànyǔ, 陈同学 měitiān wǎnshang dōu huā liǎng gè xiǎoshí liànxí tīnglì hé kǒuyǔ. Tā jīngcháng yòng shǒujī gēn Zhōngguó péngyou liáotiān, yùdào bú huì de shēngcí jiù mǎshàng chá zìdiǎn. Shàng gè xīngqī, tā cānjiāle xuéxiào de Hànyǔ bǐsài, suīrán méiyǒu nádào dì-yī míng, dànshì tā de jìnbù dédàole Wáng lǎoshī de kuājiǎng. Tā juéde zhǐyào jiānchí nǔlì, jiù yídìng néng bǎ Hànyǔ shuō de xiàng Zhōngguórén yíyàng liúlì.",
    "translation": "Để học tốt tiếng Trung, 陈同学 tối nào cũng dành hai tiếng để luyện nghe và nói. Anh ấy thường dùng điện thoại nhắn tin trò chuyện với bạn Trung Quốc, gặp từ mới không biết là lập tức tra từ điển ngay. Tuần trước, anh ấy tham gia cuộc thi tiếng Trung của trường, tuy không giành được giải nhất nhưng tiến bộ của anh ấy đã được thầy Vương khen ngợi. Anh ấy tin rằng chỉ cần kiên trì nỗ lực thì nhất định sẽ nói tiếng Trung lưu loát như người bản xứ.",
    "questions": [
      {
        "id": 6101,
        "question": "陈同学每天晚上花多长时间练习汉语？ (Mỗi tối dành bao nhiêu thời gian?)",
        "options": [
          "A. 半个小时",
          "B. 一个小时",
          "C. 两个小时",
          "D. 三个小时"
        ],
        "correct": 2,
        "explanation": "Đáp án chính xác là C. 两个小时. Nội dung này được thể hiện trực tiếp trong bài đọc."
      },
      {
        "id": 6102,
        "question": "他遇到不会的生词时怎么办？ (Gặp từ mới không biết thì làm thế nào?)",
        "options": [
          "A. 问爸爸妈妈",
          "B. 马上查字典",
          "C. 不管它",
          "D. 不学了"
        ],
        "correct": 1,
        "explanation": "Đáp án chính xác là B. 马上查字典. Nội dung này được thể hiện trực tiếp trong bài đọc."
      },
      {
        "id": 6103,
        "question": "关于上个星期的比赛，哪项是正确的？ (Về cuộc thi tuần trước, điều nào đúng?)",
        "options": [
          "A. 他拿到了第一名",
          "B. 他没有参加",
          "C. 他的进步得到了老师的夸奖",
          "D. 老师很不高兴"
        ],
        "correct": 2,
        "explanation": "Đáp án chính xác là C. 他的进步得到了老师的夸奖. Nội dung này được thể hiện trực tiếp trong bài đọc."
      }
    ]
  },
  {
    "id": 62,
    "level": "HSK 3",
    "title": "Bí quyết học tiếng Trung của 安娜",
    "text": "为了学好汉语，安娜每天晚上都花两个小时练习听力和口语。他经常用手机跟中国朋友聊天，遇到不会的生词就马上查字典。上个星期，他参加了学校的汉语比赛，虽然没有拿到第一名，但是他的进步得到了王老师的夸奖。他觉得只要坚持努力，就一定能把汉语说得像中国人一样流利。",
    "pinyin": "Wèile xuéhǎo Hànyǔ, 安娜 měitiān wǎnshang dōu huā liǎng gè xiǎoshí liànxí tīnglì hé kǒuyǔ. Tā jīngcháng yòng shǒujī gēn Zhōngguó péngyou liáotiān, yùdào bú huì de shēngcí jiù mǎshàng chá zìdiǎn. Shàng gè xīngqī, tā cānjiāle xuéxiào de Hànyǔ bǐsài, suīrán méiyǒu nádào dì-yī míng, dànshì tā de jìnbù dédàole Wáng lǎoshī de kuājiǎng. Tā juéde zhǐyào jiānchí nǔlì, jiù yídìng néng bǎ Hànyǔ shuō de xiàng Zhōngguórén yíyàng liúlì.",
    "translation": "Để học tốt tiếng Trung, 安娜 tối nào cũng dành hai tiếng để luyện nghe và nói. Anh ấy thường dùng điện thoại nhắn tin trò chuyện với bạn Trung Quốc, gặp từ mới không biết là lập tức tra từ điển ngay. Tuần trước, anh ấy tham gia cuộc thi tiếng Trung của trường, tuy không giành được giải nhất nhưng tiến bộ của anh ấy đã được thầy Vương khen ngợi. Anh ấy tin rằng chỉ cần kiên trì nỗ lực thì nhất định sẽ nói tiếng Trung lưu loát như người bản xứ.",
    "questions": [
      {
        "id": 6201,
        "question": "安娜每天晚上花多长时间练习汉语？ (Mỗi tối dành bao nhiêu thời gian?)",
        "options": [
          "A. 半个小时",
          "B. 一个小时",
          "C. 两个小时",
          "D. 三个小时"
        ],
        "correct": 2,
        "explanation": "Đáp án chính xác là C. 两个小时. Nội dung này được thể hiện trực tiếp trong bài đọc."
      },
      {
        "id": 6202,
        "question": "他遇到不会的生词时怎么办？ (Gặp từ mới không biết thì làm thế nào?)",
        "options": [
          "A. 问爸爸妈妈",
          "B. 马上查字典",
          "C. 不管它",
          "D. 不学了"
        ],
        "correct": 1,
        "explanation": "Đáp án chính xác là B. 马上查字典. Nội dung này được thể hiện trực tiếp trong bài đọc."
      },
      {
        "id": 6203,
        "question": "关于上个星期的比赛，哪项是正确的？ (Về cuộc thi tuần trước, điều nào đúng?)",
        "options": [
          "A. 他拿到了第一名",
          "B. 他没有参加",
          "C. 他的进步得到了老师的夸奖",
          "D. 老师很不高兴"
        ],
        "correct": 2,
        "explanation": "Đáp án chính xác là C. 他的进步得到了老师的夸奖. Nội dung này được thể hiện trực tiếp trong bài đọc."
      }
    ]
  },
  {
    "id": 63,
    "level": "HSK 3",
    "title": "Bí quyết học tiếng Trung của 大卫",
    "text": "为了学好汉语，大卫每天晚上都花两个小时练习听力和口语。他经常用手机跟中国朋友聊天，遇到不会的生词就马上查字典。上个星期，他参加了学校的汉语比赛，虽然没有拿到第一名，但是他的进步得到了王老师的夸奖。他觉得只要坚持努力，就一定能把汉语说得像中国人一样流利。",
    "pinyin": "Wèile xuéhǎo Hànyǔ, 大卫 měitiān wǎnshang dōu huā liǎng gè xiǎoshí liànxí tīnglì hé kǒuyǔ. Tā jīngcháng yòng shǒujī gēn Zhōngguó péngyou liáotiān, yùdào bú huì de shēngcí jiù mǎshàng chá zìdiǎn. Shàng gè xīngqī, tā cānjiāle xuéxiào de Hànyǔ bǐsài, suīrán méiyǒu nádào dì-yī míng, dànshì tā de jìnbù dédàole Wáng lǎoshī de kuājiǎng. Tā juéde zhǐyào jiānchí nǔlì, jiù yídìng néng bǎ Hànyǔ shuō de xiàng Zhōngguórén yíyàng liúlì.",
    "translation": "Để học tốt tiếng Trung, 大卫 tối nào cũng dành hai tiếng để luyện nghe và nói. Anh ấy thường dùng điện thoại nhắn tin trò chuyện với bạn Trung Quốc, gặp từ mới không biết là lập tức tra từ điển ngay. Tuần trước, anh ấy tham gia cuộc thi tiếng Trung của trường, tuy không giành được giải nhất nhưng tiến bộ của anh ấy đã được thầy Vương khen ngợi. Anh ấy tin rằng chỉ cần kiên trì nỗ lực thì nhất định sẽ nói tiếng Trung lưu loát như người bản xứ.",
    "questions": [
      {
        "id": 6301,
        "question": "大卫每天晚上花多长时间练习汉语？ (Mỗi tối dành bao nhiêu thời gian?)",
        "options": [
          "A. 半个小时",
          "B. 一个小时",
          "C. 两个小时",
          "D. 三个小时"
        ],
        "correct": 2,
        "explanation": "Đáp án chính xác là C. 两个小时. Nội dung này được thể hiện trực tiếp trong bài đọc."
      },
      {
        "id": 6302,
        "question": "他遇到不会的生词时怎么办？ (Gặp từ mới không biết thì làm thế nào?)",
        "options": [
          "A. 问爸爸妈妈",
          "B. 马上查字典",
          "C. 不管它",
          "D. 不学了"
        ],
        "correct": 1,
        "explanation": "Đáp án chính xác là B. 马上查字典. Nội dung này được thể hiện trực tiếp trong bài đọc."
      },
      {
        "id": 6303,
        "question": "关于上个星期的比赛，哪项是正确的？ (Về cuộc thi tuần trước, điều nào đúng?)",
        "options": [
          "A. 他拿到了第一名",
          "B. 他没有参加",
          "C. 他的进步得到了老师的夸奖",
          "D. 老师很不高兴"
        ],
        "correct": 2,
        "explanation": "Đáp án chính xác là C. 他的进步得到了老师的夸奖. Nội dung này được thể hiện trực tiếp trong bài đọc."
      }
    ]
  },
  {
    "id": 64,
    "level": "HSK 3",
    "title": "Bí quyết học tiếng Trung của 玛丽",
    "text": "为了学好汉语，玛丽每天晚上都花两个小时练习听力和口语。他经常用手机跟中国朋友聊天，遇到不会的生词就马上查字典。上个星期，他参加了学校的汉语比赛，虽然没有拿到第一名，但是他的进步得到了王老师的夸奖。他觉得只要坚持努力，就一定能把汉语说得像中国人一样流利。",
    "pinyin": "Wèile xuéhǎo Hànyǔ, 玛丽 měitiān wǎnshang dōu huā liǎng gè xiǎoshí liànxí tīnglì hé kǒuyǔ. Tā jīngcháng yòng shǒujī gēn Zhōngguó péngyou liáotiān, yùdào bú huì de shēngcí jiù mǎshàng chá zìdiǎn. Shàng gè xīngqī, tā cānjiāle xuéxiào de Hànyǔ bǐsài, suīrán méiyǒu nádào dì-yī míng, dànshì tā de jìnbù dédàole Wáng lǎoshī de kuājiǎng. Tā juéde zhǐyào jiānchí nǔlì, jiù yídìng néng bǎ Hànyǔ shuō de xiàng Zhōngguórén yíyàng liúlì.",
    "translation": "Để học tốt tiếng Trung, 玛丽 tối nào cũng dành hai tiếng để luyện nghe và nói. Anh ấy thường dùng điện thoại nhắn tin trò chuyện với bạn Trung Quốc, gặp từ mới không biết là lập tức tra từ điển ngay. Tuần trước, anh ấy tham gia cuộc thi tiếng Trung của trường, tuy không giành được giải nhất nhưng tiến bộ của anh ấy đã được thầy Vương khen ngợi. Anh ấy tin rằng chỉ cần kiên trì nỗ lực thì nhất định sẽ nói tiếng Trung lưu loát như người bản xứ.",
    "questions": [
      {
        "id": 6401,
        "question": "玛丽每天晚上花多长时间练习汉语？ (Mỗi tối dành bao nhiêu thời gian?)",
        "options": [
          "A. 半个小时",
          "B. 一个小时",
          "C. 两个小时",
          "D. 三个小时"
        ],
        "correct": 2,
        "explanation": "Đáp án chính xác là C. 两个小时. Nội dung này được thể hiện trực tiếp trong bài đọc."
      },
      {
        "id": 6402,
        "question": "他遇到不会的生词时怎么办？ (Gặp từ mới không biết thì làm thế nào?)",
        "options": [
          "A. 问爸爸妈妈",
          "B. 马上查字典",
          "C. 不管它",
          "D. 不学了"
        ],
        "correct": 1,
        "explanation": "Đáp án chính xác là B. 马上查字典. Nội dung này được thể hiện trực tiếp trong bài đọc."
      },
      {
        "id": 6403,
        "question": "关于上个星期的比赛，哪项是正确的？ (Về cuộc thi tuần trước, điều nào đúng?)",
        "options": [
          "A. 他拿到了第一名",
          "B. 他没有参加",
          "C. 他的进步得到了老师的夸奖",
          "D. 老师很不高兴"
        ],
        "correct": 2,
        "explanation": "Đáp án chính xác là C. 他的进步得到了老师的夸奖. Nội dung này được thể hiện trực tiếp trong bài đọc."
      }
    ]
  },
  {
    "id": 65,
    "level": "HSK 3",
    "title": "Bí quyết học tiếng Trung của 林华",
    "text": "为了学好汉语，林华每天晚上都花两个小时练习听力和口语。他经常用手机跟中国朋友聊天，遇到不会的生词就马上查字典。上个星期，他参加了学校的汉语比赛，虽然没有拿到第一名，但是他的进步得到了王老师的夸奖。他觉得只要坚持努力，就一定能把汉语说得像中国人一样流利。",
    "pinyin": "Wèile xuéhǎo Hànyǔ, 林华 měitiān wǎnshang dōu huā liǎng gè xiǎoshí liànxí tīnglì hé kǒuyǔ. Tā jīngcháng yòng shǒujī gēn Zhōngguó péngyou liáotiān, yùdào bú huì de shēngcí jiù mǎshàng chá zìdiǎn. Shàng gè xīngqī, tā cānjiāle xuéxiào de Hànyǔ bǐsài, suīrán méiyǒu nádào dì-yī míng, dànshì tā de jìnbù dédàole Wáng lǎoshī de kuājiǎng. Tā juéde zhǐyào jiānchí nǔlì, jiù yídìng néng bǎ Hànyǔ shuō de xiàng Zhōngguórén yíyàng liúlì.",
    "translation": "Để học tốt tiếng Trung, 林华 tối nào cũng dành hai tiếng để luyện nghe và nói. Anh ấy thường dùng điện thoại nhắn tin trò chuyện với bạn Trung Quốc, gặp từ mới không biết là lập tức tra từ điển ngay. Tuần trước, anh ấy tham gia cuộc thi tiếng Trung của trường, tuy không giành được giải nhất nhưng tiến bộ của anh ấy đã được thầy Vương khen ngợi. Anh ấy tin rằng chỉ cần kiên trì nỗ lực thì nhất định sẽ nói tiếng Trung lưu loát như người bản xứ.",
    "questions": [
      {
        "id": 6501,
        "question": "林华每天晚上花多长时间练习汉语？ (Mỗi tối dành bao nhiêu thời gian?)",
        "options": [
          "A. 半个小时",
          "B. 一个小时",
          "C. 两个小时",
          "D. 三个小时"
        ],
        "correct": 2,
        "explanation": "Đáp án chính xác là C. 两个小时. Nội dung này được thể hiện trực tiếp trong bài đọc."
      },
      {
        "id": 6502,
        "question": "他遇到不会的生词时怎么办？ (Gặp từ mới không biết thì làm thế nào?)",
        "options": [
          "A. 问爸爸妈妈",
          "B. 马上查字典",
          "C. 不管它",
          "D. 不学了"
        ],
        "correct": 1,
        "explanation": "Đáp án chính xác là B. 马上查字典. Nội dung này được thể hiện trực tiếp trong bài đọc."
      },
      {
        "id": 6503,
        "question": "关于上个星期的比赛，哪项是正确的？ (Về cuộc thi tuần trước, điều nào đúng?)",
        "options": [
          "A. 他拿到了第一名",
          "B. 他没有参加",
          "C. 他的进步得到了老师的夸奖",
          "D. 老师很不高兴"
        ],
        "correct": 2,
        "explanation": "Đáp án chính xác là C. 他的进步得到了老师的夸奖. Nội dung này được thể hiện trực tiếp trong bài đọc."
      }
    ]
  },
  {
    "id": 66,
    "level": "HSK 3",
    "title": "Bí quyết học tiếng Trung của 李华",
    "text": "为了学好汉语，李华每天晚上都花两个小时练习听力和口语。他经常用手机跟中国朋友聊天，遇到不会的生词就马上查字典。上个星期，他参加了学校的汉语比赛，虽然没有拿到第一名，但是他的进步得到了王老师的夸奖。他觉得只要坚持努力，就一定能把汉语说得像中国人一样流利。",
    "pinyin": "Wèile xuéhǎo Hànyǔ, 李华 měitiān wǎnshang dōu huā liǎng gè xiǎoshí liànxí tīnglì hé kǒuyǔ. Tā jīngcháng yòng shǒujī gēn Zhōngguó péngyou liáotiān, yùdào bú huì de shēngcí jiù mǎshàng chá zìdiǎn. Shàng gè xīngqī, tā cānjiāle xuéxiào de Hànyǔ bǐsài, suīrán méiyǒu nádào dì-yī míng, dànshì tā de jìnbù dédàole Wáng lǎoshī de kuājiǎng. Tā juéde zhǐyào jiānchí nǔlì, jiù yídìng néng bǎ Hànyǔ shuō de xiàng Zhōngguórén yíyàng liúlì.",
    "translation": "Để học tốt tiếng Trung, 李华 tối nào cũng dành hai tiếng để luyện nghe và nói. Anh ấy thường dùng điện thoại nhắn tin trò chuyện với bạn Trung Quốc, gặp từ mới không biết là lập tức tra từ điển ngay. Tuần trước, anh ấy tham gia cuộc thi tiếng Trung của trường, tuy không giành được giải nhất nhưng tiến bộ của anh ấy đã được thầy Vương khen ngợi. Anh ấy tin rằng chỉ cần kiên trì nỗ lực thì nhất định sẽ nói tiếng Trung lưu loát như người bản xứ.",
    "questions": [
      {
        "id": 6601,
        "question": "李华每天晚上花多长时间练习汉语？ (Mỗi tối dành bao nhiêu thời gian?)",
        "options": [
          "A. 半个小时",
          "B. 一个小时",
          "C. 两个小时",
          "D. 三个小时"
        ],
        "correct": 2,
        "explanation": "Đáp án chính xác là C. 两个小时. Nội dung này được thể hiện trực tiếp trong bài đọc."
      },
      {
        "id": 6602,
        "question": "他遇到不会的生词时怎么办？ (Gặp từ mới không biết thì làm thế nào?)",
        "options": [
          "A. 问爸爸妈妈",
          "B. 马上查字典",
          "C. 不管它",
          "D. 不学了"
        ],
        "correct": 1,
        "explanation": "Đáp án chính xác là B. 马上查字典. Nội dung này được thể hiện trực tiếp trong bài đọc."
      },
      {
        "id": 6603,
        "question": "关于上个星期的比赛，哪项是正确的？ (Về cuộc thi tuần trước, điều nào đúng?)",
        "options": [
          "A. 他拿到了第一名",
          "B. 他没有参加",
          "C. 他的进步得到了老师的夸奖",
          "D. 老师很不高兴"
        ],
        "correct": 2,
        "explanation": "Đáp án chính xác là C. 他的进步得到了老师的夸奖. Nội dung này được thể hiện trực tiếp trong bài đọc."
      }
    ]
  },
  {
    "id": 67,
    "level": "HSK 3",
    "title": "Bí quyết học tiếng Trung của 张明",
    "text": "为了学好汉语，张明每天晚上都花两个小时练习听力和口语。他经常用手机跟中国朋友聊天，遇到不会的生词就马上查字典。上个星期，他参加了学校的汉语比赛，虽然没有拿到第一名，但是他的进步得到了王老师的夸奖。他觉得只要坚持努力，就一定能把汉语说得像中国人一样流利。",
    "pinyin": "Wèile xuéhǎo Hànyǔ, 张明 měitiān wǎnshang dōu huā liǎng gè xiǎoshí liànxí tīnglì hé kǒuyǔ. Tā jīngcháng yòng shǒujī gēn Zhōngguó péngyou liáotiān, yùdào bú huì de shēngcí jiù mǎshàng chá zìdiǎn. Shàng gè xīngqī, tā cānjiāle xuéxiào de Hànyǔ bǐsài, suīrán méiyǒu nádào dì-yī míng, dànshì tā de jìnbù dédàole Wáng lǎoshī de kuājiǎng. Tā juéde zhǐyào jiānchí nǔlì, jiù yídìng néng bǎ Hànyǔ shuō de xiàng Zhōngguórén yíyàng liúlì.",
    "translation": "Để học tốt tiếng Trung, 张明 tối nào cũng dành hai tiếng để luyện nghe và nói. Anh ấy thường dùng điện thoại nhắn tin trò chuyện với bạn Trung Quốc, gặp từ mới không biết là lập tức tra từ điển ngay. Tuần trước, anh ấy tham gia cuộc thi tiếng Trung của trường, tuy không giành được giải nhất nhưng tiến bộ của anh ấy đã được thầy Vương khen ngợi. Anh ấy tin rằng chỉ cần kiên trì nỗ lực thì nhất định sẽ nói tiếng Trung lưu loát như người bản xứ.",
    "questions": [
      {
        "id": 6701,
        "question": "张明每天晚上花多长时间练习汉语？ (Mỗi tối dành bao nhiêu thời gian?)",
        "options": [
          "A. 半个小时",
          "B. 一个小时",
          "C. 两个小时",
          "D. 三个小时"
        ],
        "correct": 2,
        "explanation": "Đáp án chính xác là C. 两个小时. Nội dung này được thể hiện trực tiếp trong bài đọc."
      },
      {
        "id": 6702,
        "question": "他遇到不会的生词时怎么办？ (Gặp từ mới không biết thì làm thế nào?)",
        "options": [
          "A. 问爸爸妈妈",
          "B. 马上查字典",
          "C. 不管它",
          "D. 不学了"
        ],
        "correct": 1,
        "explanation": "Đáp án chính xác là B. 马上查字典. Nội dung này được thể hiện trực tiếp trong bài đọc."
      },
      {
        "id": 6703,
        "question": "关于上个星期的比赛，哪项是正确的？ (Về cuộc thi tuần trước, điều nào đúng?)",
        "options": [
          "A. 他拿到了第一名",
          "B. 他没有参加",
          "C. 他的进步得到了老师的夸奖",
          "D. 老师很不高兴"
        ],
        "correct": 2,
        "explanation": "Đáp án chính xác là C. 他的进步得到了老师的夸奖. Nội dung này được thể hiện trực tiếp trong bài đọc."
      }
    ]
  },
  {
    "id": 68,
    "level": "HSK 3",
    "title": "Bí quyết học tiếng Trung của 小猫",
    "text": "为了学好汉语，小猫每天晚上都花两个小时练习听力和口语。他经常用手机跟中国朋友聊天，遇到不会的生词就马上查字典。上个星期，他参加了学校的汉语比赛，虽然没有拿到第一名，但是他的进步得到了王老师的夸奖。他觉得只要坚持努力，就一定能把汉语说得像中国人一样流利。",
    "pinyin": "Wèile xuéhǎo Hànyǔ, 小猫 měitiān wǎnshang dōu huā liǎng gè xiǎoshí liànxí tīnglì hé kǒuyǔ. Tā jīngcháng yòng shǒujī gēn Zhōngguó péngyou liáotiān, yùdào bú huì de shēngcí jiù mǎshàng chá zìdiǎn. Shàng gè xīngqī, tā cānjiāle xuéxiào de Hànyǔ bǐsài, suīrán méiyǒu nádào dì-yī míng, dànshì tā de jìnbù dédàole Wáng lǎoshī de kuājiǎng. Tā juéde zhǐyào jiānchí nǔlì, jiù yídìng néng bǎ Hànyǔ shuō de xiàng Zhōngguórén yíyàng liúlì.",
    "translation": "Để học tốt tiếng Trung, 小猫 tối nào cũng dành hai tiếng để luyện nghe và nói. Anh ấy thường dùng điện thoại nhắn tin trò chuyện với bạn Trung Quốc, gặp từ mới không biết là lập tức tra từ điển ngay. Tuần trước, anh ấy tham gia cuộc thi tiếng Trung của trường, tuy không giành được giải nhất nhưng tiến bộ của anh ấy đã được thầy Vương khen ngợi. Anh ấy tin rằng chỉ cần kiên trì nỗ lực thì nhất định sẽ nói tiếng Trung lưu loát như người bản xứ.",
    "questions": [
      {
        "id": 6801,
        "question": "小猫每天晚上花多长时间练习汉语？ (Mỗi tối dành bao nhiêu thời gian?)",
        "options": [
          "A. 半个小时",
          "B. 一个小时",
          "C. 两个小时",
          "D. 三个小时"
        ],
        "correct": 2,
        "explanation": "Đáp án chính xác là C. 两个小时. Nội dung này được thể hiện trực tiếp trong bài đọc."
      },
      {
        "id": 6802,
        "question": "他遇到不会的生词时怎么办？ (Gặp từ mới không biết thì làm thế nào?)",
        "options": [
          "A. 问爸爸妈妈",
          "B. 马上查字典",
          "C. 不管它",
          "D. 不学了"
        ],
        "correct": 1,
        "explanation": "Đáp án chính xác là B. 马上查字典. Nội dung này được thể hiện trực tiếp trong bài đọc."
      },
      {
        "id": 6803,
        "question": "关于上个星期的比赛，哪项是正确的？ (Về cuộc thi tuần trước, điều nào đúng?)",
        "options": [
          "A. 他拿到了第一名",
          "B. 他没有参加",
          "C. 他的进步得到了老师的夸奖",
          "D. 老师很不高兴"
        ],
        "correct": 2,
        "explanation": "Đáp án chính xác là C. 他的进步得到了老师的夸奖. Nội dung này được thể hiện trực tiếp trong bài đọc."
      }
    ]
  },
  {
    "id": 69,
    "level": "HSK 3",
    "title": "Bí quyết học tiếng Trung của 王老师",
    "text": "为了学好汉语，王老师每天晚上都花两个小时练习听力和口语。他经常用手机跟中国朋友聊天，遇到不会的生词就马上查字典。上个星期，他参加了学校的汉语比赛，虽然没有拿到第一名，但是他的进步得到了王老师的夸奖。他觉得只要坚持努力，就一定能把汉语说得像中国人一样流利。",
    "pinyin": "Wèile xuéhǎo Hànyǔ, 王老师 měitiān wǎnshang dōu huā liǎng gè xiǎoshí liànxí tīnglì hé kǒuyǔ. Tā jīngcháng yòng shǒujī gēn Zhōngguó péngyou liáotiān, yùdào bú huì de shēngcí jiù mǎshàng chá zìdiǎn. Shàng gè xīngqī, tā cānjiāle xuéxiào de Hànyǔ bǐsài, suīrán méiyǒu nádào dì-yī míng, dànshì tā de jìnbù dédàole Wáng lǎoshī de kuājiǎng. Tā juéde zhǐyào jiānchí nǔlì, jiù yídìng néng bǎ Hànyǔ shuō de xiàng Zhōngguórén yíyàng liúlì.",
    "translation": "Để học tốt tiếng Trung, 王老师 tối nào cũng dành hai tiếng để luyện nghe và nói. Anh ấy thường dùng điện thoại nhắn tin trò chuyện với bạn Trung Quốc, gặp từ mới không biết là lập tức tra từ điển ngay. Tuần trước, anh ấy tham gia cuộc thi tiếng Trung của trường, tuy không giành được giải nhất nhưng tiến bộ của anh ấy đã được thầy Vương khen ngợi. Anh ấy tin rằng chỉ cần kiên trì nỗ lực thì nhất định sẽ nói tiếng Trung lưu loát như người bản xứ.",
    "questions": [
      {
        "id": 6901,
        "question": "王老师每天晚上花多长时间练习汉语？ (Mỗi tối dành bao nhiêu thời gian?)",
        "options": [
          "A. 半个小时",
          "B. 一个小时",
          "C. 两个小时",
          "D. 三个小时"
        ],
        "correct": 2,
        "explanation": "Đáp án chính xác là C. 两个小时. Nội dung này được thể hiện trực tiếp trong bài đọc."
      },
      {
        "id": 6902,
        "question": "他遇到不会的生词时怎么办？ (Gặp từ mới không biết thì làm thế nào?)",
        "options": [
          "A. 问爸爸妈妈",
          "B. 马上查字典",
          "C. 不管它",
          "D. 不学了"
        ],
        "correct": 1,
        "explanation": "Đáp án chính xác là B. 马上查字典. Nội dung này được thể hiện trực tiếp trong bài đọc."
      },
      {
        "id": 6903,
        "question": "关于上个星期的比赛，哪项是正确的？ (Về cuộc thi tuần trước, điều nào đúng?)",
        "options": [
          "A. 他拿到了第一名",
          "B. 他没有参加",
          "C. 他的进步得到了老师的夸奖",
          "D. 老师很不高兴"
        ],
        "correct": 2,
        "explanation": "Đáp án chính xác là C. 他的进步得到了老师的夸奖. Nội dung này được thể hiện trực tiếp trong bài đọc."
      }
    ]
  },
  {
    "id": 70,
    "level": "HSK 3",
    "title": "Bí quyết học tiếng Trung của 刘医生",
    "text": "为了学好汉语，刘医生每天晚上都花两个小时练习听力和口语。他经常用手机跟中国朋友聊天，遇到不会的生词就马上查字典。上个星期，他参加了学校的汉语比赛，虽然没有拿到第一名，但是他的进步得到了王老师的夸奖。他觉得只要坚持努力，就一定能把汉语说得像中国人一样流利。",
    "pinyin": "Wèile xuéhǎo Hànyǔ, 刘医生 měitiān wǎnshang dōu huā liǎng gè xiǎoshí liànxí tīnglì hé kǒuyǔ. Tā jīngcháng yòng shǒujī gēn Zhōngguó péngyou liáotiān, yùdào bú huì de shēngcí jiù mǎshàng chá zìdiǎn. Shàng gè xīngqī, tā cānjiāle xuéxiào de Hànyǔ bǐsài, suīrán méiyǒu nádào dì-yī míng, dànshì tā de jìnbù dédàole Wáng lǎoshī de kuājiǎng. Tā juéde zhǐyào jiānchí nǔlì, jiù yídìng néng bǎ Hànyǔ shuō de xiàng Zhōngguórén yíyàng liúlì.",
    "translation": "Để học tốt tiếng Trung, 刘医生 tối nào cũng dành hai tiếng để luyện nghe và nói. Anh ấy thường dùng điện thoại nhắn tin trò chuyện với bạn Trung Quốc, gặp từ mới không biết là lập tức tra từ điển ngay. Tuần trước, anh ấy tham gia cuộc thi tiếng Trung của trường, tuy không giành được giải nhất nhưng tiến bộ của anh ấy đã được thầy Vương khen ngợi. Anh ấy tin rằng chỉ cần kiên trì nỗ lực thì nhất định sẽ nói tiếng Trung lưu loát như người bản xứ.",
    "questions": [
      {
        "id": 7001,
        "question": "刘医生每天晚上花多长时间练习汉语？ (Mỗi tối dành bao nhiêu thời gian?)",
        "options": [
          "A. 半个小时",
          "B. 一个小时",
          "C. 两个小时",
          "D. 三个小时"
        ],
        "correct": 2,
        "explanation": "Đáp án chính xác là C. 两个小时. Nội dung này được thể hiện trực tiếp trong bài đọc."
      },
      {
        "id": 7002,
        "question": "他遇到不会的生词时怎么办？ (Gặp từ mới không biết thì làm thế nào?)",
        "options": [
          "A. 问爸爸妈妈",
          "B. 马上查字典",
          "C. 不管它",
          "D. 不学了"
        ],
        "correct": 1,
        "explanation": "Đáp án chính xác là B. 马上查字典. Nội dung này được thể hiện trực tiếp trong bài đọc."
      },
      {
        "id": 7003,
        "question": "关于上个星期的比赛，哪项是正确的？ (Về cuộc thi tuần trước, điều nào đúng?)",
        "options": [
          "A. 他拿到了第一名",
          "B. 他没有参加",
          "C. 他的进步得到了老师的夸奖",
          "D. 老师很不高兴"
        ],
        "correct": 2,
        "explanation": "Đáp án chính xác là C. 他的进步得到了老师的夸奖. Nội dung này được thể hiện trực tiếp trong bài đọc."
      }
    ]
  },
  {
    "id": 71,
    "level": "HSK 3",
    "title": "Bí quyết học tiếng Trung của 陈同学",
    "text": "为了学好汉语，陈同学每天晚上都花两个小时练习听力和口语。他经常用手机跟中国朋友聊天，遇到不会的生词就马上查字典。上个星期，他参加了学校的汉语比赛，虽然没有拿到第一名，但是他的进步得到了王老师的夸奖。他觉得只要坚持努力，就一定能把汉语说得像中国人一样流利。",
    "pinyin": "Wèile xuéhǎo Hànyǔ, 陈同学 měitiān wǎnshang dōu huā liǎng gè xiǎoshí liànxí tīnglì hé kǒuyǔ. Tā jīngcháng yòng shǒujī gēn Zhōngguó péngyou liáotiān, yùdào bú huì de shēngcí jiù mǎshàng chá zìdiǎn. Shàng gè xīngqī, tā cānjiāle xuéxiào de Hànyǔ bǐsài, suīrán méiyǒu nádào dì-yī míng, dànshì tā de jìnbù dédàole Wáng lǎoshī de kuājiǎng. Tā juéde zhǐyào jiānchí nǔlì, jiù yídìng néng bǎ Hànyǔ shuō de xiàng Zhōngguórén yíyàng liúlì.",
    "translation": "Để học tốt tiếng Trung, 陈同学 tối nào cũng dành hai tiếng để luyện nghe và nói. Anh ấy thường dùng điện thoại nhắn tin trò chuyện với bạn Trung Quốc, gặp từ mới không biết là lập tức tra từ điển ngay. Tuần trước, anh ấy tham gia cuộc thi tiếng Trung của trường, tuy không giành được giải nhất nhưng tiến bộ của anh ấy đã được thầy Vương khen ngợi. Anh ấy tin rằng chỉ cần kiên trì nỗ lực thì nhất định sẽ nói tiếng Trung lưu loát như người bản xứ.",
    "questions": [
      {
        "id": 7101,
        "question": "陈同学每天晚上花多长时间练习汉语？ (Mỗi tối dành bao nhiêu thời gian?)",
        "options": [
          "A. 半个小时",
          "B. 一个小时",
          "C. 两个小时",
          "D. 三个小时"
        ],
        "correct": 2,
        "explanation": "Đáp án chính xác là C. 两个小时. Nội dung này được thể hiện trực tiếp trong bài đọc."
      },
      {
        "id": 7102,
        "question": "他遇到不会的生词时怎么办？ (Gặp từ mới không biết thì làm thế nào?)",
        "options": [
          "A. 问爸爸妈妈",
          "B. 马上查字典",
          "C. 不管它",
          "D. 不学了"
        ],
        "correct": 1,
        "explanation": "Đáp án chính xác là B. 马上查字典. Nội dung này được thể hiện trực tiếp trong bài đọc."
      },
      {
        "id": 7103,
        "question": "关于上个星期的比赛，哪项是正确的？ (Về cuộc thi tuần trước, điều nào đúng?)",
        "options": [
          "A. 他拿到了第一名",
          "B. 他没有参加",
          "C. 他的进步得到了老师的夸奖",
          "D. 老师很不高兴"
        ],
        "correct": 2,
        "explanation": "Đáp án chính xác là C. 他的进步得到了老师的夸奖. Nội dung này được thể hiện trực tiếp trong bài đọc."
      }
    ]
  },
  {
    "id": 72,
    "level": "HSK 3",
    "title": "Bí quyết học tiếng Trung của 安娜",
    "text": "为了学好汉语，安娜每天晚上都花两个小时练习听力和口语。他经常用手机跟中国朋友聊天，遇到不会的生词就马上查字典。上个星期，他参加了学校的汉语比赛，虽然没有拿到第一名，但是他的进步得到了王老师的夸奖。他觉得只要坚持努力，就一定能把汉语说得像中国人一样流利。",
    "pinyin": "Wèile xuéhǎo Hànyǔ, 安娜 měitiān wǎnshang dōu huā liǎng gè xiǎoshí liànxí tīnglì hé kǒuyǔ. Tā jīngcháng yòng shǒujī gēn Zhōngguó péngyou liáotiān, yùdào bú huì de shēngcí jiù mǎshàng chá zìdiǎn. Shàng gè xīngqī, tā cānjiāle xuéxiào de Hànyǔ bǐsài, suīrán méiyǒu nádào dì-yī míng, dànshì tā de jìnbù dédàole Wáng lǎoshī de kuājiǎng. Tā juéde zhǐyào jiānchí nǔlì, jiù yídìng néng bǎ Hànyǔ shuō de xiàng Zhōngguórén yíyàng liúlì.",
    "translation": "Để học tốt tiếng Trung, 安娜 tối nào cũng dành hai tiếng để luyện nghe và nói. Anh ấy thường dùng điện thoại nhắn tin trò chuyện với bạn Trung Quốc, gặp từ mới không biết là lập tức tra từ điển ngay. Tuần trước, anh ấy tham gia cuộc thi tiếng Trung của trường, tuy không giành được giải nhất nhưng tiến bộ của anh ấy đã được thầy Vương khen ngợi. Anh ấy tin rằng chỉ cần kiên trì nỗ lực thì nhất định sẽ nói tiếng Trung lưu loát như người bản xứ.",
    "questions": [
      {
        "id": 7201,
        "question": "安娜每天晚上花多长时间练习汉语？ (Mỗi tối dành bao nhiêu thời gian?)",
        "options": [
          "A. 半个小时",
          "B. 一个小时",
          "C. 两个小时",
          "D. 三个小时"
        ],
        "correct": 2,
        "explanation": "Đáp án chính xác là C. 两个小时. Nội dung này được thể hiện trực tiếp trong bài đọc."
      },
      {
        "id": 7202,
        "question": "他遇到不会的生词时怎么办？ (Gặp từ mới không biết thì làm thế nào?)",
        "options": [
          "A. 问爸爸妈妈",
          "B. 马上查字典",
          "C. 不管它",
          "D. 不学了"
        ],
        "correct": 1,
        "explanation": "Đáp án chính xác là B. 马上查字典. Nội dung này được thể hiện trực tiếp trong bài đọc."
      },
      {
        "id": 7203,
        "question": "关于上个星期的比赛，哪项是正确的？ (Về cuộc thi tuần trước, điều nào đúng?)",
        "options": [
          "A. 他拿到了第一名",
          "B. 他没有参加",
          "C. 他的进步得到了老师的夸奖",
          "D. 老师很不高兴"
        ],
        "correct": 2,
        "explanation": "Đáp án chính xác là C. 他的进步得到了老师的夸奖. Nội dung này được thể hiện trực tiếp trong bài đọc."
      }
    ]
  },
  {
    "id": 73,
    "level": "HSK 3",
    "title": "Bí quyết học tiếng Trung của 大卫",
    "text": "为了学好汉语，大卫每天晚上都花两个小时练习听力和口语。他经常用手机跟中国朋友聊天，遇到不会的生词就马上查字典。上个星期，他参加了学校的汉语比赛，虽然没有拿到第一名，但是他的进步得到了王老师的夸奖。他觉得只要坚持努力，就一定能把汉语说得像中国人一样流利。",
    "pinyin": "Wèile xuéhǎo Hànyǔ, 大卫 měitiān wǎnshang dōu huā liǎng gè xiǎoshí liànxí tīnglì hé kǒuyǔ. Tā jīngcháng yòng shǒujī gēn Zhōngguó péngyou liáotiān, yùdào bú huì de shēngcí jiù mǎshàng chá zìdiǎn. Shàng gè xīngqī, tā cānjiāle xuéxiào de Hànyǔ bǐsài, suīrán méiyǒu nádào dì-yī míng, dànshì tā de jìnbù dédàole Wáng lǎoshī de kuājiǎng. Tā juéde zhǐyào jiānchí nǔlì, jiù yídìng néng bǎ Hànyǔ shuō de xiàng Zhōngguórén yíyàng liúlì.",
    "translation": "Để học tốt tiếng Trung, 大卫 tối nào cũng dành hai tiếng để luyện nghe và nói. Anh ấy thường dùng điện thoại nhắn tin trò chuyện với bạn Trung Quốc, gặp từ mới không biết là lập tức tra từ điển ngay. Tuần trước, anh ấy tham gia cuộc thi tiếng Trung của trường, tuy không giành được giải nhất nhưng tiến bộ của anh ấy đã được thầy Vương khen ngợi. Anh ấy tin rằng chỉ cần kiên trì nỗ lực thì nhất định sẽ nói tiếng Trung lưu loát như người bản xứ.",
    "questions": [
      {
        "id": 7301,
        "question": "大卫每天晚上花多长时间练习汉语？ (Mỗi tối dành bao nhiêu thời gian?)",
        "options": [
          "A. 半个小时",
          "B. 一个小时",
          "C. 两个小时",
          "D. 三个小时"
        ],
        "correct": 2,
        "explanation": "Đáp án chính xác là C. 两个小时. Nội dung này được thể hiện trực tiếp trong bài đọc."
      },
      {
        "id": 7302,
        "question": "他遇到不会的生词时怎么办？ (Gặp từ mới không biết thì làm thế nào?)",
        "options": [
          "A. 问爸爸妈妈",
          "B. 马上查字典",
          "C. 不管它",
          "D. 不学了"
        ],
        "correct": 1,
        "explanation": "Đáp án chính xác là B. 马上查字典. Nội dung này được thể hiện trực tiếp trong bài đọc."
      },
      {
        "id": 7303,
        "question": "关于上个星期的比赛，哪项是正确的？ (Về cuộc thi tuần trước, điều nào đúng?)",
        "options": [
          "A. 他拿到了第一名",
          "B. 他没有参加",
          "C. 他的进步得到了老师的夸奖",
          "D. 老师很不高兴"
        ],
        "correct": 2,
        "explanation": "Đáp án chính xác là C. 他的进步得到了老师的夸奖. Nội dung này được thể hiện trực tiếp trong bài đọc."
      }
    ]
  },
  {
    "id": 74,
    "level": "HSK 3",
    "title": "Bí quyết học tiếng Trung của 玛丽",
    "text": "为了学好汉语，玛丽每天晚上都花两个小时练习听力和口语。他经常用手机跟中国朋友聊天，遇到不会的生词就马上查字典。上个星期，他参加了学校的汉语比赛，虽然没有拿到第一名，但是他的进步得到了王老师的夸奖。他觉得只要坚持努力，就一定能把汉语说得像中国人一样流利。",
    "pinyin": "Wèile xuéhǎo Hànyǔ, 玛丽 měitiān wǎnshang dōu huā liǎng gè xiǎoshí liànxí tīnglì hé kǒuyǔ. Tā jīngcháng yòng shǒujī gēn Zhōngguó péngyou liáotiān, yùdào bú huì de shēngcí jiù mǎshàng chá zìdiǎn. Shàng gè xīngqī, tā cānjiāle xuéxiào de Hànyǔ bǐsài, suīrán méiyǒu nádào dì-yī míng, dànshì tā de jìnbù dédàole Wáng lǎoshī de kuājiǎng. Tā juéde zhǐyào jiānchí nǔlì, jiù yídìng néng bǎ Hànyǔ shuō de xiàng Zhōngguórén yíyàng liúlì.",
    "translation": "Để học tốt tiếng Trung, 玛丽 tối nào cũng dành hai tiếng để luyện nghe và nói. Anh ấy thường dùng điện thoại nhắn tin trò chuyện với bạn Trung Quốc, gặp từ mới không biết là lập tức tra từ điển ngay. Tuần trước, anh ấy tham gia cuộc thi tiếng Trung của trường, tuy không giành được giải nhất nhưng tiến bộ của anh ấy đã được thầy Vương khen ngợi. Anh ấy tin rằng chỉ cần kiên trì nỗ lực thì nhất định sẽ nói tiếng Trung lưu loát như người bản xứ.",
    "questions": [
      {
        "id": 7401,
        "question": "玛丽每天晚上花多长时间练习汉语？ (Mỗi tối dành bao nhiêu thời gian?)",
        "options": [
          "A. 半个小时",
          "B. 一个小时",
          "C. 两个小时",
          "D. 三个小时"
        ],
        "correct": 2,
        "explanation": "Đáp án chính xác là C. 两个小时. Nội dung này được thể hiện trực tiếp trong bài đọc."
      },
      {
        "id": 7402,
        "question": "他遇到不会的生词时怎么办？ (Gặp từ mới không biết thì làm thế nào?)",
        "options": [
          "A. 问爸爸妈妈",
          "B. 马上查字典",
          "C. 不管它",
          "D. 不学了"
        ],
        "correct": 1,
        "explanation": "Đáp án chính xác là B. 马上查字典. Nội dung này được thể hiện trực tiếp trong bài đọc."
      },
      {
        "id": 7403,
        "question": "关于上个星期的比赛，哪项是正确的？ (Về cuộc thi tuần trước, điều nào đúng?)",
        "options": [
          "A. 他拿到了第一名",
          "B. 他没有参加",
          "C. 他的进步得到了老师的夸奖",
          "D. 老师很不高兴"
        ],
        "correct": 2,
        "explanation": "Đáp án chính xác là C. 他的进步得到了老师的夸奖. Nội dung này được thể hiện trực tiếp trong bài đọc."
      }
    ]
  },
  {
    "id": 75,
    "level": "HSK 3",
    "title": "Bí quyết học tiếng Trung của 林华",
    "text": "为了学好汉语，林华每天晚上都花两个小时练习听力和口语。他经常用手机跟中国朋友聊天，遇到不会的生词就马上查字典。上个星期，他参加了学校的汉语比赛，虽然没有拿到第一名，但是他的进步得到了王老师的夸奖。他觉得只要坚持努力，就一定能把汉语说得像中国人一样流利。",
    "pinyin": "Wèile xuéhǎo Hànyǔ, 林华 měitiān wǎnshang dōu huā liǎng gè xiǎoshí liànxí tīnglì hé kǒuyǔ. Tā jīngcháng yòng shǒujī gēn Zhōngguó péngyou liáotiān, yùdào bú huì de shēngcí jiù mǎshàng chá zìdiǎn. Shàng gè xīngqī, tā cānjiāle xuéxiào de Hànyǔ bǐsài, suīrán méiyǒu nádào dì-yī míng, dànshì tā de jìnbù dédàole Wáng lǎoshī de kuājiǎng. Tā juéde zhǐyào jiānchí nǔlì, jiù yídìng néng bǎ Hànyǔ shuō de xiàng Zhōngguórén yíyàng liúlì.",
    "translation": "Để học tốt tiếng Trung, 林华 tối nào cũng dành hai tiếng để luyện nghe và nói. Anh ấy thường dùng điện thoại nhắn tin trò chuyện với bạn Trung Quốc, gặp từ mới không biết là lập tức tra từ điển ngay. Tuần trước, anh ấy tham gia cuộc thi tiếng Trung của trường, tuy không giành được giải nhất nhưng tiến bộ của anh ấy đã được thầy Vương khen ngợi. Anh ấy tin rằng chỉ cần kiên trì nỗ lực thì nhất định sẽ nói tiếng Trung lưu loát như người bản xứ.",
    "questions": [
      {
        "id": 7501,
        "question": "林华每天晚上花多长时间练习汉语？ (Mỗi tối dành bao nhiêu thời gian?)",
        "options": [
          "A. 半个小时",
          "B. 一个小时",
          "C. 两个小时",
          "D. 三个小时"
        ],
        "correct": 2,
        "explanation": "Đáp án chính xác là C. 两个小时. Nội dung này được thể hiện trực tiếp trong bài đọc."
      },
      {
        "id": 7502,
        "question": "他遇到不会的生词时怎么办？ (Gặp từ mới không biết thì làm thế nào?)",
        "options": [
          "A. 问爸爸妈妈",
          "B. 马上查字典",
          "C. 不管它",
          "D. 不学了"
        ],
        "correct": 1,
        "explanation": "Đáp án chính xác là B. 马上查字典. Nội dung này được thể hiện trực tiếp trong bài đọc."
      },
      {
        "id": 7503,
        "question": "关于上个星期的比赛，哪项是正确的？ (Về cuộc thi tuần trước, điều nào đúng?)",
        "options": [
          "A. 他拿到了第一名",
          "B. 他没有参加",
          "C. 他的进步得到了老师的夸奖",
          "D. 老师很不高兴"
        ],
        "correct": 2,
        "explanation": "Đáp án chính xác là C. 他的进步得到了老师的夸奖. Nội dung này được thể hiện trực tiếp trong bài đọc."
      }
    ]
  },
  {
    "id": 76,
    "level": "HSK 4",
    "title": "Bí quyết cân bằng cuộc sống hiện đại của 李华",
    "text": "在现代社会中，很多人都面临着巨大的工作和生活压力。李华认为，理性的理财方式和良好的时间管理是减轻压力的重要途径。首先，在理财方面，我们应当坚持‘分散风险’的原则，切忌盲目消费和跟风投资，选择适合自己的稳健型产品才是上策。其次，面对职场中的拖延症，制定切实可行的每日计划并严格执行，能够显著提高工作效率。只有把生活和工作理顺了，内心的幸福感才会油然而生。",
    "pinyin": "Zài xiàndài shèhuì zhōng, hěnduō rén dōu miànlínzhe jùdà de gōngzuò hé shēnghuó yālì. 李华 rènwéi, lǐxìng de lǐcái fāngshì hé liánghǎo de shíjiān guǎnlǐ shì jiǎnqīng yālì de zhòngyào tùjìng. Shǒuxiān, zài lǐcái fāngmiàn, wǒmen yīngdāng jiānchí ‘fēnsàn fēngxiǎn’ de yuánzé, qièjì mángmù xiāofèi hé gēnfēng tóuzī, xuǎnzé shìhé zìjǐ de wěnjiàn xíng chǎnpǐn cái shì shàngcè. Qícì, miànduì zhíchǎng zhōng de tuōyánzhèng, zhìdìng qièshí kěxíng de měirì jìhuà bìng yángé zhíxíng, nénggòu xiǎnzhù tígāo gōngzuò xiàolǜ. Zhǐyǒu bǎ shēnghuó hé gōngzuò lǐshùn le, nèixīn de xìngfúgǎn cái huì yóurán'érshēng.",
    "translation": "Trong xã hội hiện đại, rất nhiều người đều phải đối mặt với áp lực công việc và cuộc sống khổng lồ. 李华 cho rằng, phương thức quản lý tài chính lý tính và quản lý thời gian tốt là con đường quan trọng để giảm bớt áp lực. Trước hết, về mặt quản lý tài chính, chúng ta nên kiên trì nguyên tắc 'phân tán rủi ro', tránh tiêu dùng mù quáng và đầu tư chạy theo phong trào, lựa chọn sản phẩm vững chắc phù hợp bản thân mới là thượng sách. Thứ hai, đối mặt với chứng trì hoãn nơi công sở, lập kế hoạch khả thi mỗi ngày và nghiêm túc chấp hành có thể nâng cao rõ rệt hiệu suất công việc. Chỉ có sắp xếp cuộc sống và công việc thuận lợi, cảm giác hạnh phúc trong lòng mới tự nhiên sinh ra.",
    "questions": [
      {
        "id": 7601,
        "question": "作者认为减轻压力的重要途径是什么？ (Tác giả cho rằng cách giảm áp lực quan trọng là gì?)",
        "options": [
          "A. 换一份轻松的工作",
          "B. 理性的理财方式和良好的时间管理",
          "C. 经常去国外旅游",
          "D. 不断买昂贵的名牌产品"
        ],
        "correct": 1,
        "explanation": "Đáp án chính xác là B. 理性的理财方式和良好的时间管理. Nội dung này được thể hiện trực tiếp trong bài đọc."
      },
      {
        "id": 7602,
        "question": "在理财方面，作者提倡什么原则？ (Về tài chính, tác giả đề xướng nguyên tắc gì?)",
        "options": [
          "A. 盲目消费",
          "B. 把所有钱存进银行",
          "C. 分散风险",
          "D. 高风险跟风投资"
        ],
        "correct": 2,
        "explanation": "Đáp án chính xác là C. 分散风险. Nội dung này được thể hiện trực tiếp trong bài đọc."
      },
      {
        "id": 7603,
        "question": "怎么克服职场中的拖延症？ (Làm sao khắc phục chứng trì hoãn?)",
        "options": [
          "A. 顺其自然",
          "B. 辞职不干",
          "C. 制定切实可行的每日计划并严格执行",
          "D. 延长工作时间"
        ],
        "correct": 2,
        "explanation": "Đáp án chính xác là C. 制定切实可行的每日计划并严格执行. Nội dung này được thể hiện trực tiếp trong bài đọc."
      }
    ]
  },
  {
    "id": 77,
    "level": "HSK 4",
    "title": "Bí quyết cân bằng cuộc sống hiện đại của 张明",
    "text": "在现代社会中，很多人都面临着巨大的工作和生活压力。张明认为，理性的理财方式和良好的时间管理是减轻压力的重要途径。首先，在理财方面，我们应当坚持‘分散风险’的原则，切忌盲目消费和跟风投资，选择适合自己的稳健型产品才是上策。其次，面对职场中的拖延症，制定切实可行的每日计划并严格执行，能够显著提高工作效率。只有把生活和工作理顺了，内心的幸福感才会油然而生。",
    "pinyin": "Zài xiàndài shèhuì zhōng, hěnduō rén dōu miànlínzhe jùdà de gōngzuò hé shēnghuó yālì. 张明 rènwéi, lǐxìng de lǐcái fāngshì hé liánghǎo de shíjiān guǎnlǐ shì jiǎnqīng yālì de zhòngyào tùjìng. Shǒuxiān, zài lǐcái fāngmiàn, wǒmen yīngdāng jiānchí ‘fēnsàn fēngxiǎn’ de yuánzé, qièjì mángmù xiāofèi hé gēnfēng tóuzī, xuǎnzé shìhé zìjǐ de wěnjiàn xíng chǎnpǐn cái shì shàngcè. Qícì, miànduì zhíchǎng zhōng de tuōyánzhèng, zhìdìng qièshí kěxíng de měirì jìhuà bìng yángé zhíxíng, nénggòu xiǎnzhù tígāo gōngzuò xiàolǜ. Zhǐyǒu bǎ shēnghuó hé gōngzuò lǐshùn le, nèixīn de xìngfúgǎn cái huì yóurán'érshēng.",
    "translation": "Trong xã hội hiện đại, rất nhiều người đều phải đối mặt với áp lực công việc và cuộc sống khổng lồ. 张明 cho rằng, phương thức quản lý tài chính lý tính và quản lý thời gian tốt là con đường quan trọng để giảm bớt áp lực. Trước hết, về mặt quản lý tài chính, chúng ta nên kiên trì nguyên tắc 'phân tán rủi ro', tránh tiêu dùng mù quáng và đầu tư chạy theo phong trào, lựa chọn sản phẩm vững chắc phù hợp bản thân mới là thượng sách. Thứ hai, đối mặt với chứng trì hoãn nơi công sở, lập kế hoạch khả thi mỗi ngày và nghiêm túc chấp hành có thể nâng cao rõ rệt hiệu suất công việc. Chỉ có sắp xếp cuộc sống và công việc thuận lợi, cảm giác hạnh phúc trong lòng mới tự nhiên sinh ra.",
    "questions": [
      {
        "id": 7701,
        "question": "作者认为减轻压力的重要途径是什么？ (Tác giả cho rằng cách giảm áp lực quan trọng là gì?)",
        "options": [
          "A. 换一份轻松的工作",
          "B. 理性的理财方式和良好的时间管理",
          "C. 经常去国外旅游",
          "D. 不断买昂贵的名牌产品"
        ],
        "correct": 1,
        "explanation": "Đáp án chính xác là B. 理性的理财方式和良好的时间管理. Nội dung này được thể hiện trực tiếp trong bài đọc."
      },
      {
        "id": 7702,
        "question": "在理财方面，作者提倡什么原则？ (Về tài chính, tác giả đề xướng nguyên tắc gì?)",
        "options": [
          "A. 盲目消费",
          "B. 把所有钱存进银行",
          "C. 分散风险",
          "D. 高风险跟风投资"
        ],
        "correct": 2,
        "explanation": "Đáp án chính xác là C. 分散风险. Nội dung này được thể hiện trực tiếp trong bài đọc."
      },
      {
        "id": 7703,
        "question": "怎么克服职场中的拖延症？ (Làm sao khắc phục chứng trì hoãn?)",
        "options": [
          "A. 顺其自然",
          "B. 辞职不干",
          "C. 制定切实可行的每日计划并严格执行",
          "D. 延长工作时间"
        ],
        "correct": 2,
        "explanation": "Đáp án chính xác là C. 制定切实可行的每日计划并严格执行. Nội dung này được thể hiện trực tiếp trong bài đọc."
      }
    ]
  },
  {
    "id": 78,
    "level": "HSK 4",
    "title": "Bí quyết cân bằng cuộc sống hiện đại của 小猫",
    "text": "在现代社会中，很多人都面临着巨大的工作和生活压力。小猫认为，理性的理财方式和良好的时间管理是减轻压力的重要途径。首先，在理财方面，我们应当坚持‘分散风险’的原则，切忌盲目消费和跟风投资，选择适合自己的稳健型产品才是上策。其次，面对职场中的拖延症，制定切实可行的每日计划并严格执行，能够显著提高工作效率。只有把生活和工作理顺了，内心的幸福感才会油然而生。",
    "pinyin": "Zài xiàndài shèhuì zhōng, hěnduō rén dōu miànlínzhe jùdà de gōngzuò hé shēnghuó yālì. 小猫 rènwéi, lǐxìng de lǐcái fāngshì hé liánghǎo de shíjiān guǎnlǐ shì jiǎnqīng yālì de zhòngyào tùjìng. Shǒuxiān, zài lǐcái fāngmiàn, wǒmen yīngdāng jiānchí ‘fēnsàn fēngxiǎn’ de yuánzé, qièjì mángmù xiāofèi hé gēnfēng tóuzī, xuǎnzé shìhé zìjǐ de wěnjiàn xíng chǎnpǐn cái shì shàngcè. Qícì, miànduì zhíchǎng zhōng de tuōyánzhèng, zhìdìng qièshí kěxíng de měirì jìhuà bìng yángé zhíxíng, nénggòu xiǎnzhù tígāo gōngzuò xiàolǜ. Zhǐyǒu bǎ shēnghuó hé gōngzuò lǐshùn le, nèixīn de xìngfúgǎn cái huì yóurán'érshēng.",
    "translation": "Trong xã hội hiện đại, rất nhiều người đều phải đối mặt với áp lực công việc và cuộc sống khổng lồ. 小猫 cho rằng, phương thức quản lý tài chính lý tính và quản lý thời gian tốt là con đường quan trọng để giảm bớt áp lực. Trước hết, về mặt quản lý tài chính, chúng ta nên kiên trì nguyên tắc 'phân tán rủi ro', tránh tiêu dùng mù quáng và đầu tư chạy theo phong trào, lựa chọn sản phẩm vững chắc phù hợp bản thân mới là thượng sách. Thứ hai, đối mặt với chứng trì hoãn nơi công sở, lập kế hoạch khả thi mỗi ngày và nghiêm túc chấp hành có thể nâng cao rõ rệt hiệu suất công việc. Chỉ có sắp xếp cuộc sống và công việc thuận lợi, cảm giác hạnh phúc trong lòng mới tự nhiên sinh ra.",
    "questions": [
      {
        "id": 7801,
        "question": "作者认为减轻压力的重要途径是什么？ (Tác giả cho rằng cách giảm áp lực quan trọng là gì?)",
        "options": [
          "A. 换一份轻松的工作",
          "B. 理性的理财方式和良好的时间管理",
          "C. 经常去国外旅游",
          "D. 不断买昂贵的名牌产品"
        ],
        "correct": 1,
        "explanation": "Đáp án chính xác là B. 理性的理财方式和良好的时间管理. Nội dung này được thể hiện trực tiếp trong bài đọc."
      },
      {
        "id": 7802,
        "question": "在理财方面，作者提倡什么原则？ (Về tài chính, tác giả đề xướng nguyên tắc gì?)",
        "options": [
          "A. 盲目消费",
          "B. 把所有钱存进银行",
          "C. 分散风险",
          "D. 高风险跟风投资"
        ],
        "correct": 2,
        "explanation": "Đáp án chính xác là C. 分散风险. Nội dung này được thể hiện trực tiếp trong bài đọc."
      },
      {
        "id": 7803,
        "question": "怎么克服职场中的拖延症？ (Làm sao khắc phục chứng trì hoãn?)",
        "options": [
          "A. 顺其自然",
          "B. 辞职不干",
          "C. 制定切实可行的每日计划并严格执行",
          "D. 延长工作时间"
        ],
        "correct": 2,
        "explanation": "Đáp án chính xác là C. 制定切实可行的每日计划并严格执行. Nội dung này được thể hiện trực tiếp trong bài đọc."
      }
    ]
  },
  {
    "id": 79,
    "level": "HSK 4",
    "title": "Bí quyết cân bằng cuộc sống hiện đại của 王老师",
    "text": "在现代社会中，很多人都面临着巨大的工作和生活压力。王老师认为，理性的理财方式和良好的时间管理是减轻压力的重要途径。首先，在理财方面，我们应当坚持‘分散风险’的原则，切忌盲目消费和跟风投资，选择适合自己的稳健型产品才是上策。其次，面对职场中的拖延症，制定切实可行的每日计划并严格执行，能够显著提高工作效率。只有把生活和工作理顺了，内心的幸福感才会油然而生。",
    "pinyin": "Zài xiàndài shèhuì zhōng, hěnduō rén dōu miànlínzhe jùdà de gōngzuò hé shēnghuó yālì. 王老师 rènwéi, lǐxìng de lǐcái fāngshì hé liánghǎo de shíjiān guǎnlǐ shì jiǎnqīng yālì de zhòngyào tùjìng. Shǒuxiān, zài lǐcái fāngmiàn, wǒmen yīngdāng jiānchí ‘fēnsàn fēngxiǎn’ de yuánzé, qièjì mángmù xiāofèi hé gēnfēng tóuzī, xuǎnzé shìhé zìjǐ de wěnjiàn xíng chǎnpǐn cái shì shàngcè. Qícì, miànduì zhíchǎng zhōng de tuōyánzhèng, zhìdìng qièshí kěxíng de měirì jìhuà bìng yángé zhíxíng, nénggòu xiǎnzhù tígāo gōngzuò xiàolǜ. Zhǐyǒu bǎ shēnghuó hé gōngzuò lǐshùn le, nèixīn de xìngfúgǎn cái huì yóurán'érshēng.",
    "translation": "Trong xã hội hiện đại, rất nhiều người đều phải đối mặt với áp lực công việc và cuộc sống khổng lồ. 王老师 cho rằng, phương thức quản lý tài chính lý tính và quản lý thời gian tốt là con đường quan trọng để giảm bớt áp lực. Trước hết, về mặt quản lý tài chính, chúng ta nên kiên trì nguyên tắc 'phân tán rủi ro', tránh tiêu dùng mù quáng và đầu tư chạy theo phong trào, lựa chọn sản phẩm vững chắc phù hợp bản thân mới là thượng sách. Thứ hai, đối mặt với chứng trì hoãn nơi công sở, lập kế hoạch khả thi mỗi ngày và nghiêm túc chấp hành có thể nâng cao rõ rệt hiệu suất công việc. Chỉ có sắp xếp cuộc sống và công việc thuận lợi, cảm giác hạnh phúc trong lòng mới tự nhiên sinh ra.",
    "questions": [
      {
        "id": 7901,
        "question": "作者认为减轻压力的重要途径是什么？ (Tác giả cho rằng cách giảm áp lực quan trọng là gì?)",
        "options": [
          "A. 换一份轻松的工作",
          "B. 理性的理财方式和良好的时间管理",
          "C. 经常去国外旅游",
          "D. 不断买昂贵的名牌产品"
        ],
        "correct": 1,
        "explanation": "Đáp án chính xác là B. 理性的理财方式和良好的时间管理. Nội dung này được thể hiện trực tiếp trong bài đọc."
      },
      {
        "id": 7902,
        "question": "在理财方面，作者提倡什么原则？ (Về tài chính, tác giả đề xướng nguyên tắc gì?)",
        "options": [
          "A. 盲目消费",
          "B. 把所有钱存进银行",
          "C. 分散风险",
          "D. 高风险跟风投资"
        ],
        "correct": 2,
        "explanation": "Đáp án chính xác là C. 分散风险. Nội dung này được thể hiện trực tiếp trong bài đọc."
      },
      {
        "id": 7903,
        "question": "怎么克服职场中的拖延症？ (Làm sao khắc phục chứng trì hoãn?)",
        "options": [
          "A. 顺其自然",
          "B. 辞职不干",
          "C. 制定切实可行的每日计划并严格执行",
          "D. 延长工作时间"
        ],
        "correct": 2,
        "explanation": "Đáp án chính xác là C. 制定切实可行的每日计划并严格执行. Nội dung này được thể hiện trực tiếp trong bài đọc."
      }
    ]
  },
  {
    "id": 80,
    "level": "HSK 4",
    "title": "Bí quyết cân bằng cuộc sống hiện đại của 刘医生",
    "text": "在现代社会中，很多人都面临着巨大的工作和生活压力。刘医生认为，理性的理财方式和良好的时间管理是减轻压力的重要途径。首先，在理财方面，我们应当坚持‘分散风险’的原则，切忌盲目消费和跟风投资，选择适合自己的稳健型产品才是上策。其次，面对职场中的拖延症，制定切实可行的每日计划并严格执行，能够显著提高工作效率。只有把生活和工作理顺了，内心的幸福感才会油然而生。",
    "pinyin": "Zài xiàndài shèhuì zhōng, hěnduō rén dōu miànlínzhe jùdà de gōngzuò hé shēnghuó yālì. 刘医生 rènwéi, lǐxìng de lǐcái fāngshì hé liánghǎo de shíjiān guǎnlǐ shì jiǎnqīng yālì de zhòngyào tùjìng. Shǒuxiān, zài lǐcái fāngmiàn, wǒmen yīngdāng jiānchí ‘fēnsàn fēngxiǎn’ de yuánzé, qièjì mángmù xiāofèi hé gēnfēng tóuzī, xuǎnzé shìhé zìjǐ de wěnjiàn xíng chǎnpǐn cái shì shàngcè. Qícì, miànduì zhíchǎng zhōng de tuōyánzhèng, zhìdìng qièshí kěxíng de měirì jìhuà bìng yángé zhíxíng, nénggòu xiǎnzhù tígāo gōngzuò xiàolǜ. Zhǐyǒu bǎ shēnghuó hé gōngzuò lǐshùn le, nèixīn de xìngfúgǎn cái huì yóurán'érshēng.",
    "translation": "Trong xã hội hiện đại, rất nhiều người đều phải đối mặt với áp lực công việc và cuộc sống khổng lồ. 刘医生 cho rằng, phương thức quản lý tài chính lý tính và quản lý thời gian tốt là con đường quan trọng để giảm bớt áp lực. Trước hết, về mặt quản lý tài chính, chúng ta nên kiên trì nguyên tắc 'phân tán rủi ro', tránh tiêu dùng mù quáng và đầu tư chạy theo phong trào, lựa chọn sản phẩm vững chắc phù hợp bản thân mới là thượng sách. Thứ hai, đối mặt với chứng trì hoãn nơi công sở, lập kế hoạch khả thi mỗi ngày và nghiêm túc chấp hành có thể nâng cao rõ rệt hiệu suất công việc. Chỉ có sắp xếp cuộc sống và công việc thuận lợi, cảm giác hạnh phúc trong lòng mới tự nhiên sinh ra.",
    "questions": [
      {
        "id": 8001,
        "question": "作者认为减轻压力的重要途径是什么？ (Tác giả cho rằng cách giảm áp lực quan trọng là gì?)",
        "options": [
          "A. 换一份轻松的工作",
          "B. 理性的理财方式和良好的时间管理",
          "C. 经常去国外旅游",
          "D. 不断买昂贵的名牌产品"
        ],
        "correct": 1,
        "explanation": "Đáp án chính xác là B. 理性的理财方式和良好的时间管理. Nội dung này được thể hiện trực tiếp trong bài đọc."
      },
      {
        "id": 8002,
        "question": "在理财方面，作者提倡什么原则？ (Về tài chính, tác giả đề xướng nguyên tắc gì?)",
        "options": [
          "A. 盲目消费",
          "B. 把所有钱存进银行",
          "C. 分散风险",
          "D. 高风险跟风投资"
        ],
        "correct": 2,
        "explanation": "Đáp án chính xác là C. 分散风险. Nội dung này được thể hiện trực tiếp trong bài đọc."
      },
      {
        "id": 8003,
        "question": "怎么克服职场中的拖延症？ (Làm sao khắc phục chứng trì hoãn?)",
        "options": [
          "A. 顺其自然",
          "B. 辞职不干",
          "C. 制定切实可行的每日计划并严格执行",
          "D. 延长工作时间"
        ],
        "correct": 2,
        "explanation": "Đáp án chính xác là C. 制定切实可行的每日计划并严格执行. Nội dung này được thể hiện trực tiếp trong bài đọc."
      }
    ]
  },
  {
    "id": 81,
    "level": "HSK 4",
    "title": "Bí quyết cân bằng cuộc sống hiện đại của 陈同学",
    "text": "在现代社会中，很多人都面临着巨大的工作和生活压力。陈同学认为，理性的理财方式和良好的时间管理是减轻压力的重要途径。首先，在理财方面，我们应当坚持‘分散风险’的原则，切忌盲目消费和跟风投资，选择适合自己的稳健型产品才是上策。其次，面对职场中的拖延症，制定切实可行的每日计划并严格执行，能够显著提高工作效率。只有把生活和工作理顺了，内心的幸福感才会油然而生。",
    "pinyin": "Zài xiàndài shèhuì zhōng, hěnduō rén dōu miànlínzhe jùdà de gōngzuò hé shēnghuó yālì. 陈同学 rènwéi, lǐxìng de lǐcái fāngshì hé liánghǎo de shíjiān guǎnlǐ shì jiǎnqīng yālì de zhòngyào tùjìng. Shǒuxiān, zài lǐcái fāngmiàn, wǒmen yīngdāng jiānchí ‘fēnsàn fēngxiǎn’ de yuánzé, qièjì mángmù xiāofèi hé gēnfēng tóuzī, xuǎnzé shìhé zìjǐ de wěnjiàn xíng chǎnpǐn cái shì shàngcè. Qícì, miànduì zhíchǎng zhōng de tuōyánzhèng, zhìdìng qièshí kěxíng de měirì jìhuà bìng yángé zhíxíng, nénggòu xiǎnzhù tígāo gōngzuò xiàolǜ. Zhǐyǒu bǎ shēnghuó hé gōngzuò lǐshùn le, nèixīn de xìngfúgǎn cái huì yóurán'érshēng.",
    "translation": "Trong xã hội hiện đại, rất nhiều người đều phải đối mặt với áp lực công việc và cuộc sống khổng lồ. 陈同学 cho rằng, phương thức quản lý tài chính lý tính và quản lý thời gian tốt là con đường quan trọng để giảm bớt áp lực. Trước hết, về mặt quản lý tài chính, chúng ta nên kiên trì nguyên tắc 'phân tán rủi ro', tránh tiêu dùng mù quáng và đầu tư chạy theo phong trào, lựa chọn sản phẩm vững chắc phù hợp bản thân mới là thượng sách. Thứ hai, đối mặt với chứng trì hoãn nơi công sở, lập kế hoạch khả thi mỗi ngày và nghiêm túc chấp hành có thể nâng cao rõ rệt hiệu suất công việc. Chỉ có sắp xếp cuộc sống và công việc thuận lợi, cảm giác hạnh phúc trong lòng mới tự nhiên sinh ra.",
    "questions": [
      {
        "id": 8101,
        "question": "作者认为减轻压力的重要途径是什么？ (Tác giả cho rằng cách giảm áp lực quan trọng là gì?)",
        "options": [
          "A. 换一份轻松的工作",
          "B. 理性的理财方式和良好的时间管理",
          "C. 经常去国外旅游",
          "D. 不断买昂贵的名牌产品"
        ],
        "correct": 1,
        "explanation": "Đáp án chính xác là B. 理性的理财方式和良好的时间管理. Nội dung này được thể hiện trực tiếp trong bài đọc."
      },
      {
        "id": 8102,
        "question": "在理财方面，作者提倡什么原则？ (Về tài chính, tác giả đề xướng nguyên tắc gì?)",
        "options": [
          "A. 盲目消费",
          "B. 把所有钱存进银行",
          "C. 分散风险",
          "D. 高风险跟风投资"
        ],
        "correct": 2,
        "explanation": "Đáp án chính xác là C. 分散风险. Nội dung này được thể hiện trực tiếp trong bài đọc."
      },
      {
        "id": 8103,
        "question": "怎么克服职场中的拖延症？ (Làm sao khắc phục chứng trì hoãn?)",
        "options": [
          "A. 顺其自然",
          "B. 辞职不干",
          "C. 制定切实可行的每日计划并严格执行",
          "D. 延长工作时间"
        ],
        "correct": 2,
        "explanation": "Đáp án chính xác là C. 制定切实可行的每日计划并严格执行. Nội dung này được thể hiện trực tiếp trong bài đọc."
      }
    ]
  },
  {
    "id": 82,
    "level": "HSK 4",
    "title": "Bí quyết cân bằng cuộc sống hiện đại của 安娜",
    "text": "在现代社会中，很多人都面临着巨大的工作和生活压力。安娜认为，理性的理财方式和良好的时间管理是减轻压力的重要途径。首先，在理财方面，我们应当坚持‘分散风险’的原则，切忌盲目消费和跟风投资，选择适合自己的稳健型产品才是上策。其次，面对职场中的拖延症，制定切实可行的每日计划并严格执行，能够显著提高工作效率。只有把生活和工作理顺了，内心的幸福感才会油然而生。",
    "pinyin": "Zài xiàndài shèhuì zhōng, hěnduō rén dōu miànlínzhe jùdà de gōngzuò hé shēnghuó yālì. 安娜 rènwéi, lǐxìng de lǐcái fāngshì hé liánghǎo de shíjiān guǎnlǐ shì jiǎnqīng yālì de zhòngyào tùjìng. Shǒuxiān, zài lǐcái fāngmiàn, wǒmen yīngdāng jiānchí ‘fēnsàn fēngxiǎn’ de yuánzé, qièjì mángmù xiāofèi hé gēnfēng tóuzī, xuǎnzé shìhé zìjǐ de wěnjiàn xíng chǎnpǐn cái shì shàngcè. Qícì, miànduì zhíchǎng zhōng de tuōyánzhèng, zhìdìng qièshí kěxíng de měirì jìhuà bìng yángé zhíxíng, nénggòu xiǎnzhù tígāo gōngzuò xiàolǜ. Zhǐyǒu bǎ shēnghuó hé gōngzuò lǐshùn le, nèixīn de xìngfúgǎn cái huì yóurán'érshēng.",
    "translation": "Trong xã hội hiện đại, rất nhiều người đều phải đối mặt với áp lực công việc và cuộc sống khổng lồ. 安娜 cho rằng, phương thức quản lý tài chính lý tính và quản lý thời gian tốt là con đường quan trọng để giảm bớt áp lực. Trước hết, về mặt quản lý tài chính, chúng ta nên kiên trì nguyên tắc 'phân tán rủi ro', tránh tiêu dùng mù quáng và đầu tư chạy theo phong trào, lựa chọn sản phẩm vững chắc phù hợp bản thân mới là thượng sách. Thứ hai, đối mặt với chứng trì hoãn nơi công sở, lập kế hoạch khả thi mỗi ngày và nghiêm túc chấp hành có thể nâng cao rõ rệt hiệu suất công việc. Chỉ có sắp xếp cuộc sống và công việc thuận lợi, cảm giác hạnh phúc trong lòng mới tự nhiên sinh ra.",
    "questions": [
      {
        "id": 8201,
        "question": "作者认为减轻压力的重要途径是什么？ (Tác giả cho rằng cách giảm áp lực quan trọng là gì?)",
        "options": [
          "A. 换一份轻松的工作",
          "B. 理性的理财方式和良好的时间管理",
          "C. 经常去国外旅游",
          "D. 不断买昂贵的名牌产品"
        ],
        "correct": 1,
        "explanation": "Đáp án chính xác là B. 理性的理财方式和良好的时间管理. Nội dung này được thể hiện trực tiếp trong bài đọc."
      },
      {
        "id": 8202,
        "question": "在理财方面，作者提倡什么原则？ (Về tài chính, tác giả đề xướng nguyên tắc gì?)",
        "options": [
          "A. 盲目消费",
          "B. 把所有钱存进银行",
          "C. 分散风险",
          "D. 高风险跟风投资"
        ],
        "correct": 2,
        "explanation": "Đáp án chính xác là C. 分散风险. Nội dung này được thể hiện trực tiếp trong bài đọc."
      },
      {
        "id": 8203,
        "question": "怎么克服职场中的拖延症？ (Làm sao khắc phục chứng trì hoãn?)",
        "options": [
          "A. 顺其自然",
          "B. 辞职不干",
          "C. 制定切实可行的每日计划并严格执行",
          "D. 延长工作时间"
        ],
        "correct": 2,
        "explanation": "Đáp án chính xác là C. 制定切实可行的每日计划并严格执行. Nội dung này được thể hiện trực tiếp trong bài đọc."
      }
    ]
  },
  {
    "id": 83,
    "level": "HSK 4",
    "title": "Bí quyết cân bằng cuộc sống hiện đại của 大卫",
    "text": "在现代社会中，很多人都面临着巨大的工作和生活压力。大卫认为，理性的理财方式和良好的时间管理是减轻压力的重要途径。首先，在理财方面，我们应当坚持‘分散风险’的原则，切忌盲目消费和跟风投资，选择适合自己的稳健型产品才是上策。其次，面对职场中的拖延症，制定切实可行的每日计划并严格执行，能够显著提高工作效率。只有把生活和工作理顺了，内心的幸福感才会油然而生。",
    "pinyin": "Zài xiàndài shèhuì zhōng, hěnduō rén dōu miànlínzhe jùdà de gōngzuò hé shēnghuó yālì. 大卫 rènwéi, lǐxìng de lǐcái fāngshì hé liánghǎo de shíjiān guǎnlǐ shì jiǎnqīng yālì de zhòngyào tùjìng. Shǒuxiān, zài lǐcái fāngmiàn, wǒmen yīngdāng jiānchí ‘fēnsàn fēngxiǎn’ de yuánzé, qièjì mángmù xiāofèi hé gēnfēng tóuzī, xuǎnzé shìhé zìjǐ de wěnjiàn xíng chǎnpǐn cái shì shàngcè. Qícì, miànduì zhíchǎng zhōng de tuōyánzhèng, zhìdìng qièshí kěxíng de měirì jìhuà bìng yángé zhíxíng, nénggòu xiǎnzhù tígāo gōngzuò xiàolǜ. Zhǐyǒu bǎ shēnghuó hé gōngzuò lǐshùn le, nèixīn de xìngfúgǎn cái huì yóurán'érshēng.",
    "translation": "Trong xã hội hiện đại, rất nhiều người đều phải đối mặt với áp lực công việc và cuộc sống khổng lồ. 大卫 cho rằng, phương thức quản lý tài chính lý tính và quản lý thời gian tốt là con đường quan trọng để giảm bớt áp lực. Trước hết, về mặt quản lý tài chính, chúng ta nên kiên trì nguyên tắc 'phân tán rủi ro', tránh tiêu dùng mù quáng và đầu tư chạy theo phong trào, lựa chọn sản phẩm vững chắc phù hợp bản thân mới là thượng sách. Thứ hai, đối mặt với chứng trì hoãn nơi công sở, lập kế hoạch khả thi mỗi ngày và nghiêm túc chấp hành có thể nâng cao rõ rệt hiệu suất công việc. Chỉ có sắp xếp cuộc sống và công việc thuận lợi, cảm giác hạnh phúc trong lòng mới tự nhiên sinh ra.",
    "questions": [
      {
        "id": 8301,
        "question": "作者认为减轻压力的重要途径是什么？ (Tác giả cho rằng cách giảm áp lực quan trọng là gì?)",
        "options": [
          "A. 换一份轻松的工作",
          "B. 理性的理财方式和良好的时间管理",
          "C. 经常去国外旅游",
          "D. 不断买昂贵的名牌产品"
        ],
        "correct": 1,
        "explanation": "Đáp án chính xác là B. 理性的理财方式和良好的时间管理. Nội dung này được thể hiện trực tiếp trong bài đọc."
      },
      {
        "id": 8302,
        "question": "在理财方面，作者提倡什么原则？ (Về tài chính, tác giả đề xướng nguyên tắc gì?)",
        "options": [
          "A. 盲目消费",
          "B. 把所有钱存进银行",
          "C. 分散风险",
          "D. 高风险跟风投资"
        ],
        "correct": 2,
        "explanation": "Đáp án chính xác là C. 分散风险. Nội dung này được thể hiện trực tiếp trong bài đọc."
      },
      {
        "id": 8303,
        "question": "怎么克服职场中的拖延症？ (Làm sao khắc phục chứng trì hoãn?)",
        "options": [
          "A. 顺其自然",
          "B. 辞职不干",
          "C. 制定切实可行的每日计划并严格执行",
          "D. 延长工作时间"
        ],
        "correct": 2,
        "explanation": "Đáp án chính xác là C. 制定切实可行的每日计划并严格执行. Nội dung này được thể hiện trực tiếp trong bài đọc."
      }
    ]
  },
  {
    "id": 84,
    "level": "HSK 4",
    "title": "Bí quyết cân bằng cuộc sống hiện đại của 玛丽",
    "text": "在现代社会中，很多人都面临着巨大的工作和生活压力。玛丽认为，理性的理财方式和良好的时间管理是减轻压力的重要途径。首先，在理财方面，我们应当坚持‘分散风险’的原则，切忌盲目消费和跟风投资，选择适合自己的稳健型产品才是上策。其次，面对职场中的拖延症，制定切实可行的每日计划并严格执行，能够显著提高工作效率。只有把生活和工作理顺了，内心的幸福感才会油然而生。",
    "pinyin": "Zài xiàndài shèhuì zhōng, hěnduō rén dōu miànlínzhe jùdà de gōngzuò hé shēnghuó yālì. 玛丽 rènwéi, lǐxìng de lǐcái fāngshì hé liánghǎo de shíjiān guǎnlǐ shì jiǎnqīng yālì de zhòngyào tùjìng. Shǒuxiān, zài lǐcái fāngmiàn, wǒmen yīngdāng jiānchí ‘fēnsàn fēngxiǎn’ de yuánzé, qièjì mángmù xiāofèi hé gēnfēng tóuzī, xuǎnzé shìhé zìjǐ de wěnjiàn xíng chǎnpǐn cái shì shàngcè. Qícì, miànduì zhíchǎng zhōng de tuōyánzhèng, zhìdìng qièshí kěxíng de měirì jìhuà bìng yángé zhíxíng, nénggòu xiǎnzhù tígāo gōngzuò xiàolǜ. Zhǐyǒu bǎ shēnghuó hé gōngzuò lǐshùn le, nèixīn de xìngfúgǎn cái huì yóurán'érshēng.",
    "translation": "Trong xã hội hiện đại, rất nhiều người đều phải đối mặt với áp lực công việc và cuộc sống khổng lồ. 玛丽 cho rằng, phương thức quản lý tài chính lý tính và quản lý thời gian tốt là con đường quan trọng để giảm bớt áp lực. Trước hết, về mặt quản lý tài chính, chúng ta nên kiên trì nguyên tắc 'phân tán rủi ro', tránh tiêu dùng mù quáng và đầu tư chạy theo phong trào, lựa chọn sản phẩm vững chắc phù hợp bản thân mới là thượng sách. Thứ hai, đối mặt với chứng trì hoãn nơi công sở, lập kế hoạch khả thi mỗi ngày và nghiêm túc chấp hành có thể nâng cao rõ rệt hiệu suất công việc. Chỉ có sắp xếp cuộc sống và công việc thuận lợi, cảm giác hạnh phúc trong lòng mới tự nhiên sinh ra.",
    "questions": [
      {
        "id": 8401,
        "question": "作者认为减轻压力的重要途径是什么？ (Tác giả cho rằng cách giảm áp lực quan trọng là gì?)",
        "options": [
          "A. 换一份轻松的工作",
          "B. 理性的理财方式和良好的时间管理",
          "C. 经常去国外旅游",
          "D. 不断买昂贵的名牌产品"
        ],
        "correct": 1,
        "explanation": "Đáp án chính xác là B. 理性的理财方式和良好的时间管理. Nội dung này được thể hiện trực tiếp trong bài đọc."
      },
      {
        "id": 8402,
        "question": "在理财方面，作者提倡什么原则？ (Về tài chính, tác giả đề xướng nguyên tắc gì?)",
        "options": [
          "A. 盲目消费",
          "B. 把所有钱存进银行",
          "C. 分散风险",
          "D. 高风险跟风投资"
        ],
        "correct": 2,
        "explanation": "Đáp án chính xác là C. 分散风险. Nội dung này được thể hiện trực tiếp trong bài đọc."
      },
      {
        "id": 8403,
        "question": "怎么克服职场中的拖延症？ (Làm sao khắc phục chứng trì hoãn?)",
        "options": [
          "A. 顺其自然",
          "B. 辞职不干",
          "C. 制定切实可行的每日计划并严格执行",
          "D. 延长工作时间"
        ],
        "correct": 2,
        "explanation": "Đáp án chính xác là C. 制定切实可行的每日计划并严格执行. Nội dung này được thể hiện trực tiếp trong bài đọc."
      }
    ]
  },
  {
    "id": 85,
    "level": "HSK 4",
    "title": "Bí quyết cân bằng cuộc sống hiện đại của 林华",
    "text": "在现代社会中，很多人都面临着巨大的工作和生活压力。林华认为，理性的理财方式和良好的时间管理是减轻压力的重要途径。首先，在理财方面，我们应当坚持‘分散风险’的原则，切忌盲目消费和跟风投资，选择适合自己的稳健型产品才是上策。其次，面对职场中的拖延症，制定切实可行的每日计划并严格执行，能够显著提高工作效率。只有把生活和工作理顺了，内心的幸福感才会油然而生。",
    "pinyin": "Zài xiàndài shèhuì zhōng, hěnduō rén dōu miànlínzhe jùdà de gōngzuò hé shēnghuó yālì. 林华 rènwéi, lǐxìng de lǐcái fāngshì hé liánghǎo de shíjiān guǎnlǐ shì jiǎnqīng yālì de zhòngyào tùjìng. Shǒuxiān, zài lǐcái fāngmiàn, wǒmen yīngdāng jiānchí ‘fēnsàn fēngxiǎn’ de yuánzé, qièjì mángmù xiāofèi hé gēnfēng tóuzī, xuǎnzé shìhé zìjǐ de wěnjiàn xíng chǎnpǐn cái shì shàngcè. Qícì, miànduì zhíchǎng zhōng de tuōyánzhèng, zhìdìng qièshí kěxíng de měirì jìhuà bìng yángé zhíxíng, nénggòu xiǎnzhù tígāo gōngzuò xiàolǜ. Zhǐyǒu bǎ shēnghuó hé gōngzuò lǐshùn le, nèixīn de xìngfúgǎn cái huì yóurán'érshēng.",
    "translation": "Trong xã hội hiện đại, rất nhiều người đều phải đối mặt với áp lực công việc và cuộc sống khổng lồ. 林华 cho rằng, phương thức quản lý tài chính lý tính và quản lý thời gian tốt là con đường quan trọng để giảm bớt áp lực. Trước hết, về mặt quản lý tài chính, chúng ta nên kiên trì nguyên tắc 'phân tán rủi ro', tránh tiêu dùng mù quáng và đầu tư chạy theo phong trào, lựa chọn sản phẩm vững chắc phù hợp bản thân mới là thượng sách. Thứ hai, đối mặt với chứng trì hoãn nơi công sở, lập kế hoạch khả thi mỗi ngày và nghiêm túc chấp hành có thể nâng cao rõ rệt hiệu suất công việc. Chỉ có sắp xếp cuộc sống và công việc thuận lợi, cảm giác hạnh phúc trong lòng mới tự nhiên sinh ra.",
    "questions": [
      {
        "id": 8501,
        "question": "作者认为减轻压力的重要途径是什么？ (Tác giả cho rằng cách giảm áp lực quan trọng là gì?)",
        "options": [
          "A. 换一份轻松的工作",
          "B. 理性的理财方式和良好的时间管理",
          "C. 经常去国外旅游",
          "D. 不断买昂贵的名牌产品"
        ],
        "correct": 1,
        "explanation": "Đáp án chính xác là B. 理性的理财方式和良好的时间管理. Nội dung này được thể hiện trực tiếp trong bài đọc."
      },
      {
        "id": 8502,
        "question": "在理财方面，作者提倡什么原则？ (Về tài chính, tác giả đề xướng nguyên tắc gì?)",
        "options": [
          "A. 盲目消费",
          "B. 把所有钱存进银行",
          "C. 分散风险",
          "D. 高风险跟风投资"
        ],
        "correct": 2,
        "explanation": "Đáp án chính xác là C. 分散风险. Nội dung này được thể hiện trực tiếp trong bài đọc."
      },
      {
        "id": 8503,
        "question": "怎么克服职场中的拖延症？ (Làm sao khắc phục chứng trì hoãn?)",
        "options": [
          "A. 顺其自然",
          "B. 辞职不干",
          "C. 制定切实可行的每日计划并严格执行",
          "D. 延长工作时间"
        ],
        "correct": 2,
        "explanation": "Đáp án chính xác là C. 制定切实可行的每日计划并严格执行. Nội dung này được thể hiện trực tiếp trong bài đọc."
      }
    ]
  },
  {
    "id": 86,
    "level": "HSK 4",
    "title": "Bí quyết cân bằng cuộc sống hiện đại của 李华",
    "text": "在现代社会中，很多人都面临着巨大的工作和生活压力。李华认为，理性的理财方式和良好的时间管理是减轻压力的重要途径。首先，在理财方面，我们应当坚持‘分散风险’的原则，切忌盲目消费和跟风投资，选择适合自己的稳健型产品才是上策。其次，面对职场中的拖延症，制定切实可行的每日计划并严格执行，能够显著提高工作效率。只有把生活和工作理顺了，内心的幸福感才会油然而生。",
    "pinyin": "Zài xiàndài shèhuì zhōng, hěnduō rén dōu miànlínzhe jùdà de gōngzuò hé shēnghuó yālì. 李华 rènwéi, lǐxìng de lǐcái fāngshì hé liánghǎo de shíjiān guǎnlǐ shì jiǎnqīng yālì de zhòngyào tùjìng. Shǒuxiān, zài lǐcái fāngmiàn, wǒmen yīngdāng jiānchí ‘fēnsàn fēngxiǎn’ de yuánzé, qièjì mángmù xiāofèi hé gēnfēng tóuzī, xuǎnzé shìhé zìjǐ de wěnjiàn xíng chǎnpǐn cái shì shàngcè. Qícì, miànduì zhíchǎng zhōng de tuōyánzhèng, zhìdìng qièshí kěxíng de měirì jìhuà bìng yángé zhíxíng, nénggòu xiǎnzhù tígāo gōngzuò xiàolǜ. Zhǐyǒu bǎ shēnghuó hé gōngzuò lǐshùn le, nèixīn de xìngfúgǎn cái huì yóurán'érshēng.",
    "translation": "Trong xã hội hiện đại, rất nhiều người đều phải đối mặt với áp lực công việc và cuộc sống khổng lồ. 李华 cho rằng, phương thức quản lý tài chính lý tính và quản lý thời gian tốt là con đường quan trọng để giảm bớt áp lực. Trước hết, về mặt quản lý tài chính, chúng ta nên kiên trì nguyên tắc 'phân tán rủi ro', tránh tiêu dùng mù quáng và đầu tư chạy theo phong trào, lựa chọn sản phẩm vững chắc phù hợp bản thân mới là thượng sách. Thứ hai, đối mặt với chứng trì hoãn nơi công sở, lập kế hoạch khả thi mỗi ngày và nghiêm túc chấp hành có thể nâng cao rõ rệt hiệu suất công việc. Chỉ có sắp xếp cuộc sống và công việc thuận lợi, cảm giác hạnh phúc trong lòng mới tự nhiên sinh ra.",
    "questions": [
      {
        "id": 8601,
        "question": "作者认为减轻压力的重要途径是什么？ (Tác giả cho rằng cách giảm áp lực quan trọng là gì?)",
        "options": [
          "A. 换一份轻松的工作",
          "B. 理性的理财方式和良好的时间管理",
          "C. 经常去国外旅游",
          "D. 不断买昂贵的名牌产品"
        ],
        "correct": 1,
        "explanation": "Đáp án chính xác là B. 理性的理财方式和良好的时间管理. Nội dung này được thể hiện trực tiếp trong bài đọc."
      },
      {
        "id": 8602,
        "question": "在理财方面，作者提倡什么原则？ (Về tài chính, tác giả đề xướng nguyên tắc gì?)",
        "options": [
          "A. 盲目消费",
          "B. 把所有钱存进银行",
          "C. 分散风险",
          "D. 高风险跟风投资"
        ],
        "correct": 2,
        "explanation": "Đáp án chính xác là C. 分散风险. Nội dung này được thể hiện trực tiếp trong bài đọc."
      },
      {
        "id": 8603,
        "question": "怎么克服职场中的拖延症？ (Làm sao khắc phục chứng trì hoãn?)",
        "options": [
          "A. 顺其自然",
          "B. 辞职不干",
          "C. 制定切实可行的每日计划并严格执行",
          "D. 延长工作时间"
        ],
        "correct": 2,
        "explanation": "Đáp án chính xác là C. 制定切实可行的每日计划并严格执行. Nội dung này được thể hiện trực tiếp trong bài đọc."
      }
    ]
  },
  {
    "id": 87,
    "level": "HSK 4",
    "title": "Bí quyết cân bằng cuộc sống hiện đại của 张明",
    "text": "在现代社会中，很多人都面临着巨大的工作和生活压力。张明认为，理性的理财方式和良好的时间管理是减轻压力的重要途径。首先，在理财方面，我们应当坚持‘分散风险’的原则，切忌盲目消费和跟风投资，选择适合自己的稳健型产品才是上策。其次，面对职场中的拖延症，制定切实可行的每日计划并严格执行，能够显著提高工作效率。只有把生活和工作理顺了，内心的幸福感才会油然而生。",
    "pinyin": "Zài xiàndài shèhuì zhōng, hěnduō rén dōu miànlínzhe jùdà de gōngzuò hé shēnghuó yālì. 张明 rènwéi, lǐxìng de lǐcái fāngshì hé liánghǎo de shíjiān guǎnlǐ shì jiǎnqīng yālì de zhòngyào tùjìng. Shǒuxiān, zài lǐcái fāngmiàn, wǒmen yīngdāng jiānchí ‘fēnsàn fēngxiǎn’ de yuánzé, qièjì mángmù xiāofèi hé gēnfēng tóuzī, xuǎnzé shìhé zìjǐ de wěnjiàn xíng chǎnpǐn cái shì shàngcè. Qícì, miànduì zhíchǎng zhōng de tuōyánzhèng, zhìdìng qièshí kěxíng de měirì jìhuà bìng yángé zhíxíng, nénggòu xiǎnzhù tígāo gōngzuò xiàolǜ. Zhǐyǒu bǎ shēnghuó hé gōngzuò lǐshùn le, nèixīn de xìngfúgǎn cái huì yóurán'érshēng.",
    "translation": "Trong xã hội hiện đại, rất nhiều người đều phải đối mặt với áp lực công việc và cuộc sống khổng lồ. 张明 cho rằng, phương thức quản lý tài chính lý tính và quản lý thời gian tốt là con đường quan trọng để giảm bớt áp lực. Trước hết, về mặt quản lý tài chính, chúng ta nên kiên trì nguyên tắc 'phân tán rủi ro', tránh tiêu dùng mù quáng và đầu tư chạy theo phong trào, lựa chọn sản phẩm vững chắc phù hợp bản thân mới là thượng sách. Thứ hai, đối mặt với chứng trì hoãn nơi công sở, lập kế hoạch khả thi mỗi ngày và nghiêm túc chấp hành có thể nâng cao rõ rệt hiệu suất công việc. Chỉ có sắp xếp cuộc sống và công việc thuận lợi, cảm giác hạnh phúc trong lòng mới tự nhiên sinh ra.",
    "questions": [
      {
        "id": 8701,
        "question": "作者认为减轻压力的重要途径是什么？ (Tác giả cho rằng cách giảm áp lực quan trọng là gì?)",
        "options": [
          "A. 换一份轻松的工作",
          "B. 理性的理财方式和良好的时间管理",
          "C. 经常去国外旅游",
          "D. 不断买昂贵的名牌产品"
        ],
        "correct": 1,
        "explanation": "Đáp án chính xác là B. 理性的理财方式和良好的时间管理. Nội dung này được thể hiện trực tiếp trong bài đọc."
      },
      {
        "id": 8702,
        "question": "在理财方面，作者提倡什么原则？ (Về tài chính, tác giả đề xướng nguyên tắc gì?)",
        "options": [
          "A. 盲目消费",
          "B. 把所有钱存进银行",
          "C. 分散风险",
          "D. 高风险跟风投资"
        ],
        "correct": 2,
        "explanation": "Đáp án chính xác là C. 分散风险. Nội dung này được thể hiện trực tiếp trong bài đọc."
      },
      {
        "id": 8703,
        "question": "怎么克服职场中的拖延症？ (Làm sao khắc phục chứng trì hoãn?)",
        "options": [
          "A. 顺其自然",
          "B. 辞职不干",
          "C. 制定切实可行的每日计划并严格执行",
          "D. 延长工作时间"
        ],
        "correct": 2,
        "explanation": "Đáp án chính xác là C. 制定切实可行的每日计划并严格执行. Nội dung này được thể hiện trực tiếp trong bài đọc."
      }
    ]
  },
  {
    "id": 88,
    "level": "HSK 4",
    "title": "Bí quyết cân bằng cuộc sống hiện đại của 小猫",
    "text": "在现代社会中，很多人都面临着巨大的工作和生活压力。小猫认为，理性的理财方式和良好的时间管理是减轻压力的重要途径。首先，在理财方面，我们应当坚持‘分散风险’的原则，切忌盲目消费和跟风投资，选择适合自己的稳健型产品才是上策。其次，面对职场中的拖延症，制定切实可行的每日计划并严格执行，能够显著提高工作效率。只有把生活和工作理顺了，内心的幸福感才会油然而生。",
    "pinyin": "Zài xiàndài shèhuì zhōng, hěnduō rén dōu miànlínzhe jùdà de gōngzuò hé shēnghuó yālì. 小猫 rènwéi, lǐxìng de lǐcái fāngshì hé liánghǎo de shíjiān guǎnlǐ shì jiǎnqīng yālì de zhòngyào tùjìng. Shǒuxiān, zài lǐcái fāngmiàn, wǒmen yīngdāng jiānchí ‘fēnsàn fēngxiǎn’ de yuánzé, qièjì mángmù xiāofèi hé gēnfēng tóuzī, xuǎnzé shìhé zìjǐ de wěnjiàn xíng chǎnpǐn cái shì shàngcè. Qícì, miànduì zhíchǎng zhōng de tuōyánzhèng, zhìdìng qièshí kěxíng de měirì jìhuà bìng yángé zhíxíng, nénggòu xiǎnzhù tígāo gōngzuò xiàolǜ. Zhǐyǒu bǎ shēnghuó hé gōngzuò lǐshùn le, nèixīn de xìngfúgǎn cái huì yóurán'érshēng.",
    "translation": "Trong xã hội hiện đại, rất nhiều người đều phải đối mặt với áp lực công việc và cuộc sống khổng lồ. 小猫 cho rằng, phương thức quản lý tài chính lý tính và quản lý thời gian tốt là con đường quan trọng để giảm bớt áp lực. Trước hết, về mặt quản lý tài chính, chúng ta nên kiên trì nguyên tắc 'phân tán rủi ro', tránh tiêu dùng mù quáng và đầu tư chạy theo phong trào, lựa chọn sản phẩm vững chắc phù hợp bản thân mới là thượng sách. Thứ hai, đối mặt với chứng trì hoãn nơi công sở, lập kế hoạch khả thi mỗi ngày và nghiêm túc chấp hành có thể nâng cao rõ rệt hiệu suất công việc. Chỉ có sắp xếp cuộc sống và công việc thuận lợi, cảm giác hạnh phúc trong lòng mới tự nhiên sinh ra.",
    "questions": [
      {
        "id": 8801,
        "question": "作者认为减轻压力的重要途径是什么？ (Tác giả cho rằng cách giảm áp lực quan trọng là gì?)",
        "options": [
          "A. 换一份轻松的工作",
          "B. 理性的理财方式和良好的时间管理",
          "C. 经常去国外旅游",
          "D. 不断买昂贵的名牌产品"
        ],
        "correct": 1,
        "explanation": "Đáp án chính xác là B. 理性的理财方式和良好的时间管理. Nội dung này được thể hiện trực tiếp trong bài đọc."
      },
      {
        "id": 8802,
        "question": "在理财方面，作者提倡什么原则？ (Về tài chính, tác giả đề xướng nguyên tắc gì?)",
        "options": [
          "A. 盲目消费",
          "B. 把所有钱存进银行",
          "C. 分散风险",
          "D. 高风险跟风投资"
        ],
        "correct": 2,
        "explanation": "Đáp án chính xác là C. 分散风险. Nội dung này được thể hiện trực tiếp trong bài đọc."
      },
      {
        "id": 8803,
        "question": "怎么克服职场中的拖延症？ (Làm sao khắc phục chứng trì hoãn?)",
        "options": [
          "A. 顺其自然",
          "B. 辞职不干",
          "C. 制定切实可行的每日计划并严格执行",
          "D. 延长工作时间"
        ],
        "correct": 2,
        "explanation": "Đáp án chính xác là C. 制定切实可行的每日计划并严格执行. Nội dung này được thể hiện trực tiếp trong bài đọc."
      }
    ]
  },
  {
    "id": 89,
    "level": "HSK 5",
    "title": "Chiến lược thích ứng của doanh nghiệp trong kỷ nguyên truyền thông mới",
    "text": "随着新媒体的迅猛崛起，传统的企业营销格局正面临着前所未有的颠覆性变革。优秀的商业决策者应当敏锐地捕获下沉市场的核心需求，实行差异化的品牌战略。一味地下达行政命令并不能激发员工的内在驱动力，相反，构建充满信任与包容的文化氛围，给予下属合理的创造力发挥空间，才是企业在激烈的全球竞争中保持可持续发展的必然选择。终身学习已是每个职场人的核心生存技能。",
    "pinyin": "Suízhe xīnméitǐ de xùnměng juéqǐ, chuántǒng de qǐyè yíngxiāo géjú zhèng miànlínzhe qiánsuǒwèiyǒu de diānfùxìng biàngé. Yōuxiù de shāngyè juécèzhě yīngdāng mǐnruì de bǔhuò xiàchén shìchǎng de héxīn xūqiú, shíxíng chāyìhuà de pǐnpái zhànlù. Yíwèi de xiàdá xíngzhèng mìnglìng bìng bùnéng jīfā yuángōng de nèizài qūdònglì, xiāngfǎn, gòujiàn chōngmǎn xìnrùn yǔ bāoróng de wénhuà fēnwéi, jǐyǔ xiàshǔ hélǐ de chuàngzàolì fāhuī kōngjiān, cái shì qǐyè zài jīliè de quánqiú jìngzhēng zhōng bǎochí kěchíxù fāzhǎn de bìrán xuǎnzé. Zhōngshēn xuéxí yǐ shì měi gè zhíchǎng rén de héxīn shēngcún jìnéng.",
    "translation": "Cùng với sự trỗi dậy mạnh mẽ của truyền thông mới, cục diện tiếp thị doanh nghiệp truyền thống đang đối mặt với cuộc cải cách lật đổ chưa từng có. Nhà quyết sách thương mại xuất sắc nên nhạy bén nắm bắt nhu cầu cốt lõi của thị trường ngách khu vực cấp thấp, thực hiện chiến lược thương hiệu khác biệt hóa. Việc mù quáng ban hành mệnh lệnh hành chính không thể kích hoạt động lực thúc đẩy nội tại của nhân viên, ngược lại, xây dựng bầu không khí văn hóa tràn đầy sự tin tưởng và bao dung, trao cho cấp dưới không gian phát huy sức sáng tạo hợp lý mới là lựa chọn tất yếu để doanh nghiệp giữ vững sự phát triển bền vững trong cạnh tranh toàn cầu gay gắt. Học tập suốt đời đã là kỹ năng sinh tồn cốt lõi của mỗi người làm việc công sở.",
    "questions": [
      {
        "id": 8901,
        "question": "新媒体的崛起对传统营销有什么影响？ (Truyền thông mới ảnh hưởng thế nào đến tiếp thị?)",
        "options": [
          "A. 没有带来任何改变",
          "B. 面临前所未有的颠覆性变革",
          "C. 降低了企业的整体利润",
          "D. 彻底取代了线下消费"
        ],
        "correct": 1,
        "explanation": "Đáp án chính xác là B. 面临前所未有的颠覆性变革. Nội dung này được thể hiện trực tiếp trong bài đọc."
      },
      {
        "id": 8902,
        "question": "什么样的文化氛围更有利于激发员工的内在驱动力？ (Bầu không khí nào kích hoạt động lực nhân viên?)",
        "options": [
          "A. 一味地下达行政命令",
          "B. 充满信任与包容的文化氛围",
          "C. 极其严格的奖惩惩罚机制",
          "D. 互不干涉的冷漠氛围"
        ],
        "correct": 1,
        "explanation": "Đáp án chính xác là B. 充满信任与包容的文化氛围. Nội dung này được thể hiện trực tiếp trong bài đọc."
      },
      {
        "id": 8903,
        "question": "企业如何在竞争中保持可持续发展？ (Doanh nghiệp làm sao giữ phát triển bền vững?)",
        "options": [
          "A. 实行差异化的品牌战略与包容性管理",
          "B. 缩减研发投入以节省开支",
          "C. 放弃下沉市场的开拓",
          "D. 维持传统的营销格局不变"
        ],
        "correct": 0,
        "explanation": "Đáp án chính xác là A. 实行差异化的品牌战略与包容性管理. Nội dung này được thể hiện trực tiếp trong bài đọc."
      }
    ]
  },
  {
    "id": 90,
    "level": "HSK 5",
    "title": "Chiến lược thích ứng của doanh nghiệp trong kỷ nguyên truyền thông mới",
    "text": "随着新媒体的迅猛崛起，传统的企业营销格局正面临着前所未有的颠覆性变革。优秀的商业决策者应当敏锐地捕获下沉市场的核心需求，实行差异化的品牌战略。一味地下达行政命令并不能激发员工的内在驱动力，相反，构建充满信任与包容的文化氛围，给予下属合理的创造力发挥空间，才是企业在激烈的全球竞争中保持可持续发展的必然选择。终身学习已是每个职场人的核心生存技能。",
    "pinyin": "Suízhe xīnméitǐ de xùnměng juéqǐ, chuántǒng de qǐyè yíngxiāo géjú zhèng miànlínzhe qiánsuǒwèiyǒu de diānfùxìng biàngé. Yōuxiù de shāngyè juécèzhě yīngdāng mǐnruì de bǔhuò xiàchén shìchǎng de héxīn xūqiú, shíxíng chāyìhuà de pǐnpái zhànlù. Yíwèi de xiàdá xíngzhèng mìnglìng bìng bùnéng jīfā yuángōng de nèizài qūdònglì, xiāngfǎn, gòujiàn chōngmǎn xìnrùn yǔ bāoróng de wénhuà fēnwéi, jǐyǔ xiàshǔ hélǐ de chuàngzàolì fāhuī kōngjiān, cái shì qǐyè zài jīliè de quánqiú jìngzhēng zhōng bǎochí kěchíxù fāzhǎn de bìrán xuǎnzé. Zhōngshēn xuéxí yǐ shì měi gè zhíchǎng rén de héxīn shēngcún jìnéng.",
    "translation": "Cùng với sự trỗi dậy mạnh mẽ của truyền thông mới, cục diện tiếp thị doanh nghiệp truyền thống đang đối mặt với cuộc cải cách lật đổ chưa từng có. Nhà quyết sách thương mại xuất sắc nên nhạy bén nắm bắt nhu cầu cốt lõi của thị trường ngách khu vực cấp thấp, thực hiện chiến lược thương hiệu khác biệt hóa. Việc mù quáng ban hành mệnh lệnh hành chính không thể kích hoạt động lực thúc đẩy nội tại của nhân viên, ngược lại, xây dựng bầu không khí văn hóa tràn đầy sự tin tưởng và bao dung, trao cho cấp dưới không gian phát huy sức sáng tạo hợp lý mới là lựa chọn tất yếu để doanh nghiệp giữ vững sự phát triển bền vững trong cạnh tranh toàn cầu gay gắt. Học tập suốt đời đã là kỹ năng sinh tồn cốt lõi của mỗi người làm việc công sở.",
    "questions": [
      {
        "id": 9001,
        "question": "新媒体的崛起对传统营销有什么影响？ (Truyền thông mới ảnh hưởng thế nào đến tiếp thị?)",
        "options": [
          "A. 没有带来任何改变",
          "B. 面临前所未有的颠覆性变革",
          "C. 降低了企业的整体利润",
          "D. 彻底取代了线下消费"
        ],
        "correct": 1,
        "explanation": "Đáp án chính xác là B. 面临前所未有的颠覆性变革. Nội dung này được thể hiện trực tiếp trong bài đọc."
      },
      {
        "id": 9002,
        "question": "什么样的文化氛围更有利于激发员工的内在驱动力？ (Bầu không khí nào kích hoạt động lực nhân viên?)",
        "options": [
          "A. 一味地下达行政命令",
          "B. 充满信任与包容的文化氛围",
          "C. 极其严格的奖惩惩罚机制",
          "D. 互不干涉的冷漠氛围"
        ],
        "correct": 1,
        "explanation": "Đáp án chính xác là B. 充满信任与包容的文化氛围. Nội dung này được thể hiện trực tiếp trong bài đọc."
      },
      {
        "id": 9003,
        "question": "企业如何在竞争中保持可持续发展？ (Doanh nghiệp làm sao giữ phát triển bền vững?)",
        "options": [
          "A. 实行差异化的品牌战略与包容性管理",
          "B. 缩减研发投入以节省开支",
          "C. 放弃下沉市场的开拓",
          "D. 维持传统的营销格局不变"
        ],
        "correct": 0,
        "explanation": "Đáp án chính xác là A. 实行差异化的品牌战略与包容性管理. Nội dung này được thể hiện trực tiếp trong bài đọc."
      }
    ]
  },
  {
    "id": 91,
    "level": "HSK 5",
    "title": "Chiến lược thích ứng của doanh nghiệp trong kỷ nguyên truyền thông mới",
    "text": "随着新媒体的迅猛崛起，传统的企业营销格局正面临着前所未有的颠覆性变革。优秀的商业决策者应当敏锐地捕获下沉市场的核心需求，实行差异化的品牌战略。一味地下达行政命令并不能激发员工的内在驱动力，相反，构建充满信任与包容的文化氛围，给予下属合理的创造力发挥空间，才是企业在激烈的全球竞争中保持可持续发展的必然选择。终身学习已是每个职场人的核心生存技能。",
    "pinyin": "Suízhe xīnméitǐ de xùnměng juéqǐ, chuántǒng de qǐyè yíngxiāo géjú zhèng miànlínzhe qiánsuǒwèiyǒu de diānfùxìng biàngé. Yōuxiù de shāngyè juécèzhě yīngdāng mǐnruì de bǔhuò xiàchén shìchǎng de héxīn xūqiú, shíxíng chāyìhuà de pǐnpái zhànlù. Yíwèi de xiàdá xíngzhèng mìnglìng bìng bùnéng jīfā yuángōng de nèizài qūdònglì, xiāngfǎn, gòujiàn chōngmǎn xìnrùn yǔ bāoróng de wénhuà fēnwéi, jǐyǔ xiàshǔ hélǐ de chuàngzàolì fāhuī kōngjiān, cái shì qǐyè zài jīliè de quánqiú jìngzhēng zhōng bǎochí kěchíxù fāzhǎn de bìrán xuǎnzé. Zhōngshēn xuéxí yǐ shì měi gè zhíchǎng rén de héxīn shēngcún jìnéng.",
    "translation": "Cùng với sự trỗi dậy mạnh mẽ của truyền thông mới, cục diện tiếp thị doanh nghiệp truyền thống đang đối mặt với cuộc cải cách lật đổ chưa từng có. Nhà quyết sách thương mại xuất sắc nên nhạy bén nắm bắt nhu cầu cốt lõi của thị trường ngách khu vực cấp thấp, thực hiện chiến lược thương hiệu khác biệt hóa. Việc mù quáng ban hành mệnh lệnh hành chính không thể kích hoạt động lực thúc đẩy nội tại của nhân viên, ngược lại, xây dựng bầu không khí văn hóa tràn đầy sự tin tưởng và bao dung, trao cho cấp dưới không gian phát huy sức sáng tạo hợp lý mới là lựa chọn tất yếu để doanh nghiệp giữ vững sự phát triển bền vững trong cạnh tranh toàn cầu gay gắt. Học tập suốt đời đã là kỹ năng sinh tồn cốt lõi của mỗi người làm việc công sở.",
    "questions": [
      {
        "id": 9101,
        "question": "新媒体的崛起对传统营销有什么影响？ (Truyền thông mới ảnh hưởng thế nào đến tiếp thị?)",
        "options": [
          "A. 没有带来任何改变",
          "B. 面临前所未有的颠覆性变革",
          "C. 降低了企业的整体利润",
          "D. 彻底取代了线下消费"
        ],
        "correct": 1,
        "explanation": "Đáp án chính xác là B. 面临前所未有的颠覆性变革. Nội dung này được thể hiện trực tiếp trong bài đọc."
      },
      {
        "id": 9102,
        "question": "什么样的文化氛围更有利于激发员工的内在驱动力？ (Bầu không khí nào kích hoạt động lực nhân viên?)",
        "options": [
          "A. 一味地下达行政命令",
          "B. 充满信任与包容的文化氛围",
          "C. 极其严格的奖惩惩罚机制",
          "D. 互不干涉的冷漠氛围"
        ],
        "correct": 1,
        "explanation": "Đáp án chính xác là B. 充满信任与包容的文化氛围. Nội dung này được thể hiện trực tiếp trong bài đọc."
      },
      {
        "id": 9103,
        "question": "企业如何在竞争中保持可持续发展？ (Doanh nghiệp làm sao giữ phát triển bền vững?)",
        "options": [
          "A. 实行差异化的品牌战略与包容性管理",
          "B. 缩减研发投入以节省开支",
          "C. 放弃下沉市场的开拓",
          "D. 维持传统的营销格局不变"
        ],
        "correct": 0,
        "explanation": "Đáp án chính xác là A. 实行差异化的品牌战略与包容性管理. Nội dung này được thể hiện trực tiếp trong bài đọc."
      }
    ]
  },
  {
    "id": 92,
    "level": "HSK 5",
    "title": "Chiến lược thích ứng của doanh nghiệp trong kỷ nguyên truyền thông mới",
    "text": "随着新媒体的迅猛崛起，传统的企业营销格局正面临着前所未有的颠覆性变革。优秀的商业决策者应当敏锐地捕获下沉市场的核心需求，实行差异化的品牌战略。一味地下达行政命令并不能激发员工的内在驱动力，相反，构建充满信任与包容的文化氛围，给予下属合理的创造力发挥空间，才是企业在激烈的全球竞争中保持可持续发展的必然选择。终身学习已是每个职场人的核心生存技能。",
    "pinyin": "Suízhe xīnméitǐ de xùnměng juéqǐ, chuántǒng de qǐyè yíngxiāo géjú zhèng miànlínzhe qiánsuǒwèiyǒu de diānfùxìng biàngé. Yōuxiù de shāngyè juécèzhě yīngdāng mǐnruì de bǔhuò xiàchén shìchǎng de héxīn xūqiú, shíxíng chāyìhuà de pǐnpái zhànlù. Yíwèi de xiàdá xíngzhèng mìnglìng bìng bùnéng jīfā yuángōng de nèizài qūdònglì, xiāngfǎn, gòujiàn chōngmǎn xìnrùn yǔ bāoróng de wénhuà fēnwéi, jǐyǔ xiàshǔ hélǐ de chuàngzàolì fāhuī kōngjiān, cái shì qǐyè zài jīliè de quánqiú jìngzhēng zhōng bǎochí kěchíxù fāzhǎn de bìrán xuǎnzé. Zhōngshēn xuéxí yǐ shì měi gè zhíchǎng rén de héxīn shēngcún jìnéng.",
    "translation": "Cùng với sự trỗi dậy mạnh mẽ của truyền thông mới, cục diện tiếp thị doanh nghiệp truyền thống đang đối mặt với cuộc cải cách lật đổ chưa từng có. Nhà quyết sách thương mại xuất sắc nên nhạy bén nắm bắt nhu cầu cốt lõi của thị trường ngách khu vực cấp thấp, thực hiện chiến lược thương hiệu khác biệt hóa. Việc mù quáng ban hành mệnh lệnh hành chính không thể kích hoạt động lực thúc đẩy nội tại của nhân viên, ngược lại, xây dựng bầu không khí văn hóa tràn đầy sự tin tưởng và bao dung, trao cho cấp dưới không gian phát huy sức sáng tạo hợp lý mới là lựa chọn tất yếu để doanh nghiệp giữ vững sự phát triển bền vững trong cạnh tranh toàn cầu gay gắt. Học tập suốt đời đã là kỹ năng sinh tồn cốt lõi của mỗi người làm việc công sở.",
    "questions": [
      {
        "id": 9201,
        "question": "新媒体的崛起对传统营销有什么影响？ (Truyền thông mới ảnh hưởng thế nào đến tiếp thị?)",
        "options": [
          "A. 没有带来任何改变",
          "B. 面临前所未有的颠覆性变革",
          "C. 降低了企业的整体利润",
          "D. 彻底取代了线下消费"
        ],
        "correct": 1,
        "explanation": "Đáp án chính xác là B. 面临前所未有的颠覆性变革. Nội dung này được thể hiện trực tiếp trong bài đọc."
      },
      {
        "id": 9202,
        "question": "什么样的文化氛围更有利于激发员工的内在驱动力？ (Bầu không khí nào kích hoạt động lực nhân viên?)",
        "options": [
          "A. 一味地下达行政命令",
          "B. 充满信任与包容的文化氛围",
          "C. 极其严格的奖惩惩罚机制",
          "D. 互不干涉的冷漠氛围"
        ],
        "correct": 1,
        "explanation": "Đáp án chính xác là B. 充满信任与包容的文化氛围. Nội dung này được thể hiện trực tiếp trong bài đọc."
      },
      {
        "id": 9203,
        "question": "企业如何在竞争中保持可持续发展？ (Doanh nghiệp làm sao giữ phát triển bền vững?)",
        "options": [
          "A. 实行差异化的品牌战略与包容性管理",
          "B. 缩减研发投入以节省开支",
          "C. 放弃下沉市场的开拓",
          "D. 维持传统的营销格局不变"
        ],
        "correct": 0,
        "explanation": "Đáp án chính xác là A. 实行差异化的品牌战略与包容性管理. Nội dung này được thể hiện trực tiếp trong bài đọc."
      }
    ]
  },
  {
    "id": 93,
    "level": "HSK 5",
    "title": "Chiến lược thích ứng của doanh nghiệp trong kỷ nguyên truyền thông mới",
    "text": "随着新媒体的迅猛崛起，传统的企业营销格局正面临着前所未有的颠覆性变革。优秀的商业决策者应当敏锐地捕获下沉市场的核心需求，实行差异化的品牌战略。一味地下达行政命令并不能激发员工的内在驱动力，相反，构建充满信任与包容的文化氛围，给予下属合理的创造力发挥空间，才是企业在激烈的全球竞争中保持可持续发展的必然选择。终身学习已是每个职场人的核心生存技能。",
    "pinyin": "Suízhe xīnméitǐ de xùnměng juéqǐ, chuántǒng de qǐyè yíngxiāo géjú zhèng miànlínzhe qiánsuǒwèiyǒu de diānfùxìng biàngé. Yōuxiù de shāngyè juécèzhě yīngdāng mǐnruì de bǔhuò xiàchén shìchǎng de héxīn xūqiú, shíxíng chāyìhuà de pǐnpái zhànlù. Yíwèi de xiàdá xíngzhèng mìnglìng bìng bùnéng jīfā yuángōng de nèizài qūdònglì, xiāngfǎn, gòujiàn chōngmǎn xìnrùn yǔ bāoróng de wénhuà fēnwéi, jǐyǔ xiàshǔ hélǐ de chuàngzàolì fāhuī kōngjiān, cái shì qǐyè zài jīliè de quánqiú jìngzhēng zhōng bǎochí kěchíxù fāzhǎn de bìrán xuǎnzé. Zhōngshēn xuéxí yǐ shì měi gè zhíchǎng rén de héxīn shēngcún jìnéng.",
    "translation": "Cùng với sự trỗi dậy mạnh mẽ của truyền thông mới, cục diện tiếp thị doanh nghiệp truyền thống đang đối mặt với cuộc cải cách lật đổ chưa từng có. Nhà quyết sách thương mại xuất sắc nên nhạy bén nắm bắt nhu cầu cốt lõi của thị trường ngách khu vực cấp thấp, thực hiện chiến lược thương hiệu khác biệt hóa. Việc mù quáng ban hành mệnh lệnh hành chính không thể kích hoạt động lực thúc đẩy nội tại của nhân viên, ngược lại, xây dựng bầu không khí văn hóa tràn đầy sự tin tưởng và bao dung, trao cho cấp dưới không gian phát huy sức sáng tạo hợp lý mới là lựa chọn tất yếu để doanh nghiệp giữ vững sự phát triển bền vững trong cạnh tranh toàn cầu gay gắt. Học tập suốt đời đã là kỹ năng sinh tồn cốt lõi của mỗi người làm việc công sở.",
    "questions": [
      {
        "id": 9301,
        "question": "新媒体的崛起对传统营销有什么影响？ (Truyền thông mới ảnh hưởng thế nào đến tiếp thị?)",
        "options": [
          "A. 没有带来任何改变",
          "B. 面临前所未有的颠覆性变革",
          "C. 降低了企业的整体利润",
          "D. 彻底取代了线下消费"
        ],
        "correct": 1,
        "explanation": "Đáp án chính xác là B. 面临前所未有的颠覆性变革. Nội dung này được thể hiện trực tiếp trong bài đọc."
      },
      {
        "id": 9302,
        "question": "什么样的文化氛围更有利于激发员工的内在驱动力？ (Bầu không khí nào kích hoạt động lực nhân viên?)",
        "options": [
          "A. 一味地下达行政命令",
          "B. 充满信任与包容的文化氛围",
          "C. 极其严格的奖惩惩罚机制",
          "D. 互不干涉的冷漠氛围"
        ],
        "correct": 1,
        "explanation": "Đáp án chính xác là B. 充满信任与包容的文化氛围. Nội dung này được thể hiện trực tiếp trong bài đọc."
      },
      {
        "id": 9303,
        "question": "企业如何在竞争中保持可持续发展？ (Doanh nghiệp làm sao giữ phát triển bền vững?)",
        "options": [
          "A. 实行差异化的品牌战略与包容性管理",
          "B. 缩减研发投入以节省开支",
          "C. 放弃下沉市场的开拓",
          "D. 维持传统的营销格局不变"
        ],
        "correct": 0,
        "explanation": "Đáp án chính xác là A. 实行差异化的品牌战略与包容性管理. Nội dung này được thể hiện trực tiếp trong bài đọc."
      }
    ]
  },
  {
    "id": 94,
    "level": "HSK 5",
    "title": "Chiến lược thích ứng của doanh nghiệp trong kỷ nguyên truyền thông mới",
    "text": "随着新媒体的迅猛崛起，传统的企业营销格局正面临着前所未有的颠覆性变革。优秀的商业决策者应当敏锐地捕获下沉市场的核心需求，实行差异化的品牌战略。一味地下达行政命令并不能激发员工的内在驱动力，相反，构建充满信任与包容的文化氛围，给予下属合理的创造力发挥空间，才是企业在激烈的全球竞争中保持可持续发展的必然选择。终身学习已是每个职场人的核心生存技能。",
    "pinyin": "Suízhe xīnméitǐ de xùnměng juéqǐ, chuántǒng de qǐyè yíngxiāo géjú zhèng miànlínzhe qiánsuǒwèiyǒu de diānfùxìng biàngé. Yōuxiù de shāngyè juécèzhě yīngdāng mǐnruì de bǔhuò xiàchén shìchǎng de héxīn xūqiú, shíxíng chāyìhuà de pǐnpái zhànlù. Yíwèi de xiàdá xíngzhèng mìnglìng bìng bùnéng jīfā yuángōng de nèizài qūdònglì, xiāngfǎn, gòujiàn chōngmǎn xìnrùn yǔ bāoróng de wénhuà fēnwéi, jǐyǔ xiàshǔ hélǐ de chuàngzàolì fāhuī kōngjiān, cái shì qǐyè zài jīliè de quánqiú jìngzhēng zhōng bǎochí kěchíxù fāzhǎn de bìrán xuǎnzé. Zhōngshēn xuéxí yǐ shì měi gè zhíchǎng rén de héxīn shēngcún jìnéng.",
    "translation": "Cùng với sự trỗi dậy mạnh mẽ của truyền thông mới, cục diện tiếp thị doanh nghiệp truyền thống đang đối mặt với cuộc cải cách lật đổ chưa từng có. Nhà quyết sách thương mại xuất sắc nên nhạy bén nắm bắt nhu cầu cốt lõi của thị trường ngách khu vực cấp thấp, thực hiện chiến lược thương hiệu khác biệt hóa. Việc mù quáng ban hành mệnh lệnh hành chính không thể kích hoạt động lực thúc đẩy nội tại của nhân viên, ngược lại, xây dựng bầu không khí văn hóa tràn đầy sự tin tưởng và bao dung, trao cho cấp dưới không gian phát huy sức sáng tạo hợp lý mới là lựa chọn tất yếu để doanh nghiệp giữ vững sự phát triển bền vững trong cạnh tranh toàn cầu gay gắt. Học tập suốt đời đã là kỹ năng sinh tồn cốt lõi của mỗi người làm việc công sở.",
    "questions": [
      {
        "id": 9401,
        "question": "新媒体的崛起对传统营销有什么影响？ (Truyền thông mới ảnh hưởng thế nào đến tiếp thị?)",
        "options": [
          "A. 没有带来任何改变",
          "B. 面临前所未有的颠覆性变革",
          "C. 降低了企业的整体利润",
          "D. 彻底取代了线下消费"
        ],
        "correct": 1,
        "explanation": "Đáp án chính xác là B. 面临前所未有的颠覆性变革. Nội dung này được thể hiện trực tiếp trong bài đọc."
      },
      {
        "id": 9402,
        "question": "什么样的文化氛围更有利于激发员工的内在驱动力？ (Bầu không khí nào kích hoạt động lực nhân viên?)",
        "options": [
          "A. 一味地下达行政命令",
          "B. 充满信任与包容的文化氛围",
          "C. 极其严格的奖惩惩罚机制",
          "D. 互不干涉的冷漠氛围"
        ],
        "correct": 1,
        "explanation": "Đáp án chính xác là B. 充满信任与包容的文化氛围. Nội dung này được thể hiện trực tiếp trong bài đọc."
      },
      {
        "id": 9403,
        "question": "企业如何在竞争中保持可持续发展？ (Doanh nghiệp làm sao giữ phát triển bền vững?)",
        "options": [
          "A. 实行差异化的品牌战略与包容性管理",
          "B. 缩减研发投入以节省开支",
          "C. 放弃下沉市场的开拓",
          "D. 维持传统的营销格局不变"
        ],
        "correct": 0,
        "explanation": "Đáp án chính xác là A. 实行差异化的品牌战略与包容性管理. Nội dung này được thể hiện trực tiếp trong bài đọc."
      }
    ]
  },
  {
    "id": 95,
    "level": "HSK 5",
    "title": "Chiến lược thích ứng của doanh nghiệp trong kỷ nguyên truyền thông mới",
    "text": "随着新媒体的迅猛崛起，传统的企业营销格局正面临着前所未有的颠覆性变革。优秀的商业决策者应当敏锐地捕获下沉市场的核心需求，实行差异化的品牌战略。一味地下达行政命令并不能激发员工的内在驱动力，相反，构建充满信任与包容的文化氛围，给予下属合理的创造力发挥空间，才是企业在激烈的全球竞争中保持可持续发展的必然选择。终身学习已是每个职场人的核心生存技能。",
    "pinyin": "Suízhe xīnméitǐ de xùnměng juéqǐ, chuántǒng de qǐyè yíngxiāo géjú zhèng miànlínzhe qiánsuǒwèiyǒu de diānfùxìng biàngé. Yōuxiù de shāngyè juécèzhě yīngdāng mǐnruì de bǔhuò xiàchén shìchǎng de héxīn xūqiú, shíxíng chāyìhuà de pǐnpái zhànlù. Yíwèi de xiàdá xíngzhèng mìnglìng bìng bùnéng jīfā yuángōng de nèizài qūdònglì, xiāngfǎn, gòujiàn chōngmǎn xìnrùn yǔ bāoróng de wénhuà fēnwéi, jǐyǔ xiàshǔ hélǐ de chuàngzàolì fāhuī kōngjiān, cái shì qǐyè zài jīliè de quánqiú jìngzhēng zhōng bǎochí kěchíxù fāzhǎn de bìrán xuǎnzé. Zhōngshēn xuéxí yǐ shì měi gè zhíchǎng rén de héxīn shēngcún jìnéng.",
    "translation": "Cùng với sự trỗi dậy mạnh mẽ của truyền thông mới, cục diện tiếp thị doanh nghiệp truyền thống đang đối mặt với cuộc cải cách lật đổ chưa từng có. Nhà quyết sách thương mại xuất sắc nên nhạy bén nắm bắt nhu cầu cốt lõi của thị trường ngách khu vực cấp thấp, thực hiện chiến lược thương hiệu khác biệt hóa. Việc mù quáng ban hành mệnh lệnh hành chính không thể kích hoạt động lực thúc đẩy nội tại của nhân viên, ngược lại, xây dựng bầu không khí văn hóa tràn đầy sự tin tưởng và bao dung, trao cho cấp dưới không gian phát huy sức sáng tạo hợp lý mới là lựa chọn tất yếu để doanh nghiệp giữ vững sự phát triển bền vững trong cạnh tranh toàn cầu gay gắt. Học tập suốt đời đã là kỹ năng sinh tồn cốt lõi của mỗi người làm việc công sở.",
    "questions": [
      {
        "id": 9501,
        "question": "新媒体的崛起对传统营销有什么影响？ (Truyền thông mới ảnh hưởng thế nào đến tiếp thị?)",
        "options": [
          "A. 没有带来任何改变",
          "B. 面临前所未有的颠覆性变革",
          "C. 降低了企业的整体利润",
          "D. 彻底取代了线下消费"
        ],
        "correct": 1,
        "explanation": "Đáp án chính xác là B. 面临前所未有的颠覆性变革. Nội dung này được thể hiện trực tiếp trong bài đọc."
      },
      {
        "id": 9502,
        "question": "什么样的文化氛围更有利于激发员工的内在驱动力？ (Bầu không khí nào kích hoạt động lực nhân viên?)",
        "options": [
          "A. 一味地下达行政命令",
          "B. 充满信任与包容的文化氛围",
          "C. 极其严格的奖惩惩罚机制",
          "D. 互不干涉的冷漠氛围"
        ],
        "correct": 1,
        "explanation": "Đáp án chính xác là B. 充满信任与包容的文化氛围. Nội dung này được thể hiện trực tiếp trong bài đọc."
      },
      {
        "id": 9503,
        "question": "企业如何在竞争中保持可持续发展？ (Doanh nghiệp làm sao giữ phát triển bền vững?)",
        "options": [
          "A. 实行差异化的品牌战略与包容性管理",
          "B. 缩减研发投入以节省开支",
          "C. 放弃下沉市场的开拓",
          "D. 维持传统的营销格局不变"
        ],
        "correct": 0,
        "explanation": "Đáp án chính xác là A. 实行差异化的品牌战略与包容性管理. Nội dung này được thể hiện trực tiếp trong bài đọc."
      }
    ]
  },
  {
    "id": 96,
    "level": "HSK 5",
    "title": "Chiến lược thích ứng của doanh nghiệp trong kỷ nguyên truyền thông mới",
    "text": "随着新媒体的迅猛崛起，传统的企业营销格局正面临着前所未有的颠覆性变革。优秀的商业决策者应当敏锐地捕获下沉市场的核心需求，实行差异化的品牌战略。一味地下达行政命令并不能激发员工的内在驱动力，相反，构建充满信任与包容的文化氛围，给予下属合理的创造力发挥空间，才是企业在激烈的全球竞争中保持可持续发展的必然选择。终身学习已是每个职场人的核心生存技能。",
    "pinyin": "Suízhe xīnméitǐ de xùnměng juéqǐ, chuántǒng de qǐyè yíngxiāo géjú zhèng miànlínzhe qiánsuǒwèiyǒu de diānfùxìng biàngé. Yōuxiù de shāngyè juécèzhě yīngdāng mǐnruì de bǔhuò xiàchén shìchǎng de héxīn xūqiú, shíxíng chāyìhuà de pǐnpái zhànlù. Yíwèi de xiàdá xíngzhèng mìnglìng bìng bùnéng jīfā yuángōng de nèizài qūdònglì, xiāngfǎn, gòujiàn chōngmǎn xìnrùn yǔ bāoróng de wénhuà fēnwéi, jǐyǔ xiàshǔ hélǐ de chuàngzàolì fāhuī kōngjiān, cái shì qǐyè zài jīliè de quánqiú jìngzhēng zhōng bǎochí kěchíxù fāzhǎn de bìrán xuǎnzé. Zhōngshēn xuéxí yǐ shì měi gè zhíchǎng rén de héxīn shēngcún jìnéng.",
    "translation": "Cùng với sự trỗi dậy mạnh mẽ của truyền thông mới, cục diện tiếp thị doanh nghiệp truyền thống đang đối mặt với cuộc cải cách lật đổ chưa từng có. Nhà quyết sách thương mại xuất sắc nên nhạy bén nắm bắt nhu cầu cốt lõi của thị trường ngách khu vực cấp thấp, thực hiện chiến lược thương hiệu khác biệt hóa. Việc mù quáng ban hành mệnh lệnh hành chính không thể kích hoạt động lực thúc đẩy nội tại của nhân viên, ngược lại, xây dựng bầu không khí văn hóa tràn đầy sự tin tưởng và bao dung, trao cho cấp dưới không gian phát huy sức sáng tạo hợp lý mới là lựa chọn tất yếu để doanh nghiệp giữ vững sự phát triển bền vững trong cạnh tranh toàn cầu gay gắt. Học tập suốt đời đã là kỹ năng sinh tồn cốt lõi của mỗi người làm việc công sở.",
    "questions": [
      {
        "id": 9601,
        "question": "新媒体的崛起对传统营销有什么影响？ (Truyền thông mới ảnh hưởng thế nào đến tiếp thị?)",
        "options": [
          "A. 没有带来任何改变",
          "B. 面临前所未有的颠覆性变革",
          "C. 降低了企业的整体利润",
          "D. 彻底取代了线下消费"
        ],
        "correct": 1,
        "explanation": "Đáp án chính xác là B. 面临前所未有的颠覆性变革. Nội dung này được thể hiện trực tiếp trong bài đọc."
      },
      {
        "id": 9602,
        "question": "什么样的文化氛围更有利于激发员工的内在驱动力？ (Bầu không khí nào kích hoạt động lực nhân viên?)",
        "options": [
          "A. 一味地下达行政命令",
          "B. 充满信任与包容的文化氛围",
          "C. 极其严格的奖惩惩罚机制",
          "D. 互不干涉的冷漠氛围"
        ],
        "correct": 1,
        "explanation": "Đáp án chính xác là B. 充满信任与包容的文化氛围. Nội dung này được thể hiện trực tiếp trong bài đọc."
      },
      {
        "id": 9603,
        "question": "企业如何在竞争中保持可持续发展？ (Doanh nghiệp làm sao giữ phát triển bền vững?)",
        "options": [
          "A. 实行差异化的品牌战略与包容性管理",
          "B. 缩减研发投入以节省开支",
          "C. 放弃下沉市场的开拓",
          "D. 维持传统的营销格局不变"
        ],
        "correct": 0,
        "explanation": "Đáp án chính xác là A. 实行差异化的品牌战略与包容性管理. Nội dung này được thể hiện trực tiếp trong bài đọc."
      }
    ]
  },
  {
    "id": 97,
    "level": "HSK 6",
    "title": "Hệ sinh thái và Biến đổi khí hậu toàn cầu",
    "text": "气候变暖引发的连锁反应日趋显著，冰川融化、海平面上升等现象已是不争的事实，这直接危及到生物多样性的延续。遏制生态恶化亟需全球秉持构建人类命运共同体的理念，打破地域藩篱，推行大刀阔斧的低碳变革。这需要各国不仅在宏观政策上达成高度共识，更要在细分产业的结构重组中展现出破釜沉舟的决绝，方能在这场关乎人类生死存亡的生态保卫战中赢取一线生机。",
    "pinyin": "Qìhòu biànnuǎn yǐnfā de liánsuǒ fǎnyìng rìqū xiǎnzhù, bīngchuān rónghuà, hǎipímiàn shàngshēng děng xiànxiàng yǐ shì bùzhēng de ...",
    "translation": "Phản ứng dây chuyền do khí hậu ấm lên gây ra ngày càng rõ rệt, hiện tượng băng tan, mực nước biển dâng cao đã là sự thật không thể chối cãi, điều này đe dọa trực tiếp đến sự tiếp diễn của tính đa dạng sinh học. Ngăn chặn sinh thái suy thoái khẩn cấp đòi hỏi toàn cầu giữ vững triết lý xây dựng cộng đồng chung vận mệnh nhân loại, phá bỏ rào cản địa lý, thúc đẩy cải cách các-bon thấp một cách quyết liệt và mạnh mẽ. Điều này đòi hỏi các quốc gia không chỉ đạt được sự đồng thuận cao độ trên chính sách vĩ mô, mà còn phải thể hiện sự quyết tâm kiên định trong việc tái cấu trúc các ngành công nghiệp cụ thể, mới có thể giành được một cơ hội sống sót trong cuộc chiến bảo vệ sinh thái liên quan đến sự sinh tử của nhân loại.",
    "questions": [
      {
        "id": 9701,
        "question": "根据文章，气候变暖带来的直接危害是什么？ (Theo bài viết, tác hại trực tiếp của việc khí hậu ấm lên là gì?)",
        "options": [
          "A. 减缓冰川融化的速度",
          "B. 危及到生物多样性的延续",
          "C. 促进细分产业的繁荣",
          "D. 消除地域之间的藩篱"
        ],
        "correct": 1,
        "explanation": "Đáp án chính xác là B. 危及到生物多样性的延续. Nội dung này được thể hiện trực tiếp trong bài đọc."
      },
      {
        "id": 9702,
        "question": "遏制生态恶化急需全球秉持什么理念？ (Để ngăn chặn sinh thái suy thoái cần toàn cầu giữ vững triết lý gì?)",
        "options": [
          "A. 经济利益至上理念",
          "B. 构建人类命运共同体理念",
          "C. 独善其身的发展模式",
          "D. 传统工业优先发展理念"
        ],
        "correct": 1,
        "explanation": "Đáp án chính xác là B. 构建人类命运共同体理念. Nội dung này được thể hiện trực tiếp trong bài đọc."
      },
      {
        "id": 9703,
        "question": "文中“破釜沉舟的决绝”指的是什么？ (Cụm từ 'quyết tâm kiên định/đập nồi dìm thuyền' chỉ điều gì?)",
        "options": [
          "A. 放弃生态保护",
          "B. 产业结构重组中的坚定决心",
          "C. 宏观政策上的妥协",
          "D. 维持原有的低碳变革节奏"
        ],
        "correct": 1,
        "explanation": "Đáp án chính xác là B. 产业结构重组中的坚定决心. Nội dung này được thể hiện trực tiếp trong bài đọc."
      }
    ]
  },
  {
    "id": 98,
    "level": "HSK 6",
    "title": "Khảo cổ học và Sự phục dựng kỹ thuật số di sản văn hóa",
    "text": "历经岁月洗礼的古代遗存，不仅是历史演进的吉光片羽，更是中华文明源远流长、博大精深的实物见证。保护文物功在当代、利在千秋。我们应借助现代科技手段进行抢救性保护与数字化还原，让沉睡的文物活起来。过度且盲目的商业开发只会是对古迹不可逆的二次破坏，唯有在坚守敬畏之心的前提下，实现文化遗产的创造性转化与创新性发展，才能让文脉绵延不绝，成为启迪后人的精神源泉。",
    "pinyin": "Lìjīng suìyuè xǐlǐ de gǔdài yícún, bùjǐn shì lìshǐ yǎnjìn de jíguāngpiànyǔ...",
    "translation": "Các di sản cổ đại trải qua sự rửa rũa của năm tháng, không chỉ là những mảnh ghép quý báu của tiến trình lịch sử, mà còn là chứng nhân vật chất cho sự lâu đời và rộng lớn tinh thâm của văn minh. Bảo tồn cổ vật công lao ở hiện tại, lợi ích tới ngàn năm. Chúng ta nên ứng dụng các biện pháp công nghệ hiện đại để bảo tồn mang tính cứu vãn và phục dựng kỹ thuật số, khiến những cổ vật đang ngủ sâu trở nên sống động. Việc khai thác thương mại quá mức và mù quáng sẽ chỉ là sự tàn phá thứ cấp không thể đảo ngược đối với các di tích cổ.",
    "questions": [
      {
        "id": 9801,
        "question": "文章认为古代遗存的主要价值在于什么？ (Tác giả thấy giá trị chính của di sản cổ đại ở đâu?)",
        "options": [
          "A. 商业开发的经济利润",
          "B. 中华文明源远流长、博大精深的实物见证",
          "C. 满足现代人的猎奇心理",
          "D. 可以彻底被数字化替代"
        ],
        "correct": 1,
        "explanation": "Đáp án chính xác là B. 中华文明源远流长、博大精深的实物见证. Nội dung này được thể hiện trực tiếp trong bài đọc."
      },
      {
        "id": 9802,
        "question": "过度且盲目的商业开发会带来什么后果？ (Khai thác thương mại quá mức gây hậu quả gì?)",
        "options": [
          "A. 提升文物的数字化水平",
          "B. 带来对古迹不可逆的二次破坏",
          "C. 让沉睡的文物彻底复活",
          "D. 完善文物的抢救性保护"
        ],
        "correct": 1,
        "explanation": "Đáp án chính xác là B. 带来对古迹不可逆的二次破坏. Nội dung này được thể hiện trực tiếp trong bài đọc."
      },
      {
        "id": 9803,
        "question": "如何才能让文脉绵延不绝？ (Làm sao giúp mạch nguồn văn hóa kéo dài mãi?)",
        "options": [
          "A. 坚守敬畏之心，实现创造性转化与创新性发展",
          "B. 进行完全封闭式的绝对隔离保护",
          "C. 停止一切现代科技手段的介入",
          "D. 大规模开展旅游资源扩建"
        ],
        "correct": 0,
        "explanation": "Đáp án chính xác là A. 坚守敬畏之心，实现创造性转化与创新性发展. Nội dung này được thể hiện trực tiếp trong bài đọc."
      }
    ]
  },
  {
    "id": 99,
    "level": "HSK 6",
    "title": "Trí tuệ nhân tạo tổng hợp và Sứ mệnh đạo đức thời đại",
    "text": "纵观科技发展史，通用人工智能的横空出世无疑引发了生产力范式的颠覆性变革，但也带来了前所未有的伦理挑战。科技的前行必须辅以人性的缰绳。建立健全法律法规与伦理审查机制，确保算法向善，是人类不可推卸的时代使命。如果一味追求技术指标的狂飙突进而忽视其潜在的失控风险，高新技术非但不能造福人类，反而可能沦为反噬文明的工具。因此，科技治理需在敏捷反应与深度审慎之间寻求精妙的动态平衡。",
    "pinyin": "Zòngguān kējì fāzhǎnshǐ, tōngyòng rénggōng zhìnéng de héngkōngchūshì...",
    "translation": "Nhìn suốt lịch sử phát triển khoa học công nghệ, sự ra đời của trí tuệ nhân tạo tổng hợp không nghi ngờ gì đã kích hoạt cuộc cải cách mang tính lật đổ đối với mô hình lực lượng sản xuất, nhưng cũng đem lại những thách thức đạo đức chưa từng có. Khoa học công nghệ tiến bước phải được hỗ trợ bằng dây cương của nhân tính. Xây dựng và hoàn thiện luật pháp quy định cùng cơ chế thẩm định đạo đức, bảo đảm thuật toán hướng thiện, là sứ mệnh thời đại không thể thoái thác của nhân loại.",
    "questions": [
      {
        "id": 9901,
        "question": "通用人工智能的横空出世引发了什么？ (Sự ra đời của AI tổng hợp kích hoạt điều gì?)",
        "options": [
          "A. 生产力范式的颠覆性变革与伦理挑战",
          "B. 科技发展史的完全停滞",
          "C. 法律法规的主动失效",
          "D. 人性缰绳 fire 的彻底解脱"
        ],
        "correct": 0,
        "explanation": "Đáp án chính xác là A. 生产力范式的颠覆性变革与伦理挑战. Nội dung này được thể hiện trực tiếp trong bài đọc."
      },
      {
        "id": 9902,
        "question": "如果一味追求技术指标的狂飙突进会怎么样？ (Nếu mù quáng chạy theo chỉ số kỹ thuật thì sao?)",
        "options": [
          "A. 能够更加迅速地造福人类",
          "B. 带来完全可控的社会环境",
          "C. 科技可能沦为反噬文明的工具",
          "D. 能够完美自动消除伦理风险"
        ],
        "correct": 2,
        "explanation": "Đáp án chính xác là C. 科技可能沦为反噬文明的工具. Nội dung này được thể hiện trực tiếp trong bài đọc."
      },
      {
        "id": 9903,
        "question": "科技治理需要在什么之间寻求平衡？ (Quản trị công nghệ cần tìm cân bằng giữa điều gì?)",
        "options": [
          "A. 敏捷反应与深度审慎",
          "B. 技术飙升与资金投入",
          "C. 传统观念与现代文明",
          "D. 算法研发与法律打压"
        ],
        "correct": 0,
        "explanation": "Đáp án chính xác là A. 敏捷反应与深度审慎. Nội dung này được thể hiện trực tiếp trong bài đọc."
      }
    ]
  },
  {
    "id": 100,
    "level": "HSK 6",
    "title": "Triết học tri thức và Lý luận nhận thức thực tiễn",
    "text": "任何学术理论的建构若脱离了客观实践的土壤，终将沦为空中楼阁，丧失其应有的生命力与现实启示。正所谓“实践出真知”。唯有在反复的实践中发现真理、检验真理并发展真理，方能达到主客观的高度统一。纯粹的理论沙盘推演固然有其逻辑美感，但若不将其投入到错综复杂的现实熔炉中去锻造，它就只能永远停留在苍白的假设阶段，无法转化为推动历史巨轮滚滚向前的物质力量。这正是知行合一的深刻内涵。",
    "pinyin": "Rènhé xuéshù lǐlùn de jiàngòu ruò tuōlíle kèguān shíjiàn de tǔrǎng...",
    "translation": "Việc kiến tạo bất kỳ lý luận học thuật nào nếu thoát ly khỏi mảnh đất thực tiễn khách quan, cuối cùng sẽ rơi vào cảnh lầu trên không trung, mất đi sức sống và ý nghĩa gợi mở thực tế vốn có. Chính là cái gọi là 'thực tiễn tạo nên chân tri'. Chỉ có trong thực tiễn lặp đi lặp lại để phát hiện chân lý, kiểm nghiệm chân lý và phát triển chân lý, mới có thể đạt tới sự thống nhất cao độ giữa chủ quan và khách quan. Việc diễn giải mô phỏng trên sa bàn lý thuyết thuần túy dẫu có vẻ đẹp logic của nó, nhưng nếu không đưa nó vào lò nung thực tế phức tạp để rèn giũa, nó sẽ mãi chỉ dừng lại ở giai đoạn giả thuyết nhạt nhòa.",
    "questions": [
      {
        "id": 10001,
        "question": "学术理论的建构若脱离了客观实践的土壤会变成什么？ (Lý luận thoát ly thực tiễn sẽ thế nào?)",
        "options": [
          "A. 转化为强大的物质力量",
          "B. 沦为空中楼阁，丧失生命力与现实启示",
          "C. 达到高度完美的逻辑顶峰",
          "D. 自动成为检验真理的唯一标准"
        ],
        "correct": 1,
        "explanation": "Đáp án chính xác là B. 沦为空中楼阁，丧失生命力与现实启示. Nội dung này được thể hiện trực tiếp trong bài đọc."
      },
      {
        "id": 10002,
        "question": "文章中提到的“实践出真知”强调了什么？ ('Thực tiễn tạo chân tri' nhấn mạnh điều gì?)",
        "options": [
          "A. 纯粹理论推演的逻辑美感",
          "B. 在反复实践中发现、检验和发展真理",
          "C. 假设阶段的主观臆断",
          "D. 历史巨轮的不可控性"
        ],
        "correct": 1,
        "explanation": "Đáp án chính xác là B. 在反复实践中发现、检验和发展真理. Nội dung này được thể hiện trực tiếp trong bài đọc."
      },
      {
        "id": 10003,
        "question": "什么样的理论才是真正有价值的？ (Lý luận như thế nào mới có giá trị thực sự?)",
        "options": [
          "A. 永远停留在苍白假设阶段的理论",
          "B. 投入到现实熔炉中锻造并转化为物质力量的理论",
          "C. 逃避现实错综复杂关系的理论",
          "D. 仅供学术沙盘推演的理论"
        ],
        "correct": 1,
        "explanation": "Đáp án chính xác là B. 投入到现实熔炉中锻造并转化为物质力量的理论. Nội dung này được thể hiện trực tiếp trong bài đọc."
      }
    ]
  }
];

balanceAnswerPositions(LESEN_EXAMS);
