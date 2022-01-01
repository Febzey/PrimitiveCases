import Banner from "../Components/Main/Banner"
import SecondBanner from '../Components/Main/SecondBanner';
import MainItems from '../Components/Main/Items/MainItems';
import SwitchCategory from "../Components/Main/SwitchCategory";
import BelowItems from "../Components/Main/BelowItems";

const MainnPage = ({ items, addItemsToCarts, setWhichCard, whichCard }) => {
    return (
        <div className="dark:bg-zinc-900">
            
            <div className="h-[100vh]">
                <Banner />
                <SecondBanner />
            </div>
            
            <div className="flex flex-col md:flex-row py-24">
                <SwitchCategory setWhichCard={setWhichCard} whichCard={whichCard} />
                
                { whichCard.objectsArray.length >  1 &&
                    <MainItems items={items} addItemsToCarts={addItemsToCarts} whichCard={whichCard}/>
                }
            </div>

            <BelowItems/>

        </div>
    )
};
export default MainnPage;