// Review Pics
import Dad from '../../../assets/CustReviews/dad.jpeg'
import Shaneka from '../../../assets/CustReviews/neek.jpeg'
import Mom from '../../../assets/mom.jpeg'
import Imani from '../../../assets/CustReviews/imani.jpeg'
import Kyrie from '../../../assets/CustReviews/kyrie.jpeg'

// Projects Pics
import Nursery from '../../../assets/projectPics/p2.jpg'
import FamilyApp from '../../../assets/projectPics/p4.jpg'
import HackerStories from '../../../assets/projectPics/p5.jpg'
import Volunteer from '../../../assets/projectPics/p6.jpg'

export const people = [
	{
		id: 1,
		name: 'Shaneka',
		title: 'Wife',
		image: Shaneka,
		quote: "I will not be the same person I am today without by wife my bestfriend",
	},
	{
		id: 2,
		name: 'Mom',
		title: 'Mom',
		image: Mom,
		quote: "My mom and I have been through thick and thin I would be here today if it wasn't for my mom .",
	},
	{
		id: 3,
		name: 'Dad',
		title: 'Dad',
		image: Dad,
		quote: "I will not be the man I am today without my father's wisdom. Im blessed to have a father like him",
	},
	{
		id: 4,
		name: 'Imani',
		title: 'Daughter',
		image: Imani,
		quote: 'My daughter is so smart, funny, and beautiful. She give me so much love, God has blessed me so much',
	},
	{
		id: 5,
		name: 'Kyrie',
		title: 'Son',
		image: Kyrie,
		quote: "I truly thank God I have a son like my little man, he's strong, intelligent, and handsome.",
	},
]
export const projects = [
	{
		id: 1,
		url: '',
		images: Nursery,
		title: 'Nursery Finds',
		description:
			'(Node.JS/React) This E-Commerce app allows user to create a post to sell their baby products.'
	},
	{
		id: 2,
		url: 'https://family-tasks-list-1.onrender.com',
		images: FamilyApp,
		title: 'Family Task',
		description:
			'(Node.JS) I created this Family oriented to-do application using Node.js, HTML, CSS, and JavaScript.',
	},
	{
		id: 4,
		url: 'https://github.com/gkojunior/hacker-stories',
		images: HackerStories,
		title: 'Hacker Stories',
		description:
			'(React) This is the first React App I created with Code the Dream following the Road to React Hand book.',
	},
	{
		id: 3,
		url: 'https://github.com/gkojunior/food-order-app',
		images: Volunteer,
		title: 'Volunteer App',
		description:
			'(React/Node.JS) This application allows user to create a job post for anyone looking to volunteer for a quick job.',
	},
]
