export const BILLING_DISCOUNT = 0.2;

export const PRICING_PLANS = [
  {
    id: 'free', name: 'HSK Basic', eyebrow: 'Miễn phí', description: 'Trải nghiệm các tính năng học tập cơ bản', monthlyPrice: 0,
    features: [
      ['Diagnostic bằng logic minh bạch', true], ['Luyện Nghe/Đọc theo dạng HSK', true], ['Sổ lỗi và SRS cơ bản', true],
      ['Chấm nâng cao Viết/Nói', false], ['Luyện phát âm trực tuyến', false], ['Phân tích phát âm chuyên sâu', false],
    ],
  },
  {
    id: 'plus', name: 'HSK Premium', eyebrow: 'Phổ biến nhất', description: 'Mở khóa toàn bộ giới hạn và chấm bài nâng cao', monthlyPrice: 10000, featured: true,
    quota: '30 lượt chấm AI · 600 phút phát âm/tháng',
    features: [
      ['Toàn bộ tính năng HSK Basic', true], ['30 lượt chấm/hội thoại nâng cao', true], ['600 phút luyện phát âm', true],
      ['Nhận xét Diagnostic nâng cao', true], ['Lộ trình học cá nhân hóa', true], ['Ưu tiên xử lý nhanh nhất', true],
    ],
  },
];

export const formatVnd = value => new Intl.NumberFormat('vi-VN').format(value);
export const getPlanPrice = (plan, billing) => billing === 'annual' ? Math.round(plan.monthlyPrice * (1 - BILLING_DISCOUNT) / 1000) * 1000 : plan.monthlyPrice;