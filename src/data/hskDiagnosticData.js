export const DIAGNOSTIC_SECTIONS = [
  { id: 'lesen', label: '阅读 (Luyện đọc)', minutes: 8, description: 'Đọc hiểu chi tiết, nắm ý chính và suy luận.' },
  { id: 'hoeren', label: '听力 (Luyện nghe)', minutes: 7, description: 'Nghe hiểu ý chính và thông tin chi tiết.' },
  { id: 'schreiben', label: '写作 (Luyện viết)', minutes: 12, description: 'Viết một bài luận ngắn thể hiện quan điểm cá nhân.' },
  { id: 'sprechen', label: '口语 (Luyện nói)', minutes: 8, description: 'Thuyết trình ngắn theo chủ đề bằng tiếng Trung.' },
];

export const DIAGNOSTIC_LESEN = {
  passage: `学习汉语的人常常觉得汉字很难，因为汉字有很多笔画，而且读音和字形没有直接的关系。但是，汉字也有它的规律。如果你了解汉字的偏旁部首，就能猜出很多词的意思。比如，“氵”旁（三点水）的字多与水有关，如“江、河、湖、海”等。因此，系统地学习汉字部首不仅能提高阅读速度，还能帮助我们记住更多的新词。很多老师建议，初学者应该从常用部首开始学起，这样可以事半功倍。`,
  questions: [
    { id: 'DL1', question: '为什么很多人觉得汉字很难学？', options: ['汉字笔画多且字音字形无直接关系', '因为汉字发音太快', '因为汉字的偏旁部首太少'], correct: 0, skill: 'Ý chính' },
    { id: 'DL2', question: '了解偏旁部首有什么好处？', options: ['可以直接考满分', '能帮助猜出字义并提高阅读速度', '可以不用练习写字'], correct: 1, skill: 'Chi tiết' },
    { id: 'DL3', question: '“氵”（三点水）旁的字通常与什么有关？', options: ['火 (Lửa)', '木 (Cây)', '水 (Nước)'], correct: 2, skill: 'Suy luận' },
    { id: 'DL4', question: '老师给初学者什么建议？', options: ['只学习听力', '从常用部首开始学习', '完全不用写汉字'], correct: 1, skill: 'Paraphrase' },
  ],
};

export const DIAGNOSTIC_HOEREN = [
  { id: 'DH1', speaker: '广播员', text: '各位旅客请注意：去上海的火车就要开动了，请您尽快上车。带好您的随身物品，注意安全。', question: '去上海的火车怎么了？', options: ['已经开走了', '马上就要开了', '晚点三十分钟'], correct: 1, skill: 'Thông tin cụ thể' },
  { id: 'DH2', speaker: '男生', text: '我以前喜欢一个人跑步。现在我觉得跟朋友在一起打篮球更有意思，还可以交到很多新朋友。', question: '说话人现在喜欢做什么运动？', options: ['跟朋友打篮球', '一个人跑步', '在家看电视'], correct: 0, skill: 'Ý chính' },
  { id: 'DH3', speaker: '气象预报', text: '因为明天要下大雨，所以我们决定取消去公园爬山的活动，留在家里看电影。', question: '他们明天打算做什么？', options: ['去公园爬山', '去学校上课', '留在家里看电影'], correct: 2, skill: 'Kết hợp chi tiết' },
  { id: 'DH4', speaker: '职场专家', text: '随着互联网和手机软件的发展，现在的年轻人几乎不需要去银行排队办理业务了，直接在手机上就能轻松搞定。', question: '年轻人现在主要怎么办理银行业务？', options: ['使用手机软件', '去银行排队', '写信给银行'], correct: 0, skill: 'Điều kiện & paraphrase' },
];

export const DIAGNOSTIC_WRITING = {
  title: '网购比实体店购物更好吗？ (Mua sắm trực tuyến tốt hơn mua sắm trực tiếp?)',
  prompt: '请用中文写一篇大约 80-100 字的短文。说明你的观点、一个优点、一个缺点并给出你的建议。',
  requirements: ['表达观点 (quan điểm)', '列出优点 (ưu điểm)', '列出缺点 (nhược điểm)', '提出建议 (đề xuất/lời khuyên)'],
};

export const DIAGNOSTIC_SPEAKING = {
  title: '你应该在大城市还是小城镇工作？ (Nên làm việc ở thành phố lớn hay thị trấn nhỏ?)',
  prompt: '请用中文说一段 60-90 秒的论述：介绍主题、表达观点、给出一个例子并总结。支持录音或直接输入文本。',
};