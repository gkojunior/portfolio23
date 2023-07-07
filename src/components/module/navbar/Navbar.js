import React from 'react'
import styled from 'styled-components'
// import logo1 from '../../../assets/logo1.png'
import { FaBars } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import { links } from '../utils/constants'
import DarkMode from '../DarkMode/DarkMode'

const Navbar = () => {
	return (
		<NavContainer>
			<div className='nav-center'>
				<div className='nav-header'>
					{/* <Link to='/' className='logo'>
						
						<img src={logo1} alt='George Owusu' />
					</Link>	 */}
						<Link to='/' className='name'>
						
						George Owusu
					</Link>	
					
					
					<button type='button' className='nav-toggle'>
						<FaBars />
					</button>
				</div>
				<ul className='nav-links'>
					{links.map((link) => {
						const { id, text, url } = link
						return (
							<li key={id}>
								<Link to={url}>{text}</Link>
							</li>
						)
					})}
					<DarkMode />
				</ul>
			</div>
		</NavContainer>
	)
}

const NavContainer = styled.nav`
background:var(--body_background2);
position: fixed;
top: 0;
width:100%;
z-index:1;
padding:1em;
	align-items: center;
	justify-content: center;
	a {
		text-decoration: none;
	}
	a:hover {
	border-bottom: 2px solid brown		
	}
	ul {
		list-style: none;
	}
	.name{
		font-size: 1.5rem;
		color: var(--body_color_white);

	}
	.nav-center {
		width: 90vw;
		margin: 0 auto;
		max-width: var(--max-width);
	}
	.nav-header {
		display: flex;
		align-items: center;
		justify-content: space-between;
		img {
			width: 150px;
			margin-left: -10px;
		}
	}
	.nav-toggle {
		background: transparent;
		border: transparent;
		color: var(--body_color);
		cursor: pointer;
		jpeg {
			font-size: 2rem;
		}
	}
	.nav-links {
		display: none;
	}
	.cart-btn-wrapper {
		display: none;
	}
	@media (min-width: 992px) {
		.nav-toggle {
			display: none;
		}
		.nav-center {
			display: grid;
			grid-template-columns: auto 1fr auto;
			align-items: center;
		}
		.nav-links {
			display: flex;
			justify-content: center;
			li {
				margin: 0 0.5rem;
			}
			a {
				color: var(--body_color_brown);
				font-size: 1rem;
				text-transform: capitalize;
				letter-spacing: var(--spacing);
				padding: 1.5rem;
				&:hover {
					border-bottom: 2px solid var(--clr-brown-dark);
				}
			}
		}
		.cart-btn-wrapper {
			display: grid;
		}
	}
`

export default Navbar
