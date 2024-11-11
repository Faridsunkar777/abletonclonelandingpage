import React from 'react'


export default function Nav() {
  return (
    <nav>
        <div className='nav-left'>
            <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAXVBMVEUAAAD///8dHR0EBAQYGBgiIiLJycnp6enU1NTa2tr8/PwmJibv7+8WFhb5+fm/v7+zs7MSEhLNzc3i4uIPDw8sLCySkpKenp7CwsKHh4etra2hoaGvr6+Xl5e5ubkKqbc3AAADGUlEQVR4nO3b7XqbIACGYQSJiaipX63r2pz/YQ7RJKb7MbGdFvvcVy4XR1t4A0YwRggAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAIA7ddvYrVL3/1f3bV8yed4/uz+W1bgadU2oekOjlcswSaHcj93+HbJOQy+qc12T3pv2z6108pND+27duUVrl5j0jbhGmA7QSQ7113ZmFWqzV0NNn04PLHV9jLvDQP7K+tYwRGhaaaSW8diLrWmN1nIsN9qYVsfjL0jdlqXUtqSxZVranTm0/ZP9X2keX7XVEpbnKsnq7pd0HdW+Huqkrp5L1xL5WiV1fXg3rkzbsiw5vsgh7ssxyZI5aud42CqhqYsoSpPfY6Y6i6IieWtcuayyqIiSp9yVNXYvTbNL6fqwvGRpGs2Xncz1bLMqJYxtpn3YFD2TueZ0w55OXNlh7LVT1O8ehz1TecTrfzFtxdcczN4J+y6M0j6huiU8/zuhrlyz5yn6l9Fscjp8SCh8EsZV4TNIo7Qwa4f7TEI72MousxFn9aALmNR6k5Pi8lHaPD911WGuqru8levH+5hQzE9oO1GWsYxnnRBlnMdxXjZjjWEkXNTSyVJmPYtHqf/bvvoGCYVPH7rJ6vxqPm5Xs/w49Dm1qU2yjXUvHqVbtHaJxX1od3NtVyHz2PWFW1usPiv9zHGo37uTj8O5fLwYtEVCj1FqT4dnz7VF3c/awulDZWfeHvnS67w0nIR25n0qonkZ02F9FpkN8i0epbap+bGwq+OZHdhvizaw1VN+zrxG6XAchpNQifj5Uh09dJdm+4Reo1RoGc+T25WFlHnTbL8+FP99ThNYQu+3je3XFl5rfL+E6nphf/UTxg/rQ7H745D30vDPhx4JA53TMC8Nf23hkTDQ9SFr/PCv03gkDPRaG9dLw7/mLXb/uQWfPYX/+aHY/WfAfI4f/r0Y8xOKQO+n2es9UTu+r23/9yb+lPtL93yPsHiobo/3ed9q3fO9+q76/X7f4id8Z2Yy2d/l954AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAMB39we6Q1lzDz6udgAAAABJRU5ErkJggg==" alt="Ableton Logo" />
            <ul>
                <li>
                    <a href="#">Live</a>
                </li>
                <li>
                    <a href="#">Push</a>
                </li>
                <li>
                    <a href="#">Link</a>
                </li>
                <li>
                    <a href="#">Shop</a>
                </li>
                <li>
                    <a href="#">Packs</a>
                </li>
                <li>
                    <a href="#">Help</a>
                </li>
                <li>
                    <a href="#">More +</a>
                </li>
            </ul>
        </div>

        <div className="nav-right">
            <ul>
                <li><a href="#">Try Live for free</a></li>
                <li><a href="#">Account</a></li>
                <li><a href="#">Log out</a></li>
            </ul>
        </div>
    </nav>
  )
}
