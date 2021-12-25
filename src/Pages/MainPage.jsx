import Banner from "../Components/Main/Banner"
import SecondBanner from '../Components/Main/SecondBanner';
import MainItems from '../Components/Main/Items/MainItems';
import SwitchCategory from "../Components/Main/SwitchCategory";

const MainnPage = ({ items, addItemsToCarts, setWhichCard, whichCard }) => {
    return (
        <div className="dark:bg-zinc-900">
            <div className="h-[100vh]">
                <Banner />
                <SecondBanner />
            </div>
            
            <div className="flex flex-col md:flex-row">

                <SwitchCategory setWhichCard={setWhichCard} whichCard={whichCard} />
                <MainItems items={items} addItemsToCarts={addItemsToCarts} whichCard={whichCard} />

            </div>



        </div>
    )
};
export default MainnPage;