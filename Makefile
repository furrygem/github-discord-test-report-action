update:
	ncc build
	git add .
	git commit -m "update"
	git tag $(TAG)
	git push -u origin $(TAG)
