const core = require('@actions/core');
// const github = require('@actions/github');
const requestModule = require('request');

try {
	githubContext = JSON.parse(core.getInput('github-context'));
	results = core.getInput('test-results');
	hook_url = core.getInput('hook-url');
	user = githubContext.actor;
	githubServer = githubContext.server_url;
	repositoryUrl = `${githubServer}/${githubContext.repository}`;
	userPFP = `${githubServer}/${user}.png`;

	message = {
		
	  "content": "GitHub Action!",
	  "embeds": [
		{
		  "title": "GitHub action",
		  "description": `${user} triggered GitHub action with \`${githubContext.event_name.toUpperCase()}\` in ${repositoryUrl}\n	\`\`\`\n${results}\n\`\`\``,
		  "url": `${repositoryUrl}/actions/runs/${githubContext.run_id}`,
		  "color": 16448250,
		  "author": {
			"name": user,
			"url": userPFP,
			"icon_url": `${githubServer}/${user}.png`
		  },
		  "footer": {
			"text": "GitHub Actions Discord Notification",
			"icon_url": "https://github.com/furrygem.png"
		  }
		}
	  ]
	};
	requestModule.post(
		{
			headers: {'content-type': 'application/json'},
			url: hook_url,
			body: JSON.stringify(message),
		},
		(err, res, b) => {
			console.log(res.statusCode)
		}
	)


} catch (error) {
	core.setFailed(error.message);
}
