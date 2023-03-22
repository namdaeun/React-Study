import './App.css';
import Profile from './components/Profile';

function AppProfile() {
  return (
    <>
      <Profile 
        image='https://mblogthumb-phinf.pstatic.net/MjAxOTAzMjhfMjY2/MDAxNTUzNzYxMTc2OTkw.9iYOi5inY6hQuj01WfFqCA7zUUaVI3pDB9F_JG2B2vcg.IYO-bdgich1tpiiMZOpZScfC_YTGzWmnMv7vQS-HJhAg.JPEG.topbody73/large.jpg?type=w800'
        name='Thomas Bukovatz'
        title='프론트엔드 개발자'
        isNew={true}
      />
      <Profile 
        image='https://yourcherry.co.kr/uploads/202111/d4eca7038ec1469ed64840083e9944f6.png'
        name='Anna Young'
        title='백앤드 개발자'
      />
      <Profile 
        image='https://img.insight.co.kr/static/2018/02/05/700/ht5s9454104ze2fe9q65.jpg'
        name='Boh Yu'
        title='프론트엔드 개발자'
      />

    </>
  )
}
export default AppProfile;