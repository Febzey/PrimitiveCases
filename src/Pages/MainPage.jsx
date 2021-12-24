import Banner from "../Components/Main/Banner"
import SecondBanner from '../Components/Main/SecondBanner';
import MainItems from '../Components/Main/Items/MainItems';
import SwitchCategory from "../Components/Main/SwitchCategory";

const MainnPage = ({ items, addItemsToCarts, changeCategory, whichCard }) => {
    return (
        <div className="dark:bg-zinc-900">
            <Banner />
            <SecondBanner />
            <SwitchCategory changeCategory={changeCategory} />
            <MainItems items={items} addItemsToCarts={addItemsToCarts} whichCard={whichCard} />
        </div>
    )
};
export default MainnPage;