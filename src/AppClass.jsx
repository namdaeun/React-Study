// 리액트 컴포넌트 꼭 상속!
// 내부적 state는 멤버 변수에 객체를 할당하여 state로 구성
import React from 'react';
import Counter from './basic/components/Counter';

export default class AppClass extends React.Component {
  state = { count: 0 };

  onClick = () => { // 멤버 함수를 통해 클릭이 발생하면 어떻게 처리할 것인지
    this.setState({ count: this.state.count + 1 }); // count를 원하는 값으로 변경
  };

  componentDidMount() { // 컴포넌트가 처음 보여질 때
    console.log('컴포넌트가 마운트 되었음!');
  }

  componentWillUnmount() { // 컴포넌트가 사라질 때 
    console.log('컴포넌트가 곧 언마운트될 예정임!');
  }

  render() { // render : 원하는 UI - 상태 변경될 때마다 호출, UI 변경
    // class이기 때문에 원하는 값에 접근할 땐 this.state.원하는변수
    return (
      <div className='container'>
        <div className='banner'>
          Total Count: {this.state.count} {this.state.count > 10 ? '🔥' : '❄️'} 
        </div>
        <div className='counters'>
          <Counter total={this.state.count} onClick={this.onClick} />
          <Counter total={this.state.count} onClick={this.onClick} />
        </div>
      </div>
    );
  }
}
