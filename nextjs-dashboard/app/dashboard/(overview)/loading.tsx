// loading.tsx：特別なNext.jsファイル
// ページのコンテンツの読み込み中に代替として表示される

import DashboardSkeleton from '@/app/ui/skeletons';

export default function Loading() {
    return <DashboardSkeleton />;
  }