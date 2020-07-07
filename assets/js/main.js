function getContent(hashId, callback) {
	var pages = {
		about: '<h2>Fuad Agil<br><span>Web Developer</span></h2><br><p>Years of experience in web development especially PHP and JS. Highly reusable and clean written code. Willing for remote or onsite(Pekanbaru) project.</p><p> <i class="fa fa-fw fa-map-marker"></i>Pekanbaru, ID</p><br><div class="social"><a href="https://github.com/far1023" target="_blank" title="Fork me"> <i class="fab fa-fw fa-github"></i></a>&nbsp;<a href="https://twitter.com/fuadagil" target="_blank" title="Follow me"> <i class="fab fa-fw fa-twitter"></i></a>&nbsp;<a href="https://linkedin.com/in/fuadagilr" target="_blank" title="Add Connection"> <i class="fab fa-fw fa-linkedin-in"></i></a>&nbsp;<a href="mailto: fuadagil@gmail.com" target="_blank" title="Send email"> <i class="fa fa-fw fa-envelope"></i></a>&nbsp;</div>',
		tech: '<div class="tech"><i class="fab fa-php fa-4x fa-fw"></i><i class="fab fa-js fa-4x fa-fw"></i><i class="fab fa-bootstrap fa-4x fa-fw"></i></div>'
	};
	callback(pages[hashId]);
}

function load() {
	hashId = location.hash.substr(1);

	getContent(hashId, function (content) {
		$('#app').html(content);
	});
}

if(!location.hash) {
	location.hash = "about";
}

load();
window.addEventListener("hashchange", load)