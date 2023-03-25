export default function personReducer(person, action) {
    // 전달받은 person이라는 기존의 객체를 업데이트/삭제/더했는지 액션에 따라
    // 새로운 person의 객체를 만들어서 리턴하는 함수
    switch(action.type) {
        case 'updated': {
            const {prev, current} = action;
            // const prev = action.prev;
            // const current action.current; 와 같은 말 
            return {
                ...person, 
                mentors: person.mentors.map((mentor) => {
                    if (mentor.name === prev) {
                        return { ...mentor, name: current }; // 변경해야 하는 이름인 경우 덮어씌움
                    }
                    return mentor;  // 변경하고자 하는 값이 아닌 경우 그냥 반환
                }),
            };
        }
        case 'added': {
            const { name, title } = action;
            return {
                ...person, 
                mentors: [...person.mentors, {name, title}],
            };
        }
        case 'deleted': {
            const { name, title } = action;
            return {
                ...person, 
                mentors: person.mentors.filter((mentor) => mentor.name !== name), 
            };
        }
        default: {
            throw Error(`알수 없는 액션 타입이다: ${action.type}`);
        }
    }
}