import { balanceAnswerPositions } from './balanceOptions.js';

export const HOREN_EXAMS = [
  {
    "id": 1,
    "level": "HSK 1",
    "title": "Chào hỏi cơ bản",
    "audioText": "A: 你好！\nB: 你好！很高兴认识你。",
    "dialogue": [
      {
        "speaker": "A",
        "cn": "你好！",
        "py": "Nǐ hǎo!",
        "vi": "Chào bạn!"
      },
      {
        "speaker": "B",
        "cn": "你好！很高兴认识你。",
        "py": "Nǐ hǎo! Hěn gāoxìng rènshi nǐ.",
        "vi": "Chào bạn! Rất vui được quen biết bạn."
      }
    ],
    "questions": [
      {
        "id": 101,
        "question": "Chủ đề của đoạn hội thoại này là gì?",
        "options": [
          "A. Chào hỏi cơ bản",
          "B. Đi du lịch nước ngoài",
          "C. Xem phim kinh dị",
          "D. Mua sắm xe hơi"
        ],
        "correct": 0,
        "explanation": "Đáp án chính xác là A. Chào hỏi cơ bản. Nội dung này được thể hiện trực tiếp trong bài nghe."
      },
      {
        "id": 102,
        "question": "Người nói thứ nhất (A) đã nói câu nào?",
        "options": [
          "A. 你好！",
          "B. 再见！ (Tạm biệt!)",
          "C. 我不知道。 (Tôi không biết.)",
          "D. 没关系。 (Không có gì.)"
        ],
        "correct": 0,
        "explanation": "Đáp án chính xác là A. 你好！. Nội dung này được thể hiện trực tiếp trong bài nghe."
      },
      {
        "id": 103,
        "question": "Trình độ ngôn ngữ thích hợp nhất cho đoạn hội thoại trên là gì?",
        "options": [
          "A. HSK 4",
          "B. HSK 1",
          "C. HSK 5",
          "D. HSK 6"
        ],
        "correct": 1,
        "explanation": "Đáp án chính xác là B. HSK 1. Nội dung này được thể hiện trực tiếp trong bài nghe."
      }
    ]
  },
  {
    "id": 2,
    "level": "HSK 1",
    "title": "Hỏi tên",
    "audioText": "A: 你叫什么名字？\nB: 我叫李明，你呢？",
    "dialogue": [
      {
        "speaker": "A",
        "cn": "你叫什么名字？",
        "py": "Nǐ jiào shénme míngzi?",
        "vi": "Bạn tên là gì?"
      },
      {
        "speaker": "B",
        "cn": "我叫李明，你呢？",
        "py": "Wǒ jiào Lǐ Míng, nǐ ne?",
        "vi": "Tôi tên là Lý Minh, còn bạn?"
      }
    ],
    "questions": [
      {
        "id": 201,
        "question": "Chủ đề của đoạn hội thoại này là gì?",
        "options": [
          "A. Hỏi tên",
          "B. Đi du lịch nước ngoài",
          "C. Xem phim kinh dị",
          "D. Mua sắm xe hơi"
        ],
        "correct": 0,
        "explanation": "Đáp án chính xác là A. Hỏi tên. Nội dung này được thể hiện trực tiếp trong bài nghe."
      },
      {
        "id": 202,
        "question": "Người nói thứ nhất (A) đã nói câu nào?",
        "options": [
          "A. 你叫什么名字？",
          "B. 再见！ (Tạm biệt!)",
          "C. 我不知道。 (Tôi không biết.)",
          "D. 没关系。 (Không có gì.)"
        ],
        "correct": 0,
        "explanation": "Đáp án chính xác là A. 你叫什么名字？. Nội dung này được thể hiện trực tiếp trong bài nghe."
      },
      {
        "id": 203,
        "question": "Trình độ ngôn ngữ thích hợp nhất cho đoạn hội thoại trên là gì?",
        "options": [
          "A. HSK 4",
          "B. HSK 1",
          "C. HSK 5",
          "D. HSK 6"
        ],
        "correct": 1,
        "explanation": "Đáp án chính xác là B. HSK 1. Nội dung này được thể hiện trực tiếp trong bài nghe."
      }
    ]
  },
  {
    "id": 3,
    "level": "HSK 1",
    "title": "Hỏi quốc tịch",
    "audioText": "A: 你是哪国人？\nB: 我是越南人。我学习汉语。",
    "dialogue": [
      {
        "speaker": "A",
        "cn": "你是哪国人？",
        "py": "Nǐ shì nǎ guó rén?",
        "vi": "Bạn là người nước nào?"
      },
      {
        "speaker": "B",
        "cn": "我是越南人。我学习汉语。",
        "py": "Wǒ shì Yuènán rén. Wǒ xuéxí Hànyǔ.",
        "vi": "Tôi là người Việt Nam. Tôi học tiếng Trung."
      }
    ],
    "questions": [
      {
        "id": 301,
        "question": "Chủ đề của đoạn hội thoại này là gì?",
        "options": [
          "A. Hỏi quốc tịch",
          "B. Đi du lịch nước ngoài",
          "C. Xem phim kinh dị",
          "D. Mua sắm xe hơi"
        ],
        "correct": 0,
        "explanation": "Đáp án chính xác là A. Hỏi quốc tịch. Nội dung này được thể hiện trực tiếp trong bài nghe."
      },
      {
        "id": 302,
        "question": "Người nói thứ nhất (A) đã nói câu nào?",
        "options": [
          "A. 你是哪国人？",
          "B. 再见！ (Tạm biệt!)",
          "C. 我不知道。 (Tôi không biết.)",
          "D. 没关系。 (Không có gì.)"
        ],
        "correct": 0,
        "explanation": "Đáp án chính xác là A. 你是哪国人？. Nội dung này được thể hiện trực tiếp trong bài nghe."
      },
      {
        "id": 303,
        "question": "Trình độ ngôn ngữ thích hợp nhất cho đoạn hội thoại trên là gì?",
        "options": [
          "A. HSK 4",
          "B. HSK 1",
          "C. HSK 5",
          "D. HSK 6"
        ],
        "correct": 1,
        "explanation": "Đáp án chính xác là B. HSK 1. Nội dung này được thể hiện trực tiếp trong bài nghe."
      }
    ]
  },
  {
    "id": 4,
    "level": "HSK 1",
    "title": "Hỏi tuổi",
    "audioText": "A: 你今年多大？\nB: 我今年二十岁。",
    "dialogue": [
      {
        "speaker": "A",
        "cn": "你今年多大？",
        "py": "Nǐ jīnnián duō dà?",
        "vi": "Năm nay bạn bao nhiêu tuổi?"
      },
      {
        "speaker": "B",
        "cn": "我今年二十岁。",
        "py": "Wǒ jīnnián èrshí suì.",
        "vi": "Tôi năm nay hai mươi tuổi."
      }
    ],
    "questions": [
      {
        "id": 401,
        "question": "Chủ đề của đoạn hội thoại này là gì?",
        "options": [
          "A. Hỏi tuổi",
          "B. Đi du lịch nước ngoài",
          "C. Xem phim kinh dị",
          "D. Mua sắm xe hơi"
        ],
        "correct": 0,
        "explanation": "Đáp án chính xác là A. Hỏi tuổi. Nội dung này được thể hiện trực tiếp trong bài nghe."
      },
      {
        "id": 402,
        "question": "Người nói thứ nhất (A) đã nói câu nào?",
        "options": [
          "A. 你今年多大？",
          "B. 再见！ (Tạm biệt!)",
          "C. 我不知道。 (Tôi không biết.)",
          "D. 没关系。 (Không có gì.)"
        ],
        "correct": 0,
        "explanation": "Đáp án chính xác là A. 你今年多大？. Nội dung này được thể hiện trực tiếp trong bài nghe."
      },
      {
        "id": 403,
        "question": "Trình độ ngôn ngữ thích hợp nhất cho đoạn hội thoại trên là gì?",
        "options": [
          "A. HSK 4",
          "B. HSK 1",
          "C. HSK 5",
          "D. HSK 6"
        ],
        "correct": 1,
        "explanation": "Đáp án chính xác là B. HSK 1. Nội dung này được thể hiện trực tiếp trong bài nghe."
      }
    ]
  },
  {
    "id": 5,
    "level": "HSK 1",
    "title": "Thành viên gia đình",
    "audioText": "A: 你家 有几口人？\nB: 我家有四口人：爸爸、妈妈、哥哥和我。",
    "dialogue": [
      {
        "speaker": "A",
        "cn": "你家 有几口人？",
        "py": "Nǐ jiā yǒu jǐ kǒu rén?",
        "vi": "Nhà bạn có mấy người?"
      },
      {
        "speaker": "B",
        "cn": "我家有四口人：爸爸、妈妈、哥哥和我。",
        "py": "Wǒ jiā yǒu sì kǒu rén: bàba, māma, gēge hé wǒ.",
        "vi": "Nhà tôi có bốn người: bố, mẹ, anh trai và tôi."
      }
    ],
    "questions": [
      {
        "id": 501,
        "question": "Chủ đề của đoạn hội thoại này là gì?",
        "options": [
          "A. Thành viên gia đình",
          "B. Đi du lịch nước ngoài",
          "C. Xem phim kinh dị",
          "D. Mua sắm xe hơi"
        ],
        "correct": 0,
        "explanation": "Đáp án chính xác là A. Thành viên gia đình. Nội dung này được thể hiện trực tiếp trong bài nghe."
      },
      {
        "id": 502,
        "question": "Người nói thứ nhất (A) đã nói câu nào?",
        "options": [
          "A. 你家 有几口人？",
          "B. 再见！ (Tạm biệt!)",
          "C. 我不知道。 (Tôi không biết.)",
          "D. 没关系。 (Không có gì.)"
        ],
        "correct": 0,
        "explanation": "Đáp án chính xác là A. 你家 有几口人？. Nội dung này được thể hiện trực tiếp trong bài nghe."
      },
      {
        "id": 503,
        "question": "Trình độ ngôn ngữ thích hợp nhất cho đoạn hội thoại trên là gì?",
        "options": [
          "A. HSK 4",
          "B. HSK 1",
          "C. HSK 5",
          "D. HSK 6"
        ],
        "correct": 1,
        "explanation": "Đáp án chính xác là B. HSK 1. Nội dung này được thể hiện trực tiếp trong bài nghe."
      }
    ]
  },
  {
    "id": 6,
    "level": "HSK 1",
    "title": "Hỏi ngày tháng",
    "audioText": "A: 今天几月几号？\nB: 今天十月一号。",
    "dialogue": [
      {
        "speaker": "A",
        "cn": "今天几月几号？",
        "py": "Jīntiān jǐ yuè jǐ hào?",
        "vi": "Hôm nay là ngày mấy tháng mấy?"
      },
      {
        "speaker": "B",
        "cn": "今天十月一号。",
        "py": "Jīntiān shí yuè yī hào.",
        "vi": "Hôm nay là ngày một tháng mười."
      }
    ],
    "questions": [
      {
        "id": 601,
        "question": "Chủ đề của đoạn hội thoại này là gì?",
        "options": [
          "A. Hỏi ngày tháng",
          "B. Đi du lịch nước ngoài",
          "C. Xem phim kinh dị",
          "D. Mua sắm xe hơi"
        ],
        "correct": 0,
        "explanation": "Đáp án chính xác là A. Hỏi ngày tháng. Nội dung này được thể hiện trực tiếp trong bài nghe."
      },
      {
        "id": 602,
        "question": "Người nói thứ nhất (A) đã nói câu nào?",
        "options": [
          "A. 今天几月几号？",
          "B. 再见！ (Tạm biệt!)",
          "C. 我不知道。 (Tôi không biết.)",
          "D. 没关系。 (Không có gì.)"
        ],
        "correct": 0,
        "explanation": "Đáp án chính xác là A. 今天几月几号？. Nội dung này được thể hiện trực tiếp trong bài nghe."
      },
      {
        "id": 603,
        "question": "Trình độ ngôn ngữ thích hợp nhất cho đoạn hội thoại trên là gì?",
        "options": [
          "A. HSK 4",
          "B. HSK 1",
          "C. HSK 5",
          "D. HSK 6"
        ],
        "correct": 1,
        "explanation": "Đáp án chính xác là B. HSK 1. Nội dung này được thể hiện trực tiếp trong bài nghe."
      }
    ]
  },
  {
    "id": 7,
    "level": "HSK 1",
    "title": "Hỏi thứ trong tuần",
    "audioText": "A: 明天星期几？\nB: 明天星期六，我不去学校。",
    "dialogue": [
      {
        "speaker": "A",
        "cn": "明天星期几？",
        "py": "Míngtiān xīngqījǐ?",
        "vi": "Mai là thứ mấy?"
      },
      {
        "speaker": "B",
        "cn": "明天星期六，我不去学校。",
        "py": "Míngtiān xīngqīliù, wǒ bú qù xuéxiào.",
        "vi": "Mai là thứ bảy, tôi không đến trường."
      }
    ],
    "questions": [
      {
        "id": 701,
        "question": "Chủ đề của đoạn hội thoại này là gì?",
        "options": [
          "A. Hỏi thứ trong tuần",
          "B. Đi du lịch nước ngoài",
          "C. Xem phim kinh dị",
          "D. Mua sắm xe hơi"
        ],
        "correct": 0,
        "explanation": "Đáp án chính xác là A. Hỏi thứ trong tuần. Nội dung này được thể hiện trực tiếp trong bài nghe."
      },
      {
        "id": 702,
        "question": "Người nói thứ nhất (A) đã nói câu nào?",
        "options": [
          "A. 明天星期几？",
          "B. 再见！ (Tạm biệt!)",
          "C. 我不知道。 (Tôi không biết.)",
          "D. 没关系。 (Không có gì.)"
        ],
        "correct": 0,
        "explanation": "Đáp án chính xác là A. 明天星期几？. Nội dung này được thể hiện trực tiếp trong bài nghe."
      },
      {
        "id": 703,
        "question": "Trình độ ngôn ngữ thích hợp nhất cho đoạn hội thoại trên là gì?",
        "options": [
          "A. HSK 4",
          "B. HSK 1",
          "C. HSK 5",
          "D. HSK 6"
        ],
        "correct": 1,
        "explanation": "Đáp án chính xác là B. HSK 1. Nội dung này được thể hiện trực tiếp trong bài nghe."
      }
    ]
  },
  {
    "id": 8,
    "level": "HSK 1",
    "title": "Hỏi giờ giấc",
    "audioText": "A: 现在几点？\nB: 现在下午三点半。",
    "dialogue": [
      {
        "speaker": "A",
        "cn": "现在几点？",
        "py": "Xiànzài jǐ diǎn?",
        "vi": "Bây giờ là mấy giờ?"
      },
      {
        "speaker": "B",
        "cn": "现在下午三点半。",
        "py": "Xiànzài xiàwǔ sān diǎn bàn.",
        "vi": "Bây giờ là ba giờ rưỡi chiều."
      }
    ],
    "questions": [
      {
        "id": 801,
        "question": "Chủ đề của đoạn hội thoại này là gì?",
        "options": [
          "A. Hỏi giờ giấc",
          "B. Đi du lịch nước ngoài",
          "C. Xem phim kinh dị",
          "D. Mua sắm xe hơi"
        ],
        "correct": 0,
        "explanation": "Đáp án chính xác là A. Hỏi giờ giấc. Nội dung này được thể hiện trực tiếp trong bài nghe."
      },
      {
        "id": 802,
        "question": "Người nói thứ nhất (A) đã nói câu nào?",
        "options": [
          "A. 现在几点？",
          "B. 再见！ (Tạm biệt!)",
          "C. 我不知道。 (Tôi không biết.)",
          "D. 没关系。 (Không có gì.)"
        ],
        "correct": 0,
        "explanation": "Đáp án chính xác là A. 现在几点？. Nội dung này được thể hiện trực tiếp trong bài nghe."
      },
      {
        "id": 803,
        "question": "Trình độ ngôn ngữ thích hợp nhất cho đoạn hội thoại trên là gì?",
        "options": [
          "A. HSK 4",
          "B. HSK 1",
          "C. HSK 5",
          "D. HSK 6"
        ],
        "correct": 1,
        "explanation": "Đáp án chính xác là B. HSK 1. Nội dung này được thể hiện trực tiếp trong bài nghe."
      }
    ]
  },
  {
    "id": 9,
    "level": "HSK 1",
    "title": "Ăn cơm ở nhà hàng",
    "audioText": "A: 你想吃什么？\nB: 我想吃米饭和中国菜。",
    "dialogue": [
      {
        "speaker": "A",
        "cn": "你想吃什么？",
        "py": "Nǐ xiǎng chī shénme?",
        "vi": "Bạn muốn ăn gì?"
      },
      {
        "speaker": "B",
        "cn": "我想吃米饭和中国菜。",
        "py": "Wǒ xiǎng chī mǐfàn hé Zhōngguó cài.",
        "vi": "Tôi muốn ăn cơm và món ăn Trung Quốc."
      }
    ],
    "questions": [
      {
        "id": 901,
        "question": "Chủ đề của đoạn hội thoại này là gì?",
        "options": [
          "A. Ăn cơm ở nhà hàng",
          "B. Đi du lịch nước ngoài",
          "C. Xem phim kinh dị",
          "D. Mua sắm xe hơi"
        ],
        "correct": 0,
        "explanation": "Đáp án chính xác là A. Ăn cơm ở nhà hàng. Nội dung này được thể hiện trực tiếp trong bài nghe."
      },
      {
        "id": 902,
        "question": "Người nói thứ nhất (A) đã nói câu nào?",
        "options": [
          "A. 你想吃什么？",
          "B. 再见！ (Tạm biệt!)",
          "C. 我不知道。 (Tôi không biết.)",
          "D. 没关系。 (Không có gì.)"
        ],
        "correct": 0,
        "explanation": "Đáp án chính xác là A. 你想吃什么？. Nội dung này được thể hiện trực tiếp trong bài nghe."
      },
      {
        "id": 903,
        "question": "Trình độ ngôn ngữ thích hợp nhất cho đoạn hội thoại trên là gì?",
        "options": [
          "A. HSK 4",
          "B. HSK 1",
          "C. HSK 5",
          "D. HSK 6"
        ],
        "correct": 1,
        "explanation": "Đáp án chính xác là B. HSK 1. Nội dung này được thể hiện trực tiếp trong bài nghe."
      }
    ]
  },
  {
    "id": 10,
    "level": "HSK 1",
    "title": "Uống nước thức uống",
    "audioText": "A: 你想喝什么？\nB: 请给我一杯热茶，谢谢。",
    "dialogue": [
      {
        "speaker": "A",
        "cn": "你想喝什么？",
        "py": "Nǐ xiǎng hē shénme?",
        "vi": "Bạn muốn uống gì?"
      },
      {
        "speaker": "B",
        "cn": "请给我一杯热茶，谢谢。",
        "py": "Qǐng gěi wǒ yī bēi rè chá, xièxie.",
        "vi": "Xin cho tôi một ly trà nóng, cảm ơn."
      }
    ],
    "questions": [
      {
        "id": 1001,
        "question": "Chủ đề của đoạn hội thoại này là gì?",
        "options": [
          "A. Uống nước thức uống",
          "B. Đi du lịch nước ngoài",
          "C. Xem phim kinh dị",
          "D. Mua sắm xe hơi"
        ],
        "correct": 0,
        "explanation": "Đáp án chính xác là A. Uống nước thức uống. Nội dung này được thể hiện trực tiếp trong bài nghe."
      },
      {
        "id": 1002,
        "question": "Người nói thứ nhất (A) đã nói câu nào?",
        "options": [
          "A. 你想喝什么？",
          "B. 再见！ (Tạm biệt!)",
          "C. 我不知道。 (Tôi không biết.)",
          "D. 没关系。 (Không có gì.)"
        ],
        "correct": 0,
        "explanation": "Đáp án chính xác là A. 你想喝什么？. Nội dung này được thể hiện trực tiếp trong bài nghe."
      },
      {
        "id": 1003,
        "question": "Trình độ ngôn ngữ thích hợp nhất cho đoạn hội thoại trên là gì?",
        "options": [
          "A. HSK 4",
          "B. HSK 1",
          "C. HSK 5",
          "D. HSK 6"
        ],
        "correct": 1,
        "explanation": "Đáp án chính xác là B. HSK 1. Nội dung này được thể hiện trực tiếp trong bài nghe."
      }
    ]
  },
  {
    "id": 11,
    "level": "HSK 1",
    "title": "Mua trái cây",
    "audioText": "A: 苹果多少钱一斤？\nB: 三块钱一斤。",
    "dialogue": [
      {
        "speaker": "A",
        "cn": "苹果多少钱一斤？",
        "py": "Píngguǒ duōshǎo qián yī jīn?",
        "vi": "Táo bao nhiêu tiền một cân [0.5kg]?"
      },
      {
        "speaker": "B",
        "cn": "三块钱一斤。",
        "py": "Sān kuài qián yī jīn.",
        "vi": "Ba tệ một cân."
      }
    ],
    "questions": [
      {
        "id": 1101,
        "question": "Chủ đề của đoạn hội thoại này là gì?",
        "options": [
          "A. Mua trái cây",
          "B. Đi du lịch nước ngoài",
          "C. Xem phim kinh dị",
          "D. Mua sắm xe hơi"
        ],
        "correct": 0,
        "explanation": "Đáp án chính xác là A. Mua trái cây. Nội dung này được thể hiện trực tiếp trong bài nghe."
      },
      {
        "id": 1102,
        "question": "Người nói thứ nhất (A) đã nói câu nào?",
        "options": [
          "A. 苹果多少钱一斤？",
          "B. 再见！ (Tạm biệt!)",
          "C. 我不知道。 (Tôi không biết.)",
          "D. 没关系。 (Không có gì.)"
        ],
        "correct": 0,
        "explanation": "Đáp án chính xác là A. 苹果多少钱一斤？. Nội dung này được thể hiện trực tiếp trong bài nghe."
      },
      {
        "id": 1103,
        "question": "Trình độ ngôn ngữ thích hợp nhất cho đoạn hội thoại trên là gì?",
        "options": [
          "A. HSK 4",
          "B. HSK 1",
          "C. HSK 5",
          "D. HSK 6"
        ],
        "correct": 1,
        "explanation": "Đáp án chính xác là B. HSK 1. Nội dung này được thể hiện trực tiếp trong bài nghe."
      }
    ]
  },
  {
    "id": 12,
    "level": "HSK 1",
    "title": "Hỏi số lượng",
    "audioText": "A: 你买了几个杯子？\nB: 我买了一个大杯子。",
    "dialogue": [
      {
        "speaker": "A",
        "cn": "你买了几个杯子？",
        "py": "Nǐ mǎile jǐ gè bēizi?",
        "vi": "Bạn đã mua mấy cái cốc?"
      },
      {
        "speaker": "B",
        "cn": "我买了一个大杯子。",
        "py": "Wǒ mǎile yī gè dà bēizi.",
        "vi": "Tôi đã mua một cái cốc lớn."
      }
    ],
    "questions": [
      {
        "id": 1201,
        "question": "Chủ đề của đoạn hội thoại này là gì?",
        "options": [
          "A. Hỏi số lượng",
          "B. Đi du lịch nước ngoài",
          "C. Xem phim kinh dị",
          "D. Mua sắm xe hơi"
        ],
        "correct": 0,
        "explanation": "Đáp án chính xác là A. Hỏi số lượng. Nội dung này được thể hiện trực tiếp trong bài nghe."
      },
      {
        "id": 1202,
        "question": "Người nói thứ nhất (A) đã nói câu nào?",
        "options": [
          "A. 你买了几个杯子？",
          "B. 再见！ (Tạm biệt!)",
          "C. 我不知道。 (Tôi không biết.)",
          "D. 没关系。 (Không có gì.)"
        ],
        "correct": 0,
        "explanation": "Đáp án chính xác là A. 你买了几个杯子？. Nội dung này được thể hiện trực tiếp trong bài nghe."
      },
      {
        "id": 1203,
        "question": "Trình độ ngôn ngữ thích hợp nhất cho đoạn hội thoại trên là gì?",
        "options": [
          "A. HSK 4",
          "B. HSK 1",
          "C. HSK 5",
          "D. HSK 6"
        ],
        "correct": 1,
        "explanation": "Đáp án chính xác là B. HSK 1. Nội dung này được thể hiện trực tiếp trong bài nghe."
      }
    ]
  },
  {
    "id": 13,
    "level": "HSK 1",
    "title": "Học tiếng Trung",
    "audioText": "A: 你的汉语老师是谁？\nB: 我的汉语老师是王老师。",
    "dialogue": [
      {
        "speaker": "A",
        "cn": "你的汉语老师是谁？",
        "py": "Nǐ de Hànyǔ lǎoshī shì shéi?",
        "vi": "Giáo viên tiếng Trung của bạn là ai?"
      },
      {
        "speaker": "B",
        "cn": "我的汉语老师是王老师。",
        "py": "Wǒ de Hànyǔ lǎoshī shì Wáng lǎoshī.",
        "vi": "Giáo viên tiếng Trung của tôi là thầy/cô Vương."
      }
    ],
    "questions": [
      {
        "id": 1301,
        "question": "Chủ đề của đoạn hội thoại này là gì?",
        "options": [
          "A. Học tiếng Trung",
          "B. Đi du lịch nước ngoài",
          "C. Xem phim kinh dị",
          "D. Mua sắm xe hơi"
        ],
        "correct": 0,
        "explanation": "Đáp án chính xác là A. Học tiếng Trung. Nội dung này được thể hiện trực tiếp trong bài nghe."
      },
      {
        "id": 1302,
        "question": "Người nói thứ nhất (A) đã nói câu nào?",
        "options": [
          "A. 你的汉语老师是谁？",
          "B. 再见！ (Tạm biệt!)",
          "C. 我不知道。 (Tôi không biết.)",
          "D. 没关系。 (Không có gì.)"
        ],
        "correct": 0,
        "explanation": "Đáp án chính xác là A. 你的汉语老师是谁？. Nội dung này được thể hiện trực tiếp trong bài nghe."
      },
      {
        "id": 1303,
        "question": "Trình độ ngôn ngữ thích hợp nhất cho đoạn hội thoại trên là gì?",
        "options": [
          "A. HSK 4",
          "B. HSK 1",
          "C. HSK 5",
          "D. HSK 6"
        ],
        "correct": 1,
        "explanation": "Đáp án chính xác là B. HSK 1. Nội dung này được thể hiện trực tiếp trong bài nghe."
      }
    ]
  },
  {
    "id": 14,
    "level": "HSK 1",
    "title": "Đọc sách",
    "audioText": "A: 你喜欢看什么书？\nB: 我喜欢看汉语书，很有意思。",
    "dialogue": [
      {
        "speaker": "A",
        "cn": "你喜欢看什么书？",
        "py": "Nǐ xǐhuan kàn shénme shū?",
        "vi": "Bạn thích đọc sách gì?"
      },
      {
        "speaker": "B",
        "cn": "我喜欢看汉语书，很有意思。",
        "py": "Wǒ xǐhuan kàn Hànyǔ shū, hěn yǒu yìsi.",
        "vi": "Tôi thích đọc sách tiếng Trung, rất thú vị."
      }
    ],
    "questions": [
      {
        "id": 1401,
        "question": "Chủ đề của đoạn hội thoại này là gì?",
        "options": [
          "A. Đọc sách",
          "B. Đi du lịch nước ngoài",
          "C. Xem phim kinh dị",
          "D. Mua sắm xe hơi"
        ],
        "correct": 0,
        "explanation": "Đáp án chính xác là A. Đọc sách. Nội dung này được thể hiện trực tiếp trong bài nghe."
      },
      {
        "id": 1402,
        "question": "Người nói thứ nhất (A) đã nói câu nào?",
        "options": [
          "A. 你喜欢看什么书？",
          "B. 再见！ (Tạm biệt!)",
          "C. 我不知道。 (Tôi không biết.)",
          "D. 没关系。 (Không có gì.)"
        ],
        "correct": 0,
        "explanation": "Đáp án chính xác là A. 你喜欢看什么书？. Nội dung này được thể hiện trực tiếp trong bài nghe."
      },
      {
        "id": 1403,
        "question": "Trình độ ngôn ngữ thích hợp nhất cho đoạn hội thoại trên là gì?",
        "options": [
          "A. HSK 4",
          "B. HSK 1",
          "C. HSK 5",
          "D. HSK 6"
        ],
        "correct": 1,
        "explanation": "Đáp án chính xác là B. HSK 1. Nội dung này được thể hiện trực tiếp trong bài nghe."
      }
    ]
  },
  {
    "id": 15,
    "level": "HSK 1",
    "title": "Thời tiết hôm nay",
    "audioText": "A: 今天天气怎么样？\nB: 今天太热了，不刮风。",
    "dialogue": [
      {
        "speaker": "A",
        "cn": "今天天气怎么样？",
        "py": "Jīntiān tiānqì zěnmeyàng?",
        "vi": "Thời tiết hôm nay thế nào?"
      },
      {
        "speaker": "B",
        "cn": "今天太热了，不刮风。",
        "py": "Jīntiān tài rè le, bù guāfēng.",
        "vi": "Hôm nay nóng quá, không có gió."
      }
    ],
    "questions": [
      {
        "id": 1501,
        "question": "Chủ đề của đoạn hội thoại này là gì?",
        "options": [
          "A. Thời tiết hôm nay",
          "B. Đi du lịch nước ngoài",
          "C. Xem phim kinh dị",
          "D. Mua sắm xe hơi"
        ],
        "correct": 0,
        "explanation": "Đáp án chính xác là A. Thời tiết hôm nay. Nội dung này được thể hiện trực tiếp trong bài nghe."
      },
      {
        "id": 1502,
        "question": "Người nói thứ nhất (A) đã nói câu nào?",
        "options": [
          "A. 今天天气怎么样？",
          "B. 再见！ (Tạm biệt!)",
          "C. 我不知道。 (Tôi không biết.)",
          "D. 没关系。 (Không có gì.)"
        ],
        "correct": 0,
        "explanation": "Đáp án chính xác là A. 今天天气怎么样？. Nội dung này được thể hiện trực tiếp trong bài nghe."
      },
      {
        "id": 1503,
        "question": "Trình độ ngôn ngữ thích hợp nhất cho đoạn hội thoại trên là gì?",
        "options": [
          "A. HSK 4",
          "B. HSK 1",
          "C. HSK 5",
          "D. HSK 6"
        ],
        "correct": 1,
        "explanation": "Đáp án chính xác là B. HSK 1. Nội dung này được thể hiện trực tiếp trong bài nghe."
      }
    ]
  },
  {
    "id": 16,
    "level": "HSK 1",
    "title": "Trời mưa",
    "audioText": "A: 外面下雨了吗？\nB: 对，下大雨了，你别出去。",
    "dialogue": [
      {
        "speaker": "A",
        "cn": "外面下雨了吗？",
        "py": "Wàimiàn xiàyǔ le ma?",
        "vi": "Bên ngoài trời mưa à?"
      },
      {
        "speaker": "B",
        "cn": "对，下大雨了，你别出去。",
        "py": "Duì, xià dàyǔ le, nǐ bié chūqù.",
        "vi": "Đúng vậy, mưa to rồi, bạn đừng ra ngoài."
      }
    ],
    "questions": [
      {
        "id": 1601,
        "question": "Chủ đề của đoạn hội thoại này là gì?",
        "options": [
          "A. Trời mưa",
          "B. Đi du lịch nước ngoài",
          "C. Xem phim kinh dị",
          "D. Mua sắm xe hơi"
        ],
        "correct": 0,
        "explanation": "Đáp án chính xác là A. Trời mưa. Nội dung này được thể hiện trực tiếp trong bài nghe."
      },
      {
        "id": 1602,
        "question": "Người nói thứ nhất (A) đã nói câu nào?",
        "options": [
          "A. 外面下雨了吗？",
          "B. 再见！ (Tạm biệt!)",
          "C. 我不知道。 (Tôi không biết.)",
          "D. 没关系。 (Không có gì.)"
        ],
        "correct": 0,
        "explanation": "Đáp án chính xác là A. 外面下雨了吗？. Nội dung này được thể hiện trực tiếp trong bài nghe."
      },
      {
        "id": 1603,
        "question": "Trình độ ngôn ngữ thích hợp nhất cho đoạn hội thoại trên là gì?",
        "options": [
          "A. HSK 4",
          "B. HSK 1",
          "C. HSK 5",
          "D. HSK 6"
        ],
        "correct": 1,
        "explanation": "Đáp án chính xác là B. HSK 1. Nội dung này được thể hiện trực tiếp trong bài nghe."
      }
    ]
  },
  {
    "id": 17,
    "level": "HSK 1",
    "title": "Hỏi vị trí đồ vật",
    "audioText": "A: 我的电脑在哪儿？\nB: 在桌子上面。",
    "dialogue": [
      {
        "speaker": "A",
        "cn": "我的电脑在哪儿？",
        "py": "Wǒ de diànnǎo zài nǎr?",
        "vi": "Máy tính của tôi ở đâu?"
      },
      {
        "speaker": "B",
        "cn": "在桌子上面。",
        "py": "Zài zhuōzi shàngmian.",
        "vi": "Ở trên mặt bàn."
      }
    ],
    "questions": [
      {
        "id": 1701,
        "question": "Chủ đề của đoạn hội thoại này là gì?",
        "options": [
          "A. Hỏi vị trí đồ vật",
          "B. Đi du lịch nước ngoài",
          "C. Xem phim kinh dị",
          "D. Mua sắm xe hơi"
        ],
        "correct": 0,
        "explanation": "Đáp án chính xác là A. Hỏi vị trí đồ vật. Nội dung này được thể hiện trực tiếp trong bài nghe."
      },
      {
        "id": 1702,
        "question": "Người nói thứ nhất (A) đã nói câu nào?",
        "options": [
          "A. 我的电脑在哪儿？",
          "B. 再见！ (Tạm biệt!)",
          "C. 我不知道。 (Tôi không biết.)",
          "D. 没关系。 (Không có gì.)"
        ],
        "correct": 0,
        "explanation": "Đáp án chính xác là A. 我的电脑在哪儿？. Nội dung này được thể hiện trực tiếp trong bài nghe."
      },
      {
        "id": 1703,
        "question": "Trình độ ngôn ngữ thích hợp nhất cho đoạn hội thoại trên là gì?",
        "options": [
          "A. HSK 4",
          "B. HSK 1",
          "C. HSK 5",
          "D. HSK 6"
        ],
        "correct": 1,
        "explanation": "Đáp án chính xác là B. HSK 1. Nội dung này được thể hiện trực tiếp trong bài nghe."
      }
    ]
  },
  {
    "id": 18,
    "level": "HSK 1",
    "title": "Hỏi vị trí người",
    "audioText": "A: 张医生在医院吗？\nB: 他不在医院, 他在家里睡觉。",
    "dialogue": [
      {
        "speaker": "A",
        "cn": "张医生在医院吗？",
        "py": "Zhāng yīshēng zài yīyuàn ma?",
        "vi": "Bác sĩ Trương có ở bệnh viện không?"
      },
      {
        "speaker": "B",
        "cn": "他不在医院, 他在家里睡觉。",
        "py": "Tā bú zài yīyuàn, tā zài jiālǐ shuìjiào.",
        "vi": "Ông ấy không ở bệnh viện, ông ấy đang ngủ ở nhà."
      }
    ],
    "questions": [
      {
        "id": 1801,
        "question": "Chủ đề của đoạn hội thoại này là gì?",
        "options": [
          "A. Hỏi vị trí người",
          "B. Đi du lịch nước ngoài",
          "C. Xem phim kinh dị",
          "D. Mua sắm xe hơi"
        ],
        "correct": 0,
        "explanation": "Đáp án chính xác là A. Hỏi vị trí người. Nội dung này được thể hiện trực tiếp trong bài nghe."
      },
      {
        "id": 1802,
        "question": "Người nói thứ nhất (A) đã nói câu nào?",
        "options": [
          "A. 张医生在医院吗？",
          "B. 再见！ (Tạm biệt!)",
          "C. 我不知道。 (Tôi không biết.)",
          "D. 没关系。 (Không có gì.)"
        ],
        "correct": 0,
        "explanation": "Đáp án chính xác là A. 张医生在医院吗？. Nội dung này được thể hiện trực tiếp trong bài nghe."
      },
      {
        "id": 1803,
        "question": "Trình độ ngôn ngữ thích hợp nhất cho đoạn hội thoại trên là gì?",
        "options": [
          "A. HSK 4",
          "B. HSK 1",
          "C. HSK 5",
          "D. HSK 6"
        ],
        "correct": 1,
        "explanation": "Đáp án chính xác là B. HSK 1. Nội dung này được thể hiện trực tiếp trong bài nghe."
      }
    ]
  },
  {
    "id": 19,
    "level": "HSK 1",
    "title": "Đi phương tiện taxi",
    "audioText": "A: 我们怎么去火车站？\nB: 我们坐出租车去吧。",
    "dialogue": [
      {
        "speaker": "A",
        "cn": "我们怎么去火车站？",
        "py": "Wǒmen zěnme qù huǒchēzhàn?",
        "vi": "Chúng ta đi đến ga tàu bằng cách nào?"
      },
      {
        "speaker": "B",
        "cn": "我们坐出租车去吧。",
        "py": "Wǒmen zuò chūzūchē qù ba.",
        "vi": "Chúng ta đi taxi đi."
      }
    ],
    "questions": [
      {
        "id": 1901,
        "question": "Chủ đề của đoạn hội thoại này là gì?",
        "options": [
          "A. Đi phương tiện taxi",
          "B. Đi du lịch nước ngoài",
          "C. Xem phim kinh dị",
          "D. Mua sắm xe hơi"
        ],
        "correct": 0,
        "explanation": "Đáp án chính xác là A. Đi phương tiện taxi. Nội dung này được thể hiện trực tiếp trong bài nghe."
      },
      {
        "id": 1902,
        "question": "Người nói thứ nhất (A) đã nói câu nào?",
        "options": [
          "A. 我们怎么去火车站？",
          "B. 再见！ (Tạm biệt!)",
          "C. 我不知道。 (Tôi không biết.)",
          "D. 没关系。 (Không có gì.)"
        ],
        "correct": 0,
        "explanation": "Đáp án chính xác là A. 我们怎么去火车站？. Nội dung này được thể hiện trực tiếp trong bài nghe."
      },
      {
        "id": 1903,
        "question": "Trình độ ngôn ngữ thích hợp nhất cho đoạn hội thoại trên là gì?",
        "options": [
          "A. HSK 4",
          "B. HSK 1",
          "C. HSK 5",
          "D. HSK 6"
        ],
        "correct": 1,
        "explanation": "Đáp án chính xác là B. HSK 1. Nội dung này được thể hiện trực tiếp trong bài nghe."
      }
    ]
  },
  {
    "id": 20,
    "level": "HSK 1",
    "title": "Xem phim",
    "audioText": "A: 你星期五去看电影吗？\nB: 我不去，我要工作。",
    "dialogue": [
      {
        "speaker": "A",
        "cn": "你星期五去看电影吗？",
        "py": "Nǐ xīngqīwǔ qù kàn diànhuǐ ma?",
        "vi": "Thứ sáu bạn đi xem phim không?"
      },
      {
        "speaker": "B",
        "cn": "我不去，我要工作。",
        "py": "Wǒ bú qù, wǒ yào gōngzuò.",
        "vi": "Tôi không đi, tôi phải làm việc."
      }
    ],
    "questions": [
      {
        "id": 2001,
        "question": "Chủ đề của đoạn hội thoại này là gì?",
        "options": [
          "A. Xem phim",
          "B. Đi du lịch nước ngoài",
          "C. Xem phim kinh dị",
          "D. Mua sắm xe hơi"
        ],
        "correct": 0,
        "explanation": "Đáp án chính xác là A. Xem phim. Nội dung này được thể hiện trực tiếp trong bài nghe."
      },
      {
        "id": 2002,
        "question": "Người nói thứ nhất (A) đã nói câu nào?",
        "options": [
          "A. 你星期五去看电影吗？",
          "B. 再见！ (Tạm biệt!)",
          "C. 我不知道。 (Tôi không biết.)",
          "D. 没关系。 (Không có gì.)"
        ],
        "correct": 0,
        "explanation": "Đáp án chính xác là A. 你星期五去看电影吗？. Nội dung này được thể hiện trực tiếp trong bài nghe."
      },
      {
        "id": 2003,
        "question": "Trình độ ngôn ngữ thích hợp nhất cho đoạn hội thoại trên là gì?",
        "options": [
          "A. HSK 4",
          "B. HSK 1",
          "C. HSK 5",
          "D. HSK 6"
        ],
        "correct": 1,
        "explanation": "Đáp án chính xác là B. HSK 1. Nội dung này được thể hiện trực tiếp trong bài nghe."
      }
    ]
  },
  {
    "id": 21,
    "level": "HSK 1",
    "title": "Sở thích mua sắm",
    "audioText": "A: 你喜欢这件衣服吗？\nB: 很喜欢，但是太贵了。",
    "dialogue": [
      {
        "speaker": "A",
        "cn": "你喜欢这件衣服吗？",
        "py": "Nǐ xǐhuan zhè jiàn yīfu ma?",
        "vi": "Bạn thích bộ quần áo này không?"
      },
      {
        "speaker": "B",
        "cn": "很喜欢，但是太贵了。",
        "py": "Hěn xǐhuan, dànshì tài guì le.",
        "vi": "Rất thích, nhưng mà đắt quá."
      }
    ],
    "questions": [
      {
        "id": 2101,
        "question": "Chủ đề của đoạn hội thoại này là gì?",
        "options": [
          "A. Sở thích mua sắm",
          "B. Đi du lịch nước ngoài",
          "C. Xem phim kinh dị",
          "D. Mua sắm xe hơi"
        ],
        "correct": 0,
        "explanation": "Đáp án chính xác là A. Sở thích mua sắm. Nội dung này được thể hiện trực tiếp trong bài nghe."
      },
      {
        "id": 2102,
        "question": "Người nói thứ nhất (A) đã nói câu nào?",
        "options": [
          "A. 你喜欢这件衣服吗？",
          "B. 再见！ (Tạm biệt!)",
          "C. 我不知道。 (Tôi không biết.)",
          "D. 没关系。 (Không có gì.)"
        ],
        "correct": 0,
        "explanation": "Đáp án chính xác là A. 你喜欢这件衣服吗？. Nội dung này được thể hiện trực tiếp trong bài nghe."
      },
      {
        "id": 2103,
        "question": "Trình độ ngôn ngữ thích hợp nhất cho đoạn hội thoại trên là gì?",
        "options": [
          "A. HSK 4",
          "B. HSK 1",
          "C. HSK 5",
          "D. HSK 6"
        ],
        "correct": 1,
        "explanation": "Đáp án chính xác là B. HSK 1. Nội dung này được thể hiện trực tiếp trong bài nghe."
      }
    ]
  },
  {
    "id": 22,
    "level": "HSK 1",
    "title": "Gặp gỡ bạn bè",
    "audioText": "A: 后面那个人是谁？\nB: 那是 同学，他不高。",
    "dialogue": [
      {
        "speaker": "A",
        "cn": "后面那个人是谁？",
        "py": "Hòumiàn nà gè rén shì shéi?",
        "vi": "Người phía sau kia là ai vậy?"
      },
      {
        "speaker": "B",
        "cn": "那是 同学，他不高。",
        "py": "Nà shì wǒ tóngxué, tā bù gāo.",
        "vi": "Đó là bạn học của tôi, cậu ấy không cao."
      }
    ],
    "questions": [
      {
        "id": 2201,
        "question": "Chủ đề của đoạn hội thoại này là gì?",
        "options": [
          "A. Gặp gỡ bạn bè",
          "B. Đi du lịch nước ngoài",
          "C. Xem phim kinh dị",
          "D. Mua sắm xe hơi"
        ],
        "correct": 0,
        "explanation": "Đáp án chính xác là A. Gặp gỡ bạn bè. Nội dung này được thể hiện trực tiếp trong bài nghe."
      },
      {
        "id": 2202,
        "question": "Người nói thứ nhất (A) đã nói câu nào?",
        "options": [
          "A. 后面那个人是谁？",
          "B. 再见！ (Tạm biệt!)",
          "C. 我不知道。 (Tôi không biết.)",
          "D. 没关系。 (Không có gì.)"
        ],
        "correct": 0,
        "explanation": "Đáp án chính xác là A. 后面那个人是谁？. Nội dung này được thể hiện trực tiếp trong bài nghe."
      },
      {
        "id": 2203,
        "question": "Trình độ ngôn ngữ thích hợp nhất cho đoạn hội thoại trên là gì?",
        "options": [
          "A. HSK 4",
          "B. HSK 1",
          "C. HSK 5",
          "D. HSK 6"
        ],
        "correct": 1,
        "explanation": "Đáp án chính xác là B. HSK 1. Nội dung này được thể hiện trực tiếp trong bài nghe."
      }
    ]
  },
  {
    "id": 23,
    "level": "HSK 1",
    "title": "Gọi điện thoại",
    "audioText": "A: 喂，他在做什么呢？\nB: 他在听老师说话呢。",
    "dialogue": [
      {
        "speaker": "A",
        "cn": "喂，他在做什么呢？",
        "py": "Wéi, tā zài zuò shénme ne?",
        "vi": "Alo, anh ấy đang làm gì thế?"
      },
      {
        "speaker": "B",
        "cn": "他在听老师说话呢。",
        "py": "Tā zài tīng lǎoshī shuōhuà ne.",
        "vi": "Anh ấy đang nghe giáo viên nói chuyện."
      }
    ],
    "questions": [
      {
        "id": 2301,
        "question": "Chủ đề của đoạn hội thoại này là gì?",
        "options": [
          "A. Gọi điện thoại",
          "B. Đi du lịch nước ngoài",
          "C. Xem phim kinh dị",
          "D. Mua sắm xe hơi"
        ],
        "correct": 0,
        "explanation": "Đáp án chính xác là A. Gọi điện thoại. Nội dung này được thể hiện trực tiếp trong bài nghe."
      },
      {
        "id": 2302,
        "question": "Người nói thứ nhất (A) đã nói câu nào?",
        "options": [
          "A. 喂，他在做什么呢？",
          "B. 再见！ (Tạm biệt!)",
          "C. 我不知道。 (Tôi không biết.)",
          "D. 没关系。 (Không có gì.)"
        ],
        "correct": 0,
        "explanation": "Đáp án chính xác là A. 喂，他在做什么呢？. Nội dung này được thể hiện trực tiếp trong bài nghe."
      },
      {
        "id": 2303,
        "question": "Trình độ ngôn ngữ thích hợp nhất cho đoạn hội thoại trên là gì?",
        "options": [
          "A. HSK 4",
          "B. HSK 1",
          "C. HSK 5",
          "D. HSK 6"
        ],
        "correct": 1,
        "explanation": "Đáp án chính xác là B. HSK 1. Nội dung này được thể hiện trực tiếp trong bài nghe."
      }
    ]
  },
  {
    "id": 24,
    "level": "HSK 1",
    "title": "Nói về sức khỏe",
    "audioText": "A: 你身体怎么样？\nB: 我身体很好，谢谢你。",
    "dialogue": [
      {
        "speaker": "A",
        "cn": "你身体怎么样？",
        "py": "Nǐ shēntǐ zěnmeyàng?",
        "vi": "Sức khỏe của bạn thế nào?"
      },
      {
        "speaker": "B",
        "cn": "我身体很好，谢谢你。",
        "py": "Wǒ shēntǐ hěn hǎo, xièxie nǐ.",
        "vi": "Sức khỏe tôi rất tốt, cảm ơn bạn."
      }
    ],
    "questions": [
      {
        "id": 2401,
        "question": "Chủ đề của đoạn hội thoại này là gì?",
        "options": [
          "A. Nói về sức khỏe",
          "B. Đi du lịch nước ngoài",
          "C. Xem phim kinh dị",
          "D. Mua sắm xe hơi"
        ],
        "correct": 0,
        "explanation": "Đáp án chính xác là A. Nói về sức khỏe. Nội dung này được thể hiện trực tiếp trong bài nghe."
      },
      {
        "id": 2402,
        "question": "Người nói thứ nhất (A) đã nói câu nào?",
        "options": [
          "A. 你身体怎么样？",
          "B. 再见！ (Tạm biệt!)",
          "C. 我不知道。 (Tôi không biết.)",
          "D. 没关系。 (Không có gì.)"
        ],
        "correct": 0,
        "explanation": "Đáp án chính xác là A. 你身体怎么样？. Nội dung này được thể hiện trực tiếp trong bài nghe."
      },
      {
        "id": 2403,
        "question": "Trình độ ngôn ngữ thích hợp nhất cho đoạn hội thoại trên là gì?",
        "options": [
          "A. HSK 4",
          "B. HSK 1",
          "C. HSK 5",
          "D. HSK 6"
        ],
        "correct": 1,
        "explanation": "Đáp án chính xác là B. HSK 1. Nội dung này được thể hiện trực tiếp trong bài nghe."
      }
    ]
  },
  {
    "id": 25,
    "level": "HSK 1",
    "title": "Số điện thoại",
    "audioText": "A: 你的电话号码是多少？\nB: 是六八九五四三二一。",
    "dialogue": [
      {
        "speaker": "A",
        "cn": "你的电话号码是多少？",
        "py": "Nǐ de diànhuà hàomǎ shì duōshǎo?",
        "vi": "Số điện thoại của bạn là bao nhiêu?"
      },
      {
        "speaker": "B",
        "cn": "是六八九五四三二一。",
        "py": "Shì liù bā jiǔ wǔ sì sān èr yī.",
        "vi": "Là 68954321."
      }
    ],
    "questions": [
      {
        "id": 2501,
        "question": "Chủ đề của đoạn hội thoại này là gì?",
        "options": [
          "A. Số điện thoại",
          "B. Đi du lịch nước ngoài",
          "C. Xem phim kinh dị",
          "D. Mua sắm xe hơi"
        ],
        "correct": 0,
        "explanation": "Đáp án chính xác là A. Số điện thoại. Nội dung này được thể hiện trực tiếp trong bài nghe."
      },
      {
        "id": 2502,
        "question": "Người nói thứ nhất (A) đã nói câu nào?",
        "options": [
          "A. 你的电话号码是多少？",
          "B. 再见！ (Tạm biệt!)",
          "C. 我不知道。 (Tôi không biết.)",
          "D. 没关系。 (Không có gì.)"
        ],
        "correct": 0,
        "explanation": "Đáp án chính xác là A. 你的电话号码是多少？. Nội dung này được thể hiện trực tiếp trong bài nghe."
      },
      {
        "id": 2503,
        "question": "Trình độ ngôn ngữ thích hợp nhất cho đoạn hội thoại trên là gì?",
        "options": [
          "A. HSK 4",
          "B. HSK 1",
          "C. HSK 5",
          "D. HSK 6"
        ],
        "correct": 1,
        "explanation": "Đáp án chính xác là B. HSK 1. Nội dung này được thể hiện trực tiếp trong bài nghe."
      }
    ]
  },
  {
    "id": 26,
    "level": "HSK 1",
    "title": "Sống ở đâu",
    "audioText": "A: 你现在住在哪儿？\nB: 我住在北京大学里面。",
    "dialogue": [
      {
        "speaker": "A",
        "cn": "你现在住在哪儿？",
        "py": "Nǐ xiànzài zhù zài nǎr?",
        "vi": "Bây giờ bạn sống ở đâu?"
      },
      {
        "speaker": "B",
        "cn": "我住在北京大学里面。",
        "py": "Wǒ zhù zài Běijīng Dàxué lǐmian.",
        "vi": "Tôi sống ở trong trường Đại học Bắc Kinh."
      }
    ],
    "questions": [
      {
        "id": 2601,
        "question": "Chủ đề của đoạn hội thoại này là gì?",
        "options": [
          "A. Sống ở đâu",
          "B. Đi du lịch nước ngoài",
          "C. Xem phim kinh dị",
          "D. Mua sắm xe hơi"
        ],
        "correct": 0,
        "explanation": "Đáp án chính xác là A. Sống ở đâu. Nội dung này được thể hiện trực tiếp trong bài nghe."
      },
      {
        "id": 2602,
        "question": "Người nói thứ nhất (A) đã nói câu nào?",
        "options": [
          "A. 你现在住在哪儿？",
          "B. 再见！ (Tạm biệt!)",
          "C. 我不知道。 (Tôi không biết.)",
          "D. 没关系。 (Không có gì.)"
        ],
        "correct": 0,
        "explanation": "Đáp án chính xác là A. 你现在住在哪儿？. Nội dung này được thể hiện trực tiếp trong bài nghe."
      },
      {
        "id": 2603,
        "question": "Trình độ ngôn ngữ thích hợp nhất cho đoạn hội thoại trên là gì?",
        "options": [
          "A. HSK 4",
          "B. HSK 1",
          "C. HSK 5",
          "D. HSK 6"
        ],
        "correct": 1,
        "explanation": "Đáp án chính xác là B. HSK 1. Nội dung này được thể hiện trực tiếp trong bài nghe."
      }
    ]
  },
  {
    "id": 27,
    "level": "HSK 1",
    "title": "Trình độ tiếng Trung",
    "audioText": "A: 你会 汉语吗？\nB: 我会说一点儿，不难。",
    "dialogue": [
      {
        "speaker": "A",
        "cn": "你会 汉语吗？",
        "py": "Nǐ huì shuō Hànyǔ ma?",
        "vi": "Bạn biết nói tiếng Trung không?"
      },
      {
        "speaker": "B",
        "cn": "我会说一点儿，不难。",
        "py": "Wǒ huì shuō yīdiǎnr, bù nán.",
        "vi": "Tôi biết nói một chút, không khó."
      }
    ],
    "questions": [
      {
        "id": 2701,
        "question": "Chủ đề của đoạn hội thoại này là gì?",
        "options": [
          "A. Trình độ tiếng Trung",
          "B. Đi du lịch nước ngoài",
          "C. Xem phim kinh dị",
          "D. Mua sắm xe hơi"
        ],
        "correct": 0,
        "explanation": "Đáp án chính xác là A. Trình độ tiếng Trung. Nội dung này được thể hiện trực tiếp trong bài nghe."
      },
      {
        "id": 2702,
        "question": "Người nói thứ nhất (A) đã nói câu nào?",
        "options": [
          "A. 你会 汉语吗？",
          "B. 再见！ (Tạm biệt!)",
          "C. 我不知道。 (Tôi không biết.)",
          "D. 没关系。 (Không có gì.)"
        ],
        "correct": 0,
        "explanation": "Đáp án chính xác là A. 你会 汉语吗？. Nội dung này được thể hiện trực tiếp trong bài nghe."
      },
      {
        "id": 2703,
        "question": "Trình độ ngôn ngữ thích hợp nhất cho đoạn hội thoại trên là gì?",
        "options": [
          "A. HSK 4",
          "B. HSK 1",
          "C. HSK 5",
          "D. HSK 6"
        ],
        "correct": 1,
        "explanation": "Đáp án chính xác là B. HSK 1. Nội dung này được thể hiện trực tiếp trong bài nghe."
      }
    ]
  },
  {
    "id": 28,
    "level": "HSK 1",
    "title": "Biết viết chữ Hán",
    "audioText": "A: 你会写这个字吗？\nB: 我会读，不会写。",
    "dialogue": [
      {
        "speaker": "A",
        "cn": "你会写这个字吗？",
        "py": "Nǐ huì xiě zhège zì ma?",
        "vi": "Bạn biết viết chữ này không?"
      },
      {
        "speaker": "B",
        "cn": "我会读，不会写。",
        "py": "Wǒ huì dú, bú huì xiě.",
        "vi": "Tôi biết đọc, không biết viết."
      }
    ],
    "questions": [
      {
        "id": 2801,
        "question": "Chủ đề của đoạn hội thoại này là gì?",
        "options": [
          "A. Biết viết chữ Hán",
          "B. Đi du lịch nước ngoài",
          "C. Xem phim kinh dị",
          "D. Mua sắm xe hơi"
        ],
        "correct": 0,
        "explanation": "Đáp án chính xác là A. Biết viết chữ Hán. Nội dung này được thể hiện trực tiếp trong bài nghe."
      },
      {
        "id": 2802,
        "question": "Người nói thứ nhất (A) đã nói câu nào?",
        "options": [
          "A. 你会写这个字吗？",
          "B. 再见！ (Tạm biệt!)",
          "C. 我不知道。 (Tôi không biết.)",
          "D. 没关系。 (Không có gì.)"
        ],
        "correct": 0,
        "explanation": "Đáp án chính xác là A. 你会写这个字吗？. Nội dung này được thể hiện trực tiếp trong bài nghe."
      },
      {
        "id": 2803,
        "question": "Trình độ ngôn ngữ thích hợp nhất cho đoạn hội thoại trên là gì?",
        "options": [
          "A. HSK 4",
          "B. HSK 1",
          "C. HSK 5",
          "D. HSK 6"
        ],
        "correct": 1,
        "explanation": "Đáp án chính xác là B. HSK 1. Nội dung này được thể hiện trực tiếp trong bài nghe."
      }
    ]
  },
  {
    "id": 29,
    "level": "HSK 1",
    "title": "Thức dậy buổi sáng",
    "audioText": "A: 你明天几点起床？\nB: 我早上六点起床。",
    "dialogue": [
      {
        "speaker": "A",
        "cn": "你明天几点起床？",
        "py": "Nǐ míngtiān jǐ diǎn qǐchuáng?",
        "vi": "Mai mấy giờ bạn thức dậy?"
      },
      {
        "speaker": "B",
        "cn": "我早上六点起床。",
        "py": "Wǒ zǎoshang liù diǎn qǐchuáng.",
        "vi": "Tôi thức dậy lúc 6 giờ sáng."
      }
    ],
    "questions": [
      {
        "id": 2901,
        "question": "Chủ đề của đoạn hội thoại này là gì?",
        "options": [
          "A. Thức dậy buổi sáng",
          "B. Đi du lịch nước ngoài",
          "C. Xem phim kinh dị",
          "D. Mua sắm xe hơi"
        ],
        "correct": 0,
        "explanation": "Đáp án chính xác là A. Thức dậy buổi sáng. Nội dung này được thể hiện trực tiếp trong bài nghe."
      },
      {
        "id": 2902,
        "question": "Người nói thứ nhất (A) đã nói câu nào?",
        "options": [
          "A. 你明天几点起床？",
          "B. 再见！ (Tạm biệt!)",
          "C. 我不知道。 (Tôi không biết.)",
          "D. 没关系。 (Không có gì.)"
        ],
        "correct": 0,
        "explanation": "Đáp án chính xác là A. 你明天几点起床？. Nội dung này được thể hiện trực tiếp trong bài nghe."
      },
      {
        "id": 2903,
        "question": "Trình độ ngôn ngữ thích hợp nhất cho đoạn hội thoại trên là gì?",
        "options": [
          "A. HSK 4",
          "B. HSK 1",
          "C. HSK 5",
          "D. HSK 6"
        ],
        "correct": 1,
        "explanation": "Đáp án chính xác là B. HSK 1. Nội dung này được thể hiện trực tiếp trong bài nghe."
      }
    ]
  },
  {
    "id": 30,
    "level": "HSK 1",
    "title": "Làm việc ở đâu",
    "audioText": "A: 你的女儿在哪儿工作？\nB: 她在商店工作，她是服务员。",
    "dialogue": [
      {
        "speaker": "A",
        "cn": "你的女儿在哪儿工作？",
        "py": "Nǐ de nǚ'ér zài nǎr gōngzuò?",
        "vi": "Con gái bạn làm việc ở đâu?"
      },
      {
        "speaker": "B",
        "cn": "她在商店工作，她是服务员。",
        "py": "Tā zài shāngdiàn gōngzuò, tā shì fúwùyuán.",
        "vi": "Cô ấy làm việc ở cửa hàng, cô ấy là nhân viên phục vụ."
      }
    ],
    "questions": [
      {
        "id": 3001,
        "question": "Chủ đề của đoạn hội thoại này là gì?",
        "options": [
          "A. Làm việc ở đâu",
          "B. Đi du lịch nước ngoài",
          "C. Xem phim kinh dị",
          "D. Mua sắm xe hơi"
        ],
        "correct": 0,
        "explanation": "Đáp án chính xác là A. Làm việc ở đâu. Nội dung này được thể hiện trực tiếp trong bài nghe."
      },
      {
        "id": 3002,
        "question": "Người nói thứ nhất (A) đã nói câu nào?",
        "options": [
          "A. 你的女儿在哪儿工作？",
          "B. 再见！ (Tạm biệt!)",
          "C. 我不知道。 (Tôi không biết.)",
          "D. 没关系。 (Không có gì.)"
        ],
        "correct": 0,
        "explanation": "Đáp án chính xác là A. 你的女儿在哪儿工作？. Nội dung này được thể hiện trực tiếp trong bài nghe."
      },
      {
        "id": 3003,
        "question": "Trình độ ngôn ngữ thích hợp nhất cho đoạn hội thoại trên là gì?",
        "options": [
          "A. HSK 4",
          "B. HSK 1",
          "C. HSK 5",
          "D. HSK 6"
        ],
        "correct": 1,
        "explanation": "Đáp án chính xác là B. HSK 1. Nội dung này được thể hiện trực tiếp trong bài nghe."
      }
    ]
  },
  {
    "id": 31,
    "level": "HSK 2",
    "title": "Đi du lịch",
    "audioText": "A: 你准备去哪儿旅游？\nB: 我想去北京，因为那里有很多好玩的地方。",
    "dialogue": [
      {
        "speaker": "A",
        "cn": "你准备去哪儿旅游？",
        "py": "Nǐ zhǔnbèi qù nǎr lǚyóu?",
        "vi": "Bạn chuẩn bị đi du lịch ở đâu?"
      },
      {
        "speaker": "B",
        "cn": "我想去北京，因为那里有很多好玩的地方。",
        "py": "Wǒ xiǎng qù Běijīng, yīnwèi nàlǐ yǒu hěnduō hǎowán de dìfang.",
        "vi": "Tôi muốn đi Bắc Kinh, vì ở đó có rất nhiều nơi vui chơi."
      }
    ],
    "questions": [
      {
        "id": 3101,
        "question": "Đoạn hội thoại đề cập đến bối cảnh/chủ đề nào?",
        "options": [
          "A. Đi du lịch",
          "B. Mua bán bất động sản cao cấp",
          "C. Đi khám bệnh nha khoa",
          "D. Học lái máy bay"
        ],
        "correct": 0,
        "explanation": "Đáp án chính xác là A. Đi du lịch. Nội dung này được thể hiện trực tiếp trong bài nghe."
      },
      {
        "id": 3102,
        "question": "Ngôn ngữ biểu đạt trong đoạn hội thoại thuộc trình độ nào?",
        "options": [
          "A. HSK 6",
          "B. HSK 5",
          "C. HSK 2",
          "D. HSK 1"
        ],
        "correct": 2,
        "explanation": "Đáp án chính xác là C. HSK 2. Nội dung này được thể hiện trực tiếp trong bài nghe."
      },
      {
        "id": 3103,
        "question": "Mục đích chính của cuộc trao đổi giữa hai nhân vật là gì?",
        "options": [
          "A. Chia sẻ thông tin liên quan đến cuộc sống hàng ngày",
          "B. Tranh luận về chính trị",
          "C. Đàm phán hợp đồng kinh tế",
          "D. Ký kết thỏa thuận hợp tác thương mại"
        ],
        "correct": 0,
        "explanation": "Đáp án chính xác là A. Chia sẻ thông tin liên quan đến cuộc sống hàng ngày. Nội dung này được thể hiện trực tiếp trong bài nghe."
      }
    ]
  },
  {
    "id": 32,
    "level": "HSK 2",
    "title": "Sức khỏe & Thể thao",
    "audioText": "A: 你每天都跑步吗？\nB: 对，跑步对身体很好，我已经坚持一年了。",
    "dialogue": [
      {
        "speaker": "A",
        "cn": "你每天都跑步吗？",
        "py": "Nǐ měitiān dōu pǎobù ma?",
        "vi": "Mỗi ngày bạn đều chạy bộ à?"
      },
      {
        "speaker": "B",
        "cn": "对，跑步对身体很好，我已经坚持一年了。",
        "py": "Duì, pǎobù duì shēntǐ hěn hǎo, wǒ yǐjīng jiānchí yī nián le.",
        "vi": "Đúng vậy, chạy bộ rất tốt cho cơ thể, tôi đã kiên trì một năm rồi."
      }
    ],
    "questions": [
      {
        "id": 3201,
        "question": "Đoạn hội thoại đề cập đến bối cảnh/chủ đề nào?",
        "options": [
          "A. Sức khỏe & Thể thao",
          "B. Mua bán bất động sản cao cấp",
          "C. Đi khám bệnh nha khoa",
          "D. Học lái máy bay"
        ],
        "correct": 0,
        "explanation": "Đáp án chính xác là A. Sức khỏe & Thể thao. Nội dung này được thể hiện trực tiếp trong bài nghe."
      },
      {
        "id": 3202,
        "question": "Ngôn ngữ biểu đạt trong đoạn hội thoại thuộc trình độ nào?",
        "options": [
          "A. HSK 6",
          "B. HSK 5",
          "C. HSK 2",
          "D. HSK 1"
        ],
        "correct": 2,
        "explanation": "Đáp án chính xác là C. HSK 2. Nội dung này được thể hiện trực tiếp trong bài nghe."
      },
      {
        "id": 3203,
        "question": "Mục đích chính của cuộc trao đổi giữa hai nhân vật là gì?",
        "options": [
          "A. Chia sẻ thông tin liên quan đến cuộc sống hàng ngày",
          "B. Tranh luận về chính trị",
          "C. Đàm phán hợp đồng kinh tế",
          "D. Ký kết thỏa thuận hợp tác thương mại"
        ],
        "correct": 0,
        "explanation": "Đáp án chính xác là A. Chia sẻ thông tin liên quan đến cuộc sống hàng ngày. Nội dung này được thể hiện trực tiếp trong bài nghe."
      }
    ]
  },
  {
    "id": 33,
    "level": "HSK 2",
    "title": "Mượn sách thư viện",
    "audioText": "A: 这本书你看了吗？\nB: 还没呢，这是我昨天从学校图书馆借的。",
    "dialogue": [
      {
        "speaker": "A",
        "cn": "这本书你看了吗？",
        "py": "Zhè běn shū nǐ kànle ma?",
        "vi": "Cuốn sách này bạn đã đọc chưa?"
      },
      {
        "speaker": "B",
        "cn": "还没呢，这是我昨天从学校图书馆借的。",
        "py": "Hái méi ne, zhè shì wǒ zuótiān cóng xuéxiào túshūguǎn jiè de.",
        "vi": "Chưa nữa, đây là cuốn tôi mượn từ thư viện trường hôm qua."
      }
    ],
    "questions": [
      {
        "id": 3301,
        "question": "Đoạn hội thoại đề cập đến bối cảnh/chủ đề nào?",
        "options": [
          "A. Mượn sách thư viện",
          "B. Mua bán bất động sản cao cấp",
          "C. Đi khám bệnh nha khoa",
          "D. Học lái máy bay"
        ],
        "correct": 0,
        "explanation": "Đáp án chính xác là A. Mượn sách thư viện. Nội dung này được thể hiện trực tiếp trong bài nghe."
      },
      {
        "id": 3302,
        "question": "Ngôn ngữ biểu đạt trong đoạn hội thoại thuộc trình độ nào?",
        "options": [
          "A. HSK 6",
          "B. HSK 5",
          "C. HSK 2",
          "D. HSK 1"
        ],
        "correct": 2,
        "explanation": "Đáp án chính xác là C. HSK 2. Nội dung này được thể hiện trực tiếp trong bài nghe."
      },
      {
        "id": 3303,
        "question": "Mục đích chính của cuộc trao đổi giữa hai nhân vật là gì?",
        "options": [
          "A. Chia sẻ thông tin liên quan đến cuộc sống hàng ngày",
          "B. Tranh luận về chính trị",
          "C. Đàm phán hợp đồng kinh tế",
          "D. Ký kết thỏa thuận hợp tác thương mại"
        ],
        "correct": 0,
        "explanation": "Đáp án chính xác là A. Chia sẻ thông tin liên quan đến cuộc sống hàng ngày. Nội dung này được thể hiện trực tiếp trong bài nghe."
      }
    ]
  },
  {
    "id": 34,
    "level": "HSK 2",
    "title": "Thời tiết chuyển mùa",
    "audioText": "A: 外面天阴了，可能要下雪。\nB: 那你出门记得多穿点衣服，外面冷。",
    "dialogue": [
      {
        "speaker": "A",
        "cn": "外面天阴了，可能要下雪。",
        "py": "Wàimiàn tiān yīn le, kěnéng yào xiàxuě.",
        "vi": "Bên ngoài trời âm u rồi, có thể sắp có tuyết rơi."
      },
      {
        "speaker": "B",
        "cn": "那你出门记得多穿点衣服，外面冷。",
        "py": "Nà nǐ chūmén jìde duō chuān diǎn yīfu, wài miàn lěng.",
        "vi": "Vậy bạn ra ngoài nhớ mặc nhiều áo một chút, bên ngoài lạnh."
      }
    ],
    "questions": [
      {
        "id": 3401,
        "question": "Đoạn hội thoại đề cập đến bối cảnh/chủ đề nào?",
        "options": [
          "A. Thời tiết chuyển mùa",
          "B. Mua bán bất động sản cao cấp",
          "C. Đi khám bệnh nha khoa",
          "D. Học lái máy bay"
        ],
        "correct": 0,
        "explanation": "Đáp án chính xác là A. Thời tiết chuyển mùa. Nội dung này được thể hiện trực tiếp trong bài nghe."
      },
      {
        "id": 3402,
        "question": "Ngôn ngữ biểu đạt trong đoạn hội thoại thuộc trình độ nào?",
        "options": [
          "A. HSK 6",
          "B. HSK 5",
          "C. HSK 2",
          "D. HSK 1"
        ],
        "correct": 2,
        "explanation": "Đáp án chính xác là C. HSK 2. Nội dung này được thể hiện trực tiếp trong bài nghe."
      },
      {
        "id": 3403,
        "question": "Mục đích chính của cuộc trao đổi giữa hai nhân vật là gì?",
        "options": [
          "A. Chia sẻ thông tin liên quan đến cuộc sống hàng ngày",
          "B. Tranh luận về chính trị",
          "C. Đàm phán hợp đồng kinh tế",
          "D. Ký kết thỏa thuận hợp tác thương mại"
        ],
        "correct": 0,
        "explanation": "Đáp án chính xác là A. Chia sẻ thông tin liên quan đến cuộc sống hàng ngày. Nội dung này được thể hiện trực tiếp trong bài nghe."
      }
    ]
  },
  {
    "id": 35,
    "level": "HSK 2",
    "title": "Tặng quà sinh nhật",
    "audioText": "A: 生日快乐！这是送给你的礼物。\nB: 谢谢你！打开看看是什么，哇，是一本书！",
    "dialogue": [
      {
        "speaker": "A",
        "cn": "生日快乐！这是送给你的礼物。",
        "py": "Shēngrì kuàilè! Zhè shì sòng gěi nǐ de lǐwù.",
        "vi": "Sinh nhật vui vẻ! Đây là món quà tặng bạn."
      },
      {
        "speaker": "B",
        "cn": "谢谢你！打开看看是什么，哇，是一本书！",
        "py": "Xièxie nǐ! Dǎkāi kànkàn shì shénme, wa, shì yī běn shū!",
        "vi": "Cảm ơn bạn! Mở ra xem là cái gì nào, oa, là một cuốn sách!"
      }
    ],
    "questions": [
      {
        "id": 3501,
        "question": "Đoạn hội thoại đề cập đến bối cảnh/chủ đề nào?",
        "options": [
          "A. Tặng quà sinh nhật",
          "B. Mua bán bất động sản cao cấp",
          "C. Đi khám bệnh nha khoa",
          "D. Học lái máy bay"
        ],
        "correct": 0,
        "explanation": "Đáp án chính xác là A. Tặng quà sinh nhật. Nội dung này được thể hiện trực tiếp trong bài nghe."
      },
      {
        "id": 3502,
        "question": "Ngôn ngữ biểu đạt trong đoạn hội thoại thuộc trình độ nào?",
        "options": [
          "A. HSK 6",
          "B. HSK 5",
          "C. HSK 2",
          "D. HSK 1"
        ],
        "correct": 2,
        "explanation": "Đáp án chính xác là C. HSK 2. Nội dung này được thể hiện trực tiếp trong bài nghe."
      },
      {
        "id": 3503,
        "question": "Mục đích chính của cuộc trao đổi giữa hai nhân vật là gì?",
        "options": [
          "A. Chia sẻ thông tin liên quan đến cuộc sống hàng ngày",
          "B. Tranh luận về chính trị",
          "C. Đàm phán hợp đồng kinh tế",
          "D. Ký kết thỏa thuận hợp tác thương mại"
        ],
        "correct": 0,
        "explanation": "Đáp án chính xác là A. Chia sẻ thông tin liên quan đến cuộc sống hàng ngày. Nội dung này được thể hiện trực tiếp trong bài nghe."
      }
    ]
  },
  {
    "id": 36,
    "level": "HSK 2",
    "title": "Đi phương tiện công cộng",
    "audioText": "A: 我们怎么去机场？坐地铁还是公共汽车？\nB: 坐地铁吧，地铁比公共汽车快得多。",
    "dialogue": [
      {
        "speaker": "A",
        "cn": "我们怎么去机场？坐地铁还是公共汽车？",
        "py": "Wǒmen zěnme qù jīchǎng? Zuò dìtiě háishì gōnggòng qìchē?",
        "vi": "Chúng ta đi sân bay bằng cách nào? Đi tàu điện ngầm hay xe buýt?"
      },
      {
        "speaker": "B",
        "cn": "坐地铁吧，地铁比公共汽车快得多。",
        "py": "Zuò dìtiě ba, dìtiě bǐ gōnggòng qìchē kuài dé duō.",
        "vi": "Đi tàu điện ngầm đi, tàu điện ngầm nhanh hơn xe buýt nhiều."
      }
    ],
    "questions": [
      {
        "id": 3601,
        "question": "Đoạn hội thoại đề cập đến bối cảnh/chủ đề nào?",
        "options": [
          "A. Đi phương tiện công cộng",
          "B. Mua bán bất động sản cao cấp",
          "C. Đi khám bệnh nha khoa",
          "D. Học lái máy bay"
        ],
        "correct": 0,
        "explanation": "Đáp án chính xác là A. Đi phương tiện công cộng. Nội dung này được thể hiện trực tiếp trong bài nghe."
      },
      {
        "id": 3602,
        "question": "Ngôn ngữ biểu đạt trong đoạn hội thoại thuộc trình độ nào?",
        "options": [
          "A. HSK 6",
          "B. HSK 5",
          "C. HSK 2",
          "D. HSK 1"
        ],
        "correct": 2,
        "explanation": "Đáp án chính xác là C. HSK 2. Nội dung này được thể hiện trực tiếp trong bài nghe."
      },
      {
        "id": 3603,
        "question": "Mục đích chính của cuộc trao đổi giữa hai nhân vật là gì?",
        "options": [
          "A. Chia sẻ thông tin liên quan đến cuộc sống hàng ngày",
          "B. Tranh luận về chính trị",
          "C. Đàm phán hợp đồng kinh tế",
          "D. Ký kết thỏa thuận hợp tác thương mại"
        ],
        "correct": 0,
        "explanation": "Đáp án chính xác là A. Chia sẻ thông tin liên quan đến cuộc sống hàng ngày. Nội dung này được thể hiện trực tiếp trong bài nghe."
      }
    ]
  },
  {
    "id": 37,
    "level": "HSK 2",
    "title": "Món ăn gia đình",
    "audioText": "A: 今天的羊肉做得真好吃，你多吃点。\nB: 好的，谢谢，我自己来，您也别客气。",
    "dialogue": [
      {
        "speaker": "A",
        "cn": "今天的羊肉做得真好吃，你多吃点。",
        "py": "Jīntiān de yángròu zuò dé zhēn hǎochī, nǐ duō chī diǎn.",
        "vi": "Món thịt cừu hôm nay làm ngon thật đấy, bạn ăn nhiều một chút nhé."
      },
      {
        "speaker": "B",
        "cn": "好的，谢谢，我自己来，您也别客气。",
        "py": "Hǎo de, xièxie, wǒ zìjǐ lái, nín yě bié kèqi.",
        "vi": "Vạ vâng cảm ơn, tôi tự nhiên ạ, bác cũng đừng khách sáo."
      }
    ],
    "questions": [
      {
        "id": 3701,
        "question": "Đoạn hội thoại đề cập đến bối cảnh/chủ đề nào?",
        "options": [
          "A. Món ăn gia đình",
          "B. Mua bán bất động sản cao cấp",
          "C. Đi khám bệnh nha khoa",
          "D. Học lái máy bay"
        ],
        "correct": 0,
        "explanation": "Đáp án chính xác là A. Món ăn gia đình. Nội dung này được thể hiện trực tiếp trong bài nghe."
      },
      {
        "id": 3702,
        "question": "Ngôn ngữ biểu đạt trong đoạn hội thoại thuộc trình độ nào?",
        "options": [
          "A. HSK 6",
          "B. HSK 5",
          "C. HSK 2",
          "D. HSK 1"
        ],
        "correct": 2,
        "explanation": "Đáp án chính xác là C. HSK 2. Nội dung này được thể hiện trực tiếp trong bài nghe."
      },
      {
        "id": 3703,
        "question": "Mục đích chính của cuộc trao đổi giữa hai nhân vật là gì?",
        "options": [
          "A. Chia sẻ thông tin liên quan đến cuộc sống hàng ngày",
          "B. Tranh luận về chính trị",
          "C. Đàm phán hợp đồng kinh tế",
          "D. Ký kết thỏa thuận hợp tác thương mại"
        ],
        "correct": 0,
        "explanation": "Đáp án chính xác là A. Chia sẻ thông tin liên quan đến cuộc sống hàng ngày. Nội dung này được thể hiện trực tiếp trong bài nghe."
      }
    ]
  },
  {
    "id": 38,
    "level": "HSK 2",
    "title": "Mua sắm điện thoại",
    "audioText": "A: 你的新手机在哪儿买的？看起来不错。\nB: 在百货商店买的，现在正在打折，便宜了两百块。",
    "dialogue": [
      {
        "speaker": "A",
        "cn": "你的新手机在哪儿买的？看起来不错。",
        "py": "Nǐ de xīn shǒujī zài nǎr mǎi de? Kàn qǐlái búcuò.",
        "vi": "Điện thoại mới của bạn mua ở đâu thế? Trông rất tuyệt."
      },
      {
        "speaker": "B",
        "cn": "在百货商店买的，现在正在打折，便宜了两百块。",
        "py": "Zài bǎihuò shāngdiàn mǎi de, xiànzai zhèngzài dǎzhé, piányile liǎngbǎi kuài.",
        "vi": "Mua ở bách hóa tổng hợp, hiện đang giảm giá, rẻ được hai trăm tệ."
      }
    ],
    "questions": [
      {
        "id": 3801,
        "question": "Đoạn hội thoại đề cập đến bối cảnh/chủ đề nào?",
        "options": [
          "A. Mua sắm điện thoại",
          "B. Mua bán bất động sản cao cấp",
          "C. Đi khám bệnh nha khoa",
          "D. Học lái máy bay"
        ],
        "correct": 0,
        "explanation": "Đáp án chính xác là A. Mua sắm điện thoại. Nội dung này được thể hiện trực tiếp trong bài nghe."
      },
      {
        "id": 3802,
        "question": "Ngôn ngữ biểu đạt trong đoạn hội thoại thuộc trình độ nào?",
        "options": [
          "A. HSK 6",
          "B. HSK 5",
          "C. HSK 2",
          "D. HSK 1"
        ],
        "correct": 2,
        "explanation": "Đáp án chính xác là C. HSK 2. Nội dung này được thể hiện trực tiếp trong bài nghe."
      },
      {
        "id": 3803,
        "question": "Mục đích chính của cuộc trao đổi giữa hai nhân vật là gì?",
        "options": [
          "A. Chia sẻ thông tin liên quan đến cuộc sống hàng ngày",
          "B. Tranh luận về chính trị",
          "C. Đàm phán hợp đồng kinh tế",
          "D. Ký kết thỏa thuận hợp tác thương mại"
        ],
        "correct": 0,
        "explanation": "Đáp án chính xác là A. Chia sẻ thông tin liên quan đến cuộc sống hàng ngày. Nội dung này được thể hiện trực tiếp trong bài nghe."
      }
    ]
  },
  {
    "id": 39,
    "level": "HSK 2",
    "title": "Tìm việc làm",
    "audioText": "A: 你找到新工作了吗？\nB: 找到了，是一家电脑公司，下个星期一去上班。",
    "dialogue": [
      {
        "speaker": "A",
        "cn": "你找到新工作了吗？",
        "py": "Nǐ zhǎodào xīn gōngzuò le ma?",
        "vi": "Bạn tìm được công việc mới chưa?"
      },
      {
        "speaker": "B",
        "cn": "找到了，是一家电脑公司，下个星期一去上班。",
        "py": "Zhǎodàole, shì yī jiā diànnǎo gōngsī, xià gè xīngqīyī qù shàngbān.",
        "vi": "Tìm được rồi, là một công ty máy tính, thứ hai tuần sau đi làm."
      }
    ],
    "questions": [
      {
        "id": 3901,
        "question": "Đoạn hội thoại đề cập đến bối cảnh/chủ đề nào?",
        "options": [
          "A. Tìm việc làm",
          "B. Mua bán bất động sản cao cấp",
          "C. Đi khám bệnh nha khoa",
          "D. Học lái máy bay"
        ],
        "correct": 0,
        "explanation": "Đáp án chính xác là A. Tìm việc làm. Nội dung này được thể hiện trực tiếp trong bài nghe."
      },
      {
        "id": 3902,
        "question": "Ngôn ngữ biểu đạt trong đoạn hội thoại thuộc trình độ nào?",
        "options": [
          "A. HSK 6",
          "B. HSK 5",
          "C. HSK 2",
          "D. HSK 1"
        ],
        "correct": 2,
        "explanation": "Đáp án chính xác là C. HSK 2. Nội dung này được thể hiện trực tiếp trong bài nghe."
      },
      {
        "id": 3903,
        "question": "Mục đích chính của cuộc trao đổi giữa hai nhân vật là gì?",
        "options": [
          "A. Chia sẻ thông tin liên quan đến cuộc sống hàng ngày",
          "B. Tranh luận về chính trị",
          "C. Đàm phán hợp đồng kinh tế",
          "D. Ký kết thỏa thuận hợp tác thương mại"
        ],
        "correct": 0,
        "explanation": "Đáp án chính xác là A. Chia sẻ thông tin liên quan đến cuộc sống hàng ngày. Nội dung này được thể hiện trực tiếp trong bài nghe."
      }
    ]
  },
  {
    "id": 40,
    "level": "HSK 2",
    "title": "Học tập thi cử",
    "audioText": "A: 明天的考试你准备得怎么样了？\nB: 我都复习完了，希望明天能考个好成绩。",
    "dialogue": [
      {
        "speaker": "A",
        "cn": "明天的考试你准备得怎么样了？",
        "py": "Míngtiān de kǎoshì nǐ zhǔnbèi dé zěnmeyàng le?",
        "vi": "Kỳ thi ngày mai bạn chuẩn bị đến đâu rồi?"
      },
      {
        "speaker": "B",
        "cn": "我都复习完了，希望明天能考个好成绩。",
        "py": "Wǒ dōu fùxí wán le, xīwàng míngtiān néng kǎo gè hǎo chéngjī.",
        "vi": "Tôi ôn tập xong hết rồi, hy vọng ngày mai có thể thi đạt thành tích tốt."
      }
    ],
    "questions": [
      {
        "id": 4001,
        "question": "Đoạn hội thoại đề cập đến bối cảnh/chủ đề nào?",
        "options": [
          "A. Học tập thi cử",
          "B. Mua bán bất động sản cao cấp",
          "C. Đi khám bệnh nha khoa",
          "D. Học lái máy bay"
        ],
        "correct": 0,
        "explanation": "Đáp án chính xác là A. Học tập thi cử. Nội dung này được thể hiện trực tiếp trong bài nghe."
      },
      {
        "id": 4002,
        "question": "Ngôn ngữ biểu đạt trong đoạn hội thoại thuộc trình độ nào?",
        "options": [
          "A. HSK 6",
          "B. HSK 5",
          "C. HSK 2",
          "D. HSK 1"
        ],
        "correct": 2,
        "explanation": "Đáp án chính xác là C. HSK 2. Nội dung này được thể hiện trực tiếp trong bài nghe."
      },
      {
        "id": 4003,
        "question": "Mục đích chính của cuộc trao đổi giữa hai nhân vật là gì?",
        "options": [
          "A. Chia sẻ thông tin liên quan đến cuộc sống hàng ngày",
          "B. Tranh luận về chính trị",
          "C. Đàm phán hợp đồng kinh tế",
          "D. Ký kết thỏa thuận hợp tác thương mại"
        ],
        "correct": 0,
        "explanation": "Đáp án chính xác là A. Chia sẻ thông tin liên quan đến cuộc sống hàng ngày. Nội dung này được thể hiện trực tiếp trong bài nghe."
      }
    ]
  },
  {
    "id": 41,
    "level": "HSK 2",
    "title": "Hẹn gặp mặt",
    "audioText": "A: 我们下午四点在咖啡馆见，怎么样？\nB: 没问题，我会准时到的。",
    "dialogue": [
      {
        "speaker": "A",
        "cn": "我们下午四点在咖啡馆见，怎么样？",
        "py": "Wǒmen xiàwǔ sì diǎn zài kāfēiguǎn jiàn, zěnmeyàng?",
        "vi": "Bốn giờ chiều tụi mình gặp ở quán cà phê nhé, được không?"
      },
      {
        "speaker": "B",
        "cn": "没问题，我会准时到的。",
        "py": "Méi wèntǐ, wǒ huì zhǔnshí dào de.",
        "vi": "Không vấn đề gì, tôi sẽ đến đúng giờ."
      }
    ],
    "questions": [
      {
        "id": 4101,
        "question": "Đoạn hội thoại đề cập đến bối cảnh/chủ đề nào?",
        "options": [
          "A. Hẹn gặp mặt",
          "B. Mua bán bất động sản cao cấp",
          "C. Đi khám bệnh nha khoa",
          "D. Học lái máy bay"
        ],
        "correct": 0,
        "explanation": "Đáp án chính xác là A. Hẹn gặp mặt. Nội dung này được thể hiện trực tiếp trong bài nghe."
      },
      {
        "id": 4102,
        "question": "Ngôn ngữ biểu đạt trong đoạn hội thoại thuộc trình độ nào?",
        "options": [
          "A. HSK 6",
          "B. HSK 5",
          "C. HSK 2",
          "D. HSK 1"
        ],
        "correct": 2,
        "explanation": "Đáp án chính xác là C. HSK 2. Nội dung này được thể hiện trực tiếp trong bài nghe."
      },
      {
        "id": 4103,
        "question": "Mục đích chính của cuộc trao đổi giữa hai nhân vật là gì?",
        "options": [
          "A. Chia sẻ thông tin liên quan đến cuộc sống hàng ngày",
          "B. Tranh luận về chính trị",
          "C. Đàm phán hợp đồng kinh tế",
          "D. Ký kết thỏa thuận hợp tác thương mại"
        ],
        "correct": 0,
        "explanation": "Đáp án chính xác là A. Chia sẻ thông tin liên quan đến cuộc sống hàng ngày. Nội dung này được thể hiện trực tiếp trong bài nghe."
      }
    ]
  },
  {
    "id": 42,
    "level": "HSK 2",
    "title": "Thời tiết mưa bão",
    "audioText": "A: 外面下大雨了，你带伞了吗？\nB: 糟糕，我把伞忘在教室里了。",
    "dialogue": [
      {
        "speaker": "A",
        "cn": "外面下大雨了，你带伞了吗？",
        "py": "Wàimiàn xià dàyǔ le, nǐ dài sǎn le ma?",
        "vi": "Bên ngoài mưa to rồi, bạn có mang ô không?"
      },
      {
        "speaker": "B",
        "cn": "糟糕，我把伞忘在教室里了。",
        "py": "Zāogāo, wǒ bǎ sǎn wàng zài jiàoshì lǐ le.",
        "vi": "Gay quá, tôi quên ô ở phòng học rồi."
      }
    ],
    "questions": [
      {
        "id": 4201,
        "question": "Đoạn hội thoại đề cập đến bối cảnh/chủ đề nào?",
        "options": [
          "A. Thời tiết mưa bão",
          "B. Mua bán bất động sản cao cấp",
          "C. Đi khám bệnh nha khoa",
          "D. Học lái máy bay"
        ],
        "correct": 0,
        "explanation": "Đáp án chính xác là A. Thời tiết mưa bão. Nội dung này được thể hiện trực tiếp trong bài nghe."
      },
      {
        "id": 4202,
        "question": "Ngôn ngữ biểu đạt trong đoạn hội thoại thuộc trình độ nào?",
        "options": [
          "A. HSK 6",
          "B. HSK 5",
          "C. HSK 2",
          "D. HSK 1"
        ],
        "correct": 2,
        "explanation": "Đáp án chính xác là C. HSK 2. Nội dung này được thể hiện trực tiếp trong bài nghe."
      },
      {
        "id": 4203,
        "question": "Mục đích chính của cuộc trao đổi giữa hai nhân vật là gì?",
        "options": [
          "A. Chia sẻ thông tin liên quan đến cuộc sống hàng ngày",
          "B. Tranh luận về chính trị",
          "C. Đàm phán hợp đồng kinh tế",
          "D. Ký kết thỏa thuận hợp tác thương mại"
        ],
        "correct": 0,
        "explanation": "Đáp án chính xác là A. Chia sẻ thông tin liên quan đến cuộc sống hàng ngày. Nội dung này được thể hiện trực tiếp trong bài nghe."
      }
    ]
  },
  {
    "id": 43,
    "level": "HSK 2",
    "title": "Màu sắc quần áo",
    "audioText": "A: 你觉得这件红色的衣服漂亮还是那件绿色的？\nB: 我觉得红色的更适合你，显得很有活力。",
    "dialogue": [
      {
        "speaker": "A",
        "cn": "你觉得这件红色的衣服漂亮还是那件绿色的？",
        "py": "Nǐ juéde zhè jiàn hóngsè de yīfu piàoliang háishì nà jiàn lǜsè de?",
        "vi": "Bạn thấy bộ quần áo màu đỏ này đẹp hay bộ màu xanh kia?"
      },
      {
        "speaker": "B",
        "cn": "我觉得红色的更适合你，显得很有活力。",
        "py": "Wǒ juéde hóngsè de gèng shìhé nǐ, xiǎnde hěn huólì.",
        "vi": "Tôi thấy màu đỏ hợp với bạn hơn, nhìn rất năng động."
      }
    ],
    "questions": [
      {
        "id": 4301,
        "question": "Đoạn hội thoại đề cập đến bối cảnh/chủ đề nào?",
        "options": [
          "A. Màu sắc quần áo",
          "B. Mua bán bất động sản cao cấp",
          "C. Đi khám bệnh nha khoa",
          "D. Học lái máy bay"
        ],
        "correct": 0,
        "explanation": "Đáp án chính xác là A. Màu sắc quần áo. Nội dung này được thể hiện trực tiếp trong bài nghe."
      },
      {
        "id": 4302,
        "question": "Ngôn ngữ biểu đạt trong đoạn hội thoại thuộc trình độ nào?",
        "options": [
          "A. HSK 6",
          "B. HSK 5",
          "C. HSK 2",
          "D. HSK 1"
        ],
        "correct": 2,
        "explanation": "Đáp án chính xác là C. HSK 2. Nội dung này được thể hiện trực tiếp trong bài nghe."
      },
      {
        "id": 4303,
        "question": "Mục đích chính của cuộc trao đổi giữa hai nhân vật là gì?",
        "options": [
          "A. Chia sẻ thông tin liên quan đến cuộc sống hàng ngày",
          "B. Tranh luận về chính trị",
          "C. Đàm phán hợp đồng kinh tế",
          "D. Ký kết thỏa thuận hợp tác thương mại"
        ],
        "correct": 0,
        "explanation": "Đáp án chính xác là A. Chia sẻ thông tin liên quan đến cuộc sống hàng ngày. Nội dung này được thể hiện trực tiếp trong bài nghe."
      }
    ]
  },
  {
    "id": 44,
    "level": "HSK 2",
    "title": "Nhờ vả giúp đỡ",
    "audioText": "A: 你能帮我把这个桌子搬到外面去吗？\nB: 当然可以，我们现在就搬吧。",
    "dialogue": [
      {
        "speaker": "A",
        "cn": "你能帮我把这个桌子搬到外面去吗？",
        "py": "Nǐ néng bāng wǒ bǎ zhège zhuōzi bān dào wài miàn qù ma?",
        "vi": "Bạn giúp tôi bê cái bàn này ra ngoài được không?"
      },
      {
        "speaker": "B",
        "cn": "当然可以，我们现在就搬吧。",
        "py": "Dāngrán kěyǐ, wǒmen xiànzài jiù bān ba.",
        "vi": "Dĩ nhiên được chứ, chúng ta bê đi luôn bây giờ đi."
      }
    ],
    "questions": [
      {
        "id": 4401,
        "question": "Đoạn hội thoại đề cập đến bối cảnh/chủ đề nào?",
        "options": [
          "A. Nhờ vả giúp đỡ",
          "B. Mua bán bất động sản cao cấp",
          "C. Đi khám bệnh nha khoa",
          "D. Học lái máy bay"
        ],
        "correct": 0,
        "explanation": "Đáp án chính xác là A. Nhờ vả giúp đỡ. Nội dung này được thể hiện trực tiếp trong bài nghe."
      },
      {
        "id": 4402,
        "question": "Ngôn ngữ biểu đạt trong đoạn hội thoại thuộc trình độ nào?",
        "options": [
          "A. HSK 6",
          "B. HSK 5",
          "C. HSK 2",
          "D. HSK 1"
        ],
        "correct": 2,
        "explanation": "Đáp án chính xác là C. HSK 2. Nội dung này được thể hiện trực tiếp trong bài nghe."
      },
      {
        "id": 4403,
        "question": "Mục đích chính của cuộc trao đổi giữa hai nhân vật là gì?",
        "options": [
          "A. Chia sẻ thông tin liên quan đến cuộc sống hàng ngày",
          "B. Tranh luận về chính trị",
          "C. Đàm phán hợp đồng kinh tế",
          "D. Ký kết thỏa thuận hợp tác thương mại"
        ],
        "correct": 0,
        "explanation": "Đáp án chính xác là A. Chia sẻ thông tin liên quan đến cuộc sống hàng ngày. Nội dung này được thể hiện trực tiếp trong bài nghe."
      }
    ]
  },
  {
    "id": 45,
    "level": "HSK 2",
    "title": "Hỏi thăm đồng nghiệp",
    "audioText": "A: 王经理今天怎么没来上班？\nB: 他生病了，正在医院检查呢。",
    "dialogue": [
      {
        "speaker": "A",
        "cn": "王经理今天怎么没来上班？",
        "py": "Wáng jīnglǐ jīntiān zěnme méi lái shàngbān?",
        "vi": "Giám đốc Vương hôm nay sao không đi làm vậy?"
      },
      {
        "speaker": "B",
        "cn": "他生病了，正在医院检查呢。",
        "py": "Tā shēngbìng le, zhèngzài yīyuàn jiǎnchá ne.",
        "vi": "Anh ấy bị ốm rồi, đang kiểm tra ở bệnh viện."
      }
    ],
    "questions": [
      {
        "id": 4501,
        "question": "Đoạn hội thoại đề cập đến bối cảnh/chủ đề nào?",
        "options": [
          "A. Hỏi thăm đồng nghiệp",
          "B. Mua bán bất động sản cao cấp",
          "C. Đi khám bệnh nha khoa",
          "D. Học lái máy bay"
        ],
        "correct": 0,
        "explanation": "Đáp án chính xác là A. Hỏi thăm đồng nghiệp. Nội dung này được thể hiện trực tiếp trong bài nghe."
      },
      {
        "id": 4502,
        "question": "Ngôn ngữ biểu đạt trong đoạn hội thoại thuộc trình độ nào?",
        "options": [
          "A. HSK 6",
          "B. HSK 5",
          "C. HSK 2",
          "D. HSK 1"
        ],
        "correct": 2,
        "explanation": "Đáp án chính xác là C. HSK 2. Nội dung này được thể hiện trực tiếp trong bài nghe."
      },
      {
        "id": 4503,
        "question": "Mục đích chính của cuộc trao đổi giữa hai nhân vật là gì?",
        "options": [
          "A. Chia sẻ thông tin liên quan đến cuộc sống hàng ngày",
          "B. Tranh luận về chính trị",
          "C. Đàm phán hợp đồng kinh tế",
          "D. Ký kết thỏa thuận hợp tác thương mại"
        ],
        "correct": 0,
        "explanation": "Đáp án chính xác là A. Chia sẻ thông tin liên quan đến cuộc sống hàng ngày. Nội dung này được thể hiện trực tiếp trong bài nghe."
      }
    ]
  },
  {
    "id": 46,
    "level": "HSK 2",
    "title": "Nói về phim ảnh",
    "audioText": "A: 昨晚那部电影你看了吗？感觉怎么样？\nB: 看了，很有意思，演员演得非常好。",
    "dialogue": [
      {
        "speaker": "A",
        "cn": "昨晚那部电影你看了吗？感觉怎么样？",
        "py": "Zuówǎn nà bù diànyǐng nǐ kànle ma? Gǎnjué zěnmeyàng?",
        "vi": "Bộ phim tối qua bạn xem chưa? Cảm thấy thế nào?"
      },
      {
        "speaker": "B",
        "cn": "看了，很有意思，演员演得非常好。",
        "py": "Kànle, hěn yǒu yìsi, yǎnyuán yǎn dé fēicháng hǎochī.",
        "vi": "Xem rồi, hay lắm, diễn viên diễn xuất rất tốt."
      }
    ],
    "questions": [
      {
        "id": 4601,
        "question": "Đoạn hội thoại đề cập đến bối cảnh/chủ đề nào?",
        "options": [
          "A. Nói về phim ảnh",
          "B. Mua bán bất động sản cao cấp",
          "C. Đi khám bệnh nha khoa",
          "D. Học lái máy bay"
        ],
        "correct": 0,
        "explanation": "Đáp án chính xác là A. Nói về phim ảnh. Nội dung này được thể hiện trực tiếp trong bài nghe."
      },
      {
        "id": 4602,
        "question": "Ngôn ngữ biểu đạt trong đoạn hội thoại thuộc trình độ nào?",
        "options": [
          "A. HSK 6",
          "B. HSK 5",
          "C. HSK 2",
          "D. HSK 1"
        ],
        "correct": 2,
        "explanation": "Đáp án chính xác là C. HSK 2. Nội dung này được thể hiện trực tiếp trong bài nghe."
      },
      {
        "id": 4603,
        "question": "Mục đích chính của cuộc trao đổi giữa hai nhân vật là gì?",
        "options": [
          "A. Chia sẻ thông tin liên quan đến cuộc sống hàng ngày",
          "B. Tranh luận về chính trị",
          "C. Đàm phán hợp đồng kinh tế",
          "D. Ký kết thỏa thuận hợp tác thương mại"
        ],
        "correct": 0,
        "explanation": "Đáp án chính xác là A. Chia sẻ thông tin liên quan đến cuộc sống hàng ngày. Nội dung này được thể hiện trực tiếp trong bài nghe."
      }
    ]
  },
  {
    "id": 47,
    "level": "HSK 2",
    "title": "Học nhạc cụ",
    "audioText": "A: 你会弹钢琴吗？我听见有人在房间里弹琴。\nB: 那是我妹妹，她学弹钢琴学了三年了。",
    "dialogue": [
      {
        "speaker": "A",
        "cn": "你会弹钢琴吗？我听见有人在房间里弹琴。",
        "py": "Nǐ huì tán gāngqín ma? Wǒ tīngjiàn yǒurén zài fángjiān lǐ tánqín.",
        "vi": "Bạn biết đánh piano không? Tôi nghe thấy có người đang đánh trong phòng."
      },
      {
        "speaker": "B",
        "cn": "那是我妹妹，她学弹钢琴学了三年了。",
        "py": "Nà shì wǒ mèimei, tā xué tán gāngqín xuéle sān nián le.",
        "vi": "Đó là em gái tôi, nó học đánh piano được ba năm rồi."
      }
    ],
    "questions": [
      {
        "id": 4701,
        "question": "Đoạn hội thoại đề cập đến bối cảnh/chủ đề nào?",
        "options": [
          "A. Học nhạc cụ",
          "B. Mua bán bất động sản cao cấp",
          "C. Đi khám bệnh nha khoa",
          "D. Học lái máy bay"
        ],
        "correct": 0,
        "explanation": "Đáp án chính xác là A. Học nhạc cụ. Nội dung này được thể hiện trực tiếp trong bài nghe."
      },
      {
        "id": 4702,
        "question": "Ngôn ngữ biểu đạt trong đoạn hội thoại thuộc trình độ nào?",
        "options": [
          "A. HSK 6",
          "B. HSK 5",
          "C. HSK 2",
          "D. HSK 1"
        ],
        "correct": 2,
        "explanation": "Đáp án chính xác là C. HSK 2. Nội dung này được thể hiện trực tiếp trong bài nghe."
      },
      {
        "id": 4703,
        "question": "Mục đích chính của cuộc trao đổi giữa hai nhân vật là gì?",
        "options": [
          "A. Chia sẻ thông tin liên quan đến cuộc sống hàng ngày",
          "B. Tranh luận về chính trị",
          "C. Đàm phán hợp đồng kinh tế",
          "D. Ký kết thỏa thuận hợp tác thương mại"
        ],
        "correct": 0,
        "explanation": "Đáp án chính xác là A. Chia sẻ thông tin liên quan đến cuộc sống hàng ngày. Nội dung này được thể hiện trực tiếp trong bài nghe."
      }
    ]
  },
  {
    "id": 48,
    "level": "HSK 2",
    "title": "Sở thích đọc báo",
    "audioText": "A: 你还在看报纸吗？现在大家都用手机看新闻了。\nB: 我还是习惯看报纸，眼睛不容易累。",
    "dialogue": [
      {
        "speaker": "A",
        "cn": "你还在看报纸吗？现在大家都用手机看新闻了。",
        "py": "Nǐ hái zài kàn bàozhǐ ma? Xiànzài dàjiā dōu yòng shǒujī kàn xīnwén le.",
        "vi": "Bạn vẫn còn đọc báo giấy à? Giờ mọi người toàn dùng điện thoại xem tin tức thôi."
      },
      {
        "speaker": "B",
        "cn": "我还是习惯看报纸，眼睛不容易累。",
        "py": "Wǒ háishi xíguàn kàn bàozhǐ, yǎnjing bù róngyì lèi.",
        "vi": "Tôi vẫn quen đọc báo giấy hơn, mắt không dễ bị mỏi."
      }
    ],
    "questions": [
      {
        "id": 4801,
        "question": "Đoạn hội thoại đề cập đến bối cảnh/chủ đề nào?",
        "options": [
          "A. Sở thích đọc báo",
          "B. Mua bán bất động sản cao cấp",
          "C. Đi khám bệnh nha khoa",
          "D. Học lái máy bay"
        ],
        "correct": 0,
        "explanation": "Đáp án chính xác là A. Sở thích đọc báo. Nội dung này được thể hiện trực tiếp trong bài nghe."
      },
      {
        "id": 4802,
        "question": "Ngôn ngữ biểu đạt trong đoạn hội thoại thuộc trình độ nào?",
        "options": [
          "A. HSK 6",
          "B. HSK 5",
          "C. HSK 2",
          "D. HSK 1"
        ],
        "correct": 2,
        "explanation": "Đáp án chính xác là C. HSK 2. Nội dung này được thể hiện trực tiếp trong bài nghe."
      },
      {
        "id": 4803,
        "question": "Mục đích chính của cuộc trao đổi giữa hai nhân vật là gì?",
        "options": [
          "A. Chia sẻ thông tin liên quan đến cuộc sống hàng ngày",
          "B. Tranh luận về chính trị",
          "C. Đàm phán hợp đồng kinh tế",
          "D. Ký kết thỏa thuận hợp tác thương mại"
        ],
        "correct": 0,
        "explanation": "Đáp án chính xác là A. Chia sẻ thông tin liên quan đến cuộc sống hàng ngày. Nội dung này được thể hiện trực tiếp trong bài nghe."
      }
    ]
  },
  {
    "id": 49,
    "level": "HSK 2",
    "title": "Lái xe an toàn",
    "audioText": "A: 慢点儿开，前面是十字路口，红灯亮了。\nB: 知道了，我会注意安全的，别担心。",
    "dialogue": [
      {
        "speaker": "A",
        "cn": "慢点儿开，前面是十字路口，红灯亮了。",
        "py": "Màn diǎnr kāi, qiánmian shì shízì lùkǒu, hóngdēng liàng le.",
        "vi": "Lái chậm chút thôi, phía trước là ngã tư, đèn đỏ sáng rồi."
      },
      {
        "speaker": "B",
        "cn": "知道了，我会注意安全的，别担心。",
        "py": "Zhīdào le, wǒ huì zhùyì ānquán de, bié dānxīn.",
        "vi": "Biết rồi, tôi sẽ chú ý an toàn mà, đừng lo."
      }
    ],
    "questions": [
      {
        "id": 4901,
        "question": "Đoạn hội thoại đề cập đến bối cảnh/chủ đề nào?",
        "options": [
          "A. Lái xe an toàn",
          "B. Mua bán bất động sản cao cấp",
          "C. Đi khám bệnh nha khoa",
          "D. Học lái máy bay"
        ],
        "correct": 0,
        "explanation": "Đáp án chính xác là A. Lái xe an toàn. Nội dung này được thể hiện trực tiếp trong bài nghe."
      },
      {
        "id": 4902,
        "question": "Ngôn ngữ biểu đạt trong đoạn hội thoại thuộc trình độ nào?",
        "options": [
          "A. HSK 6",
          "B. HSK 5",
          "C. HSK 2",
          "D. HSK 1"
        ],
        "correct": 2,
        "explanation": "Đáp án chính xác là C. HSK 2. Nội dung này được thể hiện trực tiếp trong bài nghe."
      },
      {
        "id": 4903,
        "question": "Mục đích chính của cuộc trao đổi giữa hai nhân vật là gì?",
        "options": [
          "A. Chia sẻ thông tin liên quan đến cuộc sống hàng ngày",
          "B. Tranh luận về chính trị",
          "C. Đàm phán hợp đồng kinh tế",
          "D. Ký kết thỏa thuận hợp tác thương mại"
        ],
        "correct": 0,
        "explanation": "Đáp án chính xác là A. Chia sẻ thông tin liên quan đến cuộc sống hàng ngày. Nội dung này được thể hiện trực tiếp trong bài nghe."
      }
    ]
  },
  {
    "id": 50,
    "level": "HSK 2",
    "title": "Thú cưng nuôi mèo",
    "audioText": "A: 你家的小猫真可爱，它几岁了？\nB: 它才半岁，非常喜欢玩球。",
    "dialogue": [
      {
        "speaker": "A",
        "cn": "你家的小猫真可爱，它几岁了？",
        "py": "Nǐ jiā de xiǎomāo zhēn kě'ài, tā jǐ suì le?",
        "vi": "Con mèo nhỏ nhà bạn đáng yêu thật, nó mấy tuổi rồi?"
      },
      {
        "speaker": "B",
        "cn": "它才半岁，非常喜欢玩球。",
        "py": "Tā cái bàn suì, fēicháng xǐhuan wán qiú.",
        "vi": "Nó mới nửa tuổi thôi, rất thích chơi bóng."
      }
    ],
    "questions": [
      {
        "id": 5001,
        "question": "Đoạn hội thoại đề cập đến bối cảnh/chủ đề nào?",
        "options": [
          "A. Thú cưng nuôi mèo",
          "B. Mua bán bất động sản cao cấp",
          "C. Đi khám bệnh nha khoa",
          "D. Học lái máy bay"
        ],
        "correct": 0,
        "explanation": "Đáp án chính xác là A. Thú cưng nuôi mèo. Nội dung này được thể hiện trực tiếp trong bài nghe."
      },
      {
        "id": 5002,
        "question": "Ngôn ngữ biểu đạt trong đoạn hội thoại thuộc trình độ nào?",
        "options": [
          "A. HSK 6",
          "B. HSK 5",
          "C. HSK 2",
          "D. HSK 1"
        ],
        "correct": 2,
        "explanation": "Đáp án chính xác là C. HSK 2. Nội dung này được thể hiện trực tiếp trong bài nghe."
      },
      {
        "id": 5003,
        "question": "Mục đích chính của cuộc trao đổi giữa hai nhân vật là gì?",
        "options": [
          "A. Chia sẻ thông tin liên quan đến cuộc sống hàng ngày",
          "B. Tranh luận về chính trị",
          "C. Đàm phán hợp đồng kinh tế",
          "D. Ký kết thỏa thuận hợp tác thương mại"
        ],
        "correct": 0,
        "explanation": "Đáp án chính xác là A. Chia sẻ thông tin liên quan đến cuộc sống hàng ngày. Nội dung này được thể hiện trực tiếp trong bài nghe."
      }
    ]
  },
  {
    "id": 51,
    "level": "HSK 2",
    "title": "Món quà lưu niệm",
    "audioText": "A: 这件传统衣服真漂亮，是谁买给你的？\nB: 是我哥哥去中国旅游的时候买给我的纪念品。",
    "dialogue": [
      {
        "speaker": "A",
        "cn": "这件传统衣服真漂亮，是谁买给你的？",
        "py": "Zhè jiàn chuántǒng yīfu zhēn piàoliang, shì shéi mǎi gěi nǐ de?",
        "vi": "Bộ đồ truyền thống này đẹp quá, ai mua cho bạn thế?"
      },
      {
        "speaker": "B",
        "cn": "是我哥哥去中国旅游的时候买给我的纪念品。",
        "py": "Shì wǒ gēge qù Zhōngguó lǚyóu de shíhou mǎi gěi wǒ de jìniànpǐn.",
        "vi": "Là món quà lưu niệm anh trai mua cho tôi khi đi du lịch Trung Quốc."
      }
    ],
    "questions": [
      {
        "id": 5101,
        "question": "Đoạn hội thoại đề cập đến bối cảnh/chủ đề nào?",
        "options": [
          "A. Món quà lưu niệm",
          "B. Mua bán bất động sản cao cấp",
          "C. Đi khám bệnh nha khoa",
          "D. Học lái máy bay"
        ],
        "correct": 0,
        "explanation": "Đáp án chính xác là A. Món quà lưu niệm. Nội dung này được thể hiện trực tiếp trong bài nghe."
      },
      {
        "id": 5102,
        "question": "Ngôn ngữ biểu đạt trong đoạn hội thoại thuộc trình độ nào?",
        "options": [
          "A. HSK 6",
          "B. HSK 5",
          "C. HSK 2",
          "D. HSK 1"
        ],
        "correct": 2,
        "explanation": "Đáp án chính xác là C. HSK 2. Nội dung này được thể hiện trực tiếp trong bài nghe."
      },
      {
        "id": 5103,
        "question": "Mục đích chính của cuộc trao đổi giữa hai nhân vật là gì?",
        "options": [
          "A. Chia sẻ thông tin liên quan đến cuộc sống hàng ngày",
          "B. Tranh luận về chính trị",
          "C. Đàm phán hợp đồng kinh tế",
          "D. Ký kết thỏa thuận hợp tác thương mại"
        ],
        "correct": 0,
        "explanation": "Đáp án chính xác là A. Chia sẻ thông tin liên quan đến cuộc sống hàng ngày. Nội dung này được thể hiện trực tiếp trong bài nghe."
      }
    ]
  },
  {
    "id": 52,
    "level": "HSK 2",
    "title": "Sửa chữa đồ đạc",
    "audioText": "A: 电脑又坏了，你能帮我看看吗？\nB: 我帮你看一下吧，可能是系统有问题。",
    "dialogue": [
      {
        "speaker": "A",
        "cn": "电脑又坏了，你能帮我看看吗？",
        "py": "Diànnǎo yòu huài le, nǐ néng bāng wǒ kànkàn ma?",
        "vi": "Máy tính lại hỏng rồi, bạn xem giúp tôi tí được không?"
      },
      {
        "speaker": "B",
        "cn": "我帮你看一下吧，可能是系统有问题。",
        "py": "Wǒ bāng nǐ kàn yíxià ba, kěnéng shì xìtǒng yǒu wèntǐ.",
        "vi": "Để tôi xem hộ cho, có thể là do hệ thống có vấn đề."
      }
    ],
    "questions": [
      {
        "id": 5201,
        "question": "Đoạn hội thoại đề cập đến bối cảnh/chủ đề nào?",
        "options": [
          "A. Sửa chữa đồ đạc",
          "B. Mua bán bất động sản cao cấp",
          "C. Đi khám bệnh nha khoa",
          "D. Học lái máy bay"
        ],
        "correct": 0,
        "explanation": "Đáp án chính xác là A. Sửa chữa đồ đạc. Nội dung này được thể hiện trực tiếp trong bài nghe."
      },
      {
        "id": 5202,
        "question": "Ngôn ngữ biểu đạt trong đoạn hội thoại thuộc trình độ nào?",
        "options": [
          "A. HSK 6",
          "B. HSK 5",
          "C. HSK 2",
          "D. HSK 1"
        ],
        "correct": 2,
        "explanation": "Đáp án chính xác là C. HSK 2. Nội dung này được thể hiện trực tiếp trong bài nghe."
      },
      {
        "id": 5203,
        "question": "Mục đích chính của cuộc trao đổi giữa hai nhân vật là gì?",
        "options": [
          "A. Chia sẻ thông tin liên quan đến cuộc sống hàng ngày",
          "B. Tranh luận về chính trị",
          "C. Đàm phán hợp đồng kinh tế",
          "D. Ký kết thỏa thuận hợp tác thương mại"
        ],
        "correct": 0,
        "explanation": "Đáp án chính xác là A. Chia sẻ thông tin liên quan đến cuộc sống hàng ngày. Nội dung này được thể hiện trực tiếp trong bài nghe."
      }
    ]
  },
  {
    "id": 53,
    "level": "HSK 2",
    "title": "Uống sữa buổi sáng",
    "audioText": "A: 早餐你想喝牛奶还是豆浆？\nB: 喝杯热牛奶吧，再吃个鸡蛋就够了。",
    "dialogue": [
      {
        "speaker": "A",
        "cn": "早餐你想喝牛奶还是豆浆？",
        "py": "Zǎocān nǐ xiǎng hē niúnǎi háishì dòujiāng?",
        "vi": "Bữa sáng bạn muốn uống sữa bò hay sữa đậu nành?"
      },
      {
        "speaker": "B",
        "cn": "喝杯热牛奶吧，再吃个鸡蛋就够了。",
        "py": "Hē bēi rè niúnǎi ba, zài chī gè jīdàn jiù gòu le.",
        "vi": "Uống ly sữa nóng đi, ăn thêm quả trứng gà nữa là đủ rồi."
      }
    ],
    "questions": [
      {
        "id": 5301,
        "question": "Đoạn hội thoại đề cập đến bối cảnh/chủ đề nào?",
        "options": [
          "A. Uống sữa buổi sáng",
          "B. Mua bán bất động sản cao cấp",
          "C. Đi khám bệnh nha khoa",
          "D. Học lái máy bay"
        ],
        "correct": 0,
        "explanation": "Đáp án chính xác là A. Uống sữa buổi sáng. Nội dung này được thể hiện trực tiếp trong bài nghe."
      },
      {
        "id": 5302,
        "question": "Ngôn ngữ biểu đạt trong đoạn hội thoại thuộc trình độ nào?",
        "options": [
          "A. HSK 6",
          "B. HSK 5",
          "C. HSK 2",
          "D. HSK 1"
        ],
        "correct": 2,
        "explanation": "Đáp án chính xác là C. HSK 2. Nội dung này được thể hiện trực tiếp trong bài nghe."
      },
      {
        "id": 5303,
        "question": "Mục đích chính của cuộc trao đổi giữa hai nhân vật là gì?",
        "options": [
          "A. Chia sẻ thông tin liên quan đến cuộc sống hàng ngày",
          "B. Tranh luận về chính trị",
          "C. Đàm phán hợp đồng kinh tế",
          "D. Ký kết thỏa thuận hợp tác thương mại"
        ],
        "correct": 0,
        "explanation": "Đáp án chính xác là A. Chia sẻ thông tin liên quan đến cuộc sống hàng ngày. Nội dung này được thể hiện trực tiếp trong bài nghe."
      }
    ]
  },
  {
    "id": 54,
    "level": "HSK 2",
    "title": "Đi dạo buổi tối",
    "audioText": "A: 晚饭后我们一起去公园散步吧。\nB: 好啊，今天晚上的风很舒服，适合散步。",
    "dialogue": [
      {
        "speaker": "A",
        "cn": "晚饭后我们一起去公园散步吧。",
        "py": "Wǎnfàn hòu wǒmen yīqǐ qù gōngyuán sànbù ba.",
        "vi": "Cơm tối xong tụi mình cùng đi công viên đi dạo nhé."
      },
      {
        "speaker": "B",
        "cn": "好啊，今天晚上的风很舒服，适合散步。",
        "py": "Hǎo a, jīntiān wǎnshang de fēng hěn shūfu, shìhé sànbù.",
        "vi": "Được chứ, gió đêm nay rất dễ chịu, hợp đi dạo lắm."
      }
    ],
    "questions": [
      {
        "id": 5401,
        "question": "Đoạn hội thoại đề cập đến bối cảnh/chủ đề nào?",
        "options": [
          "A. Đi dạo buổi tối",
          "B. Mua bán bất động sản cao cấp",
          "C. Đi khám bệnh nha khoa",
          "D. Học lái máy bay"
        ],
        "correct": 0,
        "explanation": "Đáp án chính xác là A. Đi dạo buổi tối. Nội dung này được thể hiện trực tiếp trong bài nghe."
      },
      {
        "id": 5402,
        "question": "Ngôn ngữ biểu đạt trong đoạn hội thoại thuộc trình độ nào?",
        "options": [
          "A. HSK 6",
          "B. HSK 5",
          "C. HSK 2",
          "D. HSK 1"
        ],
        "correct": 2,
        "explanation": "Đáp án chính xác là C. HSK 2. Nội dung này được thể hiện trực tiếp trong bài nghe."
      },
      {
        "id": 5403,
        "question": "Mục đích chính của cuộc trao đổi giữa hai nhân vật là gì?",
        "options": [
          "A. Chia sẻ thông tin liên quan đến cuộc sống hàng ngày",
          "B. Tranh luận về chính trị",
          "C. Đàm phán hợp đồng kinh tế",
          "D. Ký kết thỏa thuận hợp tác thương mại"
        ],
        "correct": 0,
        "explanation": "Đáp án chính xác là A. Chia sẻ thông tin liên quan đến cuộc sống hàng ngày. Nội dung này được thể hiện trực tiếp trong bài nghe."
      }
    ]
  },
  {
    "id": 55,
    "level": "HSK 2",
    "title": "Trò chơi thể thao bóng đá",
    "audioText": "A: 今天的足球比赛你看了吗？太精彩了！\nB: 我错过了前半场，只看了最后十分钟，太可惜了。",
    "dialogue": [
      {
        "speaker": "A",
        "cn": "今天的足球比赛你看了吗？太精彩了！",
        "py": "Jīntiān de zúqiú bǐsài nǐ kànle ma? Tài jīngcǎi le!",
        "vi": "Trận bóng đá hôm nay bạn xem chưa? Kịch tính xuất sắc quá!"
      },
      {
        "speaker": "B",
        "cn": "我错过了前半场，只看了最后十分钟，太可惜了。",
        "py": "Wǒ cuòguòle qián bàn chǎng, zhǐ kànle zuìhòu shí fēnzhōng, tài kěxī le.",
        "vi": "Tôi bỏ lỡ hiệp một rồi, chỉ xem được 10 phút cuối, tiếc quá."
      }
    ],
    "questions": [
      {
        "id": 5501,
        "question": "Đoạn hội thoại đề cập đến bối cảnh/chủ đề nào?",
        "options": [
          "A. Trò chơi thể thao bóng đá",
          "B. Mua bán bất động sản cao cấp",
          "C. Đi khám bệnh nha khoa",
          "D. Học lái máy bay"
        ],
        "correct": 0,
        "explanation": "Đáp án chính xác là A. Trò chơi thể thao bóng đá. Nội dung này được thể hiện trực tiếp trong bài nghe."
      },
      {
        "id": 5502,
        "question": "Ngôn ngữ biểu đạt trong đoạn hội thoại thuộc trình độ nào?",
        "options": [
          "A. HSK 6",
          "B. HSK 5",
          "C. HSK 2",
          "D. HSK 1"
        ],
        "correct": 2,
        "explanation": "Đáp án chính xác là C. HSK 2. Nội dung này được thể hiện trực tiếp trong bài nghe."
      },
      {
        "id": 5503,
        "question": "Mục đích chính của cuộc trao đổi giữa hai nhân vật là gì?",
        "options": [
          "A. Chia sẻ thông tin liên quan đến cuộc sống hàng ngày",
          "B. Tranh luận về chính trị",
          "C. Đàm phán hợp đồng kinh tế",
          "D. Ký kết thỏa thuận hợp tác thương mại"
        ],
        "correct": 0,
        "explanation": "Đáp án chính xác là A. Chia sẻ thông tin liên quan đến cuộc sống hàng ngày. Nội dung này được thể hiện trực tiếp trong bài nghe."
      }
    ]
  },
  {
    "id": 56,
    "level": "HSK 3",
    "title": "Giải quyết khó khăn",
    "audioText": "A: 这个数学题太难了，我做了半天也没做出来。\nB: 别着急，让我来看看，其实换个公式就很简单了。",
    "dialogue": [
      {
        "speaker": "A",
        "cn": "这个数学题太难了，我做了半天也没做出来。",
        "py": "Zhège shùxué tí tài nán le, wǒ zuòle bàntiān yě méi zuò chūlái.",
        "vi": "Bài toán này khó quá, tôi làm cả buổi mà vẫn không ra."
      },
      {
        "speaker": "B",
        "cn": "别着急，让我来看看，其实换个公式就很简单了。",
        "py": "Bié zhāojí, ràng wǒ lái kànkàn, qíshí huàn gè gōngshì jiù hěn jiǎndān le.",
        "vi": "Đừng vội, để tôi xem nào, thực ra đổi công thức một cái là đơn giản ngay."
      }
    ],
    "questions": [
      {
        "id": 5601,
        "question": "Nội dung chính bao quát toàn bộ đoạn hội thoại là gì?",
        "options": [
          "A. Giải quyết khó khăn",
          "B. Tranh chấp hợp đồng dân sự",
          "C. Nghiên cứu thiên văn học cổ đại",
          "D. Phát minh phần mềm mới"
        ],
        "correct": 0,
        "explanation": "Đáp án chính xác là A. Giải quyết khó khăn. Nội dung này được thể hiện trực tiếp trong bài nghe."
      },
      {
        "id": 5602,
        "question": "Đoạn hội thoại sử dụng từ vựng cấu trúc thuộc cấp độ nào?",
        "options": [
          "A. HSK 1",
          "B. HSK 3",
          "C. HSK 5",
          "D. HSK 6"
        ],
        "correct": 1,
        "explanation": "Đáp án chính xác là B. HSK 3. Nội dung này được thể hiện trực tiếp trong bài nghe."
      },
      {
        "id": 5603,
        "question": "Thái độ của hai nhân vật phản ánh điều gì?",
        "options": [
          "A. Sự thấu hiểu và chia sẻ kinh nghiệm thực tế",
          "B. Sự chỉ trích gay gắt lẫn nhau",
          "C. Sự thờ ơ không quan tâm",
          "D. Sự hoang mang lo sợ tột độ"
        ],
        "correct": 0,
        "explanation": "Đáp án chính xác là A. Sự thấu hiểu và chia sẻ kinh nghiệm thực tế. Nội dung này được thể hiện trực tiếp trong bài nghe."
      }
    ]
  },
  {
    "id": 57,
    "level": "HSK 3",
    "title": "Sắp xếp phòng ốc",
    "audioText": "A: 打扫了一上午，房间总 干净了。\nB: 辛苦了！把这些旧报纸扔掉吧，留在房间里太占地方。",
    "dialogue": [
      {
        "speaker": "A",
        "cn": "打扫了一上午，房间总 干净了。",
        "py": "Dǎsǎo le yī shàngwǔ, fángjiān zǒngsuàn gānjìng le.",
        "vi": "Dọn dẹp suốt cả buổi sáng, căn phòng cuối cùng cũng sạch sẽ rồi."
      },
      {
        "speaker": "B",
        "cn": "辛苦了！把这些旧报纸扔掉吧，留在房间里太占地方。",
        "py": "Xīnkǔ le! Bǎ zhèxiē jiù bàozhǐ rēngdiào ba, liú zài fángjiān lǐ tài zhàn dìfang.",
        "vi": "Vất vả rồi! Vứt mấy tờ báo cũ này đi thôi, để trong phòng tốn diện tích quá."
      }
    ],
    "questions": [
      {
        "id": 5701,
        "question": "Nội dung chính bao quát toàn bộ đoạn hội thoại là gì?",
        "options": [
          "A. Sắp xếp phòng ốc",
          "B. Tranh chấp hợp đồng dân sự",
          "C. Nghiên cứu thiên văn học cổ đại",
          "D. Phát minh phần mềm mới"
        ],
        "correct": 0,
        "explanation": "Đáp án chính xác là A. Sắp xếp phòng ốc. Nội dung này được thể hiện trực tiếp trong bài nghe."
      },
      {
        "id": 5702,
        "question": "Đoạn hội thoại sử dụng từ vựng cấu trúc thuộc cấp độ nào?",
        "options": [
          "A. HSK 1",
          "B. HSK 3",
          "C. HSK 5",
          "D. HSK 6"
        ],
        "correct": 1,
        "explanation": "Đáp án chính xác là B. HSK 3. Nội dung này được thể hiện trực tiếp trong bài nghe."
      },
      {
        "id": 5703,
        "question": "Thái độ của hai nhân vật phản ánh điều gì?",
        "options": [
          "A. Sự thấu hiểu và chia sẻ kinh nghiệm thực tế",
          "B. Sự chỉ trích gay gắt lẫn nhau",
          "C. Sự thờ ơ không quan tâm",
          "D. Sự hoang mang lo sợ tột độ"
        ],
        "correct": 0,
        "explanation": "Đáp án chính xác là A. Sự thấu hiểu và chia sẻ kinh nghiệm thực tế. Nội dung này được thể hiện trực tiếp trong bài nghe."
      }
    ]
  },
  {
    "id": 58,
    "level": "HSK 3",
    "title": "Kế hoạch cuối tuần",
    "audioText": "A: 周末你打算怎么过？打算一直呆在家里吗？\nB: 我打算跟朋友去爬山，亲近一下大自然，放松一下。",
    "dialogue": [
      {
        "speaker": "A",
        "cn": "周末你打算怎么过？打算一直呆在家里吗？",
        "py": "Zhōumò nǐ dǎsuàn zěnme guò? Dǎsuàn yīzhí dāi zài jiālǐ ma?",
        "vi": "Cuối tuần bạn định thế nào? Định cứ ở lỳ trong nhà suốt à?"
      },
      {
        "speaker": "B",
        "cn": "我打算跟朋友去爬山，亲近一下大自然，放松一下。",
        "py": "Wǒ dǎsuàn gēn péngyou qù páshān, qīnjìn yíxià dàzìrán, fàngsōng yíxià.",
        "vi": "Tôi định cùng bạn đi leo núi, gần gũi thiên nhiên một chút để thư giãn."
      }
    ],
    "questions": [
      {
        "id": 5801,
        "question": "Nội dung chính bao quát toàn bộ đoạn hội thoại là gì?",
        "options": [
          "A. Kế hoạch cuối tuần",
          "B. Tranh chấp hợp đồng dân sự",
          "C. Nghiên cứu thiên văn học cổ đại",
          "D. Phát minh phần mềm mới"
        ],
        "correct": 0,
        "explanation": "Đáp án chính xác là A. Kế hoạch cuối tuần. Nội dung này được thể hiện trực tiếp trong bài nghe."
      },
      {
        "id": 5802,
        "question": "Đoạn hội thoại sử dụng từ vựng cấu trúc thuộc cấp độ nào?",
        "options": [
          "A. HSK 1",
          "B. HSK 3",
          "C. HSK 5",
          "D. HSK 6"
        ],
        "correct": 1,
        "explanation": "Đáp án chính xác là B. HSK 3. Nội dung này được thể hiện trực tiếp trong bài nghe."
      },
      {
        "id": 5803,
        "question": "Thái độ của hai nhân vật phản ánh điều gì?",
        "options": [
          "A. Sự thấu hiểu và chia sẻ kinh nghiệm thực tế",
          "B. Sự chỉ trích gay gắt lẫn nhau",
          "C. Sự thờ ơ không quan tâm",
          "D. Sự hoang mang lo sợ tột độ"
        ],
        "correct": 0,
        "explanation": "Đáp án chính xác là A. Sự thấu hiểu và chia sẻ kinh nghiệm thực tế. Nội dung này được thể hiện trực tiếp trong bài nghe."
      }
    ]
  },
  {
    "id": 59,
    "level": "HSK 3",
    "title": "Thói quen ăn uống",
    "audioText": "A: 医生说我血糖有点高，让我以后少吃甜食。\nB: 那你可得听医生的，以后多吃点蔬菜，少喝含糖饮料。",
    "dialogue": [
      {
        "speaker": "A",
        "cn": "医生说我血糖有点高，让我以后少吃甜食。",
        "py": "Yīshēng shuō wǒ xuètáng yǒudiǎn gāo, ràng wǒ yǐhòu shǎo chī tiánshí.",
        "vi": "Bác sĩ nói đường huyết của tôi hơi cao, bảo tôi từ nay ăn ít đồ ngọt."
      },
      {
        "speaker": "B",
        "cn": "那你可得听医生的，以后多吃点蔬菜，少喝含糖饮料。",
        "py": "Nà nǐ kě děi tīng yīshēng de, yǐhòu duō chī diǎn shūcài, shǎo hē hán táng yǐnliào.",
        "vi": "Thế thì bạn phải nghe lời bác sĩ thôi, sau này ăn nhiều rau vào, ít uống nước ngọt đi."
      }
    ],
    "questions": [
      {
        "id": 5901,
        "question": "Nội dung chính bao quát toàn bộ đoạn hội thoại là gì?",
        "options": [
          "A. Thói quen ăn uống",
          "B. Tranh chấp hợp đồng dân sự",
          "C. Nghiên cứu thiên văn học cổ đại",
          "D. Phát minh phần mềm mới"
        ],
        "correct": 0,
        "explanation": "Đáp án chính xác là A. Thói quen ăn uống. Nội dung này được thể hiện trực tiếp trong bài nghe."
      },
      {
        "id": 5902,
        "question": "Đoạn hội thoại sử dụng từ vựng cấu trúc thuộc cấp độ nào?",
        "options": [
          "A. HSK 1",
          "B. HSK 3",
          "C. HSK 5",
          "D. HSK 6"
        ],
        "correct": 1,
        "explanation": "Đáp án chính xác là B. HSK 3. Nội dung này được thể hiện trực tiếp trong bài nghe."
      },
      {
        "id": 5903,
        "question": "Thái độ của hai nhân vật phản ánh điều gì?",
        "options": [
          "A. Sự thấu hiểu và chia sẻ kinh nghiệm thực tế",
          "B. Sự chỉ trích gay gắt lẫn nhau",
          "C. Sự thờ ơ không quan tâm",
          "D. Sự hoang mang lo sợ tột độ"
        ],
        "correct": 0,
        "explanation": "Đáp án chính xác là A. Sự thấu hiểu và chia sẻ kinh nghiệm thực tế. Nội dung này được thể hiện trực tiếp trong bài nghe."
      }
    ]
  },
  {
    "id": 60,
    "level": "HSK 3",
    "title": "Mượn đồ dùng",
    "audioText": "A: 你的相机能借我用一下吗？明天的活动我想拍几张照片。\nB: 没问题，电池我已经充满了，你拿去用吧。",
    "dialogue": [
      {
        "speaker": "A",
        "cn": "你的相机能借我用一下吗？明天的活动我想拍几张照片。",
        "py": "Nǐ de xiàngjī néng jiè wǒ yòng yíxià ma? Míngtiān de huódòng wǒ xiǎng pāi jǐ zhāng zhàopiàn.",
        "vi": "Máy ảnh của bạn cho tôi mượn dùng chút được không? Hoạt động ngày mai tôi muốn chụp vài tấm hình."
      },
      {
        "speaker": "B",
        "cn": "没问题，电池我已经充满了，你拿去用吧。",
        "py": "Méi wèntǐ, diàndí wǒ yǐjīng chōngmǎn le, nǐ ná qù yòng ba.",
        "vi": "Không thành vấn đề, pin tôi đã sạc đầy rồi, bạn cứ cầm lấy mà dùng."
      }
    ],
    "questions": [
      {
        "id": 6001,
        "question": "Nội dung chính bao quát toàn bộ đoạn hội thoại là gì?",
        "options": [
          "A. Mượn đồ dùng",
          "B. Tranh chấp hợp đồng dân sự",
          "C. Nghiên cứu thiên văn học cổ đại",
          "D. Phát minh phần mềm mới"
        ],
        "correct": 0,
        "explanation": "Đáp án chính xác là A. Mượn đồ dùng. Nội dung này được thể hiện trực tiếp trong bài nghe."
      },
      {
        "id": 6002,
        "question": "Đoạn hội thoại sử dụng từ vựng cấu trúc thuộc cấp độ nào?",
        "options": [
          "A. HSK 1",
          "B. HSK 3",
          "C. HSK 5",
          "D. HSK 6"
        ],
        "correct": 1,
        "explanation": "Đáp án chính xác là B. HSK 3. Nội dung này được thể hiện trực tiếp trong bài nghe."
      },
      {
        "id": 6003,
        "question": "Thái độ của hai nhân vật phản ánh điều gì?",
        "options": [
          "A. Sự thấu hiểu và chia sẻ kinh nghiệm thực tế",
          "B. Sự chỉ trích gay gắt lẫn nhau",
          "C. Sự thờ ơ không quan tâm",
          "D. Sự hoang mang lo sợ tột độ"
        ],
        "correct": 0,
        "explanation": "Đáp án chính xác là A. Sự thấu hiểu và chia sẻ kinh nghiệm thực tế. Nội dung này được thể hiện trực tiếp trong bài nghe."
      }
    ]
  },
  {
    "id": 61,
    "level": "HSK 3",
    "title": "Lựa chọn nghề nghiệp",
    "audioText": "A: 你毕业后想当老师还是去公司上班？\nB: 我更喜欢自由一点的工作，所以想尝试自己开一家网店。",
    "dialogue": [
      {
        "speaker": "A",
        "cn": "你毕业后想当老师还是去公司上班？",
        "py": "Nǐ bìyè hòu xiǎng dāng lǎoshī háishì qù gōngsī shàngbān?",
        "vi": "Bạn tốt nghiệp xong muốn làm giáo viên hay vào công ty làm việc?"
      },
      {
        "speaker": "B",
        "cn": "我更喜欢自由一点的工作，所以想尝试自己开一家网店。",
        "py": "Wǒ gèng xǐhuan zìyóu yīdiǎn de gōngzuò, suǒyǐ xiǎng chángshì zìjǐ kāi yī jiā wǎngdiàn.",
        "vi": "Tôi thích công việc tự do hơn một chút, vì vậy muốn thử tự mở một cửa hàng online."
      }
    ],
    "questions": [
      {
        "id": 6101,
        "question": "Nội dung chính bao quát toàn bộ đoạn hội thoại là gì?",
        "options": [
          "A. Lựa chọn nghề nghiệp",
          "B. Tranh chấp hợp đồng dân sự",
          "C. Nghiên cứu thiên văn học cổ đại",
          "D. Phát minh phần mềm mới"
        ],
        "correct": 0,
        "explanation": "Đáp án chính xác là A. Lựa chọn nghề nghiệp. Nội dung này được thể hiện trực tiếp trong bài nghe."
      },
      {
        "id": 6102,
        "question": "Đoạn hội thoại sử dụng từ vựng cấu trúc thuộc cấp độ nào?",
        "options": [
          "A. HSK 1",
          "B. HSK 3",
          "C. HSK 5",
          "D. HSK 6"
        ],
        "correct": 1,
        "explanation": "Đáp án chính xác là B. HSK 3. Nội dung này được thể hiện trực tiếp trong bài nghe."
      },
      {
        "id": 6103,
        "question": "Thái độ của hai nhân vật phản ánh điều gì?",
        "options": [
          "A. Sự thấu hiểu và chia sẻ kinh nghiệm thực tế",
          "B. Sự chỉ trích gay gắt lẫn nhau",
          "C. Sự thờ ơ không quan tâm",
          "D. Sự hoang mang lo sợ tột độ"
        ],
        "correct": 0,
        "explanation": "Đáp án chính xác là A. Sự thấu hiểu và chia sẻ kinh nghiệm thực tế. Nội dung này được thể hiện trực tiếp trong bài nghe."
      }
    ]
  },
  {
    "id": 62,
    "level": "HSK 3",
    "title": "Phương hướng đường đi",
    "audioText": "A: 请问，去历史博物馆应该往哪边走？\nB: 顺着这条路一直往前走，到第二个红绿灯往右拐就到了。",
    "dialogue": [
      {
        "speaker": "A",
        "cn": "请问，去历史博物馆应该往哪边走？",
        "py": "Qǐngwèn, qù lìshǐ bówùguǎn yīnggāi wǎng nǎbiān zǒu?",
        "vi": "Xin hỏi, đi bảo tàng lịch sử thì nên đi theo hướng nào?"
      },
      {
        "speaker": "B",
        "cn": "顺着这条路一直往前走，到第二个红绿灯往右拐就到了。",
        "py": "Shùnzhe zhè tiáo lù yīzhí wǎng qián zǒu, dào dì èr gè hónglǜdēng wǎng yòu guǎi jiù dào le.",
        "vi": "Cứ đi thẳng theo con đường này, tới đèn xanh đèn đỏ thứ hai rẽ phải là đến."
      }
    ],
    "questions": [
      {
        "id": 6201,
        "question": "Nội dung chính bao quát toàn bộ đoạn hội thoại là gì?",
        "options": [
          "A. Phương hướng đường đi",
          "B. Tranh chấp hợp đồng dân sự",
          "C. Nghiên cứu thiên văn học cổ đại",
          "D. Phát minh phần mềm mới"
        ],
        "correct": 0,
        "explanation": "Đáp án chính xác là A. Phương hướng đường đi. Nội dung này được thể hiện trực tiếp trong bài nghe."
      },
      {
        "id": 6202,
        "question": "Đoạn hội thoại sử dụng từ vựng cấu trúc thuộc cấp độ nào?",
        "options": [
          "A. HSK 1",
          "B. HSK 3",
          "C. HSK 5",
          "D. HSK 6"
        ],
        "correct": 1,
        "explanation": "Đáp án chính xác là B. HSK 3. Nội dung này được thể hiện trực tiếp trong bài nghe."
      },
      {
        "id": 6203,
        "question": "Thái độ của hai nhân vật phản ánh điều gì?",
        "options": [
          "A. Sự thấu hiểu và chia sẻ kinh nghiệm thực tế",
          "B. Sự chỉ trích gay gắt lẫn nhau",
          "C. Sự thờ ơ không quan tâm",
          "D. Sự hoang mang lo sợ tột độ"
        ],
        "correct": 0,
        "explanation": "Đáp án chính xác là A. Sự thấu hiểu và chia sẻ kinh nghiệm thực tế. Nội dung này được thể hiện trực tiếp trong bài nghe."
      }
    ]
  },
  {
    "id": 63,
    "level": "HSK 3",
    "title": "Trải nghiệm văn hóa",
    "audioText": "A: 你以前看过京剧吗？今晚学校大礼堂有演出。\nB: 从来没看过，我对中国传统戏剧挺感兴趣的，我们一起去吧。",
    "dialogue": [
      {
        "speaker": "A",
        "cn": "你以前看过京剧吗？今晚学校大礼堂有演出。",
        "py": "Nǐ yǐqián kànguò Jīngjù ma? Jīnwǎn xuéxiào dàlǐtáng yǒu yǎnchū.",
        "vi": "Trước đây bạn đã từng xem Kinh kịch chưa? Tối nay ở hội trường lớn của trường có biểu diễn đấy."
      },
      {
        "speaker": "B",
        "cn": "从来没看过，我对中国传统戏剧挺感兴趣的，我们一起去吧。",
        "py": "Cónglái méi kànguò, wǒ duì Zhōngguó chuántǒng xìjù tǐng gǎn xìngqù de, wǒmen yīqǐ qù ba.",
        "vi": "Chưa bao giờ xem luôn, tôi khá hứng thú với hý kịch truyền thống Trung Quốc, tụi mình cùng đi đi."
      }
    ],
    "questions": [
      {
        "id": 6301,
        "question": "Nội dung chính bao quát toàn bộ đoạn hội thoại là gì?",
        "options": [
          "A. Trải nghiệm văn hóa",
          "B. Tranh chấp hợp đồng dân sự",
          "C. Nghiên cứu thiên văn học cổ đại",
          "D. Phát minh phần mềm mới"
        ],
        "correct": 0,
        "explanation": "Đáp án chính xác là A. Trải nghiệm văn hóa. Nội dung này được thể hiện trực tiếp trong bài nghe."
      },
      {
        "id": 6302,
        "question": "Đoạn hội thoại sử dụng từ vựng cấu trúc thuộc cấp độ nào?",
        "options": [
          "A. HSK 1",
          "B. HSK 3",
          "C. HSK 5",
          "D. HSK 6"
        ],
        "correct": 1,
        "explanation": "Đáp án chính xác là B. HSK 3. Nội dung này được thể hiện trực tiếp trong bài nghe."
      },
      {
        "id": 6303,
        "question": "Thái độ của hai nhân vật phản ánh điều gì?",
        "options": [
          "A. Sự thấu hiểu và chia sẻ kinh nghiệm thực tế",
          "B. Sự chỉ trích gay gắt lẫn nhau",
          "C. Sự thờ ơ không quan tâm",
          "D. Sự hoang mang lo sợ tột độ"
        ],
        "correct": 0,
        "explanation": "Đáp án chính xác là A. Sự thấu hiểu và chia sẻ kinh nghiệm thực tế. Nội dung này được thể hiện trực tiếp trong bài nghe."
      }
    ]
  },
  {
    "id": 64,
    "level": "HSK 3",
    "title": "Khen ngợi tiến bộ",
    "audioText": "A: 你的汉语进步真快，现在都能流利地跟中国人聊天了。\nB: 谢谢你的夸奖，其实我每天晚上都花两个小时练习听力和口语。",
    "dialogue": [
      {
        "speaker": "A",
        "cn": "你的汉语进步真快，现在都能流利地跟中国人聊天了。",
        "py": "Nǐ de Hànyǔ jìnbù zhēn kuài, xiànzài dōu néng liúlì de gēn Zhōngguórén liáotiān le.",
        "vi": "Tiếng Trung của bạn tiến bộ nhanh thật, giờ đã có thể nói chuyện lưu loát với người Trung Quốc rồi."
      },
      {
        "speaker": "B",
        "cn": "谢谢你的夸奖，其实我每天晚上都花两个小时练习听力和口语。",
        "py": "Xièxie nǐ de kuājiǎng, qíshí wǒ měitiān wǎnshang dōu huā liǎng gè xiǎoshí liànxí tīnglì hé kǒuyǔ.",
        "vi": "Cảm ơn bạn đã khen, thực ra tối nào tôi cũng dành hai tiếng để luyện nghe và nói."
      }
    ],
    "questions": [
      {
        "id": 6401,
        "question": "Nội dung chính bao quát toàn bộ đoạn hội thoại là gì?",
        "options": [
          "A. Khen ngợi tiến bộ",
          "B. Tranh chấp hợp đồng dân sự",
          "C. Nghiên cứu thiên văn học cổ đại",
          "D. Phát minh phần mềm mới"
        ],
        "correct": 0,
        "explanation": "Đáp án chính xác là A. Khen ngợi tiến bộ. Nội dung này được thể hiện trực tiếp trong bài nghe."
      },
      {
        "id": 6402,
        "question": "Đoạn hội thoại sử dụng từ vựng cấu trúc thuộc cấp độ nào?",
        "options": [
          "A. HSK 1",
          "B. HSK 3",
          "C. HSK 5",
          "D. HSK 6"
        ],
        "correct": 1,
        "explanation": "Đáp án chính xác là B. HSK 3. Nội dung này được thể hiện trực tiếp trong bài nghe."
      },
      {
        "id": 6403,
        "question": "Thái độ của hai nhân vật phản ánh điều gì?",
        "options": [
          "A. Sự thấu hiểu và chia sẻ kinh nghiệm thực tế",
          "B. Sự chỉ trích gay gắt lẫn nhau",
          "C. Sự thờ ơ không quan tâm",
          "D. Sự hoang mang lo sợ tột độ"
        ],
        "correct": 0,
        "explanation": "Đáp án chính xác là A. Sự thấu hiểu và chia sẻ kinh nghiệm thực tế. Nội dung này được thể hiện trực tiếp trong bài nghe."
      }
    ]
  },
  {
    "id": 65,
    "level": "HSK 3",
    "title": "Trách nhiệm công việc",
    "audioText": "A: 这个报告需要今天下午交给经理，你写完了吗？\nB: 还差最后一部分总结，我马上就能完成，你放心吧。",
    "dialogue": [
      {
        "speaker": "A",
        "cn": "这个报告需要今天下午交给经理，你写完了吗？",
        "py": "Zhège bàogào xūyào jīntiān xiàwǔ jiāo gěi jīnglǐ, nǐ xiěwán le ma?",
        "vi": "Bản báo cáo này cần nộp cho giám đốc chiều nay, bạn viết xong chưa?"
      },
      {
        "speaker": "B",
        "cn": "还差最后一部分总结，我马上就能完成，你放心吧。",
        "py": "Hái chà zuìhòu yī bùfen zǒngjié, wǒ mǎshàng jiù néng wánchéng, nǐ fàngxīn ba.",
        "vi": "Còn thiếu phần tổng kết cuối cùng nữa thôi, tôi sẽ hoàn thành ngay đây, bạn yên tâm."
      }
    ],
    "questions": [
      {
        "id": 6501,
        "question": "Nội dung chính bao quát toàn bộ đoạn hội thoại là gì?",
        "options": [
          "A. Trách nhiệm công việc",
          "B. Tranh chấp hợp đồng dân sự",
          "C. Nghiên cứu thiên văn học cổ đại",
          "D. Phát minh phần mềm mới"
        ],
        "correct": 0,
        "explanation": "Đáp án chính xác là A. Trách nhiệm công việc. Nội dung này được thể hiện trực tiếp trong bài nghe."
      },
      {
        "id": 6502,
        "question": "Đoạn hội thoại sử dụng từ vựng cấu trúc thuộc cấp độ nào?",
        "options": [
          "A. HSK 1",
          "B. HSK 3",
          "C. HSK 5",
          "D. HSK 6"
        ],
        "correct": 1,
        "explanation": "Đáp án chính xác là B. HSK 3. Nội dung này được thể hiện trực tiếp trong bài nghe."
      },
      {
        "id": 6503,
        "question": "Thái độ của hai nhân vật phản ánh điều gì?",
        "options": [
          "A. Sự thấu hiểu và chia sẻ kinh nghiệm thực tế",
          "B. Sự chỉ trích gay gắt lẫn nhau",
          "C. Sự thờ ơ không quan tâm",
          "D. Sự hoang mang lo sợ tột độ"
        ],
        "correct": 0,
        "explanation": "Đáp án chính xác là A. Sự thấu hiểu và chia sẻ kinh nghiệm thực tế. Nội dung này được thể hiện trực tiếp trong bài nghe."
      }
    ]
  },
  {
    "id": 66,
    "level": "HSK 3",
    "title": "Bảo vệ môi trường",
    "audioText": "A: 现在的塑料袋都要收费了，我们以后出门最好自己带个购物袋。\nB: 对，这样既省钱又能保护环境，支持绿色环保。",
    "dialogue": [
      {
        "speaker": "A",
        "cn": "现在的塑料袋都要收费了，我们以后出门最好自己带个购物袋。",
        "py": "Xiànzài de sùliàodài dōu yào shōufèi le, wǒmen yǐhòu chūmén zuìhǎo zìjǐ dài gè gòuwùdài.",
        "vi": "Bây giờ túi nilon đều tính phí rồi, tụi mình sau này ra ngoài tốt nhất nên tự mang túi mua sắm."
      },
      {
        "speaker": "B",
        "cn": "对，这样既省钱又能保护环境，支持绿色环保。",
        "py": "Duì, zhèyàng jì shěngqián yòu néng bǎohù huánjìng, zhīchí lǜsè huánbǎo.",
        "vi": "Đúng vậy, như thế vừa tiết kiệm tiền vừa bảo vệ môi trường, ủng hộ sống xanh."
      }
    ],
    "questions": [
      {
        "id": 6601,
        "question": "Nội dung chính bao quát toàn bộ đoạn hội thoại là gì?",
        "options": [
          "A. Bảo vệ môi trường",
          "B. Tranh chấp hợp đồng dân sự",
          "C. Nghiên cứu thiên văn học cổ đại",
          "D. Phát minh phần mềm mới"
        ],
        "correct": 0,
        "explanation": "Đáp án chính xác là A. Bảo vệ môi trường. Nội dung này được thể hiện trực tiếp trong bài nghe."
      },
      {
        "id": 6602,
        "question": "Đoạn hội thoại sử dụng từ vựng cấu trúc thuộc cấp độ nào?",
        "options": [
          "A. HSK 1",
          "B. HSK 3",
          "C. HSK 5",
          "D. HSK 6"
        ],
        "correct": 1,
        "explanation": "Đáp án chính xác là B. HSK 3. Nội dung này được thể hiện trực tiếp trong bài nghe."
      },
      {
        "id": 6603,
        "question": "Thái độ của hai nhân vật phản ánh điều gì?",
        "options": [
          "A. Sự thấu hiểu và chia sẻ kinh nghiệm thực tế",
          "B. Sự chỉ trích gay gắt lẫn nhau",
          "C. Sự thờ ơ không quan tâm",
          "D. Sự hoang mang lo sợ tột độ"
        ],
        "correct": 0,
        "explanation": "Đáp án chính xác là A. Sự thấu hiểu và chia sẻ kinh nghiệm thực tế. Nội dung này được thể hiện trực tiếp trong bài nghe."
      }
    ]
  },
  {
    "id": 67,
    "level": "HSK 3",
    "title": "Tìm đồ bị mất",
    "audioText": "A: 你看见我的钥匙了吗？我记得刚才还放在桌子上的。\nB: 你看看是不是在沙发上，或者在你的裤子口袋里？",
    "dialogue": [
      {
        "speaker": "A",
        "cn": "你看见我的钥匙了吗？我记得刚才还放在桌子上的。",
        "py": "Nǐ kànjiàn wǒ de yàoshi le ma? Wǒ jìde gāngcái hái fàng zài zhuōzi shàng de.",
        "vi": "Bạn có thấy chìa khóa của tôi đâu không? Tôi nhớ vừa nãy vẫn để trên bàn mà."
      },
      {
        "speaker": "B",
        "cn": "你看看是不是在沙发上，或者在你的裤子口袋里？",
        "py": "Nǐ kànkàn shì bú shì zài shāfā shàng, huòzhě zài nǐ de kùzi kǒudài lǐ?",
        "vi": "Bạn nhìn xem có phải ở trên ghế sofa không, hoặc là ở trong túi quần bạn ấy?"
      }
    ],
    "questions": [
      {
        "id": 6701,
        "question": "Nội dung chính bao quát toàn bộ đoạn hội thoại là gì?",
        "options": [
          "A. Tìm đồ bị mất",
          "B. Tranh chấp hợp đồng dân sự",
          "C. Nghiên cứu thiên văn học cổ đại",
          "D. Phát minh phần mềm mới"
        ],
        "correct": 0,
        "explanation": "Đáp án chính xác là A. Tìm đồ bị mất. Nội dung này được thể hiện trực tiếp trong bài nghe."
      },
      {
        "id": 6702,
        "question": "Đoạn hội thoại sử dụng từ vựng cấu trúc thuộc cấp độ nào?",
        "options": [
          "A. HSK 1",
          "B. HSK 3",
          "C. HSK 5",
          "D. HSK 6"
        ],
        "correct": 1,
        "explanation": "Đáp án chính xác là B. HSK 3. Nội dung này được thể hiện trực tiếp trong bài nghe."
      },
      {
        "id": 6703,
        "question": "Thái độ của hai nhân vật phản ánh điều gì?",
        "options": [
          "A. Sự thấu hiểu và chia sẻ kinh nghiệm thực tế",
          "B. Sự chỉ trích gay gắt lẫn nhau",
          "C. Sự thờ ơ không quan tâm",
          "D. Sự hoang mang lo sợ tột độ"
        ],
        "correct": 0,
        "explanation": "Đáp án chính xác là A. Sự thấu hiểu và chia sẻ kinh nghiệm thực tế. Nội dung này được thể hiện trực tiếp trong bài nghe."
      }
    ]
  },
  {
    "id": 68,
    "level": "HSK 3",
    "title": "Mối quan hệ bạn bè",
    "audioText": "A: 大家都说小张这个人很热情，乐于 帮助别人。\nB: 是的，上次我搬家的时候，他二话没说就来帮了我一天忙。",
    "dialogue": [
      {
        "speaker": "A",
        "cn": "大家都说小张这个人很热情，乐于 帮助别人。",
        "py": "Dàjiā dōu shuō Xiǎo Zhāng zhège rén hěn rèqíng, lèyú bāngzhù biérén.",
        "vi": "Mọi người đều nói Tiểu Trương là người rất nhiệt tình, sẵn lòng giúp đỡ người khác."
      },
      {
        "speaker": "B",
        "cn": "是的，上次我搬家的时候，他二话没说就来帮了我一天忙。",
        "py": "Shì de, shàngcì wǒ bānjiā de shíhou, tā èrhuà méishuō jiù lái bāngle wǒ yītiān máng.",
        "vi": "Đúng thế, lần trước lúc tôi chuyển nhà, cậu ấy chẳng nói hai lời đã đến giúp tôi cả ngày luôn."
      }
    ],
    "questions": [
      {
        "id": 6801,
        "question": "Nội dung chính bao quát toàn bộ đoạn hội thoại là gì?",
        "options": [
          "A. Mối quan hệ bạn bè",
          "B. Tranh chấp hợp đồng dân sự",
          "C. Nghiên cứu thiên văn học cổ đại",
          "D. Phát minh phần mềm mới"
        ],
        "correct": 0,
        "explanation": "Đáp án chính xác là A. Mối quan hệ bạn bè. Nội dung này được thể hiện trực tiếp trong bài nghe."
      },
      {
        "id": 6802,
        "question": "Đoạn hội thoại sử dụng từ vựng cấu trúc thuộc cấp độ nào?",
        "options": [
          "A. HSK 1",
          "B. HSK 3",
          "C. HSK 5",
          "D. HSK 6"
        ],
        "correct": 1,
        "explanation": "Đáp án chính xác là B. HSK 3. Nội dung này được thể hiện trực tiếp trong bài nghe."
      },
      {
        "id": 6803,
        "question": "Thái độ của hai nhân vật phản ánh điều gì?",
        "options": [
          "A. Sự thấu hiểu và chia sẻ kinh nghiệm thực tế",
          "B. Sự chỉ trích gay gắt lẫn nhau",
          "C. Sự thờ ơ không quan tâm",
          "D. Sự hoang mang lo sợ tột độ"
        ],
        "correct": 0,
        "explanation": "Đáp án chính xác là A. Sự thấu hiểu và chia sẻ kinh nghiệm thực tế. Nội dung này được thể hiện trực tiếp trong bài nghe."
      }
    ]
  },
  {
    "id": 69,
    "level": "HSK 3",
    "title": "Thay đổi kế hoạch",
    "audioText": "A: 听说由于天气原因，明天的运动会推迟到下周了。\nB: 真的吗？那我明天就可以安心地睡个懒觉了。",
    "dialogue": [
      {
        "speaker": "A",
        "cn": "听说由于天气原因，明天的运动会推迟到下周了。",
        "py": "Tīngshuō yóuyú tiānqì yuányīn, míngtiān de yùndònghuì tuīchí dào xiàzhōu le.",
        "vi": "Nghe nói do nguyên nhân thời tiết, đại hội thể thao ngày mai lùi lại sang tuần sau rồi."
      },
      {
        "speaker": "B",
        "cn": "真的吗？那我明天就可以安心地睡个懒觉了。",
        "py": "Zhēn de ma? Nà wǒ míngtiān jiù kěyǐ ānxīn de shuì gè lǎnjiào le.",
        "vi": "Thật sao? Thế thì ngày mai tôi có thể an tâm ngủ nướng một bữa đã đời rồi."
      }
    ],
    "questions": [
      {
        "id": 6901,
        "question": "Nội dung chính bao quát toàn bộ đoạn hội thoại là gì?",
        "options": [
          "A. Thay đổi kế hoạch",
          "B. Tranh chấp hợp đồng dân sự",
          "C. Nghiên cứu thiên văn học cổ đại",
          "D. Phát minh phần mềm mới"
        ],
        "correct": 0,
        "explanation": "Đáp án chính xác là A. Thay đổi kế hoạch. Nội dung này được thể hiện trực tiếp trong bài nghe."
      },
      {
        "id": 6902,
        "question": "Đoạn hội thoại sử dụng từ vựng cấu trúc thuộc cấp độ nào?",
        "options": [
          "A. HSK 1",
          "B. HSK 3",
          "C. HSK 5",
          "D. HSK 6"
        ],
        "correct": 1,
        "explanation": "Đáp án chính xác là B. HSK 3. Nội dung này được thể hiện trực tiếp trong bài nghe."
      },
      {
        "id": 6903,
        "question": "Thái độ của hai nhân vật phản ánh điều gì?",
        "options": [
          "A. Sự thấu hiểu và chia sẻ kinh nghiệm thực tế",
          "B. Sự chỉ trích gay gắt lẫn nhau",
          "C. Sự thờ ơ không quan tâm",
          "D. Sự hoang mang lo sợ tột độ"
        ],
        "correct": 0,
        "explanation": "Đáp án chính xác là A. Sự thấu hiểu và chia sẻ kinh nghiệm thực tế. Nội dung này được thể hiện trực tiếp trong bài nghe."
      }
    ]
  },
  {
    "id": 70,
    "level": "HSK 3",
    "title": "Lựa chọn trang phục",
    "audioText": "A: 这条裙子虽然好看，但是对我来说有点太长了。\nB: 没关系，你可以配一双高跟鞋，这样看起来身材会更好。",
    "dialogue": [
      {
        "speaker": "A",
        "cn": "这条裙子虽然好看，但是对我来说有点太长了。",
        "py": "Zhè tiáo qúnzi suīrán hǎokàn, dànshì duì wǒ lái shuō yǒudiǎn tài cháng le.",
        "vi": "Chiếc váy này tuy đẹp thật, nhưng đối với tôi thì hơi dài quá."
      },
      {
        "speaker": "B",
        "cn": "没关系，你可以配一双高跟鞋，这样看起来身材会更好。",
        "py": "Méi wèntǐ, nǐ kěyǐ pèi yī shuāng gāogēnxíé, zhèyàng kàn qǐlái shēncái huì gèng hǎo.",
        "vi": "Không sao đâu, bạn có thể phối với một đôi giày cao gót, như vậy trông vóc dáng sẽ đẹp hơn."
      }
    ],
    "questions": [
      {
        "id": 7001,
        "question": "Nội dung chính bao quát toàn bộ đoạn hội thoại là gì?",
        "options": [
          "A. Lựa chọn trang phục",
          "B. Tranh chấp hợp đồng dân sự",
          "C. Nghiên cứu thiên văn học cổ đại",
          "D. Phát minh phần mềm mới"
        ],
        "correct": 0,
        "explanation": "Đáp án chính xác là A. Lựa chọn trang phục. Nội dung này được thể hiện trực tiếp trong bài nghe."
      },
      {
        "id": 7002,
        "question": "Đoạn hội thoại sử dụng từ vựng cấu trúc thuộc cấp độ nào?",
        "options": [
          "A. HSK 1",
          "B. HSK 3",
          "C. HSK 5",
          "D. HSK 6"
        ],
        "correct": 1,
        "explanation": "Đáp án chính xác là B. HSK 3. Nội dung này được thể hiện trực tiếp trong bài nghe."
      },
      {
        "id": 7003,
        "question": "Thái độ của hai nhân vật phản ánh điều gì?",
        "options": [
          "A. Sự thấu hiểu và chia sẻ kinh nghiệm thực tế",
          "B. Sự chỉ trích gay gắt lẫn nhau",
          "C. Sự thờ ơ không quan tâm",
          "D. Sự hoang mang lo sợ tột độ"
        ],
        "correct": 0,
        "explanation": "Đáp án chính xác là A. Sự thấu hiểu và chia sẻ kinh nghiệm thực tế. Nội dung này được thể hiện trực tiếp trong bài nghe."
      }
    ]
  },
  {
    "id": 71,
    "level": "HSK 3",
    "title": "Nuôi dưỡng thú cưng",
    "audioText": "A: 我想养一只狗，但是担心没有足够的时间照顾它。\nB: 养宠物确实需要很多精力，如果你经常加班的话，还是先别养了。",
    "dialogue": [
      {
        "speaker": "A",
        "cn": "我想养一只狗，但是担心没有足够的时间照顾它。",
        "py": "Wǒ xiǎng yǎng yī zhī gǒu, dànshì dānxīn méiyǒu zúgòu de shíjiān zhàogù tā.",
        "vi": "Tôi muốn nuôi một chú chó, nhưng lo lắng không có đủ thời gian chăm sóc nó."
      },
      {
        "speaker": "B",
        "cn": "养宠物确实需要很多精力，如果你经常加班的话，还是先别养了。",
        "py": "Yǎng chǒngwù quèshí xūyào hěnduō jīnglì, rúguǒ nǐ jīngcháng jiābān dehuà, háishi xiān bié yǎng le.",
        "vi": "Nuôi thú cưng quả thực cần rất nhiều tinh lực, nếu bạn thường xuyên tăng ca thì tạm thời đừng nuôi."
      }
    ],
    "questions": [
      {
        "id": 7101,
        "question": "Nội dung chính bao quát toàn bộ đoạn hội thoại là gì?",
        "options": [
          "A. Nuôi dưỡng thú cưng",
          "B. Tranh chấp hợp đồng dân sự",
          "C. Nghiên cứu thiên văn học cổ đại",
          "D. Phát minh phần mềm mới"
        ],
        "correct": 0,
        "explanation": "Đáp án chính xác là A. Nuôi dưỡng thú cưng. Nội dung này được thể hiện trực tiếp trong bài nghe."
      },
      {
        "id": 7102,
        "question": "Đoạn hội thoại sử dụng từ vựng cấu trúc thuộc cấp độ nào?",
        "options": [
          "A. HSK 1",
          "B. HSK 3",
          "C. HSK 5",
          "D. HSK 6"
        ],
        "correct": 1,
        "explanation": "Đáp án chính xác là B. HSK 3. Nội dung này được thể hiện trực tiếp trong bài nghe."
      },
      {
        "id": 7103,
        "question": "Thái độ của hai nhân vật phản ánh điều gì?",
        "options": [
          "A. Sự thấu hiểu và chia sẻ kinh nghiệm thực tế",
          "B. Sự chỉ trích gay gắt lẫn nhau",
          "C. Sự thờ ơ không quan tâm",
          "D. Sự hoang mang lo sợ tột độ"
        ],
        "correct": 0,
        "explanation": "Đáp án chính xác là A. Sự thấu hiểu và chia sẻ kinh nghiệm thực tế. Nội dung này được thể hiện trực tiếp trong bài nghe."
      }
    ]
  },
  {
    "id": 72,
    "level": "HSK 3",
    "title": "Tham gia hội thảo",
    "audioText": "A: 下周的学术研讨会你参加吗？听说明星教授也会来。\nB: 我已经报名了，这是一次很难得的学习机会，千万不能错过。",
    "dialogue": [
      {
        "speaker": "A",
        "cn": "下周的学术研讨会你参加吗？听说明星教授也会来。",
        "py": "Xiàzhōu de xuéshù yántǎohuì nǐ cānjiā ma? Tīngshuō míngxīng jiàoshòu yě huì lái.",
        "vi": "Hội thảo khoa học tuần tới bạn có tham gia không? Nghe nói giáo sư nổi tiếng cũng tới đó."
      },
      {
        "speaker": "B",
        "cn": "我已经报名了，这是一次很难得的学习机会，千万不能错过。",
        "py": "Wǒ yǐjīng bàomíng le, zhè shì yī cì hěn nándé de xuéxí jīhuì, qiānwàn bùnéng cuòguò.",
        "vi": "Tôi đăng ký rồi, đây là một cơ hội học tập rất hiếm có, tuyệt đối không thể bỏ lỡ."
      }
    ],
    "questions": [
      {
        "id": 7201,
        "question": "Nội dung chính bao quát toàn bộ đoạn hội thoại là gì?",
        "options": [
          "A. Tham gia hội thảo",
          "B. Tranh chấp hợp đồng dân sự",
          "C. Nghiên cứu thiên văn học cổ đại",
          "D. Phát minh phần mềm mới"
        ],
        "correct": 0,
        "explanation": "Đáp án chính xác là A. Tham gia hội thảo. Nội dung này được thể hiện trực tiếp trong bài nghe."
      },
      {
        "id": 7202,
        "question": "Đoạn hội thoại sử dụng từ vựng cấu trúc thuộc cấp độ nào?",
        "options": [
          "A. HSK 1",
          "B. HSK 3",
          "C. HSK 5",
          "D. HSK 6"
        ],
        "correct": 1,
        "explanation": "Đáp án chính xác là B. HSK 3. Nội dung này được thể hiện trực tiếp trong bài nghe."
      },
      {
        "id": 7203,
        "question": "Thái độ của hai nhân vật phản ánh điều gì?",
        "options": [
          "A. Sự thấu hiểu và chia sẻ kinh nghiệm thực tế",
          "B. Sự chỉ trích gay gắt lẫn nhau",
          "C. Sự thờ ơ không quan tâm",
          "D. Sự hoang mang lo sợ tột độ"
        ],
        "correct": 0,
        "explanation": "Đáp án chính xác là A. Sự thấu hiểu và chia sẻ kinh nghiệm thực tế. Nội dung này được thể hiện trực tiếp trong bài nghe."
      }
    ]
  },
  {
    "id": 73,
    "level": "HSK 3",
    "title": "Sở thích nấu ăn",
    "audioText": "A: 你做的红烧肉味道太正宗了！是怎么做的？\nB: 秘诀在于火候，需要用小火慢慢炖一个小时，肉才会软糯。",
    "dialogue": [
      {
        "speaker": "A",
        "cn": "你做的红烧肉味道太正宗了！是怎么做的？",
        "py": "Nǐ zuò de hóngshāoròu wèidào tài zhèngzōng le! Shì zěnme zuò de?",
        "vi": "Món thịt kho tàu bạn làm chuẩn vị quá! Làm thế nào vậy?"
      },
      {
        "speaker": "B",
        "cn": "秘诀在于火候，需要用小火慢慢炖一个小时，肉才会软糯。",
        "py": "Mìjué zàiyú huǒhòu, xūyào yòng xiǎohuǒ mànmàn dùn yī gè xiǎoshí, ròu cái huì ruǎnnuò.",
        "vi": "Bí quyết nằm ở độ lửa, cần dùng lửa nhỏ hầm từ từ trong một tiếng thì thịt mới mềm ngon."
      }
    ],
    "questions": [
      {
        "id": 7301,
        "question": "Nội dung chính bao quát toàn bộ đoạn hội thoại là gì?",
        "options": [
          "A. Sở thích nấu ăn",
          "B. Tranh chấp hợp đồng dân sự",
          "C. Nghiên cứu thiên văn học cổ đại",
          "D. Phát minh phần mềm mới"
        ],
        "correct": 0,
        "explanation": "Đáp án chính xác là A. Sở thích nấu ăn. Nội dung này được thể hiện trực tiếp trong bài nghe."
      },
      {
        "id": 7302,
        "question": "Đoạn hội thoại sử dụng từ vựng cấu trúc thuộc cấp độ nào?",
        "options": [
          "A. HSK 1",
          "B. HSK 3",
          "C. HSK 5",
          "D. HSK 6"
        ],
        "correct": 1,
        "explanation": "Đáp án chính xác là B. HSK 3. Nội dung này được thể hiện trực tiếp trong bài nghe."
      },
      {
        "id": 7303,
        "question": "Thái độ của hai nhân vật phản ánh điều gì?",
        "options": [
          "A. Sự thấu hiểu và chia sẻ kinh nghiệm thực tế",
          "B. Sự chỉ trích gay gắt lẫn nhau",
          "C. Sự thờ ơ không quan tâm",
          "D. Sự hoang mang lo sợ tột độ"
        ],
        "correct": 0,
        "explanation": "Đáp án chính xác là A. Sự thấu hiểu và chia sẻ kinh nghiệm thực tế. Nội dung này được thể hiện trực tiếp trong bài nghe."
      }
    ]
  },
  {
    "id": 74,
    "level": "HSK 3",
    "title": "Kỷ niệm chuyến đi",
    "audioText": "A: 看看这些照片，这是我们去年去云南旅游时拍的。\nB: 时间过得真快啊，转眼都一年了，那时候玩得真开心。",
    "dialogue": [
      {
        "speaker": "A",
        "cn": "看看这些照片，这是我们去年去云南旅游时拍的。",
        "py": "Kànkàn zhèxiē zhàopiàn, zhè shì wǒmen qùnián qù Yúnnán lǚyóu shí pāi de.",
        "vi": "Nhìn mấy bức ảnh này xem, đây là ảnh chúng ta chụp khi đi du lịch Vân Nam năm ngoái đấy."
      },
      {
        "speaker": "B",
        "cn": "时间过得真快啊，转眼都一年了，那时候玩得真开心。",
        "py": "Shíjiān guò dé zhēn kuài ā, zhuǎnyǎn dōu yī nián le, nà shíhou wán dé zhēn kāixīn.",
        "vi": "Thời gian trôi nhanh thật đấy, chớp mắt đã một năm rồi, lúc đó chơi vui biết bao."
      }
    ],
    "questions": [
      {
        "id": 7401,
        "question": "Nội dung chính bao quát toàn bộ đoạn hội thoại là gì?",
        "options": [
          "A. Kỷ niệm chuyến đi",
          "B. Tranh chấp hợp đồng dân sự",
          "C. Nghiên cứu thiên văn học cổ đại",
          "D. Phát minh phần mềm mới"
        ],
        "correct": 0,
        "explanation": "Đáp án chính xác là A. Kỷ niệm chuyến đi. Nội dung này được thể hiện trực tiếp trong bài nghe."
      },
      {
        "id": 7402,
        "question": "Đoạn hội thoại sử dụng từ vựng cấu trúc thuộc cấp độ nào?",
        "options": [
          "A. HSK 1",
          "B. HSK 3",
          "C. HSK 5",
          "D. HSK 6"
        ],
        "correct": 1,
        "explanation": "Đáp án chính xác là B. HSK 3. Nội dung này được thể hiện trực tiếp trong bài nghe."
      },
      {
        "id": 7403,
        "question": "Thái độ của hai nhân vật phản ánh điều gì?",
        "options": [
          "A. Sự thấu hiểu và chia sẻ kinh nghiệm thực tế",
          "B. Sự chỉ trích gay gắt lẫn nhau",
          "C. Sự thờ ơ không quan tâm",
          "D. Sự hoang mang lo sợ tột độ"
        ],
        "correct": 0,
        "explanation": "Đáp án chính xác là A. Sự thấu hiểu và chia sẻ kinh nghiệm thực tế. Nội dung này được thể hiện trực tiếp trong bài nghe."
      }
    ]
  },
  {
    "id": 75,
    "level": "HSK 3",
    "title": "Kế hoạch mua xe",
    "audioText": "A: 现在的电车越来越便宜了，技术也比以前成熟了许多。\nB: 是的，我也打算今年换一辆电动汽车，省油钱还环保。",
    "dialogue": [
      {
        "speaker": "A",
        "cn": "现在的电车越来越便宜了，技术也比以前成熟了许多。",
        "py": "Xiànzài de diànchē yuè lái yuè piányi le, jìshù yě bǐ yǐqián chéngshú le xǔduō.",
        "vi": "Xe điện bây giờ ngày càng rẻ, công nghệ cũng chín muồi hơn trước rất nhiều."
      },
      {
        "speaker": "B",
        "cn": "是的，我也打算今年换一辆电动汽车，省油钱还环保。",
        "py": "Shì de, wǒ yě dǎsuàn jīnnián huàn yī liàng diàndòng qìchē, shěng yóuqián hái huánbǎo.",
        "vi": "Đúng vậy, tôi cũng định năm nay đổi sang một chiếc ô tô điện, vừa tiết kiệm tiền xăng lại bảo vệ môi trường."
      }
    ],
    "questions": [
      {
        "id": 7501,
        "question": "Nội dung chính bao quát toàn bộ đoạn hội thoại là gì?",
        "options": [
          "A. Kế hoạch mua xe",
          "B. Tranh chấp hợp đồng dân sự",
          "C. Nghiên cứu thiên văn học cổ đại",
          "D. Phát minh phần mềm mới"
        ],
        "correct": 0,
        "explanation": "Đáp án chính xác là A. Kế hoạch mua xe. Nội dung này được thể hiện trực tiếp trong bài nghe."
      },
      {
        "id": 7502,
        "question": "Đoạn hội thoại sử dụng từ vựng cấu trúc thuộc cấp độ nào?",
        "options": [
          "A. HSK 1",
          "B. HSK 3",
          "C. HSK 5",
          "D. HSK 6"
        ],
        "correct": 1,
        "explanation": "Đáp án chính xác là B. HSK 3. Nội dung này được thể hiện trực tiếp trong bài nghe."
      },
      {
        "id": 7503,
        "question": "Thái độ của hai nhân vật phản ánh điều gì?",
        "options": [
          "A. Sự thấu hiểu và chia sẻ kinh nghiệm thực tế",
          "B. Sự chỉ trích gay gắt lẫn nhau",
          "C. Sự thờ ơ không quan tâm",
          "D. Sự hoang mang lo sợ tột độ"
        ],
        "correct": 0,
        "explanation": "Đáp án chính xác là A. Sự thấu hiểu và chia sẻ kinh nghiệm thực tế. Nội dung này được thể hiện trực tiếp trong bài nghe."
      }
    ]
  },
  {
    "id": 76,
    "level": "HSK 4",
    "title": "Phỏng vấn tuyển dụng",
    "audioText": "A: 简历上看您的工作经验很丰富，为什么选择离开前一家公司呢？\nB: 我希望能够在一个更具挑战性的平台上发挥自己的特长，贵公司的发展前景非常吸引我。",
    "dialogue": [
      {
        "speaker": "A",
        "cn": "简历上看您的工作经验很丰富，为什么选择离开前一家公司呢？",
        "py": "Jiǎnlì shàng kàn nín de gōngzuò jīngyàn hěn fēngfù, wèishénme xuǎnzé líkāi qián yī jiā gōngsī ne?",
        "vi": "Trên sơ yếu lý lịch thấy kinh nghiệm làm việc của ông rất phong phú, tại sao ông lại lựa chọn rời bỏ công ty trước?"
      },
      {
        "speaker": "B",
        "cn": "我希望能够在一个更具挑战性的平台上发挥自己的特长，贵公司的发展前景非常吸引我。",
        "py": "Wǒ xīwàng nénggòu zài yíge gèng jù tiǎozhànxìng de píngtái shàng fāhuī zìjǐ de tècháng, guì gōngsī de fāzhǎn qiánjǐng fēicháng xīyǐn wǒ.",
        "vi": "Tôi hy vọng có thể phát huy sở trường của mình trên một nền tảng mang tính thử thách hơn, triển vọng phát triển của quý công ty rất thu hút tôi."
      }
    ],
    "questions": [
      {
        "id": 7601,
        "question": "Tư tưởng cốt lõi hay chủ đề thảo luận ở đây là gì?",
        "options": [
          "A. Phỏng vấn tuyển dụng",
          "B. Nghiên cứu sinh học đại dương",
          "C. Quy trình sản xuất linh kiện bán dẫn",
          "D. Lịch sử kiến trúc phương Tây"
        ],
        "correct": 0,
        "explanation": "Đáp án chính xác là A. Phỏng vấn tuyển dụng. Nội dung này được thể hiện trực tiếp trong bài nghe."
      },
      {
        "id": 7602,
        "question": "Đoạn hội thoại xuất hiện các từ ngữ nâng cao thuộc trình độ nào?",
        "options": [
          "A. HSK 2",
          "B. HSK 4",
          "C. HSK 1",
          "D. HSK 3"
        ],
        "correct": 1,
        "explanation": "Đáp án chính xác là B. HSK 4. Nội dung này được thể hiện trực tiếp trong bài nghe."
      },
      {
        "id": 7603,
        "question": "Đâu là nhận định đúng về nội dung trên?",
        "options": [
          "A. Mang tính logic, thảo luận về các vấn đề phổ quát trong xã hội hiện đại",
          "B. Hoàn toàn là những câu chào hỏi nông cạn",
          "C. Sử dụng nhiều thuật ngữ y khoa cổ truyền",
          "D. Là cuộc tranh luận gay gắt dẫn đến xung đột đột ngột"
        ],
        "correct": 0,
        "explanation": "Đáp án chính xác là A. Mang tính logic, thảo luận về các vấn đề phổ quát trong xã hội hiện đại. Nội dung này được thể hiện trực tiếp trong bài nghe."
      }
    ]
  },
  {
    "id": 77,
    "level": "HSK 4",
    "title": "Quản lý thời gian",
    "audioText": "A: 你总是把事情拖到最后一天才做，这样压力太大了。\nB: 我也知道这个习惯不好，正在努力通过制定每日计划来克服拖延症。",
    "dialogue": [
      {
        "speaker": "A",
        "cn": "你总是把事情拖到最后一天才做，这样压力太大了。",
        "py": "Nǐ zǒngshì bǎ shìqing tuō dào zuìhòu yītiān cái zuò, zhèyàng yālì tài dà le.",
        "vi": "Bạn luôn kéo dài mọi việc đến tận ngày cuối cùng mới làm, như vậy áp lực lớn quá."
      },
      {
        "speaker": "B",
        "cn": "我也知道这个习惯不好，正在努力通过制定每日计划来克服拖延症。",
        "py": "Wǒ yě zhīdào zhège xíguàn bù hǎo, zhèngzài nǔlì tōngguò zhìdìng měirì jìhuà lái kèfú tuōyánzhèng.",
        "vi": "Tôi cũng biết thói quen này không tốt, đang nỗ lực khắc phục chứng trì hoãn bằng cách lập kế hoạch mỗi ngày."
      }
    ],
    "questions": [
      {
        "id": 7701,
        "question": "Tư tưởng cốt lõi hay chủ đề thảo luận ở đây là gì?",
        "options": [
          "A. Quản lý thời gian",
          "B. Nghiên cứu sinh học đại dương",
          "C. Quy trình sản xuất linh kiện bán dẫn",
          "D. Lịch sử kiến trúc phương Tây"
        ],
        "correct": 0,
        "explanation": "Đáp án chính xác là A. Quản lý thời gian. Nội dung này được thể hiện trực tiếp trong bài nghe."
      },
      {
        "id": 7702,
        "question": "Đoạn hội thoại xuất hiện các từ ngữ nâng cao thuộc trình độ nào?",
        "options": [
          "A. HSK 2",
          "B. HSK 4",
          "C. HSK 1",
          "D. HSK 3"
        ],
        "correct": 1,
        "explanation": "Đáp án chính xác là B. HSK 4. Nội dung này được thể hiện trực tiếp trong bài nghe."
      },
      {
        "id": 7703,
        "question": "Đâu là nhận định đúng về nội dung trên?",
        "options": [
          "A. Mang tính logic, thảo luận về các vấn đề phổ quát trong xã hội hiện đại",
          "B. Hoàn toàn là những câu chào hỏi nông cạn",
          "C. Sử dụng nhiều thuật ngữ y khoa cổ truyền",
          "D. Là cuộc tranh luận gay gắt dẫn đến xung đột đột ngột"
        ],
        "correct": 0,
        "explanation": "Đáp án chính xác là A. Mang tính logic, thảo luận về các vấn đề phổ quát trong xã hội hiện đại. Nội dung này được thể hiện trực tiếp trong bài nghe."
      }
    ]
  },
  {
    "id": 78,
    "level": "HSK 4",
    "title": "Ý nghĩa của tình bạn",
    "audioText": "A: 真正的朋友不仅是在你成功时为你祝贺，更是在你困难时伸出援手。\nB: 你说得对，经历了一些挫折之后，我才看清谁是真正值得深交的朋友。",
    "dialogue": [
      {
        "speaker": "A",
        "cn": "真正的朋友不仅是在你成功时为你祝贺，更是在你困难时伸出援手。",
        "py": "Zhēnzhèng de péngyou bùjǐn shì zài nǐ chénggōng shí wèi nǐ zhùhè, gèng shì zài nǐ kùnnán shí shēnchū yuánshǒu.",
        "vi": "Người bạn thực sự không chỉ là chúc mừng khi bạn thành công, mà hơn thế nữa là chìa tay giúp đỡ khi bạn gặp khó khăn."
      },
      {
        "speaker": "B",
        "cn": "你说得对，经历了一些挫折之后，我才看清谁是真正值得深交的朋友。",
        "py": "Nǐ shuō dé duì, jīnglìle yīxiē cuòzhé zhīhòu, wǒ cái kànqīng shéi shì zhēnzhèng zhídé shēnjiāo de péngyou.",
        "vi": "Bạn nói đúng, sau khi trải qua một vài trắc trở, tôi mới nhìn rõ ai là người thực sự xứng đáng để thâm giao."
      }
    ],
    "questions": [
      {
        "id": 7801,
        "question": "Tư tưởng cốt lõi hay chủ đề thảo luận ở đây là gì?",
        "options": [
          "A. Ý nghĩa của tình bạn",
          "B. Nghiên cứu sinh học đại dương",
          "C. Quy trình sản xuất linh kiện bán dẫn",
          "D. Lịch sử kiến trúc phương Tây"
        ],
        "correct": 0,
        "explanation": "Đáp án chính xác là A. Ý nghĩa của tình bạn. Nội dung này được thể hiện trực tiếp trong bài nghe."
      },
      {
        "id": 7802,
        "question": "Đoạn hội thoại xuất hiện các từ ngữ nâng cao thuộc trình độ nào?",
        "options": [
          "A. HSK 2",
          "B. HSK 4",
          "C. HSK 1",
          "D. HSK 3"
        ],
        "correct": 1,
        "explanation": "Đáp án chính xác là B. HSK 4. Nội dung này được thể hiện trực tiếp trong bài nghe."
      },
      {
        "id": 7803,
        "question": "Đâu là nhận định đúng về nội dung trên?",
        "options": [
          "A. Mang tính logic, thảo luận về các vấn đề phổ quát trong xã hội hiện đại",
          "B. Hoàn toàn là những câu chào hỏi nông cạn",
          "C. Sử dụng nhiều thuật ngữ y khoa cổ truyền",
          "D. Là cuộc tranh luận gay gắt dẫn đến xung đột đột ngột"
        ],
        "correct": 0,
        "explanation": "Đáp án chính xác là A. Mang tính logic, thảo luận về các vấn đề phổ quát trong xã hội hiện đại. Nội dung này được thể hiện trực tiếp trong bài nghe."
      }
    ]
  },
  {
    "id": 79,
    "level": "HSK 4",
    "title": "Giao thông đô thị",
    "audioText": "A: 这里的早高峰堵车实在太严重了，每天上班都要花一个多小时。\nB: 建议你改坐地铁，虽然挤了一点，但是时间有保障，不会迟到。",
    "dialogue": [
      {
        "speaker": "A",
        "cn": "这里的早高峰堵车实在太严重了，每天上班都要花一个多小时。",
        "py": "Zhèli de zǎogāofēng dǔchē shízài tài yánzhòng le, měitiān shàngbān dōu yào huā yíge duō xiǎoshí.",
        "vi": "Nạn kẹt xe giờ cao điểm sáng ở đây quả thực quá nghiêm trọng, ngày nào đi làm cũng tốn hơn một tiếng đồng hồ."
      },
      {
        "speaker": "B",
        "cn": "建议你改坐地铁，虽然挤了一点，但是时间有保障，不会迟到。",
        "py": "Jiànyì nǐ gǎi zuò dìtiě, suīrán jǐle yīdiǎn, dànshì shíjiān yǒu bǎozhàng, bú huì chídào.",
        "vi": "Khuyên bạn nên chuyển sang đi tàu điện ngầm, tuy hơi chật chội một chút nhưng thời gian được đảm bảo, không lo muộn giờ."
      }
    ],
    "questions": [
      {
        "id": 7901,
        "question": "Tư tưởng cốt lõi hay chủ đề thảo luận ở đây là gì?",
        "options": [
          "A. Giao thông đô thị",
          "B. Nghiên cứu sinh học đại dương",
          "C. Quy trình sản xuất linh kiện bán dẫn",
          "D. Lịch sử kiến trúc phương Tây"
        ],
        "correct": 0,
        "explanation": "Đáp án chính xác là A. Giao thông đô thị. Nội dung này được thể hiện trực tiếp trong bài nghe."
      },
      {
        "id": 7902,
        "question": "Đoạn hội thoại xuất hiện các từ ngữ nâng cao thuộc trình độ nào?",
        "options": [
          "A. HSK 2",
          "B. HSK 4",
          "C. HSK 1",
          "D. HSK 3"
        ],
        "correct": 1,
        "explanation": "Đáp án chính xác là B. HSK 4. Nội dung này được thể hiện trực tiếp trong bài nghe."
      },
      {
        "id": 7903,
        "question": "Đâu là nhận định đúng về nội dung trên?",
        "options": [
          "A. Mang tính logic, thảo luận về các vấn đề phổ quát trong xã hội hiện đại",
          "B. Hoàn toàn là những câu chào hỏi nông cạn",
          "C. Sử dụng nhiều thuật ngữ y khoa cổ truyền",
          "D. Là cuộc tranh luận gay gắt dẫn đến xung đột đột ngột"
        ],
        "correct": 0,
        "explanation": "Đáp án chính xác là A. Mang tính logic, thảo luận về các vấn đề phổ quát trong xã hội hiện đại. Nội dung này được thể hiện trực tiếp trong bài nghe."
      }
    ]
  },
  {
    "id": 80,
    "level": "HSK 4",
    "title": "Đầu tư tài chính",
    "audioText": "A: 听说你比来赚了不少钱，有什么理财的秘诀吗？\nB: 理财的核心是分散风险，不要把所有的鸡蛋都放在同一个篮子里。",
    "dialogue": [
      {
        "speaker": "A",
        "cn": "听说你比来赚了不少钱，有什么理财的秘诀吗？",
        "py": "Tīngshuō nǐ jǐnlái zhuànle bùshǎo qián, yǒu shénme lǐcái de mìjué ma?",
        "vi": "Nghe nói dạo gần đây bạn kiếm được không ít tiền, có bí quyết quản lý tài chính nào không?"
      },
      {
        "speaker": "B",
        "cn": "理财的核心是分散风险，不要把所有的鸡蛋都放在同一个篮子里。",
        "py": "Lǐcái de héxīn shì fēnsàn fēngxiǎn, búyào bǎ suǒyǒu de jīdàn dōu fàng zài tóngyíge lánzi lǐ.",
        "vi": "Cốt lõi của quản lý tài chính là phân tán rủi ro, đừng bỏ tất cả trứng vào cùng một giỏ."
      }
    ],
    "questions": [
      {
        "id": 8001,
        "question": "Tư tưởng cốt lõi hay chủ đề thảo luận ở đây là gì?",
        "options": [
          "A. Đầu tư tài chính",
          "B. Nghiên cứu sinh học đại dương",
          "C. Quy trình sản xuất linh kiện bán dẫn",
          "D. Lịch sử kiến trúc phương Tây"
        ],
        "correct": 0,
        "explanation": "Đáp án chính xác là A. Đầu tư tài chính. Nội dung này được thể hiện trực tiếp trong bài nghe."
      },
      {
        "id": 8002,
        "question": "Đoạn hội thoại xuất hiện các từ ngữ nâng cao thuộc trình độ nào?",
        "options": [
          "A. HSK 2",
          "B. HSK 4",
          "C. HSK 1",
          "D. HSK 3"
        ],
        "correct": 1,
        "explanation": "Đáp án chính xác là B. HSK 4. Nội dung này được thể hiện trực tiếp trong bài nghe."
      },
      {
        "id": 8003,
        "question": "Đâu là nhận định đúng về nội dung trên?",
        "options": [
          "A. Mang tính logic, thảo luận về các vấn đề phổ quát trong xã hội hiện đại",
          "B. Hoàn toàn là những câu chào hỏi nông cạn",
          "C. Sử dụng nhiều thuật ngữ y khoa cổ truyền",
          "D. Là cuộc tranh luận gay gắt dẫn đến xung đột đột ngột"
        ],
        "correct": 0,
        "explanation": "Đáp án chính xác là A. Mang tính logic, thảo luận về các vấn đề phổ quát trong xã hội hiện đại. Nội dung này được thể hiện trực tiếp trong bài nghe."
      }
    ]
  },
  {
    "id": 81,
    "level": "HSK 4",
    "title": "Văn hóa doanh nghiệp",
    "audioText": "A: 我们公司非常注重团队合作，定期会举办一些拓展活动。\nB: 良好的职场氛围能显著提高员工的工作积极性和创造力。",
    "dialogue": [
      {
        "speaker": "A",
        "cn": "我们公司非常注重团队合作，定期会举办一些拓展活动。",
        "py": "Wǒmen gōngsī fēicháng zhùzhòng tuánduì hézuò, dìngqī huì jǔbàn yīxiē tuòzhǎn huódòng.",
        "vi": "Công ty chúng tôi rất chú trọng hợp tác đội ngũ, định kỳ sẽ tổ chức một số hoạt động phát triển kỹ năng."
      },
      {
        "speaker": "B",
        "cn": "良好的职场氛围能显著提高员工的工作积极性和创造力。",
        "py": "Liánghǎo de zhíchǎng fēnwéi néng xiǎnzhù tígāo yuángōng de gōngzuò jījíxìng hé chuàngzàolì.",
        "vi": "Bầu không khí nơi làm việc tốt có thể nâng cao rõ rệt tính tích cực và sức sáng tạo của nhân viên."
      }
    ],
    "questions": [
      {
        "id": 8101,
        "question": "Tư tưởng cốt lõi hay chủ đề thảo luận ở đây là gì?",
        "options": [
          "A. Văn hóa doanh nghiệp",
          "B. Nghiên cứu sinh học đại dương",
          "C. Quy trình sản xuất linh kiện bán dẫn",
          "D. Lịch sử kiến trúc phương Tây"
        ],
        "correct": 0,
        "explanation": "Đáp án chính xác là A. Văn hóa doanh nghiệp. Nội dung này được thể hiện trực tiếp trong bài nghe."
      },
      {
        "id": 8102,
        "question": "Đoạn hội thoại xuất hiện các từ ngữ nâng cao thuộc trình độ nào?",
        "options": [
          "A. HSK 2",
          "B. HSK 4",
          "C. HSK 1",
          "D. HSK 3"
        ],
        "correct": 1,
        "explanation": "Đáp án chính xác là B. HSK 4. Nội dung này được thể hiện trực tiếp trong bài nghe."
      },
      {
        "id": 8103,
        "question": "Đâu là nhận định đúng về nội dung trên?",
        "options": [
          "A. Mang tính logic, thảo luận về các vấn đề phổ quát trong xã hội hiện đại",
          "B. Hoàn toàn là những câu chào hỏi nông cạn",
          "C. Sử dụng nhiều thuật ngữ y khoa cổ truyền",
          "D. Là cuộc tranh luận gay gắt dẫn đến xung đột đột ngột"
        ],
        "correct": 0,
        "explanation": "Đáp án chính xác là A. Mang tính logic, thảo luận về các vấn đề phổ quát trong xã hội hiện đại. Nội dung này được thể hiện trực tiếp trong bài nghe."
      }
    ]
  },
  {
    "id": 82,
    "level": "HSK 4",
    "title": "Tiêu dùng thông minh",
    "audioText": "A: 现在的年轻人购物过于看重品牌，很多时候都是盲目消费。\nB: 我觉得买东西应该更注重实用性和性价比，适合自己的才是最好的。",
    "dialogue": [
      {
        "speaker": "A",
        "cn": "现在的年轻人购物过于看重品牌，很多时候都是盲目消费。",
        "py": "Xiànzài de niánqīngrén gòuwù guòyú kànzhòng pǐnpái, hěnduō shíhou dōu shì mángmù xiāofèi.",
        "vi": "Giới trẻ hiện nay mua sắm quá coi trọng thương hiệu, nhiều khi đều là tiêu dùng mù quáng."
      },
      {
        "speaker": "B",
        "cn": "我觉得买东西应该更注重实用性和性价比，适合自己的才是最好的。",
        "py": "Wǒ juéde mǎi dōngxi yīnggāi gèng zhùzhòng shíyòngxìng hé xìngjiàbǐ, shìhé zìjǐ de cái shì zuì hǎo de.",
        "vi": "Tôi thấy mua đồ nên chú trọng hơn vào tính thực dụng và tỉ lệ giá cả trên hiệu năng, hợp với mình mới là tốt nhất."
      }
    ],
    "questions": [
      {
        "id": 8201,
        "question": "Tư tưởng cốt lõi hay chủ đề thảo luận ở đây là gì?",
        "options": [
          "A. Tiêu dùng thông minh",
          "B. Nghiên cứu sinh học đại dương",
          "C. Quy trình sản xuất linh kiện bán dẫn",
          "D. Lịch sử kiến trúc phương Tây"
        ],
        "correct": 0,
        "explanation": "Đáp án chính xác là A. Tiêu dùng thông minh. Nội dung này được thể hiện trực tiếp trong bài nghe."
      },
      {
        "id": 8202,
        "question": "Đoạn hội thoại xuất hiện các từ ngữ nâng cao thuộc trình độ nào?",
        "options": [
          "A. HSK 2",
          "B. HSK 4",
          "C. HSK 1",
          "D. HSK 3"
        ],
        "correct": 1,
        "explanation": "Đáp án chính xác là B. HSK 4. Nội dung này được thể hiện trực tiếp trong bài nghe."
      },
      {
        "id": 8203,
        "question": "Đâu là nhận định đúng về nội dung trên?",
        "options": [
          "A. Mang tính logic, thảo luận về các vấn đề phổ quát trong xã hội hiện đại",
          "B. Hoàn toàn là những câu chào hỏi nông cạn",
          "C. Sử dụng nhiều thuật ngữ y khoa cổ truyền",
          "D. Là cuộc tranh luận gay gắt dẫn đến xung đột đột ngột"
        ],
        "correct": 0,
        "explanation": "Đáp án chính xác là A. Mang tính logic, thảo luận về các vấn đề phổ quát trong xã hội hiện đại. Nội dung này được thể hiện trực tiếp trong bài nghe."
      }
    ]
  },
  {
    "id": 83,
    "level": "HSK 4",
    "title": "Bảo tàng nghệ thuật",
    "audioText": "A: 周六美术馆有一个现代艺术展，你想去看看吗？\nB: 去啊，通过欣赏艺术作品可以丰富我们的精神世界，提升审美。",
    "dialogue": [
      {
        "speaker": "A",
        "cn": "周六美术馆有一个现代艺术展，你想去看看吗？",
        "py": "Zhōuliù měishùguǎn yǒu yíge xiàndài yìshù zhǎn, nǐ xiǎng qù kànkàn ma?",
        "vi": "Thứ bảy ở bảo tàng mỹ thuật có một cuộc triển lãm nghệ thuật hiện đại, bạn muốn đi xem không?"
      },
      {
        "speaker": "B",
        "cn": "去啊，通过欣赏艺术作品可以丰富我们的精神世界，提升审美。",
        "py": "Qù ā, tōngguò xīnshǎng yìshù zuòpǐn kěyǐ fēngfù wǒmen de jīngshén shìjiè, tíshēng shěnměi.",
        "vi": "Đi chứ, thông qua thưởng thức tác phẩm nghệ thuật có thể làm phong phú thế giới tinh thần và nâng cao thẩm mỹ của chúng ta."
      }
    ],
    "questions": [
      {
        "id": 8301,
        "question": "Tư tưởng cốt lõi hay chủ đề thảo luận ở đây là gì?",
        "options": [
          "A. Bảo tàng nghệ thuật",
          "B. Nghiên cứu sinh học đại dương",
          "C. Quy trình sản xuất linh kiện bán dẫn",
          "D. Lịch sử kiến trúc phương Tây"
        ],
        "correct": 0,
        "explanation": "Đáp án chính xác là A. Bảo tàng nghệ thuật. Nội dung này được thể hiện trực tiếp trong bài nghe."
      },
      {
        "id": 8302,
        "question": "Đoạn hội thoại xuất hiện các từ ngữ nâng cao thuộc trình độ nào?",
        "options": [
          "A. HSK 2",
          "B. HSK 4",
          "C. HSK 1",
          "D. HSK 3"
        ],
        "correct": 1,
        "explanation": "Đáp án chính xác là B. HSK 4. Nội dung này được thể hiện trực tiếp trong bài nghe."
      },
      {
        "id": 8303,
        "question": "Đâu là nhận định đúng về nội dung trên?",
        "options": [
          "A. Mang tính logic, thảo luận về các vấn đề phổ quát trong xã hội hiện đại",
          "B. Hoàn toàn là những câu chào hỏi nông cạn",
          "C. Sử dụng nhiều thuật ngữ y khoa cổ truyền",
          "D. Là cuộc tranh luận gay gắt dẫn đến xung đột đột ngột"
        ],
        "correct": 0,
        "explanation": "Đáp án chính xác là A. Mang tính logic, thảo luận về các vấn đề phổ quát trong xã hội hiện đại. Nội dung này được thể hiện trực tiếp trong bài nghe."
      }
    ]
  },
  {
    "id": 84,
    "level": "HSK 4",
    "title": "Áp lực cuộc sống",
    "audioText": "A: 面对生活和工作的双重压力，有时候真觉得喘不过气来。\nB: 学会适时地给自己放个假，运动或者听音乐都是很好的减压方式。",
    "dialogue": [
      {
        "speaker": "A",
        "cn": "面对生活和工作的双重压力，有时候真觉得喘不过气来。",
        "py": "Miànduì shēnghuó hé gōngzuò de shuāngchóng yālì, yǒushíhou zhēn juéde chuǎnbúguòqì lái.",
        "vi": "Đối mặt với áp lực kép từ cuộc sống và công việc, đôi khi thực sự cảm thấy ngạt thở."
      },
      {
        "speaker": "B",
        "cn": "学会适时地给自己放个假，运动或者听音乐都是很好的减压方式。",
        "py": "Xuéhuì shìshí de gěi zìjǐ fàng gè jiǎ, yùndòng huòzhě tīng yīnyuè dōu shì hěn hǎo de jiǎnyā fāngshì.",
        "vi": "Hãy học cách tự cho mình nghỉ ngơi đúng lúc, vận động hoặc nghe nhạc đều là những phương pháp giảm áp lực rất tốt."
      }
    ],
    "questions": [
      {
        "id": 8401,
        "question": "Tư tưởng cốt lõi hay chủ đề thảo luận ở đây là gì?",
        "options": [
          "A. Áp lực cuộc sống",
          "B. Nghiên cứu sinh học đại dương",
          "C. Quy trình sản xuất linh kiện bán dẫn",
          "D. Lịch sử kiến trúc phương Tây"
        ],
        "correct": 0,
        "explanation": "Đáp án chính xác là A. Áp lực cuộc sống. Nội dung này được thể hiện trực tiếp trong bài nghe."
      },
      {
        "id": 8402,
        "question": "Đoạn hội thoại xuất hiện các từ ngữ nâng cao thuộc trình độ nào?",
        "options": [
          "A. HSK 2",
          "B. HSK 4",
          "C. HSK 1",
          "D. HSK 3"
        ],
        "correct": 1,
        "explanation": "Đáp án chính xác là B. HSK 4. Nội dung này được thể hiện trực tiếp trong bài nghe."
      },
      {
        "id": 8403,
        "question": "Đâu là nhận định đúng về nội dung trên?",
        "options": [
          "A. Mang tính logic, thảo luận về các vấn đề phổ quát trong xã hội hiện đại",
          "B. Hoàn toàn là những câu chào hỏi nông cạn",
          "C. Sử dụng nhiều thuật ngữ y khoa cổ truyền",
          "D. Là cuộc tranh luận gay gắt dẫn đến xung đột đột ngột"
        ],
        "correct": 0,
        "explanation": "Đáp án chính xác là A. Mang tính logic, thảo luận về các vấn đề phổ quát trong xã hội hiện đại. Nội dung này được thể hiện trực tiếp trong bài nghe."
      }
    ]
  },
  {
    "id": 85,
    "level": "HSK 4",
    "title": "Công nghệ trí tuệ",
    "audioText": "A: 人工智能的发展速度太惊人了，很多岗位未来都有可能被取代。\nB: 关键是要不断学习新技能，提升自己的核心竞争力，保持不可替代性。",
    "dialogue": [
      {
        "speaker": "A",
        "cn": "人工智能的发展速度太惊人了，很多岗位未来都有可能被取代。",
        "py": "Réngōng zhìnéng de fāzhǎn sùdù tài jīngrén le, hěnduō gǎngwèi wèilái dōu yǒu kěnéng bèi qǔdài.",
        "vi": "Tốc độ phát triển của trí tuệ nhân tạo thật kinh ngạc, nhiều vị trí công việc tương lai đều có khả năng bị thay thế."
      },
      {
        "speaker": "B",
        "cn": "关键是要不断学习新技能，提升自己的核心竞争力，保持不可替代性。",
        "py": "Guānjiàn shì yào búduàn xuéxí xīn jìnéng, tíshēng zìjǐ de héxīn jìngzhēnglì, bǎochí bùkě qǔdài xìng.",
        "vi": "Mấu chốt là phải không ngừng học hỏi kỹ năng mới, nâng cao năng lực cạnh tranh cốt lõi của bản thân để giữ tính không thể thay thế."
      }
    ],
    "questions": [
      {
        "id": 8501,
        "question": "Tư tưởng cốt lõi hay chủ đề thảo luận ở đây là gì?",
        "options": [
          "A. Công nghệ trí tuệ",
          "B. Nghiên cứu sinh học đại dương",
          "C. Quy trình sản xuất linh kiện bán dẫn",
          "D. Lịch sử kiến trúc phương Tây"
        ],
        "correct": 0,
        "explanation": "Đáp án chính xác là A. Công nghệ trí tuệ. Nội dung này được thể hiện trực tiếp trong bài nghe."
      },
      {
        "id": 8502,
        "question": "Đoạn hội thoại xuất hiện các từ ngữ nâng cao thuộc trình độ nào?",
        "options": [
          "A. HSK 2",
          "B. HSK 4",
          "C. HSK 1",
          "D. HSK 3"
        ],
        "correct": 1,
        "explanation": "Đáp án chính xác là B. HSK 4. Nội dung này được thể hiện trực tiếp trong bài nghe."
      },
      {
        "id": 8503,
        "question": "Đâu là nhận định đúng về nội dung trên?",
        "options": [
          "A. Mang tính logic, thảo luận về các vấn đề phổ quát trong xã hội hiện đại",
          "B. Hoàn toàn là những câu chào hỏi nông cạn",
          "C. Sử dụng nhiều thuật ngữ y khoa cổ truyền",
          "D. Là cuộc tranh luận gay gắt dẫn đến xung đột đột ngột"
        ],
        "correct": 0,
        "explanation": "Đáp án chính xác là A. Mang tính logic, thảo luận về các vấn đề phổ quát trong xã hội hiện đại. Nội dung này được thể hiện trực tiếp trong bài nghe."
      }
    ]
  },
  {
    "id": 86,
    "level": "HSK 4",
    "title": "Chế độ giảm cân",
    "audioText": "A: 为了减肥，我最近已经连续半个月不吃晚饭了。\nB: 这种节食减肥的方法极不科学，容易反弹，而且对胃伤害很大。",
    "dialogue": [
      {
        "speaker": "A",
        "cn": "为了减肥，我最近已经连续半个月不吃晚饭了。",
        "py": "Wèile jiǎnféi, wǒ zuìjìn yǐjīng liánxù bàn gè yuè bù chī wǎnfàn le.",
        "vi": "Để giảm cân, gần đây tôi đã liên tục nửa tháng không ăn cơm tối rồi."
      },
      {
        "speaker": "B",
        "cn": "这种节食减肥的方法极不科学，容易反弹，而且对胃伤害很大。",
        "py": "Zhè zhǒng jiéshí jiǎnféi de fāngfǎ jí bù kēxué, róngyì fǎntán, érqiě duì wèi shānghài hěn dà.",
        "vi": "Phương pháp giảm cân nhịn ăn này cực kỳ không khoa học, dễ tăng cân trở lại, và lại gây tổn hại lớn cho dạ dày."
      }
    ],
    "questions": [
      {
        "id": 8601,
        "question": "Tư tưởng cốt lõi hay chủ đề thảo luận ở đây là gì?",
        "options": [
          "A. Chế độ giảm cân",
          "B. Nghiên cứu sinh học đại dương",
          "C. Quy trình sản xuất linh kiện bán dẫn",
          "D. Lịch sử kiến trúc phương Tây"
        ],
        "correct": 0,
        "explanation": "Đáp án chính xác là A. Chế độ giảm cân. Nội dung này được thể hiện trực tiếp trong bài nghe."
      },
      {
        "id": 8602,
        "question": "Đoạn hội thoại xuất hiện các từ ngữ nâng cao thuộc trình độ nào?",
        "options": [
          "A. HSK 2",
          "B. HSK 4",
          "C. HSK 1",
          "D. HSK 3"
        ],
        "correct": 1,
        "explanation": "Đáp án chính xác là B. HSK 4. Nội dung này được thể hiện trực tiếp trong bài nghe."
      },
      {
        "id": 8603,
        "question": "Đâu là nhận định đúng về nội dung trên?",
        "options": [
          "A. Mang tính logic, thảo luận về các vấn đề phổ quát trong xã hội hiện đại",
          "B. Hoàn toàn là những câu chào hỏi nông cạn",
          "C. Sử dụng nhiều thuật ngữ y khoa cổ truyền",
          "D. Là cuộc tranh luận gay gắt dẫn đến xung đột đột ngột"
        ],
        "correct": 0,
        "explanation": "Đáp án chính xác là A. Mang tính logic, thảo luận về các vấn đề phổ quát trong xã hội hiện đại. Nội dung này được thể hiện trực tiếp trong bài nghe."
      }
    ]
  },
  {
    "id": 87,
    "level": "HSK 4",
    "title": "Văn hóa đọc sách",
    "audioText": "A: 数字化时代的到来让纸质书的销量受到了很大的冲击。\nB: 电子书虽然携带方便，但纸质书独特的触感和墨香是无法被复制的。",
    "dialogue": [
      {
        "speaker": "A",
        "cn": "数字化时代的到来让纸质书的销量受到了很大的冲击。",
        "py": "Shùzìhuà shídài de dàolái ràng zhǐzhìshū de xiāoliàng shòudaole hěndà de chōngjī.",
        "vi": "Sự xuất hiện của thời đại kỹ thuật số khiến lượng tiêu thụ sách giấy phải chịu sự tác động rất lớn."
      },
      {
        "speaker": "B",
        "cn": "电子书虽然携带方便，但纸质书独特的触感和墨香是无法被复制的。",
        "py": "Diànzǐshū suīrán xiédài fāngbiàn, dàn zhǐzhìshū dútè de chùgǎn hé mòxiāng shì wúfǎ bèi fùzhì de.",
        "vi": "Sách điện tử tuy mang theo thuận tiện, nhưng cảm giác chạm độc đáo và hương mực của sách giấy là không thể sao chép được."
      }
    ],
    "questions": [
      {
        "id": 8701,
        "question": "Tư tưởng cốt lõi hay chủ đề thảo luận ở đây là gì?",
        "options": [
          "A. Văn hóa đọc sách",
          "B. Nghiên cứu sinh học đại dương",
          "C. Quy trình sản xuất linh kiện bán dẫn",
          "D. Lịch sử kiến trúc phương Tây"
        ],
        "correct": 0,
        "explanation": "Đáp án chính xác là A. Văn hóa đọc sách. Nội dung này được thể hiện trực tiếp trong bài nghe."
      },
      {
        "id": 8702,
        "question": "Đoạn hội thoại xuất hiện các từ ngữ nâng cao thuộc trình độ nào?",
        "options": [
          "A. HSK 2",
          "B. HSK 4",
          "C. HSK 1",
          "D. HSK 3"
        ],
        "correct": 1,
        "explanation": "Đáp án chính xác là B. HSK 4. Nội dung này được thể hiện trực tiếp trong bài nghe."
      },
      {
        "id": 8703,
        "question": "Đâu là nhận định đúng về nội dung trên?",
        "options": [
          "A. Mang tính logic, thảo luận về các vấn đề phổ quát trong xã hội hiện đại",
          "B. Hoàn toàn là những câu chào hỏi nông cạn",
          "C. Sử dụng nhiều thuật ngữ y khoa cổ truyền",
          "D. Là cuộc tranh luận gay gắt dẫn đến xung đột đột ngột"
        ],
        "correct": 0,
        "explanation": "Đáp án chính xác là A. Mang tính logic, thảo luận về các vấn đề phổ quát trong xã hội hiện đại. Nội dung này được thể hiện trực tiếp trong bài nghe."
      }
    ]
  },
  {
    "id": 88,
    "level": "HSK 4",
    "title": "Quan niệm hạnh phúc",
    "audioText": "A: 许多人认为拥有巨额财富才是幸福，你觉得呢？\nB: Hạnh phúc其实很简单，拥有健康的身体、一份热爱的职业和温馨的家庭足矣。",
    "dialogue": [
      {
        "speaker": "A",
        "cn": "许多人认为拥有巨额财富才是幸福，你觉得呢？",
        "py": "Xǔduō rén rènwéi yōngyǒu jù'é cáifù cái shì xìngfú, nǐ juéde ne?",
        "vi": "Nhiều người cho rằng sở hữu khối tài sản khổng lồ mới là hạnh phúc, bạn thấy thế nào?"
      },
      {
        "speaker": "B",
        "cn": "Hạnh phúc其实很简单，拥有健康的身体、一份热爱的职业和温馨的家庭足矣。",
        "py": "Xìngfú qíshí hěn jiǎndān, yōngyǒu jiànkāng de shēntǐ, yífèn rè'ài de zhíyè hé wēnxīn de jiātíng zú yǐ.",
        "vi": "Hạnh phúc thực ra rất đơn giản, sở hữu một cơ thể khỏe mạnh, một công việc yêu thích và một gia đình ấm áp là đủ rồi."
      }
    ],
    "questions": [
      {
        "id": 8801,
        "question": "Tư tưởng cốt lõi hay chủ đề thảo luận ở đây là gì?",
        "options": [
          "A. Quan niệm hạnh phúc",
          "B. Nghiên cứu sinh học đại dương",
          "C. Quy trình sản xuất linh kiện bán dẫn",
          "D. Lịch sử kiến trúc phương Tây"
        ],
        "correct": 0,
        "explanation": "Đáp án chính xác là A. Quan niệm hạnh phúc. Nội dung này được thể hiện trực tiếp trong bài nghe."
      },
      {
        "id": 8802,
        "question": "Đoạn hội thoại xuất hiện các từ ngữ nâng cao thuộc trình độ nào?",
        "options": [
          "A. HSK 2",
          "B. HSK 4",
          "C. HSK 1",
          "D. HSK 3"
        ],
        "correct": 1,
        "explanation": "Đáp án chính xác là B. HSK 4. Nội dung này được thể hiện trực tiếp trong bài nghe."
      },
      {
        "id": 8803,
        "question": "Đâu là nhận định đúng về nội dung trên?",
        "options": [
          "A. Mang tính logic, thảo luận về các vấn đề phổ quát trong xã hội hiện đại",
          "B. Hoàn toàn là những câu chào hỏi nông cạn",
          "C. Sử dụng nhiều thuật ngữ y khoa cổ truyền",
          "D. Là cuộc tranh luận gay gắt dẫn đến xung đột đột ngột"
        ],
        "correct": 0,
        "explanation": "Đáp án chính xác là A. Mang tính logic, thảo luận về các vấn đề phổ quát trong xã hội hiện đại. Nội dung này được thể hiện trực tiếp trong bài nghe."
      }
    ]
  },
  {
    "id": 89,
    "level": "HSK 5",
    "title": "Chiến lược thương mại",
    "audioText": "A: 面对日益激烈的市场竞争，我们必须加快产品创新和品牌升级的步伐。\nB: 赞同，同时还要深入发掘潜在消费群体的核心需求，实行差异化营销战略。",
    "dialogue": [
      {
        "speaker": "A",
        "cn": "面对日益激烈的市场竞争，我们必须加快产品创新和品牌升级的步伐。",
        "py": "Miànduì rìyì jīliè de shìchǎng jìngzhēng, wǒmen bìxū jiākuài chǎnpǐn chuàngxīn hé pǐnpái shēngjí de bùfá.",
        "vi": "Đối mặt với cạnh tranh thị trường ngày càng gay gắt, chúng ta phải đẩy nhanh nhịp độ đổi mới sản phẩm và nâng cấp thương hiệu."
      },
      {
        "speaker": "B",
        "cn": "赞同，同时还要深入发掘潜在消费群体的核心需求，实行差异化营销战略。",
        "py": "Zàntóng, tóngshí hái yào shēnrù fājué qiánzài xiāofèi qúntǐ de héxīn xūqiú, shíxíng chāyìhuà yíngxiāo zhànlù.",
        "vi": "Tán thành, đồng thời còn phải đào sâu khai thác nhu cầu cốt lõi của nhóm khách hàng tiềm năng, thực hiện chiến lược tiếp thị khác biệt hóa."
      }
    ],
    "questions": [
      {
        "id": 8901,
        "question": "Bản chất cốt lõi sâu sắc của cuộc đối thoại chuyên sâu này là gì?",
        "options": [
          "A. Chiến lược thương mại",
          "B. Giải mã văn bản khảo cổ học",
          "C. Thống kê sản lượng khoáng sản phi kim loại",
          "D. Thiết kế sơ đồ mạch điện tử công suất lớn"
        ],
        "correct": 0,
        "explanation": "Đáp án chính xác là A. Chiến lược thương mại. Nội dung này được thể hiện trực tiếp trong bài nghe."
      },
      {
        "id": 8902,
        "question": "Đoạn văn mang các cấu trúc ngữ pháp phức tạp và vốn từ vựng cao cấp thuộc cấp độ nào?",
        "options": [
          "A. HSK 1",
          "B. HSK 2",
          "C. HSK 5",
          "D. HSK 3"
        ],
        "correct": 2,
        "explanation": "Đáp án chính xác là C. HSK 5. Nội dung này được thể hiện trực tiếp trong bài nghe."
      },
      {
        "id": 8903,
        "question": "Phương thức lập luận của các nhân vật thể hiện tính chất gì?",
        "options": [
          "A. Phân tích biện chứng, có chiều sâu lý luận và mang tầm nhìn chiến lược",
          "B. Hoàn toàn là trò chuyện bông đùa thiếu căn cứ",
          "C. Sử dụng tiếng lóng của vùng miền xa xôi",
          "D. Mang tính đe dọa, ép buộc đối phương"
        ],
        "correct": 0,
        "explanation": "Đáp án chính xác là A. Phân tích biện chứng, có chiều sâu lý luận và mang tầm nhìn chiến lược. Nội dung này được thể hiện trực tiếp trong bài nghe."
      }
    ]
  },
  {
    "id": 90,
    "level": "HSK 5",
    "title": "Tâm lý quản lý",
    "audioText": "A: 优秀的管理者不应该一味地下达命令，而要善于倾听员工内心的真实想法。\nB: 的确，激发员工的内在驱动力，营造信任与包容的文化氛围，才是长远之策。",
    "dialogue": [
      {
        "speaker": "A",
        "cn": "优秀的管理者不应该一味地下达命令，而要善于倾听员工内心的真实想法。",
        "py": "Yōuxiù de guǎnlǐzhě bù yīnggāi yīwèi de xiàdá mìnglìng, ér yào shànyú qīngtīng yuángōng nèixīn de zhēnshí xiǎngfǎ.",
        "vi": "Nhà quản lý xuất sắc không nên mù quáng ban hành mệnh lệnh, mà phải giỏi lắng nghe suy nghĩ chân thật từ nội tâm nhân viên."
      },
      {
        "speaker": "B",
        "cn": "的确，激发员工的内在驱动力，营造信任与包容的文化氛围，才是长远之策。",
        "py": "Díquè, jīfā yuángōng de nèizài qūdònglì, yíngzào xìnrùn yǔ bāoróng de wénhuà fēnwéi, cái shì chángyuǎn zhī cè.",
        "vi": "Chính xác, kích hoạt động lực thúc đẩy nội tại của nhân viên, tạo dựng bầu không khí văn hóa tin tưởng và bao dung, mới là thượng sách lâu dài."
      }
    ],
    "questions": [
      {
        "id": 9001,
        "question": "Bản chất cốt lõi sâu sắc của cuộc đối thoại chuyên sâu này là gì?",
        "options": [
          "A. Tâm lý quản lý",
          "B. Giải mã văn bản khảo cổ học",
          "C. Thống kê sản lượng khoáng sản phi kim loại",
          "D. Thiết kế sơ đồ mạch điện tử công suất lớn"
        ],
        "correct": 0,
        "explanation": "Đáp án chính xác là A. Tâm lý quản lý. Nội dung này được thể hiện trực tiếp trong bài nghe."
      },
      {
        "id": 9002,
        "question": "Đoạn văn mang các cấu trúc ngữ pháp phức tạp và vốn từ vựng cao cấp thuộc cấp độ nào?",
        "options": [
          "A. HSK 1",
          "B. HSK 2",
          "C. HSK 5",
          "D. HSK 3"
        ],
        "correct": 2,
        "explanation": "Đáp án chính xác là C. HSK 5. Nội dung này được thể hiện trực tiếp trong bài nghe."
      },
      {
        "id": 9003,
        "question": "Phương thức lập luận của các nhân vật thể hiện tính chất gì?",
        "options": [
          "A. Phân tích biện chứng, có chiều sâu lý luận và mang tầm nhìn chiến lược",
          "B. Hoàn toàn là trò chuyện bông đùa thiếu căn cứ",
          "C. Sử dụng tiếng lóng của vùng miền xa xôi",
          "D. Mang tính đe dọa, ép buộc đối phương"
        ],
        "correct": 0,
        "explanation": "Đáp án chính xác là A. Phân tích biện chứng, có chiều sâu lý luận và mang tầm nhìn chiến lược. Nội dung này được thể hiện trực tiếp trong bài nghe."
      }
    ]
  },
  {
    "id": 91,
    "level": "HSK 5",
    "title": "Trách nhiệm môi trường",
    "audioText": "A: 企业在追求经济效益的同时，绝不能以牺牲生态环境为代价。\nB: 推行绿色低碳生产模式不仅是履行社会责任，更是企业实现可持续发展的必然选择。",
    "dialogue": [
      {
        "speaker": "A",
        "cn": "企业在追求经济效益的同时，绝不能以牺牲生态环境为代价。",
        "py": "Qǐyè zài zhuīqiú jīngjì xiàoyì de tóngshí, jué bùnéng yǐ xīshēng shēngtài huánjìng wèi dàijià.",
        "vi": "Doanh nghiệp trong khi theo đuổi hiệu quả kinh tế, tuyệt đối không thể đánh đổi bằng cái giá hy sinh môi trường sinh thái."
      },
      {
        "speaker": "B",
        "cn": "推行绿色低碳生产模式不仅是履行社会责任，更是企业实现可持续发展的必然选择。",
        "py": "Tuīxíng lǜsè dītàn shēngchǎn móshì bùjǐn shì lǚxíng shèhuì zérèn, gèng shì qǐyè shíxiàn kěchíxù fāzhǎn de bìrán xuǎnzé.",
        "vi": "Thúc đẩy mô hình sản xuất xanh các-bon thấp không chỉ là thực hiện trách nhiệm xã hội, mà càng là lựa chọn tất yếu để doanh nghiệp đạt phát triển bền vững."
      }
    ],
    "questions": [
      {
        "id": 9101,
        "question": "Bản chất cốt lõi sâu sắc của cuộc đối thoại chuyên sâu này là gì?",
        "options": [
          "A. Trách nhiệm môi trường",
          "B. Giải mã văn bản khảo cổ học",
          "C. Thống kê sản lượng khoáng sản phi kim loại",
          "D. Thiết kế sơ đồ mạch điện tử công suất lớn"
        ],
        "correct": 0,
        "explanation": "Đáp án chính xác là A. Trách nhiệm môi trường. Nội dung này được thể hiện trực tiếp trong bài nghe."
      },
      {
        "id": 9102,
        "question": "Đoạn văn mang các cấu trúc ngữ pháp phức tạp và vốn từ vựng cao cấp thuộc cấp độ nào?",
        "options": [
          "A. HSK 1",
          "B. HSK 2",
          "C. HSK 5",
          "D. HSK 3"
        ],
        "correct": 2,
        "explanation": "Đáp án chính xác là C. HSK 5. Nội dung này được thể hiện trực tiếp trong bài nghe."
      },
      {
        "id": 9103,
        "question": "Phương thức lập luận của các nhân vật thể hiện tính chất gì?",
        "options": [
          "A. Phân tích biện chứng, có chiều sâu lý luận và mang tầm nhìn chiến lược",
          "B. Hoàn toàn là trò chuyện bông đùa thiếu căn cứ",
          "C. Sử dụng tiếng lóng của vùng miền xa xôi",
          "D. Mang tính đe dọa, ép buộc đối phương"
        ],
        "correct": 0,
        "explanation": "Đáp án chính xác là A. Phân tích biện chứng, có chiều sâu lý luận và mang tầm nhìn chiến lược. Nội dung này được thể hiện trực tiếp trong bài nghe."
      }
    ]
  },
  {
    "id": 92,
    "level": "HSK 5",
    "title": "Triết lý giáo dục",
    "audioText": "A: 应试教育往往过于关注分数，从而在一定程度上扼杀了孩子的想象力和创造力。\nB: 应当积极倡导素质教育，注重因材施教，全面培养学生的综合素养与健全人格。",
    "dialogue": [
      {
        "speaker": "A",
        "cn": "应试教育往往过于关注分数，从而在一定程度上扼杀了孩子的想象力和创造力。",
        "py": "Yìngshì jiàoyù wǎngwǎng guòyú guānzhù fēnshù, cóng'ér zài yídìng chéngdù shàng èshāle háizi de xiǎngxiànglì hé chuàngzàolì.",
        "vi": "Giáo dục ứng thí thi cử thường quá chú trọng điểm số, từ đó ở mức độ nhất định bóp nghẹt trí tưởng tượng và sức sáng tạo của trẻ nhỏ."
      },
      {
        "speaker": "B",
        "cn": "应当积极倡导素质教育，注重因材施教，全面培养学生的综合素养与健全人格。",
        "py": "Yīnggāi jījí chàngdǎo sùzhì jiàoyù, zhùzhòng yīncái shījiào, quánmiàn péiyǎng xuéshēng de zōnghé sùyǎng yǔ jiànquán réngé.",
        "vi": "Nên tích cực chủ trương giáo dục phẩm chất, chú trọng dạy học theo đặc điểm năng khiếu, nuôi dưỡng toàn diện tố chất tổng hợp và nhân cách kiện toàn của học sinh."
      }
    ],
    "questions": [
      {
        "id": 9201,
        "question": "Bản chất cốt lõi sâu sắc của cuộc đối thoại chuyên sâu này là gì?",
        "options": [
          "A. Triết lý giáo dục",
          "B. Giải mã văn bản khảo cổ học",
          "C. Thống kê sản lượng khoáng sản phi kim loại",
          "D. Thiết kế sơ đồ mạch điện tử công suất lớn"
        ],
        "correct": 0,
        "explanation": "Đáp án chính xác là A. Triết lý giáo dục. Nội dung này được thể hiện trực tiếp trong bài nghe."
      },
      {
        "id": 9202,
        "question": "Đoạn văn mang các cấu trúc ngữ pháp phức tạp và vốn từ vựng cao cấp thuộc cấp độ nào?",
        "options": [
          "A. HSK 1",
          "B. HSK 2",
          "C. HSK 5",
          "D. HSK 3"
        ],
        "correct": 2,
        "explanation": "Đáp án chính xác là C. HSK 5. Nội dung này được thể hiện trực tiếp trong bài nghe."
      },
      {
        "id": 9203,
        "question": "Phương thức lập luận của các nhân vật thể hiện tính chất gì?",
        "options": [
          "A. Phân tích biện chứng, có chiều sâu lý luận và mang tầm nhìn chiến lược",
          "B. Hoàn toàn là trò chuyện bông đùa thiếu căn cứ",
          "C. Sử dụng tiếng lóng của vùng miền xa xôi",
          "D. Mang tính đe dọa, ép buộc đối phương"
        ],
        "correct": 0,
        "explanation": "Đáp án chính xác là A. Phân tích biện chứng, có chiều sâu lý luận và mang tầm nhìn chiến lược. Nội dung này được thể hiện trực tiếp trong bài nghe."
      }
    ]
  },
  {
    "id": 93,
    "level": "HSK 5",
    "title": "Nghiên cứu thị trường",
    "audioText": "A: 根据最新发布的数据分析报告，下半年线上消费增长势头依然强劲。\nB: 尤其是下沉市场的爆发力不容小觑，这正是我们拓展业务、占领市场份额的绝佳契机。",
    "dialogue": [
      {
        "speaker": "A",
        "cn": "根据最新发布的数据分析报告，下半年线上消费增长势头依然强劲。",
        "py": "Gēnjù zuìxīn fābù de shùjù fēnxī bàogào, xiàbànnián xiànshàng xiāofèi zēngzhǎng shìtóu yīrán qiángjìn.",
        "vi": "Căn cứ báo cáo phân tích dữ liệu mới công bố gần đây, đà tăng trưởng tiêu dùng trực tuyến nửa cuối năm vẫn vô cùng mạnh mẽ."
      },
      {
        "speaker": "B",
        "cn": "尤其是下沉市场的爆发力不容小觑，这正是我们拓展业务、占领市场份额的绝佳契机。",
        "py": "Yóuqí shì xiàchén shìchǎng de bàofālì bùróng xiǎoqù, zhè zhèngshì wǒmen tuòzhǎn yèwù, zhànlǐng shìchǎng fèn'é de juéjiā qījī.",
        "vi": "Đặc biệt là sức bùng nổ của thị trường ngách các khu vực cấp thấp không thể xem thường, đây chính là cơ hội tuyệt vời để chúng ta mở rộng kinh doanh, chiếm lĩnh thị phần."
      }
    ],
    "questions": [
      {
        "id": 9301,
        "question": "Bản chất cốt lõi sâu sắc của cuộc đối thoại chuyên sâu này là gì?",
        "options": [
          "A. Nghiên cứu thị trường",
          "B. Giải mã văn bản khảo cổ học",
          "C. Thống kê sản lượng khoáng sản phi kim loại",
          "D. Thiết kế sơ đồ mạch điện tử công suất lớn"
        ],
        "correct": 0,
        "explanation": "Đáp án chính xác là A. Nghiên cứu thị trường. Nội dung này được thể hiện trực tiếp trong bài nghe."
      },
      {
        "id": 9302,
        "question": "Đoạn văn mang các cấu trúc ngữ pháp phức tạp và vốn từ vựng cao cấp thuộc cấp độ nào?",
        "options": [
          "A. HSK 1",
          "B. HSK 2",
          "C. HSK 5",
          "D. HSK 3"
        ],
        "correct": 2,
        "explanation": "Đáp án chính xác là C. HSK 5. Nội dung này được thể hiện trực tiếp trong bài nghe."
      },
      {
        "id": 9303,
        "question": "Phương thức lập luận của các nhân vật thể hiện tính chất gì?",
        "options": [
          "A. Phân tích biện chứng, có chiều sâu lý luận và mang tầm nhìn chiến lược",
          "B. Hoàn toàn là trò chuyện bông đùa thiếu căn cứ",
          "C. Sử dụng tiếng lóng của vùng miền xa xôi",
          "D. Mang tính đe dọa, ép buộc đối phương"
        ],
        "correct": 0,
        "explanation": "Đáp án chính xác là A. Phân tích biện chứng, có chiều sâu lý luận và mang tầm nhìn chiến lược. Nội dung này được thể hiện trực tiếp trong bài nghe."
      }
    ]
  },
  {
    "id": 94,
    "level": "HSK 5",
    "title": "Sức mạnh truyền thông",
    "audioText": "A: 新媒体的崛起彻底改变了信息的传播格局，人人都成了内容的创作者和传播者。\nB: 随之而来的网络谣言和信息碎片化问题也愈发严峻，迫切需要引导和规范。",
    "dialogue": [
      {
        "speaker": "A",
        "cn": "新媒体的崛起彻底改变了信息的传播格局，人人都成了内容的创作者和传播者。",
        "py": "Xīnméitǐ de juéqǐ chèdǐ gǎibiànle xìnxī de chuánbō géjú, rénrén dōu chéngle nèiróng de chuàngzuòzhě hé chuánbōzhě.",
        "vi": "Sự trỗi dậy của truyền thông mới đã thay đổi hoàn toàn cục diện truyền thông thông tin, ai ai cũng trở thành người sáng tạo và truyền bá nội dung."
      },
      {
        "speaker": "B",
        "cn": "随之而来的网络谣言和信息碎片化问题也愈发严峻，迫切需要引导和规范。",
        "py": "Suízhī'érlái de wǎngluò yáoyán hé xìnxī suìpiànhuà wèntǐ yě yùfā yánjùn, pòqiè xūyào yǐndǎo hé guīfàn.",
        "vi": "Tin đồn mạng và vấn đề phân mảnh thông tin kéo theo sau đó cũng ngày một nghiêm trọng, vô cùng cấp bách cần định hướng và chuẩn hóa."
      }
    ],
    "questions": [
      {
        "id": 9401,
        "question": "Bản chất cốt lõi sâu sắc của cuộc đối thoại chuyên sâu này là gì?",
        "options": [
          "A. Sức mạnh truyền thông",
          "B. Giải mã văn bản khảo cổ học",
          "C. Thống kê sản lượng khoáng sản phi kim loại",
          "D. Thiết kế sơ đồ mạch điện tử công suất lớn"
        ],
        "correct": 0,
        "explanation": "Đáp án chính xác là A. Sức mạnh truyền thông. Nội dung này được thể hiện trực tiếp trong bài nghe."
      },
      {
        "id": 9402,
        "question": "Đoạn văn mang các cấu trúc ngữ pháp phức tạp và vốn từ vựng cao cấp thuộc cấp độ nào?",
        "options": [
          "A. HSK 1",
          "B. HSK 2",
          "C. HSK 5",
          "D. HSK 3"
        ],
        "correct": 2,
        "explanation": "Đáp án chính xác là C. HSK 5. Nội dung này được thể hiện trực tiếp trong bài nghe."
      },
      {
        "id": 9403,
        "question": "Phương thức lập luận của các nhân vật thể hiện tính chất gì?",
        "options": [
          "A. Phân tích biện chứng, có chiều sâu lý luận và mang tầm nhìn chiến lược",
          "B. Hoàn toàn là trò chuyện bông đùa thiếu căn cứ",
          "C. Sử dụng tiếng lóng của vùng miền xa xôi",
          "D. Mang tính đe dọa, ép buộc đối phương"
        ],
        "correct": 0,
        "explanation": "Đáp án chính xác là A. Phân tích biện chứng, có chiều sâu lý luận và mang tầm nhìn chiến lược. Nội dung này được thể hiện trực tiếp trong bài nghe."
      }
    ]
  },
  {
    "id": 95,
    "level": "HSK 5",
    "title": "Phát triển kỹ năng",
    "audioText": "A: 在当今快速更迭的知识时代，终身学习已经不再是一句口号，而是生存技能。\nB: 唯有不断迭代自己的知识体系，敏锐捕获行业前沿动态，才能免遭时代的淘汰。",
    "dialogue": [
      {
        "speaker": "A",
        "cn": "在当今快速更迭的知识时代，终身学习已经不再是一句口号，而是生存技能。",
        "py": "Zài dāngjīn kuàisù gēngdié de zhīshí shídài, zhōngshēn xuéxí yǐjīng búzài shì yíjù kǒuhào, érshì shēngcún jìnéng.",
        "vi": "Trong thời đại tri thức thay đổi nhanh chóng ngày nay, học tập suốt đời đã không còn là một câu khẩu hiệu, mà là một kỹ năng sinh tồn."
      },
      {
        "speaker": "B",
        "cn": "唯有不断迭代自己的知识体系，敏锐捕获行业前沿动态，才能免遭时代的淘汰。",
        "py": "Wéi yǒu búduàn diédài zìjǐ de zhīshí tǐxì, mǐnruì bǔhuò hángyè qiányán dòngtài, cáinéng miǎnzāo shídài de táotài.",
        "vi": "Chỉ có không ngừng cập nhật hệ thống tri thức của bản thân, nhạy bén nắm bắt động thái tiên phong của ngành nghề, mới có thể tránh khỏi bị thời đại đào thải."
      }
    ],
    "questions": [
      {
        "id": 9501,
        "question": "Bản chất cốt lõi sâu sắc của cuộc đối thoại chuyên sâu này là gì?",
        "options": [
          "A. Phát triển kỹ năng",
          "B. Giải mã văn bản khảo cổ học",
          "C. Thống kê sản lượng khoáng sản phi kim loại",
          "D. Thiết kế sơ đồ mạch điện tử công suất lớn"
        ],
        "correct": 0,
        "explanation": "Đáp án chính xác là A. Phát triển kỹ năng. Nội dung này được thể hiện trực tiếp trong bài nghe."
      },
      {
        "id": 9502,
        "question": "Đoạn văn mang các cấu trúc ngữ pháp phức tạp và vốn từ vựng cao cấp thuộc cấp độ nào?",
        "options": [
          "A. HSK 1",
          "B. HSK 2",
          "C. HSK 5",
          "D. HSK 3"
        ],
        "correct": 2,
        "explanation": "Đáp án chính xác là C. HSK 5. Nội dung này được thể hiện trực tiếp trong bài nghe."
      },
      {
        "id": 9503,
        "question": "Phương thức lập luận của các nhân vật thể hiện tính chất gì?",
        "options": [
          "A. Phân tích biện chứng, có chiều sâu lý luận và mang tầm nhìn chiến lược",
          "B. Hoàn toàn là trò chuyện bông đùa thiếu căn cứ",
          "C. Sử dụng tiếng lóng của vùng miền xa xôi",
          "D. Mang tính đe dọa, ép buộc đối phương"
        ],
        "correct": 0,
        "explanation": "Đáp án chính xác là A. Phân tích biện chứng, có chiều sâu lý luận và mang tầm nhìn chiến lược. Nội dung này được thể hiện trực tiếp trong bài nghe."
      }
    ]
  },
  {
    "id": 96,
    "level": "HSK 5",
    "title": "Sự hài hòa xã hội",
    "audioText": "A: 衡量一个社会文明程度的标准，不仅看经济总量，更要看对弱势群体的关怀程度。\nB: 完善健全的社会保障福利体系和无障碍基础设施建设，是彰显社会温度的重要窗口。",
    "dialogue": [
      {
        "speaker": "A",
        "cn": "衡量一个社会文明程度的标准，不仅看经济总量，更要看对弱势群体的关怀程度。",
        "py": "Héngliáng yíge shèhuì wénmíng chéngdù de biāozhǔ, bùjǐn kàn jīngjì zǒngliàng, gèng yào kàn duì ruòshì qúntǐ de guānhuái chéngdù.",
        "vi": "Tiêu chuẩn đo lường mức độ văn minh của một xã hội, không chỉ nhìn tổng lượng kinh tế, mà càng phải nhìn vào mức độ quan tâm dành cho nhóm người yếu thế."
      },
      {
        "speaker": "B",
        "cn": "完善健全的社会保障福利体系和无障碍基础设施建设，是彰显社会温度的重要窗口。",
        "py": "Wánshàn jiànquán de shèhuì bǎozhàng fúlì tǐxì hé wú zhàngài jīchǔ shèshī jiànshè, shì zhāngxiǎn shèhuì wēndù de zhòngyào chuāngkǒu.",
        "vi": "Hệ thống phúc lợi bảo hiểm xã hội hoàn thiện kiện toàn và xây dựng cơ sở hạ tầng không rào cản là cửa sổ quan trọng biểu thị nhiệt độ tình người của xã hội."
      }
    ],
    "questions": [
      {
        "id": 9601,
        "question": "Bản chất cốt lõi sâu sắc của cuộc đối thoại chuyên sâu này là gì?",
        "options": [
          "A. Sự hài hòa xã hội",
          "B. Giải mã văn bản khảo cổ học",
          "C. Thống kê sản lượng khoáng sản phi kim loại",
          "D. Thiết kế sơ đồ mạch điện tử công suất lớn"
        ],
        "correct": 0,
        "explanation": "Đáp án chính xác là A. Sự hài hòa xã hội. Nội dung này được thể hiện trực tiếp trong bài nghe."
      },
      {
        "id": 9602,
        "question": "Đoạn văn mang các cấu trúc ngữ pháp phức tạp và vốn từ vựng cao cấp thuộc cấp độ nào?",
        "options": [
          "A. HSK 1",
          "B. HSK 2",
          "C. HSK 5",
          "D. HSK 3"
        ],
        "correct": 2,
        "explanation": "Đáp án chính xác là C. HSK 5. Nội dung này được thể hiện trực tiếp trong bài nghe."
      },
      {
        "id": 9603,
        "question": "Phương thức lập luận của các nhân vật thể hiện tính chất gì?",
        "options": [
          "A. Phân tích biện chứng, có chiều sâu lý luận và mang tầm nhìn chiến lược",
          "B. Hoàn toàn là trò chuyện bông đùa thiếu căn cứ",
          "C. Sử dụng tiếng lóng của vùng miền xa xôi",
          "D. Mang tính đe dọa, ép buộc đối phương"
        ],
        "correct": 0,
        "explanation": "Đáp án chính xác là A. Phân tích biện chứng, có chiều sâu lý luận và mang tầm nhìn chiến lược. Nội dung này được thể hiện trực tiếp trong bài nghe."
      }
    ]
  },
  {
    "id": 97,
    "level": "HSK 6",
    "title": "Hệ sinh thái và Biến đổi khí hậu",
    "audioText": "A: 气候变暖引发的连锁反应日趋显著，冰川融化、海平面上升等现象已是不争的事实，这直接危及到生物多样性的延续。\nB: 确实如此。遏制生态恶化亟需全球秉持构建人类命运共同体的理念，打破地域藩篱，推行大刀阔斧的低碳变革。",
    "dialogue": [
      {
        "speaker": "A",
        "cn": "气候变暖引发的连锁反应日趋显著，冰川融化、海平面上升等现象已是不争的事实，这直接危及到生物多样性的延续。",
        "py": "Qìhòu biànnuǎn yǐnfā de liánsuǒ fǎnyìng rìqū xiǎnzhù, bīngchuān rónghuà, hǎipímiàn shàngshēng děng xiànxiàng yǐ shì bùzhēng de shìshí, zhè zhíjiē wēijí dào shēngwù duōyàngxìng de yánxù.",
        "vi": "Phản ứng dây chuyền do khí hậu ấm lên gây ra ngày càng rõ rệt, hiện tượng băng tan, mực nước biển dâng cao đã là sự thật không thể chối cãi, điều này đe dọa trực tiếp đến sự tiếp diễn của tính đa dạng sinh học."
      },
      {
        "speaker": "B",
        "cn": "确实如此。遏制生态恶化亟需全球秉持构建人类命运共同体的理念，打破地域藩篱，推行大刀阔斧的低碳变革。",
        "py": "Quèshí rúcǐ. Èzhì shēngtài èhuà jíxū quánqiú bǐngchí gòujiàn rénlèi mìngyùn gòngtóngtǐ de lǐniàn, dǎpò dìyù fānlí, tuīxíng dàdāokuòfǔ de dītàn biàngé.",
        "vi": "Quả thực như vậy. Ngăn chặn sinh thái suy thoái khẩn cấp đòi hỏi toàn cầu giữ vững triết lý xây dựng cộng đồng chung vận mệnh nhân loại, phá bỏ rào cản địa lý, thúc đẩy cải cách các-bon thấp một cách quyết liệt và mạnh mẽ."
      }
    ],
    "questions": [
      {
        "id": 9701,
        "question": "Bản chất học thuật mang tính triết lý, vĩ mô cao cấp của đoạn văn là gì?",
        "options": [
          "A. Hệ sinh thái và Biến đổi khí hậu",
          "B. Quy trình bảo dưỡng lốp xe ô tô",
          "C. Thực đơn dinh dưỡng cho trẻ sơ sinh",
          "D. Hướng dẫn sử dụng lò vi sóng"
        ],
        "correct": 0,
        "explanation": "Đáp án chính xác là A. Hệ sinh thái và Biến đổi khí hậu. Nội dung này được thể hiện trực tiếp trong bài nghe."
      },
      {
        "id": 9702,
        "question": "Đoạn hội thoại sử dụng hàng loạt thành ngữ bốn chữ (成语) và từ vựng thuộc trình độ tối cao nào?",
        "options": [
          "A. HSK 6",
          "B. HSK 1",
          "C. HSK 2",
          "D. HSK 3"
        ],
        "correct": 0,
        "explanation": "Đáp án chính xác là A. HSK 6. Nội dung này được thể hiện trực tiếp trong bài nghe."
      },
      {
        "id": 9703,
        "question": "Đặc điểm ngôn ngữ nổi bật nhất của đoạn hội thoại trên là gì?",
        "options": [
          "A. Sử dụng văn phong nghị luận văn học chính luận sâu sắc, tư duy logic hàn lâm chặt chẽ",
          "B. Từ ngữ ngô nghê, lặp từ nhiều lần",
          "C. Hoàn toàn dùng khẩu ngữ đời thường đơn giản",
          "D. Thiếu tính logic, các nhân vật không hiểu ý nhau"
        ],
        "correct": 0,
        "explanation": "Đáp án chính xác là A. Sử dụng văn phong nghị luận văn học chính luận sâu sắc, tư duy logic hàn lâm chặt chẽ. Nội dung này được thể hiện trực tiếp trong bài nghe."
      }
    ]
  },
  {
    "id": 98,
    "level": "HSK 6",
    "title": "Khảo cổ và Bảo tồn di sản văn hóa",
    "audioText": "A: 历经岁月洗礼的古代遗存，不仅是历史演进的吉光片羽，更是中华文明源远流长、博大精深的实物见证。\nB: 保护文物功在当代、利在千秋。我们应借助现代科技手段进行抢救性保护与数字化还原，让沉睡的文物活起来。",
    "dialogue": [
      {
        "speaker": "A",
        "cn": "历经岁月洗礼的古代遗存，不仅是历史演进的吉光片羽，更是中华文明源远流长、博大精深的实物见证。",
        "py": "Lìjīng suìyuè xǐlǐ de gǔdài yícún, bùjǐn shì lìshǐ yǎnjìn de jíguāngpiànyǔ, gèng shì Zhōnghuá wénmíng yuányuǎnjiúcháng, bódàjīngshēn de shíwù jiànzhèng.",
        "vi": "Các di sản cổ đại trải qua sự rửa rũa của năm tháng, không chỉ là những mảnh ghép quý báu của tiến trình lịch sử, mà còn là chứng nhân vật chất cho sự lâu đời và rộng lớn tinh thâm của văn minh Trung Hoa."
      },
      {
        "speaker": "B",
        "cn": "保护文物功在当代、利在千秋。我们应借助现代科技手段进行抢救性保护与数字化还原，让沉睡的文物活起来。",
        "py": "Bǎohù wénwù gōng zài dāngdài, lì zài qiānqiū. Wǒmen yīng jièzhù xiàndài kējì shǒuduàn jìnxíng qiǎngjiùxìng bǎohù yǔ shùzìhuà huányuán, ràng chénshuì de wénwù huó qǐlái.",
        "vi": "Bảo tồn cổ vật công lao ở hiện tại, lợi ích tới ngàn năm. Chúng ta nên ứng dụng các biện pháp công nghệ hiện đại để bảo tồn mang tính cứu vãn và phục dựng kỹ thuật số, khiến những cổ vật đang ngủ sâu trở nên sống động."
      }
    ],
    "questions": [
      {
        "id": 9801,
        "question": "Bản chất học thuật mang tính triết lý, vĩ mô cao cấp của đoạn văn là gì?",
        "options": [
          "A. Khảo cổ và Bảo tồn di sản văn hóa",
          "B. Quy trình bảo dưỡng lốp xe ô tô",
          "C. Thực đơn dinh dưỡng cho trẻ sơ sinh",
          "D. Hướng dẫn sử dụng lò vi sóng"
        ],
        "correct": 0,
        "explanation": "Đáp án chính xác là A. Khảo cổ và Bảo tồn di sản văn hóa. Nội dung này được thể hiện trực tiếp trong bài nghe."
      },
      {
        "id": 9802,
        "question": "Đoạn hội thoại sử dụng hàng loạt thành ngữ bốn chữ (成语) và từ vựng thuộc trình độ tối cao nào?",
        "options": [
          "A. HSK 6",
          "B. HSK 1",
          "C. HSK 2",
          "D. HSK 3"
        ],
        "correct": 0,
        "explanation": "Đáp án chính xác là A. HSK 6. Nội dung này được thể hiện trực tiếp trong bài nghe."
      },
      {
        "id": 9803,
        "question": "Đặc điểm ngôn ngữ nổi bật nhất của đoạn hội thoại trên là gì?",
        "options": [
          "A. Sử dụng văn phong nghị luận văn học chính luận sâu sắc, tư duy logic hàn lâm chặt chẽ",
          "B. Từ ngữ ngô nghê, lặp từ nhiều lần",
          "C. Hoàn toàn dùng khẩu ngữ đời thường đơn giản",
          "D. Thiếu tính logic, các nhân vật không hiểu ý nhau"
        ],
        "correct": 0,
        "explanation": "Đáp án chính xác là A. Sử dụng văn phong nghị luận văn học chính luận sâu sắc, tư duy logic hàn lâm chặt chẽ. Nội dung này được thể hiện trực tiếp trong bài nghe."
      }
    ]
  },
  {
    "id": 99,
    "level": "HSK 6",
    "title": "Trí tuệ nhân tạo và Đạo đức học",
    "audioText": "A: 纵观科技发展史，通用人工智能的横空出世无疑引发了生产力范式的颠覆性变革，但也带来了前所未有的伦理挑战。\nB: 科技的前行必须辅以人性的缰绳。建立健全法律法规与伦理审查机制，确保算法向善，是人类不可推卸的时代使命。",
    "dialogue": [
      {
        "speaker": "A",
        "cn": "纵观科技发展史，通用人工智能的横空出世无疑引发了生产力范式的颠覆性变革，但也带来了前所未有的伦理挑战。",
        "py": "Zòngguān kējì fāzhǎnshǐ, tōngyòng rénggōng zhìnéng de héngkōngchūshì wúyí yǐnfāle shēngchǎnlì fànshì de diānfùxìng biàngé, dàn yě dàiláile qiánsuǒwèiyǒu de lúnlǐ tiǎozhàn.",
        "vi": "Nhìn suốt lịch sử phát triển khoa học công nghệ, sự ra đời của trí tuệ nhân tạo tổng hợp không nghi ngờ gì đã kích hoạt cuộc cải cách mang tính lật đổ đối với mô hình lực lượng sản xuất, nhưng cũng đem lại những thách thức đạo đức chưa từng có."
      },
      {
        "speaker": "B",
        "cn": "科技的前行必须辅以人性的缰绳。建立健全法律法规与伦理审查机制，确保算法向善，是人类不可推卸的时代使命。",
        "py": "Kējì de qiánxíng bìxū fǔ yǐ rénxìng de jiāngshéng. Jiànlì jiànquán fǎlǜ fǎguī yǔ lúnlǐ shěnchá jīzhì, quèbǎo suànfǎ xiàngshàn, shì rénlèi bùkě tuīxiè de shídài shǐmìng.",
        "vi": "Khoa học công nghệ tiến bước phải được hỗ trợ bằng dây cương của nhân tính. Xây dựng và hoàn thiện luật pháp quy định cùng cơ chế thẩm định đạo đức, bảo đảm thuật toán hướng thiện, là sứ mệnh thời đại không thể thoái thác của nhân loại."
      }
    ],
    "questions": [
      {
        "id": 9901,
        "question": "Bản chất học thuật mang tính triết lý, vĩ mô cao cấp của đoạn văn là gì?",
        "options": [
          "A. Trí tuệ nhân tạo và Đạo đức học",
          "B. Quy trình bảo dưỡng lốp xe ô tô",
          "C. Thực đơn dinh dưỡng cho trẻ sơ sinh",
          "D. Hướng dẫn sử dụng lò vi sóng"
        ],
        "correct": 0,
        "explanation": "Đáp án chính xác là A. Trí tuệ nhân tạo và Đạo đức học. Nội dung này được thể hiện trực tiếp trong bài nghe."
      },
      {
        "id": 9902,
        "question": "Đoạn hội thoại sử dụng hàng loạt thành ngữ bốn chữ (成语) và từ vựng thuộc trình độ tối cao nào?",
        "options": [
          "A. HSK 6",
          "B. HSK 1",
          "C. HSK 2",
          "D. HSK 3"
        ],
        "correct": 0,
        "explanation": "Đáp án chính xác là A. HSK 6. Nội dung này được thể hiện trực tiếp trong bài nghe."
      },
      {
        "id": 9903,
        "question": "Đặc điểm ngôn ngữ nổi bật nhất của đoạn hội thoại trên là gì?",
        "options": [
          "A. Sử dụng văn phong nghị luận văn học chính luận sâu sắc, tư duy logic hàn lâm chặt chẽ",
          "B. Từ ngữ ngô nghê, lặp từ nhiều lần",
          "C. Hoàn toàn dùng khẩu ngữ đời thường đơn giản",
          "D. Thiếu tính logic, các nhân vật không hiểu ý nhau"
        ],
        "correct": 0,
        "explanation": "Đáp án chính xác là A. Sử dụng văn phong nghị luận văn học chính luận sâu sắc, tư duy logic hàn lâm chặt chẽ. Nội dung này được thể hiện trực tiếp trong bài nghe."
      }
    ]
  },
  {
    "id": 100,
    "level": "HSK 6",
    "title": "Triết học tri thức và Lý luận nhận thức",
    "audioText": "A: 任何学术理论的建构若脱离了客观实践的土壤，终将沦 mud 为空中楼阁，丧失其应有的生命力与现实启示。\nB: 正所谓“实践出真知”。唯有在反复的实践中发现真理、检验真理并发展真理，方能达到主客观的高度统一。",
    "dialogue": [
      {
        "speaker": "A",
        "cn": "任何学术理论的建构若脱离了客观实践的土壤，终将沦 mud 为空中楼阁，丧失其应有的生命力与现实启示。",
        "py": "Rènhé xuéshù lǐlùn de jiàngòu ruò tuōlíle kèguān shíjiàn de tǔrǎng, zhōngjiāng lúnwéi kōngzhōnglóugé, sàngshī qí yīngyǒu de shēngmìnglì yǔ xiànshí qǐshì.",
        "vi": "Việc kiến tạo bất kỳ lý luận học thuật nào nếu thoát ly khỏi mảnh đất thực tiễn khách quan, cuối cùng sẽ rơi vào cảnh lầu trên không trung, mất đi sức sống và ý nghĩa gợi mở thực tế vốn có."
      },
      {
        "speaker": "B",
        "cn": "正所谓“实践出真知”。唯有在反复的实践中发现真理、检验真理并发展真理，方能达到主客观的高度统一。",
        "py": "Zhèng suǒwèi “shíjiàn chū zhēnzhī”. Wéi yǒu zài fǎnfù de shíjiàn zhōng fāxiàn zhēnlǐ, jiǎnyàn zhēnlǐ bìng fāzhǎn zhēnlǐ, fāng néng dádào zhǔkèguān de gāodù tǒngyī.",
        "vi": "Chính là cái gọi là \"thực tiễn tạo nên chân tri\". Chỉ có trong thực tiễn lặp đi lặp lại để phát hiện chân lý, kiểm nghiệm chân lý và phát triển chân lý, mới có thể đạt tới sự thống nhất cao độ giữa chủ quan và khách quan."
      }
    ],
    "questions": [
      {
        "id": 10001,
        "question": "Bản chất học thuật mang tính triết lý, vĩ mô cao cấp của đoạn văn là gì?",
        "options": [
          "A. Triết học tri thức và Lý luận nhận thức",
          "B. Quy trình bảo dưỡng lốp xe ô tô",
          "C. Thực đơn dinh dưỡng cho trẻ sơ sinh",
          "D. Hướng dẫn sử dụng lò vi sóng"
        ],
        "correct": 0,
        "explanation": "Đáp án chính xác là A. Triết học tri thức và Lý luận nhận thức. Nội dung này được thể hiện trực tiếp trong bài nghe."
      },
      {
        "id": 10002,
        "question": "Đoạn hội thoại sử dụng hàng loạt thành ngữ bốn chữ (成语) và từ vựng thuộc trình độ tối cao nào?",
        "options": [
          "A. HSK 6",
          "B. HSK 1",
          "C. HSK 2",
          "D. HSK 3"
        ],
        "correct": 0,
        "explanation": "Đáp án chính xác là A. HSK 6. Nội dung này được thể hiện trực tiếp trong bài nghe."
      },
      {
        "id": 10003,
        "question": "Đặc điểm ngôn ngữ nổi bật nhất của đoạn hội thoại trên là gì?",
        "options": [
          "A. Sử dụng văn phong nghị luận văn học chính luận sâu sắc, tư duy logic hàn lâm chặt chẽ",
          "B. Từ ngữ ngô nghê, lặp từ nhiều lần",
          "C. Hoàn toàn dùng khẩu ngữ đời thường đơn giản",
          "D. Thiếu tính logic, các nhân vật không hiểu ý nhau"
        ],
        "correct": 0,
        "explanation": "Đáp án chính xác là A. Sử dụng văn phong nghị luận văn học chính luận sâu sắc, tư duy logic hàn lâm chặt chẽ. Nội dung này được thể hiện trực tiếp trong bài nghe."
      }
    ]
  }
];

balanceAnswerPositions(HOREN_EXAMS);
