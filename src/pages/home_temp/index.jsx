import React, { useState, useEffect, useMemo } from 'react';
import { Link } from "react-router-dom"; 
import HomeSlider from '../../components/HomeSlider';
import HomeCatSlider from '../../components/HomeCatSlider';
import AdsBannerSlider from "../../components/AdsBannerSlider";
import ProductsSlider from "../../components/ProductsSlider";
import PromoSlider from "../../components/PromoSlider";
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import ServiceHighlights from "../../components/ServiceHighlights";
import MegaMenu from "../../components/MegaMenu";
import FlashSaleCountdown from "../../components/FlashSaleTimer";
import MegaSaleBanner from "../../components/MegaSaleBanner";
import BlogSection from "../../components/BlogSection";

const Home = () => {
  const [value, setValue] = useState(0);
  const [allProducts, setAllProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  // Fetch products from backend
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const res = await fetch(`${import.meta.env.VITE_API_URL}/products`);
        const data = await res.json();
        setAllProducts(data);
      } catch (error) {
        console.error("Error fetching products:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchProducts();
  }, []);

 // Filter in-stock products only
const inStockProducts = useMemo(
  () => allProducts.filter(p => p.countInStock > 0),
  [allProducts]
);

// ✅ Sections with toggles
const featuredProducts = useMemo(
  () => inStockProducts.filter(p => p.isFeatured || p.featured),
  [inStockProducts]
);

const popularProducts = useMemo(
  () => inStockProducts.filter(p => p.isPopular || p.popular),
  [inStockProducts]
);

const latestProducts = useMemo(
  () => [...inStockProducts]
    .sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt))
    .filter(p => p.isLatest || p.latest || true), // fallback to all in-stock if missing
  [inStockProducts]
);

const beautyProducts = useMemo(
  () => inStockProducts.filter(p => (p.category?.toLowerCase() === "beauty")),
  [inStockProducts]
);


  if (loading) {
    return <div className="py-20 text-center text-xl">Loading products...</div>;
  }

  return (
    <>
      <HomeSlider />
      <HomeCatSlider />
      <MegaSaleBanner />
      <FlashSaleCountdown />

      {/* PROMO + 4 IMAGE SLIDER SECTION */}
     <section className="overflow-hidden bg-white py-6">
  <div className="container mx-auto flex max-w-full flex-col gap-5 overflow-hidden lg:flex-row">
          <div className="part1 relative h-[250px] w-full min-w-0 overflow-hidden sm:h-[320px] lg:h-[430px] lg:w-[70%]">
            <PromoSlider />
          </div>

          <div className="flex w-full min-w-0 flex-col gap-4 sm:flex-row lg:w-[30%] lg:flex-col">
            <div className="bannerBoxV2 group relative overflow-hidden rounded-md">
              <img src="JD.jpg" className="h-[170px] w-full object-cover transition-all duration-150 group-hover:scale-105 md:h-[200px] lg:h-[215px]" alt="Dream Offer"/>
              <div className="absolute left-0 top-0 z-50 flex h-full flex-col justify-center gap-2 p-6 text-white">
                <h2 className="font-bold text-[#ff5252] text-[18px] lg:text-[28px]">Dream Offer</h2>
                <span className="font-bold text-[#ff5252] text-[30px]">20%</span>
                <Link to="/productListing/Jewellery" className="mt-4 w-max rounded-md bg-[#ff5252] px-5 py-2 font-semibold hover:bg-[#e64545]">SHOP NOW</Link>
              </div>
            </div>

            <div className="bannerBoxV2 group relative overflow-hidden rounded-md">
              <img src="FT1.jpg" className="h-[170px] w-full object-cover transition-all duration-150 group-hover:scale-105 md:h-[200px] lg:h-[215px]" alt="Footwear Offer"/>
              <div className="absolute left-0 top-0 z-50 flex h-full flex-col justify-center gap-2 p-6 text-white">
                <h2 className="font-bold text-[#ff5252] text-[18px] lg:text-[28px]">Buy Shoes On</h2>
                <span className="font-bold text-[#ff5252] text-[30px]">50%</span>
                <Link to="/productListing/Footwear" className="mt-4 w-max rounded-md bg-[#ff5252] px-5 py-2 font-semibold hover:bg-[#e64545]">SHOP NOW</Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* POPULAR PRODUCTS */}
      <section className="bg-white py-8">
        <div className="container mx-auto">
          <div className="flex items-center justify-between">
            <div className="leftsec mb-3 w-full lg:mb-0 lg:w-[40%]">
              <h2 className="font-[600] text-[20px]">Popular Products</h2>
              <p className="text-[14px]">Do not miss the current offers.</p>
            </div>

            <div className="rightsec group relative w-full overflow-x-auto lg:w-[60%]">
              <Tabs
                value={value}
                onChange={handleChange}
                variant="scrollable"
                scrollButtons="auto"
              >
                <Tab label="Fashion" component={Link} to="/productListing/Fashion" />
                <Tab label="Electronics" component={Link} to="/productListing/Electronics" />
                <Tab label="Bags" component={Link} to="/productListing/Bags" />
                <Tab label="Footwear" component={Link} to="/productListing/Footwear" />
                <Tab label="Groceries" component={Link} to="/productListing/Groceries" />
                <Tab label="Beauty" component={Link} to="/productListing/Beauty" />
                <Tab label="Accessories" component={Link} to="/productListing/Accessories" />
                <Tab label="Jewelery" component={Link} to="/productListing/Jewelery" />
                <Tab label="Furniture" component={Link} to="/productListing/Furniture" />
                <Tab label="Perfumes" component={Link} to="/productListing/Perfumes" />
              </Tabs>
              <MegaMenu />
            </div>
          </div>

          <ProductsSlider items={5} products={popularProducts} />
        </div>
      </section>

      {/* LATEST PRODUCTS */}
      <section className="bg-white py-6">
        <div className="container mx-auto">
          <h2 className="mb-3 text-xl font-bold">Latest Products</h2>
          <ProductsSlider items={5} products={latestProducts} />
        </div>
      </section>

      {/* FEATURED PRODUCTS */}
      <section className="bg-white py-6">
        <div className="container mx-auto">
          <h2 className="mb-3 text-xl font-bold">Featured Products</h2>
          <ProductsSlider items={5} products={featuredProducts} />
          <div className="mt-6 py-5">
            <AdsBannerSlider items={4} />
          </div>
        </div>
      </section>

      {/* BEAUTY PRODUCTS */}
      <section className="bg-white py-6">
        <div className="container mx-auto">
          <h2 className="mb-3 text-xl font-bold">Beauty Products</h2>
          <ProductsSlider items={5} products={beautyProducts} />
        </div>
      </section>

      <BlogSection />
      <ServiceHighlights />
    </>
  );
};

export default Home;
