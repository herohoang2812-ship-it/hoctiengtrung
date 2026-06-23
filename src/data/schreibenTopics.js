export const SCHREIBEN_TOPICS = [
  {
    id: 1,
    level: 'HSK 1',
    type: 'Đoạn văn ngắn (Giới thiệu bản thân)',
    title: '介绍自己 (Giới thiệu bản thân)',
    description: 'Hãy viết một đoạn văn ngắn (khoảng 20-30 chữ) giới thiệu về bản thân bạn: tên, tuổi, quốc tịch và bạn thích học tiếng Trung không.',
    points: [
      'Giới thiệu họ tên (你叫什么名字).',
      'Nói về tuổi và quốc tịch (你多大，你是哪国人).',
      'Bày tỏ sở thích học tiếng Trung (你喜欢学习汉语吗).'
    ],
    redemittel: [
      { zh: '我叫……', vi: 'Tôi tên là...' },
      { zh: '我是越南人。', vi: 'Tôi là người Việt Nam.' },
      { zh: '我今年……岁。', vi: 'Tôi năm nay... tuổi.' },
      { zh: '我很喜欢学习汉语。', vi: 'Tôi rất thích học tiếng Trung.' }
    ],
    defaultText: '你好！我叫小明，我是越南人。我今年二十岁。我……'
  },
  {
    id: 2,
    level: 'HSK 2',
    type: 'Đoạn văn ngắn (Kể về cuối tuần)',
    title: '我的周末 (Cuối tuần của tôi)',
    description: 'Hãy viết một đoạn văn ngắn (khoảng 40-50 chữ) kể về những việc bạn thường làm vào ngày cuối tuần (Thứ Bảy và Chủ Nhật).',
    points: [
      'Cho biết bạn thường làm gì vào sáng cuối tuần.',
      'Kể về người bạn đi chơi cùng hoặc cùng làm việc gì đó.',
      'Cảm xúc của bạn về ngày cuối tuần.'
    ],
    redemittel: [
      { zh: '周末我常常……', vi: 'Cuối tuần tôi thường...' },
      { zh: '我和朋友一起去……', vi: 'Tôi cùng bạn bè đi...' },
      { zh: '我觉得周末很开心。', vi: 'Tôi cảm thấy cuối tuần rất vui vẻ.' }
    ],
    defaultText: '周末我常常在家学习。星期六下午，我和朋友一起去……'
  },
  {
    id: 3,
    level: 'HSK 3',
    type: 'Thư cá nhân (Rủ bạn đi du lịch)',
    title: '邀请朋友去旅游 (Mời bạn đi du lịch)',
    description: 'Bạn đang chuẩn bị đi du lịch Bắc Kinh vào tháng sau. Hãy viết một email (khoảng 60-80 chữ) cho một người bạn Trung Quốc tên là Trương Đông để rủ anh ấy đi cùng.',
    points: [
      'Giải thích lý do viết thư.',
      'Đề xuất thời gian và cách di chuyển.',
      'Hỏi ý kiến bạn và mong chờ phản hồi.'
    ],
    redemittel: [
      { zh: '我想邀请你和我一起去……', vi: 'Tôi muốn mời bạn cùng tôi đi...' },
      { zh: '我们打算下个月……去。', vi: 'Chúng tôi dự định tháng sau... đi.' },
      { zh: '你觉得怎么样？', vi: 'Bạn thấy thế nào?' },
      { zh: '期待你的回信。', vi: 'Mong chờ thư hồi âm của bạn.' }
    ],
    defaultText: '张东：\n你好！我写这封信是想邀请你和我一起去北京旅游。我打算下个月……'
  },
  {
    id: 4,
    level: 'HSK 4',
    type: 'Bài đăng diễn đàn (Bày tỏ quan điểm)',
    title: '智能手机的利与弊 (Lợi và hại của điện thoại thông minh)',
    description: 'Viết một bài viết ngắn (khoảng 80-120 chữ) đăng trên diễn đàn trực tuyến bày tỏ quan điểm của bạn về lợi ích và tác hại của điện thoại thông minh đối với cuộc sống của giới trẻ hiện nay.',
    points: [
      'Bày tỏ thái độ của bạn về việc sử dụng điện thoại thông minh.',
      'Nêu ra những lợi ích (học tập, liên lạc, giải trí).',
      'Nêu ra tác hại (lãng phí thời gian, ảnh hưởng sức khỏe).',
      'Đề xuất giải pháp sử dụng hợp lý.'
    ],
    redemittel: [
      { zh: '在我看来，智能手机……', vi: 'Theo tôi, điện thoại thông minh...' },
      { zh: '一方面，它可以帮助我们……', vi: 'Một mặt, nó có thể giúp chúng ta...' },
      { zh: '另一方面，过度使用会导致……', vi: 'Mặt khác, sử dụng quá độ sẽ dẫn đến...' },
      { zh: '总而言之，我们应该合理利用它。', vi: 'Tóm lại, chúng ta nên sử dụng nó một cách hợp lý.' }
    ],
    defaultText: '现在，几乎每个年轻人都有一部智能手机。在我看来，智能手机对我们的生活有很大的影响。一方面，……'
  },
  {
    id: 5,
    level: 'HSK 5',
    type: 'Bài luận học thuật (Luận xã hội)',
    title: '网购对实体店的影响 (Ảnh hưởng của mua sắm trực tuyến tới cửa hàng truyền thống)',
    description: 'Hãy viết một bài luận ngắn (khoảng 150-200 chữ) thảo luận về tác động của sự phát triển mua sắm trực tuyến (网购) đối với các cửa hàng truyền thống (实体店).',
    points: [
      'Giới thiệu sự phổ biến của mua sắm trực tuyến hiện nay.',
      'Phân tích vì sao mua sắm trực tuyến lại thu hút người mua (tiện lợi, giá rẻ).',
      'Giải thích khó khăn mà các cửa hàng truyền thống gặp phải.',
      'Đưa ra đề xuất hoặc giải pháp giúp cửa hàng truyền thống thích nghi và tồn tại.'
    ],
    redemittel: [
      { zh: '随着网络技术的发展，网购变得……', vi: 'Cùng với sự phát triển của công nghệ mạng, mua sắm trực tuyến trở nên...' },
      { zh: '这给传统实体店带来了巨大的挑战。', vi: 'Điều này mang đến thách thức to lớn cho cửa hàng truyền thống.' },
      { zh: '然而，实体店也有其独特的优势，比如……', vi: 'Tuy nhiên, cửa hàng truyền thống cũng có ưu thế độc đáo của nó, như...' },
      { zh: '因此，实体店必须进行转型和升级。', vi: 'Do đó, cửa hàng truyền thống phải tiến hành chuyển đổi và nâng cấp.' }
    ],
    defaultText: '随着互联网的普及，网购已经成为人们生活的一部分。这不仅改变了人们的消费习惯，也给实体店带来了深远的影响。首先，……'
  }
];
