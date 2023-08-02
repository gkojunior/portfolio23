import React from 'react'
import styled from 'styled-components'
import Certification from './CertificationMessage'
import { AiFillFacebook, AiFillGithub, AiFillLinkedin } from 'react-icons/ai'
import { BsInstagram } from 'react-icons/bs'

const Welcome = () => {
	return (
		<Wrapper className='body'>
			<article className='content'>
				<div>
					<h1 className='welcomeMessage'>Welcome! I'm George,</h1>
					<h2 className='welcomeMessage'>Software Engineer based In Virginia</h2>
				</div>
				<div>
					<Certification />
					<footer>
						<nav className='link'>
							<a className='link' href='/#'>
								<AiFillLinkedin />
							</a>

							<a className='link' href='/#'>
								<AiFillGithub />
							</a>
							<a className='link' href='/#'>
								<AiFillFacebook />
							</a>
							<a className='link' href='/#'>
								<BsInstagram />
							</a>
						</nav>
					</footer>
				</div>
			</article>
		</Wrapper>
	)
}

const Wrapper = styled.section`
	text-align: center;
	justify-content: center;
	h1 {
		padding-top: 9.5em;
	}
	height: 100vh;
	.link {
		font-size: 2rem;
		padding: 5px 20px;
		color: white;
	}
`

export default Welcome
