import React from 'react'
import styled from 'styled-components'
import Typed from 'typed.js'

function Certification() {
	// Create reference to store the DOM element containing the animation
	const el = React.useRef(null)

	React.useEffect(() => {
		const typed = new Typed(el.current, {
			strings: ['Node.JS', 'Express', 'React.JS', 'HTML', 'CSS', 'JavaScript'],
			typeSpeed: 150,
			backSpeed: 150,
			loop: true,
		})

		return () => {
			// Destroy Typed instance during cleanup to stop animation
			typed.destroy()
		}
	}, [])

	return (
		<Wrapper >
			<div className='App'>
				<h3>I have Certification in <span ref={el} /></h3>
			</div>
		</Wrapper>
	)
}

export default Certification

const Wrapper = styled.section`

	.container {		
		color: black;
		width: 100%;
		display: flex;
		align-items: center;
		justify-contact: center;
	}
	h3 {
		color:black;
	}
`
