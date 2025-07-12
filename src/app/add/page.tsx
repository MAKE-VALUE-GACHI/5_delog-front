import Header from '@/components/layout/Header';
import AICard from './_components/AICard';
import MenuList from './_components/MenuList';
import Cost from './_components/Cost';
import DeliveryDate from './_components/DeliveryDate';
import PostButton from './_components/PostButton';

export default function Page() {
    return (
        <div className="p-4">
            <Header type="back" title="내역 추가" />
            <AICard />
            <MenuList />
            <Cost />
            <DeliveryDate />
            <PostButton />
        </div>
    );
}
