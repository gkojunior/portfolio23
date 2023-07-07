import { projects } from '../utils/data'
import styled from 'styled-components'
import { AiFillGithub } from 'react-icons/ai'

const Projects = () => {
	return (
		<Wrapper>
			<div className='container'>
			<div className='section-title'>
					<h1>Projects</h1>
					<div className='underline'></div>
				</div>
				<div className='projectContainer'>
					{projects.map((projects) => {
						const { id, url, images, title, description } = projects
						return (
							<div className='card-container'key={id}>
								<div className='image-container' >
									<img src={images} alt='person' />
								</div>
								<div className='card-content'>
									<div className='card-title'>
										<h5>{title}</h5>
									</div>
									<div className='card-body'>
										<p className='desc'>{description}</p>
									</div>
								</div>

								<div className='btn'>
									<button >
										<a href={url} >View more</a>
									</button>
								</div>
							</div>
						)
					})}
				</div>

				<div className='message'>
					<h4>
						More Projects can be found on my
						<a href='https://github.com/gkojunior'>
							<AiFillGithub />
						</a>
					</h4>
				</div>
			</div>
		</Wrapper>
	)
}

const Wrapper = styled.section`
	margin:10em;
	.section-title {
		margin-bottom: 4rem;
		text-align: center;
	}
	.underline {
		width: 6rem;
		height: 0.25rem;
		background: #49a6e9;
		background: var(--clr-brown);
		margin-left: auto;
		margin-right: auto;
	}
	p{
		color: var(--body_color_brown);
	}
	.card-container {
		width: 250px;
		height:
		overflow: hidden;
		box-shadow: 0px 0px 15px -5px;
		transition: 0.3s;
		animation: ease-in;
	}
	.card-container:hover {
		transform: scale(1.1);
		box-shadow: 0px 0px 15px 0px;
	}
	image-container img {
		overflow: hidden;
		height: 200px;
	}
	img{
		width:250px;
		height:250px;
	}
	.card-content{
		margin:1rem;
		margin-top:.5rem;
	}
	.card-title {
		margin-bottom:.5rem;
		color: var(--body_color_white);
	}
	.btn{
		display:flex;
		justify-content:center;
		border:none;

	}
	.btn button{
		padding:.5rem;
		background-color:white;
		border:none;
		transition:0.2s; 
		margin-bottom:0.5rem;
		border-radius:3px;
	}
	.btn button:hover{
		background:var(--clr-brown-dark);
		transform: scale()
	}
	a{
		text-transform:uppercase;
		color: brown;
		text-decoration:none;
		font-weight:bold;
	}
	.projectContainer{
		display:flex;
		gap:50px;
		flex-wrap:wrap;
	}
	.message{
		margin-top:50px;
		justify-content:center;		
	}
`

export default Projects
