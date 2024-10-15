import Header from "./components/header";
import Footer from "./components/footer";
import Link from 'next/link';

export default function Home() {
  return(<div><Header/>
    <div className="page">
    
      <div className="card">
        <div className="image"><img src="https://weekendatthecottage.com/wp-content/uploads/2016/10/AvocadoToast5.jpg" alt="pic1"/></div>
        <h1 className="title">Avocado Toast</h1>
          <div className="description">Toasted bread topped with mashed avocado, often garnished with <br/>salt, pepper, and a squeeze of lime.</div>
          <button className="button">Get Recipe</button>
      </div>

      <div className="card">
        <div className="image"><img src="https://images.services.kitchenstories.io/8OjqS2ypvWStDdcOl882SLW1p9g=/3840x0/filters:quality(80)/images.kitchenstories.io/wagtailOriginalImages/R2726-photo-final-2.jpg" alt="pic2" /></div>
        <h1 className="title">Pancakes</h1>
          <div className="description">Soft, fluffy cakes made from a batter of flour, eggs, and milk, typically served with butter and syrup.</div>
          <button className="button">Get Recipe</button>
      </div>

      <div className="card">
        <div className="image"><img src="https://images.immediate.co.uk/production/volatile/sites/30/2022/12/Smoothie-bowl-16df176.jpg" alt="pic3"/></div>
        <h1 className="title">Smoothie Bowl</h1>
          <div className="description">A thick, blended smoothie made with fruits, yogurt, and milk, served <br/>in a bowl with granola, nuts, seeds, and fresh fruits.</div>
          <button className="button">Get Recipe</button>
      </div>

      <div className="card">
        <div className="image"><img src="https://www.healthyfood.com/wp-content/uploads/2018/02/Basic-omelette.jpg" alt="pic4"/></div>
        <h1 className="title">Omelette</h1>
          <div className="description">A beaten egg dish cooked with fillings like cheese, vegetables, ham, <br/>or mushrooms, folded into a semicircle.</div>
          <button className="button">Get Recipe</button>
      </div>

      <div className="card">
        <div className="image"><img src="https://www.allrecipes.com/thmb/BmnDvAZyG_N-R3jhVQxGAF_szG0=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/261844-freeze-and-reheat-breakfast-burritos-ddmfs-3X4-0359-8c6dd90974a545ddab2504633cd43f00.jpg" alt="pic5"/></div>
        <h1 className="title">Breakfast Burrito</h1>
          <div className="description">A tortilla filled with scrambled eggs, cheese, beans, salsa, and <br/>sausage, wrapped tightly for an on-the-go meal.</div>
          <button className="button">Get Recipe</button>
      </div>

      <div className="card">
        <div className="image"><img src="https://www.beyondthechickencoop.com/wp-content/uploads/2023/05/Greek-Yogurt-Berry-Parfait-4.jpg" alt="pic6"/></div>
        <h1 className="title">Greek Yogurt with Granola</h1>
          <div className="description">Creamy Greek yogurt paired with crunchy granola, fresh fruits, and honey for a protein-packed, refreshing breakfast.</div>
          <button className="button">Get Recipe</button>
      </div>
    </div>
    <Footer/>
    </div>
  )
}