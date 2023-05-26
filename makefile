generate_cases:
	echo "X cases are generated and written to the file xxx_cases.json"
	tsc ./CaseGenerator.ts 
	node ./CaseGenerator.js 5 
	echo "Done!"
