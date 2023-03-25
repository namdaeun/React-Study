import React from 'react';

export default function AppWrap() {
    return (
        <div>
            <Navbar>
                <Avatar
                    image='https://mblogthumb-phinf.pstatic.net/MjAxOTAzMjhfMjY2/MDAxNTUzNzYxMTc2OTkw.9iYOi5inY6hQuj01WfFqCA7zUUaVI3pDB9F_JG2B2vcg.IYO-bdgich1tpiiMZOpZScfC_YTGzWmnMv7vQS-HJhAg.JPEG.topbody73/large.jpg?type=w800'
                    name='Thomas Bukovatz'
                    size={200}
                />
                <p>안녕하세요!</p>
            </Navbar>
            <Navbar>
                <p>안녕하세요!</p>
            </Navbar>
        </div>
    );
}

function Navbar({children}) {
    return <header style={{ backgroundColor: 'lightcyan' }}>{children}</header>;
}

function Avatar({ image, name, size }) {
    return (
        <div>
            <img
                src={image}
                alt={`${name}`}
                width={size}
                height={size}
                style={{ borderRadius: '50%' }}
            />
        </div>
    );
}