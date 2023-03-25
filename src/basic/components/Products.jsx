import React, { useState } from 'react';
import useProducts from '../../hooks/use-products';

export default function Products() {
  const [checked, setChecked] = useState(false);
  const [loading, error, products] = useProducts({ salesOnly: checked }); // 정보 가지고 옴
  // salesOnly인지 아닌지는 checked값으로 가져옴
  const handleChange = () => setChecked((prev) => !prev);

  if (loading) return <p className='loader'></p> // 로딩 중인 경우
  if (error) return <p>{error}</p> // 에러난 경우 에러 내용 출력
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

