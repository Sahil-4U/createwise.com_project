import React from 'react'
import SectionOne from './SectionOne';
import SectionTwo from './SectionTwo';
import SectionThree from './SectionThree';
import OnSaleProducts from './productspage/OnSaleProducts';
import SectionFour from './SectionFour';
import Popularproducts from './productspage/Popularproducts';
import SectionFive from './SectionFive';
import Sectionsix from './Sectionsix';
import FooterOne from '../footersection/FooterOne';
import FooterTwo from '../footersection/FooterTwo';

function Dashboard() {
    return (
        <div>
            <SectionOne />
            <SectionTwo />
            <SectionThree heading={"ON SALE"} text={'Add best products line up'} />
            <div className='sale-product-page'>
                <OnSaleProducts url={'https://media.istockphoto.com/id/1297634233/vector/realistic-detailed-3d-peanut-butter-spread-set-vector.jpg?s=612x612&w=0&k=20&c=2wtjJ0alzDorGMFtYXwUQSKHbUkzM972Nz7F22NWDIM='} productname={'Product Name'} weight={'500 gm'} pricevalue={'$45.95'} />
                <OnSaleProducts url={'https://media.istockphoto.com/id/1297634233/vector/realistic-detailed-3d-peanut-butter-spread-set-vector.jpg?s=612x612&w=0&k=20&c=2wtjJ0alzDorGMFtYXwUQSKHbUkzM972Nz7F22NWDIM='} productname={'Product Name'} weight={'500 gm'} pricevalue={'$45.95'} />
                <OnSaleProducts url={'https://media.istockphoto.com/id/1297634233/vector/realistic-detailed-3d-peanut-butter-spread-set-vector.jpg?s=612x612&w=0&k=20&c=2wtjJ0alzDorGMFtYXwUQSKHbUkzM972Nz7F22NWDIM='} productname={'Product Name'} weight={'500 gm'} pricevalue={'$45.95'} />
                <OnSaleProducts url={'https://media.istockphoto.com/id/1297634233/vector/realistic-detailed-3d-peanut-butter-spread-set-vector.jpg?s=612x612&w=0&k=20&c=2wtjJ0alzDorGMFtYXwUQSKHbUkzM972Nz7F22NWDIM='} productname={'Product Name'} weight={'500 gm'} pricevalue={'$45.95'} />
            </div>
            <SectionFour />
            <div style={{ display: 'flex', alignItems: 'center', flexWrap: 'wrap-reverse', paddingLeft: '4em' }}>
                <Popularproducts link={'https://media.istockphoto.com/id/488182109/photo/chocolates.jpg?s=612x612&w=0&k=20&c=OAzD-G8GZZfzb5bgZ5CJd_PdSIJqdnInLmEeeiDGRe0='} />
                <Popularproducts link={'https://media.istockphoto.com/id/992766536/photo/box-of-chocolate-candy.jpg?s=612x612&w=0&k=20&c=SXfwT6Pk9KigHt47MYEqbDiZ-TmaFhjwF08bijp1cYw='} />

                <Popularproducts link={'https://media.istockphoto.com/id/488182109/photo/chocolates.jpg?s=612x612&w=0&k=20&c=OAzD-G8GZZfzb5bgZ5CJd_PdSIJqdnInLmEeeiDGRe0='} />

                <Popularproducts link={'https://media.istockphoto.com/id/992766536/photo/box-of-chocolate-candy.jpg?s=612x612&w=0&k=20&c=SXfwT6Pk9KigHt47MYEqbDiZ-TmaFhjwF08bijp1cYw='} />
            </div>
            <div style={{ marginTop: '2rem' }}>
                <SectionFive link={'https://thumbs.dreamstime.com/z/illustration-jar-peanut-butter-bread-design-template-flat-vector-place-text-advertising-flyer-greetings-card-146273434.jpg'} />
            </div>
            <div>
                <Sectionsix />
            </div>
            <div>
                <FooterOne />
            </div>
            <div>
                <FooterTwo />
            </div>
        </div >
    )
}

export default Dashboard;