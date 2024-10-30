// Import images
import Image1 from '../images/web1.png';
import Image2 from '../images/web2.png';
import Image3 from '../images/web3.png';
import Image4 from '../images/ui-design.png';
import Image5 from '../images/ui2-design.png';
import Image6 from '../images/ui3-design.png';
// Import icons
import {
	FiFacebook,
	FiInstagram,
	FiLinkedin,
	FiTwitter,
	FiYoutube,
} from 'react-icons/fi';

export const singleProjectData = {
	ProjectHeader: {
		title: 'Project Management UI',
		publishDate: 'oct 26, 2024',
		tags: 'UI / Frontend',
	},
	ProjectImages: [
		{
			id: 1,
			title: ' Project Management UI',
			img: Image1,
		},
		{
			id: 2,
			title: ' Project',
			img: Image2,
		},
		{
			id: 3,
			title: ' Project Management UI',
			img: Image3,
		},
	],
	ProjectInfo: {
		ClientHeading: 'About Client',
		CompanyInfo: [
			{
				id: 1,
				title: 'Amon it solution',
				details: 'Software company',
			},
			{
				id: 2,
				title: 'Services',
				details: 'UI Design & Frontend Development',
			},
			{
				id: 3,
				title: 'Website',
				details: 'https://amonict.com/',
			},
			{
				id: 4,
				title: 'Phone',
				details: '+251 11 154 2690',
			},
		],
		ObjectivesHeading: 'Objective',
		ObjectivesDetails:
			'For gained valuable experience, learning extensively from both the leadership team and my colleagues',
		Technologies: [
			{
				title: 'Tools & Technologies',
				techs: [
					'HTML',
					'CSS',
					'JavaScript',
					'Vue.js',
					'react',
					'node js',
					'TailwindCSS',
					'AdobeXD',
					'Figma'
				],
			},
		],
		ProjectDetailsHeading: 'Experice',
		ProjectDetails: [
			{
				id: 1,
				details:
					'I had the opportunity to work at Amon IT Solutions for six months as a UI designer and front-end developer. During this time, I gained valuable experience, learning extensively from both the leadership team and my colleagues. This role allowed me to expand my design and development skills significantly, and I am grateful for the knowledge and practical expertise I acquired while collaborating with such a talented team.',
			},
			{
				id: 2,
				details:
					'',
			},
			{
				id: 3,
				details:
					'',
			},
			{
				id: 4,
				details:
					'',
			},
		],
		SocialSharingHeading: 'Share This',
		SocialSharing: [
			{
				id: 1,
				name: 'Twitter',
				icon: <FiTwitter />,
				url: 'https://x.com/NigusieEde76633',
			},
			
			{
				id: 2,
				name: 'Facebook',
				icon: <FiFacebook />,
				url: 'https://www.facebook.com/profile.php?id=100070463155478',
			},
			{
				id: 3,
				name: 'LinkedIn',
				icon: <FiLinkedin />,
				url: 'https://www.linkedin.com/in/eden-nigusie-03132325b/',
			},
			
		],
	},
	RelatedProject: {
		title: 'Related Projects',
		Projects: [
			{
				id: 1,
				title: 'web application ',
				img: Image4,
			},
			{
				id: 2,
				title: 'Web Application',
				img: Image5,
			},
			{
				id: 3,
				title: 'UI Design',
				img: Image6,
			},
			{
				id: 4,
				title: '  UI Design ',
				img: Image4,
			},
		],
	},
};
