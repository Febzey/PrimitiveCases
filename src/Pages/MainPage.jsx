import Banner from "../Components/Main/Banner"
import SecondBanner from '../Components/Main/SecondBanner';
import MainItems from '../Components/Main/Items/MainItems';

const MainnPage = ({ items, addItemsToCarts }) => {
    return (
        <div className="dark:bg-zinc-900">
            <Banner />
            <SecondBanner />
            <MainItems items={items} addItemsToCarts={addItemsToCarts} />
        </div>
    )
};

export default MainnPage;