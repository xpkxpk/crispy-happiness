import React from 'react'
import Link from 'gatsby-link'

const IndexPage = () => (
<div>
	<div className="Hero">
		<div className="HeroGroup">
			<h1>Everything you need for a smooth transition to solar energy.</h1>
			<h4>SolarWise wil help you:</h4>
			<ul>
				<li>Find the most efficient solutions and products mix</li>
				<li>Save money and reduce your environmental footprint</li>
			</ul>
			<Link to="/page-2/">Button</Link>
		</div>
	</div>
</div>	
  
)

export default IndexPage
