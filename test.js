const requestModule = require('request');

const hook_url = "https://discord.com/api/webhooks/929333267260379136/N7aKfHXqRsRjTNktnJPjP3M2-2iVzvyYNvWLALiSzanwJ5bPOLGv9I1xCu58TyJUA5cs"

message = {
	
  "content": "GitHub Action!",
  "embeds": [
	{
	  "title": "GitHub action",
	  "description": `USERNAME triggered GitHub actions with \`ACTION\` in REPOSITORY\n	\`\`\`\nTEST_RESULTS\n\`\`\``,
	  "url": "https://github.com/furrygem",
	  "color": 16448250,
	  "author": {
		"name": "USERNAME",
		"url": "https://github.com/USERNAME",
		"icon_url": "https://github.com/USERNAME.png"
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
