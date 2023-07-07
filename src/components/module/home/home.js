import Certifications from '../certifications/Certifications'
import styled from 'styled-components'
import Welcome from '../welcomePage/Welcome'
import Skills from '../skills/Skills'
import Connect from '../connect/connect'

function Home() {
	return (
		<Wrapper>
			<main>
				<Welcome />
				<Skills />
				<Certifications />
				<Connect/>
			</main>
		</Wrapper>
	)
}

export default Home

const Wrapper = styled.section``
