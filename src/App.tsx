import './App.css'
import Layout from './components/Layout'

const App = () => {
    return (
		<Layout>
			<div className='hero container'>
				<div className='hero-left'>
					<h1>Unlock the prestige of<br/> <span>IIT Kanpur</span> with <span>IFACET</span></h1>
					<p>Empowering Lifelong Learning in Diverse Domains through Innovative Delivery Methods and Expert Consulting Services.</p>
					<div className='quote-wrap'>
						<div className='quote-img'>
							<img src="/quote-img.svg" alt="quote-img" />
						</div>
						<div>
							<i>"I was blown away by the level of expertise and professionalism displayed by the team at ABC Company. They truly went above and beyond to help me achieve my goals and I would recommend them to anyone without hesitation."</i>
							<br />
							<b>Alok Sharma  |  Age 28 |  Software engineer</b>
						</div>
					</div>
					<button>Start upskilling journey now</button>
				</div>
				<div className='hero-right'>
					<img src="/hero-img.svg" alt="hero-img" />
				</div>
			</div>
			<div className='about-wrap'>
				<div className='about container'>
					<h2>About IFACET</h2>
					<p>IIT KANPUR has established the Foundation for Advanced Continuing Education and Training (IFACET) as a company to oversee and manage a range of activities related to ongoing education. These activities include providing certification programs, seminars, and conferences, utilizing a variety of delivery methods including online, offline, cyber-physical, and blended modes, in diverse domains such as engineering, sciences, humanities, medical sciences, economics, management, and arts.<br/>IFACET also offers training and consulting services to ministries, industries, associations, and institutions.</p>
					<div className='about-img-wrap'>
						<div className='about-box'>
							<img src="/about-1.svg" alt="about-1" />
							<div className='about-box-bottom'>
								Training
							</div>
						</div>
						<div className='about-box'>
							<img src="/about-2.svg" alt="about-2" />
							<div className='about-box-bottom'>Consulting</div>
						</div>
						<div className='about-box'>
							<img src="/about-3.svg" alt="about-3" />
							<div className='about-box-bottom'>Innovation & Entrepreneurship</div>
						</div>
						<div className='about-box'>
							<img src="/about-4.svg" alt="about-4" />
							<div className='about-box-bottom'>EMasters</div>
						</div>
					</div>
				</div>
			</div>
			<div className='course-section-wrap'>
				<div className='course-section container'>
					<h1><span>IFACET</span><br/>course for everyone</h1>
					<p>Emerging technologies are paving the way for innovation in industry irrespective of their nature. So, if you're an aspiring leader of tomorrow, upskill yourself under the expert guidance of IIT KANPUR faculty members!</p>
					<div className='course-tabs-wrap'>
						<div className='course-tabs'>
							<div>For Students</div>
							<div>For Entrepreneurs</div>
							<div>For Faculties</div>
							<div>For Organizations</div>
						</div>
						<div className='view-all'>
							<div>View all course</div>
							<div><img src='/arrow.svg' alt='arrow'/></div>
						</div>
					</div>
					<div className='course-cards'>
						<div className='course-card'>
							<img src="/course-1.svg" alt="course-1" />
							<div className='course-card-bottom'>
								<h3>Advance Excel with Data Visualization</h3>
								<p>1000+ enrollment<span>|</span>Online Live Mode-120 Hours </p>
								<button>View course</button>
							</div>
						</div>
						<div className='course-card'>
							<img src="/course-2.svg" alt="course-2" />
							<div className='course-card-bottom'>
								<h3>Cloud computing using AWS</h3>
								<p>1000+ enrollment<span>|</span>Online Live Mode-120 Hours </p>
								<button>View course</button>
							</div>
						</div>
					</div>
				</div>
				<div className='career-potential container'>
					<h1>Unlock your career potential<br/>with IFACET courses</h1>
				</div>
				<div className='career-potential-cards-wrap'>
					<div className='career-potential-cards container'>
						<div className='career-potential-card'>
							<img src="/career-1.svg" alt="career-1" />
							<div className='career-potential-card-bottom'>
								<h4>Training management courses</h4>
								<div className='view-all'>
									<div>Explore more</div>
									<div><img src='/arrow-small.svg' alt='arrow'/></div>
								</div>
							</div>
						</div>
						<div className='career-potential-card'>
							<img src="/career-2.svg" alt="career-2" />
							<div className='career-potential-card-bottom'>
								<h4>Consulting/ Operations</h4>
								<div className='view-all'>
									<div>Explore more</div>
									<div><img src='/arrow-small.svg' alt='arrow'/></div>
								</div>
							</div>
						</div>
						<div className='career-potential-card'>
							<img src="/career-3.svg" alt="career-3" />
							<div className='career-potential-card-bottom'>
								<h4>SBERTC</h4>
								<div className='view-all'>
									<div>Explore more</div>
									<div><img src='/arrow-small.svg' alt='arrow'/></div>
								</div>
							</div>
						</div>
						<div className='career-potential-card'>
							<img src="/career-4.svg" alt="career-4" />
							<div className='career-potential-card-bottom'>
								<h4>IMOC</h4>
								<div className='view-all'>
									<div>Explore more</div>
									<div><img src='/arrow-small.svg' alt='arrow'/></div>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div className='partners'>
					<h1>Our partners</h1>
					<div className='partner-tabs'>
						<div>Government Institutions</div>
						<div>Corporate partners</div>
					</div>
					<div className='partner-img-wrap'>
						<img src="/partner-1.svg" alt="partner-1" />
						<img src="/partner-2.svg" alt="partner-2" />
						<img src="/partner-3.svg" alt="partner-3" />
					</div>
					<div className='partner-banner'>
						<p>Discover your untapped potential with us as we firmly believe in your abilities. Unleash your true potential by joining us on this transformative journey.</p>
						<button>Start upskilling journey now</button>
					</div>
				</div>
			</div>
		</Layout>
    )
}

export default App
