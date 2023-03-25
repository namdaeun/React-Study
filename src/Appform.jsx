import React, { useState } from 'react';

export default function Appform() {
    const [form, setForm] = useState({name: '', email: ''});

    const handleSubmit = (e) => {
        e.preventDefault(); // submit 버튼 눌렀을 때 refresh 방지
        console.log(form);  // 입력된 값 console에 출력
    }
    const handleChange = (e) => {
        const {name, value} = e.target;
        setForm({ ...form, [name]: value })
        // form에 있는 데이터는 유지하고
        // 현재 input이 변경되고 있는 이름의 key에 전달받은 value를 덮어씌움
    }
    return (
        <form onSubmit={handleSubmit}>
            <label htmlFor='name'>이름: </label>
            <input 
                type='text' 
                id='name' 
                name='name' 
                value={form.name}  // 상태값
                onChange={handleChange} // onChange가 발생할 때마다 상태 업데이트
            />
            <label htmlFor='email'>이메일: </label>
            <input 
                type='text' 
                id='email' 
                name='email' 
                value={form.email}
                onChange={handleChange}
            />
            <button>Submit</button>
        </form>
    );
}

