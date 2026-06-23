export const BILLING_DISCOUNT = 0.2;

export const PRICING_PLANS = [
  {
    id: 'free', name: 'HSK Basic', eyebrow: 'Miễn phí', description: 'Làm quen và tự học có hướng dẫn', monthlyPrice: 0,
    features: [
      ['Diagnostic bằng logic minh bạch', true], ['Luyện Nghe/Đọc theo dạng HSK', true], ['Sổ lỗi và SRS cơ bản', true],
      ['Chấm nâng cao Viết/Nói', false], ['Luyện phát âm trực tuyến', false], ['Phân tích phát âm chuyên sâu', false],
    ],
  },
  {
    id: 'plus', name: 'HSK Plus', eyebrow: 'Học đều mỗi tuần', description: 'Phù hợp người học 3–4 buổi/tuần', monthlyPrice: 49000,
    quota: '20 lượt nâng cao · 60 phút phát âm/tháng',
    features: [
      ['Toàn bộ tính năng HSK Basic', true], ['20 lượt chấm hoặc hội thoại nâng cao', true], ['60 phút luyện phát âm', true],
      ['Nhận xét Diagnostic nâng cao', true], ['Lộ trình 30/60/90 ngày', true], ['Ưu tiên xử lý', false],
    ],
  },
  {
    id: 'pro', name: 'HSK Pro', eyebrow: 'Phổ biến nhất', description: 'Luyện thi tăng tốc và sửa bài thường xuyên', monthlyPrice: 99000, featured: true,
    quota: '60 lượt nâng cao · 180 phút phát âm/tháng',
    features: [
      ['Toàn bộ tính năng HSK Plus', true], ['60 lượt chấm hoặc hội thoại nâng cao', true], ['180 phút luyện phát âm', true],
      ['Phân tích phát âm và độ trôi chảy', true], ['Báo cáo lỗi lặp lại nâng cao', true], ['Ưu tiên xử lý', true],
    ],
  },
  {
    id: 'intensive', name: 'HSK Cấp tốc', eyebrow: 'Nước rút', description: 'Dành cho giai đoạn sát ngày thi', monthlyPrice: 199000,
    quota: '150 lượt nâng cao · 600 phút phát âm/tháng',
    features: [
      ['Toàn bộ tính năng HSK Pro', true], ['150 lượt chấm hoặc hội thoại nâng cao', true], ['600 phút luyện phát âm', true],
      ['Full test và báo cáo từng tuần', true], ['Lịch học nước rút cá nhân hóa', true], ['Hỗ trợ ưu tiên cao nhất', true],
    ],
  },
];

export const formatVnd = value => new Intl.NumberFormat('vi-VN').format(value);
export const getPlanPrice = (plan, billing) => billing === 'annual' ? Math.round(plan.monthlyPrice * (1 - BILLING_DISCOUNT) / 1000) * 1000 : plan.monthlyPrice;