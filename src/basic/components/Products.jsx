import React, { useEffect, useState } from 'react';

export default function Products() {
  const [products, setProducts] = useState([]);
  const [checked, setChecked] = useState(false);
  const handleChange = () => setChecked((prev) => !prev);
  useEffect(() => { // useEffect 첫 번쨰 인자 : 콜백함수
    fetch(`data/${checked ? 'sale_' : ''}products.json`)
      .then((res) => res.json())
      .then((data) => {
        console.log('🔥뜨끈한 데이터를 네트워크에서 받아옴');
        setProducts(data);
      });
    return () => { // 컴포넌트가 unmount될 때
      console.log('🧹 깨끗하게 청소하는 일들을 합니다.');
    };
  }, [checked]);  // checked가 변경될 때마다 useEffect가 실행되어야 한다고 알려줌

  return (
    <>
    <input id="checkbox" type="checkbox" value={checked} onChange={handleChange} />
    <label htmlFor='checkbox'>Show Only 🔥 Sale</label>
      <ul>
        {products.map((product) => (
          <li key={product.id}>
            <article>
              <h3>{product.name}</h3>
              <p>{product.price}</p>
            </article>
          </li>
        ))}
      </ul>
    </>
  );
}

