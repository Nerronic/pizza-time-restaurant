import React from 'react'

function Nav() {
const links =[ {
    id: 1, text: 'Home', url: '/'

},{
    id: 2, text: 'Menu', url: '/menu'

},{
    id: 3, text: 'Login', url: '/Login'

}]


  return (
    <div className='nav'>
        <ul>
            {links.map(link => (
                <li key={link.id}>
                    <a href={link.url}></a>
                </li>
            ))}

        </ul>
    </div>
  )
}

export default Nav