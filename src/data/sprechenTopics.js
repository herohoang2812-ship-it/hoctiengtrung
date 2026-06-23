export const SPRECHEN_TOPICS = [
  {
    id: 1,
    level: 'HSK 1',
    type: 'Vai hội thoại (Mua trái cây ở chợ)',
    title: '在市场买水果 (Mua trái cây ở chợ)',
    scenario: 'Bạn đi chợ mua hoa quả. Bạn gặp người bán hàng (AI) để hỏi giá và mua táo.',
    prompts: [
      'Chào hỏi và hỏi giá táo (苹果多少钱一斤).',
      'Nói số lượng muốn mua (我要买三斤).',
      'Hỏi cách thanh toán và trả tiền (怎么付款/多少钱).'
    ],
    aiMessages: [
      { id: 1, sender: 'ai', text: '你好！买水果吗？今天的苹果很新鲜，尝尝吧。' },
      { id: 2, sender: 'user', text: '你好！请问这苹果一斤多少钱？' },
      { id: 3, sender: 'ai', text: '五块钱一斤。你想买几斤？' }
    ]
  },
  {
    id: 2,
    level: 'HSK 2',
    type: 'Vai hội thoại (Hẹn bạn đi xem phim)',
    title: '约朋友看电影 (Hẹn bạn đi xem phim)',
    scenario: 'Cuối tuần có phim mới. Bạn gọi điện hẹn một người bạn (AI) cùng đi xem phim vào tối thứ Bảy.',
    prompts: [
      'Hỏi xem bạn cuối tuần có rảnh không (你周末有空吗).',
      'Đề xuất đi xem phim mới (我们一起去看电影吧).',
      'Hẹn thời gian và địa điểm gặp mặt (星期六晚上七点在电影院门口见).'
    ],
    aiMessages: [
      { id: 1, sender: 'ai', text: '喂，小明！你星期六晚上有空吗？' },
      { id: 2, sender: 'user', text: '我有空，有什么好玩的活动吗？' },
      { id: 3, sender: 'ai', text: '听说最近上映了一部很有名的电影，我们要不要一起去看看？' }
    ]
  },
  {
    id: 3,
    level: 'HSK 3',
    type: 'Cùng lên kế hoạch (Đi dã ngoại)',
    title: '计划去郊游 (Lên kế hoạch đi dã ngoại)',
    scenario: 'Thời tiết cuối tuần rất đẹp. Bạn và bạn thân (AI) cùng thảo luận lập kế hoạch đi dã ngoại ngoại ô.',
    prompts: [
      'Đề xuất địa điểm phù hợp (森林公园/郊外).',
      'Thảo luận về phương tiện di chuyển (坐地铁还是骑自行车).',
      'Chuẩn bị đồ ăn, nước uống mang theo (准备面包、水果和水).'
    ],
    aiMessages: [
      { id: 1, sender: 'ai', text: '你好！这周末天气特别好，我们去郊外玩儿吧？你想去哪儿？' },
      { id: 2, sender: 'user', text: '好啊！我们可以去北边的森林公园，那里空气很好，风景也美。' },
      { id: 3, sender: 'ai', text: '太棒了！那我们怎么去呢？是坐地铁还是租车去比较方便？' }
    ]
  },
  {
    id: 4,
    level: 'HSK 4',
    type: 'Thuyết trình (Học qua phim ảnh)',
    title: '看电影学汉语 (Học tiếng Trung qua phim)',
    scenario: 'Bạn thực hiện bài thuyết trình ngắn (60-90 giây) trước lớp về lợi ích của việc học tiếng Trung qua xem phim và chương trình truyền hình.',
    prompts: [
      'Giải thích lý do xem phim giúp nâng cao khả năng nghe nói.',
      'Cách ghi chép và học từ vựng, khẩu ngữ thực tế từ phim.',
      'Nêu kinh nghiệm tự học của bản thân.'
    ],
    aiMessages: [
      { id: 1, sender: 'ai', text: '你好，我很期待你关于“看电影学汉语”的演示。请在准备好后开始。' },
      { id: 2, sender: 'user', text: '老师好，今天我给大家介绍看电影学汉语的好处。首先，电影里的语言很生活化，发音也很自然……' },
      { id: 3, sender: 'ai', text: '非常精彩。你提到看电影对口语有很大帮助。但如果遇到不懂的汉字和词汇，你一般是怎么解决的？' }
    ]
  },
  {
    id: 5,
    level: 'HSK 5',
    type: 'Thảo luận & Tranh luận (Người già và Công nghệ)',
    title: '老年人与智能科技 (Người già và Công nghệ thông minh)',
    scenario: 'Bạn và giám khảo (AI) thảo luận về thực trạng người cao tuổi gặp nhiều khó khăn khi tiếp cận công nghệ thông minh (di động, app thanh toán, quét mã).',
    prompts: [
      'Nêu thực trạng những khó khăn điển hình của người già trong đời sống số.',
      'Phân tích trách nhiệm của gia đình, con cái và xã hội.',
      'Đề xuất thiết kế giao diện thân thiện hoặc các dịch vụ hỗ trợ trực tiếp.'
    ],
    aiMessages: [
      { id: 1, sender: 'ai', text: '我认为现在智能技术发展太快了，比如坐车、去医院都得用手机扫码，很多老年人根本不会用，这很不公平。你怎么看？' },
      { id: 2, sender: 'user', text: '我完全同意。这种智能化的生活虽然方便了年轻人，但确实把很多老人排除在外了，给他们的出行和看病带来了极大不便。' },
      { id: 3, sender: 'ai', text: '对啊，很多人也忽视了这个问题。那在你看来，我们社会或者政府应该做些什么来改善这个状况呢？' }
    ]
  }
];
