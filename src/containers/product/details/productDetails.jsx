import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import PrimaryButton from "../../../components/buttons/primaryButton";
import PRODUCT_DATA from "../../../mock/product_data";
import { useNavigate } from 'react-router-dom';

const ProductDetails = () => {

  const { id } = useParams();
  const [data, setData] = useState([]);
  const naviagate = useNavigate()

  const [price, setPrice] = useState(0);
  const [selected, setSelected] = useState({});


  const updatePrice = (item, varient) => {
    const selectionObject = JSON.parse(JSON.stringify(selected))
    if(selectionObject[varient]?.title === item.title) {
      selectionObject[varient] = {}
    } else {
      selectionObject[varient] = item
    }
    setSelected(selectionObject);
  };

  const sendTocart = () => {
    var allitems = JSON.parse(localStorage.getItem("cart")) || [];
    var des = [];
    for (let x in selected) {
      des.push(x + " : " + selected[x].title);
    }
    allitems.push({
      id: data[0].id,
      img: data[0].img,
      title: data[0].title,
      price: price,
      description: des,
      quantity: 1
    });
    localStorage.setItem("cart", JSON.stringify(allitems));
    naviagate('/shop/products')
  };

  useEffect(() => {
    if (id) {
      const d = PRODUCT_DATA.filter((e) => e.id === id);
      setPrice(d[0].price)
      setData(d)
    }
  }, [id]);

  useEffect(() => {
    if(data[0]?.price) {
      let price = 0;
      for(let v in selected) {
        price += (selected[v]?.price || 0)
      }
      setPrice(data[0]?.price + price);
    }
  }, [selected])

  return (
    <div className='w-full'>
      {data && data.length ? (
        <div className='w-full'>
          <div className='flex flex-col justify-center items-center'>
            <div className="text-5xl uppercase font-bold tracking-widest">Product # {data[0].id}</div>
            <div className="text-3xl uppercase font-bold tracking-widest">{data[0].brand} Brand</div>
          </div>

          <div className='p-2 grid grid-cols-2 gap-4 mt-10'>
            <div className='w-full flex justify-center bg-gray-200/50 rounded shadow-inner'>
              <img src={data[0].img} alt={data[0].title} className='w-3/4' />
            </div>
            <div className='w-full'>
              <div className="text-3xl font-bold">
                {data[0].title}
              </div>
              <div className='text-2xl tracking-widest'>
                {data[0].description}
              </div>
              <div className='text-xl tracking-widest font-semibold my-4'>
                Price - ${price}
              </div>

              <div className='mt-10'>
                {data[0].varients.map((varient, idx) => (
                  <div key={idx} className='mt-10'>
                    <div className='text-xl font-extrabold'>{varient.title}</div>
                    <div className='flex items-center gap-4 mt-2'>
                      {varient.items.map((item, idx) => (
                        <div key={idx} className={`border p-4 cursor-pointer hover:bg-violet-500 hover:text-white rounded ${selected?.[varient.title]?.title === item?.title ? "bg-violet-500 text-white" : ""}`}  onClick={() => updatePrice(item, varient.title)}>
                          {item.title}
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
              <div className='mt-10'>
                <PrimaryButton title="Add to Cart" onClick={sendTocart} />
              </div>
            </div>
          </div>




        </div>
      ) : null}
    </div>
  )
}

export default ProductDetails