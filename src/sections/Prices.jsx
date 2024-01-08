import PriceCard from "../components/PriceCard"

const Prices = () => {
  return (
    <div className="flex xl:flex-row md:flex-row flex-col xl:mx-64 mx-8 xl:gap-20 gap-4 py-32">
        <PriceCard title='Pre-Order' price='$1,359/mo' list={['Free Maintenance', 'Insurance Cover', '25/7 Support', 'Free Upgrades']}/>
        <PriceCard title='Full Payment' price='$80,999' list={['2 Years Warranty', 'Full Insurance Cover', 'Lifetime Support', 'All-inclusive']}/>
    </div>
  )
}

export default Prices