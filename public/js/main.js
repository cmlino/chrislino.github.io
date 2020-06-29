AOS.init();

tippy.setDefaultProps({
	delay: 50,
	content: 'Global content',
	trigger: 'mouseenter focus'
});

tippy('.spotify', {content: "Spotify Web API"});
tippy('.angularjs', {content: "AngularJS"});
tippy('.bootstrap', {content: "Bootstrap"});
tippy('.node', {content: "Node.js"});
tippy('.mongo', {content: "MongoDB"});
tippy('.react', {content: "React.js"});
tippy('.tensorflow', {content: "TensorFlow"});
tippy('.materialui', {content: "Material-UI"})
tippy('.fa-github', {delay: 250, content: "Github"});
tippy('.fa-linkedin', {delay: 250, content: "LinkedIn"});
tippy('.fa-envelope', {delay: 250, content: "gpeterson707@gmail.com"});
tippy('.fa-file', {delay: 250, content: "Resume"});