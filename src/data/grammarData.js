import { balanceAnswerPositions } from './balanceOptions.js';

export const GRAMMAR_DATA = [
  {
    "id": "hsk1_grammar_1",
    "title": "1. Trật tự câu cơ bản: Chủ ngữ + Vị ngữ + Tân ngữ",
    "level": "HSK 1",
    "theory": "Công thức: Chủ ngữ + Động từ + Tân ngữ\n\nCách dùng: Đây là cấu trúc xương sống của tiếng Trung. Người học cần nắm chắc trước khi học các cấu trúc phức tạp.\n\nLỗi thường gặp: Không đảo trật tự theo tiếng Việt/tiếng Anh. Tiếng Trung thường giữ trật tự SVO rất rõ.",
    "examples": [
      {
        "zh": "我喝水。",
        "pinyin": "wǒ hē shuǐ",
        "vi": "Tôi uống nước."
      },
      {
        "zh": "她学习汉语。",
        "pinyin": "tā xuéxí hànyǔ",
        "vi": "Cô ấy học tiếng Trung."
      }
    ],
    "quiz": [
      {
        "id": 1,
        "question": "Chọn câu tiếng Trung phù hợp nhất cho nghĩa: \"Tôi uống nước.\"",
        "options": [
          "A. 我喝水。",
          "B. 她学习汉语。",
          "C. 我喝水。"
        ],
        "correct": 0,
        "explanation": "Câu đúng là \"我喝水。\" (wǒ hē shuǐ). Chú ý: Không đảo trật tự theo tiếng Việt/tiếng Anh. Tiếng Trung thường giữ trật tự SVO rất rõ."
      }
    ]
  },
  {
    "id": "hsk1_grammar_2",
    "title": "2. Câu với 是: A là B",
    "level": "HSK 1",
    "theory": "Công thức: A + 是 + B\n\nCách dùng: Dùng để giới thiệu danh tính, nghề nghiệp, quan hệ, quốc tịch.\n\nLỗi thường gặp: Không dùng 是 trước tính từ thông thường. Không nói: `我是高兴`. Nói: `我很高兴`.",
    "examples": [
      {
        "zh": "我是学生。",
        "pinyin": "wǒ shì xuésheng",
        "vi": "Tôi là học sinh/sinh viên."
      },
      {
        "zh": "他是中国人。",
        "pinyin": "tā shì zhōngguó rén",
        "vi": "Anh ấy là người Trung Quốc."
      }
    ],
    "quiz": [
      {
        "id": 1,
        "question": "Chọn câu tiếng Trung phù hợp nhất cho nghĩa: \"Tôi là học sinh/sinh viên.\"",
        "options": [
          "A. 我是学生。",
          "B. 他是中国人。",
          "C. 我有学生。"
        ],
        "correct": 0,
        "explanation": "Câu đúng là \"我是学生。\" (wǒ shì xuésheng). Chú ý: Không dùng 是 trước tính từ thông thường. Không nói: `我是高兴`. Nói: `我很高兴`."
      },
      {
        "id": 2,
        "question": "Điền từ thích hợp vào chỗ trống: \"我 _______ 学生。\" (Dịch nghĩa: Tôi là học sinh/sinh viên.)",
        "options": [
          "A. 是",
          "B. 的",
          "C. 了"
        ],
        "correct": 0,
        "explanation": "Điền \"是\" vào chỗ trống để tạo thành câu hoàn chỉnh: \"我是学生。\" (wǒ shì xuésheng)."
      }
    ]
  },
  {
    "id": "hsk1_grammar_3",
    "title": "3. Câu phủ định với 不",
    "level": "HSK 1",
    "theory": "Công thức: Chủ ngữ + 不 + Động từ/Tính từ\n\nCách dùng: Dùng để phủ định thói quen, ý muốn, trạng thái hiện tại hoặc tương lai.\n\nLỗi thường gặp: Không dùng 不 để phủ định 有. Với 有 phải dùng 没有.",
    "examples": [
      {
        "zh": "我不喝咖啡。",
        "pinyin": "wǒ bù hē kāfēi",
        "vi": "Tôi không uống cà phê."
      },
      {
        "zh": "他不忙。",
        "pinyin": "tā bù máng",
        "vi": "Anh ấy không bận."
      }
    ],
    "quiz": [
      {
        "id": 1,
        "question": "Chọn câu tiếng Trung phù hợp nhất cho nghĩa: \"Tôi không uống cà phê.\"",
        "options": [
          "A. 我不喝咖啡。",
          "B. 他不忙。",
          "C. 我不喝咖啡。"
        ],
        "correct": 0,
        "explanation": "Câu đúng là \"我不喝咖啡。\" (wǒ bù hē kāfēi). Chú ý: Không dùng 不 để phủ định 有. Với 有 phải dùng 没有."
      },
      {
        "id": 2,
        "question": "Điền từ thích hợp vào chỗ trống: \"我 _______ 喝咖啡。\" (Dịch nghĩa: Tôi không uống cà phê.)",
        "options": [
          "A. 不",
          "B. 是",
          "C. 的"
        ],
        "correct": 0,
        "explanation": "Điền \"不\" vào chỗ trống để tạo thành câu hoàn chỉnh: \"我不喝咖啡。\" (wǒ bù hē kāfēi)."
      }
    ]
  },
  {
    "id": "hsk1_grammar_4",
    "title": "4. Câu phủ định với 没 / 没有",
    "level": "HSK 1",
    "theory": "Công thức: Chủ ngữ + 没 / 没有 + Động từ / Danh từ\n\nCách dùng: Dùng để phủ định sự tồn tại, sở hữu hoặc hành động đã xảy ra.\n\nLỗi thường gặp: Không nói `不有`. Phải nói `没有`.",
    "examples": [
      {
        "zh": "我没有钱。",
        "pinyin": "wǒ méiyǒu qián",
        "vi": "Tôi không có tiền."
      },
      {
        "zh": "他没来。",
        "pinyin": "tā méi lái",
        "vi": "Anh ấy đã không đến."
      }
    ],
    "quiz": [
      {
        "id": 1,
        "question": "Chọn câu tiếng Trung phù hợp nhất cho nghĩa: \"Tôi không có tiền.\"",
        "options": [
          "A. 我没有钱。",
          "B. 他没来。",
          "C. 我没有钱。"
        ],
        "correct": 0,
        "explanation": "Câu đúng là \"我没有钱。\" (wǒ méiyǒu qián). Chú ý: Không nói `不有`. Phải nói `没有`."
      },
      {
        "id": 2,
        "question": "Điền từ thích hợp vào chỗ trống: \"我 _______ 有钱。\" (Dịch nghĩa: Tôi không có tiền.)",
        "options": [
          "A. 没",
          "B. 是",
          "C. 的"
        ],
        "correct": 0,
        "explanation": "Điền \"没\" vào chỗ trống để tạo thành câu hoàn chỉnh: \"我没有钱。\" (wǒ méiyǒu qián)."
      }
    ]
  },
  {
    "id": "hsk1_grammar_5",
    "title": "5. Câu hỏi với 吗",
    "level": "HSK 1",
    "theory": "Công thức: Câu trần thuật + 吗？\n\nCách dùng: Biến một câu bình thường thành câu hỏi có/không.\n\nLỗi thường gặp: Không dùng 吗 khi câu đã có từ để hỏi như 什么, 谁, 哪儿.",
    "examples": [
      {
        "zh": "你是老师吗？",
        "pinyin": "nǐ shì lǎoshī ma",
        "vi": "Bạn là giáo viên à?"
      },
      {
        "zh": "你喝茶吗？",
        "pinyin": "nǐ hē chá ma",
        "vi": "Bạn uống trà không?"
      }
    ],
    "quiz": [
      {
        "id": 1,
        "question": "Chọn câu tiếng Trung phù hợp nhất cho nghĩa: \"Bạn là giáo viên à?\"",
        "options": [
          "A. 你是老师吗？",
          "B. 你喝茶吗？",
          "C. 你有老师吗？"
        ],
        "correct": 0,
        "explanation": "Câu đúng là \"你是老师吗？\" (nǐ shì lǎoshī ma). Chú ý: Không dùng 吗 khi câu đã có từ để hỏi như 什么, 谁, 哪儿."
      },
      {
        "id": 2,
        "question": "Điền từ thích hợp vào chỗ trống: \"你 _______ 老师吗？\" (Dịch nghĩa: Bạn là giáo viên à?)",
        "options": [
          "A. 是",
          "B. 的",
          "C. 了"
        ],
        "correct": 0,
        "explanation": "Điền \"是\" vào chỗ trống để tạo thành câu hoàn chỉnh: \"你是老师吗？\" (nǐ shì lǎoshī ma)."
      }
    ]
  },
  {
    "id": "hsk1_grammar_6",
    "title": "6. Câu hỏi với 呢",
    "level": "HSK 1",
    "theory": "Công thức: Danh từ/Đại từ + 呢？\n\nCách dùng: Dùng để hỏi tiếp cùng một chủ đề: “còn... thì sao?”\n\nLỗi thường gặp: 呢 không thay thế hoàn toàn cho 吗. 呢 thường phụ thuộc vào ngữ cảnh trước đó.",
    "examples": [
      {
        "zh": "我很好，你呢？",
        "pinyin": "wǒ hěn hǎo, nǐ ne",
        "vi": "Tôi khỏe, còn bạn thì sao?"
      },
      {
        "zh": "我的书呢？",
        "pinyin": "wǒ de shū ne",
        "vi": "Sách của tôi đâu?"
      }
    ],
    "quiz": [
      {
        "id": 1,
        "question": "Chọn câu tiếng Trung phù hợp nhất cho nghĩa: \"Tôi khỏe, còn bạn thì sao?\"",
        "options": [
          "A. 我很好，你呢？",
          "B. 我的书呢？",
          "C. 我很好，你呢？"
        ],
        "correct": 0,
        "explanation": "Câu đúng là \"我很好，你呢？\" (wǒ hěn hǎo, nǐ ne). Chú ý: 呢 không thay thế hoàn toàn cho 吗. 呢 thường phụ thuộc vào ngữ cảnh trước đó."
      }
    ]
  },
  {
    "id": "hsk1_grammar_7",
    "title": "7. Câu hỏi lựa chọn A-not-A",
    "level": "HSK 1",
    "theory": "Công thức: Động từ + 不 + Động từ？\n\nCách dùng: Dùng để hỏi có hay không mà không cần 吗.\n\nLỗi thường gặp: Không dùng cùng lúc A-not-A và 吗: không nói `你去不去吗？`",
    "examples": [
      {
        "zh": "你去不去？",
        "pinyin": "nǐ qù bu qù",
        "vi": "Bạn đi hay không?"
      },
      {
        "zh": "他忙不忙？",
        "pinyin": "tā máng bu máng",
        "vi": "Anh ấy bận không?"
      }
    ],
    "quiz": [
      {
        "id": 1,
        "question": "Chọn câu tiếng Trung phù hợp nhất cho nghĩa: \"Bạn đi hay không?\"",
        "options": [
          "A. 你去不去？",
          "B. 他忙不忙？",
          "C. 你去不去？"
        ],
        "correct": 0,
        "explanation": "Câu đúng là \"你去不去？\" (nǐ qù bu qù). Chú ý: Không dùng cùng lúc A-not-A và 吗: không nói `你去不去吗？`"
      },
      {
        "id": 2,
        "question": "Điền từ thích hợp vào chỗ trống: \"你去 _______ 去？\" (Dịch nghĩa: Bạn đi hay không?)",
        "options": [
          "A. 不",
          "B. 是",
          "C. 的"
        ],
        "correct": 0,
        "explanation": "Điền \"不\" vào chỗ trống để tạo thành câu hoàn chỉnh: \"你去不去？\" (nǐ qù bu qù)."
      }
    ]
  },
  {
    "id": "hsk1_grammar_8",
    "title": "8. Đại từ nghi vấn: 什么, 谁, 哪儿, 哪, 几, 多少",
    "level": "HSK 1",
    "theory": "Công thức: Chủ ngữ + Động từ + Từ hỏi？\n\nCách dùng: Từ hỏi đứng tại vị trí thông tin cần hỏi, không đảo lên đầu câu như tiếng Anh.\n\nLỗi thường gặp: Không thêm 吗 vào câu đã có từ hỏi.",
    "examples": [
      {
        "zh": "你叫什么名字？",
        "pinyin": "nǐ jiào shénme míngzi",
        "vi": "Bạn tên là gì?"
      },
      {
        "zh": "他是谁？",
        "pinyin": "tā shì shéi",
        "vi": "Anh ấy là ai?"
      },
      {
        "zh": "你去哪儿？",
        "pinyin": "nǐ qù nǎr",
        "vi": "Bạn đi đâu?"
      }
    ],
    "quiz": [
      {
        "id": 1,
        "question": "Chọn câu tiếng Trung phù hợp nhất cho nghĩa: \"Bạn tên là gì?\"",
        "options": [
          "A. 你叫什么名字？",
          "B. 他是谁？",
          "C. 你去哪儿？"
        ],
        "correct": 0,
        "explanation": "Câu đúng là \"你叫什么名字？\" (nǐ jiào shénme míngzi). Chú ý: Không thêm 吗 vào câu đã có từ hỏi."
      },
      {
        "id": 2,
        "question": "Điền từ thích hợp vào chỗ trống: \"他 _______ 谁？\" (Dịch nghĩa: Anh ấy là ai?)",
        "options": [
          "A. 是",
          "B. 的",
          "C. 了"
        ],
        "correct": 0,
        "explanation": "Điền \"是\" vào chỗ trống để tạo thành câu hoàn chỉnh: \"他是谁？\" (tā shì shéi)."
      }
    ]
  },
  {
    "id": "hsk1_grammar_9",
    "title": "9. Số đếm và lượng từ",
    "level": "HSK 1",
    "theory": "Công thức: Số + Lượng từ + Danh từ\n\nCách dùng: Tiếng Trung thường cần lượng từ giữa số và danh từ.\n\nLỗi thường gặp: Khi đếm số lượng, thường dùng 两 thay vì 二 trước lượng từ: 两个人, không phải 二个人.",
    "examples": [
      {
        "zh": "一个人",
        "pinyin": "yí ge rén",
        "vi": "Một người."
      },
      {
        "zh": "三本书",
        "pinyin": "sān běn shū",
        "vi": "Ba quyển sách."
      },
      {
        "zh": "两杯水",
        "pinyin": "liǎng bēi shuǐ",
        "vi": "Hai cốc nước."
      }
    ],
    "quiz": [
      {
        "id": 1,
        "question": "Chọn câu tiếng Trung phù hợp nhất cho nghĩa: \"Một người.\"",
        "options": [
          "A. 一个人",
          "B. 三本书",
          "C. 两杯水"
        ],
        "correct": 0,
        "explanation": "Câu đúng là \"一个人\" (yí ge rén). Chú ý: Khi đếm số lượng, thường dùng 两 thay vì 二 trước lượng từ: 两个人, không phải 二个人."
      }
    ]
  },
  {
    "id": "hsk1_grammar_10",
    "title": "10. 的 biểu thị sở hữu",
    "level": "HSK 1",
    "theory": "Công thức: Danh từ/Đại từ + 的 + Danh từ\n\nCách dùng: Dùng để chỉ sự sở hữu hoặc quan hệ.\n\nLỗi thường gặp: Với quan hệ thân thuộc gần gũi có thể lược 的: 我妈妈, 我爸爸.",
    "examples": [
      {
        "zh": "我的书",
        "pinyin": "wǒ de shū",
        "vi": "Sách của tôi."
      },
      {
        "zh": "老师的手机",
        "pinyin": "lǎoshī de shǒujī",
        "vi": "Điện thoại của giáo viên."
      }
    ],
    "quiz": [
      {
        "id": 1,
        "question": "Chọn câu tiếng Trung phù hợp nhất cho nghĩa: \"Sách của tôi.\"",
        "options": [
          "A. 我的书",
          "B. 老师的手机",
          "C. 我书"
        ],
        "correct": 0,
        "explanation": "Câu đúng là \"我的书\" (wǒ de shū). Chú ý: Với quan hệ thân thuộc gần gũi có thể lược 的: 我妈妈, 我爸爸."
      },
      {
        "id": 2,
        "question": "Điền từ thích hợp vào chỗ trống: \"我 _______ 书\" (Dịch nghĩa: Sách của tôi.)",
        "options": [
          "A. 的",
          "B. 是",
          "C. 了"
        ],
        "correct": 0,
        "explanation": "Điền \"的\" vào chỗ trống để tạo thành câu hoàn chỉnh: \"我的书\" (wǒ de shū)."
      }
    ]
  },
  {
    "id": "hsk1_grammar_11",
    "title": "11. 很 trước tính từ",
    "level": "HSK 1",
    "theory": "Công thức: Chủ ngữ + 很 + Tính từ\n\nCách dùng: Trong câu miêu tả tính chất, 很 thường đứng trước tính từ. Nhiều khi 很 không nhất thiết nghĩa là “rất”, mà chỉ giúp câu tự nhiên.\n\nLỗi thường gặp: Không nói `她漂亮` trong ngữ cảnh cơ bản nếu muốn câu hoàn chỉnh tự nhiên.",
    "examples": [
      {
        "zh": "她很漂亮。",
        "pinyin": "tā hěn piàoliang",
        "vi": "Cô ấy đẹp."
      },
      {
        "zh": "今天很冷。",
        "pinyin": "jīntiān hěn lěng",
        "vi": "Hôm nay lạnh."
      }
    ],
    "quiz": [
      {
        "id": 1,
        "question": "Chọn câu tiếng Trung phù hợp nhất cho nghĩa: \"Cô ấy đẹp.\"",
        "options": [
          "A. 她很漂亮。",
          "B. 今天很冷。",
          "C. 她很漂亮。"
        ],
        "correct": 0,
        "explanation": "Câu đúng là \"她很漂亮。\" (tā hěn piàoliang). Chú ý: Không nói `她漂亮` trong ngữ cảnh cơ bản nếu muốn câu hoàn chỉnh tự nhiên."
      }
    ]
  },
  {
    "id": "hsk1_grammar_12",
    "title": "12. 在 biểu thị vị trí",
    "level": "HSK 1",
    "theory": "Công thức: Chủ ngữ + 在 + Địa điểm\n\nCách dùng: Dùng để nói ai/cái gì ở đâu.\n\nLỗi thường gặp: Địa điểm nhỏ thường cần từ phương vị: 上, 下, 里, 前, 后.",
    "examples": [
      {
        "zh": "我在家。",
        "pinyin": "wǒ zài jiā",
        "vi": "Tôi ở nhà."
      },
      {
        "zh": "书在桌子上。",
        "pinyin": "shū zài zhuōzi shàng",
        "vi": "Sách ở trên bàn."
      }
    ],
    "quiz": [
      {
        "id": 1,
        "question": "Chọn câu tiếng Trung phù hợp nhất cho nghĩa: \"Tôi ở nhà.\"",
        "options": [
          "A. 我在家。",
          "B. 书在桌子上。",
          "C. 我在家。"
        ],
        "correct": 0,
        "explanation": "Câu đúng là \"我在家。\" (wǒ zài jiā). Chú ý: Địa điểm nhỏ thường cần từ phương vị: 上, 下, 里, 前, 后."
      },
      {
        "id": 2,
        "question": "Điền từ thích hợp vào chỗ trống: \"我 _______ 家。\" (Dịch nghĩa: Tôi ở nhà.)",
        "options": [
          "A. 在",
          "B. 是",
          "C. 的"
        ],
        "correct": 0,
        "explanation": "Điền \"在\" vào chỗ trống để tạo thành câu hoàn chỉnh: \"我在家。\" (wǒ zài jiā)."
      }
    ]
  },
  {
    "id": "hsk1_grammar_13",
    "title": "13. 在 biểu thị hành động đang diễn ra",
    "level": "HSK 1",
    "theory": "Công thức: Chủ ngữ + 在 + Động từ + Tân ngữ\n\nCách dùng: Dùng để nói hành động đang diễn ra.\n\nLỗi thường gặp: Phân biệt 在 vị trí và 在 đang làm gì dựa vào thành phần sau nó.",
    "examples": [
      {
        "zh": "我在看书。",
        "pinyin": "wǒ zài kàn shū",
        "vi": "Tôi đang đọc sách."
      },
      {
        "zh": "妈妈在做饭。",
        "pinyin": "māma zài zuò fàn",
        "vi": "Mẹ đang nấu cơm."
      }
    ],
    "quiz": [
      {
        "id": 1,
        "question": "Chọn câu tiếng Trung phù hợp nhất cho nghĩa: \"Tôi đang đọc sách.\"",
        "options": [
          "A. 我在看书。",
          "B. 妈妈在做饭。",
          "C. 我在看书。"
        ],
        "correct": 0,
        "explanation": "Câu đúng là \"我在看书。\" (wǒ zài kàn shū). Chú ý: Phân biệt 在 vị trí và 在 đang làm gì dựa vào thành phần sau nó."
      },
      {
        "id": 2,
        "question": "Điền từ thích hợp vào chỗ trống: \"我 _______ 看书。\" (Dịch nghĩa: Tôi đang đọc sách.)",
        "options": [
          "A. 在",
          "B. 是",
          "C. 的"
        ],
        "correct": 0,
        "explanation": "Điền \"在\" vào chỗ trống để tạo thành câu hoàn chỉnh: \"我在看书。\" (wǒ zài kàn shū)."
      }
    ]
  },
  {
    "id": "hsk1_grammar_14",
    "title": "14. 了 biểu thị hoàn thành hành động",
    "level": "HSK 1",
    "theory": "Công thức: Chủ ngữ + Động từ + 了 + Tân ngữ\n\nCách dùng: Dùng để nói một hành động đã xảy ra hoặc đã hoàn thành.\n\nLỗi thường gặp: 了 không phải lúc nào cũng tương đương “đã”. Nó nhấn mạnh sự thay đổi hoặc hoàn thành.",
    "examples": [
      {
        "zh": "我吃了饭。",
        "pinyin": "wǒ chī le fàn",
        "vi": "Tôi đã ăn cơm."
      },
      {
        "zh": "他买了三本书。",
        "pinyin": "tā mǎi le sān běn shū",
        "vi": "Anh ấy đã mua ba quyển sách."
      }
    ],
    "quiz": [
      {
        "id": 1,
        "question": "Chọn câu tiếng Trung phù hợp nhất cho nghĩa: \"Tôi đã ăn cơm.\"",
        "options": [
          "A. 我吃了饭。",
          "B. 他买了三本书。",
          "C. 我吃了饭。"
        ],
        "correct": 0,
        "explanation": "Câu đúng là \"我吃了饭。\" (wǒ chī le fàn). Chú ý: 了 không phải lúc nào cũng tương đương “đã”. Nó nhấn mạnh sự thay đổi hoặc hoàn thành."
      },
      {
        "id": 2,
        "question": "Điền từ thích hợp vào chỗ trống: \"我吃 _______ 饭。\" (Dịch nghĩa: Tôi đã ăn cơm.)",
        "options": [
          "A. 了",
          "B. 是",
          "C. 的"
        ],
        "correct": 0,
        "explanation": "Điền \"了\" vào chỗ trống để tạo thành câu hoàn chỉnh: \"我吃了饭。\" (wǒ chī le fàn)."
      }
    ]
  },
  {
    "id": "hsk1_grammar_15",
    "title": "15. 有 biểu thị sở hữu/tồn tại",
    "level": "HSK 1",
    "theory": "Công thức: Chủ ngữ/Địa điểm + 有 + Danh từ\n\nCách dùng: Dùng để nói có cái gì, sở hữu cái gì hoặc nơi nào có gì.\n\nLỗi thường gặp: Phủ định của 有 là 没有.",
    "examples": [
      {
        "zh": "我有一个哥哥。",
        "pinyin": "wǒ yǒu yí ge gēge",
        "vi": "Tôi có một anh trai."
      },
      {
        "zh": "桌子上有一本书。",
        "pinyin": "zhuōzi shàng yǒu yì běn shū",
        "vi": "Trên bàn có một quyển sách."
      }
    ],
    "quiz": [
      {
        "id": 1,
        "question": "Chọn câu tiếng Trung phù hợp nhất cho nghĩa: \"Tôi có một anh trai.\"",
        "options": [
          "A. 我有一个哥哥。",
          "B. 桌子上有一本书。",
          "C. 我有一个哥哥。"
        ],
        "correct": 0,
        "explanation": "Câu đúng là \"我有一个哥哥。\" (wǒ yǒu yí ge gēge). Chú ý: Phủ định của 有 là 没有."
      }
    ]
  },
  {
    "id": "hsk1_grammar_16",
    "title": "16. 喜欢 + Động từ/Danh từ",
    "level": "HSK 1",
    "theory": "Công thức: Chủ ngữ + 喜欢 + Danh từ/Động từ\n\nCách dùng: Dùng để nói sở thích.\n\nLỗi thường gặp: Sau 喜欢 có thể dùng động từ trực tiếp, không cần thêm 的.",
    "examples": [
      {
        "zh": "我喜欢喝茶。",
        "pinyin": "wǒ xǐhuan hē chá",
        "vi": "Tôi thích uống trà."
      },
      {
        "zh": "她喜欢汉语。",
        "pinyin": "tā xǐhuan hànyǔ",
        "vi": "Cô ấy thích tiếng Trung."
      }
    ],
    "quiz": [
      {
        "id": 1,
        "question": "Chọn câu tiếng Trung phù hợp nhất cho nghĩa: \"Tôi thích uống trà.\"",
        "options": [
          "A. 我喜欢喝茶。",
          "B. 她喜欢汉语。",
          "C. 我喜欢喝茶。"
        ],
        "correct": 0,
        "explanation": "Câu đúng là \"我喜欢喝茶。\" (wǒ xǐhuan hē chá). Chú ý: Sau 喜欢 có thể dùng động từ trực tiếp, không cần thêm 的."
      }
    ]
  },
  {
    "id": "hsk1_grammar_17",
    "title": "17. 想 muốn/lên kế hoạch",
    "level": "HSK 1",
    "theory": "Công thức: Chủ ngữ + 想 + Động từ\n\nCách dùng: Dùng để nói mong muốn hoặc ý định.\n\nLỗi thường gặp: 想 thiên về mong muốn chủ quan, nhẹ hơn 要.",
    "examples": [
      {
        "zh": "我想去中国。",
        "pinyin": "wǒ xiǎng qù zhōngguó",
        "vi": "Tôi muốn đi Trung Quốc."
      },
      {
        "zh": "你想喝什么？",
        "pinyin": "nǐ xiǎng hē shénme",
        "vi": "Bạn muốn uống gì?"
      }
    ],
    "quiz": [
      {
        "id": 1,
        "question": "Chọn câu tiếng Trung phù hợp nhất cho nghĩa: \"Tôi muốn đi Trung Quốc.\"",
        "options": [
          "A. 我想去中国。",
          "B. 你想喝什么？",
          "C. 我想去中国。"
        ],
        "correct": 0,
        "explanation": "Câu đúng là \"我想去中国。\" (wǒ xiǎng qù zhōngguó). Chú ý: 想 thiên về mong muốn chủ quan, nhẹ hơn 要."
      }
    ]
  },
  {
    "id": "hsk1_grammar_18",
    "title": "18. 会 biết làm / sẽ",
    "level": "HSK 1",
    "theory": "Công thức: Chủ ngữ + 会 + Động từ\n\nCách dùng: Dùng để nói kỹ năng đã học được hoặc khả năng xảy ra trong tương lai.\n\nLỗi thường gặp: 会 không dùng cho khả năng bẩm sinh; có thể dùng 能 trong nhiều trường hợp.",
    "examples": [
      {
        "zh": "我会说汉语。",
        "pinyin": "wǒ huì shuō hànyǔ",
        "vi": "Tôi biết nói tiếng Trung."
      },
      {
        "zh": "明天会下雨。",
        "pinyin": "míngtiān huì xià yǔ",
        "vi": "Ngày mai sẽ mưa."
      }
    ],
    "quiz": [
      {
        "id": 1,
        "question": "Chọn câu tiếng Trung phù hợp nhất cho nghĩa: \"Tôi biết nói tiếng Trung.\"",
        "options": [
          "A. 我会说汉语。",
          "B. 明天会下雨。",
          "C. 我会说汉语。"
        ],
        "correct": 0,
        "explanation": "Câu đúng là \"我会说汉语。\" (wǒ huì shuō hànyǔ). Chú ý: 会 không dùng cho khả năng bẩm sinh; có thể dùng 能 trong nhiều trường hợp."
      }
    ]
  },
  {
    "id": "hsk1_grammar_19",
    "title": "19. 能 / 可以: có thể",
    "level": "HSK 1",
    "theory": "Công thức: Chủ ngữ + 能/可以 + Động từ\n\nCách dùng: 能 nhấn mạnh năng lực hoặc điều kiện cho phép. 可以 nhấn mạnh sự cho phép.\n\nLỗi thường gặp: Không phải mọi câu “can” trong tiếng Anh đều dùng 会. Cần phân biệt 会, 能, 可以.",
    "examples": [
      {
        "zh": "我今天不能去。",
        "pinyin": "wǒ jīntiān bù néng qù",
        "vi": "Hôm nay tôi không thể đi."
      },
      {
        "zh": "我可以进来吗？",
        "pinyin": "wǒ kěyǐ jìnlái ma",
        "vi": "Tôi có thể vào không?"
      }
    ],
    "quiz": [
      {
        "id": 1,
        "question": "Chọn câu tiếng Trung phù hợp nhất cho nghĩa: \"Hôm nay tôi không thể đi.\"",
        "options": [
          "A. 我今天不能去。",
          "B. 我可以进来吗？",
          "C. 我今天不能去。"
        ],
        "correct": 0,
        "explanation": "Câu đúng là \"我今天不能去。\" (wǒ jīntiān bù néng qù). Chú ý: Không phải mọi câu “can” trong tiếng Anh đều dùng 会. Cần phân biệt 会, 能, 可以."
      }
    ]
  },
  {
    "id": "hsk1_grammar_20",
    "title": "20. Thời gian đứng trước động từ",
    "level": "HSK 1",
    "theory": "Công thức: Chủ ngữ + Thời gian + Động từ\n\nCách dùng: Trạng ngữ thời gian thường đứng trước động từ.\n\nLỗi thường gặp: Không đặt thời gian sau tân ngữ theo kiểu tiếng Việt nếu muốn câu chuẩn cơ bản.",
    "examples": [
      {
        "zh": "我明天去学校。",
        "pinyin": "wǒ míngtiān qù xuéxiào",
        "vi": "Ngày mai tôi đi học."
      },
      {
        "zh": "今天我很忙。",
        "pinyin": "jīntiān wǒ hěn máng",
        "vi": "Hôm nay tôi rất bận."
      }
    ],
    "quiz": [
      {
        "id": 1,
        "question": "Chọn câu tiếng Trung phù hợp nhất cho nghĩa: \"Ngày mai tôi đi học.\"",
        "options": [
          "A. 我明天去学校。",
          "B. 今天我很忙。",
          "C. 我明天去学校。"
        ],
        "correct": 0,
        "explanation": "Câu đúng là \"我明天去学校。\" (wǒ míngtiān qù xuéxiào). Chú ý: Không đặt thời gian sau tân ngữ theo kiểu tiếng Việt nếu muốn câu chuẩn cơ bản."
      }
    ]
  },
  {
    "id": "hsk2_grammar_1",
    "title": "1. Câu hỏi với 怎么",
    "level": "HSK 2",
    "theory": "Công thức: Chủ ngữ + 怎么 + Động từ？\n\nCách dùng: Hỏi cách làm hoặc nguyên nhân tùy ngữ cảnh.\n\nLỗi thường gặp: 怎么 có thể là “như thế nào” hoặc “tại sao”, cần nhìn ngữ cảnh.",
    "examples": [
      {
        "zh": "这个字怎么读？",
        "pinyin": "zhège zì zěnme dú",
        "vi": "Chữ này đọc thế nào?"
      },
      {
        "zh": "你怎么不去？",
        "pinyin": "nǐ zěnme bú qù",
        "vi": "Sao bạn không đi?"
      }
    ],
    "quiz": [
      {
        "id": 1,
        "question": "Chọn câu tiếng Trung phù hợp nhất cho nghĩa: \"Chữ này đọc thế nào?\"",
        "options": [
          "A. 这个字怎么读？",
          "B. 你怎么不去？",
          "C. 这个字怎么读？"
        ],
        "correct": 0,
        "explanation": "Câu đúng là \"这个字怎么读？\" (zhège zì zěnme dú). Chú ý: 怎么 có thể là “như thế nào” hoặc “tại sao”, cần nhìn ngữ cảnh."
      }
    ]
  },
  {
    "id": "hsk2_grammar_2",
    "title": "2. Câu hỏi với 为什么",
    "level": "HSK 2",
    "theory": "Công thức: Chủ ngữ + 为什么 + Động từ/Tính từ？\n\nCách dùng: Hỏi lý do trực tiếp.\n\nLỗi thường gặp: 为什么 trang trọng/rõ nghĩa hơn 怎么 khi hỏi lý do.",
    "examples": [
      {
        "zh": "你为什么学习汉语？",
        "pinyin": "nǐ wèishénme xuéxí hànyǔ",
        "vi": "Tại sao bạn học tiếng Trung?"
      }
    ],
    "quiz": [
      {
        "id": 1,
        "question": "Chọn câu tiếng Trung phù hợp nhất cho nghĩa: \"Tại sao bạn học tiếng Trung?\"",
        "options": [
          "A. 你为什么学习汉语？",
          "B. 我为什么学习汉语？",
          "C. 你为什么学习汉语？"
        ],
        "correct": 0,
        "explanation": "Câu đúng là \"你为什么学习汉语？\" (nǐ wèishénme xuéxí hànyǔ). Chú ý: 为什么 trang trọng/rõ nghĩa hơn 怎么 khi hỏi lý do."
      }
    ]
  },
  {
    "id": "hsk2_grammar_3",
    "title": "3. 因为...所以...: vì...nên...",
    "level": "HSK 2",
    "theory": "Công thức: 因为 + Nguyên nhân，所以 + Kết quả\n\nCách dùng: Dùng để trình bày quan hệ nguyên nhân - kết quả.\n\nLỗi thường gặp: Trong tiếng Trung có thể dùng cả 因为 và 所以 trong cùng câu, khác với tiếng Anh.",
    "examples": [
      {
        "zh": "因为今天下雨，所以我不去。",
        "pinyin": "yīnwèi jīntiān xià yǔ, suǒyǐ wǒ bú qù",
        "vi": "Vì hôm nay mưa nên tôi không đi."
      }
    ],
    "quiz": [
      {
        "id": 1,
        "question": "Chọn câu tiếng Trung phù hợp nhất cho nghĩa: \"Vì hôm nay mưa nên tôi không đi.\"",
        "options": [
          "A. 因为今天下雨，所以我不去。",
          "B. 因为今天下雨，所以他不去。",
          "C. 因为今天下雨，所以我不去。"
        ],
        "correct": 0,
        "explanation": "Câu đúng là \"因为今天下雨，所以我不去。\" (yīnwèi jīntiān xià yǔ, suǒyǐ wǒ bú qù). Chú ý: Trong tiếng Trung có thể dùng cả 因为 và 所以 trong cùng câu, khác với tiếng Anh."
      }
    ]
  },
  {
    "id": "hsk2_grammar_4",
    "title": "4. 但是 / 可是: nhưng",
    "level": "HSK 2",
    "theory": "Công thức: Mệnh đề 1，但是/可是 + Mệnh đề 2\n\nCách dùng: Dùng để biểu thị sự đối lập.\n\nLỗi thường gặp: 可是 thường khẩu ngữ hơn 但是.",
    "examples": [
      {
        "zh": "我很想去，但是我没有时间。",
        "pinyin": "wǒ hěn xiǎng qù, dànshì wǒ méiyǒu shíjiān",
        "vi": "Tôi rất muốn đi, nhưng tôi không có thời gian."
      }
    ],
    "quiz": [
      {
        "id": 1,
        "question": "Chọn câu tiếng Trung phù hợp nhất cho nghĩa: \"Tôi rất muốn đi, nhưng tôi không có thời gian.\"",
        "options": [
          "A. 我很想去，但是我没有时间。",
          "B. 他很想去，但是他没有时间。",
          "C. 我很想去，但有我没有时间。"
        ],
        "correct": 0,
        "explanation": "Câu đúng là \"我很想去，但是我没有时间。\" (wǒ hěn xiǎng qù, dànshì wǒ méiyǒu shíjiān). Chú ý: 可是 thường khẩu ngữ hơn 但是."
      },
      {
        "id": 2,
        "question": "Điền từ thích hợp vào chỗ trống: \"我很想去，但 _______ 我没有时间。\" (Dịch nghĩa: Tôi rất muốn đi, nhưng tôi không có thời gian.)",
        "options": [
          "A. 是",
          "B. 的",
          "C. 了"
        ],
        "correct": 0,
        "explanation": "Điền \"是\" vào chỗ trống để tạo thành câu hoàn chỉnh: \"我很想去，但是我没有时间。\" (wǒ hěn xiǎng qù, dànshì wǒ méiyǒu shíjiān)."
      }
    ]
  },
  {
    "id": "hsk2_grammar_5",
    "title": "5. 也: cũng",
    "level": "HSK 2",
    "theory": "Công thức: Chủ ngữ + 也 + Động từ/Tính từ\n\nCách dùng: Dùng để nói một thông tin giống với thông tin trước.\n\nLỗi thường gặp: 也 đứng trước động từ/tính từ, không đứng cuối câu.",
    "examples": [
      {
        "zh": "我喜欢茶，他也喜欢茶。",
        "pinyin": "wǒ xǐhuan chá, tā yě xǐhuan chá",
        "vi": "Tôi thích trà, anh ấy cũng thích trà."
      }
    ],
    "quiz": [
      {
        "id": 1,
        "question": "Chọn câu tiếng Trung phù hợp nhất cho nghĩa: \"Tôi thích trà, anh ấy cũng thích trà.\"",
        "options": [
          "A. 我喜欢茶，他也喜欢茶。",
          "B. 他喜欢茶，他也喜欢茶。",
          "C. 我喜欢茶，他也喜欢茶。"
        ],
        "correct": 0,
        "explanation": "Câu đúng là \"我喜欢茶，他也喜欢茶。\" (wǒ xǐhuan chá, tā yě xǐhuan chá). Chú ý: 也 đứng trước động từ/tính từ, không đứng cuối câu."
      },
      {
        "id": 2,
        "question": "Điền từ thích hợp vào chỗ trống: \"我喜欢茶，他 _______ 喜欢茶。\" (Dịch nghĩa: Tôi thích trà, anh ấy cũng thích trà.)",
        "options": [
          "A. 也",
          "B. 是",
          "C. 的"
        ],
        "correct": 0,
        "explanation": "Điền \"也\" vào chỗ trống để tạo thành câu hoàn chỉnh: \"我喜欢茶，他也喜欢茶。\" (wǒ xǐhuan chá, tā yě xǐhuan chá)."
      }
    ]
  },
  {
    "id": "hsk2_grammar_6",
    "title": "6. 都: đều/tất cả",
    "level": "HSK 2",
    "theory": "Công thức: Chủ ngữ số nhiều + 都 + Động từ/Tính từ\n\nCách dùng: Dùng để nói tất cả các đối tượng cùng có một đặc điểm/hành động.\n\nLỗi thường gặp: 都 đứng sau chủ ngữ số nhiều, trước động từ/tính từ.",
    "examples": [
      {
        "zh": "我们都喜欢汉语。",
        "pinyin": "wǒmen dōu xǐhuan hànyǔ",
        "vi": "Chúng tôi đều thích tiếng Trung."
      }
    ],
    "quiz": [
      {
        "id": 1,
        "question": "Chọn câu tiếng Trung phù hợp nhất cho nghĩa: \"Chúng tôi đều thích tiếng Trung.\"",
        "options": [
          "A. 我们都喜欢汉语。",
          "B. 他们都喜欢汉语。",
          "C. 我们都喜欢汉语。"
        ],
        "correct": 0,
        "explanation": "Câu đúng là \"我们都喜欢汉语。\" (wǒmen dōu xǐhuan hànyǔ). Chú ý: 都 đứng sau chủ ngữ số nhiều, trước động từ/tính từ."
      },
      {
        "id": 2,
        "question": "Điền từ thích hợp vào chỗ trống: \"我们 _______ 喜欢汉语。\" (Dịch nghĩa: Chúng tôi đều thích tiếng Trung.)",
        "options": [
          "A. 都",
          "B. 是",
          "C. 的"
        ],
        "correct": 0,
        "explanation": "Điền \"都\" vào chỗ trống để tạo thành câu hoàn chỉnh: \"我们都喜欢汉语。\" (wǒmen dōu xǐhuan hànyǔ)."
      }
    ]
  },
  {
    "id": "hsk2_grammar_7",
    "title": "7. 还: vẫn/còn",
    "level": "HSK 2",
    "theory": "Công thức: Chủ ngữ + 还 + Động từ/Tính từ\n\nCách dùng: Diễn tả trạng thái tiếp tục hoặc bổ sung.\n\nLỗi thường gặp: Phân biệt 还 “vẫn/còn” với 也 “cũng”.",
    "examples": [
      {
        "zh": "他还在学校。",
        "pinyin": "tā hái zài xuéxiào",
        "vi": "Anh ấy vẫn còn ở trường."
      },
      {
        "zh": "我还想喝水。",
        "pinyin": "wǒ hái xiǎng hē shuǐ",
        "vi": "Tôi còn muốn uống nước."
      }
    ],
    "quiz": [
      {
        "id": 1,
        "question": "Chọn câu tiếng Trung phù hợp nhất cho nghĩa: \"Anh ấy vẫn còn ở trường.\"",
        "options": [
          "A. 他还在学校。",
          "B. 我还想喝水。",
          "C. 他还在学校。"
        ],
        "correct": 0,
        "explanation": "Câu đúng là \"他还在学校。\" (tā hái zài xuéxiào). Chú ý: Phân biệt 还 “vẫn/còn” với 也 “cũng”."
      }
    ]
  },
  {
    "id": "hsk2_grammar_8",
    "title": "8. 已经...了: đã...rồi",
    "level": "HSK 2",
    "theory": "Công thức: Chủ ngữ + 已经 + Động từ/Tính từ + 了\n\nCách dùng: Nhấn mạnh một việc đã xảy ra hoặc trạng thái đã thay đổi.\n\nLỗi thường gặp: 已经 thường đi với 了 để nhấn mạnh sự hoàn tất/thay đổi.",
    "examples": [
      {
        "zh": "我已经吃饭了。",
        "pinyin": "wǒ yǐjīng chī fàn le",
        "vi": "Tôi đã ăn cơm rồi."
      }
    ],
    "quiz": [
      {
        "id": 1,
        "question": "Chọn câu tiếng Trung phù hợp nhất cho nghĩa: \"Tôi đã ăn cơm rồi.\"",
        "options": [
          "A. 我已经吃饭了。",
          "B. 他已经吃饭了。",
          "C. 我已经吃饭了。"
        ],
        "correct": 0,
        "explanation": "Câu đúng là \"我已经吃饭了。\" (wǒ yǐjīng chī fàn le). Chú ý: 已经 thường đi với 了 để nhấn mạnh sự hoàn tất/thay đổi."
      },
      {
        "id": 2,
        "question": "Điền từ thích hợp vào chỗ trống: \"我已经吃饭 _______ 。\" (Dịch nghĩa: Tôi đã ăn cơm rồi.)",
        "options": [
          "A. 了",
          "B. 是",
          "C. 的"
        ],
        "correct": 0,
        "explanation": "Điền \"了\" vào chỗ trống để tạo thành câu hoàn chỉnh: \"我已经吃饭了。\" (wǒ yǐjīng chī fàn le)."
      }
    ]
  },
  {
    "id": "hsk2_grammar_9",
    "title": "9. 正在...呢: đang...",
    "level": "HSK 2",
    "theory": "Công thức: Chủ ngữ + 正在/在 + Động từ + 呢\n\nCách dùng: Nhấn mạnh hành động đang diễn ra ngay lúc nói.\n\nLỗi thường gặp: 正在 nhấn mạnh hơn 在.",
    "examples": [
      {
        "zh": "他正在睡觉呢。",
        "pinyin": "tā zhèngzài shuìjiào ne",
        "vi": "Anh ấy đang ngủ đấy."
      }
    ],
    "quiz": [
      {
        "id": 1,
        "question": "Chọn câu tiếng Trung phù hợp nhất cho nghĩa: \"Anh ấy đang ngủ đấy.\"",
        "options": [
          "A. 他正在睡觉呢。",
          "B. 他正在睡觉呢。",
          "C. 他正在睡觉呢。"
        ],
        "correct": 0,
        "explanation": "Câu đúng là \"他正在睡觉呢。\" (tā zhèngzài shuìjiào ne). Chú ý: 正在 nhấn mạnh hơn 在."
      },
      {
        "id": 2,
        "question": "Điền từ thích hợp vào chỗ trống: \"他正 _______ 睡觉呢。\" (Dịch nghĩa: Anh ấy đang ngủ đấy.)",
        "options": [
          "A. 在",
          "B. 是",
          "C. 的"
        ],
        "correct": 0,
        "explanation": "Điền \"在\" vào chỗ trống để tạo thành câu hoàn chỉnh: \"他正在睡觉呢。\" (tā zhèngzài shuìjiào ne)."
      }
    ]
  },
  {
    "id": "hsk2_grammar_10",
    "title": "10. 要...了: sắp...",
    "level": "HSK 2",
    "theory": "Công thức: 要 + Động từ + 了\n\nCách dùng: Dùng để nói một sự việc sắp xảy ra.\n\nLỗi thường gặp: 要...了 trong ngữ cảnh này không phải là “muốn”.",
    "examples": [
      {
        "zh": "要下雨了。",
        "pinyin": "yào xià yǔ le",
        "vi": "Sắp mưa rồi."
      },
      {
        "zh": "火车快要到了。",
        "pinyin": "huǒchē kuàiyào dào le",
        "vi": "Tàu sắp đến rồi."
      }
    ],
    "quiz": [
      {
        "id": 1,
        "question": "Chọn câu tiếng Trung phù hợp nhất cho nghĩa: \"Sắp mưa rồi.\"",
        "options": [
          "A. 要下雨了。",
          "B. 火车快要到了。",
          "C. 要下雨了。"
        ],
        "correct": 0,
        "explanation": "Câu đúng là \"要下雨了。\" (yào xià yǔ le). Chú ý: 要...了 trong ngữ cảnh này không phải là “muốn”."
      },
      {
        "id": 2,
        "question": "Điền từ thích hợp vào chỗ trống: \"要下雨 _______ 。\" (Dịch nghĩa: Sắp mưa rồi.)",
        "options": [
          "A. 了",
          "B. 是",
          "C. 的"
        ],
        "correct": 0,
        "explanation": "Điền \"了\" vào chỗ trống để tạo thành câu hoàn chỉnh: \"要下雨了。\" (yào xià yǔ le)."
      }
    ]
  },
  {
    "id": "hsk2_grammar_11",
    "title": "11. 一边...一边...: vừa...vừa...",
    "level": "HSK 2",
    "theory": "Công thức: Chủ ngữ + 一边 + Động từ 1 + 一边 + Động từ 2\n\nCách dùng: Nói hai hành động diễn ra đồng thời.\n\nLỗi thường gặp: Hai hành động nên có khả năng xảy ra cùng lúc.",
    "examples": [
      {
        "zh": "她一边听音乐一边做饭。",
        "pinyin": "tā yìbiān tīng yīnyuè yìbiān zuò fàn",
        "vi": "Cô ấy vừa nghe nhạc vừa nấu cơm."
      }
    ],
    "quiz": [
      {
        "id": 1,
        "question": "Chọn câu tiếng Trung phù hợp nhất cho nghĩa: \"Cô ấy vừa nghe nhạc vừa nấu cơm.\"",
        "options": [
          "A. 她一边听音乐一边做饭。",
          "B. 她一边听音乐一边做饭。",
          "C. 她一边听音乐一边做饭。"
        ],
        "correct": 0,
        "explanation": "Câu đúng là \"她一边听音乐一边做饭。\" (tā yìbiān tīng yīnyuè yìbiān zuò fàn). Chú ý: Hai hành động nên có khả năng xảy ra cùng lúc."
      }
    ]
  },
  {
    "id": "hsk2_grammar_12",
    "title": "12. 比: so sánh hơn",
    "level": "HSK 2",
    "theory": "Công thức: A + 比 + B + Tính từ\n\nCách dùng: Dùng để so sánh A hơn B ở một tính chất nào đó.\n\nLỗi thường gặp: Không thêm 很 sau tính từ trong câu 比 cơ bản: `他比我很高` là sai.",
    "examples": [
      {
        "zh": "今天比昨天冷。",
        "pinyin": "jīntiān bǐ zuótiān lěng",
        "vi": "Hôm nay lạnh hơn hôm qua."
      },
      {
        "zh": "他比我高。",
        "pinyin": "tā bǐ wǒ gāo",
        "vi": "Anh ấy cao hơn tôi."
      }
    ],
    "quiz": [
      {
        "id": 1,
        "question": "Chọn câu tiếng Trung phù hợp nhất cho nghĩa: \"Hôm nay lạnh hơn hôm qua.\"",
        "options": [
          "A. 今天比昨天冷。",
          "B. 他比我高。",
          "C. 今天比昨天冷。"
        ],
        "correct": 0,
        "explanation": "Câu đúng là \"今天比昨天冷。\" (jīntiān bǐ zuótiān lěng). Chú ý: Không thêm 很 sau tính từ trong câu 比 cơ bản: `他比我很高` là sai."
      },
      {
        "id": 2,
        "question": "Điền từ thích hợp vào chỗ trống: \"今天 _______ 昨天冷。\" (Dịch nghĩa: Hôm nay lạnh hơn hôm qua.)",
        "options": [
          "A. 比",
          "B. 是",
          "C. 的"
        ],
        "correct": 0,
        "explanation": "Điền \"比\" vào chỗ trống để tạo thành câu hoàn chỉnh: \"今天比昨天冷。\" (jīntiān bǐ zuótiān lěng)."
      }
    ]
  },
  {
    "id": "hsk2_grammar_13",
    "title": "13. 没有: không bằng",
    "level": "HSK 2",
    "theory": "Công thức: A + 没有 + B + Tính từ\n\nCách dùng: Dùng để nói A không bằng B.\n\nLỗi thường gặp: 没有 trong so sánh khác với 没有 chỉ sở hữu.",
    "examples": [
      {
        "zh": "我没有他高。",
        "pinyin": "wǒ méiyǒu tā gāo",
        "vi": "Tôi không cao bằng anh ấy."
      }
    ],
    "quiz": [
      {
        "id": 1,
        "question": "Chọn câu tiếng Trung phù hợp nhất cho nghĩa: \"Tôi không cao bằng anh ấy.\"",
        "options": [
          "A. 我没有他高。",
          "B. 他没有他高。",
          "C. 我没有他高。"
        ],
        "correct": 0,
        "explanation": "Câu đúng là \"我没有他高。\" (wǒ méiyǒu tā gāo). Chú ý: 没有 trong so sánh khác với 没有 chỉ sở hữu."
      },
      {
        "id": 2,
        "question": "Điền từ thích hợp vào chỗ trống: \"我 _______ 有他高。\" (Dịch nghĩa: Tôi không cao bằng anh ấy.)",
        "options": [
          "A. 没",
          "B. 是",
          "C. 的"
        ],
        "correct": 0,
        "explanation": "Điền \"没\" vào chỗ trống để tạo thành câu hoàn chỉnh: \"我没有他高。\" (wǒ méiyǒu tā gāo)."
      }
    ]
  },
  {
    "id": "hsk2_grammar_14",
    "title": "14. 最: nhất",
    "level": "HSK 2",
    "theory": "Công thức: Chủ ngữ + 最 + Tính từ\n\nCách dùng: Dùng để nói mức độ cao nhất trong một phạm vi.\n\nLỗi thường gặp: Nên có phạm vi rõ ràng nếu cần: 在我们班，他最高。",
    "examples": [
      {
        "zh": "他最高。",
        "pinyin": "tā zuì gāo",
        "vi": "Anh ấy cao nhất."
      },
      {
        "zh": "我最喜欢这个菜。",
        "pinyin": "wǒ zuì xǐhuan zhège cài",
        "vi": "Tôi thích món này nhất."
      }
    ],
    "quiz": [
      {
        "id": 1,
        "question": "Chọn câu tiếng Trung phù hợp nhất cho nghĩa: \"Anh ấy cao nhất.\"",
        "options": [
          "A. 他最高。",
          "B. 我最喜欢这个菜。",
          "C. 他最高。"
        ],
        "correct": 0,
        "explanation": "Câu đúng là \"他最高。\" (tā zuì gāo). Chú ý: Nên có phạm vi rõ ràng nếu cần: 在我们班，他最高。"
      }
    ]
  },
  {
    "id": "hsk2_grammar_15",
    "title": "15. 得 bổ ngữ mức độ",
    "level": "HSK 2",
    "theory": "Công thức: Động từ + 得 + Tính từ/Cụm miêu tả\n\nCách dùng: Dùng để mô tả mức độ hoặc kết quả của hành động.\n\nLỗi thường gặp: Nếu động từ có tân ngữ, thường phải lặp động từ: 他汉语说得很好。",
    "examples": [
      {
        "zh": "他说得很好。",
        "pinyin": "tā shuō de hěn hǎo",
        "vi": "Anh ấy nói rất tốt."
      },
      {
        "zh": "她跑得很快。",
        "pinyin": "tā pǎo de hěn kuài",
        "vi": "Cô ấy chạy rất nhanh."
      }
    ],
    "quiz": [
      {
        "id": 1,
        "question": "Chọn câu tiếng Trung phù hợp nhất cho nghĩa: \"Anh ấy nói rất tốt.\"",
        "options": [
          "A. 他说得很好。",
          "B. 她跑得很快。",
          "C. 他说得很好。"
        ],
        "correct": 0,
        "explanation": "Câu đúng là \"他说得很好。\" (tā shuō de hěn hǎo). Chú ý: Nếu động từ có tân ngữ, thường phải lặp động từ: 他汉语说得很好。"
      }
    ]
  },
  {
    "id": "hsk2_grammar_16",
    "title": "16. Bổ ngữ kết quả 到",
    "level": "HSK 2",
    "theory": "Công thức: Động từ + 到 + Tân ngữ\n\nCách dùng: Dùng để nói hành động đạt được mục tiêu/kết quả.\n\nLỗi thường gặp: 看见 là nhìn thấy, 找到 là tìm thấy; không chỉ là hành động, mà là có kết quả.",
    "examples": [
      {
        "zh": "我找到了手机。",
        "pinyin": "wǒ zhǎodào le shǒujī",
        "vi": "Tôi tìm thấy điện thoại rồi."
      },
      {
        "zh": "他买到了票。",
        "pinyin": "tā mǎidào le piào",
        "vi": "Anh ấy mua được vé rồi."
      }
    ],
    "quiz": [
      {
        "id": 1,
        "question": "Chọn câu tiếng Trung phù hợp nhất cho nghĩa: \"Tôi tìm thấy điện thoại rồi.\"",
        "options": [
          "A. 我找到了手机。",
          "B. 他买到了票。",
          "C. 我找到了手机。"
        ],
        "correct": 0,
        "explanation": "Câu đúng là \"我找到了手机。\" (wǒ zhǎodào le shǒujī). Chú ý: 看见 là nhìn thấy, 找到 là tìm thấy; không chỉ là hành động, mà là có kết quả."
      }
    ]
  },
  {
    "id": "hsk2_grammar_17",
    "title": "17. Bổ ngữ xu hướng 来 / 去",
    "level": "HSK 2",
    "theory": "Công thức: Động từ + 来/去\n\nCách dùng: 来 hướng về phía người nói; 去 hướng ra xa người nói.\n\nLỗi thường gặp: Cần xác định điểm nhìn của người nói.",
    "examples": [
      {
        "zh": "请进来。",
        "pinyin": "qǐng jìnlái",
        "vi": "Mời vào đây."
      },
      {
        "zh": "他回去了。",
        "pinyin": "tā huíqù le",
        "vi": "Anh ấy về rồi."
      }
    ],
    "quiz": [
      {
        "id": 1,
        "question": "Chọn câu tiếng Trung phù hợp nhất cho nghĩa: \"Mời vào đây.\"",
        "options": [
          "A. 请进来。",
          "B. 他回去了。",
          "C. 请进来。"
        ],
        "correct": 0,
        "explanation": "Câu đúng là \"请进来。\" (qǐng jìnlái). Chú ý: Cần xác định điểm nhìn của người nói."
      }
    ]
  },
  {
    "id": "hsk2_grammar_18",
    "title": "18. 离: cách",
    "level": "HSK 2",
    "theory": "Công thức: A + 离 + B + Xa/Gần\n\nCách dùng: Dùng để nói khoảng cách giữa hai nơi/người/vật.\n\nLỗi thường gặp: Không dùng 从 trong câu khoảng cách này.",
    "examples": [
      {
        "zh": "我家离学校很近。",
        "pinyin": "wǒ jiā lí xuéxiào hěn jìn",
        "vi": "Nhà tôi cách trường rất gần."
      }
    ],
    "quiz": [
      {
        "id": 1,
        "question": "Chọn câu tiếng Trung phù hợp nhất cho nghĩa: \"Nhà tôi cách trường rất gần.\"",
        "options": [
          "A. 我家离学校很近。",
          "B. 他家离学校很近。",
          "C. 我家离学校很近。"
        ],
        "correct": 0,
        "explanation": "Câu đúng là \"我家离学校很近。\" (wǒ jiā lí xuéxiào hěn jìn). Chú ý: Không dùng 从 trong câu khoảng cách này."
      }
    ]
  },
  {
    "id": "hsk2_grammar_19",
    "title": "19. 从...到...: từ...đến...",
    "level": "HSK 2",
    "theory": "Công thức: 从 + Điểm bắt đầu + 到 + Điểm kết thúc\n\nCách dùng: Dùng cho thời gian hoặc địa điểm.\n\nLỗi thường gặp: 从 chỉ điểm xuất phát, không phải lúc nào cũng tương đương “từ” trong tiếng Việt.",
    "examples": [
      {
        "zh": "我从八点到十点学习。",
        "pinyin": "wǒ cóng bā diǎn dào shí diǎn xuéxí",
        "vi": "Tôi học từ 8 giờ đến 10 giờ."
      }
    ],
    "quiz": [
      {
        "id": 1,
        "question": "Chọn câu tiếng Trung phù hợp nhất cho nghĩa: \"Tôi học từ 8 giờ đến 10 giờ.\"",
        "options": [
          "A. 我从八点到十点学习。",
          "B. 他从八点到十点学习。",
          "C. 我从八点到十点学习。"
        ],
        "correct": 0,
        "explanation": "Câu đúng là \"我从八点到十点学习。\" (wǒ cóng bā diǎn dào shí diǎn xuéxí). Chú ý: 从 chỉ điểm xuất phát, không phải lúc nào cũng tương đương “từ” trong tiếng Việt."
      }
    ]
  },
  {
    "id": "hsk2_grammar_20",
    "title": "20. 给: cho/gửi/gọi",
    "level": "HSK 2",
    "theory": "Công thức: Chủ ngữ + 给 + Người nhận + Động từ/Tân ngữ\n\nCách dùng: Dùng để chỉ người nhận hành động.\n\nLỗi thường gặp: 给 có nhiều nghĩa: cho, gửi, vì/cho ai đó.",
    "examples": [
      {
        "zh": "我给妈妈打电话。",
        "pinyin": "wǒ gěi māma dǎ diànhuà",
        "vi": "Tôi gọi điện cho mẹ."
      },
      {
        "zh": "他给我一本书。",
        "pinyin": "tā gěi wǒ yì běn shū",
        "vi": "Anh ấy đưa cho tôi một quyển sách."
      }
    ],
    "quiz": [
      {
        "id": 1,
        "question": "Chọn câu tiếng Trung phù hợp nhất cho nghĩa: \"Tôi gọi điện cho mẹ.\"",
        "options": [
          "A. 我给妈妈打电话。",
          "B. 他给我一本书。",
          "C. 我给妈妈打电话。"
        ],
        "correct": 0,
        "explanation": "Câu đúng là \"我给妈妈打电话。\" (wǒ gěi māma dǎ diànhuà). Chú ý: 给 có nhiều nghĩa: cho, gửi, vì/cho ai đó."
      }
    ]
  },
  {
    "id": "hsk3_grammar_1",
    "title": "1. 虽然...但是...: tuy...nhưng...",
    "level": "HSK 3",
    "theory": "Công thức: 虽然 + Mệnh đề 1，但是 + Mệnh đề 2\n\nCách dùng: Dùng để nhượng bộ, đưa ra hai ý trái chiều.\n\nLỗi thường gặp: Có thể dùng cả 虽然 và 但是 trong tiếng Trung.",
    "examples": [
      {
        "zh": "虽然今天很冷，但是我还要出去。",
        "pinyin": "suīrán jīntiān hěn lěng, dànshì wǒ hái yào chūqù",
        "vi": "Tuy hôm nay rất lạnh, nhưng tôi vẫn phải ra ngoài."
      }
    ],
    "quiz": [
      {
        "id": 1,
        "question": "Chọn câu tiếng Trung phù hợp nhất cho nghĩa: \"Tuy hôm nay rất lạnh, nhưng tôi vẫn phải ra ngoài.\"",
        "options": [
          "A. 虽然今天很冷，但是我还要出去。",
          "B. 虽然今天很冷，但是他还要出去。",
          "C. 虽然今天很冷，但有我还要出去。"
        ],
        "correct": 0,
        "explanation": "Câu đúng là \"虽然今天很冷，但是我还要出去。\" (suīrán jīntiān hěn lěng, dànshì wǒ hái yào chūqù). Chú ý: Có thể dùng cả 虽然 và 但是 trong tiếng Trung."
      },
      {
        "id": 2,
        "question": "Điền từ thích hợp vào chỗ trống: \"虽然今天很冷，但 _______ 我还要出去。\" (Dịch nghĩa: Tuy hôm nay rất lạnh, nhưng tôi vẫn phải ra ngoài.)",
        "options": [
          "A. 是",
          "B. 的",
          "C. 了"
        ],
        "correct": 0,
        "explanation": "Điền \"是\" vào chỗ trống để tạo thành câu hoàn chỉnh: \"虽然今天很冷，但是我还要出去。\" (suīrán jīntiān hěn lěng, dànshì wǒ hái yào chūqù)."
      }
    ]
  },
  {
    "id": "hsk3_grammar_2",
    "title": "2. 如果...就...: nếu...thì...",
    "level": "HSK 3",
    "theory": "Công thức: 如果 + Điều kiện，就 + Kết quả\n\nCách dùng: Dùng để nói điều kiện và kết quả.\n\nLỗi thường gặp: 就 thường đứng trước động từ ở mệnh đề kết quả.",
    "examples": [
      {
        "zh": "如果明天下雨，我们就不去。",
        "pinyin": "rúguǒ míngtiān xià yǔ, wǒmen jiù bú qù",
        "vi": "Nếu ngày mai mưa, chúng ta sẽ không đi."
      }
    ],
    "quiz": [
      {
        "id": 1,
        "question": "Chọn câu tiếng Trung phù hợp nhất cho nghĩa: \"Nếu ngày mai mưa, chúng ta sẽ không đi.\"",
        "options": [
          "A. 如果明天下雨，我们就不去。",
          "B. 如果明天下雨，他们就不去。",
          "C. 如果明天下雨，我们就不去。"
        ],
        "correct": 0,
        "explanation": "Câu đúng là \"如果明天下雨，我们就不去。\" (rúguǒ míngtiān xià yǔ, wǒmen jiù bú qù). Chú ý: 就 thường đứng trước động từ ở mệnh đề kết quả."
      },
      {
        "id": 2,
        "question": "Điền từ thích hợp vào chỗ trống: \" _______ 明天下雨，我们就不去。\" (Dịch nghĩa: Nếu ngày mai mưa, chúng ta sẽ không đi.)",
        "options": [
          "A. 如果",
          "B. 是",
          "C. 的"
        ],
        "correct": 0,
        "explanation": "Điền \"如果\" vào chỗ trống để tạo thành câu hoàn chỉnh: \"如果明天下雨，我们就不去。\" (rúguǒ míngtiān xià yǔ, wǒmen jiù bú qù)."
      }
    ]
  },
  {
    "id": "hsk3_grammar_3",
    "title": "3. 除了...以外，还/都...",
    "level": "HSK 3",
    "theory": "Công thức: 除了 + A + 以外，还 + B\n\nCách dùng: 还: ngoài A còn có B.  \n都: ngoại trừ A, tất cả đều B.\n\nLỗi thường gặp: 还 và 都 làm thay đổi nghĩa rất mạnh.",
    "examples": [
      {
        "zh": "除了汉语以外，我还学习英语。",
        "pinyin": "chúle hànyǔ yǐwài, wǒ hái xuéxí yīngyǔ",
        "vi": "Ngoài tiếng Trung, tôi còn học tiếng Anh."
      },
      {
        "zh": "除了他以外，大家都来了。",
        "pinyin": "chúle tā yǐwài, dàjiā dōu lái le",
        "vi": "Ngoại trừ anh ấy, mọi người đều đến."
      }
    ],
    "quiz": [
      {
        "id": 1,
        "question": "Chọn câu tiếng Trung phù hợp nhất cho nghĩa: \"Ngoài tiếng Trung, tôi còn học tiếng Anh.\"",
        "options": [
          "A. 除了汉语以外，我还学习英语。",
          "B. 除了他以外，大家都来了。",
          "C. 除了汉语以外，我还学习英语。"
        ],
        "correct": 0,
        "explanation": "Câu đúng là \"除了汉语以外，我还学习英语。\" (chúle hànyǔ yǐwài, wǒ hái xuéxí yīngyǔ). Chú ý: 还 và 都 làm thay đổi nghĩa rất mạnh."
      },
      {
        "id": 2,
        "question": "Điền từ thích hợp vào chỗ trống: \"除 _______ 汉语以外，我还学习英语。\" (Dịch nghĩa: Ngoài tiếng Trung, tôi còn học tiếng Anh.)",
        "options": [
          "A. 了",
          "B. 是",
          "C. 的"
        ],
        "correct": 0,
        "explanation": "Điền \"了\" vào chỗ trống để tạo thành câu hoàn chỉnh: \"除了汉语以外，我还学习英语。\" (chúle hànyǔ yǐwài, wǒ hái xuéxí yīngyǔ)."
      }
    ]
  },
  {
    "id": "hsk3_grammar_4",
    "title": "4. 一...就...: hễ/vừa...là...",
    "level": "HSK 3",
    "theory": "Công thức: 一 + Động từ/Mệnh đề, 就 + Kết quả\n\nCách dùng: Diễn tả hai sự việc xảy ra liên tiếp hoặc quan hệ điều kiện tự nhiên.\n\nLỗi thường gặp: Không hiểu 一 ở đây là số “một”; đây là cấu trúc ngữ pháp.",
    "examples": [
      {
        "zh": "我一到家就睡觉。",
        "pinyin": "wǒ yí dào jiā jiù shuìjiào",
        "vi": "Tôi vừa về đến nhà là ngủ."
      }
    ],
    "quiz": [
      {
        "id": 1,
        "question": "Chọn câu tiếng Trung phù hợp nhất cho nghĩa: \"Tôi vừa về đến nhà là ngủ.\"",
        "options": [
          "A. 我一到家就睡觉。",
          "B. 他一到家就睡觉。",
          "C. 我一到家就睡觉。"
        ],
        "correct": 0,
        "explanation": "Câu đúng là \"我一到家就睡觉。\" (wǒ yí dào jiā jiù shuìjiào). Chú ý: Không hiểu 一 ở đây là số “một”; đây là cấu trúc ngữ pháp."
      },
      {
        "id": 2,
        "question": "Điền từ thích hợp vào chỗ trống: \"我一到家 _______ 睡觉。\" (Dịch nghĩa: Tôi vừa về đến nhà là ngủ.)",
        "options": [
          "A. 就",
          "B. 是",
          "C. 的"
        ],
        "correct": 0,
        "explanation": "Điền \"就\" vào chỗ trống để tạo thành câu hoàn chỉnh: \"我一到家就睡觉。\" (wǒ yí dào jiā jiù shuìjiào)."
      }
    ]
  },
  {
    "id": "hsk3_grammar_5",
    "title": "5. 越来越...: càng ngày càng...",
    "level": "HSK 3",
    "theory": "Công thức: 越来越 + Tính từ/Động từ tâm lý\n\nCách dùng: Diễn tả mức độ tăng dần theo thời gian.\n\nLỗi thường gặp: Không tách 越来越 thành hai vế như 越...越...",
    "examples": [
      {
        "zh": "天气越来越热。",
        "pinyin": "tiānqì yuèláiyuè rè",
        "vi": "Thời tiết càng ngày càng nóng."
      },
      {
        "zh": "我越来越喜欢中文。",
        "pinyin": "wǒ yuèláiyuè xǐhuan zhōngwén",
        "vi": "Tôi càng ngày càng thích tiếng Trung."
      }
    ],
    "quiz": [
      {
        "id": 1,
        "question": "Chọn câu tiếng Trung phù hợp nhất cho nghĩa: \"Thời tiết càng ngày càng nóng.\"",
        "options": [
          "A. 天气越来越热。",
          "B. 我越来越喜欢中文。",
          "C. 天气越来越热。"
        ],
        "correct": 0,
        "explanation": "Câu đúng là \"天气越来越热。\" (tiānqì yuèláiyuè rè). Chú ý: Không tách 越来越 thành hai vế như 越...越..."
      },
      {
        "id": 2,
        "question": "Điền từ thích hợp vào chỗ trống: \"天气 _______ 热。\" (Dịch nghĩa: Thời tiết càng ngày càng nóng.)",
        "options": [
          "A. 越来越",
          "B. 是",
          "C. 的"
        ],
        "correct": 0,
        "explanation": "Điền \"越来越\" vào chỗ trống để tạo thành câu hoàn chỉnh: \"天气越来越热。\" (tiānqì yuèláiyuè rè)."
      }
    ]
  },
  {
    "id": "hsk3_grammar_6",
    "title": "6. 越...越...: càng...càng...",
    "level": "HSK 3",
    "theory": "Công thức: 越 + Điều kiện/Hành động, 越 + Kết quả/Mức độ\n\nCách dùng: Diễn tả hai mức độ cùng tăng hoặc thay đổi tương ứng.\n\nLỗi thường gặp: Cấu trúc này cần hai vế tương ứng.",
    "examples": [
      {
        "zh": "你越努力，进步越快。",
        "pinyin": "nǐ yuè nǔlì, jìnbù yuè kuài",
        "vi": "Bạn càng nỗ lực, tiến bộ càng nhanh."
      }
    ],
    "quiz": [
      {
        "id": 1,
        "question": "Chọn câu tiếng Trung phù hợp nhất cho nghĩa: \"Bạn càng nỗ lực, tiến bộ càng nhanh.\"",
        "options": [
          "A. 你越努力，进步越快。",
          "B. 我越努力，进步越快。",
          "C. 你越努力，进步越快。"
        ],
        "correct": 0,
        "explanation": "Câu đúng là \"你越努力，进步越快。\" (nǐ yuè nǔlì, jìnbù yuè kuài). Chú ý: Cấu trúc này cần hai vế tương ứng."
      }
    ]
  },
  {
    "id": "hsk3_grammar_7",
    "title": "7. 又...又...: vừa...vừa...",
    "level": "HSK 3",
    "theory": "Công thức: 又 + Tính từ/Động từ + 又 + Tính từ/Động từ\n\nCách dùng: Dùng để liệt kê hai đặc điểm cùng tồn tại.\n\nLỗi thường gặp: Thường dùng cho tính chất tương đối cùng chiều.",
    "examples": [
      {
        "zh": "这个房间又大又干净。",
        "pinyin": "zhège fángjiān yòu dà yòu gānjìng",
        "vi": "Căn phòng này vừa lớn vừa sạch."
      }
    ],
    "quiz": [
      {
        "id": 1,
        "question": "Chọn câu tiếng Trung phù hợp nhất cho nghĩa: \"Căn phòng này vừa lớn vừa sạch.\"",
        "options": [
          "A. 这个房间又大又干净。",
          "B. 这个房间又大又干净。",
          "C. 这个房间又大又干净。"
        ],
        "correct": 0,
        "explanation": "Câu đúng là \"这个房间又大又干净。\" (zhège fángjiān yòu dà yòu gānjìng). Chú ý: Thường dùng cho tính chất tương đối cùng chiều."
      }
    ]
  },
  {
    "id": "hsk3_grammar_8",
    "title": "8. 一点儿 / 有点儿",
    "level": "HSK 3",
    "theory": "Công thức: Tính từ + 一点儿\n\nCách dùng: 一点儿: một chút, thường sau tính từ.  \n有点儿: hơi, thường trước tính từ mang sắc thái không mong muốn.\n\nLỗi thường gặp: Không nói `有点儿漂亮` nếu muốn khen bình thường; vì 有点儿 thường tiêu cực.",
    "examples": [
      {
        "zh": "请慢一点儿。",
        "pinyin": "qǐng màn yìdiǎnr",
        "vi": "Xin chậm một chút."
      },
      {
        "zh": "今天有点儿冷。",
        "pinyin": "jīntiān yǒudiǎnr lěng",
        "vi": "Hôm nay hơi lạnh."
      }
    ],
    "quiz": [
      {
        "id": 1,
        "question": "Chọn câu tiếng Trung phù hợp nhất cho nghĩa: \"Xin chậm một chút.\"",
        "options": [
          "A. 请慢一点儿。",
          "B. 今天有点儿冷。",
          "C. 请慢一点儿。"
        ],
        "correct": 0,
        "explanation": "Câu đúng là \"请慢一点儿。\" (qǐng màn yìdiǎnr). Chú ý: Không nói `有点儿漂亮` nếu muốn khen bình thường; vì 有点儿 thường tiêu cực."
      }
    ]
  },
  {
    "id": "hsk3_grammar_9",
    "title": "9. 着 biểu thị trạng thái tiếp diễn",
    "level": "HSK 3",
    "theory": "Công thức: Động từ + 着\n\nCách dùng: Diễn tả trạng thái đang duy trì sau một hành động.\n\nLỗi thường gặp: 着 không giống 在. 在 nhấn mạnh hành động đang diễn ra; 着 nhấn mạnh trạng thái.",
    "examples": [
      {
        "zh": "门开着。",
        "pinyin": "mén kāi zhe",
        "vi": "Cửa đang mở."
      },
      {
        "zh": "他坐着看书。",
        "pinyin": "tā zuò zhe kàn shū",
        "vi": "Anh ấy ngồi đọc sách."
      }
    ],
    "quiz": [
      {
        "id": 1,
        "question": "Chọn câu tiếng Trung phù hợp nhất cho nghĩa: \"Cửa đang mở.\"",
        "options": [
          "A. 门开着。",
          "B. 他坐着看书。",
          "C. 门开着。"
        ],
        "correct": 0,
        "explanation": "Câu đúng là \"门开着。\" (mén kāi zhe). Chú ý: 着 không giống 在. 在 nhấn mạnh hành động đang diễn ra; 着 nhấn mạnh trạng thái."
      }
    ]
  },
  {
    "id": "hsk3_grammar_10",
    "title": "10. 过 biểu thị kinh nghiệm",
    "level": "HSK 3",
    "theory": "Công thức: Chủ ngữ + Động từ + 过 + Tân ngữ\n\nCách dùng: Dùng để nói đã từng có kinh nghiệm làm gì.\n\nLỗi thường gặp: 过 nhấn mạnh kinh nghiệm, không chỉ thời điểm đã xảy ra.",
    "examples": [
      {
        "zh": "我去过北京。",
        "pinyin": "wǒ qù guo běijīng",
        "vi": "Tôi đã từng đi Bắc Kinh."
      },
      {
        "zh": "你吃过中国菜吗？",
        "pinyin": "nǐ chī guo zhōngguó cài ma",
        "vi": "Bạn đã từng ăn món Trung Quốc chưa?"
      }
    ],
    "quiz": [
      {
        "id": 1,
        "question": "Chọn câu tiếng Trung phù hợp nhất cho nghĩa: \"Tôi đã từng đi Bắc Kinh.\"",
        "options": [
          "A. 我去过北京。",
          "B. 你吃过中国菜吗？",
          "C. 我去过北京。"
        ],
        "correct": 0,
        "explanation": "Câu đúng là \"我去过北京。\" (wǒ qù guo běijīng). Chú ý: 过 nhấn mạnh kinh nghiệm, không chỉ thời điểm đã xảy ra."
      },
      {
        "id": 2,
        "question": "Điền từ thích hợp vào chỗ trống: \"我去 _______ 北京。\" (Dịch nghĩa: Tôi đã từng đi Bắc Kinh.)",
        "options": [
          "A. 过",
          "B. 是",
          "C. 的"
        ],
        "correct": 0,
        "explanation": "Điền \"过\" vào chỗ trống để tạo thành câu hoàn chỉnh: \"我去过北京。\" (wǒ qù guo běijīng)."
      }
    ]
  },
  {
    "id": "hsk3_grammar_11",
    "title": "11. 是...的: nhấn mạnh thông tin quá khứ",
    "level": "HSK 3",
    "theory": "Công thức: Chủ ngữ + 是 + Thông tin cần nhấn mạnh + Động từ + 的\n\nCách dùng: Dùng để nhấn mạnh thời gian, địa điểm, cách thức, người thực hiện của một hành động đã xảy ra.\n\nLỗi thường gặp: Không dùng 是...的 cho hành động chưa xảy ra.",
    "examples": [
      {
        "zh": "我是昨天来的。",
        "pinyin": "wǒ shì zuótiān lái de",
        "vi": "Tôi đến hôm qua."
      },
      {
        "zh": "他是坐飞机去的。",
        "pinyin": "tā shì zuò fēijī qù de",
        "vi": "Anh ấy đi bằng máy bay."
      }
    ],
    "quiz": [
      {
        "id": 1,
        "question": "Chọn câu tiếng Trung phù hợp nhất cho nghĩa: \"Tôi đến hôm qua.\"",
        "options": [
          "A. 我是昨天来的。",
          "B. 他是坐飞机去的。",
          "C. 我有昨天来。"
        ],
        "correct": 0,
        "explanation": "Câu đúng là \"我是昨天来的。\" (wǒ shì zuótiān lái de). Chú ý: Không dùng 是...的 cho hành động chưa xảy ra."
      },
      {
        "id": 2,
        "question": "Điền từ thích hợp vào chỗ trống: \"我 _______ 昨天来的。\" (Dịch nghĩa: Tôi đến hôm qua.)",
        "options": [
          "A. 是",
          "B. 的",
          "C. 了"
        ],
        "correct": 0,
        "explanation": "Điền \"是\" vào chỗ trống để tạo thành câu hoàn chỉnh: \"我是昨天来的。\" (wǒ shì zuótiān lái de)."
      }
    ]
  },
  {
    "id": "hsk3_grammar_12",
    "title": "12. 把字句 cơ bản",
    "level": "HSK 3",
    "theory": "Công thức: Chủ ngữ + 把 + Tân ngữ xác định + Động từ + Kết quả/Địa điểm\n\nCách dùng: Dùng khi muốn nhấn mạnh cách xử lý một đối tượng xác định.\n\nLỗi thường gặp: Sau động từ trong câu 把 thường cần kết quả/bổ ngữ; không nên nói cụt: `我把书看`.",
    "examples": [
      {
        "zh": "我把书放在桌子上。",
        "pinyin": "wǒ bǎ shū fàng zài zhuōzi shàng",
        "vi": "Tôi đặt sách lên bàn."
      },
      {
        "zh": "请把门关上。",
        "pinyin": "qǐng bǎ mén guān shàng",
        "vi": "Xin hãy đóng cửa lại."
      }
    ],
    "quiz": [
      {
        "id": 1,
        "question": "Chọn câu tiếng Trung phù hợp nhất cho nghĩa: \"Tôi đặt sách lên bàn.\"",
        "options": [
          "A. 我把书放在桌子上。",
          "B. 请把门关上。",
          "C. 我把书放在桌子上。"
        ],
        "correct": 0,
        "explanation": "Câu đúng là \"我把书放在桌子上。\" (wǒ bǎ shū fàng zài zhuōzi shàng). Chú ý: Sau động từ trong câu 把 thường cần kết quả/bổ ngữ; không nên nói cụt: `我把书看`."
      },
      {
        "id": 2,
        "question": "Điền từ thích hợp vào chỗ trống: \"我 _______ 书放在桌子上。\" (Dịch nghĩa: Tôi đặt sách lên bàn.)",
        "options": [
          "A. 把",
          "B. 是",
          "C. 的"
        ],
        "correct": 0,
        "explanation": "Điền \"把\" vào chỗ trống để tạo thành câu hoàn chỉnh: \"我把书放在桌子上。\" (wǒ bǎ shū fàng zài zhuōzi shàng)."
      }
    ]
  },
  {
    "id": "hsk3_grammar_13",
    "title": "13. 被字句 cơ bản",
    "level": "HSK 3",
    "theory": "Công thức: Chủ ngữ chịu tác động + 被 + Tác nhân + Động từ + Thành phần khác\n\nCách dùng: Dùng để nói bị/được tác động bởi ai/cái gì. Thường có sắc thái không mong muốn ở cấp cơ bản.\n\nLỗi thường gặp: 被 thường cần kết quả sau động từ.",
    "examples": [
      {
        "zh": "我的手机被他拿走了。",
        "pinyin": "wǒ de shǒujī bèi tā názǒu le",
        "vi": "Điện thoại của tôi bị anh ấy lấy đi rồi."
      }
    ],
    "quiz": [
      {
        "id": 1,
        "question": "Chọn câu tiếng Trung phù hợp nhất cho nghĩa: \"Điện thoại của tôi bị anh ấy lấy đi rồi.\"",
        "options": [
          "A. 我的手机被他拿走了。",
          "B. 他的手机被他拿走了。",
          "C. 我手机被他拿走了。"
        ],
        "correct": 0,
        "explanation": "Câu đúng là \"我的手机被他拿走了。\" (wǒ de shǒujī bèi tā názǒu le). Chú ý: 被 thường cần kết quả sau động từ."
      },
      {
        "id": 2,
        "question": "Điền từ thích hợp vào chỗ trống: \"我的手机 _______ 他拿走了。\" (Dịch nghĩa: Điện thoại của tôi bị anh ấy lấy đi rồi.)",
        "options": [
          "A. 被",
          "B. 是",
          "C. 的"
        ],
        "correct": 0,
        "explanation": "Điền \"被\" vào chỗ trống để tạo thành câu hoàn chỉnh: \"我的手机被他拿走了。\" (wǒ de shǒujī bèi tā názǒu le)."
      }
    ]
  },
  {
    "id": "hsk3_grammar_14",
    "title": "14. Bổ ngữ khả năng: 得 / 不",
    "level": "HSK 3",
    "theory": "Công thức: Động từ + 得/不 + Bổ ngữ kết quả/xu hướng\n\nCách dùng: Diễn tả có thể hay không thể đạt được kết quả.\n\nLỗi thường gặp: Đừng nhầm với 得 bổ ngữ mức độ như 说得很好.",
    "examples": [
      {
        "zh": "我听得懂。",
        "pinyin": "wǒ tīng de dǒng",
        "vi": "Tôi nghe hiểu được."
      },
      {
        "zh": "我看不清楚。",
        "pinyin": "wǒ kàn bu qīngchu",
        "vi": "Tôi nhìn không rõ."
      }
    ],
    "quiz": [
      {
        "id": 1,
        "question": "Chọn câu tiếng Trung phù hợp nhất cho nghĩa: \"Tôi nghe hiểu được.\"",
        "options": [
          "A. 我听得懂。",
          "B. 我看不清楚。",
          "C. 我听得懂。"
        ],
        "correct": 0,
        "explanation": "Câu đúng là \"我听得懂。\" (wǒ tīng de dǒng). Chú ý: Đừng nhầm với 得 bổ ngữ mức độ như 说得很好."
      },
      {
        "id": 2,
        "question": "Điền từ thích hợp vào chỗ trống: \"我看 _______ 清楚。\" (Dịch nghĩa: Tôi nhìn không rõ.)",
        "options": [
          "A. 不",
          "B. 是",
          "C. 的"
        ],
        "correct": 0,
        "explanation": "Điền \"不\" vào chỗ trống để tạo thành câu hoàn chỉnh: \"我看不清楚。\" (wǒ kàn bu qīngchu)."
      }
    ]
  },
  {
    "id": "hsk3_grammar_15",
    "title": "15. Bổ ngữ thời lượng",
    "level": "HSK 3",
    "theory": "Công thức: Động từ + Thời lượng\n\nCách dùng: Nói một hành động kéo dài bao lâu.\n\nLỗi thường gặp: Nếu động từ có tân ngữ, thường cần lặp động từ.",
    "examples": [
      {
        "zh": "我学习了两个小时。",
        "pinyin": "wǒ xuéxí le liǎng ge xiǎoshí",
        "vi": "Tôi đã học hai tiếng."
      },
      {
        "zh": "我睡觉睡了八个小时。",
        "pinyin": "wǒ shuìjiào shuì le bā ge xiǎoshí",
        "vi": "Tôi ngủ tám tiếng."
      }
    ],
    "quiz": [
      {
        "id": 1,
        "question": "Chọn câu tiếng Trung phù hợp nhất cho nghĩa: \"Tôi đã học hai tiếng.\"",
        "options": [
          "A. 我学习了两个小时。",
          "B. 我睡觉睡了八个小时。",
          "C. 我学习了两个小时。"
        ],
        "correct": 0,
        "explanation": "Câu đúng là \"我学习了两个小时。\" (wǒ xuéxí le liǎng ge xiǎoshí). Chú ý: Nếu động từ có tân ngữ, thường cần lặp động từ."
      }
    ]
  },
  {
    "id": "hsk3_grammar_16",
    "title": "16. Bổ ngữ số lần",
    "level": "HSK 3",
    "theory": "Công thức: Động từ + Số + 次/遍\n\nCách dùng: 次 là số lần chung. 遍 là làm trọn vẹn từ đầu đến cuối.\n\nLỗi thường gặp: 次 không nhấn mạnh hoàn tất toàn bộ quá trình như 遍.",
    "examples": [
      {
        "zh": "我去过北京三次。",
        "pinyin": "wǒ qù guo běijīng sān cì",
        "vi": "Tôi đã từng đi Bắc Kinh ba lần."
      },
      {
        "zh": "请你再说一遍。",
        "pinyin": "qǐng nǐ zài shuō yí biàn",
        "vi": "Xin bạn nói lại một lượt."
      }
    ],
    "quiz": [
      {
        "id": 1,
        "question": "Chọn câu tiếng Trung phù hợp nhất cho nghĩa: \"Tôi đã từng đi Bắc Kinh ba lần.\"",
        "options": [
          "A. 我去过北京三次。",
          "B. 请你再说一遍。",
          "C. 我去过北京三次。"
        ],
        "correct": 0,
        "explanation": "Câu đúng là \"我去过北京三次。\" (wǒ qù guo běijīng sān cì). Chú ý: 次 không nhấn mạnh hoàn tất toàn bộ quá trình như 遍."
      }
    ]
  },
  {
    "id": "hsk3_grammar_17",
    "title": "17. 先...然后...: trước tiên...sau đó...",
    "level": "HSK 3",
    "theory": "Công thức: 先 + Hành động 1，然后 + Hành động 2\n\nCách dùng: Dùng để mô tả thứ tự hành động.\n\nLỗi thường gặp: 先 đứng trước hành động xảy ra trước.",
    "examples": [
      {
        "zh": "我们先吃饭，然后去看电影。",
        "pinyin": "wǒmen xiān chī fàn, ránhòu qù kàn diànyǐng",
        "vi": "Chúng ta ăn cơm trước, sau đó đi xem phim."
      }
    ],
    "quiz": [
      {
        "id": 1,
        "question": "Chọn câu tiếng Trung phù hợp nhất cho nghĩa: \"Chúng ta ăn cơm trước, sau đó đi xem phim.\"",
        "options": [
          "A. 我们先吃饭，然后去看电影。",
          "B. 他们先吃饭，然后去看电影。",
          "C. 我们先吃饭，然后去看电影。"
        ],
        "correct": 0,
        "explanation": "Câu đúng là \"我们先吃饭，然后去看电影。\" (wǒmen xiān chī fàn, ránhòu qù kàn diànyǐng). Chú ý: 先 đứng trước hành động xảy ra trước."
      }
    ]
  },
  {
    "id": "hsk3_grammar_18",
    "title": "18. 为了: để / nhằm",
    "level": "HSK 3",
    "theory": "Công thức: 为了 + Mục đích, Chủ ngữ + Hành động\n\nCách dùng: Dùng để nêu mục đích.\n\nLỗi thường gặp: 为了 thường đứng đầu câu hoặc trước mục đích.",
    "examples": [
      {
        "zh": "为了学好汉语，我每天练习。",
        "pinyin": "wèile xuéhǎo hànyǔ, wǒ měitiān liànxí",
        "vi": "Để học tốt tiếng Trung, tôi luyện tập mỗi ngày."
      }
    ],
    "quiz": [
      {
        "id": 1,
        "question": "Chọn câu tiếng Trung phù hợp nhất cho nghĩa: \"Để học tốt tiếng Trung, tôi luyện tập mỗi ngày.\"",
        "options": [
          "A. 为了学好汉语，我每天练习。",
          "B. 为了学好汉语，他每天练习。",
          "C. 为了学好汉语，我每天练习。"
        ],
        "correct": 0,
        "explanation": "Câu đúng là \"为了学好汉语，我每天练习。\" (wèile xuéhǎo hànyǔ, wǒ měitiān liànxí). Chú ý: 为了 thường đứng đầu câu hoặc trước mục đích."
      },
      {
        "id": 2,
        "question": "Điền từ thích hợp vào chỗ trống: \"为 _______ 学好汉语，我每天练习。\" (Dịch nghĩa: Để học tốt tiếng Trung, tôi luyện tập mỗi ngày.)",
        "options": [
          "A. 了",
          "B. 是",
          "C. 的"
        ],
        "correct": 0,
        "explanation": "Điền \"了\" vào chỗ trống để tạo thành câu hoàn chỉnh: \"为了学好汉语，我每天练习。\" (wèile xuéhǎo hànyǔ, wǒ měitiān liànxí)."
      }
    ]
  },
  {
    "id": "hsk3_grammar_19",
    "title": "19. 对...感兴趣",
    "level": "HSK 3",
    "theory": "Công thức: Chủ ngữ + 对 + Đối tượng + 感兴趣\n\nCách dùng: Dùng để nói hứng thú với điều gì.\n\nLỗi thường gặp: Không nói `我感兴趣中国文化`; cần 对.",
    "examples": [
      {
        "zh": "我对中国文化很感兴趣。",
        "pinyin": "wǒ duì zhōngguó wénhuà hěn gǎn xìngqù",
        "vi": "Tôi rất hứng thú với văn hóa Trung Quốc."
      }
    ],
    "quiz": [
      {
        "id": 1,
        "question": "Chọn câu tiếng Trung phù hợp nhất cho nghĩa: \"Tôi rất hứng thú với văn hóa Trung Quốc.\"",
        "options": [
          "A. 我对中国文化很感兴趣。",
          "B. 他对中国文化很感兴趣。",
          "C. 我对中国文化很感兴趣。"
        ],
        "correct": 0,
        "explanation": "Câu đúng là \"我对中国文化很感兴趣。\" (wǒ duì zhōngguó wénhuà hěn gǎn xìngqù). Chú ý: Không nói `我感兴趣中国文化`; cần 对."
      }
    ]
  },
  {
    "id": "hsk3_grammar_20",
    "title": "20. 跟...一样 / 不一样",
    "level": "HSK 3",
    "theory": "Công thức: A + 跟 + B + 一样/不一样\n\nCách dùng: Dùng để nói giống hoặc khác.\n\nLỗi thường gặp: 跟 trong cấu trúc này là “với/so với”, không phải “theo”.",
    "examples": [
      {
        "zh": "我的想法跟你一样。",
        "pinyin": "wǒ de xiǎngfǎ gēn nǐ yíyàng",
        "vi": "Suy nghĩ của tôi giống bạn."
      },
      {
        "zh": "这个地方跟以前不一样。",
        "pinyin": "zhège dìfang gēn yǐqián bù yíyàng",
        "vi": "Nơi này khác trước đây."
      }
    ],
    "quiz": [
      {
        "id": 1,
        "question": "Chọn câu tiếng Trung phù hợp nhất cho nghĩa: \"Suy nghĩ của tôi giống bạn.\"",
        "options": [
          "A. 我的想法跟你一样。",
          "B. 这个地方跟以前不一样。",
          "C. 我想法跟你一样。"
        ],
        "correct": 0,
        "explanation": "Câu đúng là \"我的想法跟你一样。\" (wǒ de xiǎngfǎ gēn nǐ yíyàng). Chú ý: 跟 trong cấu trúc này là “với/so với”, không phải “theo”."
      },
      {
        "id": 2,
        "question": "Điền từ thích hợp vào chỗ trống: \"这个地方跟以前 _______ 一样。\" (Dịch nghĩa: Nơi này khác trước đây.)",
        "options": [
          "A. 不",
          "B. 是",
          "C. 的"
        ],
        "correct": 0,
        "explanation": "Điền \"不\" vào chỗ trống để tạo thành câu hoàn chỉnh: \"这个地方跟以前不一样。\" (zhège dìfang gēn yǐqián bù yíyàng)."
      }
    ]
  },
  {
    "id": "hsk4_grammar_1",
    "title": "1. 不但...而且...: không những...mà còn...",
    "level": "HSK 4",
    "theory": "Công thức: 不但 + Mệnh đề 1，而且 + Mệnh đề 2\n\nCách dùng: Dùng để tăng tiến ý nghĩa.\n\nLỗi thường gặp: Hai vế nên cùng chủ đề hoặc cùng chủ ngữ rõ ràng.",
    "examples": [
      {
        "zh": "他不但会说汉语，而且说得很流利。",
        "pinyin": "tā búdàn huì shuō hànyǔ, érqiě shuō de hěn liúlì",
        "vi": "Anh ấy không những biết nói tiếng Trung mà còn nói rất lưu loát."
      }
    ],
    "quiz": [
      {
        "id": 1,
        "question": "Chọn câu tiếng Trung phù hợp nhất cho nghĩa: \"Anh ấy không những biết nói tiếng Trung mà còn nói rất lưu loát.\"",
        "options": [
          "A. 他不但会说汉语，而且说得很流利。",
          "B. 他不但会说汉语，而且说得很流利。",
          "C. 他不但会说汉语，而且说得很流利。"
        ],
        "correct": 0,
        "explanation": "Câu đúng là \"他不但会说汉语，而且说得很流利。\" (tā búdàn huì shuō hànyǔ, érqiě shuō de hěn liúlì). Chú ý: Hai vế nên cùng chủ đề hoặc cùng chủ ngữ rõ ràng."
      },
      {
        "id": 2,
        "question": "Điền từ thích hợp vào chỗ trống: \"他 _______ 但会说汉语，而且说得很流利。\" (Dịch nghĩa: Anh ấy không những biết nói tiếng Trung mà còn nói rất lưu loát.)",
        "options": [
          "A. 不",
          "B. 是",
          "C. 的"
        ],
        "correct": 0,
        "explanation": "Điền \"不\" vào chỗ trống để tạo thành câu hoàn chỉnh: \"他不但会说汉语，而且说得很流利。\" (tā búdàn huì shuō hànyǔ, érqiě shuō de hěn liúlì)."
      }
    ]
  },
  {
    "id": "hsk4_grammar_2",
    "title": "2. 既然...就...: đã...thì...",
    "level": "HSK 4",
    "theory": "Công thức: 既然 + Sự thật/Điều đã biết，就 + Kết luận/Hành động\n\nCách dùng: Dùng khi người nói dựa vào một sự thật đã xác nhận để đưa ra kết luận.\n\nLỗi thường gặp: 既然 khác 如果: 既然 dựa trên điều đã biết hoặc được xem là thật.",
    "examples": [
      {
        "zh": "既然你已经决定了，我就支持你。",
        "pinyin": "jìrán nǐ yǐjīng juédìng le, wǒ jiù zhīchí nǐ",
        "vi": "Nếu bạn đã quyết định rồi, tôi sẽ ủng hộ bạn."
      }
    ],
    "quiz": [
      {
        "id": 1,
        "question": "Chọn câu tiếng Trung phù hợp nhất cho nghĩa: \"Nếu bạn đã quyết định rồi, tôi sẽ ủng hộ bạn.\"",
        "options": [
          "A. 既然你已经决定了，我就支持你。",
          "B. 既然我已经决定了，他就支持我。",
          "C. 既然你已经决定了，我就支持你。"
        ],
        "correct": 0,
        "explanation": "Câu đúng là \"既然你已经决定了，我就支持你。\" (jìrán nǐ yǐjīng juédìng le, wǒ jiù zhīchí nǐ). Chú ý: 既然 khác 如果: 既然 dựa trên điều đã biết hoặc được xem là thật."
      },
      {
        "id": 2,
        "question": "Điền từ thích hợp vào chỗ trống: \"既然你已经决定了，我 _______ 支持你。\" (Dịch nghĩa: Nếu bạn đã quyết định rồi, tôi sẽ ủng hộ bạn.)",
        "options": [
          "A. 就",
          "B. 是",
          "C. 的"
        ],
        "correct": 0,
        "explanation": "Điền \"就\" vào chỗ trống để tạo thành câu hoàn chỉnh: \"既然你已经决定了，我就支持你。\" (jìrán nǐ yǐjīng juédìng le, wǒ jiù zhīchí nǐ)."
      }
    ]
  },
  {
    "id": "hsk4_grammar_3",
    "title": "3. 即使...也...: cho dù...cũng...",
    "level": "HSK 4",
    "theory": "Công thức: 即使 + Điều kiện giả định, 也 + Kết quả không đổi\n\nCách dùng: Dùng để nhấn mạnh kết quả không thay đổi dù điều kiện khó khăn.\n\nLỗi thường gặp: 也 là thành phần quan trọng ở mệnh đề sau.",
    "examples": [
      {
        "zh": "即使很忙，我也会学习中文。",
        "pinyin": "jíshǐ hěn máng, wǒ yě huì xuéxí zhōngwén",
        "vi": "Cho dù rất bận, tôi vẫn sẽ học tiếng Trung."
      }
    ],
    "quiz": [
      {
        "id": 1,
        "question": "Chọn câu tiếng Trung phù hợp nhất cho nghĩa: \"Cho dù rất bận, tôi vẫn sẽ học tiếng Trung.\"",
        "options": [
          "A. 即使很忙，我也会学习中文。",
          "B. 即使很忙，他也会学习中文。",
          "C. 即使很忙，我也会学习中文。"
        ],
        "correct": 0,
        "explanation": "Câu đúng là \"即使很忙，我也会学习中文。\" (jíshǐ hěn máng, wǒ yě huì xuéxí zhōngwén). Chú ý: 也 là thành phần quan trọng ở mệnh đề sau."
      },
      {
        "id": 2,
        "question": "Điền từ thích hợp vào chỗ trống: \"即使很忙，我 _______ 会学习中文。\" (Dịch nghĩa: Cho dù rất bận, tôi vẫn sẽ học tiếng Trung.)",
        "options": [
          "A. 也",
          "B. 是",
          "C. 的"
        ],
        "correct": 0,
        "explanation": "Điền \"也\" vào chỗ trống để tạo thành câu hoàn chỉnh: \"即使很忙，我也会学习中文。\" (jíshǐ hěn máng, wǒ yě huì xuéxí zhōngwén)."
      }
    ]
  },
  {
    "id": "hsk4_grammar_4",
    "title": "4. 只要...就...: chỉ cần...thì...",
    "level": "HSK 4",
    "theory": "Công thức: 只要 + Điều kiện đủ，就 + Kết quả\n\nCách dùng: Dùng để nói chỉ cần một điều kiện là đủ để có kết quả.\n\nLỗi thường gặp: Phân biệt với 只有...才...: “chỉ có...mới...”.",
    "examples": [
      {
        "zh": "只要你努力，就一定会进步。",
        "pinyin": "zhǐyào nǐ nǔlì, jiù yídìng huì jìnbù",
        "vi": "Chỉ cần bạn cố gắng, nhất định sẽ tiến bộ."
      }
    ],
    "quiz": [
      {
        "id": 1,
        "question": "Chọn câu tiếng Trung phù hợp nhất cho nghĩa: \"Chỉ cần bạn cố gắng, nhất định sẽ tiến bộ.\"",
        "options": [
          "A. 只要你努力，就一定会进步。",
          "B. 只要我努力，就一定会进步。",
          "C. 只要你努力，就一定会进步。"
        ],
        "correct": 0,
        "explanation": "Câu đúng là \"只要你努力，就一定会进步。\" (zhǐyào nǐ nǔlì, jiù yídìng huì jìnbù). Chú ý: Phân biệt với 只有...才...: “chỉ có...mới...”."
      },
      {
        "id": 2,
        "question": "Điền từ thích hợp vào chỗ trống: \"只要你努力， _______ 一定会进步。\" (Dịch nghĩa: Chỉ cần bạn cố gắng, nhất định sẽ tiến bộ.)",
        "options": [
          "A. 就",
          "B. 是",
          "C. 的"
        ],
        "correct": 0,
        "explanation": "Điền \"就\" vào chỗ trống để tạo thành câu hoàn chỉnh: \"只要你努力，就一定会进步。\" (zhǐyào nǐ nǔlì, jiù yídìng huì jìnbù)."
      }
    ]
  },
  {
    "id": "hsk4_grammar_5",
    "title": "5. 只有...才...: chỉ có...mới...",
    "level": "HSK 4",
    "theory": "Công thức: 只有 + Điều kiện cần, 才 + Kết quả\n\nCách dùng: Nhấn mạnh điều kiện bắt buộc.\n\nLỗi thường gặp: 只要 là điều kiện đủ; 只有 là điều kiện cần.",
    "examples": [
      {
        "zh": "只有多练习，才能说得流利。",
        "pinyin": "zhǐyǒu duō liànxí, cái néng shuō de liúlì",
        "vi": "Chỉ có luyện tập nhiều mới có thể nói lưu loát."
      }
    ],
    "quiz": [
      {
        "id": 1,
        "question": "Chọn câu tiếng Trung phù hợp nhất cho nghĩa: \"Chỉ có luyện tập nhiều mới có thể nói lưu loát.\"",
        "options": [
          "A. 只有多练习，才能说得流利。",
          "B. 只有多练习，才能说得流利。",
          "C. 只有多练习，才能说得流利。"
        ],
        "correct": 0,
        "explanation": "Câu đúng là \"只有多练习，才能说得流利。\" (zhǐyǒu duō liànxí, cái néng shuō de liúlì). Chú ý: 只要 là điều kiện đủ; 只有 là điều kiện cần."
      }
    ]
  },
  {
    "id": "hsk4_grammar_6",
    "title": "6. 无论...都...: bất kể...đều...",
    "level": "HSK 4",
    "theory": "Công thức: 无论 + Điều kiện nào, 都 + Kết quả\n\nCách dùng: Dùng để nói kết quả không đổi trong mọi trường hợp.\n\nLỗi thường gặp: 都 thường cần xuất hiện ở mệnh đề sau.",
    "examples": [
      {
        "zh": "无论你去哪儿，我都支持你。",
        "pinyin": "wúlùn nǐ qù nǎr, wǒ dōu zhīchí nǐ",
        "vi": "Bất kể bạn đi đâu, tôi đều ủng hộ bạn."
      }
    ],
    "quiz": [
      {
        "id": 1,
        "question": "Chọn câu tiếng Trung phù hợp nhất cho nghĩa: \"Bất kể bạn đi đâu, tôi đều ủng hộ bạn.\"",
        "options": [
          "A. 无论你去哪儿，我都支持你。",
          "B. 无论我去哪儿，他都支持我。",
          "C. 无论你去哪儿，我都支持你。"
        ],
        "correct": 0,
        "explanation": "Câu đúng là \"无论你去哪儿，我都支持你。\" (wúlùn nǐ qù nǎr, wǒ dōu zhīchí nǐ). Chú ý: 都 thường cần xuất hiện ở mệnh đề sau."
      },
      {
        "id": 2,
        "question": "Điền từ thích hợp vào chỗ trống: \"无论你去哪儿，我 _______ 支持你。\" (Dịch nghĩa: Bất kể bạn đi đâu, tôi đều ủng hộ bạn.)",
        "options": [
          "A. 都",
          "B. 是",
          "C. 的"
        ],
        "correct": 0,
        "explanation": "Điền \"都\" vào chỗ trống để tạo thành câu hoàn chỉnh: \"无论你去哪儿，我都支持你。\" (wúlùn nǐ qù nǎr, wǒ dōu zhīchí nǐ)."
      }
    ]
  },
  {
    "id": "hsk4_grammar_7",
    "title": "7. 不管...都/也...: dù...đều/cũng...",
    "level": "HSK 4",
    "theory": "Công thức: 不管 + Điều kiện, 都/也 + Kết quả\n\nCách dùng: Gần giống 无论, khẩu ngữ hơn.\n\nLỗi thường gặp: Không bỏ 都/也 nếu muốn câu tự nhiên.",
    "examples": [
      {
        "zh": "不管天气怎么样，我们都要出发。",
        "pinyin": "bùguǎn tiānqì zěnmeyàng, wǒmen dōu yào chūfā",
        "vi": "Dù thời tiết thế nào, chúng ta đều phải xuất phát."
      }
    ],
    "quiz": [
      {
        "id": 1,
        "question": "Chọn câu tiếng Trung phù hợp nhất cho nghĩa: \"Dù thời tiết thế nào, chúng ta đều phải xuất phát.\"",
        "options": [
          "A. 不管天气怎么样，我们都要出发。",
          "B. 不管天气怎么样，他们都要出发。",
          "C. 不管天气怎么样，我们都要出发。"
        ],
        "correct": 0,
        "explanation": "Câu đúng là \"不管天气怎么样，我们都要出发。\" (bùguǎn tiānqì zěnmeyàng, wǒmen dōu yào chūfā). Chú ý: Không bỏ 都/也 nếu muốn câu tự nhiên."
      },
      {
        "id": 2,
        "question": "Điền từ thích hợp vào chỗ trống: \" _______ 管天气怎么样，我们都要出发。\" (Dịch nghĩa: Dù thời tiết thế nào, chúng ta đều phải xuất phát.)",
        "options": [
          "A. 不",
          "B. 是",
          "C. 的"
        ],
        "correct": 0,
        "explanation": "Điền \"不\" vào chỗ trống để tạo thành câu hoàn chỉnh: \"不管天气怎么样，我们都要出发。\" (bùguǎn tiānqì zěnmeyàng, wǒmen dōu yào chūfā)."
      }
    ]
  },
  {
    "id": "hsk4_grammar_8",
    "title": "8. 由于...因此...: do...vì vậy...",
    "level": "HSK 4",
    "theory": "Công thức: 由于 + Nguyên nhân，因此 + Kết quả\n\nCách dùng: Trang trọng hơn 因为...所以..., thường dùng trong văn viết.\n\nLỗi thường gặp: Không nên dùng quá nhiều trong hội thoại đời thường.",
    "examples": [
      {
        "zh": "由于天气不好，因此比赛取消了。",
        "pinyin": "yóuyú tiānqì bù hǎo, yīncǐ bǐsài qǔxiāo le",
        "vi": "Do thời tiết không tốt, vì vậy trận đấu đã bị hủy."
      }
    ],
    "quiz": [
      {
        "id": 1,
        "question": "Chọn câu tiếng Trung phù hợp nhất cho nghĩa: \"Do thời tiết không tốt, vì vậy trận đấu đã bị hủy.\"",
        "options": [
          "A. 由于天气不好，因此比赛取消了。",
          "B. 由于天气不好，因此比赛取消了。",
          "C. 由于天气不好，因此比赛取消了。"
        ],
        "correct": 0,
        "explanation": "Câu đúng là \"由于天气不好，因此比赛取消了。\" (yóuyú tiānqì bù hǎo, yīncǐ bǐsài qǔxiāo le). Chú ý: Không nên dùng quá nhiều trong hội thoại đời thường."
      }
    ]
  },
  {
    "id": "hsk4_grammar_9",
    "title": "9. 首先...其次...最后...",
    "level": "HSK 4",
    "theory": "Công thức: 首先 + Ý 1，其次 + Ý 2，最后 + Ý 3\n\nCách dùng: Dùng để trình bày theo thứ tự trong bài nói/bài viết.\n\nLỗi thường gặp: Dùng tốt trong HSK4 trở lên để tăng điểm bài viết/nói.",
    "examples": [
      {
        "zh": "首先，我们要了解问题；其次，我们要找到方法；最后，我们要行动。",
        "pinyin": "shǒuxiān, wǒmen yào liǎojiě wèntí; qícì, wǒmen yào zhǎodào fāngfǎ; zuìhòu, wǒmen yào xíngdòng",
        "vi": "Trước tiên, chúng ta cần hiểu vấn đề; tiếp theo, tìm phương pháp; cuối cùng, hành động."
      }
    ],
    "quiz": [
      {
        "id": 1,
        "question": "Chọn câu tiếng Trung phù hợp nhất cho nghĩa: \"Trước tiên, chúng ta cần hiểu vấn đề; tiếp theo, tìm phương pháp; cuối cùng, hành động.\"",
        "options": [
          "A. 首先，我们要了解问题；其次，我们要找到方法；最后，我们要行动。",
          "B. 首先，他们要了解问题；其次，他们要找到方法；最后，他们要行动。",
          "C. 首先，我们要了解问题；其次，我们要找到方法；最后，我们要行动。"
        ],
        "correct": 0,
        "explanation": "Câu đúng là \"首先，我们要了解问题；其次，我们要找到方法；最后，我们要行动。\" (shǒuxiān, wǒmen yào liǎojiě wèntí; qícì, wǒmen yào zhǎodào fāngfǎ; zuìhòu, wǒmen yào xíngdòng). Chú ý: Dùng tốt trong HSK4 trở lên để tăng điểm bài viết/nói."
      }
    ]
  },
  {
    "id": "hsk4_grammar_10",
    "title": "10. 通过...: thông qua...",
    "level": "HSK 4",
    "theory": "Công thức: 通过 + Cách thức/Phương tiện, Chủ ngữ + Kết quả\n\nCách dùng: Dùng để nói phương pháp đạt kết quả.\n\nLỗi thường gặp: 通过 thường dùng trang trọng hơn 用.",
    "examples": [
      {
        "zh": "通过每天练习，我的发音进步了。",
        "pinyin": "tōngguò měitiān liànxí, wǒ de fāyīn jìnbù le",
        "vi": "Thông qua luyện tập mỗi ngày, phát âm của tôi đã tiến bộ."
      }
    ],
    "quiz": [
      {
        "id": 1,
        "question": "Chọn câu tiếng Trung phù hợp nhất cho nghĩa: \"Thông qua luyện tập mỗi ngày, phát âm của tôi đã tiến bộ.\"",
        "options": [
          "A. 通过每天练习，我的发音进步了。",
          "B. 通过每天练习，他的发音进步了。",
          "C. 通过每天练习，我发音进步了。"
        ],
        "correct": 0,
        "explanation": "Câu đúng là \"通过每天练习，我的发音进步了。\" (tōngguò měitiān liànxí, wǒ de fāyīn jìnbù le). Chú ý: 通过 thường dùng trang trọng hơn 用."
      },
      {
        "id": 2,
        "question": "Điền từ thích hợp vào chỗ trống: \"通 _______ 每天练习，我的发音进步了。\" (Dịch nghĩa: Thông qua luyện tập mỗi ngày, phát âm của tôi đã tiến bộ.)",
        "options": [
          "A. 过",
          "B. 是",
          "C. 的"
        ],
        "correct": 0,
        "explanation": "Điền \"过\" vào chỗ trống để tạo thành câu hoàn chỉnh: \"通过每天练习，我的发音进步了。\" (tōngguò měitiān liànxí, wǒ de fāyīn jìnbù le)."
      }
    ]
  },
  {
    "id": "hsk4_grammar_11",
    "title": "11. 对于...来说: đối với...mà nói",
    "level": "HSK 4",
    "theory": "Công thức: 对于 + Đối tượng + 来说, Nhận xét\n\nCách dùng: Dùng để giới hạn góc nhìn đánh giá.\n\nLỗi thường gặp: Không lạm dụng trong câu quá đơn giản.",
    "examples": [
      {
        "zh": "对于初学者来说，发音很重要。",
        "pinyin": "duìyú chūxuézhě lái shuō, fāyīn hěn zhòngyào",
        "vi": "Đối với người mới học, phát âm rất quan trọng."
      }
    ],
    "quiz": [
      {
        "id": 1,
        "question": "Chọn câu tiếng Trung phù hợp nhất cho nghĩa: \"Đối với người mới học, phát âm rất quan trọng.\"",
        "options": [
          "A. 对于初学者来说，发音很重要。",
          "B. 对于初学者来说，发音很重要。",
          "C. 对于初学者来说，发音很重要。"
        ],
        "correct": 0,
        "explanation": "Câu đúng là \"对于初学者来说，发音很重要。\" (duìyú chūxuézhě lái shuō, fāyīn hěn zhòngyào). Chú ý: Không lạm dụng trong câu quá đơn giản."
      }
    ]
  },
  {
    "id": "hsk4_grammar_12",
    "title": "12. 关于: về / liên quan đến",
    "level": "HSK 4",
    "theory": "Công thức: 关于 + Chủ đề, Nhận xét/Nội dung\n\nCách dùng: Dùng để mở chủ đề.\n\nLỗi thường gặp: 关于 thiên về chủ đề; 对于 thiên về đối tượng được đánh giá.",
    "examples": [
      {
        "zh": "关于这个问题，我有不同的看法。",
        "pinyin": "guānyú zhège wèntí, wǒ yǒu bùtóng de kànfǎ",
        "vi": "Về vấn đề này, tôi có quan điểm khác."
      }
    ],
    "quiz": [
      {
        "id": 1,
        "question": "Chọn câu tiếng Trung phù hợp nhất cho nghĩa: \"Về vấn đề này, tôi có quan điểm khác.\"",
        "options": [
          "A. 关于这个问题，我有不同的看法。",
          "B. 关于这个问题，他有不同的看法。",
          "C. 关于这个问题，我有不同看法。"
        ],
        "correct": 0,
        "explanation": "Câu đúng là \"关于这个问题，我有不同的看法。\" (guānyú zhège wèntí, wǒ yǒu bùtóng de kànfǎ). Chú ý: 关于 thiên về chủ đề; 对于 thiên về đối tượng được đánh giá."
      }
    ]
  },
  {
    "id": "hsk4_grammar_13",
    "title": "13. 连...都/也...: ngay cả...cũng...",
    "level": "HSK 4",
    "theory": "Công thức: 连 + Đối tượng cực đoan + 都/也 + Kết quả\n\nCách dùng: Dùng để nhấn mạnh mức độ bất ngờ.\n\nLỗi thường gặp: 连 cần đi với 都/也.",
    "examples": [
      {
        "zh": "这个字连老师都不认识。",
        "pinyin": "zhège zì lián lǎoshī dōu bú rènshi",
        "vi": "Chữ này ngay cả giáo viên cũng không biết."
      }
    ],
    "quiz": [
      {
        "id": 1,
        "question": "Chọn câu tiếng Trung phù hợp nhất cho nghĩa: \"Chữ này ngay cả giáo viên cũng không biết.\"",
        "options": [
          "A. 这个字连老师都不认识。",
          "B. 这个字连老师都不认识。",
          "C. 这个字连老师都不认识。"
        ],
        "correct": 0,
        "explanation": "Câu đúng là \"这个字连老师都不认识。\" (zhège zì lián lǎoshī dōu bú rènshi). Chú ý: 连 cần đi với 都/也."
      },
      {
        "id": 2,
        "question": "Điền từ thích hợp vào chỗ trống: \"这个字 _______ 老师都不认识。\" (Dịch nghĩa: Chữ này ngay cả giáo viên cũng không biết.)",
        "options": [
          "A. 连",
          "B. 是",
          "C. 的"
        ],
        "correct": 0,
        "explanation": "Điền \"连\" vào chỗ trống để tạo thành câu hoàn chỉnh: \"这个字连老师都不认识。\" (zhège zì lián lǎoshī dōu bú rènshi)."
      }
    ]
  },
  {
    "id": "hsk4_grammar_14",
    "title": "14. 把字句 nâng cao",
    "level": "HSK 4",
    "theory": "Công thức: Chủ ngữ + 把 + Tân ngữ + Động từ + Thành phần kết quả/xu hướng/mức độ\n\nCách dùng: Dùng khi đối tượng bị xử lý và có thay đổi rõ ràng.\n\nLỗi thường gặp: Tân ngữ sau 把 phải xác định.",
    "examples": [
      {
        "zh": "请把这篇文章翻译成中文。",
        "pinyin": "qǐng bǎ zhè piān wénzhāng fānyì chéng zhōngwén",
        "vi": "Hãy dịch bài viết này sang tiếng Trung."
      },
      {
        "zh": "他把房间打扫得很干净。",
        "pinyin": "tā bǎ fángjiān dǎsǎo de hěn gānjìng",
        "vi": "Anh ấy dọn phòng rất sạch."
      }
    ],
    "quiz": [
      {
        "id": 1,
        "question": "Chọn câu tiếng Trung phù hợp nhất cho nghĩa: \"Hãy dịch bài viết này sang tiếng Trung.\"",
        "options": [
          "A. 请把这篇文章翻译成中文。",
          "B. 他把房间打扫得很干净。",
          "C. 请把这篇文章翻译成中文。"
        ],
        "correct": 0,
        "explanation": "Câu đúng là \"请把这篇文章翻译成中文。\" (qǐng bǎ zhè piān wénzhāng fānyì chéng zhōngwén). Chú ý: Tân ngữ sau 把 phải xác định."
      },
      {
        "id": 2,
        "question": "Điền từ thích hợp vào chỗ trống: \"请 _______ 这篇文章翻译成中文。\" (Dịch nghĩa: Hãy dịch bài viết này sang tiếng Trung.)",
        "options": [
          "A. 把",
          "B. 是",
          "C. 的"
        ],
        "correct": 0,
        "explanation": "Điền \"把\" vào chỗ trống để tạo thành câu hoàn chỉnh: \"请把这篇文章翻译成中文。\" (qǐng bǎ zhè piān wénzhāng fānyì chéng zhōngwén)."
      }
    ]
  },
  {
    "id": "hsk4_grammar_15",
    "title": "15. 被字句 nâng cao",
    "level": "HSK 4",
    "theory": "Công thức: Chủ ngữ chịu tác động + 被/让/叫 + Tác nhân + Động từ + Kết quả\n\nCách dùng: Dùng cho câu bị động, cả tiêu cực và trung tính.\n\nLỗi thường gặp: 让/叫 trong bị động thường khẩu ngữ hơn 被.",
    "examples": [
      {
        "zh": "我的自行车被人偷走了。",
        "pinyin": "wǒ de zìxíngchē bèi rén tōuzǒu le",
        "vi": "Xe đạp của tôi bị người ta trộm mất rồi."
      },
      {
        "zh": "这个故事被拍成了电影。",
        "pinyin": "zhège gùshi bèi pāi chéng le diànyǐng",
        "vi": "Câu chuyện này được dựng thành phim."
      }
    ],
    "quiz": [
      {
        "id": 1,
        "question": "Chọn câu tiếng Trung phù hợp nhất cho nghĩa: \"Xe đạp của tôi bị người ta trộm mất rồi.\"",
        "options": [
          "A. 我的自行车被人偷走了。",
          "B. 这个故事被拍成了电影。",
          "C. 我自行车被人偷走了。"
        ],
        "correct": 0,
        "explanation": "Câu đúng là \"我的自行车被人偷走了。\" (wǒ de zìxíngchē bèi rén tōuzǒu le). Chú ý: 让/叫 trong bị động thường khẩu ngữ hơn 被."
      },
      {
        "id": 2,
        "question": "Điền từ thích hợp vào chỗ trống: \"我的自行车 _______ 人偷走了。\" (Dịch nghĩa: Xe đạp của tôi bị người ta trộm mất rồi.)",
        "options": [
          "A. 被",
          "B. 是",
          "C. 的"
        ],
        "correct": 0,
        "explanation": "Điền \"被\" vào chỗ trống để tạo thành câu hoàn chỉnh: \"我的自行车被人偷走了。\" (wǒ de zìxíngchē bèi rén tōuzǒu le)."
      }
    ]
  },
  {
    "id": "hsk4_grammar_16",
    "title": "16. 差点儿...: suýt nữa...",
    "level": "HSK 4",
    "theory": "Công thức: 差点儿 + Động từ\n\nCách dùng: Diễn tả việc suýt xảy ra, thường là điều không mong muốn.\n\nLỗi thường gặp: Với sự việc tốt, 差点儿 có thể gây mơ hồ; cần học theo ngữ cảnh.",
    "examples": [
      {
        "zh": "我差点儿迟到了。",
        "pinyin": "wǒ chàdiǎnr chídào le",
        "vi": "Tôi suýt nữa đến muộn."
      }
    ],
    "quiz": [
      {
        "id": 1,
        "question": "Chọn câu tiếng Trung phù hợp nhất cho nghĩa: \"Tôi suýt nữa đến muộn.\"",
        "options": [
          "A. 我差点儿迟到了。",
          "B. 他差点儿迟到了。",
          "C. 我差点儿迟到了。"
        ],
        "correct": 0,
        "explanation": "Câu đúng là \"我差点儿迟到了。\" (wǒ chàdiǎnr chídào le). Chú ý: Với sự việc tốt, 差点儿 có thể gây mơ hồ; cần học theo ngữ cảnh."
      }
    ]
  },
  {
    "id": "hsk4_grammar_17",
    "title": "17. 难道...吗？: chẳng lẽ...sao?",
    "level": "HSK 4",
    "theory": "Công thức: 难道 + Câu + 吗？\n\nCách dùng: Câu hỏi tu từ, người nói thường đã có thái độ rõ ràng.\n\nLỗi thường gặp: Không dùng trong tình huống cần hỏi trung lập.",
    "examples": [
      {
        "zh": "难道你不知道吗？",
        "pinyin": "nándào nǐ bù zhīdào ma",
        "vi": "Chẳng lẽ bạn không biết sao?"
      }
    ],
    "quiz": [
      {
        "id": 1,
        "question": "Chọn câu tiếng Trung phù hợp nhất cho nghĩa: \"Chẳng lẽ bạn không biết sao?\"",
        "options": [
          "A. 难道你不知道吗？",
          "B. 难道我不知道吗？",
          "C. 难道你不知道吗？"
        ],
        "correct": 0,
        "explanation": "Câu đúng là \"难道你不知道吗？\" (nándào nǐ bù zhīdào ma). Chú ý: Không dùng trong tình huống cần hỏi trung lập."
      }
    ]
  },
  {
    "id": "hsk4_grammar_18",
    "title": "18. 原来: hóa ra / ban đầu",
    "level": "HSK 4",
    "theory": "Công thức: 原来 + Câu phát hiện mới\n\nCách dùng: Diễn tả sự nhận ra điều trước đó chưa biết.\n\nLỗi thường gặp: 原来 cũng có nghĩa “ban đầu/trước đây”, cần phân biệt ngữ cảnh.",
    "examples": [
      {
        "zh": "原来你也会说中文！",
        "pinyin": "yuánlái nǐ yě huì shuō zhōngwén",
        "vi": "Hóa ra bạn cũng biết nói tiếng Trung!"
      }
    ],
    "quiz": [
      {
        "id": 1,
        "question": "Chọn câu tiếng Trung phù hợp nhất cho nghĩa: \"Hóa ra bạn cũng biết nói tiếng Trung!\"",
        "options": [
          "A. 原来你也会说中文！",
          "B. 原来我也会说中文！",
          "C. 原来你也会说中文！"
        ],
        "correct": 0,
        "explanation": "Câu đúng là \"原来你也会说中文！\" (yuánlái nǐ yě huì shuō zhōngwén). Chú ý: 原来 cũng có nghĩa “ban đầu/trước đây”, cần phân biệt ngữ cảnh."
      }
    ]
  },
  {
    "id": "hsk4_grammar_19",
    "title": "19. 还是 vs 或者",
    "level": "HSK 4",
    "theory": "Công thức: A 还是 B？\n\nCách dùng: 还是 dùng cho câu hỏi lựa chọn. 或者 dùng cho câu khẳng định/lựa chọn chung.\n\nLỗi thường gặp: Không dùng 或者 trong câu hỏi lựa chọn trực tiếp ở cấp cơ bản.",
    "examples": [
      {
        "zh": "你喝茶还是咖啡？",
        "pinyin": "nǐ hē chá háishi kāfēi",
        "vi": "Bạn uống trà hay cà phê?"
      },
      {
        "zh": "我想喝茶或者咖啡。",
        "pinyin": "wǒ xiǎng hē chá huòzhě kāfēi",
        "vi": "Tôi muốn uống trà hoặc cà phê."
      }
    ],
    "quiz": [
      {
        "id": 1,
        "question": "Chọn câu tiếng Trung phù hợp nhất cho nghĩa: \"Bạn uống trà hay cà phê?\"",
        "options": [
          "A. 你喝茶还是咖啡？",
          "B. 我想喝茶或者咖啡。",
          "C. 你喝茶还有咖啡？"
        ],
        "correct": 0,
        "explanation": "Câu đúng là \"你喝茶还是咖啡？\" (nǐ hē chá háishi kāfēi). Chú ý: Không dùng 或者 trong câu hỏi lựa chọn trực tiếp ở cấp cơ bản."
      },
      {
        "id": 2,
        "question": "Điền từ thích hợp vào chỗ trống: \"你喝茶还 _______ 咖啡？\" (Dịch nghĩa: Bạn uống trà hay cà phê?)",
        "options": [
          "A. 是",
          "B. 的",
          "C. 了"
        ],
        "correct": 0,
        "explanation": "Điền \"是\" vào chỗ trống để tạo thành câu hoàn chỉnh: \"你喝茶还是咖啡？\" (nǐ hē chá háishi kāfēi)."
      }
    ]
  },
  {
    "id": "hsk4_grammar_20",
    "title": "20. 起来: bắt đầu / trông có vẻ / gom lại",
    "level": "HSK 4",
    "theory": "Công thức: Động từ/Tính từ + 起来\n\nCách dùng: 起来 có nhiều nghĩa: hành động hướng lên, bắt đầu, cảm giác nhìn/nghe/nếm, gom lại.\n\nLỗi thường gặp: Cần học theo cụm: 看起来, 听起来, 想起来, 收起来.",
    "examples": [
      {
        "zh": "他笑了起来。",
        "pinyin": "tā xiào le qǐlái",
        "vi": "Anh ấy bắt đầu cười."
      },
      {
        "zh": "这道菜看起来很好吃。",
        "pinyin": "zhè dào cài kàn qǐlái hěn hǎochī",
        "vi": "Món này trông rất ngon."
      }
    ],
    "quiz": [
      {
        "id": 1,
        "question": "Chọn câu tiếng Trung phù hợp nhất cho nghĩa: \"Anh ấy bắt đầu cười.\"",
        "options": [
          "A. 他笑了起来。",
          "B. 这道菜看起来很好吃。",
          "C. 他笑了起来。"
        ],
        "correct": 0,
        "explanation": "Câu đúng là \"他笑了起来。\" (tā xiào le qǐlái). Chú ý: Cần học theo cụm: 看起来, 听起来, 想起来, 收起来."
      }
    ]
  },
  {
    "id": "hsk5_grammar_1",
    "title": "1. 与其...不如...: thay vì...chi bằng...",
    "level": "HSK 5",
    "theory": "Công thức: 与其 + Lựa chọn A，不如 + Lựa chọn B\n\nCách dùng: Dùng để đề xuất lựa chọn tốt hơn.\n\nLỗi thường gặp: B thường là lựa chọn người nói đánh giá tốt hơn.",
    "examples": [
      {
        "zh": "与其抱怨，不如行动。",
        "pinyin": "yǔqí bàoyuàn, bùrú xíngdòng",
        "vi": "Thay vì than phiền, chi bằng hành động."
      }
    ],
    "quiz": [
      {
        "id": 1,
        "question": "Chọn câu tiếng Trung phù hợp nhất cho nghĩa: \"Thay vì than phiền, chi bằng hành động.\"",
        "options": [
          "A. 与其抱怨，不如行动。",
          "B. 与其抱怨，不如行动。",
          "C. 与其抱怨，不如行动。"
        ],
        "correct": 0,
        "explanation": "Câu đúng là \"与其抱怨，不如行动。\" (yǔqí bàoyuàn, bùrú xíngdòng). Chú ý: B thường là lựa chọn người nói đánh giá tốt hơn."
      },
      {
        "id": 2,
        "question": "Điền từ thích hợp vào chỗ trống: \"与其抱怨， _______ 如行动。\" (Dịch nghĩa: Thay vì than phiền, chi bằng hành động.)",
        "options": [
          "A. 不",
          "B. 是",
          "C. 的"
        ],
        "correct": 0,
        "explanation": "Điền \"不\" vào chỗ trống để tạo thành câu hoàn chỉnh: \"与其抱怨，不如行动。\" (yǔqí bàoyuàn, bùrú xíngdòng)."
      }
    ]
  },
  {
    "id": "hsk5_grammar_2",
    "title": "2. 宁可...也不...: thà...cũng không...",
    "level": "HSK 5",
    "theory": "Công thức: 宁可 + Làm A，也不 + Làm B\n\nCách dùng: Diễn tả quyết tâm chọn A, dù A khó khăn, để tránh B.\n\nLỗi thường gặp: Cấu trúc mang sắc thái mạnh, không dùng tùy tiện trong tình huống nhẹ.",
    "examples": [
      {
        "zh": "我宁可失败，也不放弃。",
        "pinyin": "wǒ nìngkě shībài, yě bú fàngqì",
        "vi": "Tôi thà thất bại chứ không từ bỏ."
      }
    ],
    "quiz": [
      {
        "id": 1,
        "question": "Chọn câu tiếng Trung phù hợp nhất cho nghĩa: \"Tôi thà thất bại chứ không từ bỏ.\"",
        "options": [
          "A. 我宁可失败，也不放弃。",
          "B. 他宁可失败，也不放弃。",
          "C. 我宁可失败，也不放弃。"
        ],
        "correct": 0,
        "explanation": "Câu đúng là \"我宁可失败，也不放弃。\" (wǒ nìngkě shībài, yě bú fàngqì). Chú ý: Cấu trúc mang sắc thái mạnh, không dùng tùy tiện trong tình huống nhẹ."
      },
      {
        "id": 2,
        "question": "Điền từ thích hợp vào chỗ trống: \"我宁可失败，也 _______ 放弃。\" (Dịch nghĩa: Tôi thà thất bại chứ không từ bỏ.)",
        "options": [
          "A. 不",
          "B. 是",
          "C. 的"
        ],
        "correct": 0,
        "explanation": "Điền \"不\" vào chỗ trống để tạo thành câu hoàn chỉnh: \"我宁可失败，也不放弃。\" (wǒ nìngkě shībài, yě bú fàngqì)."
      }
    ]
  },
  {
    "id": "hsk5_grammar_3",
    "title": "3. 不是...而是...: không phải...mà là...",
    "level": "HSK 5",
    "theory": "Công thức: 不是 + A，而是 + B\n\nCách dùng: Dùng để phủ định nhận định A và xác nhận B.\n\nLỗi thường gặp: 而是 dùng để đối lập và sửa lại thông tin, không giống 但是.",
    "examples": [
      {
        "zh": "成功不是运气，而是长期努力的结果。",
        "pinyin": "chénggōng bú shì yùnqi, ér shì chángqī nǔlì de jiéguǒ",
        "vi": "Thành công không phải may mắn, mà là kết quả của nỗ lực lâu dài."
      }
    ],
    "quiz": [
      {
        "id": 1,
        "question": "Chọn câu tiếng Trung phù hợp nhất cho nghĩa: \"Thành công không phải may mắn, mà là kết quả của nỗ lực lâu dài.\"",
        "options": [
          "A. 成功不是运气，而是长期努力的结果。",
          "B. 成功不是运气，而是长期努力的结果。",
          "C. 成功不有运气，而有长期努力结果。"
        ],
        "correct": 0,
        "explanation": "Câu đúng là \"成功不是运气，而是长期努力的结果。\" (chénggōng bú shì yùnqi, ér shì chángqī nǔlì de jiéguǒ). Chú ý: 而是 dùng để đối lập và sửa lại thông tin, không giống 但是."
      },
      {
        "id": 2,
        "question": "Điền từ thích hợp vào chỗ trống: \"成功不 _______ 运气，而是长期努力的结果。\" (Dịch nghĩa: Thành công không phải may mắn, mà là kết quả của nỗ lực lâu dài.)",
        "options": [
          "A. 是",
          "B. 的",
          "C. 了"
        ],
        "correct": 0,
        "explanation": "Điền \"是\" vào chỗ trống để tạo thành câu hoàn chỉnh: \"成功不是运气，而是长期努力的结果。\" (chénggōng bú shì yùnqi, ér shì chángqī nǔlì de jiéguǒ)."
      }
    ]
  },
  {
    "id": "hsk5_grammar_4",
    "title": "4. 之所以...是因为...: sở dĩ...là vì...",
    "level": "HSK 5",
    "theory": "Công thức: 之所以 + Kết quả，是因为 + Nguyên nhân\n\nCách dùng: Dùng trong văn viết/lập luận để giải thích nguyên nhân.\n\nLỗi thường gặp: Trật tự là kết quả trước, nguyên nhân sau.",
    "examples": [
      {
        "zh": "他之所以进步快，是因为每天坚持练习。",
        "pinyin": "tā zhīsuǒyǐ jìnbù kuài, shì yīnwèi měitiān jiānchí liànxí",
        "vi": "Sở dĩ anh ấy tiến bộ nhanh là vì mỗi ngày kiên trì luyện tập."
      }
    ],
    "quiz": [
      {
        "id": 1,
        "question": "Chọn câu tiếng Trung phù hợp nhất cho nghĩa: \"Sở dĩ anh ấy tiến bộ nhanh là vì mỗi ngày kiên trì luyện tập.\"",
        "options": [
          "A. 他之所以进步快，是因为每天坚持练习。",
          "B. 他之所以进步快，是因为每天坚持练习。",
          "C. 他之所以进步快，有因为每天坚持练习。"
        ],
        "correct": 0,
        "explanation": "Câu đúng là \"他之所以进步快，是因为每天坚持练习。\" (tā zhīsuǒyǐ jìnbù kuài, shì yīnwèi měitiān jiānchí liànxí). Chú ý: Trật tự là kết quả trước, nguyên nhân sau."
      },
      {
        "id": 2,
        "question": "Điền từ thích hợp vào chỗ trống: \"他之所以进步快， _______ 因为每天坚持练习。\" (Dịch nghĩa: Sở dĩ anh ấy tiến bộ nhanh là vì mỗi ngày kiên trì luyện tập.)",
        "options": [
          "A. 是",
          "B. 的",
          "C. 了"
        ],
        "correct": 0,
        "explanation": "Điền \"是\" vào chỗ trống để tạo thành câu hoàn chỉnh: \"他之所以进步快，是因为每天坚持练习。\" (tā zhīsuǒyǐ jìnbù kuài, shì yīnwèi měitiān jiānchí liànxí)."
      }
    ]
  },
  {
    "id": "hsk5_grammar_5",
    "title": "5. 既...又...: vừa...vừa...",
    "level": "HSK 5",
    "theory": "Công thức: 既 + Tính chất 1，又 + Tính chất 2\n\nCách dùng: Tương tự 又...又..., nhưng trang trọng hơn.\n\nLỗi thường gặp: Thường dùng trong văn viết hoặc phát biểu trang trọng.",
    "examples": [
      {
        "zh": "这个方法既简单又有效。",
        "pinyin": "zhège fāngfǎ jì jiǎndān yòu yǒuxiào",
        "vi": "Phương pháp này vừa đơn giản vừa hiệu quả."
      }
    ],
    "quiz": [
      {
        "id": 1,
        "question": "Chọn câu tiếng Trung phù hợp nhất cho nghĩa: \"Phương pháp này vừa đơn giản vừa hiệu quả.\"",
        "options": [
          "A. 这个方法既简单又有效。",
          "B. 这个方法既简单又有效。",
          "C. 这个方法既简单又有效。"
        ],
        "correct": 0,
        "explanation": "Câu đúng là \"这个方法既简单又有效。\" (zhège fāngfǎ jì jiǎndān yòu yǒuxiào). Chú ý: Thường dùng trong văn viết hoặc phát biểu trang trọng."
      }
    ]
  },
  {
    "id": "hsk5_grammar_6",
    "title": "6. 不仅...还...: không chỉ...còn...",
    "level": "HSK 5",
    "theory": "Công thức: 不仅 + Mệnh đề 1，还 + Mệnh đề 2\n\nCách dùng: Tăng tiến, gần giống 不但...而且...\n\nLỗi thường gặp: 还 thường đứng trước động từ ở vế sau.",
    "examples": [
      {
        "zh": "学习语言不仅要记词，还要多使用。",
        "pinyin": "xuéxí yǔyán bùjǐn yào jì cí, hái yào duō shǐyòng",
        "vi": "Học ngôn ngữ không chỉ cần nhớ từ, mà còn phải dùng nhiều."
      }
    ],
    "quiz": [
      {
        "id": 1,
        "question": "Chọn câu tiếng Trung phù hợp nhất cho nghĩa: \"Học ngôn ngữ không chỉ cần nhớ từ, mà còn phải dùng nhiều.\"",
        "options": [
          "A. 学习语言不仅要记词，还要多使用。",
          "B. 学习语言不仅要记词，还要多使用。",
          "C. 学习语言不仅要记词，还要多使用。"
        ],
        "correct": 0,
        "explanation": "Câu đúng là \"学习语言不仅要记词，还要多使用。\" (xuéxí yǔyán bùjǐn yào jì cí, hái yào duō shǐyòng). Chú ý: 还 thường đứng trước động từ ở vế sau."
      },
      {
        "id": 2,
        "question": "Điền từ thích hợp vào chỗ trống: \"学习语言 _______ 仅要记词，还要多使用。\" (Dịch nghĩa: Học ngôn ngữ không chỉ cần nhớ từ, mà còn phải dùng nhiều.)",
        "options": [
          "A. 不",
          "B. 是",
          "C. 的"
        ],
        "correct": 0,
        "explanation": "Điền \"不\" vào chỗ trống để tạo thành câu hoàn chỉnh: \"学习语言不仅要记词，还要多使用。\" (xuéxí yǔyán bùjǐn yào jì cí, hái yào duō shǐyòng)."
      }
    ]
  },
  {
    "id": "hsk5_grammar_7",
    "title": "7. 尽管...还是...: mặc dù...vẫn...",
    "level": "HSK 5",
    "theory": "Công thức: 尽管 + Sự thật bất lợi，还是 + Kết quả\n\nCách dùng: Nhượng bộ, nhấn mạnh kết quả vẫn xảy ra.\n\nLỗi thường gặp: 尽管 thường trang trọng hơn 虽然.",
    "examples": [
      {
        "zh": "尽管很累，他还是完成了任务。",
        "pinyin": "jǐnguǎn hěn lèi, tā háishi wánchéng le rènwu",
        "vi": "Mặc dù rất mệt, anh ấy vẫn hoàn thành nhiệm vụ."
      }
    ],
    "quiz": [
      {
        "id": 1,
        "question": "Chọn câu tiếng Trung phù hợp nhất cho nghĩa: \"Mặc dù rất mệt, anh ấy vẫn hoàn thành nhiệm vụ.\"",
        "options": [
          "A. 尽管很累，他还是完成了任务。",
          "B. 尽管很累，他还是完成了任务。",
          "C. 尽管很累，他还有完成了任务。"
        ],
        "correct": 0,
        "explanation": "Câu đúng là \"尽管很累，他还是完成了任务。\" (jǐnguǎn hěn lèi, tā háishi wánchéng le rènwu). Chú ý: 尽管 thường trang trọng hơn 虽然."
      },
      {
        "id": 2,
        "question": "Điền từ thích hợp vào chỗ trống: \"尽管很累，他还 _______ 完成了任务。\" (Dịch nghĩa: Mặc dù rất mệt, anh ấy vẫn hoàn thành nhiệm vụ.)",
        "options": [
          "A. 是",
          "B. 的",
          "C. 了"
        ],
        "correct": 0,
        "explanation": "Điền \"是\" vào chỗ trống để tạo thành câu hoàn chỉnh: \"尽管很累，他还是完成了任务。\" (jǐnguǎn hěn lèi, tā háishi wánchéng le rènwu)."
      }
    ]
  },
  {
    "id": "hsk5_grammar_8",
    "title": "8. 反而: ngược lại lại...",
    "level": "HSK 5",
    "theory": "Công thức: Mệnh đề dự kiến, 反而 + Kết quả trái kỳ vọng\n\nCách dùng: Diễn tả kết quả ngược với điều người ta thường nghĩ.\n\nLỗi thường gặp: Phải có yếu tố trái kỳ vọng.",
    "examples": [
      {
        "zh": "他没有生气，反而笑了。",
        "pinyin": "tā méiyǒu shēngqì, fǎn'ér xiào le",
        "vi": "Anh ấy không tức giận, ngược lại còn cười."
      }
    ],
    "quiz": [
      {
        "id": 1,
        "question": "Chọn câu tiếng Trung phù hợp nhất cho nghĩa: \"Anh ấy không tức giận, ngược lại còn cười.\"",
        "options": [
          "A. 他没有生气，反而笑了。",
          "B. 他没有生气，反而笑了。",
          "C. 他没有生气，反而笑了。"
        ],
        "correct": 0,
        "explanation": "Câu đúng là \"他没有生气，反而笑了。\" (tā méiyǒu shēngqì, fǎn'ér xiào le). Chú ý: Phải có yếu tố trái kỳ vọng."
      }
    ]
  },
  {
    "id": "hsk5_grammar_9",
    "title": "9. 毕竟: dù sao thì / xét cho cùng",
    "level": "HSK 5",
    "theory": "Công thức: 毕竟 + Lý do nền\n\nCách dùng: Dùng để đưa ra lý do có trọng lượng nhằm giải thích hoặc kết luận.\n\nLỗi thường gặp: 毕竟 thường dùng để làm mềm hoặc củng cố lập luận.",
    "examples": [
      {
        "zh": "别对他太严格，毕竟他还是个孩子。",
        "pinyin": "bié duì tā tài yángé, bìjìng tā háishi ge háizi",
        "vi": "Đừng quá nghiêm khắc với nó, dù sao nó vẫn là một đứa trẻ."
      }
    ],
    "quiz": [
      {
        "id": 1,
        "question": "Chọn câu tiếng Trung phù hợp nhất cho nghĩa: \"Đừng quá nghiêm khắc với nó, dù sao nó vẫn là một đứa trẻ.\"",
        "options": [
          "A. 别对他太严格，毕竟他还是个孩子。",
          "B. 别对他太严格，毕竟他还是个孩子。",
          "C. 别对他太严格，毕竟他还有个孩子。"
        ],
        "correct": 0,
        "explanation": "Câu đúng là \"别对他太严格，毕竟他还是个孩子。\" (bié duì tā tài yángé, bìjìng tā háishi ge háizi). Chú ý: 毕竟 thường dùng để làm mềm hoặc củng cố lập luận."
      },
      {
        "id": 2,
        "question": "Điền từ thích hợp vào chỗ trống: \"别对他太严格，毕竟他还 _______ 个孩子。\" (Dịch nghĩa: Đừng quá nghiêm khắc với nó, dù sao nó vẫn là một đứa trẻ.)",
        "options": [
          "A. 是",
          "B. 的",
          "C. 了"
        ],
        "correct": 0,
        "explanation": "Điền \"是\" vào chỗ trống để tạo thành câu hoàn chỉnh: \"别对他太严格，毕竟他还是个孩子。\" (bié duì tā tài yángé, bìjìng tā háishi ge háizi)."
      }
    ]
  },
  {
    "id": "hsk5_grammar_10",
    "title": "10. 由此可见: từ đó có thể thấy",
    "level": "HSK 5",
    "theory": "Công thức: Sự kiện/Phân tích。由此可见，Kết luận\n\nCách dùng: Dùng trong văn viết, bài luận, báo cáo.\n\nLỗi thường gặp: Không dùng nếu trước đó chưa có căn cứ.",
    "examples": [
      {
        "zh": "很多人每天使用手机学习。由此可见，移动学习越来越普遍。",
        "pinyin": "hěn duō rén měitiān shǐyòng shǒujī xuéxí. yóucǐ kějiàn, yídòng xuéxí yuèláiyuè pǔbiàn",
        "vi": "Rất nhiều người dùng điện thoại học mỗi ngày. Từ đó có thể thấy, học qua thiết bị di động ngày càng phổ biến."
      }
    ],
    "quiz": [
      {
        "id": 1,
        "question": "Chọn câu tiếng Trung phù hợp nhất cho nghĩa: \"Rất nhiều người dùng điện thoại học mỗi ngày. Từ đó có thể thấy, học qua thiết bị di động ngày càng phổ biến.\"",
        "options": [
          "A. 很多人每天使用手机学习。由此可见，移动学习越来越普遍。",
          "B. 很多人每天使用手机学习。由此可见，移动学习越来越普遍。",
          "C. 很多人每天使用手机学习。由此可见，移动学习越来越普遍。"
        ],
        "correct": 0,
        "explanation": "Câu đúng là \"很多人每天使用手机学习。由此可见，移动学习越来越普遍。\" (hěn duō rén měitiān shǐyòng shǒujī xuéxí. yóucǐ kějiàn, yídòng xuéxí yuèláiyuè pǔbiàn). Chú ý: Không dùng nếu trước đó chưa có căn cứ."
      }
    ]
  },
  {
    "id": "hsk5_grammar_11",
    "title": "11. 总之: tóm lại",
    "level": "HSK 5",
    "theory": "Công thức: 总之，Kết luận tổng quát\n\nCách dùng: Dùng để kết luận sau nhiều ý.\n\nLỗi thường gặp: Không dùng 总之 khi chưa có phần phân tích trước.",
    "examples": [
      {
        "zh": "总之，学习语言需要时间、方法和坚持。",
        "pinyin": "zǒngzhī, xuéxí yǔyán xūyào shíjiān, fāngfǎ hé jiānchí",
        "vi": "Tóm lại, học ngôn ngữ cần thời gian, phương pháp và sự kiên trì."
      }
    ],
    "quiz": [
      {
        "id": 1,
        "question": "Chọn câu tiếng Trung phù hợp nhất cho nghĩa: \"Tóm lại, học ngôn ngữ cần thời gian, phương pháp và sự kiên trì.\"",
        "options": [
          "A. 总之，学习语言需要时间、方法和坚持。",
          "B. 总之，学习语言需要时间、方法和坚持。",
          "C. 总之，学习语言需要时间、方法和坚持。"
        ],
        "correct": 0,
        "explanation": "Câu đúng là \"总之，学习语言需要时间、方法和坚持。\" (zǒngzhī, xuéxí yǔyán xūyào shíjiān, fāngfǎ hé jiānchí). Chú ý: Không dùng 总之 khi chưa có phần phân tích trước."
      }
    ]
  },
  {
    "id": "hsk5_grammar_12",
    "title": "12. 甚至: thậm chí",
    "level": "HSK 5",
    "theory": "Công thức: Mệnh đề thường + 甚至 + Mệnh đề mạnh hơn\n\nCách dùng: Dùng để tăng cấp độ thông tin.\n\nLỗi thường gặp: Thông tin sau 甚至 phải mạnh/bất ngờ hơn thông tin trước.",
    "examples": [
      {
        "zh": "他每天学习中文，甚至周末也不休息。",
        "pinyin": "tā měitiān xuéxí zhōngwén, shènzhì zhōumò yě bù xiūxi",
        "vi": "Anh ấy học tiếng Trung mỗi ngày, thậm chí cuối tuần cũng không nghỉ."
      }
    ],
    "quiz": [
      {
        "id": 1,
        "question": "Chọn câu tiếng Trung phù hợp nhất cho nghĩa: \"Anh ấy học tiếng Trung mỗi ngày, thậm chí cuối tuần cũng không nghỉ.\"",
        "options": [
          "A. 他每天学习中文，甚至周末也不休息。",
          "B. 他每天学习中文，甚至周末也不休息。",
          "C. 他每天学习中文，甚至周末也不休息。"
        ],
        "correct": 0,
        "explanation": "Câu đúng là \"他每天学习中文，甚至周末也不休息。\" (tā měitiān xuéxí zhōngwén, shènzhì zhōumò yě bù xiūxi). Chú ý: Thông tin sau 甚至 phải mạnh/bất ngờ hơn thông tin trước."
      }
    ]
  },
  {
    "id": "hsk5_grammar_13",
    "title": "13. 一旦...就...: một khi...thì...",
    "level": "HSK 5",
    "theory": "Công thức: 一旦 + Điều kiện xảy ra，就 + Kết quả\n\nCách dùng: Nhấn mạnh khi điều kiện xảy ra thì kết quả sẽ xuất hiện nhanh/chắc.\n\nLỗi thường gặp: 一旦 thường dùng cho điều kiện có ảnh hưởng lớn.",
    "examples": [
      {
        "zh": "一旦养成习惯，学习就会轻松很多。",
        "pinyin": "yídàn yǎngchéng xíguàn, xuéxí jiù huì qīngsōng hěn duō",
        "vi": "Một khi hình thành thói quen, việc học sẽ nhẹ nhàng hơn nhiều."
      }
    ],
    "quiz": [
      {
        "id": 1,
        "question": "Chọn câu tiếng Trung phù hợp nhất cho nghĩa: \"Một khi hình thành thói quen, việc học sẽ nhẹ nhàng hơn nhiều.\"",
        "options": [
          "A. 一旦养成习惯，学习就会轻松很多。",
          "B. 一旦养成习惯，学习就会轻松很多。",
          "C. 一旦养成习惯，学习就会轻松很多。"
        ],
        "correct": 0,
        "explanation": "Câu đúng là \"一旦养成习惯，学习就会轻松很多。\" (yídàn yǎngchéng xíguàn, xuéxí jiù huì qīngsōng hěn duō). Chú ý: 一旦 thường dùng cho điều kiện có ảnh hưởng lớn."
      },
      {
        "id": 2,
        "question": "Điền từ thích hợp vào chỗ trống: \"一旦养成习惯，学习 _______ 会轻松很多。\" (Dịch nghĩa: Một khi hình thành thói quen, việc học sẽ nhẹ nhàng hơn nhiều.)",
        "options": [
          "A. 就",
          "B. 是",
          "C. 的"
        ],
        "correct": 0,
        "explanation": "Điền \"就\" vào chỗ trống để tạo thành câu hoàn chỉnh: \"一旦养成习惯，学习就会轻松很多。\" (yídàn yǎngchéng xíguàn, xuéxí jiù huì qīngsōng hěn duō)."
      }
    ]
  },
  {
    "id": "hsk5_grammar_14",
    "title": "14. 以免: để tránh",
    "level": "HSK 5",
    "theory": "Công thức: Hành động phòng ngừa，以免 + Kết quả xấu\n\nCách dùng: Dùng để nói làm gì đó nhằm tránh hậu quả không tốt.\n\nLỗi thường gặp: Sau 以免 thường là kết quả tiêu cực.",
    "examples": [
      {
        "zh": "请提前出门，以免迟到。",
        "pinyin": "qǐng tíqián chūmén, yǐmiǎn chídào",
        "vi": "Hãy ra ngoài sớm để tránh đến muộn."
      }
    ],
    "quiz": [
      {
        "id": 1,
        "question": "Chọn câu tiếng Trung phù hợp nhất cho nghĩa: \"Hãy ra ngoài sớm để tránh đến muộn.\"",
        "options": [
          "A. 请提前出门，以免迟到。",
          "B. 请提前出门，以免迟到。",
          "C. 请提前出门，以免迟到。"
        ],
        "correct": 0,
        "explanation": "Câu đúng là \"请提前出门，以免迟到。\" (qǐng tíqián chūmén, yǐmiǎn chídào). Chú ý: Sau 以免 thường là kết quả tiêu cực."
      }
    ]
  },
  {
    "id": "hsk5_grammar_15",
    "title": "15. 省得: khỏi phải / để tránh phiền",
    "level": "HSK 5",
    "theory": "Công thức: Hành động trước，省得 + Phiền phức sau\n\nCách dùng: Khẩu ngữ hơn 以免, nghĩa là tránh việc rắc rối.\n\nLỗi thường gặp: 省得 thường dùng trong đời thường.",
    "examples": [
      {
        "zh": "你把地址发给我，省得我找不到。",
        "pinyin": "nǐ bǎ dìzhǐ fā gěi wǒ, shěngde wǒ zhǎo bú dào",
        "vi": "Bạn gửi địa chỉ cho tôi, khỏi để tôi không tìm thấy."
      }
    ],
    "quiz": [
      {
        "id": 1,
        "question": "Chọn câu tiếng Trung phù hợp nhất cho nghĩa: \"Bạn gửi địa chỉ cho tôi, khỏi để tôi không tìm thấy.\"",
        "options": [
          "A. 你把地址发给我，省得我找不到。",
          "B. 我把地址发给他，省得他找不到。",
          "C. 你把地址发给我，省得我找不到。"
        ],
        "correct": 0,
        "explanation": "Câu đúng là \"你把地址发给我，省得我找不到。\" (nǐ bǎ dìzhǐ fā gěi wǒ, shěngde wǒ zhǎo bú dào). Chú ý: 省得 thường dùng trong đời thường."
      }
    ]
  },
  {
    "id": "hsk5_grammar_16",
    "title": "16. 免得: kẻo / để khỏi",
    "level": "HSK 5",
    "theory": "Công thức: Hành động phòng ngừa，免得 + Kết quả không mong muốn\n\nCách dùng: Gần giống 以免, khẩu ngữ hơn một chút.\n\nLỗi thường gặp: Sau 免得 thường là điều xấu có thể xảy ra.",
    "examples": [
      {
        "zh": "多穿点儿衣服，免得感冒。",
        "pinyin": "duō chuān diǎnr yīfu, miǎnde gǎnmào",
        "vi": "Mặc thêm áo vào, kẻo bị cảm."
      }
    ],
    "quiz": [
      {
        "id": 1,
        "question": "Chọn câu tiếng Trung phù hợp nhất cho nghĩa: \"Mặc thêm áo vào, kẻo bị cảm.\"",
        "options": [
          "A. 多穿点儿衣服，免得感冒。",
          "B. 多穿点儿衣服，免得感冒。",
          "C. 多穿点儿衣服，免得感冒。"
        ],
        "correct": 0,
        "explanation": "Câu đúng là \"多穿点儿衣服，免得感冒。\" (duō chuān diǎnr yīfu, miǎnde gǎnmào). Chú ý: Sau 免得 thường là điều xấu có thể xảy ra."
      }
    ]
  },
  {
    "id": "hsk5_grammar_17",
    "title": "17. 拿...来说: lấy...mà nói",
    "level": "HSK 5",
    "theory": "Công thức: 拿 + Ví dụ + 来说，Nhận xét\n\nCách dùng: Dùng để đưa ví dụ minh họa.\n\nLỗi thường gặp: Dùng tốt trong bài nói HSK5 để mở ví dụ.",
    "examples": [
      {
        "zh": "拿学习中文来说，发音和语法都很重要。",
        "pinyin": "ná xuéxí zhōngwén lái shuō, fāyīn hé yǔfǎ dōu hěn zhòngyào",
        "vi": "Lấy việc học tiếng Trung mà nói, phát âm và ngữ pháp đều rất quan trọng."
      }
    ],
    "quiz": [
      {
        "id": 1,
        "question": "Chọn câu tiếng Trung phù hợp nhất cho nghĩa: \"Lấy việc học tiếng Trung mà nói, phát âm và ngữ pháp đều rất quan trọng.\"",
        "options": [
          "A. 拿学习中文来说，发音和语法都很重要。",
          "B. 拿学习中文来说，发音和语法都很重要。",
          "C. 拿学习中文来说，发音和语法都很重要。"
        ],
        "correct": 0,
        "explanation": "Câu đúng là \"拿学习中文来说，发音和语法都很重要。\" (ná xuéxí zhōngwén lái shuō, fāyīn hé yǔfǎ dōu hěn zhòngyào). Chú ý: Dùng tốt trong bài nói HSK5 để mở ví dụ."
      }
    ]
  },
  {
    "id": "hsk5_grammar_18",
    "title": "18. 以...为...: lấy...làm...",
    "level": "HSK 5",
    "theory": "Công thức: 以 + A + 为 + B\n\nCách dùng: Dùng trong văn viết để nói lấy A làm B/căn cứ/mục tiêu.\n\nLỗi thường gặp: Cấu trúc này trang trọng, không phải khẩu ngữ đời thường.",
    "examples": [
      {
        "zh": "我们应该以结果为导向。",
        "pinyin": "wǒmen yīnggāi yǐ jiéguǒ wéi dǎoxiàng",
        "vi": "Chúng ta nên lấy kết quả làm định hướng."
      }
    ],
    "quiz": [
      {
        "id": 1,
        "question": "Chọn câu tiếng Trung phù hợp nhất cho nghĩa: \"Chúng ta nên lấy kết quả làm định hướng.\"",
        "options": [
          "A. 我们应该以结果为导向。",
          "B. 他们应该以结果为导向。",
          "C. 我们应该以结果为导向。"
        ],
        "correct": 0,
        "explanation": "Câu đúng là \"我们应该以结果为导向。\" (wǒmen yīnggāi yǐ jiéguǒ wéi dǎoxiàng). Chú ý: Cấu trúc này trang trọng, không phải khẩu ngữ đời thường."
      }
    ]
  },
  {
    "id": "hsk5_grammar_19",
    "title": "19. 对...而言: đối với...mà nói",
    "level": "HSK 5",
    "theory": "Công thức: 对 + Đối tượng + 而言，Nhận xét\n\nCách dùng: Gần giống 对...来说 nhưng trang trọng hơn.\n\nLỗi thường gặp: Phù hợp với văn viết, bài luận, phân tích.",
    "examples": [
      {
        "zh": "对企业而言，效率非常重要。",
        "pinyin": "duì qǐyè ér yán, xiàolǜ fēicháng zhòngyào",
        "vi": "Đối với doanh nghiệp, hiệu suất rất quan trọng."
      }
    ],
    "quiz": [
      {
        "id": 1,
        "question": "Chọn câu tiếng Trung phù hợp nhất cho nghĩa: \"Đối với doanh nghiệp, hiệu suất rất quan trọng.\"",
        "options": [
          "A. 对企业而言，效率非常重要。",
          "B. 对企业而言，效率非常重要。",
          "C. 对企业而言，效率非常重要。"
        ],
        "correct": 0,
        "explanation": "Câu đúng là \"对企业而言，效率非常重要。\" (duì qǐyè ér yán, xiàolǜ fēicháng zhòngyào). Chú ý: Phù hợp với văn viết, bài luận, phân tích."
      }
    ]
  },
  {
    "id": "hsk5_grammar_20",
    "title": "20. 值得: đáng để",
    "level": "HSK 5",
    "theory": "Công thức: 值得 + Động từ\n\nCách dùng: Dùng để đánh giá một việc đáng làm.\n\nLỗi thường gặp: 值得 không cần thêm 应该 sau nó.",
    "examples": [
      {
        "zh": "这本书值得一读。",
        "pinyin": "zhè běn shū zhídé yì dú",
        "vi": "Quyển sách này đáng đọc."
      },
      {
        "zh": "这个问题值得研究。",
        "pinyin": "zhège wèntí zhídé yánjiū",
        "vi": "Vấn đề này đáng nghiên cứu."
      }
    ],
    "quiz": [
      {
        "id": 1,
        "question": "Chọn câu tiếng Trung phù hợp nhất cho nghĩa: \"Quyển sách này đáng đọc.\"",
        "options": [
          "A. 这本书值得一读。",
          "B. 这个问题值得研究。",
          "C. 这本书值得一读。"
        ],
        "correct": 0,
        "explanation": "Câu đúng là \"这本书值得一读。\" (zhè běn shū zhídé yì dú). Chú ý: 值得 không cần thêm 应该 sau nó."
      }
    ]
  },
  {
    "id": "hsk6_grammar_1",
    "title": "1. 与其说...不如说...: nói là...chi bằng nói là...",
    "level": "HSK 6",
    "theory": "Công thức: 与其说 + A，不如说 + B\n\nCách dùng: Dùng để điều chỉnh cách nhìn nhận, cho rằng B chính xác hơn A.\n\nLỗi thường gặp: A không hoàn toàn sai, nhưng B được xem là bản chất hơn.",
    "examples": [
      {
        "zh": "与其说他聪明，不如说他非常自律。",
        "pinyin": "yǔqí shuō tā cōngming, bùrú shuō tā fēicháng zìlǜ",
        "vi": "Nói anh ấy thông minh, chi bằng nói anh ấy rất kỷ luật."
      }
    ],
    "quiz": [
      {
        "id": 1,
        "question": "Chọn câu tiếng Trung phù hợp nhất cho nghĩa: \"Nói anh ấy thông minh, chi bằng nói anh ấy rất kỷ luật.\"",
        "options": [
          "A. 与其说他聪明，不如说他非常自律。",
          "B. 与其说他聪明，不如说他非常自律。",
          "C. 与其说他聪明，不如说他非常自律。"
        ],
        "correct": 0,
        "explanation": "Câu đúng là \"与其说他聪明，不如说他非常自律。\" (yǔqí shuō tā cōngming, bùrú shuō tā fēicháng zìlǜ). Chú ý: A không hoàn toàn sai, nhưng B được xem là bản chất hơn."
      },
      {
        "id": 2,
        "question": "Điền từ thích hợp vào chỗ trống: \"与其说他聪明， _______ 如说他非常自律。\" (Dịch nghĩa: Nói anh ấy thông minh, chi bằng nói anh ấy rất kỷ luật.)",
        "options": [
          "A. 不",
          "B. 是",
          "C. 的"
        ],
        "correct": 0,
        "explanation": "Điền \"不\" vào chỗ trống để tạo thành câu hoàn chỉnh: \"与其说他聪明，不如说他非常自律。\" (yǔqí shuō tā cōngming, bùrú shuō tā fēicháng zìlǜ)."
      }
    ]
  },
  {
    "id": "hsk6_grammar_2",
    "title": "2. 非...不可: nhất định phải...",
    "level": "HSK 6",
    "theory": "Công thức: 非 + Động từ/Danh từ + 不可\n\nCách dùng: Diễn tả sự bắt buộc hoặc quyết tâm rất mạnh.\n\nLỗi thường gặp: Sắc thái mạnh hơn 必须.",
    "examples": [
      {
        "zh": "这个问题非解决不可。",
        "pinyin": "zhège wèntí fēi jiějué bùkě",
        "vi": "Vấn đề này nhất định phải giải quyết."
      }
    ],
    "quiz": [
      {
        "id": 1,
        "question": "Chọn câu tiếng Trung phù hợp nhất cho nghĩa: \"Vấn đề này nhất định phải giải quyết.\"",
        "options": [
          "A. 这个问题非解决不可。",
          "B. 这个问题非解决不可。",
          "C. 这个问题非解决不可。"
        ],
        "correct": 0,
        "explanation": "Câu đúng là \"这个问题非解决不可。\" (zhège wèntí fēi jiějué bùkě). Chú ý: Sắc thái mạnh hơn 必须."
      },
      {
        "id": 2,
        "question": "Điền từ thích hợp vào chỗ trống: \"这个问题非解决 _______ 可。\" (Dịch nghĩa: Vấn đề này nhất định phải giải quyết.)",
        "options": [
          "A. 不",
          "B. 是",
          "C. 的"
        ],
        "correct": 0,
        "explanation": "Điền \"不\" vào chỗ trống để tạo thành câu hoàn chỉnh: \"这个问题非解决不可。\" (zhège wèntí fēi jiějué bùkě)."
      }
    ]
  },
  {
    "id": "hsk6_grammar_3",
    "title": "3. 未必: chưa chắc",
    "level": "HSK 6",
    "theory": "Công thức: Chủ ngữ + 未必 + Động từ/Tính từ\n\nCách dùng: Dùng để phủ định khả năng chắc chắn, mang sắc thái khách quan.\n\nLỗi thường gặp: 未必 không có nghĩa là “không”. Nó là “chưa chắc”.",
    "examples": [
      {
        "zh": "贵的东西未必一定好。",
        "pinyin": "guì de dōngxi wèibì yídìng hǎo",
        "vi": "Đồ đắt chưa chắc đã tốt."
      }
    ],
    "quiz": [
      {
        "id": 1,
        "question": "Chọn câu tiếng Trung phù hợp nhất cho nghĩa: \"Đồ đắt chưa chắc đã tốt.\"",
        "options": [
          "A. 贵的东西未必一定好。",
          "B. 贵的东西未必一定好。",
          "C. 贵东西未必一定好。"
        ],
        "correct": 0,
        "explanation": "Câu đúng là \"贵的东西未必一定好。\" (guì de dōngxi wèibì yídìng hǎo). Chú ý: 未必 không có nghĩa là “không”. Nó là “chưa chắc”."
      }
    ]
  },
  {
    "id": "hsk6_grammar_4",
    "title": "4. 并非: không hề / không phải là",
    "level": "HSK 6",
    "theory": "Công thức: 并非 + Nhận định\n\nCách dùng: Phủ định trang trọng, thường dùng trong văn viết.\n\nLỗi thường gặp: 并非 trang trọng hơn 不是.",
    "examples": [
      {
        "zh": "成功并非偶然。",
        "pinyin": "chénggōng bìngfēi ǒurán",
        "vi": "Thành công không phải là ngẫu nhiên."
      }
    ],
    "quiz": [
      {
        "id": 1,
        "question": "Chọn câu tiếng Trung phù hợp nhất cho nghĩa: \"Thành công không phải là ngẫu nhiên.\"",
        "options": [
          "A. 成功并非偶然。",
          "B. 成功并非偶然。",
          "C. 成功并非偶然。"
        ],
        "correct": 0,
        "explanation": "Câu đúng là \"成功并非偶然。\" (chénggōng bìngfēi ǒurán). Chú ý: 并非 trang trọng hơn 不是."
      }
    ]
  },
  {
    "id": "hsk6_grammar_5",
    "title": "5. 无非: chẳng qua là",
    "level": "HSK 6",
    "theory": "Công thức: 无非 + Nhận định giảm nhẹ\n\nCách dùng: Dùng để giảm mức độ nghiêm trọng hoặc tóm gọn bản chất.\n\nLỗi thường gặp: Có sắc thái “không có gì hơn ngoài...”.",
    "examples": [
      {
        "zh": "他的意思无非是想提醒我们。",
        "pinyin": "tā de yìsi wúfēi shì xiǎng tíxǐng wǒmen",
        "vi": "Ý của anh ấy chẳng qua là muốn nhắc nhở chúng ta."
      }
    ],
    "quiz": [
      {
        "id": 1,
        "question": "Chọn câu tiếng Trung phù hợp nhất cho nghĩa: \"Ý của anh ấy chẳng qua là muốn nhắc nhở chúng ta.\"",
        "options": [
          "A. 他的意思无非是想提醒我们。",
          "B. 他的意思无非是想提醒他们。",
          "C. 他意思无非有想提醒我们。"
        ],
        "correct": 0,
        "explanation": "Câu đúng là \"他的意思无非是想提醒我们。\" (tā de yìsi wúfēi shì xiǎng tíxǐng wǒmen). Chú ý: Có sắc thái “không có gì hơn ngoài...”."
      },
      {
        "id": 2,
        "question": "Điền từ thích hợp vào chỗ trống: \"他的意思无非 _______ 想提醒我们。\" (Dịch nghĩa: Ý của anh ấy chẳng qua là muốn nhắc nhở chúng ta.)",
        "options": [
          "A. 是",
          "B. 的",
          "C. 了"
        ],
        "correct": 0,
        "explanation": "Điền \"是\" vào chỗ trống để tạo thành câu hoàn chỉnh: \"他的意思无非是想提醒我们。\" (tā de yìsi wúfēi shì xiǎng tíxǐng wǒmen)."
      }
    ]
  },
  {
    "id": "hsk6_grammar_6",
    "title": "6. 尚且...何况...: ngay cả...huống chi...",
    "level": "HSK 6",
    "theory": "Công thức: A 尚且 như vậy，何况 B\n\nCách dùng: Dùng để lập luận từ trường hợp mạnh sang trường hợp yếu hơn.\n\nLỗi thường gặp: Cần chọn A có sức nặng hơn B.",
    "examples": [
      {
        "zh": "成年人尚且会犯错，何况孩子呢？",
        "pinyin": "chéngniánrén shàngqiě huì fàncuò, hékuàng háizi ne",
        "vi": "Người lớn còn mắc lỗi, huống chi trẻ con?"
      }
    ],
    "quiz": [
      {
        "id": 1,
        "question": "Chọn câu tiếng Trung phù hợp nhất cho nghĩa: \"Người lớn còn mắc lỗi, huống chi trẻ con?\"",
        "options": [
          "A. 成年人尚且会犯错，何况孩子呢？",
          "B. 成年人尚且会犯错，何况孩子呢？",
          "C. 成年人尚且会犯错，何况孩子呢？"
        ],
        "correct": 0,
        "explanation": "Câu đúng là \"成年人尚且会犯错，何况孩子呢？\" (chéngniánrén shàngqiě huì fàncuò, hékuàng háizi ne). Chú ý: Cần chọn A có sức nặng hơn B."
      }
    ]
  },
  {
    "id": "hsk6_grammar_7",
    "title": "7. 况且: huống hồ / hơn nữa",
    "level": "HSK 6",
    "theory": "Công thức: Lý do 1，况且 + Lý do bổ sung\n\nCách dùng: Bổ sung lý do mạnh hơn hoặc thêm căn cứ.\n\nLỗi thường gặp: 况且 thường dùng để thêm lý do thuyết phục.",
    "examples": [
      {
        "zh": "今天别出门了，外面很冷，况且还下着雨。",
        "pinyin": "jīntiān bié chūmén le, wàimiàn hěn lěng, kuàngqiě hái xià zhe yǔ",
        "vi": "Hôm nay đừng ra ngoài, bên ngoài rất lạnh, hơn nữa còn đang mưa."
      }
    ],
    "quiz": [
      {
        "id": 1,
        "question": "Chọn câu tiếng Trung phù hợp nhất cho nghĩa: \"Hôm nay đừng ra ngoài, bên ngoài rất lạnh, hơn nữa còn đang mưa.\"",
        "options": [
          "A. 今天别出门了，外面很冷，况且还下着雨。",
          "B. 今天别出门了，外面很冷，况且还下着雨。",
          "C. 今天别出门了，外面很冷，况且还下着雨。"
        ],
        "correct": 0,
        "explanation": "Câu đúng là \"今天别出门了，外面很冷，况且还下着雨。\" (jīntiān bié chūmén le, wàimiàn hěn lěng, kuàngqiě hái xià zhe yǔ). Chú ý: 况且 thường dùng để thêm lý do thuyết phục."
      }
    ]
  },
  {
    "id": "hsk6_grammar_8",
    "title": "8. 固然...但/但是...: tất nhiên...nhưng...",
    "level": "HSK 6",
    "theory": "Công thức: A 固然 + Đúng/Quan trọng，但 B + Quan trọng hơn/Đối lập\n\nCách dùng: Thừa nhận một ý, sau đó chuyển sang ý chính.\n\nLỗi thường gặp: 固然 thường dùng trong lập luận trang trọng.",
    "examples": [
      {
        "zh": "经验固然重要，但学习能力更重要。",
        "pinyin": "jīngyàn gùrán zhòngyào, dàn xuéxí nénglì gèng zhòngyào",
        "vi": "Kinh nghiệm tất nhiên quan trọng, nhưng năng lực học hỏi còn quan trọng hơn."
      }
    ],
    "quiz": [
      {
        "id": 1,
        "question": "Chọn câu tiếng Trung phù hợp nhất cho nghĩa: \"Kinh nghiệm tất nhiên quan trọng, nhưng năng lực học hỏi còn quan trọng hơn.\"",
        "options": [
          "A. 经验固然重要，但学习能力更重要。",
          "B. 经验固然重要，但学习能力更重要。",
          "C. 经验固然重要，但学习能力更重要。"
        ],
        "correct": 0,
        "explanation": "Câu đúng là \"经验固然重要，但学习能力更重要。\" (jīngyàn gùrán zhòngyào, dàn xuéxí nénglì gèng zhòngyào). Chú ý: 固然 thường dùng trong lập luận trang trọng."
      }
    ]
  },
  {
    "id": "hsk6_grammar_9",
    "title": "9. 归根到底: xét đến cùng",
    "level": "HSK 6",
    "theory": "Công thức: 归根到底，Kết luận bản chất\n\nCách dùng: Dùng để rút về nguyên nhân/bản chất cuối cùng.\n\nLỗi thường gặp: Phù hợp với kết luận sâu, không dùng cho nhận xét quá nhỏ.",
    "examples": [
      {
        "zh": "归根到底，学习语言靠的是长期输入和输出。",
        "pinyin": "guīgēn dàodǐ, xuéxí yǔyán kào de shì chángqī shūrù hé shūchū",
        "vi": "Xét đến cùng, học ngôn ngữ dựa vào đầu vào và đầu ra lâu dài."
      }
    ],
    "quiz": [
      {
        "id": 1,
        "question": "Chọn câu tiếng Trung phù hợp nhất cho nghĩa: \"Xét đến cùng, học ngôn ngữ dựa vào đầu vào và đầu ra lâu dài.\"",
        "options": [
          "A. 归根到底，学习语言靠的是长期输入和输出。",
          "B. 归根到底，学习语言靠的是长期输入和输出。",
          "C. 归根到底，学习语言靠有长期输入和输出。"
        ],
        "correct": 0,
        "explanation": "Câu đúng là \"归根到底，学习语言靠的是长期输入和输出。\" (guīgēn dàodǐ, xuéxí yǔyán kào de shì chángqī shūrù hé shūchū). Chú ý: Phù hợp với kết luận sâu, không dùng cho nhận xét quá nhỏ."
      },
      {
        "id": 2,
        "question": "Điền từ thích hợp vào chỗ trống: \"归根到底，学习语言靠的 _______ 长期输入和输出。\" (Dịch nghĩa: Xét đến cùng, học ngôn ngữ dựa vào đầu vào và đầu ra lâu dài.)",
        "options": [
          "A. 是",
          "B. 的",
          "C. 了"
        ],
        "correct": 0,
        "explanation": "Điền \"是\" vào chỗ trống để tạo thành câu hoàn chỉnh: \"归根到底，学习语言靠的是长期输入和输出。\" (guīgēn dàodǐ, xuéxí yǔyán kào de shì chángqī shūrù hé shūchū)."
      }
    ]
  },
  {
    "id": "hsk6_grammar_10",
    "title": "10. 从某种意义上说: theo một nghĩa nào đó",
    "level": "HSK 6",
    "theory": "Công thức: 从某种意义上说，Nhận định\n\nCách dùng: Dùng để đưa ra quan điểm có giới hạn, tránh tuyệt đối hóa.\n\nLỗi thường gặp: Dùng để làm câu văn mềm và chín chắn hơn.",
    "examples": [
      {
        "zh": "从某种意义上说，错误也是学习的一部分。",
        "pinyin": "cóng mǒu zhǒng yìyì shàng shuō, cuòwù yě shì xuéxí de yíbùfen",
        "vi": "Theo một nghĩa nào đó, lỗi sai cũng là một phần của việc học."
      }
    ],
    "quiz": [
      {
        "id": 1,
        "question": "Chọn câu tiếng Trung phù hợp nhất cho nghĩa: \"Theo một nghĩa nào đó, lỗi sai cũng là một phần của việc học.\"",
        "options": [
          "A. 从某种意义上说，错误也是学习的一部分。",
          "B. 从某种意义上说，错误也是学习的一部分。",
          "C. 从某种意义上说，错误也有学习一部分。"
        ],
        "correct": 0,
        "explanation": "Câu đúng là \"从某种意义上说，错误也是学习的一部分。\" (cóng mǒu zhǒng yìyì shàng shuō, cuòwù yě shì xuéxí de yíbùfen). Chú ý: Dùng để làm câu văn mềm và chín chắn hơn."
      },
      {
        "id": 2,
        "question": "Điền từ thích hợp vào chỗ trống: \"从某种意义上说，错误也 _______ 学习的一部分。\" (Dịch nghĩa: Theo một nghĩa nào đó, lỗi sai cũng là một phần của việc học.)",
        "options": [
          "A. 是",
          "B. 的",
          "C. 了"
        ],
        "correct": 0,
        "explanation": "Điền \"是\" vào chỗ trống để tạo thành câu hoàn chỉnh: \"从某种意义上说，错误也是学习的一部分。\" (cóng mǒu zhǒng yìyì shàng shuō, cuòwù yě shì xuéxí de yíbùfen)."
      }
    ]
  },
  {
    "id": "hsk6_grammar_11",
    "title": "11. 换句话说: nói cách khác",
    "level": "HSK 6",
    "theory": "Công thức: Nhận định A。换句话说，Giải thích B\n\nCách dùng: Dùng để diễn giải lại cho rõ hơn.\n\nLỗi thường gặp: B phải giải thích hoặc nói lại A, không phải chuyển chủ đề.",
    "examples": [
      {
        "zh": "语言需要反复使用。换句话说，只背单词是不够的。",
        "pinyin": "yǔyán xūyào fǎnfù shǐyòng. huàn jù huà shuō, zhǐ bèi dāncí shì bú gòu de",
        "vi": "Ngôn ngữ cần được dùng lặp lại. Nói cách khác, chỉ học thuộc từ là chưa đủ."
      }
    ],
    "quiz": [
      {
        "id": 1,
        "question": "Chọn câu tiếng Trung phù hợp nhất cho nghĩa: \"Ngôn ngữ cần được dùng lặp lại. Nói cách khác, chỉ học thuộc từ là chưa đủ.\"",
        "options": [
          "A. 语言需要反复使用。换句话说，只背单词是不够的。",
          "B. 语言需要反复使用。换句话说，只背单词是不够的。",
          "C. 语言需要反复使用。换句话说，只背单词有不够。"
        ],
        "correct": 0,
        "explanation": "Câu đúng là \"语言需要反复使用。换句话说，只背单词是不够的。\" (yǔyán xūyào fǎnfù shǐyòng. huàn jù huà shuō, zhǐ bèi dāncí shì bú gòu de). Chú ý: B phải giải thích hoặc nói lại A, không phải chuyển chủ đề."
      },
      {
        "id": 2,
        "question": "Điền từ thích hợp vào chỗ trống: \"语言需要反复使用。换句话说，只背单词 _______ 不够的。\" (Dịch nghĩa: Ngôn ngữ cần được dùng lặp lại. Nói cách khác, chỉ học thuộc từ là chưa đủ.)",
        "options": [
          "A. 是",
          "B. 的",
          "C. 了"
        ],
        "correct": 0,
        "explanation": "Điền \"是\" vào chỗ trống để tạo thành câu hoàn chỉnh: \"语言需要反复使用。换句话说，只背单词是不够的。\" (yǔyán xūyào fǎnfù shǐyòng. huàn jù huà shuō, zhǐ bèi dāncí shì bú gòu de)."
      }
    ]
  },
  {
    "id": "hsk6_grammar_12",
    "title": "12. 不可否认: không thể phủ nhận",
    "level": "HSK 6",
    "theory": "Công thức: 不可否认，Nhận định\n\nCách dùng: Dùng để thừa nhận một sự thật quan trọng.\n\nLỗi thường gặp: Thường dùng trong văn nghị luận.",
    "examples": [
      {
        "zh": "不可否认，科技改变了我们的生活方式。",
        "pinyin": "bùkě fǒurèn, kējì gǎibiàn le wǒmen de shēnghuó fāngshì",
        "vi": "Không thể phủ nhận rằng công nghệ đã thay đổi cách sống của chúng ta."
      }
    ],
    "quiz": [
      {
        "id": 1,
        "question": "Chọn câu tiếng Trung phù hợp nhất cho nghĩa: \"Không thể phủ nhận rằng công nghệ đã thay đổi cách sống của chúng ta.\"",
        "options": [
          "A. 不可否认，科技改变了我们的生活方式。",
          "B. 不可否认，科技改变了他们的生活方式。",
          "C. 不可否认，科技改变了我们生活方式。"
        ],
        "correct": 0,
        "explanation": "Câu đúng là \"不可否认，科技改变了我们的生活方式。\" (bùkě fǒurèn, kējì gǎibiàn le wǒmen de shēnghuó fāngshì). Chú ý: Thường dùng trong văn nghị luận."
      },
      {
        "id": 2,
        "question": "Điền từ thích hợp vào chỗ trống: \" _______ 可否认，科技改变了我们的生活方式。\" (Dịch nghĩa: Không thể phủ nhận rằng công nghệ đã thay đổi cách sống của chúng ta.)",
        "options": [
          "A. 不",
          "B. 是",
          "C. 的"
        ],
        "correct": 0,
        "explanation": "Điền \"不\" vào chỗ trống để tạo thành câu hoàn chỉnh: \"不可否认，科技改变了我们的生活方式。\" (bùkě fǒurèn, kējì gǎibiàn le wǒmen de shēnghuó fāngshì)."
      }
    ]
  },
  {
    "id": "hsk6_grammar_13",
    "title": "13. 倘若 / 假如: giả sử nếu",
    "level": "HSK 6",
    "theory": "Công thức: 倘若/假如 + Điều kiện giả định，Kết quả\n\nCách dùng: Trang trọng hơn 如果, dùng trong văn viết hoặc lập luận.\n\nLỗi thường gặp: Không dùng quá nhiều trong hội thoại đời thường.",
    "examples": [
      {
        "zh": "倘若没有坚持，就很难看到真正的进步。",
        "pinyin": "tǎngruò méiyǒu jiānchí, jiù hěn nán kàndào zhēnzhèng de jìnbù",
        "vi": "Nếu không kiên trì, rất khó thấy được tiến bộ thật sự."
      }
    ],
    "quiz": [
      {
        "id": 1,
        "question": "Chọn câu tiếng Trung phù hợp nhất cho nghĩa: \"Nếu không kiên trì, rất khó thấy được tiến bộ thật sự.\"",
        "options": [
          "A. 倘若没有坚持，就很难看到真正的进步。",
          "B. 倘若没有坚持，就很难看到真正的进步。",
          "C. 倘若没有坚持，就很难看到真正进步。"
        ],
        "correct": 0,
        "explanation": "Câu đúng là \"倘若没有坚持，就很难看到真正的进步。\" (tǎngruò méiyǒu jiānchí, jiù hěn nán kàndào zhēnzhèng de jìnbù). Chú ý: Không dùng quá nhiều trong hội thoại đời thường."
      }
    ]
  },
  {
    "id": "hsk6_grammar_14",
    "title": "14. 鉴于: xét thấy / căn cứ vào",
    "level": "HSK 6",
    "theory": "Công thức: 鉴于 + Tình hình/Lý do，Quyết định/Kết luận\n\nCách dùng: Dùng trong văn bản trang trọng, thông báo, phân tích.\n\nLỗi thường gặp: Rất trang trọng; không dùng cho câu giao tiếp đơn giản.",
    "examples": [
      {
        "zh": "鉴于目前的情况，我们决定推迟会议。",
        "pinyin": "jiànyú mùqián de qíngkuàng, wǒmen juédìng tuīchí huìyì",
        "vi": "Xét tình hình hiện tại, chúng tôi quyết định hoãn cuộc họp."
      }
    ],
    "quiz": [
      {
        "id": 1,
        "question": "Chọn câu tiếng Trung phù hợp nhất cho nghĩa: \"Xét tình hình hiện tại, chúng tôi quyết định hoãn cuộc họp.\"",
        "options": [
          "A. 鉴于目前的情况，我们决定推迟会议。",
          "B. 鉴于目前的情况，他们决定推迟会议。",
          "C. 鉴于目前情况，我们决定推迟会议。"
        ],
        "correct": 0,
        "explanation": "Câu đúng là \"鉴于目前的情况，我们决定推迟会议。\" (jiànyú mùqián de qíngkuàng, wǒmen juédìng tuīchí huìyì). Chú ý: Rất trang trọng; không dùng cho câu giao tiếp đơn giản."
      }
    ]
  },
  {
    "id": "hsk6_grammar_15",
    "title": "15. 致使: dẫn đến / khiến cho",
    "level": "HSK 6",
    "theory": "Công thức: Nguyên nhân + 致使 + Kết quả xấu/nghiêm trọng\n\nCách dùng: Dùng trong văn viết để nói nguyên nhân gây ra kết quả.\n\nLỗi thường gặp: Thường dùng với kết quả tiêu cực hoặc nghiêm trọng.",
    "examples": [
      {
        "zh": "管理不当致使项目失败。",
        "pinyin": "guǎnlǐ bú dàng zhìshǐ xiàngmù shībài",
        "vi": "Quản lý không phù hợp dẫn đến dự án thất bại."
      }
    ],
    "quiz": [
      {
        "id": 1,
        "question": "Chọn câu tiếng Trung phù hợp nhất cho nghĩa: \"Quản lý không phù hợp dẫn đến dự án thất bại.\"",
        "options": [
          "A. 管理不当致使项目失败。",
          "B. 管理不当致使项目失败。",
          "C. 管理不当致使项目失败。"
        ],
        "correct": 0,
        "explanation": "Câu đúng là \"管理不当致使项目失败。\" (guǎnlǐ bú dàng zhìshǐ xiàngmù shībài). Chú ý: Thường dùng với kết quả tiêu cực hoặc nghiêm trọng."
      }
    ]
  },
  {
    "id": "hsk6_grammar_16",
    "title": "16. 从而: từ đó / nhờ vậy mà",
    "level": "HSK 6",
    "theory": "Công thức: Hành động/Điều kiện， 从而 + Kết quả\n\nCách dùng: Dùng để nối hành động với kết quả đạt được.\n\nLỗi thường gặp: 从而 thường dùng văn viết, không phải khẩu ngữ phổ thông.",
    "examples": [
      {
        "zh": "他不断练习，从而提高了口语水平。",
        "pinyin": "tā búduàn liànxí, cóng'ér tígāo le kǒuyǔ shuǐpíng",
        "vi": "Anh ấy luyện tập không ngừng, từ đó nâng cao trình độ khẩu ngữ."
      }
    ],
    "quiz": [
      {
        "id": 1,
        "question": "Chọn câu tiếng Trung phù hợp nhất cho nghĩa: \"Anh ấy luyện tập không ngừng, từ đó nâng cao trình độ khẩu ngữ.\"",
        "options": [
          "A. 他不断练习，从而提高了口语水平。",
          "B. 他不断练习，从而提高了口语水平。",
          "C. 他不断练习，从而提高了口语水平。"
        ],
        "correct": 0,
        "explanation": "Câu đúng là \"他不断练习，从而提高了口语水平。\" (tā búduàn liànxí, cóng'ér tígāo le kǒuyǔ shuǐpíng). Chú ý: 从而 thường dùng văn viết, không phải khẩu ngữ phổ thông."
      }
    ]
  },
  {
    "id": "hsk6_grammar_17",
    "title": "17. 乃至: thậm chí đến mức",
    "level": "HSK 6",
    "theory": "Công thức: A，乃至 B\n\nCách dùng: Dùng để mở rộng phạm vi hoặc tăng mức độ.\n\nLỗi thường gặp: 乃至 trang trọng hơn 甚至.",
    "examples": [
      {
        "zh": "学习习惯会影响成绩，乃至影响未来的发展。",
        "pinyin": "xuéxí xíguàn huì yǐngxiǎng chéngjì, nǎizhì yǐngxiǎng wèilái de fāzhǎn",
        "vi": "Thói quen học tập sẽ ảnh hưởng đến thành tích, thậm chí ảnh hưởng đến sự phát triển tương lai."
      }
    ],
    "quiz": [
      {
        "id": 1,
        "question": "Chọn câu tiếng Trung phù hợp nhất cho nghĩa: \"Thói quen học tập sẽ ảnh hưởng đến thành tích, thậm chí ảnh hưởng đến sự phát triển tương lai.\"",
        "options": [
          "A. 学习习惯会影响成绩，乃至影响未来的发展。",
          "B. 学习习惯会影响成绩，乃至影响未来的发展。",
          "C. 学习习惯会影响成绩，乃至影响未来发展。"
        ],
        "correct": 0,
        "explanation": "Câu đúng là \"学习习惯会影响成绩，乃至影响未来的发展。\" (xuéxí xíguàn huì yǐngxiǎng chéngjì, nǎizhì yǐngxiǎng wèilái de fāzhǎn). Chú ý: 乃至 trang trọng hơn 甚至."
      }
    ]
  },
  {
    "id": "hsk6_grammar_18",
    "title": "18. 以至于: đến mức mà",
    "level": "HSK 6",
    "theory": "Công thức: Mức độ/Nguyên nhân + 以至于 + Kết quả\n\nCách dùng: Dùng để nói mức độ dẫn tới kết quả.\n\nLỗi thường gặp: Kết quả sau 以至于 thường là hệ quả rõ ràng.",
    "examples": [
      {
        "zh": "他太忙了，以至于忘了吃饭。",
        "pinyin": "tā tài máng le, yǐzhìyú wàng le chī fàn",
        "vi": "Anh ấy quá bận đến mức quên ăn cơm."
      }
    ],
    "quiz": [
      {
        "id": 1,
        "question": "Chọn câu tiếng Trung phù hợp nhất cho nghĩa: \"Anh ấy quá bận đến mức quên ăn cơm.\"",
        "options": [
          "A. 他太忙了，以至于忘了吃饭。",
          "B. 他太忙了，以至于忘了吃饭。",
          "C. 他太忙了，以至于忘了吃饭。"
        ],
        "correct": 0,
        "explanation": "Câu đúng là \"他太忙了，以至于忘了吃饭。\" (tā tài máng le, yǐzhìyú wàng le chī fàn). Chú ý: Kết quả sau 以至于 thường là hệ quả rõ ràng."
      }
    ]
  },
  {
    "id": "hsk6_grammar_19",
    "title": "19. 可见: có thể thấy",
    "level": "HSK 6",
    "theory": "Công thức: Sự kiện/Hiện tượng，可见 + Kết luận\n\nCách dùng: Rút ra kết luận từ dữ kiện trước đó.\n\nLỗi thường gặp: Cần có căn cứ trước 可见.",
    "examples": [
      {
        "zh": "他每天都坚持练习，可见他很有毅力。",
        "pinyin": "tā měitiān dōu jiānchí liànxí, kějiàn tā hěn yǒu yìlì",
        "vi": "Anh ấy ngày nào cũng kiên trì luyện tập, có thể thấy anh ấy rất có nghị lực."
      }
    ],
    "quiz": [
      {
        "id": 1,
        "question": "Chọn câu tiếng Trung phù hợp nhất cho nghĩa: \"Anh ấy ngày nào cũng kiên trì luyện tập, có thể thấy anh ấy rất có nghị lực.\"",
        "options": [
          "A. 他每天都坚持练习，可见他很有毅力。",
          "B. 他每天都坚持练习，可见他很有毅力。",
          "C. 他每天都坚持练习，可见他很有毅力。"
        ],
        "correct": 0,
        "explanation": "Câu đúng là \"他每天都坚持练习，可见他很有毅力。\" (tā měitiān dōu jiānchí liànxí, kějiàn tā hěn yǒu yìlì). Chú ý: Cần có căn cứ trước 可见."
      }
    ]
  },
  {
    "id": "hsk6_grammar_20",
    "title": "20. 正所谓: đúng như câu nói...",
    "level": "HSK 6",
    "theory": "Công thức: 正所谓 + Thành ngữ/Câu nói，Ứng dụng vào tình huống\n\nCách dùng: Dùng để dẫn câu nói, thành ngữ, quan điểm quen thuộc.\n\nLỗi thường gặp: Không dùng nếu không có câu nói/thành ngữ phù hợp phía sau.",
    "examples": [
      {
        "zh": "正所谓，熟能生巧。",
        "pinyin": "zhèng suǒwèi, shú néng shēng qiǎo",
        "vi": "Đúng như câu nói: quen tay hay việc."
      }
    ],
    "quiz": [
      {
        "id": 1,
        "question": "Chọn câu tiếng Trung phù hợp nhất cho nghĩa: \"Đúng như câu nói: quen tay hay việc.\"",
        "options": [
          "A. 正所谓，熟能生巧。",
          "B. 正所谓，熟能生巧。",
          "C. 正所谓，熟能生巧。"
        ],
        "correct": 0,
        "explanation": "Câu đúng là \"正所谓，熟能生巧。\" (zhèng suǒwèi, shú néng shēng qiǎo). Chú ý: Không dùng nếu không có câu nói/thành ngữ phù hợp phía sau."
      }
    ]
  }
];

balanceAnswerPositions(GRAMMAR_DATA);
