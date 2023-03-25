// 훅의 함수 이름은 use로 시작
// 다른 UI 컴포넌트는 UI를 반환하는 반면,
// 커스텀 훅은 외부 사람들과 공유하고 싶은 데이터를 리턴

export default function useProducts({salesOnly}) {
    const [products, setProducts] = useState([]); // 데이터를 받아왔는지
    const [loading, setLoading] = useState(false); // 처음은 로딩이 안된 상태
    const [error, setError] = useState(undefined); // 처음은 에러 안 나온 상태

    useEffect(() => { // useEffect 첫 번쨰 인자 : 콜백함수
        setLoading(true); // 네트워킹 요청 시작
        setError(undefined); // setError 초기화
        fetch(`data/${checked ? 'sale_' : ''}producs.json`)
          .then((res) => res.json())
          .then((data) => {
            console.log('🔥뜨끈한 데이터를 네트워크에서 받아옴');
            setProducts(data);
          }).catch(error => setError('에러 발생'))
          .finally(() => setLoading(false)); // 네트워크 요청 끝
        return () => { // 컴포넌트가 unmount될 때
          console.log('🧹 깨끗하게 청소하는 일들을 합니다.');
        };
      }, [salesOnly]);  // checked가 변경될 때마다 useEffect가 실행되어야 한다고 알려줌

      return [loading, error, products]; // 반환 값
}   